const mongoose = require('mongoose');

const ProductImageSchema = new mongoose.Schema({

    ImageUrl: {
       type : String,
       default : 'no-photo.jpg'
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Products',
        required: true
    }
    
});

module.exports = mongoose.model('ProductImage',ProductImageSchema);