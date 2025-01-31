const Restaurant = require('../models/restaurantModel');
const CFG = require('../config/config');

exports.getAll = async (req, res) =>{
  let result = null;
  try{
    if (req.query && req.query.sortBy) {
      const sortBy = req.query.sortBy;
      const sortOrder = sortBy === 'ASC' ? 1 : -1;
      result = await Restaurant.find().sort({ restaurant_id: sortOrder });
    }
    else {
      result = await Restaurant.find();
    }
    
    res
    .status(200)
    .json({ data: result });

  } catch (err){
      res
      .status(400)
      .json({ message: err.message });
  }
};

exports.getByCuisine = async (req, res) =>{
  try {
    const cuisine = req.params.cuisine;
    let query = { cuisine }
    let fields = { cuisine: 1, name: 1, city: 1, restaurant_id: 1 };
    let restaurants = null;

    if (cuisine == 'Delicatessen') {
      restaurants = await Restaurant.find(query, fields)
      restaurants = restaurants.map(restaurant => {
        if (restaurant.city === 'Brooklyn') {
          return restaurant;
        } else {
          const { restaurant_id, ...rest } = restaurant.toObject();
          return rest;
        }
      });    
    }
    else {
      restaurants = await Restaurant.find(query, fields);
    }

    if(!restaurants) {
      throw Error("Restaurants not found");
    }
    
    res
    .status(200)
    .json({ data: restaurants });

  } catch (err) {
      res
      .status (404)
      .json({ message: err.message });
  }
};