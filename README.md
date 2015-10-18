# gb_img_fader
A simple backgorund image fader created with JQuery, ready to use in every project.
***
### Adding the css and js
Import this two files into your html head tag like  
`<link rel="stylesheet" type="text/css" href="http://localhost/tuts/bg_img_fader/css/bg_img_fader.css" />  
 <script type="text/javascript" src="http://localhost/tuts/bg_img_fader/js/bg_img_fader.js"></script>`  
 You need to get Jquery and import it right in front of every other javascript file.
***
### Adding pictures to the fader
Simply write your path to your picture inside of the images array in the bg_img_fader.js. Feel free to write as many paths as you want. For example...  
`var images = ["img/bg1.jpg","img/bg2.jpg","img/bg3.jpg","img/bg4.jpg"];`  
It is recommended to use absolute paths!
***
### Adding the fader to your html site
create a div tag with a class called "fader" like  
`<div class="fader"></div>`
***
Congratulation now you have created your first background fader.

if you want to change the duration of the fades simply change this three numbers(inside of this snippet they are called "CHANGE ME", "CHANGE ME1" is by default 500, and "CHANGE ME2" is by default 5000). This numbers represent miliseconds, so one second is equal to 1000 milisecond.

`setInterval(function(){  
   image.fadeOut(CHANGE ME1, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(CHANGE ME1);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },CHANGE ME2);`
