// Check if user already logged in
if(localStorage.getItem("loggedIn")){
  window.location.href = "index.html";
}

// Dummy users (front-end only)
let users = [
  { email: "akshaya@gmail.com", password: "12345" }
];

const loginForm = document.getElementById("login-form");
const forgotModal = document.getElementById("forgot-modal");
const forgotLink = document.getElementById("forgot-link");
const closeModal = document.getElementById("close-modal");
const resetBtn = document.getElementById("reset-password");

loginForm.addEventListener("submit", (e)=>{
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset previous borders
  emailInput.style.border = "";
  passwordInput.style.border = "";

  // Check for empty fields
  if(!email || !password){
    alert("Please fill out those fields");
    if(!email) emailInput.style.border = "2px solid red";
    if(!password) passwordInput.style.border = "2px solid red";
    return; // stop further execution
  }

  // ======= Existing login logic =======
  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("userEmail", email);
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
});


// Forgot password
forgotLink.addEventListener("click", ()=>{
  forgotModal.style.display = "flex";
});

closeModal.addEventListener("click", ()=>{
  forgotModal.style.display = "none";
});

resetBtn.addEventListener("click", ()=>{
  const email = document.getElementById("forgot-email").value;
  const user = users.find(u => u.email === email);
  if(user){
    const newPass = prompt("Enter new password:");
    if(newPass) {
      user.password = newPass;
      alert("Password updated!");
      forgotModal.style.display = "none";
    }
  } else {
    alert("Email not found!");
  }
});

// Close modal on outside click
window.onclick = function(e){
  if(e.target == forgotModal) forgotModal.style.display = "none";
}
