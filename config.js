import * as firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDt1Zl1_f3cQeHMorHRV1Ah0o4HzhCxWLU",
    authDomain: "story-hub-7e8c7.firebaseapp.com",
    projectId: "story-hub-7e8c7",
    storageBucket: "story-hub-7e8c7.appspot.com",
    messagingSenderId: "992464370271",
    appId: "1:992464370271:web:ef50b3cd68489e13bc39ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();