var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var entryPath = path.resolve(__dirname, 'client', 'src', 'index.jsx');
var contentPath = path.resolve(__dirname, 'public', 'dist');
var nodeModPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        entryPath
    ],

    module: {
        loaders : [{
            test: /\.jsx?$/,
            exclude: [nodeModPath],
            loader: 'react-hot!babel'
        },{
            test: /\.scss$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'resolve-url',
                'sass?sourceMap'
            ]
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve(__dirname, 'client', 'src')
    },

    output: {
        path: buildPath,
        publicPath: '/dist',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },

    devtool: '#source-map',

    devServer: {
        contentBase: contentPath,
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css')
    ]

};
