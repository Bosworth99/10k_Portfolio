// set some stuff
const isProduction = process.env.NODE_ENV === 'production';

// HAPI Backend server
const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(Inert, (err) => {

  server.route({
    method: 'GET',
    path: '/api/portfolio',
    handler: (request, reply) => {
      reply.file('./data/portfolio.json');
    }
  });

  server.route({
    method: 'GET',
    path: '/api/images',
    handler: (request, reply) => {
      reply.file('./data/images.json');
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/work',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        listing: true
      }
    }
  });

  if (err) {
    throw err;
  }
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      }, {
        module: 'good-console',
      },
      'stdout'
      ]
    }
  }
}, (err) => {
  if (err) {
    throw err;
  }
  server.start(() => {
    if (err) {
      server.log('info', 'Server running at:' + server.info.url);
    }
  });
});
