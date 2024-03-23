  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAdvM1jW3Fy1-1c84QT_0Ncy0WugNYe1OA",
    authDomain: "first-project-8d4fe.firebaseapp.com",
    databaseURL: "https://first-project-8d4fe-default-rtdb.firebaseio.com",
    projectId: "first-project-8d4fe",
    storageBucket: "first-project-8d4fe.appspot.com",
    messagingSenderId: "80974929817",
    appId: "1:80974929817:web:963a940394d16c74ff3d08",
    measurementId: "G-HSQRBT7F1M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();
  const auth = getAuth(app);



  var email = document.getElementById("email")
  var password = document.getElementById("password")


  window.handleSignin  = function(e){
    // console.log(e)
    console.log("check")
    e.preventDefault();

    signInWithEmailAndPassword(auth,email.value,password.value).then(function(response){
        console.log(response,"user")
     localStorage.setItem("user",JSON.stringify(response))
        alert("Success Login!")

        
        var id = response.user.uid
        // console.log(id)

        var reference = ref(database,`User/${id}`);
        onValue(reference,function(user){
            console.log(user.val())
        })
       
setTimeout(() => {
  
  window.location.href = `../todo/todo.html`
}, 3000);

        email.value = "",
        password.value = ""

    })
    .catch(function(error){
        console.log(error,"error")
        alert("Error Login!")
        alert("Try Again!")
    })




  }


 