const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/assets/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // EXAMPLE HERE
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
};
