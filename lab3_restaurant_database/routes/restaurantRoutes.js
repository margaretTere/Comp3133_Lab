const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

router
    .route('/')
    .get(restaurantController.getAll)

router
    .route('/cuisine/:cuisine')
    .get(restaurantController.getByCuisine)
           
module.exports = router;