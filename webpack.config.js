const path = require('path');

module.exports = {
    entry: "./js/index.js",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.ogg$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets"
                }
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }, 
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true
    }
};