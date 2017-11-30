const router = require('koa-router')()
const {
    article
} = require('./controllers')

// Add articles
router.post('/article/add', article.add)
router.put('/article/update', article.update)
router.delete('/article/delete/:id', article.delete)
router.get('/article/select/:index', article.selectAll)
router.get('/article/:id', article.selectById)
router.put('/article/uv/:id', article.increaseUv)

module.exports = router