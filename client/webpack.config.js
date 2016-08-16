const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';
const SRC = './src';
const ENTRY_POINT = `${SRC}/index.js`;

// local css modules
// this also contains the SRC directory if you change it
loaders.push({
    test: /[\/\\]src[\/\\].*\.css$/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
});

// global css
loaders.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
        'style?sourceMap',
        'css'
    ]
});
const preLoaders = [
    {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: [path.join(__dirname, '/node_modules/'), path.join(__dirname, '/build/')]
    }
];

module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server',
        ENTRY_POINT
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: path.resolve(__dirname, SRC)
    },
    module: {
        loaders,
        preLoaders
    },
    devServer: {
        contentBase: './public',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: `${SRC}/index.html`
        })
    ]
};
