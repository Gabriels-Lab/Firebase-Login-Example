var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyAq5EuwGXS1vRpD8vdmvTQnRWHT3r8nIpA",
    authDomain: "aimhelper-8510a.firebaseapp.com",
    databaseURL: "https://aimhelper-8510a.firebaseio.com",
    projectId: "aimhelper-8510a",
    storageBucket: "aimhelper-8510a.appspot.com",
    messagingSenderId: "43997639659"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


