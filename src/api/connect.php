<?php
$server = "localhost";
$username = "laocai";
$password = "laocai666";
$db ="wb";
$conn = new mysqli($server,$username,$password,$db);

if($conn -> connect_error){
	die('连接失败！');
};

$conn -> set_charset('utf8');
// echo '连接成功！';
?>