const mysql = require('mysql')
const { db } = require('../config')

module.exports = (options = {}) => {
    const pool = mysql.createPool(Object.assign({}, db, options))
    const query = (sql, values) => new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if(error) {
                return reject(error)
            }
            connection.query(sql, values, (error, results, fields) => {
                if(error) {
                    return reject(error)
                }
                resolve(results)
                connection.release()
            })
        })
    })
    return query
}