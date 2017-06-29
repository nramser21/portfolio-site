function showNextSlide() {

};

function showPrevSlide() {

};

function showSlide(n) {

};

$(document).ready(() => {
  var index = 0;
  var slides = $(".slides").children();
  var dots = $(".dots").children();

  for (i = index + 1; i < slides.length; i++) {
    slides.eq(i).hide();
    dots.eq(i).css("background-color", "rgb(130, 130, 130)");
  }

  $(".prev").click(() => {
    slides.eq(index).hide();
    dots.eq(index).css("background-color", "rgb(130, 130, 130)");
    index = index > 0 ? --index : slides.length - 1;
    slides.eq(index).fadeIn("slow");
    dots.eq(index).css("background-color", "#A6400A");
  });
  $(".next").click(() => {
    slides.eq(index).hide();
    dots.eq(index).css("background-color", "rgb(130, 130, 130)");
    index = index < slides.length - 1 ? ++index : 0;
    slides.eq(index).fadeIn("slow");
    dots.eq(index).css("background-color", "#A6400A");
  });

})
