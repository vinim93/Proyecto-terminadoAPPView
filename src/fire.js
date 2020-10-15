




import firebase from 'firebase';

var firebaseConfig ={
    apiKey: "AIzaSyBKMZLynggbQv1mxc0FwI3dFPdOxim6r0g",
    authDomain: "login-de-appview.firebaseapp.com",
    databaseURL: "https://login-de-appview.firebaseio.com",
    projectId: "login-de-appview",
    storageBucket: "login-de-appview.appspot.com",
    messagingSenderId: "438228130677",
    appId: "1:438228130677:web:ba9aa8e405273b67c3113c",
    measurementId: "G-PYG9SP6D5B"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;