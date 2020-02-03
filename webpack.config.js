const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    //mode: 'development',
    //mode: 'production',
    //devtool: 'inline-source-map',
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    }, {
                        loader: 'sass-loader',
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        // Копирование картинок с сохранением дерева каталогов
                        name: f => {
                            let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), path.dirname(f));
                            return `${dirNameInsideAssets}/[name].[ext]`;
                        }
                    }
                },
                    {
                    // сжатие картинок
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        },
                    }
                },
                ],
            },
            {
                // копирование картинок из тегов img в html файлах
                test: /\.html$/i,
                use: [
                    'file-loader?name=[name].[ext]',
                    "extract-loader",
                    'html-loader'
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            //filename: "index.html", // Создает пустышку index.html и предупреждает о перезаписи. На StackOverflow советовали использовать [name].[ext]
            filename: "[name].html", // Создает пустышку 0.html а в index.html на второй картинке меняет слеш / -> \
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};