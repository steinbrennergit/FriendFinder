//Initialize needed requisitions
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

//Set up server routes
var app = express()
var PORT = process.env.PORT || 3000;

//Allow for data to be displayed on HTML
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Set up routes for additional pages

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listener to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });