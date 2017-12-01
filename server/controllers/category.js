const util = require('../util')
const { category } = require('../services')

module.exports = {
    /**
     * add category
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { name } = body
        util.isNotEmpty({ name })
        let insertResult = await category.add(name, ctx)
        if(insertResult.affectedRows) {
            ctx.sendJson({
                id: insertResult.insertId
            })
        }else {
            ctx.throw(500,"Insert failed!!!")
        }
    },
    /**
     * delete category
     */
    delete: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let deleteResult = await category.delete(id, ctx)
        if(deleteResult.affectedRows) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500,"Delete failed!!!")
        }
    }
}