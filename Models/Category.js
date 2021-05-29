const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:{
        type : String,
        required: [true, 'Please enter Category title'],
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 characters']
    }
});

module.exports = mongoose.model('Category',CategorySchema);