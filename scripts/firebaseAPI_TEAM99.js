//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyB-5ksYOQQ80gTqkarbpHA4Ddeq_kMgzzs",
    authDomain: "comp-1800demo-320f3.firebaseapp.com",
    projectId: "comp-1800demo-320f3",
    storageBucket: "comp-1800demo-320f3.appspot.com",
    messagingSenderId: "135465756811",
    appId: "1:135465756811:web:486f2c140ffbbb3a460c8e"
  };
  

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
