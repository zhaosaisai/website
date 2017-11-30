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
            let insertResult = await article.add(body, ctx)
            if(insertResult.affectedRows) {
                ctx.sendJson({
                    id: insertResult.insertId
                })
            }else {
                ctx.sendError("Insert failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
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
                ctx.sendError("Update failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
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
                ctx.sendError("Delete failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
        }
    },
    /**
     * select all articles
     */
    selectAll: async (ctx, next) => {
        let { index } = ctx.params
        try{
            util.isInt(index)
            let selectResults = await article.selectAll(index, ctx)
            if(selectResults) {
                ctx.sendJson(selectResults)
            }else {
                ctx.sendError("Select failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
        }
    },
    /**
     * select one article
     */
    selectById: async (ctx, next) => {
        let { id } = ctx.params
        try {
            util.isInt(id)
            let selectResults = await article.selectById(id, ctx)
            if(selectResults) {
                ctx.sendJson(selectResults)
            }else {
                ctx.sendError("Select failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
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
                ctx.sendError("increase uv failed!!!")
            }
        }catch(error) {
            ctx.status = 400
            ctx.sendError(error.message)
        }
    }
}