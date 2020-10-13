const {paths} = require('../paths')
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;


const serverConfig = {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: paths.serverEntry,
    output: {
        path: paths.serverBuild,
        filename: 'serverBundle.js',
        chunkFilename: '[name].server.js'

    },
    externals: [nodeExternals()],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
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
                loader: 'file-loader',
                options:{
                    emitFile: false
                }
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
        modules: ['node_modules'],
        // mainFiles: ['index']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "demand",
            library: { type: "commonjs2" },
            filename: "container.js",
            exposes: {
                "./header": "./src/components/header",
            },
            shared: ["react", "react-dom"]
        }),
    ],
    devtool: 'inline-source-map'
}
module.exports = serverConfig