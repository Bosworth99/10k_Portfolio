// imports
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

// paths
var rootPath = path.resolve(__dirname, 'client', 'src');
var buildPath = path.resolve(__dirname, 'public', 'dist');
var contentPath = path.resolve(__dirname, 'public', 'dist');
var nodeModPath = path.resolve(__dirname, 'node_modules');
var entryFile = path.resolve( rootPath, 'index.jsx');

// configger the almighty webpack
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        entryFile
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: rootPath
    },
    output: {
        path: buildPath,
        publicPath: '/assets/',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModPath],
                loader: 'react-hot!babel'
            }, {
                test: /\.s?css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=/images/[name].[ext]'
            }
        ]
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
