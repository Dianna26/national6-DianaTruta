const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        handleLogin: './src/handleLogin.js',
        renderArticle: './src/renderArticle.js',
        renderBreedName: './src/renderBreedName.js',
        renderDogImage: './src/renderDogImage.js',
        displayImage: './src/displayImage.js'

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

