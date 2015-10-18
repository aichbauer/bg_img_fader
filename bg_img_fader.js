$(document).ready(function(){

  var count = 0;
  var images = ["INSERT YOUR IMAGE PATHS"];
  var image = $(".fader");

  image.css("background-image","url("+images[count]+")");

  setInterval(function(){
    image.fadeOut(500, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(500);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },5000);

});
