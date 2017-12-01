module.exports = () => {
    return async (ctx, next) => {
        try {
          await next();
        } catch (err) {
          ctx.sendError(err.message, err.status)
        }
    }
}