const webpack = require("webpack");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const paths = require("./paths");

const GLOBALS = {
  "process.env.NODE_ENV": JSON.stringify("production"),
  NODE_ENV: JSON.stringify("production"),
  __DEV__: false
};

module.exports = {
  mode: "production",
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"]
  },
  devtool: "source-map",
  entry: paths.entry,
  target: "web",
  output: {
    path: paths.dist,
    publicPath: "",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: paths.template,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via TrackJS, sign up for a free trial at TrackJS.com and enter your token below.
      trackJSToken: ""
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true, // set to false to see a list of every file being bundled.
      options: {
        context: "/"
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: "static",
      reportFilename: "stats.html",
      generateStatsFile: true,
      statsFilename: "stats.json"
    })
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(jpe?g|png|gif)$/i, loader: "file-loader?name=[name].[ext]" },
      { test: /\.ico$/, loader: "file-loader?name=[name].[ext]" }
    ]
  }
};
