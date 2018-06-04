<?php
require('connect.php');
$sql = "SELECT * FROM `home` ";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);
//var_dump($row);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

$res -> close();
$conn -> close();
?>