import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCEtVIO5vupiJRAye0F81kOt2sGMro6naE",
    authDomain: "shopping-carrier.firebaseapp.com",
    databaseURL: "https://shopping-carrier.firebaseio.com",
    projectId: "shopping-carrier",
    storageBucket: "shopping-carrier.appspot.com",
    messagingSenderId: "658671264336",
    appId: "1:658671264336:web:f53158faae3ceff8ec6755"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase }