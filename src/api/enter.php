<?php
require('connect.php');
$phone = $_POST['phone'];
$password = $_POST['password'];


$sql = "SELECT * FROM `login` WHERE phone = '$phone'";

$res = $conn -> query($sql);

$row = $res->fetch_all(MYSQLI_ASSOC);

if($row[0]['password']==$password){
	echo "1";
}else{
	echo "0";
}

$res ->close();
$conn ->close();



?>