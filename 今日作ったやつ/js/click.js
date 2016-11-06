function imgClick() {
	$("#main").animate({
		'top':'-1000px'
	});
	$(".first").fadeOut(500);

	$(".crack").fadeIn(1000);
	$('.crack').animate({
		"left": "-=720px", "top": "270px"
	},1400);
	setTimeout(function(){
		$(".flipcrack").fadeIn(1000);
		$('.flipcrack').animate({
			"left": "720px", "top": "270px"
		},1200);
	},1500);
	$("#main").fadeOut(1);
	setTimeout(function(){
		$(".ichigoarisu").fadeIn(300);
	},3000);
	setTimeout(function(){
		$(".ichigo").fadeIn(300);
	},2000);
	setTimeout(function(){
		$(".mess").fadeIn(1000);
	},1000);
		setTimeout(function(){
		$(".message").fadeIn(600);
	},4000);
}