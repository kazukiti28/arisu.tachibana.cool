<?php
$RequestURI = parse_url($_SERVER['REQUEST_URI']);
$BaseURL = 'https://arisu.tachibana.cool';
$RequestPath = explode("/",$RequestURI['path']);

$title = "Arisu Tachibana";
$desc = NULL;

if(!empty($_GET['error'])){
	switch ($_GET['error']){
		case '404':
			$title = "404 - NotFound | ".$title;
			header("HTTP/1.1 404 Not Found");
			include 'inc/header.php';
			include 'inc/404.php';
			include 'inc/footer.php';
			exit;
			break;
		case '403':
			$title = "403 - Forbidden | ".$title;
			header("HTTP/1.1 403 Forbidden");
			include 'inc/header.php';
			include 'inc/403.php';
			include 'inc/footer.php';
			exit;
			break;
		default:
			header("HTTP/1.1 404 Not Found");
			$url = $BaseURL;
			header("Location: {$url}");
			exit;
			break;
	}
}

if(!empty($RequestPath[1])){
	if($RequestPath[1] == 'happybirthday'){
		if(!isset($RequestPath[2])){
			$title = "HappyBirthDay, Arisu! | ".$title;
			$desc = "橘ありすちゃんの誕生日を祝うために作った特設ページです。";
			include 'inc/header.php';
			include 'inc/happybirthday.php';
			include 'inc/footer.php';
		}else{
			header("Location: /happybirthday");
		}
	}else{
		$title = "404 - NotFound | ".$title;
		$desc = NULL;
		header("HTTP/1.1 404 Not Found");
		include 'inc/header.php';
		include 'inc/404.php';
		include 'inc/footer.php';
	}
}else{
	header("303	See Other");
	header("Location: /happybirthday");
}
