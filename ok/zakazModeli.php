<?php 

$phoneModel = $_REQUEST['phoneModel'];
$coverData = $_REQUEST['coverData'];
$addParam = $_REQUEST['addParam'];

$msg = "Phone model: ".$phoneModel."\nCover data: ".$coverData."\nUser info: ".$addParam;

mail("delgad0@rambler.ru", "Zakaz modeli", $msg); 

?>