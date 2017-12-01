const ip = require('ip')
const util = require('../util')
const { comments } = require('../services')

module.exports = {
    /**
     * add a comment
     */
    add: async (ctx, next) => {
        const { body = {} } = ctx.request
        const { article_id, comment } = body
        const address = ip.address()
        util.isInt(article_id)
        
        let insertResult = await comments.add( { article_id, comment, ip: address }, ctx)
        if(insertResult.affectedRows) {
            ctx.sendJson({
                id: insertResult.insertId,
                article_id,
                comment
            })
        }else {
            ctx.throw(500, "Insert failed!!!")
        }
    },
    /**
     * delete a comment
     */
    delete: async (ctx, next) => {
        const { id } = ctx.params
        util.isInt(id)
        const deleteResult = await comments.delete(id, ctx)
        if(deleteResult.affectedRows) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500, "Delete failed")
        }
    }
}
