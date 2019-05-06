// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const examRoute = require('./routes/exam.route'); // Imports routes for the exam
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://quangchu:Quangpro1!@ds157653.mlab.com:57653/testing-va';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/exams', examRoute);

let port = 8888;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});