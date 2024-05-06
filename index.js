function display_form() {
    div = document.getElementById("signup-form");
    if (div.style.display === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }

  function login () {
    div = document.getElementById("signup-form");
    div = document.getElementById("login-form");
        div.style.display = "none";
        div.style.display = "flex";
  }

  function display() {
    div = document.getElementById("signup-form");
    div = document.getElementById("login-form");
        div.style.display = "flex";
        div.style.display = "none";
  }