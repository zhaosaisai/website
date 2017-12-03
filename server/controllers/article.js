const util = require('../util')
const { article } = require('../services')

module.exports = {
    /**
     * add article
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { title, description, content, tags = [] } = body
        util.isNotEmpty({ title, description, content })
        if(!Array.isArray(tags)) {
            throw new Error('tags param must ne an array!!!')
        }
        let insertResult = await article.add(body, ctx)
        if(insertResult.affectedRows) {
            ctx.sendJson({
                id: insertResult.insertId
            })
        }else {
            ctx.throw(500, "Insert failed!!!")
        }
    },
    /**
     * update article
     */
    update: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { title, description, content, id} = body
        util.isNotEmpty({ title, description, content, id })
        let updateResult = await article.update(body, ctx)
        if(updateResult.affectedRows) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500, "Update failed!!!")
        }
    },
    /**
     * delete article
     */
    delete: async (ctx, next) => {
        let { id } = ctx.params
        let deleteResult = await article.delete(id, ctx)
        if(deleteResult.affectedRows) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500, "Delete failed!!!")
        }
    },
    /**
     * select all articles
     */
    selectAllArticles: async (ctx, next) => {
        let { index } = ctx.params
        util.isInt(index)
        let selectResults = await article.selectAllArticles(index, ctx)
        if(selectResults) {
            ctx.sendJson({
                selectResults,
                hasMore: selectResults.length === 10
            })
        }else {
            ctx.throw(500, "Select failed!!!")
        }
    },
    /**
     * select one article
     */
    selectArticleById: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let selectResults = await article.selectArticleById(id, ctx)
        if(selectResults) {
            ctx.sendJson(selectResults)
        }else {
            ctx.throw(500, "Select failed!!!")
        }
    },
    /**
     * increase uv of the article
     */
    increaseUv: async (ctx, next) => {
        let { id } = ctx.params
        util.isInt(id)
        let selectResults = await article.increaseUv(id, ctx)
        if(selectResults) {
            ctx.sendJson({
                id
            })
        }else {
            ctx.throw(500,"increase uv failed!!!")
        }
    },
    /**
     * Get article by year
     */
    getArticleByYear: async (ctx, next) => {
        let { year } = ctx.params
        util.isInt(year)
        let allYears = await article.getYearsGroup(ctx)
        let articleInfo = await article.selectArticleByYear(year, ctx)
        ctx.sendJson({
            allYears,
            articleInfo
        })
    }
}