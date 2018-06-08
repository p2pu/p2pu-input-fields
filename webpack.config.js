var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var env = process.env.NODE_ENV;

const reactBuild = {
  name: 'build',
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=env&presets[]=react&presets[]=stage-2'
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new PeerDepsExternalsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.scss']
  },
};


module.exports = [reactBuild]
