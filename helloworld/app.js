var database = firebase.database();
var newEntry = database.ref();

var destEntered = "";
var nextEntered = "";

$("#submit").on("click", function(event) {
    event.preventDefault();

    trainEntered = $("#train-input").val().trim();
    destEntered = $("#destination-input").val().trim();
    


    newEntry.push({
        train: trainEntered,
        destination: destEntered,
        
    })
});


newEntry.on("child_added", function(childSnapshot) {
    var newAdd = childSnapshot.val();
    
    console.log("Name: " + newAdd.train);
    console.log("Number of Fans: " + newAdd.destination);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var trainTd = $("<td>").text(newAdd.train);
    var destinationTd = $("<td>").text(newAdd.destination);


    tRow.append(trainTd, destinationTd);
    tBody.append(tRow);
    $("#table").append(tBody);


    
    

});