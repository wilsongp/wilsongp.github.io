const path = require("path");

const rootDir = path.resolve(__dirname, "..");

module.exports = {
  rootDir,
  src: path.join(rootDir, "src"),
  entry: path.join(rootDir, "src/index.js"),
  dist: path.join(rootDir, "dist"),
  template: path.join(rootDir, "src/index.ejs")
};
