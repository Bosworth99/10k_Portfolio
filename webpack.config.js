var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var entryPath = path.resolve(__dirname, 'client', 'src', 'index.jsx');
var nodeModPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry : [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        entryPath
    ],

    module : {
        loaders : [{
            test : /\.jsx?$/,
            exclude : [nodeModPath],
            loaders : ["react-hot", "babel-loader"]
        }
        // ,{
        //     test : /\.css$/,
        //     loader : [style!css]
        // }
        ]
    },

    resolve : {
        extensions : ['', '.js', '.jsx']
    },

    output : {
        path : buildPath,
        publicPath : '/build/',
        filename : 'bundle.js'
    },

    devServer : {
        contentBase : './public',
        hot : true
    },

    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]

};
