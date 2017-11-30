const TABLE_NAME = 'categoies'
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
    }
}