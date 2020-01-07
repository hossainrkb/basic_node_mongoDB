const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var validator = require('validator');
const nodeContactSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
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
                return validator.isEmail(mail)
            },
            message: `{VALUE} is not mail`

        }
    }
});

const nodeContactModel = mongoose.model('NodeContact', nodeContactSchema)
module.exports = nodeContactModel
