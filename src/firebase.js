import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA2P4DR0nrC1ky-DG3OP7p-SIJuSwDa-10",
    authDomain: "burger-queen-3a295.firebaseapp.com",
    databaseURL: "https://burger-queen-3a295.firebaseio.com",
    projectId: "burger-queen-3a295",
    storageBucket: "burger-queen-3a295.appspot.com",
    messagingSenderId: "159250032415",
    appId: "1:159250032415:web:7a7652d554976f6dec322a"
  };

  firebase.initializeApp(config);

  export default firebase;