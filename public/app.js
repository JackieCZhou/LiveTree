document.addEventListener("DOMContentLoaded", event => {
    googleLogin();
});


document.getElementById("loadContent").addEventListener("click", event => {

    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();
    const peopleRef = db.collection('people');

    const query = peopleRef.orderBy('Pets', "asc");


    query.get()
        .then(people => {
            people.forEach(doc => {
                data = doc.data()

                var txtVal = ("Name: " + data.Name + " has " + data.Pets + " Pets.");
                listNode = document.getElementById("contentList"),
                    liNode = document.createElement("LI"),
                    txtNode = document.createTextNode(txtVal);

                liNode.appendChild(txtNode);
                listNode.appendChild(liNode);

            })
        })
});





// Testing query for individual people

// const myPost = db.collection('women').doc("Jackie");
// const allInfo = db.collection('men').doc("Chang");

//     myPost.onSnapshot(doc => {
//         const data = doc.data();
//         document.write("Name: " + data.Name + '<br>' + "Pets: " + data.Fans + '<br>')
//     })
//     allInfo.onSnapshot(doc => {
//         const data = doc.data();
//         document.write("Name: " + data.Name + '<br>' + "Pets: " + data.Fans + '<br>')
//     })


//Google login setup

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;

            var txtVal = ('Hello ' + user.displayName + ", welcome to my page!");
            listNode = document.getElementById("loadPeople"),
                liNode = document.createElement("LI"),
                txtNode = document.createTextNode(txtVal);

            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);


            console.log(user.displayName)
        })
        .catch(console.log)
}

// <!-- script for list generation under tabs -->

function addLi() {
    e.preventDefault();
    var txtVal = document.getElementById("txtVal").value,

        listNode = document.getElementById("list"),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    console.log("txtVal");
}


// onHover function

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
});


// hide/reveal form onClick
$(document).ready(function () {
    $("#formButton").click(function () {
        $("#form1").toggle();
    });
});

$(document).ready(function () {
    $("#hide").click(function () {
        $("#form1").toggle();
    });
});


// build and auto populate random interger list

var numList = [];

function myFunction() {
    var rnd = Math.floor(Math.random() * 10);
    document.getElementById('mathVal').value = rnd;
    numList.push(rnd);

    console.log(numList);

    buildList();
}


function buildList() {

    var newNum = document.getElementsByName("numList"[0]),

        listNode = document.getElementById("newList"),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(newNum);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    console.log(newNum);
}
