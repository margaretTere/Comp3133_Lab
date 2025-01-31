const mongoose = require('mongoose');

const address = new mongoose.Schema({
    building: { 
        type: String, 
        
    },
    street: {
         type: String,
          required: [true,"Address required street name"]
        },
    zipcode: { 
        type: String, 
         
    }  
  });

const restaurant = new mongoose.Schema({
address: { 
    type: address,
    required: [true,"Address is required"] 
},
  city: { 
    type: String, 
    required: [true,"City is required"]  
},
  cuisine: {
     type: String, 
     required: [true,"Cuisine is required"]  
    },
  name: { 
    type: String, 
    required: [true,"Name is required"]  
},
  restaurant_id: {
     type: String, 
     required: [true,"Restaurant Id is required"],
     unique: true 
    }
    
});

module.exports = mongoose.model('restaurant', restaurant);
