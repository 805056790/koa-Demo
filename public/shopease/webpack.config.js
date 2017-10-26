/**
 * Created by panca on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [path.resolve(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.svg/, loader: 'svg-url-loader'},
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: []
};