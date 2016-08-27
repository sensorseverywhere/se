var path = require("path")
var webpack = require('webpack')
var Bundvarracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require("webpack-uglify-js-plugin");

//require("!style!css!sass!./file.scss");
//require("./stylesheet.css"
const appEntry = ["./assets/static/js/nav","./assets/static/js/app"];
const vendorModules = ["jquery"];

module.exports = {
  context: __dirname,

    entry:
          [
           'webpack-dev-server/client?http://localhost:3000',
           'webpack/hot/only-dev-server',
           './assets/static/js/nav',
         ],

    // {
    //     main: appEntry
    // }, // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/static/bundles/'),
      filename: "[name]-[hash].js",
      publicPath: 'http://localhost:3000/assets/static/bundles/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new Bundvarracker({filename: './webpack-stats.json'}),
    //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}),
    new ExtractTextPlugin("[name].css", {publicPath: './assets/static/bundles/',allChunks: true}),
  ],
  module: {
      loaders: [

      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader'],},  // to transform JSX into JS
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: "url-loader?limit=512"},
    ],

  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
