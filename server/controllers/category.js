const util = require('../util')
const { category } = require('../services')

module.exports = {
    /**
     * add category
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { name } = body
        try{
            util.isNotEmpty({ name })
            let insertResult = await category.add(name, ctx)
            if(insertResult.affectedRows) {
                ctx.sendJson({
                    id: insertResult.insertId
                })
            }else {
                ctx.sendError("Insert failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * delete category
     */
    delete: async (ctx, next) => {
        let { id } = ctx.params
        try{
            util.isInt(id)
            let deleteResult = await category.delete(id, ctx)
            if(deleteResult.affectedRows) {
                ctx.sendJson({
                    id
                })
            }else {
                ctx.sendError("Delete failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    }
}