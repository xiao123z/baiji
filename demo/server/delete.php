<?php
$cont = $_REQUEST["cont"];
$db = mysqli_connect("127.0.0.1","root","root","baiji");
mysqli_query($db,'set names utf8');
$sql =  "DELETE FROM cart WHERE id='$cont'";
$result = mysqli_query($db,$sql);
?>