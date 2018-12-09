<?php
	session_start();
	if ($_SESSION['login'] == null)
	{
		header("Location: admin.php");
		exit;
	}
	if (!isset($_COOKIE['admin'])) {
	   setcookie('admin', 'false');
	   $_COOKIE['admin'] = 'false';
	   echo '
<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<center><p><a href="http://35.237.122.93/">Have you played Not Global Thermal Nuclear War yet?</a></p></center>
<hr><center>nginx/1.6.2 (Ubuntu)</center>
</body>
</html>
<!-- Hmmm, the plot thickens... key{6180A0AF19CAC6F2B9DA4469B031E5097C429F3856E907A13ED2131BADEB1740}-->';
     }
     elseif (isset($_COOKIE['admin']) && strcmp($_COOKIE['admin'], 'true') == 0) {
     	    echo "<!DOCTYPE html><html><head><title>Main</title></head><body><p>Congratulations! Here you go: key{9A0D09D0963D21ADDBCF50A1EBC657ECC692DE3973FCF4B1FFE3B5B9FF01B879}</p></body></html>";
     }
     else {
                echo '
<html>
<head><title>404 Not Found</title></head>
<body bgcolor="white">
<center><h1>404 Not Found</h1></center>
<center><p><a href="http://35.237.122.93/">Have you played Not Global Thermal Nuclear War yet?</a></p></center>
<hr><center>nginx/1.6.2 (Ubuntu)</center>
</body>
</html>
<!-- Hmmm, the plot thickens... key{6180A0AF19CAC6F2B9DA4469B031E5097C429F3856E907A13ED2131BADEB1740}-->';}
?>
