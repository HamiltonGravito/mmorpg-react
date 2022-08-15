const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    devServer : {
        port : 8080,
        static : "./build",
        hot : true
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool : 'source-map',
    entry : "./src/index.js",
    output : {
        filename: "bundle.js",
        path : path.resolve(__dirname, "build")
    },

    module : {
        rules : [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {

                        presets: ['@babel/preset-env', "@babel/preset-react"],
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                },
            },
            
        ]
    },

    plugins : [
        new HtmlwebpackPlugin({
            template: './index.html'
        }),
    ]
}