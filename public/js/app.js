//Problem: User when clicking on the image goes to dead end
//Solution: Create an overlay with a large image - lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
// var $caption = $("<p></p>");

//2.1 Add Image to the overlay
$overlay.append($image);

//   //2.2 Add Caption to the overlay
// $overlay.append($caption);

// //2. Add overlay
$("body").append($overlay);
  

//1. Capture a click event on a link to an image. 
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //1.2 Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //1.1 Show the overlay 
  $overlay.show();
  
  
  // //1.3 Get child's alt attribute and set caption
  // //How to get the child's alt attribute
  // var captionText = $(this).children("img").attr("alt");
  // $caption.text(captionText);
  
});


//3. When overlay is clicked 
$overlay.click(function(){
//3.1 Hide the overlay 
   $overlay.hide();
});