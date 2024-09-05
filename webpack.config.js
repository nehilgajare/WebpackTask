const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development', // Add this line
  entry: "./src/input.js",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
