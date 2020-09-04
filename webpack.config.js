const path = require('path');
const MinCssPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs');
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
};
const PAGES_DIR = `${PATHS.src}/pages/pugs/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));


module.exports = {
    devServer: {
        index: 'form.html'
    },

    entry: {
        'form': './src/pages/components/form/form.js',
        'text': './src/pages/components/text/text.js',
        'buttons': './src/pages/components/buttons/buttons.js',
        'beauty': './src/pages/components/beauty/beauty.js',
        'slider': './src/pages/components/slider/slider.js',
        'index': './src/pages/components/index/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'docs'),

        filename: () => '[name].[hash].js'

    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MinCssPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MinCssPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },

                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ["file-loader?name=[name].[ext]&outputPath=images/",
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                        }
                    }
                ]
            },

        ]
    },
    plugins: [
        new MinCssPlugin({filename: '[name].[hash].css'}),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
            chunks: [`${page.split(".")[0]}`]
        })),
        new CleanWebpackPlugin(),


    ]
};