const Router = require('express').Router();

Router.route('/').get((req,res,next)=> res.status(200).json({
    "message":"hello"
}))


module.exports = Router;