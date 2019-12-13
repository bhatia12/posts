<script>
import {db} from "../firebase.js"
import {loginstore,loginclickstore,textdatastore} from '../data/datastore.js'
import { writable } from "svelte/store" 
import firebase from 'firebase/app';
// import fireauth from 'firebase/auth';
import 'firebase/auth';







  


function loginn(){
  
  let gate = new firebase.auth.GoogleAuthProvider();
  console.log(gate);
  
  firebase.auth().signInWithPopup(gate).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  console.log(result);

  // The signed-in user info.
  var user = result.user;
  var uid = user.uid;
  loginstore.set(uid);
  console.log(uid);
  loginclickstore.set(true);
  console.log($loginclickstore);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});



}



  
  


</script>


<style>

</style>


<div class="float-center ml-8 mt-8"on:click={()=>textdatastore.set(true)}>

<div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 ml-10 rounded focus:outline-none focus:shadow-outline" id="Email" type="button" on:click={()=>{loginn()}}>
        Sign In
      </button>
      
    </div>
  </form>
  
</div>

</div>