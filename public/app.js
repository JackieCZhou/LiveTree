// document.addEventListener("DOMContentLoaded", event => {
//     googleLogin();
// });


document.getElementById("loadContent").addEventListener("click", event => {
    const peopleRef = document.querySelector('#contentList');
    const db = firebase.firestore();


    function renderPeople(doc) {
        let li = document.createElement('LI');
        let name = document.createElement('span');
        let pets = document.createElement('div');
        let cross = document.createElement('span');

        li.setAttribute('data-id', doc.id)

        name.textContent = doc.data().Name;
        pets.textContent = doc.data().Pets;
        cross.textContent = 'X';

        li.appendChild(name);
        li.appendChild(pets);
        li.appendChild(cross);

        peopleRef.appendChild(li);

        //deleting data
        cross.addEventListener('click', (e) => {
            e.preventDefault();
            let id = e.target.parentElement.getAttribute('data-id');
            db.collection('people').doc(id).delete();
            console.log('content deleted');
        })

    }

    db.collection('people').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderPeople(doc);
        })

    })

});



document.getElementById("contactForm").addEventListener("submit", event => {
    event.preventDefault();

    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    var name = document.getElementById('name').value;
    var pets = document.getElementById('number').value;


    db.collection("people").doc(name).set({
        Name: name,
        Pets: pets,
    })
        .then(function () {
            contactForm.name.value = '';
            contactForm.number.value = '';
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
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


// function addLi() {
//     e.preventDefault();

//     db.collection('people').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {

//             console.log(docs.data());

//         }
//         )
//     }
//     )
// }

// build and auto populate random interger list

var numList = [];

function myFunction() {
    var rnd = Math.floor(Math.random() * 10);
    document.getElementById('mathVal').value = rnd;
    numList.push(rnd);

    console.log(numList);

    buildList();
}

// // <!-- script for math & placement of math val --> not working, will come back to

// function buildList() {

//     var newNum = document.getElementsByName("numList"[0]),

//         listNode = document.getElementById("newList"),
//         liNode = document.createElement("LI"),
//         txtNode = document.createTextNode(newNum);

//     liNode.appendChild(txtNode);
//     listNode.appendChild(liNode);

//     console.log(newNum);
// }

// onHover function

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
});
