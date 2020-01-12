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


if ($_SERVER['REQUEST_METHOD'] == "POST" OR $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    $var = json_decode(file_get_contents("php://input"));
    $data = $ens->deleterModule($var->id);
    if($data == 1){
        $response["error"] = "false";
        $response["message"] = "Module a était supprimé";
        http_response_code(200);
    }else if($data == 2){
        $response["error"] = "true";
        $response["message"] = "Erreur lors de la supression";
        http_response_code(201);
    }

} else {
    http_response_code(400);
    $response['error'] = true;
    $response['message'] = "Invalid Request";
}


echo json_encode($response);

