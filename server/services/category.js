const TABLE_NAME = 'categories'
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
    selectAllCategories: (ctx) => {
        return ctx.querySql(
            'SELECT * FROM ?? WHERE deleted = 0',
            [TABLE_NAME]
        )
    },
    getArticlesByCategory: (id, ctx) => {
        return ctx.querySql(
            'SELECT article.id, article.title, article.description, article.create_by, article.create_time, category.id AS categoryId, category.name AS categoryName FROM ?? as category JOIN ?? as article ON category.id = article.category WHERE article.deleted = 0 AND category.id = ?',
            [TABLE_NAME, ARTICLES, id]
        )
    }
}