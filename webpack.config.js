const path = require('path');
module.exports = {
    entry: path.resolve('./src/index.js'),
    output: {
        path:  path.resolve('./dist'),   
        filename: 'bundle.js'
    },  
    module: {
        loaders: [
            {
                test: /\.css$/,  
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,  
                loader: 'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx",".css"]
    },
    devServer:{
        contentBase:"./dist"
    }
};