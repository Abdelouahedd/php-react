<?php
require_once('../controllers/ModuleChoisiDaoImp.php');
require_once("../helper/protected.php");
require_once("../config/config.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");

$response = array();
$ens = new ModuleChoisiDaoImp();


if ($_SERVER['REQUEST_METHOD'] == "GET" OR $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    $data = $ens->getAllModuleNv();
    if(is_array($data)){
        $response["error"] = "false";
        $response["message"] = $data;
        http_response_code(200);
    }else {
        $response["error"] = "true";
        $response["message"] = "Erreur lors de l'affectation";
        http_response_code(201);
    }

} else {
    http_response_code(400);
    $response['error'] = true;
    $response['message'] = "Invalid Request";
}


echo json_encode($response);

