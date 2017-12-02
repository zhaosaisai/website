module.exports = () => {
    return async (ctx, next) => {
        try {
          await next();
        } catch (err) {
          ctx.sendError({
            reason: err.message,
            code: err.status
          })
        }
    }
}