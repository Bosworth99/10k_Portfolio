var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public');
var entryPath = path.resolve(__dirname, 'client', 'src', 'index.jsx');
var contentPath = path.resolve(__dirname, 'public', 'dist');
var nodeModPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry : [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        entryPath
    ],

    module : {
        loaders : [{
            test : /\.jsx?$/,
            exclude : [nodeModPath],
            loader : 'react-hot!babel'
        },{
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }]
    },

    resolve : {
        extensions : ['', '.js', '.jsx'],
        root : path.resolve(__dirname, 'client', 'src')
    },

    output : {
        path : buildPath,
        publicPath : '/',
        filename : 'bundle.js'
    },

    devServer : {
        contentBase : contentPath,
        hot : true
    },

    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
