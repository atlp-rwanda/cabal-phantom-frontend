const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require("ip");
const webpack = require('webpack');
const hostname = ip.address() || 'localhost';

module.exports = {
   mode: 'development',
  entry: './src/index',
  output: {
    path: path.join(__dirname,'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    publicPath: '/',
    host: `${hostname}`,
    port: 5001,
    //hot: true,
    //watchContentBase: true,
    inline: true,
    contentBase: './',
    watchOptions: {
        poll: true
    },
    compress: true,
    open: true,
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader","sass-loader"]
      },
      {
				test: /\.(png|jpe?g|gif)$/i,
				include: path.resolve(__dirname, 'src'),
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "Public", "index.html")
    }),
   ]
};
