const path = require("path")

module.exports = {
  onCreateWebpackConfig: ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /window-scroll-position/,
              use: path.resolve("customLoader.js"),
            },
          ],
        },
      })
    }
  },
}
