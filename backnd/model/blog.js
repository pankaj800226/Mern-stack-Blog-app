const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    city: {
        type: String,
        require: true
    },

    Description: {
        type: String,
        require: true
    },

    image: {
        type: String,
        require: true
    },

    date: {
        type: String,
        require: true,
    }, done: {
        type: Boolean,
        default: false,

    },
},
    { timestamps: true }
)

const blogModel = mongoose.model('MyBlog', blogSchema)

module.exports = blogModel