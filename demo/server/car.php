<?php
$dataId=$_REQUEST["id"];
$dataSrc=$_REQUEST["src"];
$dataPrice=$_REQUEST["price"];
$dataStore=$_REQUEST["sta"];
$dataTitle=$_REQUEST["title"];
$db=mysqli_connect("127.0.0.1","root","root","baiji");
// $sql =  "SELECT * FROM cart";
// $resultA = mysqli_query($db, $sql);
// $size =mysqli_num_rows($resultA);
// $sql ="SELECT * FROM cart WHERE id='$dataId'";
$sql =  "SELECT * FROM cart WHERE id='$dataId'";
$result = mysqli_query($db, $sql);
$size =mysqli_num_rows($result);
print_r($size);
if(mysqli_num_rows($result) == 0)
{
    $sql = "INSERT INTO `cart` (`id`, `src`, `price`, `title`,`sta`) VALUES ($dataId, '$dataSrc', '$dataPrice', '$dataTitle','$dataStore')";
  $result = mysqli_query($db, $sql);
  $arr = array("status"=>"success","msg"=> "添加成功！",);
  // echo json_encode($arr);
  echo json_encode($arr,true);
//   $arr =array("status"=>"success","msg"=>"添加成功~！","cont"=>"$size");
//   echo json_encode($arr);
 
}else{
//  echo '{"status":"error","msg":"该商品已在您的购物车中~","cont"=>"$size"}';
 $arr = array("status"=>"success","msg"=> "该商品已在您的购物车中~",);
 echo json_encode($arr,true);
}