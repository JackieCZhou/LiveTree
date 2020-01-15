var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var firebase = require ('firebase');
        
var firebaseConfig = {
apiKey: "AIzaSyAG-qx615hR4eDgP1DAmPKhw0Js-o-DFyM",
authDomain: "livetree-65129.firebaseapp.com",
databaseURL: "https://livetree-65129.firebaseio.com",
projectId: "livetree-65129",
storageBucket: "livetree-65129.appspot.com",
messagingSenderId: "789557141134",
appId: "1:789557141134:web:5278c226c72779633873df"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});
