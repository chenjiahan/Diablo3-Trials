module.exports = {
    entry: "./src/index.js",
    output: {
        path: "build",
        filename: "index.js"
    },
    module: {
        perLoaders : [
            { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
        ],
        loaders: [
            { test: /\.js$/, loader: "babel" },
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" },
            { test: /\.css$/, loader: "style!css!autoprefixer" },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};
