const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 
        },
    catchPhrase: { 
        type: String, 
        equired: true 
    },
    bs: { 
        type: String, 
        required: true 
    }
});

module.exports =  companySchema;
