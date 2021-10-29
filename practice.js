// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBQCVAXhKXLk2dm90VagnnSuZBhh0R-g3g",
    authDomain: "kwitter-23d4f.firebaseapp.com",
    databaseURL: "https://kwitter-23d4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-23d4f",
    storageBucket: "kwitter-23d4f.appspot.com",
    messagingSenderId: "1016579349201",
    appId: "1:1016579349201:web:b2729c66209273def7c3f0",
    measurementId: "G-RT6S9M9E5C"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}