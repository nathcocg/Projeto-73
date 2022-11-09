import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD063WTRRp9hqHDrry0LRq95pNu3zqpG94",
  authDomain: "bicicleta-eletronica.firebaseapp.com",
  projectId: "bicicleta-eletronica",
  storageBucket: "bicicleta-eletronica.appspot.com",
  messagingSenderId: "777022380523",
  appId: "1:777022380523:web:85da7254f92ee85c5be1ae"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
