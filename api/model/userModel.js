const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var valid = require('validator');
const nodeuserSchema = new Schema({

    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (mail) => {
                return valid.isEmail(mail)
            },
            message: `{VALUE} is not mail`

        }
    },
    password: {
        type: String
    }
});

const nodeuserModel = mongoose.model('NodeUser', nodeuserSchema)
module.exports = nodeuserModel
