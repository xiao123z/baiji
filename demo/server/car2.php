<?php
$db = mysqli_connect("127.0.0.1","root","root","baiji");
// mysqli_query($db,'set names utf8');
$sql =  "SELECT * FROM cart";
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>