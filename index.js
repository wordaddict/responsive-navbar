document.getElementById("login").addEventListener("click", () => {
    showLogout();
});
document.getElementById("logout").addEventListener("click", () => {
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