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
            ['articles', title, description, content, category, tags ,relation_articles]
        )
    }
}