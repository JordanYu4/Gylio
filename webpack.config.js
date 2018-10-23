var path = require("path");

module.exports = {
  context: __dirname,
  entry: ["babel-polyfill", "./frontend/gylio.jsx"],
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]"
          }
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
