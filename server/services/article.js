const TABLE_NAME = 'articles'
const ARTICLE_TAG_MAP = 'article_tag_map'
const ARTICLE_CATEGORY_MAP = 'article_category_map'
const CATEGORY = 'categories'
const TAGS = 'tags'
const COMMENTS = 'comments'

const article = module.exports = {
    add: (data, ctx) => {
        const {
            title,
            description,
            content,
            category,
            tags,
            relation_articles
        } = data
        return ctx.transaction(async (resolve, reject, connection) => {
            try{
                let insertArticleResult = await connection.querySql(
                    'INSERT INTO ?? SET title = ?, description = ?, content = ?, category = ?, relation_articles = ?', 
                    [TABLE_NAME, title, description, content, category, relation_articles]
                )
                let { affectedRows, insertId } = insertArticleResult
                if(affectedRows){
                    // insert tags
                    for(let i = 0; i < tags.length; i++) {
                        await connection.querySql(
                            'INSERT INTO ?? (article_id, tag_id) VALUES (?,?)', 
                            [ARTICLE_TAG_MAP, insertId, tags[i]]
                        )
                    }
                    // if come to here, insert success
                    connection.commit((error) => {
                        if(error) {
                            throw error
                        }
                        resolve(insertArticleResult)
                    })
                }else {
                    throw new Error('Article insert failed!!!')
                }
            }catch(error) {
                connection.rollback(() => {
                    reject(error)
                })
            }
            
        })
    },
    update: (data, ctx) => {
        const {
            id,
            title,
            description,
            content,
            category,
            relation_articles
        } = data
        return ctx.querySql(
            'UPDATE ?? SET title = ?, description = ?, content = ?, category, relation_articles = ? where id = ?', 
            [TABLE_NAME, title, description, content, category, relation_articles, id]
        )
    },
    selectAllArticles: async (index, ctx) => {
        const segmentArticles = await article._selectArticles(index, ctx)
        for(let i = 0; i < segmentArticles.length; i++) {
            const { id, category } = segmentArticles[i]
            const categoryInfo = await article._selectCategory(category, ctx) || []
            const tagInfo = await article._selectArticleTags(id, ctx) || []
            Object.assign(segmentArticles[i], { tagInfo, categoryInfo })
        }
        return Promise.resolve(segmentArticles)
    },
    selectArticleById: async (article_id, ctx) => {
        var segmentArticle = await ctx.querySql(
            'SELECT * FROM ?? WHERE id = ? AND deleted = 0',
            [TABLE_NAME, article_id]
        )
        if(segmentArticle && segmentArticle.length > 0){
            const { category } = segmentArticle[0]
            const categoryInfo = await article._selectCategory(category, ctx) || []
            const tagInfo = await article._selectArticleTags(article_id, ctx) || []
            const comments = await article._selectComments(article_id, ctx) || []
            Object.assign(segmentArticle[0], { tagInfo, categoryInfo, comments })
            return Promise.resolve(segmentArticle[0])
        }else {
            ctx.throw(404)
        }
    },
    selectArticleByYear: async(year, ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? WHERE YEAR(create_time) = ? AND deleted = 0',
            [TABLE_NAME, year]
        )
    },
    getYearsGroup: (ctx) => {
        return ctx.querySql(
            'SELECT  YEAR(create_time) AS year from ?? GROUP BY YEAR(create_time) ORDER BY year DESC',
            [TABLE_NAME]
        )
    },
    delete: (id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET deleted = 1 WHERE id = ?',
            [TABLE_NAME, id]
        )
    },    
    increaseUv: (id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET uv = uv + 1 WHERE id = ?',
            [TABLE_NAME, id]
        )
    },
    insertArticleTagMap: (article_id, tag_id, ctx) => {
        return ctx.querySql(
            'INSERT INTO ?? (article_id, tag_id) VALUES (?,?)',
            [ARTICLE_TAG_MAP, article_id, tag_id],
            false
        )
    },
    deleteArticleTag: (article_id, tag_id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET deleted = 1 WHERE article_id = ? AND tag_id = ?',
            [ARTICLE_TAG_MAP, article_id, tag_id]
        )
    },
    _selectArticleTags: (article_id, ctx) => {
        return ctx.querySql(
            'SELECT tag.id, tag.name FROM ?? AS tagMap JOIN ?? AS tag ON tagMap.tag_id = tag.id WHERE tagMap.deleted = 0 AND tag.deleted = 0 AND tagMap.article_id = ?',
            [ARTICLE_TAG_MAP, TAGS, article_id]
        )
    },
    _selectArticles: (index, ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? WHERE deleted = 0 LIMIT ?, 10',
            [TABLE_NAME, (index - 1) * 10]
        )
    },
    _selectCategory: (category, ctx) => {
        return ctx.querySql(
            'SELECT id, name FROM ?? WHERE id = ? AND deleted = 0',
            [CATEGORY, category]
        )
    },
    _selectComments: (article_id, ctx) => {
        return ctx.querySql(
            'SELECT id, ip, comment, create_time FROM ?? WHERE article_id = ? AND deleted = 0',
            [COMMENTS, article_id]
        )
    }
}