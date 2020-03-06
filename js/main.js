// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBABLbPdNHoNcBOBUoS2ZoBt4h0Elsjz60",
    authDomain: "astrapia-project.firebaseapp.com",
    databaseURL: "https://astrapia-project.firebaseio.com",
    projectId: "astrapia-project",
    storageBucket: "astrapia-project.appspot.com",
    messagingSenderId: "282173338869",
    appId: "1:282173338869:web:5d103587b0ea11f73481bc",
    measurementId: "G-T5LK1R58T3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

auth = firebase.auth();

$(document).ready(function () {
    $('#logoutBtn').on("click", function (){
        auth.signOut();
    });

    auth.onAuthStateChanged(function (user) {
        if (user) {
          $("#userEmail").text(user.email);
        }
    });
});