
import firebase from 'firebase/app';
import 'firebase/firestore';

//   firebase cofig

var firebaseConfig = {
    apiKey: "AIzaSyBQq1uF2KO3KrWmqlvXmATOUc3v8BHVhBw",
    authDomain: "posts-f0551.firebaseapp.com",
    databaseURL: "https://posts-f0551.firebaseio.com",
    projectId: "posts-f0551",
    storageBucket: "posts-f0551.appspot.com",
    messagingSenderId: "616229166111",
    appId: "1:616229166111:web:1e9c917f6ce044f4a0c92a",
    measurementId: "G-6F9KVL9BMY"
  };


	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	console.log(firebaseConfig);


	export const db = firebase.firestore();
  db.settings({timestampsInSnapshots:true});
