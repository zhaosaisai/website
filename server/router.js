const router = require('koa-router')()
const {
    article,
    category, 
    tags,
    comments
} = require('./controllers')

// articles
router.post('/api/article/add', article.add)
router.put('/api/article/update', article.update)
router.put('/api/article/uv/:id', article.increaseUv)
router.delete('/api/article/delete/:id', article.delete)
router.get('/api/article/select/:index', article.selectAllArticles)
router.get('/api/article/:id', article.selectArticleById)
router.get('/api/article/year/:year', article.getArticleByYear)

// category
router.post('/api/category/add', category.add)
router.delete('/api/category/delete/:id', category.delete)
router.get('/api/categories', category.selectAllCategories)
router.get('/api/category/:id', category.getArticlesByCategory)
// tags
router.post('/api/tags/add', tags.add)
router.delete('/api/tags/delete/:id', tags.delete)
router.get('/api/tags', tags.selectAllTags)
router.get('/api/tag/:id', tags.getArticlesByTag)

// comments
router.post('/api/comment/add', comments.add)
router.delete('/api/comment/delete/:id', comments.delete)

module.exports = router