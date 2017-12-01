const TABLE_NAME = 'tags'
const ARTICLE_TAG_MAP = 'article_tag_map'
const ARTICLES = 'articles'
module.exports = {
    add: (name, ctx) => {
        return ctx.querySql(
            'INSERT INTO ?? (name) values (?)',
            [TABLE_NAME, name]
        )
    },
    delete: (id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET deleted = 1 WHERE id = ?',
            [TABLE_NAME, id]
        )
    },
    selectAllTags: (ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? WHERE deleted = 0',
            [TABLE_NAME]
        )
    },
    getArticlesByTag: (id, ctx) => {
        return ctx.querySql(
            'SELECT article.id, article.title, article.description,  article.create_by, article.create_time, tag.id as tagId, tag.name as tagName FROM ?? AS article JOIN ?? AS tagMap ON article.id = tagMap.article_id JOIN ?? as tag on tagMap.tag_id = tag.id WHERE article.deleted = 0 AND tag.deleted = 0 AND tagMap.tag_id = ?',
            [ARTICLES, ARTICLE_TAG_MAP, TABLE_NAME, id]
        )
    }
}