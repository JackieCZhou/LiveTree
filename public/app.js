// document.addEventListener("DOMContentLoaded", event => {
//     googleLogin();
// });


document.getElementById("loadContent").addEventListener("click", event => {
    const peopleRef = document.querySelector('#contentList');
    const db = firebase.firestore();


    function renderPeople(doc) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let pets = document.createElement('span');
        let cross = document.createElement('div');

        li.setAttribute('data-id', doc.id)

        name.textContent = doc.data().Name;
        pets.textContent = doc.data().Pets;
        cross.textContent = 'x';

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

    //real time updates

    db.collection('people').orderBy('Name').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            if (change.type == 'added') {
                renderPeople(change.doc);
            } else if (change.type == 'removed') {
                let li = peopleRef.querySelector('[data-id=' + change.doc.id + ']');
                peopleRef.removeChild(li);
            }
            console.log(change.doc.data())
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


//account form add 
document.getElementById("newAccount").addEventListener("submit", event => {
    event.preventDefault();

    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();

    var firstName = document.getElementById('inputFirst').value;
    var lastName = document.getElementById('inputLast').value;
    var password = document.getElementById('inputPassword').value;
    var email = document.getElementById('inputEmail').value;
    var city = document.getElementById('inputCity').value;
    var state = document.getElementById('inputState').value;
    var zipcode = document.getElementById('inputZip').value;
    var signup = document.getElementById('gridCheck').value;
    
    db.collection("accounts").doc(name).set({
        first: firstName,
        last: lastName,
        password: password,
        email: email,
        city: city,
        state: state,
        zip: zipcode,
        signup: signup,
    })
        .then(function () {
            newAccount.firstName.value = '';
            newAccount.lastName.value = '';
            newAccount.password.value = '';
            newAccount.email.value = '';
            newAccount.city.value = '';
            newAccount.state.value = '';
            newAccount.zipcode.value = '';
            newAccount.signup.value = '';

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

// onHover function

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
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