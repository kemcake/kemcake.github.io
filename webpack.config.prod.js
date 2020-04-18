/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var packager = require('./package.json');

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: './app/js/main'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    alias: {
      images: path.join(__dirname, '/app/assets/images')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      use: [
        {
          options: {
            name: '[hash].[ext]',
            outputPath: 'fonts/'
          }
        }
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'file?name=images/[hash].[ext]'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production"),
         BABEL_ENV: JSON.stringify("production")
       }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/htdocs/index.html',
      title: packager.title,
      description: packager.description
    }),
    new ExtractTextPlugin('[name].css')
  ]
};
