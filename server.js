require('dotenv/config')
const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    port = process.env.PORT || 4000;


const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin1234',
    database: 'test_rest_api'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/router/appRoute'); //importing route
routes(app); //register the route