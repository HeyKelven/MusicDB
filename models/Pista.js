const mongoose = require('mongoose')

const Pista = new mongoose.Schema({
    "Phase": {type: String, default: ''},
    "Status": {type: Number, default: 0},
    "Descrition": {type: String, default: ''}
})

module.exports = mongoose.model('Pista', Pista)