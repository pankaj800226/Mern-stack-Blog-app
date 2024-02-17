const mongoose = require('mongoose')

const subSchema = new mongoose.Schema({
    subscribe: {
        type: String,
        require: true,
    }

}, { timestamps: true })
const subModel = mongoose.model('subscribe', subSchema)

module.exports = subModel