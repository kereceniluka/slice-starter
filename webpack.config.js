const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    target: target,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                            /* plugins: function () {
                                return [autoprefixer, cssnano]
                            }, */
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }, 
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }), 
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
}