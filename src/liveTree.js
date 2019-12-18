// Frame: Create a live-updating tree view as a web application
// Must contain groups of nodes w/ main node that can house any # of factories
// Each factory node can generate a pre-set amount of random numbers (max 15) rep as children of their resp. parents
// Create though user input (button) specifying the # of children to generate & ranges of said children
// Each factory must be removable, name editable & have lower/upper bound for the random num generation ---- ????

// Changes should be immediate w/o refreshing (Firebase)
// State of tree should be persistent & not be undone w/ reloading
// All of a factories existing child does should be removed up each new generation ---- ????
// Add security ---- ????
// Host on Heroku

var Firebase = require("firebase");
var axios = require("axios");

firebase.initializeApp({
    databaseURL: "https://live-tree-number-generator.firebaseio.com",
});

var database = firebase.database();
var newEntry = database.ref();


var newMan = "";
var newWoman = "";

$("#submit").on("click", function (event) {
    manEntered = $("#man-input").val().trim();
    womanEntered = $("woman-input").val().trim();


    newEntry.push({
        Men: manEntered,
        Women: womanEntered,
    })
})

newEntry.on("child_added", function(childSnapshot){
    var newAdd = childSnapshot.val();

    var tBody = $("tbody");
    var tRow = $("<tr>");

    var manId = $("<td>").text(newAdd.man);
    var womanId = $("<td>").text(newAdd.woman);

    tRow.append(newMan, newWoman);
    tBody.append(tRow);
    $("#table").append(tBody);
})