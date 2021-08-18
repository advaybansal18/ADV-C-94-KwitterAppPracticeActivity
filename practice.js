var firebaseConfig = {
    apiKey: "AIzaSyBksG1yuNCOlPvI55wcp_SqrFK64Y3hOm4",
    authDomain: "adv-c-93-to-c-97-kwitter.firebaseapp.com",
    databaseURL: "https://adv-c-93-to-c-97-kwitter-default-rtdb.firebaseio.com",
    projectId: "adv-c-93-to-c-97-kwitter",
    storageBucket: "adv-c-93-to-c-97-kwitter.appspot.com",
    messagingSenderId: "982817851494",
    appId: "1:982817851494:web:c044ef6b5ba3c282c385a7",
    measurementId: "G-0LB9RWM1F4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }