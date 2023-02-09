

<?php
header("Content-Type: application/json; charset=UTF-8");

$q = $_REQUEST['q'];


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

$row = mysqli_fetch_array($result);

echo json_encode($row);

// echo "<table>
// <tr>
// <th>Firstname</th>
// <th>Lastname</th>
// <th>Age</th>
// <th>Hometown</th>
// <th>Job</th>
// </tr>";

// $row = mysqli_fetch_array($result);
//   echo "<tr>";
//   echo "<td>" . $row['Firstname'] . "</td>";
//   echo "<td>" . $row['LastName'] . "</td>";
//   echo "<td>" . $row['Age'] . "</td>";
//   echo "<td>" . $row['Hometown'] . "</td>";
//   echo "<td>" . $row['Job'] . "</td>";
//   echo "</tr>";
// echo "</table>";


mysqli_close($conn);

?>
