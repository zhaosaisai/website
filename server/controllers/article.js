const util = require('../util')
const { article } = require('../services')
module.exports = {
    /**
     * add article
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { title, description, content } = body
        try {
            util.isNotEmpty({ title, description, content })
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
        }
    }
}