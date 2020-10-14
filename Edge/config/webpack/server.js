const {paths} = require('../paths')
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

const deps = require('../../package.json').dependencies

console.log(path.resolve(
    __dirname,
    "../../../Demand/dist/server/container.js"
))

console.log(paths.serverEntry)
console.log(paths.serverBuild)

const serverConfig = {
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: paths.serverEntry,
    output: {
        path: paths.serverBuild,
        filename: '[name].js',
        chunkFilename: '[name].server.js',
        publicPath: '/'

    },
    externals: ["enhanced-resolve"],
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
        // modules: ['node_modules'],
        // mainFiles: ['index']
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "edge",
            library: { type: "commonjs-module" },
            filename: "container.js",
            remotes: {
                demand: path.resolve(
                    __dirname,
                    "../../../Demand/dist/server/container.js"
                )
            },
            // shared: [{"react":deps.react, "react-dom":deps["react-dom"]}],
        }),
    ],
    devtool: 'inline-source-map'
}
module.exports = serverConfig