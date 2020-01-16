<?php
$db=mysqli_connect("127.0.0.1","root","root","baiji");
$sql = "SELECT  * FROM list";
$result = mysqli_query($db, $sql);
$size = mysqli_num_rows($result);
$count = ceil($size/ 28);
$data=array("count"=>$count);
echo json_encode($data,true)
?>