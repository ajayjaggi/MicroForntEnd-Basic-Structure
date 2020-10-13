const path = require('path')
const fs = require('fs')

const appPath = fs.realpathSync(process.cwd())



const resolvePath = (relativePath) => path.resolve(appPath,relativePath)

const paths = {
    clientEntry: resolvePath('src/client'),
    serverEntry: resolvePath('src/server'),
    clientBuild: resolvePath('dist/client'),
    serverBuild: resolvePath('dist/server'),
    publicPath: '/static/',
    loadableServerStatsFile: resolvePath('dist/client/static/loadable-stats.json'),
}

module.exports = {
    paths
}
