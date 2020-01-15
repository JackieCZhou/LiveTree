        var firebaseConfig = {
        apiKey: "AIzaSyAG-qx615hR4eDgP1DAmPKhw0Js-o-DFyM",
        authDomain: "livetree-65129.firebaseapp.com",
        databaseURL: "https://livetree-65129.firebaseio.com",
        projectId: "livetree-65129",
        storageBucket: "livetree-65129.appspot.com",
        messagingSenderId: "789557141134",
        appId: "1:789557141134:web:5278c226c72779633873df"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig); 

      var messagesRef = firebase.database().ref('messages');





    document.getElementById("contactForm").addEventListener("submit", submitForm); 

    function submitForm(event){
        event.preventDefault();

        var name = getInputVal('name');
        var pets = getInputVal('number');

        console.log(123);

        saveMessage(name, pets);

    }


    function getInputVal(id){
        return document.getElementById(id).value;
    }

    function saveInfo(name, pets){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            name: name,
            pets: pets,
        }) 
    }
