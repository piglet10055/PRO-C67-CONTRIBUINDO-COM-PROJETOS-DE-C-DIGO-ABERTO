import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyATzFk6NnEwOiFu5vEH0ZpRfEMD8iUPTRo",
    authDomain: "c58aaaaaaa.firebaseapp.com",
    projectId: "c58aaaaaaa",
    storageBucket: "c58aaaaaaa.appspot.com",
    messagingSenderId: "455815328934",
    appId: "1:455815328934:web:d85d42d13ccf189c947067"
  };
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();