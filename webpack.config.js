var path =require('path');

module.exports = {
    entry: [
        './279/build/app.js'
    ],
    output: {
        path: path.join(__dirname,'279/bin/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude:'/node_modules/',
            loader: 'babel-loader'
        }]
    }
};
