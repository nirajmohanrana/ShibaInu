// import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDjirj7idqE-hb60fCDkj6Yw7JHbfSzwz0",
  authDomain: "shibainu-8caa0.firebaseapp.com",
  projectId: "shibainu-8caa0",
  storageBucket: "shibainu-8caa0.appspot.com",
  messagingSenderId: "549170528951",
  appId: "1:549170528951:web:659a27e0f209c07c02c332",
  measurementId: "G-BCNCPD7BDQ"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
// Variables
const auth = firebase.auth()
const database = firebase.database()

// Register Function
function register() {
    // Getting Input
    user = document.getElementById('user').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    favDog = document.getElementById('favdog').value

    //Validate it
    if( validate_email(email) == false || validate_password(password) == false){
        return
        alert('Email or Password is not proper')
        // Dont run code
    }
    if(validate_field(user) == false || validate_field(favDog) == false){
        alert('Name or Favorite dog is incomplete')
    }

    // Moving to auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){

        // Declare user var

        var user = auth.current
        
        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
            user : user,
            email : email,
            password : password,
            favDog : favDog,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)

        alert('User created')

    })
    .catch(function(error){
        // Firebase will alert
        var error_code = error.code
        var error_message = error.message
    })
}

function validate_email(email) {
    expresssion = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expresssion.test(email) == true){
        // Email is proper
        return true
    } else {
        // Email is not-proper
        return false
    }
}

function validate_password(password) {
    // Words/Numbers should be more than 6
    if(password>6){
        return false
    } else {
        return true
    }
}

function validate_field(field){
    if (field == null) {
        return false
    }

    if (field.length <= 0){
        return false
    } else {
        return true
    }
}
