// set some stuff
const isProduction = false; // process.env.NODE_ENV === 'production';

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
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public',
        listing: true
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/work/{itemId?}',
    handler: (request, reply) => {
      reply.file('./public/index.html');
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

// Dev server / HMR
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');
const compiler = webpack(config);

new WebpackDevServer(compiler, {
  port: 3001,
  publicPath: '/dist/',
  contentBase: '/dist/',
  historyApiFallback: true,
  inline: true,
  hot: false,
  quiet: false,
  stats: { colors: true },
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(3001, 'localhost', (err, result) => {
  if (err){
    console.log(err);
  }
  console.log('WebpackDevServer[localhost::3001]');
});
