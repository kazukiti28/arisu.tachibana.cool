<?php
if (isset($_GET["screen_name"]) && preg_match("/^[a-zA-Z0-9_-]+$/", $_GET["screen_name"])){
	$url = "https://twitter.com/".$_GET["screen_name"];
	$html = file_get_contents($url);
	preg_match('/<img class="ProfileAvatar-image " src="(.*)" alt="/', $html, $str_match);
	header("Location: {$str_match[1]}");
}else{
	header("HTTP/1.1 400 Bad Request");
	print "HTTP/1.1 400 Bad Request";
}