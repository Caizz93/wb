<?php
require('connect.php');
$phone = $_GET['phone'];
$id = $_GET['id'];

$sql = "DELETE FROM `$phone` WHERE id ='$id' ";

$res = $conn -> query($sql);

$conn -> close();

?>