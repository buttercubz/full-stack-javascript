const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./frontend/main.js",
  mode: devMode ? "production" : "development",
  output: {
    path: path.join(__dirname, "backend/public"),
    filename: "assets/js/bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [devMode ? "style-loader" : miniCss.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new htmlPlugin({
      template: "./frontend/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new miniCss({
      filename: "assets/css/bundle.css",
    }),
  ],
};
