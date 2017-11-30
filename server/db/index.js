const mysql = require('mysql')
const { db } = require('../config')

module.exports = (options = {}) => {
    const pool = mysql.createPool(Object.assign({}, db, options))

    return {
        querySql: (sql, values, release = true) => new Promise((resolve, reject) => {
            pool.getConnection((error, connection) => {
                if(error) {
                    return reject(error)
                }
                       
                connection.query(sql, values, (error, results, fields) => {
                    if(error) {
                        return reject(error)
                    }
                    resolve(results)
                    release && connection.release()
                })
            })
        }),
        transaction: (callback) => new Promise((resolve, reject) => {
            pool.getConnection((error, connection) => {
                if(error) {
                    return reject(error)
                }

                connection.querySql = (sql, values, release = false) => new Promise((resolve, reject) => {
                    connection.query(sql, values, (error, results, fields) => {
                        if(error) {
                            return reject(error)
                        }
                        resolve(results)
                        release && connection.release()
                    })
                }) 

                connection.beginTransaction((error) => {
                    if(error) {
                        return reject(error)
                    }
                    callback && typeof callback === 'function' && callback.bind(null, resolve, reject, connection)()
                })
            })
        })
    }
}