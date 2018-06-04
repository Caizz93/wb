<?php

require('connect.php');

$dbname = $_GET['phone'];
// $dbname = '13049141684';

$sql = "CREATE TABLE `wb`. `$dbname`( `id` INT(255) NOT NULL , `img` VARCHAR(255) NOT NULL , `shop` VARCHAR(255) NOT NULL , `name` VARCHAR(255) NOT NULL , `price` VARCHAR(255) NOT NULL , `qty` VARCHAR(255) NOT NULL ) ENGINE = MyISAM;";



$res = $conn -> query($sql);

$conn -> close();
var_dump($res);

?>

