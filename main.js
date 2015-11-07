	function adjustWindow(){
		
		// Init Skrollr
		
		// Get window size
		winH = $window.height();
		
		// Keep minimum height 550
		if(winH <= 550) {
			winH = 550;
		} 
		
		// Resize our slides
		$slide.height(winH);
		
		// Refresh Skrollr after resizing our sections
		s.refresh($('#contact'));


    };

 $(document).ready(function() {
		//FULLPAGE
        $('.content').fullpage({
			scrollBar: true,
        	scrollingSpeed: 1500
        });
        //$.fn.fullpage.setScrollingSpeed(7000);
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	
	//FadeIn all sections   
	//$body.imagesLoaded( function() {
		//setTimeout(function() {
			  
			  //// Resize sections
			  //adjustWindow();
			  
		//}, 800);
	//});
	
		var s = skrollr.init({
			forceHeight: false
		});
 });


$(window).scroll(function() {
var navbarHeight = $('.header__small-banner').height(); 
  //var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.header__small-banner').height();
  
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / navbarHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = (navbarHeight -smallLogoHeight) - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight;}
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.header__small-banner').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  $('.header__small-banner').css({"opacity": navOpacity});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
	$('.header__big-banner').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
	$('.header__big-banner').css({"box-shadow": "none"});
  }


});
  















  // The user scrolls
  $(window).scroll(function(){
	
  // $sections includes all of the container divs that relate to menu items.
  var $sections = $('.content__section');

	// currentScroll is the number of pixels the window has been scrolled
	var currentScroll = $(this).scrollTop();
	
	// $currentSection is somewhere to place the section we must be looking at
	var $currentSection
	
	// We check the position of each of the divs compared to the windows scroll positon
	$sections.each(function(){
	  // divPosition is the position down the page in px of the current section we are testing      
	  var divPosition = $(this).offset().top;
	  
	  // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
	  // the -1 is so that it includes the div 1px before the div leave the top of the window.
	  if( divPosition - 1 < currentScroll ){
		// We have either read the section or are currently reading the section so we'll call it our current section
		$currentSection = $(this);
		
		// If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
	  }
	  
	  // This is the bit of code that uses the currentSection as its source of ID
	  var id = $currentSection.attr('id');
		$('a').removeClass('active');
		$("[href=#"+id+"]").addClass('active');
	  
	})

  });











