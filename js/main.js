//	$(document).on("mouseover",function(event){
//	var xPos = event.pageX;
//	$('.xPos').text(xPos);
//		console.log(event.pageX);
//	var opacity = xPos/1000;
//	$('body').css("background-color", "rgba(255, 0, 0, " + opacity + ")");
//});
/**************/
/*window opacity effects*/
/**************/
$('.shadowCanvas').on("mousemove", function (event) {
	var windowWidth = window.innerWidth;
	var opacity = event.pageX / windowWidth;
	$('.shadowCanvas').css("background-color", "rgba(0, 0, 0, " + opacity + ")");
});
function codeStyle(){
	enableScroll();
	$('.shadowCanvas').remove();
	$('.webStyle').css({
		"width": "0%",
		"transition": "all 1s",
		"display": "none"
	});
	$('.codeStyle').css({"width": "100%", "transition": "all 1s"});
}
function webStyle(){
	enableScroll();
	$('.shadowCanvas').remove();
	$('.webStyle').css({"width": "100%", "transition": "all 1s"});
	$('.codeStyle').css({
		"display": "none"
	});
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

$('body').ready(function(){
	disableScroll();
});
