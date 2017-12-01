const util = require('../util')
const { article } = require('../services')

module.exports = {
    /**
     * add article
     */
    add: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { title, description, content, tags = [] } = body
        try {
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
                throw new Error("Insert failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * update article
     */
    update: async (ctx, next) => {
        let { body = {} } = ctx.request
        let { title, description, content, id} = body
        try{
            util.isNotEmpty({ title, description, content, id })
            let updateResult = await article.update(body, ctx)
            if(updateResult.affectedRows) {
                ctx.sendJson({
                    id
                })
            }else {
                throw new Error("Update failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * delete article
     */
    delete: async (ctx, next) => {
        let { id } = ctx.params
        try {
            let deleteResult = await article.delete(id, ctx)
            if(deleteResult.affectedRows) {
                ctx.sendJson({
                    id
                })
            }else {
                throw new Error("Delete failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * select all articles
     */
    selectAllArticles: async (ctx, next) => {
        let { index } = ctx.params
        try{
            util.isInt(index)
            let selectResults = await article.selectAllArticles(index, ctx)
            if(selectResults) {
                ctx.sendJson(selectResults)
            }else {
                throw new Error("Select failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * select one article
     */
    selectArticleById: async (ctx, next) => {
        let { id } = ctx.params
        try {
            util.isInt(id)
            let selectResults = await article.selectArticleById(id, ctx)
            if(selectResults) {
                ctx.sendJson(selectResults)
            }else {
                throw new Error("Select failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    },
    /**
     * increase uv of the article
     */
    increaseUv: async (ctx, next) => {
        let { id } = ctx.params
        try {
            util.isInt(id)
            let selectResults = await article.increaseUv(id, ctx)
            if(selectResults) {
                ctx.sendJson({
                    id
                })
            }else {
                throw new Error("increase uv failed!!!")
            }
        }catch(error) {
            ctx.sendError(error.message, error.status || 400)
        }
    }
}