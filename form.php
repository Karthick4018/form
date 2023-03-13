<?php
$name=$_POST["name"];
$regno=$_POST["regno"];
$vote=$_POST["vote"];

$conn=mysqli_connect("localhost","root","","game");
$sql="INSERT INTO hart(name,regno,vote) values('$name','$regno','$vote')";
$rs=mysqli_query($conn,$sql);
if($rs)
{
    echo"submitted";
}
else
{
    echo"not submitted";
}
echo'<center><button><a href="index.html">goto home</a></button></center>';
?>