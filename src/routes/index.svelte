<script>
  import Modal from "../components/modal.svelte";
  import Login from "../components/login.svelte";
  import SignUp from "../components/signup.svelte";
  import Table from "../components/table.svelte";
  import {db} from "../firebase.js";
  import {loginstore,postsstore,loadstore,uploaddatastore,loginclickstore,textdatastore} from '../data/datastore.js';
  let selected;
  let existingpost = $postsstore;
  
   
  let data = {dat:'',
            count:0} 
  
 let count = 0
  console.log($postsstore)
 

  // let count=0;
  

    // let numval = Object.keys($postsstore).length;
    // console.log(numval)
  

  function datas(){
   
    let test = {dat: data.dat,count:data.count};
    existingpost.push(test);
    postsstore.set(existingpost);
    console.log($postsstore);
    uploaddatastore.set(true);
    
  }
  
  // function addone(){
  //   count+=1;
  //   let test = {count: data.count};
  //   existingpost.push(test);
  //   postsstore.set(existingpost);
  //   console.log($postsstore);
  //   uploaddatastore.set(true);
  
  // loginstore
  
    
  
  // var foo = document.getElementById('thisone').innerHTML
  // foo++;
  // document.getElementById('thisone').innerHTML=foo;
  

// }
let id = "FTnjSZFRDk2JF5vPZgNC"; 

$:{if ($uploaddatastore == true) {
let docRef = db.collection("users").doc(id);
 docRef.get().then(function(doc){
    
    if(doc.exists){
      // console.log("Document data:", doc.data());
      // (postsstore.set({dat:$postsstore}))
      //  console.log(postsstore.set({dataa:$postsstore}));
      // doc.data().$postsstore;
      // postsstore.set(doc.data().dat)
      // console.log($postsstore)
      // console.log($postsstore);
    }
    else{
      console.log("No such document!");
    }

  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
    console.log("uploaddata");
    uploaddatastore.set(false);
    
    db.collection("users").doc(id).set({dataa:$postsstore});
    console.log("uploaddata");
  
}
}

$: {if($loginclickstore==true){
  
  let docRef = db.collection("users").doc(id);
  docRef.get().then(function(doc){
    
    if (doc.exists){
      // console.log("Document data:", doc.data());
    postsstore.set(doc.data().dataa);
    // console.log($postsstore);
  } else{
    console.log("No such document!");
    }
  
}).catch(function(error) {
  console.log("Error getting document:", error);
});
    }}

    
// db.collection("cities").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       postsstore.set(doc.data().dataa);
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });




// let docref = db.collection("users")
// docref.get().then(function(querySnapshot){
//   querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//         })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);



// })







</script>

<style>
 
 .full{
	 width: 100%;
	 height: 100%;
	 }
 
  .top {
    width: 100%;
    height: 9%;
    background-color: rgb(138, 180, 170);
	position:fixed;

  }
  .bottom{
	  width:80%;
	  height:100%;
	  margin-left:10%;
    margin-top:6%;
    
  
	  
  }
  .shadow1 {
    box-shadow: 0px 5px 30px #bdbdbd50;
  }
  .btn:focus {
    outline: none;
  }
  .pa{
    overflow-wrap: break-word;
    margin-left:20%;
  }


   .maincontainer {
    width: 30vw;
    height: 60vh;
    margin-left: 35%;
    margin-right: 0%;
    margin-top: 0%;
	  top:13%;
	  position:fixed;
    }

  /* .sign{
	  
    width: 50vw;
    height: 60vh;
    margin-left: 35%;
    margin-right: 0%;
    margin-top: 0%;
	top:13%;
	} */
	
	.custom-right{
		float: right;
		margin-right: 2%;
		display: block;
	}
  .text-box{
     
	  margin-top:6%;
	  margin-left:30%;
    
  }
	
</style>
<div class="full absolute">
<div class="absolute top">
  <div class="btn custom-right flex mt-2 flex ">
    <button
      on:click={() => (selected = 'login')}
      class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
      hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent
      rounded">
      Login
	</button>
  </div>
  
</div>
<div class="border-blue-300 ">

</div>

<div class="bottom border-blue-700">

{#if $textdatastore==true}
<div class="flex w-4/5">
	<textarea bind:value={data.dat} class="btn text-box w-1/2 text-blue-600 px-4 bg-grey-300 pt-8 py-4 shadow1 shadow-full" type="textarea"></textarea>
  <button class="bg-blue-500 mt-4  w-1/3 pb-4 mt-4 ml-4 float-center hover:bg-blue-700 text-white font-bold   rounded focus:outline-none focus:shadow-outline" type="button" on:click={()=>{datas()}} >
    Post
  </button>
</div>
{:else}
  <p class="text-red-600 text-center text-2xl">Please click to login to add post</p>
{/if}
  {#each $postsstore as post}
  <div class="w-1/2 mt-8 px-2 pb-8 pa py-4 ml-24 rounded shadow1 shadow-full">
    
    <p class="text-red-600 font-medium text-md ml-8 my-1" id="data"on:click{()=>{loadstore.set(true)}}>
      {post.dat}
    </p>
    <hr class="mt-8"/>
    <div class="flex">
    <button class= "btn hover mt-4">
      <img alt="likebutton" src="img/like.jpg" class="w-12">
    </button>
    
      <div class="mt-5 ml-2">{post.count}</div>
    
    </div>
    
  </div>
  {/each}
  
</div>







</div>



<div class="absolute maincontainer ">
	{#if selected=='login'}
  {#if $loginclickstore==false}
		<Modal>
			<Login/>
		</Modal>
    {/if}
	{/if}
	<!-- {#if selected=='signup'}
		<Modal>
			<SignUp/>
		</Modal>
	{/if} -->
</div>

  
  

  
