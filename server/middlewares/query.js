const query = require('../db')

module.exports = (options = {}) => {
    if(Object.prototype.toString.call(options) !=='[object Object]') {
        throw new Error('Configs of database must be a pure object')
    }
    return async (ctx, next) => {
        // ctx.querySql = query(options).querySql
        Object.assign(ctx, query(options))
        await next()
    }
}