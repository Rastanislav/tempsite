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
			$offset = 0;
    $('.content').fullpage({
		scrollBar: true,
        scrollingSpeed: 1500,
        anchors: ['section1', 'section2', 'section3'],
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

			(direction === "right") ? $offset -= 200 : $offset += 100;

				$('#projects').stop().animate({
					'background-position' : $offset 
				}, 1500);
  		}
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

	if ($window.scrollTop() <= 100){
		console.log("top");
		$('.header__img').stop().animate({'opacity': '1', 'width': '170px'}, 100);
		$('header').stop().animate({'height': '200px'}, 100, 'linear');
	}
	else{
		console.log("not top");
		$('.header__img').stop().animate({'opacity': '0', 'width': '80px'}, 100);
		$('header').stop().animate({'height': '90px'}, 100, 'linear');
	}

});
