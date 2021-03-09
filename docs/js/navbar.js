(function() {
  $(window).scroll(function() {
    var top_of_element = $("#nav").offset().top;
    var top_of_screen = $(window).scrollTop();

    if (top_of_element < top_of_screen) {
      $("#fixed-nav").css({display: 'block'});
    } else {
      $("#fixed-nav").css({display: 'none'});
    }
  });
}());
