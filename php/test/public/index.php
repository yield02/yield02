<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include '../partials/db_connect.php';

echo json_encode("test ne");


?>