var path = require("path");
var fs = require("fs");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var htmlFiles = [];
var directories = ["src"];
var isDev = env.NODE_ENV !== "prod";

while (directories.length > 0) {
  var directory = directories.pop();
  var dirContents = fs
    .readdirSync(directory)
    .map((file) => path.join(directory, file));
  htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory())
  );
}

module.exports = {
  mode: "development",
  entry: "./src/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg)$/i,
        // type: "asset/resource",
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Inline anything under 10kb
          },
        },
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              pngquant: {
                quality: [0.9, 0.95],
              },
            },
          },
        ],
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    ...htmlFiles.map(
      (htmlFile) =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(path.normalize("src/"), ""),
          inject: true,
          minify: !isDev && {
            html5: true,
            collapseWhitespace: true,
            caseSensitive: true,
            removeComments: true,
            removeEmptyElements: false,
          },
        })
    ),
  ],
};
