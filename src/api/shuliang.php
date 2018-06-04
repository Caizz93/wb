<?php
require('connect.php');

$phone = isset($_GET['phone'])?$_GET['phone']:'car';

$sql = "SELECT * FROM `$phone`";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);

$qty = count($row);

echo $qty;


?>