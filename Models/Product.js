const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title : {
        type: String,
        required: [true, 'Please enter product title'],
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 characters']
    },
    description : {
        type : String,
        required : [true, 'Please add a description for product'],
        trim: true,
        maxlength : [1000, 'Description can not be more than 1000 characters']
    },
    code : {
        type : String,
        required: [true, 'Please add a product code'],
        trim : true,
        maxlength : [20,'Code can not be more than 20 characters']
    },
    barcode : {
        type : String,
        required: [true, 'Please add a Barcode'],
        trim : true,
        maxlength : [20,'Barcode can not be more than 20 characters']
    },
    salePrice : {
        type : Number,
        required: [true, 'Please add a sale price'],
        min : 0
    },
    purchasePrice : {
        type : Number,
        required: [true, 'Please add a purchase price'],
        min : 0
    },
    purchaseVat : {
        type : Number,
        required: [true, 'Please add a purchase price'],
        min : 0,
        max : 100
    },
    saleVat : {
        type : Number,
        required: [true, 'Please add a purchase price'],
        min : 0,
        max : 100
    },
    profit : {
        type : Number
    },
    averageRating : {
        type: Number,
        min: [1,'Rating must be at least 1'],
        max: [10,'Rating must can not be more than 10']
    },
    stock : {
        type : Number,
        required: [true, 'Please add a stock value'],
        min : 0,
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
    },
    brand: {
        type: mongoose.Schema.ObjectId,
        ref: 'Brand',
        required: true
    }

},{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
})


BootcampSchema.virtual('images',{
    ref: 'ProductImages',
    localField: '_id',
    foreignField: 'product',
    justOne: false
})

module.exports = mongoose.model('Product',ProductSchema);