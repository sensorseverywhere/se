var path = require("path")
var webpack = require('webpack')
var Bundvarracker = require('webpack-bundle-tracker')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require("webpack-uglify-js-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');


const vendorModules = ["jquery"];

module.exports = {
  context: __dirname,
    entry:
          [
           'webpack-dev-server/client?http://localhost:3000',
           'webpack/hot/only-dev-server',
           './public/static/index',
         ],
  output: {
      path: path.resolve('./public/static/bundles/'),
      //filename: "[name]-[hash].js",
      filename: "[name].js",
      publicPath: 'http://localhost:3000/public/static/bundles/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new Bundvarracker({filename: './webpack-stats.json'}),
    //new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    }),
    //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false },}),
    //new CleanWebpackPlugin('./public/static/bundles/*'),
    //new ExtractTextPlugin("[name].css", {publicPath: './public/static/bundles/',allChunks: true}),
  ],
  module: {
      loaders: [

      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot','babel-loader'],},  // to transform JSX into JS
      //{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: "url-loader?limit=512"},
    ],

  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
