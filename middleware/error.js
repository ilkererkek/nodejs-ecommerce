const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require('../middleware/async');
const errorHandler = (error, req, res, next) => {
    let err = {... error};
    err.message = error.message;
    console.log(error.stack.red.italic);

    if(error.name == 'CastError'){
        const message = `Resource not found with id of ${error.value}`;
        err = new ErrorResponse( message, 404)
    }
    if(error.code == 11000){
        const message = `Duplicate field value entered` 
        err = new ErrorResponse(message,400);
    }
    if(error.name=== 'ValidationError'){
        const message = Object.values(err.errors).map(value =>value.message);
        err = new ErrorResponse(message,400);
    }

     res.status(err.statusCode || 500).json({
        success: false,
        error: err.message || 'Server Error'
    });

}

module.exports= errorHandler;