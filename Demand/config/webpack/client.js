const path = require('path')
const {paths} = require('../paths')
const LoadablePlugin = require('@loadable/webpack-plugin')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const clientConfig = {
    name: 'client',
    target: 'web',
    entry: paths.clientEntry,
    mode: 'development',
    output: {
        path: path.join(paths.clientBuild,paths.publicPath),
        filename: '[name].js',
        publicPath: paths.publicPath,
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                //     preset: ['react-app']
                // }
            }
        ]
    },
    resolve:{
        extensions: ['.js', '.mjs', '.json', '.jsx', '.css'],
        modules: ['node_modules']
    },
    plugins: [
        new LoadablePlugin(),
        new ModuleFederationPlugin({
            name: "demand",
            filename: "container.js",
            exposes: {
                "./header": "./src/components/header",
            },
            shared: ["react", "react-dom"]
        })
    ]
}

module.exports = clientConfig