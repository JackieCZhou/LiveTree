window.prompt();

var login = prompt("Login With Google First!")

if (person == null || person == "") {
    txt = "Login Cancelled.";
} else {
    txt = "Hello " + person + "! Welcome to my page";
}


document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    const peopleRef = db.collection('women');
    const query = peopleRef.where('name', "Jackie");

    const myPost = db.collection('women').doc("Jackie");
    const allInfo = db.collection('men').doc("Chang");
    
    query.get()
        .then(products => {
            products.forEach(doc => {
                data = doc.data()
                document.write('${data.name}' + '<br>')
            })
        })

    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title
    })
    allInfo.onSnapshot(doc => {
        const data = doc.data();
        document.write("Name: " + data.Name + '<br>' + "Fans: " + data.Fans + '<br>')
    })


});

//edit name function

function updatePost(e) {
    const db = firebase.firestore();
    const myPost = db.collection("women").doc('Jackie');
    myPost.update({ Name: e.target.value })
}

//Google login setup

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write('Hello ${user.displayName}');
            console.log(user)
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

    console.log("txtVal");  // was working before I began adding random math function, will get back to once that it working.  Won't stop reloading pg
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


// build and auto populate list

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
