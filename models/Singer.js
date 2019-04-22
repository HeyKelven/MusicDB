const mongoose = require('mongoose')

const Singer = new mongoose.Schema({
    "firstName": {type: String, default: ''},
    "type": {type: String, default: ''},
    "nacionality": {type: String, default: ''}
})

module.exports = mongoose.model('Singer', Singer)