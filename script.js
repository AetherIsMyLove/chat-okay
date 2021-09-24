let username = prompt('Enter Your Name','Ẩn danh')
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getFirestore,collection, addDoc,doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
 const firebaseConfig = {
    apiKey: config.API_KEY,
    authDomain: "chat-project-dfe45.firebaseapp.com",
    projectId: "chat-project-dfe45",
    storageBucket: "chat-project-dfe45.appspot.com",
    messagingSenderId: "592584381220",
    appId: "1:592584381220:web:05e4483d70135980a9d9b1"
};
 const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
 

  // Initialize Firebase
 
  let btn = document.getElementById('btn')
  btn.addEventListener('click' , async function(e){
    e.preventDefault();

   let msg =document.querySelector('input').value
   const docRef = await addDoc(collection(db, "msg"), {
        msg:msg,
        name:username
    });
  
  
});
 const unsubscribe = onSnapshot(collection(db, "msg"), (doc) => {
     let data = doc._snapshot.docChanges
       let listMsg = document.querySelector('ul')

     
    for(let i =0;i< data.length;i++){
      listMsg.innerHTML += `
       <li>${data[i].doc.data.value.mapValue.fields.name.stringValue}:${data[i].doc.data.value.mapValue.fields.msg.stringValue}</li>
      `


      console.log(data[i])
    }
})

    
    
 
  