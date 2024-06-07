let head = document.getElementById("name");
let log = document.getElementById("Log");

log.onclick = function out() {
  let sure = window.prompt("do you want to exit");

  if ((sure.innerHTML = "yes" )) {
    window.location.replace("../pages/login.html");
  }
};

window.onload = head.innerHTML = x;
