const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {

    },
    markdown: {
        type: String,
        required: true
    },
    createadAt: {
        type: Date,
        default: Date.now
   }
})

module.exports = mongoose.model('Article', articleSchema)