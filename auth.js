// Simple user storage using localStorage

function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  // Save user to localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password!");
  }
}

function resetPassword() {
  const email = document.getElementById("forgot-email").value;
  const newPassword = document.getElementById("new-password").value;

  const storedEmail = localStorage.getItem("userEmail");

  if (email === storedEmail) {
    localStorage.setItem("userPassword", newPassword);
    alert("Password reset successful! Please login with new password.");
    window.location.href = "login.html";
  } else {
    alert("Email not found!");
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  alert("Logged out successfully!");
  window.location.href = "login.html";
}

// Redirect to login if not logged in
if (
  !localStorage.getItem("isLoggedIn") &&
  !window.location.href.includes("login.html") &&
  !window.location.href.includes("signup.html") &&
  !window.location.href.includes("forgot.html")
) {
  window.location.href = "login.html";
}

// Dummy Google login
function googleLogin() {
  alert("Google Login Demo - (Real integration requires backend)");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
}
