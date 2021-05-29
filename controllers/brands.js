const asyncHandler = require('../middleware/async');
const Brand = require('../models/Brand');
const ErrorResponse =require('../utils/errorResponse');
const path = require('path');

//@desc     Get all brands
//@route    GET /api/v1/brands
//@access   Public
exports.getBrands = asyncHandler(async (req, res, next) => {
    return res.status(200).json(res.advancedResults);
});

//@desc     Get single brand
//@route    GET /api/v1/brands/:id
//@access   Public
exports.getBrand = asyncHandler(async (req, res, next) => {
    
    const brand = await Brand.findById(req.params.id);
    if(!brand){
        return next( new ErrorResponse(`Category not found with id of ${req.params.id}`,404))
    }
    return res.status(200).json({
        success: true,
        data: brand
    })
   
});

//@desc     Create Brand
//@route    POST /api/v1/brands/
//@access   Private
exports.createBrand = asyncHandler(async (req, res, next) => {
    
    const brand = await Brand.create(req.body)
    return res.status(201).json({
        succes: true,
        data: brand
    });
});

//@desc     Update Brand
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBrand = asyncHandler(async (req, res, next) => {
    
    let brand = Brand.findById(req.params.id);
    if(!brand)
    {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    }

    brand = await Brand.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators:true
    });
    return res.status(201).json({
        succes: true,
        data: brand
    });
});

//@desc     Delete Brand
//@route    Delete /api/v1/bootcamps/:id
//@access   Private
exports.deleteBrand = asyncHandler(async (req, res, next) => {
    
    let brand = Brand.findById(req.params.id);
    if(!brand)
    {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    }

    await Brand.deleteOne(brand)
    return res.status(201).json({
        succes: true,
        data: {}
    });
});

