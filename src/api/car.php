<?php
require('connect.php');

$phone = $_GET['phone'];

$sql = "SELECT * FROM `$phone`";

$res = $conn -> query($sql);

$row = $res -> fetch_all(MYSQLI_ASSOC);

echo json_encode($row,JSON_UNESCAPED_UNICODE);

$res -> close();

$conn -> close();


?>