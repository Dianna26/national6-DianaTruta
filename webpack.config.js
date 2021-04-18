const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        handleLogin: './src/handleLogin.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

