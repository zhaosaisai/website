const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const config = require('./config')
const router = require('./router')
const {
    sendResponse, 
    query,
    forceBodyBeJson,
    errorHandler
} = require('./middlewares')

// use middleware create by own
app.use(sendResponse())
app.use(errorHandler())
app.use(query())
app.use(bodyParser())
app.use(forceBodyBeJson())
app.use(router.routes()).use(router.allowedMethods())

app.on('error', (error, ctx) => {
    
})

if(module.parent) {
    module.exports = app
}else {
    app.listen(config.port, () => {
        console.log(`The server is listening on ${config.port}`)
    })
}