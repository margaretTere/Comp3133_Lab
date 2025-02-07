const mongoose = require('mongoose');
const validator = require('validator');
const addressSchema = require('./address');
const companySchema = require('./company');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    username: { 
        type: String, 
        required: true, 
        minlength: 4 
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Invalid email format"]
    },
    address: { 
        type: addressSchema, 
        required: true 
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
            },
            message: "Phone must be in format 1-DDD-DDD-DDDD"
        }
    },
    website: {
        type: String,
        required: true,
        validate: [validator.isURL, "Invalid URL format"]
    },
    company: { 
        type: companySchema, 
        required: true 
    }
});

module.exports = mongoose.model('User', userSchema);
