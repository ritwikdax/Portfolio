//Theme
if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light");
}

function toggleDarkMode() {
  var element = document.body;
  if (localStorage.getItem("mode") === "light") {
    element.classList.remove("light");
    localStorage.removeItem("mode");
  } else {
    element.classList.add("light");
    localStorage.setItem("mode", "light");
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
