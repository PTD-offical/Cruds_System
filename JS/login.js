// !Console log (Prints)
console.log("Welcome to my Cruds System");
console.log("!!!DON'T MISS WITH ANYTHING IN CONSOLE!!!");
// !###########################################################//

let user = document.getElementById("user");
let pass = document.getElementById("pass");
let sign = document.getElementById("sign");
let alert = document.getElementById("alert");

// account info
let admin_user = "mohammad",
  admin_pass = "123456";

// !Sign function
sign.onclick = function sign() {
  if (user.value == admin_user && pass.value == admin_pass) {
    window.location.replace("../pages/dash.html");
    alert.textContent = "you are an admin welcome.";
  }
  if (user.value != admin_user || pass.value != admin_pass) {
    alert.textContent = "Wrong information, Try agin.";
  }
  if (user.value == "" || pass.value == "") {
    alert.textContent = "Please fill in the Form.";
  }
};

// !reload function
function reload() {
  user.textContent = "";
  pass.textContent = "";
  alert.textContent = "";
}

// !reload
window.onload = reload;
window.onload = user.value.focus;
