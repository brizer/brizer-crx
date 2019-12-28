const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { mocker } = require("http-mockjs");

module.exports = env => ({
  entry: {
    "ui/newtab/newtab": "./src/ui/newtab/index.tsx",
    "ui/popup/popup": "./src/ui/popup/index.tsx",
    "background/background": "./src/background/index.ts",
    "inject/index": "./src/inject/index.ts"
  },
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
    hot: true,
    before:(app)=>{
      mocker(app)
    }
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
                ]
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties"],
                ["@babel/plugin-proposal-nullish-coalescing-operator"],
                ['@babel/plugin-proposal-optional-chaining'],
                [
                  "import",
                  {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: true // `style: true` 会加载 less 文件
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]"
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./ui/popup/index.html",
      chunks: ["ui/popup/popup"],
      template: path.resolve("./src/ui/popup/index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "./ui/newtab/index.html",
      chunks: ["ui/newtab/newtab"],
      template: path.resolve("./src/ui/newtab/index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "./background/index.html",
      chunks: ["background/background"],
      template: path.resolve("./src/background/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin([
      { from: "./src/manifest.json", to: "./" },
      { from: "./src/icons", to: "./icons" }
    ])
  ]
});
