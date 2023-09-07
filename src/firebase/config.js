import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPHhXTlRdJjzFZEvgp_KFVRpcsN61X_WE",
    authDomain: "react-blog-61350.firebaseapp.com",
    projectId: "react-blog-61350",
    storageBucket: "react-blog-61350.appspot.com",
    messagingSenderId: "930983470853",
    appId: "1:930983470853:web:720ec9d3d3c9e7817e796c",
    measurementId: "G-3QEEDC8HM7"
  };
  firebase.initializeApp(firebaseConfig);
  const projectAuth=firebase.auth()

  export {projectAuth};