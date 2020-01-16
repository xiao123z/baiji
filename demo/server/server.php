<?php
$db = mysqli_connect("127.0.0.1","root","root","baiji");
$page = $_REQUEST["page"];
$start = ($page - 1) * 28; 
$type = $_REQUEST["type"];
if($type == "default")
{
  $sql = "SELECT  * FROM list LIMIT $start,20";
}elseif($type == "dsc")
{
  $sql = "SELECT  * FROM list ORDER BY price DESC LIMIT $start,20";
}elseif($type == "asc"){
  $sql = "SELECT  * FROM list ORDER BY price ASC LIMIT $start,20";
}

$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data,true);


?>