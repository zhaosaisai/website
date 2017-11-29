const Koa = require('koa')
const app = new Koa()
const config = require('./config')
const {
    sendResponse, 
    query
} = require('./middlewares')

// use middleware create by own
app.use(sendResponse())
app.use(query())

if(module.parent) {
    module.exports = app
}else {
    app.listen(config.port, () => {
        console.log(`The server is listening on ${config.port}`)
    })
}