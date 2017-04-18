var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    'process.env': {
        'WSYS_ENV': true,  // 是否连接ERP接口
        'API_ENV': JSON.stringify(process.env.API_ENV),
        'DEBUG': false
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    devtool: 'source-map',  // cheap-module-eval-source-map
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'babel-polyfill',
        './js/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        }),
        devFlagPlugin,
        new ExtractTextPlugin('app.scss')
    ],
    module: {
        loaders: [
            { test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            { test: /\.scss?$/,
                loader: "style!css!resolve-url!sass?sourceMap&includePaths[]=" + path.resolve(__dirname, "./bower_components/compass-sass-mixins/lib/compass"),
                include: __dirname
            },
            { test: /\.css?$/,
                loader: 'style-loader!css-loader',
                include: __dirname
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            {
                loader: 'json-loader',
                test: /\.json$/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: { 'picker': 'pickadate/lib/picker' }
    }
};
