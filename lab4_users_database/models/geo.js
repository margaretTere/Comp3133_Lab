const mongoose = require('mongoose');

const geoSchema = new mongoose.Schema({
    lat: { 
        type: String, 
        required: true 
    },
    lng: { 
        type: String, 
        required: true 
    }
});

module.exports = geoSchema;
