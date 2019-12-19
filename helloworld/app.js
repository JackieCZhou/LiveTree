var firebaseConfig = {
    apiKey: "AIzaSyBJbH6n92KJxfGCirXHv_VFM0A1GwwZGU0",
    authDomain: "live-tree-16eb2.firebaseapp.com",
    databaseURL: "https://live-tree-16eb2.firebaseio.com",
    projectId: "live-tree-16eb2",
    storageBucket: "live-tree-16eb2.appspot.com",
    messagingSenderId: "1040801579497",
    appId: "1:1040801579497:web:ea0f283b6ed09d53cbcb78",
    measurementId: "G-59GL88Y848"
};


firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

    let user = snap.val();

    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked)
    userListUI.append($li);

});


function userClicked(e) {

    var userID = e.target.getAttribute("child-key");

    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");

    userDetailUI.innerHTML = ""

    userRef.on("child_added", snap => {


        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val()
        userDetailUI.append($p);


    });

}

