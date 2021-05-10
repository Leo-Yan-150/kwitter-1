var firebaseConfig = {
      apiKey: "AIzaSyDVzuXEGBeTEdgIv37qks-RVoT4lkO10A4",
      authDomain: "kwitter1-96c53.firebaseapp.com",
      databaseURL: "https://kwitter1-96c53-default-rtdb.firebaseio.com",
      projectId: "kwitter1-96c53",
      storageBucket: "kwitter1-96c53.appspot.com",
      messagingSenderId: "657743082848",
      appId: "1:657743082848:web:914ab58fd6e588525cda05"
    };
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
