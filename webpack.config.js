const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: './src/js/index.js',

    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        contentBase: './dist',
        writeToDisk: true,
        port: 8080
    },

    externals: {
        jquery: 'jQuery'
    },

    module: {
        rules: [

            // HTML Loader
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },

            // CSS Loader
            {
                test: /\.s(a|c)ss$/,
                use: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },

            // Image Loader
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'img/'
                        }
                    }
                ]
            },

            // Babel Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },

        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),

        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),

        new CopyPlugin({
            patterns: [
                { from : "./src/img/sprite.svg", to: 'img/' }
            ]
        }),
    ],
};
