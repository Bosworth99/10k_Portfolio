// imports
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const path = require('path');

// paths
const rootPath = path.resolve(__dirname, 'client', 'src');
const buildPath = path.resolve(__dirname, 'public', 'dist');
const contentPath = path.resolve(__dirname, 'public', 'dist');
const nodeModPath = path.resolve(__dirname, 'node_modules');
const entryFile = path.resolve(rootPath, 'index.jsx');

// configger the almighty webpack
const config = {
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
        publicPath: './dist/',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [nodeModPath],
                loader: 'react-hot!babel',
                include: rootPath
            }, {
                test: /\.s?css$/,
                loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
                include: rootPath
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=/images/[name].[ext]',
                include: rootPath
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

module.exports = validate(config);

// loaders: [
//     'style?sourceMap',
//     'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
//     'resolve-url',
//     'sass?sourceMap'
// ]
