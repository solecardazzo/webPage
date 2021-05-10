window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav_bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky");
  }
}
