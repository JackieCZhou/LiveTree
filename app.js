var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./index.html")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});


var database = firebase.database();
var newEntry = database.ref();

var fansEntered = "";
var nameEntered = "";


$("#submit").on("click", function(event) {
    event.preventDefault();

    nameEntered = $("#name-input").val().trim();
    fansEntered = $("#fans-input").val().trim();
    


    newEntry.push({
        Name: nameEntered,
        Fans: fansEntered,
        
    })


});


newEntry.on("child_added", function(childSnapshot) {
    var newAdd = childSnapshot.val();
    
    console.log("Name: " + newAdd.name);
    console.log("Fans: " + newAdd.fans);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var trainTd = $("<td>").text(newAdd.name);
    var destinationTd = $("<td>").text(newAdd.fans);




    tRow.append(nameTd, fansTd);
    tBody.append(tRow);
    $("#table").append(tBody);
    

});