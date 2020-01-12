<?php
require_once('../controllers/ModuleChoisiDaoImp.php');
require_once("../helper/protected.php");
require_once("../config/config.php");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");

$response = array();
$ens = new ModuleChoisiDaoImp();


if ($_SERVER['REQUEST_METHOD'] == "POST" OR $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    $var = json_decode(file_get_contents("php://input"));
    $data = $ens->validerChoix($var->idModule);

    if($data == 1){
        $response["error"] = "false";
        $response["message"] = "le module a affecté à un professeur";
        http_response_code(200);
    }else if($data == 2){
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
