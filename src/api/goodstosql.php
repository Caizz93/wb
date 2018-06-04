<?php
require('connect.php');

$id = isset($_GET['id'])?$_GET['id']:null;

$shop = isset($_GET['shop'])?$_GET['shop']:null;
$name = isset($_GET['name'])?$_GET['name']:null;
$price = isset($_GET['price'])?$_GET['price']:null;
$qty = isset($_GET['qty'])?$_GET['qty']:null;

$img = isset($_GET['img'])?$_GET['img']:null;
$phone = isset($_GET['phone'])?$_GET['phone']:null;
$sql = "SELECT * FROM `$phone` WHERE id = $id ";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);



if($row){
	//有就增加数量
	$qty = $qty + $row[0]['qty'];
	var_dump($qty);
	//mysql更该语句
	$sql ="UPDATE `$phonr` SET qty = '$qty' WHERE `id`= '$id'	";
	$updata = $conn -> query($sql);

}else{
	//没有就插入数据

	$sql = "INSERT INTO `$phone`(`id`, `shop`, `img`, `name`, `price`, `qty`) VALUES ($id,'$shop','$img','$name','$price','$qty')";
	$set = $conn -> query($sql);

};

$res -> close();

$conn -> close();




?>