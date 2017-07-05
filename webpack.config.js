var path =require('path');
let webpack = require('webpack');

module.exports = {
    entry: [
        './279/src/app.tsx'
    ],
    output: {
        path: path.join(__dirname,'279/bin/'),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx",".json"]
    },
    module: {
        rules : [
            {
                test : /\.tsx?$/,
                loader : "awesome-typescript-loader"
            },
            {
                enforce : "pre",
                test : /\.js$/,
                loader : "source-map-loader"
            }
        ]        
    },
    watch: true
    // externals: {
    //     "react" : "React",
    //     "react-dom" : "ReactDOM"
    // }
    // loaders: [{
        //     test: /\.js$/,
        //     exclude:'/node_modules/'
        //     // loader: 'babel-loader'
        // }]
}
