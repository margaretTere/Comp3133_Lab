const express = require('express');
const cors = require('cors');
const restaurantRouter = require('../routes/restaurantRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/restaurants', restaurantRouter);

module.exports = app;