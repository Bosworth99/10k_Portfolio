'use strict';

const isProduction = process.env.NODE_ENV === 'production';

////////////////////////////////////////////////////////////////////////////////
// HAPI
////////////////////////////////////////////////////////////////////////////////

const Hapi = require('hapi');
const Good = require('good');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({port:3000});

server.register(Inert, (err)=>{

    server.route({
        method : 'GET',
        path : '/api/portfolio',
        handler : (request, reply)=>{
            reply.file('./data/portfolio.json');
        }
    });

    server.route({
        method : 'GET',
        path : '/',
        handler : (request, reply)=>{
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

////////////////////////////////////////////////////////////////////////////////
// HRM
////////////////////////////////////////////////////////////////////////////////

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../../webpack.config.js')

if (!isProduction){
    new WebpackDevServer(webpack(config), {
        hot:true,
        historyApiFallback : true,
        proxy : {
            "/api/*" : 'http://localhost:3000'
        },
        quiet : false,
        stats : {colors : true}
    }).listen(3001, 'localhost', function(err, result){
        if (err){
            console.log(err);
        }
        console.log('WebpackDevServer[localhost::3001]')
    });
}
