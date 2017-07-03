$(document).ready(function() {
  console.log("running");
  $(".project").on("mouseenter", function() {
    console.log('Trying to expand');
    $(this).stop(true, true).animate({
      margin: "-=20",
      width: "+=40",
      height: "+=40"
    }, "fast");
  })
  .on("mouseleave", function() {
    $(this).stop(true, true).animate({
      margin: "+=20",
      width: "-=40",
      height: "-=40"
    }, "fast");
  });
});
