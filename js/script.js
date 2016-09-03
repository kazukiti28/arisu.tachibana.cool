var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();
// IE(11以外)
var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);
// IE6
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);
// IE7
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);
// IE8
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);
// IE9
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);
// IE10
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);
// IE11
var isIE11 = (ua.indexOf('trident/7') > -1);
// IE
var isIE = isMSIE || isIE11;
// Edge
var isEdge = (ua.indexOf('edge') > -1);
// Google Chrome
var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);
// Firefox
var isFirefox = (ua.indexOf('firefox') > -1);
// Safari
var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);
// Opera
var isOpera = (ua.indexOf('opera') > -1);
//Doccument ready functions
$(document).ready(function() {
	$('#contents').removeClass("displaynone");
	$('#warp').removeClass("displaynone");
	NProgress.start();
	if (isMSIE || isIE6 || isIE7 || isIE8 || isIE9 || isIE10 || isIE11 || isEdge) {
		$('#contents').addClass("displaynone");
		$('#stop_use_kasu_browser').removeClass("displaynone");
		$('#warp').addClass("displaynone");
	}
});
//Doccument loaded functions
$(window).ready(function() {
	NProgress.done();
});

function textanime() {
	$('#typo').removeClass("opacityzero");
	$('#typo').addClass("animated fadeInUp");
}
setTimeout("textanime()", 7300);

function aftertextanime() {
	$('#tbtn').removeClass("opacityzero");
	$('#tbtn').addClass("animated fadeInUp");
}

setTimeout("aftertextanime()", 7700);

function aftertbtn() {
	$('#titlebar').removeClass("opacityzero");
	$('#titlebar').addClass("animated fadeInDown");
	$('#githubc').removeClass("opacityzero");
	$('#githubc').addClass("animated fadeInDown");
	$('#copyright').removeClass("opacityzero");
	$('#copyright').addClass("animated fadeInUp");
}
setTimeout("aftertbtn()", 7700);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-81680135-1', 'auto');
  ga('send', 'pageview');