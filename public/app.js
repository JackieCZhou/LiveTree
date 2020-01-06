document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();

    const db = firebase.firestore();

    const myPost = db.collection('women').doc("Jackie");
    const allInfo = db.collection('men').doc("Chang");

    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.write(data.Chang + data.Fans + '<br>')
    })
    allInfo.onSnapshot(doc => {
        const data = doc.data();
        document.write(data.Fans + '<br>')
    })


});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write('Hello ${ user.displayName }');
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
