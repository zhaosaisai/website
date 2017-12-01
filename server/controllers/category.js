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
    },
    /**
     * select all categories
     */
    selectAllCategories: async (ctx, next) => {
        let allCategories = await category.selectAllCategories(ctx)
        ctx.sendJson({
            categories: allCategories
        })
    },
    /**
     * select an article by category id
     */
    getArticlesByCategory: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let articles = await category.getArticlesByCategory(id, ctx)
        ctx.sendJson({
            articles
        })
    }
}