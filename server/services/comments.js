const TABLE_NAME = 'comments'

module.exports = {
    add: (data, ctx) => {
        return ctx.querySql(
            'INSERT INTO ?? SET ?',
            [TABLE_NAME, data]
        )
    },
    delete: (id, ctx) => {
        return ctx.querySql(
            'UPDATE ?? SET deleted = 1 WHERE id = ?',
            [TABLE_NAME, id]
        )
    }
}