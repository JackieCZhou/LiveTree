var database = firebase.database();
var newEntry = database.ref();

var destEntered = "";
var nextEntered = "";
var freqEntered = "";
var trainEntered = "";
var minutesAway = "";

$("#submit").on("click", function(event) {
    event.preventDefault();

    trainEntered = $("#train-input").val().trim();
    destEntered = $("#destination-input").val().trim();
    startEntered = $("#start-input").val().trim();
    freqEntered = $("#freq-input").val().trim();
    


    newEntry.push({
        train: trainEntered,
        destination: destEntered,
        startTime: startEntered,
        frequency: freqEntered,
        // minutesAway: timeft,
        
    })


});


newEntry.on("child_added", function(childSnapshot) {
    var newAdd = childSnapshot.val();
    
    console.log("Train: " + newAdd.train);
    console.log("Destinaion: " + newAdd.destination);
    console.log("Start Time: " + newAdd.startTime);
    console.log("Frequency: " + newAdd.frequency);
    
    var tBody = $("tbody")
    var tRow = $("<tr>");

    var trainTd = $("<td>").text(newAdd.train);
    var destinationTd = $("<td>").text(newAdd.destination);
    var frequencyTd = $("<td>").text(newAdd.frequency);

    
    var currentTime = moment();
    var firstTime = newAdd.startTime;
    var frequency = newAdd.frequency;
    // difference in time between when 1st train left & current time
    var diffTime = moment().diff(moment(firstTime, "HH:mm"), "minutes");
    console.log(diffTime);
    //remainder = minutes into last train (ie: train is on a 32 min trip, it's 28 mins into trip, there's 4 minutes left, 28 is the num calc)
    var timePassed = diffTime % frequency;
    // minutes difference from amount of time train has "traveled" to amount of time before it's arrival
    var timeLeft = frequency - timePassed;
    console.log(timeLeft)
    var nextTrain = moment().add(timeLeft, "minutes");
    var nextTrainTime = $("<td>").text(moment(nextTrain).format("hh:mm"));
    console.log(nextTrain);
    var minAwayTd = $("<td>").text(timeLeft);



    tRow.append(trainTd, destinationTd, frequencyTd, nextTrainTime, minAwayTd);
    tBody.append(tRow);
    $("#table").append(tBody);


    
    

});