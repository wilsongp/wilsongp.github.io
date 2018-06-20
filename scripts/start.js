// Options: https://github.com/webpack-contrib/webpack-serve#api
const serve = require("webpack-serve");
const config = require("../config/webpack.config.dev");

const paths = require("../config/paths");

// https://github.com/webpack-contrib/webpack-hot-client
const hotClientOptions = {
  reload: true
};

serve({
  config,
  open: true,
  content: paths.src,
  hot: hotClientOptions
});
