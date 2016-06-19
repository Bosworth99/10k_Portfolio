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
            loaders : ["react-hot-loader", "babel-loader"]
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
        publicPath : '/dist/',
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
