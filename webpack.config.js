const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: ["babel-polyfill", "./src/app.js"],
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
      publicPath: '/'
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.jpe?g$|\.gif$|\.png|\.jpg$/i,
          use: {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  };
};
