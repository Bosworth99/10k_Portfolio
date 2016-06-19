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
        reply('<h1 style="color:red; font-size:36px;">10k Portfolio</h1>');
    }
});

server.route({
    method : 'GET',
    path : '/data',
    handler : (request, reply)=>{
        // get static JSON in here
        let d = {
            '10k' : 'portfolio'
        }
        reply(d);
    }
});

server.register(Inert, (err)=>{
    server.route({
        method : 'GET',
        path : '/index',
        handler : (request, reply)=>{
            reply.file('./client/public/index.html');
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
