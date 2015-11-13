
$(document).ready(function() {
	$('.content').enllax();
	//FULLPAGE
			$offset = 0;
    $('.content').fullpage({
		scrollBar: true,
        scrollingSpeed: 1500,
        anchors: ['section1', 'section2', 'section3', 'section4'],
        slidesNavigation: true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

			(direction === "right") ? $offset -= 200 : $offset += 100;

				$('#projects').stop().animate({
					'background-position' : $offset 
				}, 1500);
  		}
    });

	
 });


$(window).scroll(function() {

	if ($(window).scrollTop() <= 100){
		console.log("top");
		$('.header__big-banner--visible').stop().animate({'opacity': '1'}, 50);
		$('header').stop().animate({'height': '200px'}, 100, 'linear');
	}
	else{
		console.log("not top");
		$('.header__big-banner--visible').stop().animate({'opacity': '0'}, 50);
		$('header').stop().animate({'height': '90px'}, 100, 'linear');
	}

});
