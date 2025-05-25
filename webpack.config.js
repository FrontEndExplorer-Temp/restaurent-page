const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: ["style-loader", "css-loader"], // Inject styles into the DOM and handle CSS files
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Your custom HTML template
    }),
  ],
};
