const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path= require('path')
const morgan=require('morgan');

const connectDB = require('./config/MongoDB');
const errorHandler = require('./middleware/error')

const products = require('./routes/products');
const brands = require('./routes/brands');

const app = express();

app.use(express.json());
dotenv.config({ path: './config/config.env' });
connectDB();


app.use('/brands',brands)

app.use(errorHandler);

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});