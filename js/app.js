$(document).foundation();

jQuery(function($) { 

  // settings
  var $slider = $('.custom-slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 1000; // 4 seconds
  var count = 1; 

  function slides(){
    return $slider.find($slide);
  }

  // slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);
  slides().first().addClass('done');

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();
      

      slides().eq($i).removeClass('active');
      // slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

	slides().eq($i + 1).addClass('active done');
      // slides().eq($i + 1).fadeIn($transition_time);
      count++;

      if(slides().length == count){
        clearInterval($interval);
      }

    }
    , $transition_time +  $time_between_slides 
  );
});




