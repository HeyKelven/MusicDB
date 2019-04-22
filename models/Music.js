const mongoose = require('mongoose')

const Music = new mongoose.Schema({
    "name": {type: String, default: ''},
    "Singer": {type: String, default: ''}
})

module.exports = mongoose.model('Music', Music)