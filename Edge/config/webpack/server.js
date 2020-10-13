const {paths} = require('../paths')
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

const deps = require('../../package.json').dependencies

console.log(path.resolve(
    __dirname,
    "../../../Demand/dist/server/container.js"
))

const serverConfig = {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: paths.serverEntry,
    output: {
        path: paths.serverBuild,
        filename: 'serverBundle.js',
        chunkFilename: '[name].server.js',
        libraryTarget: "commonjs2",

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
            name: "edge",
            library: { type: "commonjs2" },
            filename: "container.js",
            remotes: {
                demand: path.resolve(
                    __dirname,
                    "../../../Demand/dist/server/container.js"
                )
            },
            shared: [{"react":deps.react, "react-dom":deps["react-dom"]}],
        }),
    ],
    devtool: 'inline-source-map'
}
module.exports = serverConfig