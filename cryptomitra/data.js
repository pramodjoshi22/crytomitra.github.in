 const firebaseConfig = {
    apiKey: "AIzaSyAqGRinfZYzshwJ6PQTZHRIru3l_GqqoK4",
    authDomain: "login-and-signup-page-f1aee.firebaseapp.com",
    projectId: "login-and-signup-page-f1aee",
    storageBucket: "login-and-signup-page-f1aee.appspot.com",
    messagingSenderId: "842521466904",
    appId: "1:842521466904:web:5d2636b40a5b28dbef4b6d",
    measurementId: "G-TTGGWHM7D5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}