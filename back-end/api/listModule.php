<?php
require_once('../controllers/ModuleDaoImp.php');
require_once("../helper/protected.php");
require_once("../config/config.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$response = array();
$ens = new ModuleDaoImp();


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $data = $ens->getAll();
    $response["error"] = "false";
    $response["message"] = $data;
    http_response_code(200);
} else {
    http_response_code(400);
    $response['error'] = true;
    $response['message'] = "Invalid Request";
}


echo json_encode($response);

