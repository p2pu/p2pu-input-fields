const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

module.exports = () => {

  let config = {
    entry: {
      index: path.join(__dirname, "src/index.js"),
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "build.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: null
            },
          },
          exclude: /node_modules/
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  autoprefixer()
                ],
                sourceMap: true,
              },
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "build.css",
      })
    ],
    resolve: {
      extensions: [".js", ".jsx", ".scss", ".css"]
    },
    devServer: {
      port: 3003
    }
  };

  return config;

};
