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

    db.collection("accounts").doc(firstName).set({
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
            newAccount.inputFirst.value = '';
            newAccount.inputLast.value = '';
            newAccount.inputPassword.value = '';
            newAccount.inputEmail.value = '';
            newAccount.inputCity.value = '';
            newAccount.inputState.value = '';
            newAccount.inputZip.value = '';
            newAccount.gridCheck.value = '';

            console.log("Document successfully written!");
            window.location.href="file:///Users/jackiedavison/Desktop/LiveTree/public/pages/clienthome/clientHome.html"

        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
});

// onHover function

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });
});

function login() {

    event.preventDefault();
    var userEmail = document.getElementById('emailInput').value;
    var userPassword = document.getElementById('passwordInput').value;

    //Secure Auth
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {

        var errorMessage = "The information entered is incorrect";
        event.preventDefault();
        window.alert("Error: ") + errorMessage;
    })
};