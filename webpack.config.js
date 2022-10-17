const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const miniCSSExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CSSMinimizer = require("css-minimizer-webpack-plugin");

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;
const isProduction = LAUNCH_COMMAND === "build";

const PATHS = {
  build: path.resolve(__dirname, "dist"),
  mainEntry: path.resolve(__dirname, "src/index.js"),
};

/**
 *
 *         BASE/SHARED CONFIGS
 *
 */

const baseConfigs = {
  entry: {
    main: PATHS.mainEntry,
  },
  output: {
    path: PATHS.build,
    filename: "[name].bundle.[contenthash].js",
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CSSMinimizer(), new TerserPlugin()],
  },
  module: {},
  plugins: [
    new HTMLWebpackPlugin({
      title: "Todo List",
      filename: "index.html",
      template: "./src/template.html",
      minify: {
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
      },
    }),
  ],
};

/**
 *
 *         PRODUCTION CONFIGS
 *
 */
const prodConfigs = {
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.scss$/,
        use: [miniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    ...baseConfigs.plugins,
    new miniCSSExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
};

/**
 *
 *         DEV CONFIGS
 *
 */

const devConfigs = {
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: PATHS.build,
    },
    client: {
      logging: "info",
    },
    compress: true,
    historyApiFallback: true,
    liveReload: true,
    hot: true,
    open: true,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [...baseConfigs.plugins],
};

/**
 *
 *         EXPORTS
 *
 */
module.exports = isProduction
  ? { ...baseConfigs, ...prodConfigs }
  : { ...baseConfigs, ...devConfigs };
