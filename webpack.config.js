const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => ({
  entry: { "ui/popup/popup": "./src/ui/popup/index.tsx" },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", "json"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react",
                [
                  "@babel/preset-typescript",
                  {
                    isTSX: true,
                    allExtensions: true
                  }
                ],
              ],
              plugins: [
                [
                  "import",
                  {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "css" // `style: true` 会加载 less 文件
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./ui/popup/index.html",
      template: path.resolve("./src/ui/popup/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: "./src/manifest.json", to: "./" },
      { from: "./src/icons", to: "./icons" }
    ])
  ]
});
