var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var publicPath = path.join(__dirname, 'build');


var PORT = (process.env.PORT || 8080);

//Intializes express 
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})


// If deployed, use the deployed database. Otherwise use the local ArticleScrape database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/ArticleScrape";
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI)




require('./src/controller/controller.js')(app);


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});