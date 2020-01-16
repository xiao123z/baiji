<?php
$db=mysqli_connect("127.0.0.1","root","root","baiji");
$sql = "SELECT  * FROM cart";
$result = mysqli_query($db, $sql);
$size = mysqli_num_rows($result);
$data=array("count"=>$size);
echo json_encode($data,true)
?>