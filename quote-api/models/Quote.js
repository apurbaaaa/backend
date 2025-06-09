//model- defines how data is structured, managed and stored in the database
const mongoose = require('mongoose');


//mongodb schema for quotes
const quoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },

    author: {
        type: String,
        default: 'Unknown'
    }
});

module.exports = mongoose.model('Quote', quoteSchema);