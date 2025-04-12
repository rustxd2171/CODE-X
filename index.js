window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  const modeToggle = document.getElementById('modeToggle');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggle.innerHTML = 'Light Mode <i class="bx bxs-sun"></i>';
    document.getElementById('snippet').style.backgroundColor = '#333';
    document.getElementById('example').style.color = '#fff'

  } else {
    document.body.classList.remove('dark-mode');
    modeToggle.innerHTML = 'Dark Mode <i class="bx bxs-moon"></i>';
    document.getElementById('snippet').style.backgroundColor = '#fff';
    document.getElementById('example').style.color = '#222';
  }
}

//code snippet
function showResult() {
  const code = document.getElementById("code-editor").value; // Get user code
  const preview = document.getElementById("preview"); // Get iframe
  preview.srcdoc = code; // Inject the code into the iframe
}



const snippet = document.getElementById('snippet');
const x = document.getElementById('example');
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('snippet').style.backgroundColor = '#333';
    document.getElementById('example').style.color = '#fff'
    document.getElementById('snippet').style.transition = '1s';
    modeToggle.innerHTML = 'Light Mode <i class="bx bxs-sun"></i>';

    localStorage.setItem('theme', 'dark');
  } else {
    document.getElementById('snippet').style.backgroundColor = '#fff';
    modeToggle.innerHTML = 'Dark Mode <i class="bx bxs-moon"></i>';
    document.getElementById('example').style.color = '#222';
    localStorage.setItem('theme', 'light');
  }
});

// card animation on scroll
window.addEventListener('scroll', () => {
  const element = document.querySelector('.morepar');
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    element.classList.add('show');
  }
});


//hamburger menu
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  }
  else {
    menuList.style.maxHeight = "0px";
  }
}


//login
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjErrnILNn6-vCOOXadPJioiHr5e9x29o",
  authDomain: "loginform-31195.firebaseapp.com",
  projectId: "loginform-31195",
  storageBucket: "loginform-31195.firebasestorage.app",
  messagingSenderId: "929008158439",
  appId: "1:929008158439:web:7c409af3dee09791174442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  //inputs email & password
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging in...")
      window.location.href = "after.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});


//loading...
document.getElementById("loading-spinner").style.display = "flex";
setTimeout(() => {
  document.getElementById("loading-spinner").style.display = "none";
}, 2000);

