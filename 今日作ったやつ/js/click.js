function imgClick() {
	$("#main").animate({
		'top':'-1000px'
	});//箱制御
	$(".first").fadeOut(500);

	$(".crack").fadeIn(1000);
	$('.crack').animate({"left": "-=720px", "top": "390px"}, 1400);//クラッカー制御


	setTimeout(function(){
		$(".flipcrack").fadeIn(1000);
		$('.flipcrack').animate({"left": "720px", "top": "390px"}, 1200);//クラッカー制御
	},1500);

	$("#main").fadeOut(1);//後処理
	setTimeout(function(){
		$(".ichigoalice").fadeIn(300);
	},3000);
	setTimeout(function(){
		$(".ichigo").fadeIn(300);
	},2000);
	//右側に出す
	setTimeout(function(){
		$(".mess").fadeIn(300);
	},1000);
		setTimeout(function(){
		$(".message").fadeIn(600);
	},4000);
}