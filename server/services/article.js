const TABLE_NAME = 'articles'
module.exports = {
    add: (data, ctx) => {
        const {
            title,
            description,
            content,
            category,
            tags,
            relation_articles
        } = data
        return ctx.querySql(
            'INSERT INTO ?? SET title = ?, description = ?, content = ?, category = ?, tags = ?, relation_articles = ?', 
            [TABLE_NAME, title, description, content, category, tags ,relation_articles]
        )
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
            'UPDATE ?? SET title = ?, description = ?, content = ?, category = ?, tags = ?, relation_articles = ? where id = ?', 
            [TABLE_NAME, title, description, content, category, tags ,relation_articles, id]
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
    }
}