const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
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
            presets: ["env"],
          },
        },
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true, // Set to false if you don't need source maps
    }),
  ],
};
