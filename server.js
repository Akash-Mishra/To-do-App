// server.js

// set up ===================================================
    var express = require('express');
    var app = express();                 // create our app using express
    var mongoose = require('mongoose');  // mongoose for mongodb
    var morgan = require('morgan');     // logs requests to the console
    var bodyParser = require('body-parser'); // pull information from html request Post (express 4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT request(express 4)
    // var database = require('./config/database');
    var port = process.env.PORT || 8888;       // set the port

// configuration ============================================
    // mongoose.connect(database.url);    // connect to the mongodb database hosted on localhost

    // app.configure(function (){
        app.use(express.static(__dirname + '/public'));    // set the static files location  /public/img will be /img for users
    	app.use(morgan('dev'));                   // log every request to the console
    	app.use(bodyParser.urlencoded({'extended':'true'}));  // parse application/x-www-form-urlendoded
    	app.use(bodyParser.json());            // parse application/json
    // });

// listen (start app with node server.js)  ====================
    app.listen(8080);
    console.log('Magic Mike at port 8080');