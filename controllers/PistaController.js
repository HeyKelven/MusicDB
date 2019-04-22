const Pista = require('../models/Pista')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Pista.find(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}