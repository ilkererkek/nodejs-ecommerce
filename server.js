const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path= require('path')
const morgan=require('morgan');

const connectDB = require('./config/MongoDB');

const products = require('./routes/products');

const app = express();

app.use(express.json());
dotenv.config({ path: './config/config.env' });
connectDB();

app.use('/products',products)



if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});