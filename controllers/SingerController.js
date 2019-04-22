const Singer = require('../models/Singer')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Singer.find(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    getById: (id) => {
        return new Promise((resolve, reject) => {
            Singer.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Singer.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    put: (params, id) => {
        return new Promise((resolve, reject) => {
            Singer.findByIdAndUpdate(id, params, {new : true})
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    delete: (id) => {
        return new Promise((resolve, reject) => {
            Singer.findByIdAndRemove(id)
            .then(() => {
                resolve({id:id})
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}