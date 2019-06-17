const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.jpe?g$|\.gif$|\.png|\.jpg$|\.woff(2)?$|\.svg$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "/",
                hmr: !isProduction
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader"
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css"
      })
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      https: {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.crt'),
        ca: fs.readFileSync('rootCA.pem'),
      }
    }
  };
};
