// var home = $('.home');
// home.hide();
// home.delay(300).fadeIn(300);


/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function () {
  $("button").click(function () {
    $(".home").load("../red.html");
  });
});