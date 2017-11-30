const router = require('koa-router')()
const {
    article,
    category
} = require('./controllers')

// articles
router.post('/article/add', article.add)
router.put('/article/update', article.update)
router.delete('/article/delete/:id', article.delete)
router.get('/article/select/:index', article.selectAll)
router.get('/article/:id', article.selectById)
router.put('/article/uv/:id', article.increaseUv)

// category
router.post('/category/add', category.add)
router.delete('/category/delete/:id', category.delete)

module.exports = router