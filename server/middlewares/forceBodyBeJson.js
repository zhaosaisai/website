module.exports = () => {
    return async (ctx, next) => {
        const { body = {} } = ctx.request
        if(Object.prototype.toString.call(body) !== '[object Object]') {
            ctx.status = 400
            ctx.sendError("Request body must be a pure Object")
        }else {
            await next()
        }
    }
}