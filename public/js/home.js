function showNextSlide() {

};

function showPrevSlide() {

};

function showSlide(n) {

};

$(document).ready(() => {
  var index = 0;
  var slides = $(".slides").children();
  var dots = $(".dots");

  for (i = index + 1; i < slides.length; i++) {
    slides.eq(i).hide();
  }

  $(".prev").click(() => {
    slides.eq(index).hide();
    index = index > 0 ? --index : slides.length;
    slides.eq(index).show();
  });
  $(".next").click(() => {
    slides.eq(index).hide();
    index = index < slides.length - 1 ? ++index : 0;
    slides.eq(index).show();
  });

})
