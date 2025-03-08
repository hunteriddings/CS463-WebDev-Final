const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { webpack } = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const postcssObfuscator = require("postcss-obfuscator");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src/js/index.js",

  devtool: false,

  output: {
    filename: "js/[contenthash:8].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    host: "0.0.0.0",
    port: 8080,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  resolve: {
    fallback: {
      querystring: require.resolve("querystring-es3"),
      crypto: require.resolve("crypto-browserify"),
    },
  },

  module: {
    rules: [
      // HTML Loader
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
        include: [path.resolve(__dirname, "node_modules/swiper")],
      },

      // CSS Loader
      {
        test: /\.s(a|c)ss$/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
              implementation: require("sass"),
            },
          },
        ],
      },

      // Babel Loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },

      // Image/File Loader
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|webp|pdf|mp4)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[name][ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name:8].css",
    }),

    new CopyPlugin({
      patterns: [{ from: "./src/img/", to: "img/" }],
    }),
  ],
};
