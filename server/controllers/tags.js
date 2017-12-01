const util = require('../util')
const { tags } = require('../services')

module.exports = {
    /**
     * add tags
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { name } = body
        util.isNotEmpty({ name })
        let insertResult = await tags.add(name, ctx)
        if(insertResult.affectedRows) {
            ctx.sendJson({
                id: insertResult.insertId
            })
        }else {
            ctx.throw(500, "Insert failed!!!")
        }
    },
    /**
     * delete tags
     */
    delete: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let deleteResult = await tags.delete(id, ctx)
        if(deleteResult.affectedRows) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500, "Delete failed!!!")
        }
    },
    selectAllTags: async (ctx, next) => {
        let allTags = await tags.selectAllTags(ctx)
        ctx.sendJson({
            tags: allTags
        })
    },
    /**
     * Get all articles of a tag
     */
    getArticlesByTag: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let articles = await tags.getArticlesByTag(id, ctx)
        ctx.sendJson({
            articles: articles
        })
    }
}