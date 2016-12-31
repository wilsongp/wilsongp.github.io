var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                // "include" is commonly used to match the directories
                include: [
                    path.resolve(__dirname, "app"),
                    path.resolve(__dirname, "spec")
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.es6']
    }
};
