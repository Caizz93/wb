<?php
require('connect.php');

$id = isset($_GET['id']) ? $_GET['id'] : 200;


// $bar = intval($id);
// $int=intval($id);
// $flg=settype($id,"int"); 
//var_dump($id * 1);
//$id = $id * 1;
$sql =" SELECT * FROM `watch` WHERE id = '$id' ";

$res = $conn -> query($sql);

//var_dump($res);

$row = $res -> fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

$res -> close();

$conn -> close();



?>