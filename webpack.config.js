import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Resolve the directory name using import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Use the resolved __dirname here
    assetModuleFilename: "images/[name][ext][query]", // Place images in the images folder
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(avif|png|jpeg|gif)$/i, // Match image formats
        type: "asset/resource", // Use Webpack's built-in asset module to handle images
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"), // Use the resolved __dirname here as well
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
