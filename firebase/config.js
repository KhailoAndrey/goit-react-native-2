import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import * as firebase from "firebase";
// import "firebase/auth";

// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAVmkwNbDJy1ufJUiwEvnwzMoaHl2XQwI8",
  authDomain: "react-native-1a23f.firebaseapp.com",
  projectId: "react-native-1a23f",
  storageBucket: "react-native-1a23f.appspot.com",
  messagingSenderId: "386252943623",
  appId: "1:386252943623:web:fc459c59417d5138d015a2",
  measurementId: "G-JL06C1TBHG"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default firebase;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);