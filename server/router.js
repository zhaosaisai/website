const router = require('koa-router')()
const {
    article,
    category, 
    tags
} = require('./controllers')

// articles
router.post('/article/add', article.add)
router.put('/article/update', article.update)
router.delete('/article/delete/:id', article.delete)
router.get('/article/select/:index', article.selectAllArticles)
router.get('/article/:id', article.selectArticleById)
router.put('/article/uv/:id', article.increaseUv)

// category
router.post('/category/add', category.add)
router.delete('/category/delete/:id', category.delete)
router.get('/categories', category.selectAllCategories)
router.get('/category/:id', category.getArticlesByCategory)
// tags
router.post('/tags/add', tags.add)
router.delete('/tags/delete/:id', tags.delete)
router.get('/tags', tags.selectAllTags)
router.get('/tag/:id', tags.getArticlesByTag)

module.exports = router