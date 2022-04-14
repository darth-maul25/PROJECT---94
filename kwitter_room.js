
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
      var firebaseConfig = {
      apiKey: "AIzaSyAGYXy6viEq2E4-xY651Wm7TCxzbUWnRvg",
      authDomain: "proejct---kwitter.firebaseapp.com",
      databaseURL: "https://proejct---kwitter-default-rtdb.firebaseio.com",
      projectId: "proejct---kwitter",
      storageBucket: "proejct---kwitter.appspot.com",
      messagingSenderId: "222352550782",
      appId: "1:222352550782:web:83488fb626a60b0466a12f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
