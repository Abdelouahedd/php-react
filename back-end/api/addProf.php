<?php
require_once('../controllers/EnsiegnantDaoImp.php');
require "../vendor/autoload.php";
require_once ("../helper/protected.php");
require_once ("../config/config.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$response = array();
$ens = new EnsiegnatDaoImp();



if(getJwt()!= null){
    try{
      //  $decoded = JWT::decode($jwt, secret_key, array('HS256'));
        if ($_SERVER['REQUEST_METHOD'] == 'POST' AND $_SERVER['CONTENT_TYPE']=='application/json') {
            $var = json_decode(file_get_contents("php://input"));
            if (
                isset($var->email) and
                isset($var->nom) and
                isset($var->prenom) and isset($var->tele) and isset($var->passwrd)
            ) {
                if($ens->userExiste($var->email) == 1){
                    $response["error"] = true;
                    $response["message"] = "User Existe !!";
                }else{
                    $result = $ens->ajouterEnsiegnat($var);
                    if ($result == 1) {
                        http_response_code(201);
                        $response['error'] = false;
                        $response['message'] = "User registered successfully";
                    } elseif ($result == 2) {
                        http_response_code(208);
                        $response['error'] = true;
                        $response['message'] = "Some error occurred please try again";
                    }
                }
            } else {
                $response['error'] = true;
                $response['message'] = "Required fields are missing";
            }
        } else {
            http_response_code(400);
            $response['error'] = true;
            $response['message'] = "Invalid Request";
        }
    }catch (Exception $e){
        http_response_code(401);
        $response["error"] = true;
        $response["message"] = "Access denied. $e->getMessage()";
    }
}else{
    http_response_code(401);
    $response["error"] = true;
    $response["message"] = "Access denied";
}

echo json_encode($response);

