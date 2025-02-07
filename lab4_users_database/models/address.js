const mongoose = require('mongoose');
const geoSchema = require('./geo');

const addressSchema = new mongoose.Schema({
    street: { 
        type: String, 
        required: true 
    },
    suite: { 
        type: String, 
        required: true 
    },
    city: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[A-Za-z\s]+$/.test(v);
            },
            message: "City must contain only alphabets and spaces"
        }
    },
    zipcode: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{5}-\d{4}$/.test(v);
            },
            message: "Zip code must be in format DDDDD-DDDD"
        }
    },
    geo: { type: geoSchema, required: true }
});

module.exports = addressSchema;
