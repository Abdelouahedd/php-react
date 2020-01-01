<?php
require_once('../controllers/EnsiegnantDaoImp.php');
require "../vendor/autoload.php";
require_once ("../helper/protected.php");
require_once ("../config/config.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

$response = array();
$ens = new EnsiegnatDaoImp();

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