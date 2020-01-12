const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortenSchema = new Schema({

    original_url: {
        type: String,
        required: true,
        unique: true
    },
    shorten_url: {
        type: String,
        required: true,
    }
});

const shortenurlModel = mongoose.model('ShortenUrl', shortenSchema)
module.exports = shortenurlModel
