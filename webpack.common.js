import path from 'node:path';
import HTMLWebpackPlugin from 'html-webpack-plugin';


export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'docs'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            },
            {
            test: /\.html$/i,
            use: ['html-loader'],
            },
        ],
    },
};