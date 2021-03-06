// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
import webpack from "webpack";
import paths from "../config/paths";
import config from "../config/webpack.config.prod";
import {
  chalkError,
  chalkSuccess,
  chalkWarning,
  chalkProcessing
} from "../config/chalk.config";

process.env.NODE_ENV = "production";

console.log(
  chalkProcessing(
    `Generating minified bundle from ${paths.entry}. This will take a moment...`
  )
);

webpack(config, (error, stats) => {
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning("Webpack generated the following warnings: "));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(
    chalkSuccess(
      `Your app is compiled in ${process.env.NODE_ENV} mode in ${paths.dist}`
    )
  );

  return 0;
});
