const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entry = require("./entry");

module.exports = {
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    host: "localhost",
    liveReload: false,
    open: true,
    compress: true,
    hot: false,
    port: 3030,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
  entry: [entry.js, entry.css],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [resolve(__dirname, "src")],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      id: entry.testInfo.id,
      site: entry.testInfo.site,
      client: entry.testInfo.client,
      target: entry.testInfo.target,
      variation: entry.testInfo.variation,
      template: resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
};
