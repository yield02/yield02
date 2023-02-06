<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = $_REQUEST['q'];

print_r($q);

$servername = 'localhost';
$username = 'Yield';
$password = '3760995aA';


$conn = mysqli_connect($servername, $username, $password);
if (!$conn) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($conn, 'test');

$sql = "SELECT * FROM usertest where Pid = '" .$q."'";



$result = mysqli_query($conn, $sql);


echo "<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Age</th>
<th>Hometown</th>
<th>Job</th>
</tr>";

$row = mysqli_fetch_array($result);
  echo "<tr>";
  echo "<td>" . $row['Firstname'] . "</td>";
  echo "<td>" . $row['LastName'] . "</td>";
  echo "<td>" . $row['Age'] . "</td>";
  echo "<td>" . $row['Hometown'] . "</td>";
  echo "<td>" . $row['Job'] . "</td>";
  echo "</tr>";
echo "</table>";


mysqli_close($conn);
?>
</body>
</html>