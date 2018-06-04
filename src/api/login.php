<?php
require("connect.php");
$phone =$_POST["phone"];

$password=$_POST["password"];

// echo $phone;
// echo $password;

$sql = "SELECT * FROM `login` WHERE phone = '$phone'";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);




if($row){
	echo "0";
}else{
	$sql = "INSERT INTO `login`(`phone`,`password`) VALUES('$phone','$password')";
	$conn -> query($sql);
	echo "1";
}

$res -> close();
$conn -> close();
?>