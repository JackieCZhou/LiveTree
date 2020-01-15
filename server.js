var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var firebase = require("firebase");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
