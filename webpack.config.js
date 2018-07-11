const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 9300;

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.module.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src/js'),
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port,
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
            inject: false
        })
    ]
};

module.exports = config;