module.exports = {
    port: 3000,
    db: {
        host: 'localhost',
        password: '',
        user: 'root',
        database: 'personal_site',
        debug: process.env.NODE_ENV === 'production' ? false : true
    }
}