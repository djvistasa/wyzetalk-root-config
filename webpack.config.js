const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "root-application": "src/wyzetalk-root-config.js",
  },
  output: {
    publicPath: "/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        parser: {
          system: false,
        },
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  node: {
    fs: "empty",
  },
  resolve: {
    // eslint-disable-next-line no-undef
    modules: [__dirname, "node_modules"],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      inject: false,
    }),
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
};
