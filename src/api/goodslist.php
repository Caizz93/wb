<?php
require('connect.php');

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$qty = isset($_GET['qty']) ? $_GET['qty'] : 48;

$start = ($page - 1) * $qty;
$sql = "SELECT * FROM `watch` LIMIT $start,$qty";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

$res -> close();
$conn -> close();




?>