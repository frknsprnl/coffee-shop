const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
require('dotenv').config();

const app = express();

const mongoURL = `${process.env.DB_URL}`;

mongoose.connect(mongoURL, () => {
    console.log("db connected successfully.");
})

//middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//routes
app.use('/user', userRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})