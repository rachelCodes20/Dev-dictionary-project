const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development', 
  output: { 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    proxy: {
        '/':{
          target: 'http://localhost:3000/',
          secure: false,
          changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test:/.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
    },
      { 
        test: /\.css$/, 
        exclude: /node-modules/,
        use: ['style-loader', 'css-loader'] 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ]
};