module.exports = (env) => {
    if(env === 'development'){
        return [require('./client'), require('./server')]
    }
    return [require('./client'), require('./server')]

}