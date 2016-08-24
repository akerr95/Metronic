'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'public/js/Components/main.js')
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.temp.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json'
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less'
    }
    ]
  }
};
