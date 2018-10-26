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


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:5000,
  animateOut: 'fadeOut',
  autoplayHoverPause:true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items: 1,
  margin: 30,
  stagePadding: 30,
  smartSpeed: 450,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      loop: false
    }
  }
})

