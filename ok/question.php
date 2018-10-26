<?php 

$name = $_REQUEST['name'];
$mobile = $_REQUEST['mobile'];
$message = $_REQUEST['message'];

$msg = "User name: ".$name."\nPhone number: ".$mobile."\nQuestion: ".$message;

mail("delgad0@rambler.ru", "User question", $msg); 

?>