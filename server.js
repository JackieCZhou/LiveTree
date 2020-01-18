var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, "./public")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
});



// let cross = document.createElement('div')

// let txtVal = document.getElementById("txtVal").value,

//     listNode = document.getElementById("list"),
//     liNode = document.createElement("LI"),
//     txtNode = document.createTextNode(txtVal),
//     crossNode = cross.textContent = 'X';


// liNode.appendChild(txtNode);
// listNode.appendChild(liNode);
// crossNode.appendChild(cross);






// const app = firebase.app();
// console.log(app);

// const db = firebase.firestore();
// const peopleRef = db.collection('people');
// const query = peopleRef.orderBy('Pets', "asc");
// query.get()
// .then(people => {
//     people.forEach(doc => {
//         data = doc.data()

//         var txtVal = ("Name: " + data.Name + " has " + data.Pets + " Pets.");
//         listNode = document.getElementById("contentList"),
//             liNode = document.createElement("LI"),
//             txtNode = document.createTextNode(txtVal);

//         liNode.appendChild(txtNode);
//         listNode.appendChild(liNode);

//     })
// })