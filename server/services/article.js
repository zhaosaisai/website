const TABLE_NAME = 'articles'
const ARTICLE_TAG_MAP = 'article_tag_map'
const ARTICLE_CATEGORY_MAP = 'article_category_map'

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
                    'INSERT INTO ?? SET title = ?, description = ?, content = ?, relation_articles = ?', 
                    [TABLE_NAME, title, description, content, relation_articles]
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
                    // insert category
                    category && await connection.querySql(
                        'INSERT INTO ?? (article_id, category_id) VALUES (?,?)', 
                        [ARTICLE_CATEGORY_MAP, insertId, category]
                    )
                    
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
            tags,
            relation_articles
        } = data
        return ctx.querySql(
            'UPDATE ?? SET title = ?, description = ?, content = ?, relation_articles = ? where id = ?', 
            [TABLE_NAME, title, description, content, relation_articles, id]
        )
    },
    delete: (id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET deleted = 1 WHERE id = ?',
            [TABLE_NAME, id]
        )
    },
    selectAll: (index, ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? LIMIT ?, 10',
            [TABLE_NAME, (index - 1) * 10]
        )
    },
    selectById: (id, ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? WHERE id = ?',
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
    insertArticleCategoryMap: (article_id, tag_id, ctx) => {
        return ctx.querySql(
            'INSERT INTO ?? (article_id, tag_id) VALUES (?,?)',
            [ARTICLE_CATEGORY_MAP, article_id, tag_id],
            false
        )
    }
}