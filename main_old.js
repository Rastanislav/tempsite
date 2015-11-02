$(document).ready(function(){
   // init controller
    var controller = new ScrollMagic.Controller();
   

controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target, // scroll position of the target along y axis
      autoKill : true // allows user to kill scroll action smoothly
    },
    ease : Cubic.easeInOut
  });

});

//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});

var scene1 = new ScrollMagic.Scene({ triggerElement: '#about' })
								.setClassToggle('#anchor1', 'active')
								.addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: '#skills' })
								.setClassToggle('#anchor2', 'active')
								.addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: '#projects' })
								.setClassToggle('#anchor3', 'active')
								.addTo(controller);

var scene4 = new ScrollMagic.Scene({ triggerElement: '#contact' })
								.setClassToggle('#anchor4', 'active')
								.addTo(controller);
    scene1.addIndicators();
    scene2.addIndicators();
    scene3.addIndicators();
    scene4.addIndicators();
   
});
