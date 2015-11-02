
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
