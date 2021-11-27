const express = require('express');
const homeRoutes= require('./home_routes')

const route= express.Router();
route.use('/', homeRoutes);

module.exports= route;