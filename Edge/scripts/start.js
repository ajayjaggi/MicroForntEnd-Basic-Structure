const webpack = require('webpack')
const shell = require('shelljs')
const [clientConfig, serverConfig] = require('../config/webpack')(
    process.env.NODE_ENV || 'development'
)
const promiseWrapper = (name,compiler) => {
    return new Promise((resolve,reject) => {
        compiler.run((err,stats) => {
            if(!err && !stats.hasErrors()){
                console.log(`Webpack build for ${name} completed `)
                // console.log(stats)
                return resolve()
            }
            console.log(`Failed to compile ${name} config`)
            console.log(stats,err)
            return reject('')

        })
    })
}

const multiCompiler = webpack([clientConfig, serverConfig])
const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client')
const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server')

// const watchOptions = {
//     poll: 1000,
//     aggregateTimeout: 300
// }


const start = async () => {

    await promiseWrapper('client',clientCompiler).then(() => {}).catch(res => {})
    await promiseWrapper('server',serverCompiler).then(() => {}).catch(res => {})
    // serverCompiler.watch(watchOptions)
    shell.exec('node dist/server/main.js')

}

start()

module.exports = {
    clientCompiler
}

