// import firebase from "firebase/app"
// import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
// import "firebase/auth"

// const config = {
//   apiKey: "AIzaSyBQXqP6Zrwol8kUYQJ-nQ6dm5Q_xaSAzcA",
//   authDomain: "ecommerce-76f32.firebaseapp.com",
//   projectId: "ecommerce-76f32",
//   storageBucket: "ecommerce-76f32.appspot.com",
//   messagingSenderId: "120359482244",
//   appId: "1:120359482244:web:11ba8a4152e67f840123d1",
//   measurementId: "${config.measurementId}"
// };

// // initialize firebase app
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const analytics = getAnalytics(app)

// // export
// // export default firebase;
// export const auth = firebase.auth()
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// import * as firebase from "firebase/app"; // old way, wont work anymore
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// // firebase config
// const config = {
//   apiKey: "AIzaSyBQXqP6Zrwol8kUYQJ-nQ6dm5Q_xaSAzcA",
//   authDomain: "ecommerce-76f32.firebaseapp.com",
//   projectId: "ecommerce-76f32",
//   storageBucket: "ecommerce-76f32.appspot.com",
//   messagingSenderId: "120359482244",
//   appId: "1:120359482244:web:11ba8a4152e67f840123d1",
//   // measurementId: `${config.measurementId}`
// };
// // initialize firebase app
// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
// // export
// // export default firebase;
// export const auth = firebase.auth();
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXqP6Zrwol8kUYQJ-nQ6dm5Q_xaSAzcA",
   authDomain: "ecommerce-76f32.firebaseapp.com",
   projectId: "ecommerce-76f32",
   storageBucket: "ecommerce-76f32.appspot.com",
   messagingSenderId: "120359482244",
   appId: "1:120359482244:web:11ba8a4152e67f840123d1",
   // measurementId: `${config.measurementId}`
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


