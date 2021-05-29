const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    title:{
        type : String,
        required: [true, 'Please enter Category title'],
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 characters'],
        unique : true,
    },
    photo: {
        type:String,
        default: 'no-photo.jpg'
    },
});

module.exports = mongoose.model('Brand', BrandSchema);