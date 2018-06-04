<?php

$qty = isset($_GET['qty']) ? $_GET['qty'] : 48;


require('connect.php');

$sql = "SELECT * FROM `watch`";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);

$page_qty = ceil(count($row)/$qty);

echo $page_qty;


$res -> close();
$conn -> close();
?>