var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './279/src/app.tsx',
    output: {
        filename: "[name].js",
        path: path.join(__dirname, '279/bin/')        
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },            
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loader: 'file-loader'
            }
            // {
            //     test: /server\.ts$/,
            //     loader: 'file-loader'
            // }
        ]
    },    
    watch: true
}
