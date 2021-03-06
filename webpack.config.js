// imports
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator');
const path = require('path');

// paths
const rootPath = path.resolve(__dirname, 'client', 'src');

// configger the almighty webpack
const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    path.resolve(rootPath, 'index.jsx')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],

    root: rootPath
  },
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  module: {
    loaders: [
      // build js
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'react-hot!babel',
        include: rootPath
      },
      // fonts and svg
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      },
      // images
      {
        test: /\.(ico|jpe?g|png|gif)$/,
        loader: 'file?name=/images/[name].[ext]',
        include: rootPath
      },
      // build sass and extract
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'),
        include: rootPath
      }
    ]
  },
  devtool: '#source-map',
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = validate(config);
