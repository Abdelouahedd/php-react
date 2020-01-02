<?php
require_once('../controllers/EnsiegnantDaoImp.php');
require_once("../helper/protected.php");
require_once("../config/config.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$response = array();
$ens = new EnsiegnatDaoImp();

// if (getJwt() !== null) {
//     try {
//         if ($_SERVER['REQUEST_METHOD'] == 'GET' OR $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
//             $data = $ens->getAll();
//             $response["error"] = "false";
//             $response["message"] = $data;
//             http_response_code(200);
//         } else {
//             http_response_code(400);
//             $response['error'] = true;
//             $response['message'] = "Invalid Request";
//         }
//     } catch (Exception $e) {
//         http_response_code(401);
//         $response["error"] = true;
//         $response["message"] = "Access denied. $e->getMessage()";
//     }
// } else {
//     http_response_code(401);
//     $response["error"] = true;
//     $response["message"] = "Access denied";
// }
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $var = json_decode(file_get_contents("php://input"));
    $data = $ens->deleteEnsiegnat($var->email);
    if($data == 1){
        $response["error"] = "false";
        $response["message"] = "Ensiagnat a était supprimé";
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

