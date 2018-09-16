document.getElementById("login").addEventListener("click", () => {
    snackbarIn();
    showLogout();
});
document.getElementById("logout").addEventListener("click", () => {
    snackbarOut();
    showLogIn();
});

function showLogout() {
    let x = document.getElementById("logout");
    let y = document.getElementById("login");
    y.style.display = "none";
    if (x.style.display = "none" || x.style.display === 0) {
        x.style.display = "block";
    } 
    else {
        x.style.display = "block";
    }
}

function showLogIn() {
  let y = document.getElementById("login");
  let x = document.getElementById("logout");
  x.style.display = "none";
  if (y.style.display = "none" || y.style.display.length === 0) {
      y.style.display = "block";
  }  else {
    y.style.display = "block";
  }
}

function snackbarIn() {
    var x = document.getElementById("snackbarin");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function snackbarOut() {
    var x = document.getElementById("snackbarout");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}