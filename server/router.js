const router = require('koa-router')()
const {
    article
} = require('./controllers')

// Add articles
router.post('/article/add', article.add)

module.exports = router