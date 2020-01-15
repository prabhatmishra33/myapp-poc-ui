var path = require('path');
var webpack = require('webpack');

// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/node_modules/myapp-poc-ui/dist/';
console.log('ASSET_PATH : ',ASSET_PATH)

// console.log(document.currentScript.src);

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'myapp-poc-ui.js',
    libraryTarget: 'umd',
    publicPath: ASSET_PATH
  },
  optimization: {
    minimize: false
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(json)$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.(sass|less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
    // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },


    // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({comments: false, compress: { warnings: false }, screw_ie8: true})
  // ]
};
