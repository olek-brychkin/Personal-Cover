<?php 

$name = $_REQUEST['name'];
$phone = $_REQUEST['phone'];
$coverText = $_REQUEST['coverText'];
$phoneModel = $_REQUEST['phoneModel'];
$coverColor = $_REQUEST['coverColor'];
$additionalData = $_REQUEST['additionalData'];
$msg = "Name: ".$name."\nPhone number: ".$phone."\nCover text: ".$coverText."\nPhone model: ".$phoneModel."\nCover color: ".$coverColor."\n Info: ".$additionalData;

mail("delgad0@rambler.ru", "Zakaz", $msg); 

?>