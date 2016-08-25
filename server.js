// server.js

// set up ===================================================
    var express = require('express');
    var app = express();                 // create our app using express
    var mongoose = require('mongoose');  // mongoose for mongodb

// configuration ============================================
    mongoose.connect('mongodb://localhost/to_do');    // connect to the mongodb database hosted on localhost

    app.configure(function (){
    	app.use(express.static(_dirname + '/public'));    // set the static files location  /public/img will be /img for users
    	app.use(express.logger('dev'));                   // log every request to the console
    	app.use(express.parser());                        // pull information from html in POST
    });

// listen (start app with node server.js)  ====================
    app.listen(8080);
    console.log('Magic Mike at port 8080');