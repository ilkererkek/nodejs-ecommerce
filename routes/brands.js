const Router = require('express').Router();
const { createBrand, getBrand , getBrands , updateBrand , deleteBrand} = require('../controllers/brands')
const Brand = require('../models/Brand');

const advancedResults = require('../middleware/advancedresults');

Router.route('/')
    .get(advancedResults(Brand),getBrands)
    .post(createBrand)

Router.route('/:id')
    .get(getBrand)
    .put(updateBrand)
    .delete(deleteBrand)

module.exports = Router;