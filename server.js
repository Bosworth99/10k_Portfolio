'use strict';

const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({port:3000});

server.route({
    method : 'GET',
    path : '/',
    handler : (request, reply)=>{
        reply('<h1>10k_Portfolio!</h1>');
    }
});

server.register(Inert, (err)=>{

    server.route({
        method : 'GET',
        path : '/index',
        handler : (request, reply)=>{
            reply.file('./public/index.html');
        }
    });

});

server.register({
    register : Good,
    options : {
        reporters : {
            console: [{
                module : 'good-squeeze',
                name : 'Squeeze',
                args : [{
                    response : '*',
                    log : '*'
                }]
            },{
                module : 'good-console',
            },
            'stdout'
            ]
        }
    }
}, (err)=>{
    if (err){
        throw err;
    }
    server.start((err)=>{
        if (err){
            server.log('info', 'Server running at:' + server.info.url);
        }
    });
});
