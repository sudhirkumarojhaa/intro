var home = $('.home');
home.hide();
home.delay(500).fadeIn(1000);


/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
  console.log("working")
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}