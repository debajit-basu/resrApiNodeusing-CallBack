const express = require('express');
// const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//middleware
/*app.use('/post' , (req , res , next) => {
    console.log("middleware running");
    next();
});*/

//Import routes
/*

const postRoute = require('./router/post');

app.use('/post' , postRoute);
*/


//Database

/*mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log('Database connected');
});*/



//Routes

/*
app.get('/' , (req,res) => {
    //console.log('rest api page');
    res.send('HELLO user rest API page is this');
})
*/




//How to we start listening to the server......
// app.listen(3000);
