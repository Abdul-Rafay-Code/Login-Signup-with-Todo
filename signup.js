  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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



  var username = document.getElementById("username")
  var email = document.getElementById("email")
  var password = document.getElementById("password")


  window.handleSignup  = function(e){
    // console.log(e)
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email.value,password.value).then(function(response){
        console.log(response,"user")
        alert("Success Response!")

        var id = response.user.uid
        // console.log(id)

        set(ref(database,`User/${id}`),
        {
            userName: username.value,
            email: email.value,
            id: id
            
        })
        .then(function(response){
            console.log(response,"data")
            alert("Your data has been saved!")
            
           
        })
        .catch(function(error){
            console.log(error,"data error")
            alert("Your data has not saved")
            alert("Try Again!")
        })
        username.value = "",
        email.value = "",
        password.value = ""
        

        
        
        
        // if(username.length > 0 || email.length > 0 || password.length > 6 ){
          setTimeout(() => {
            
            window.location.href = `../login/login.html`
          }, 4000);
        // }
        
        
        
        // form.style.display = "none"

    })
    .catch(function(error){
      console.log(error,"error")
      alert("Error")
        alert("Try Again!")
    })


     
    //     // `<a href="../login/login.html"></a>`
        // btn.innerHTML = link
    // }




  }

//   window.handleTarget = function(){

//     var userName = document.getElementById("username").value
//     var Email = document.getElementById("email").value
//     var Password = document.getElementById("password").value
//     var link = document.getElementById("login-link")
//     var btn = document.getElementById("signup-btn")

//     if(userName.length > 0 || Email.length > 0 || Password.length > 6 ){
//         // `<a href="../login/login.html"></a>`
//         // btn.innerHTML = link
//         window.location.href = "../login/login.html"

//         // username.style.backgroundColor = "red"

//     }
//   }
//   handleTarget()