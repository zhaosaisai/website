module.exports = () => {
    function render(type, results = {}, status = 200) {
        let json = null
        if(type === 'error') {
            this.status = status
            json = {
                'status': {
                    'status_code': -1,
                    'status_reason': results
                },
                'result': null
            }
        }else {
            json = {
                'status': {
                    'statuc_code': 0,
                    'status_reason': null
                },
                'result': results
            }
        }
        this.set('Content-Type', 'application/json')
        this.body = JSON.stringify(json)
    }
    return async (ctx, next) => {
        ctx.sendJson = render.bind(ctx, 'success')
        ctx.sendError = render.bind(ctx, 'error')
        await next()
    }
}