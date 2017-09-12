var webpack = require('webpack');

module.exports = {
    entry: {
        './sdk/dist/websdk-1.4.12': ['./sdk/index'],
        './demo/javascript/dist/demo-1.4.12': ['./demo/javascript/src/entry'],
        './webrtc/dist/webrtc-1.4.12': ['./webrtc/src/entry'],
        './sdk/dist/strophe-1.2.14': ['./sdk/dist/strophe-1.2.14'],
    },
    output: {
        path: './',
        publicPath: './',
        filename: '[name].min.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.svg|woff|eot|ttf$/,
                loader: require.resolve('file-loader') + '?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        // new webpack.NoErrorsPlugin(),
        // production must be with `UglifyJsPlugin` or ie9 crash
        // faster your app better use
        // https://github.com/facebook/react/issues/7803
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
}
;

