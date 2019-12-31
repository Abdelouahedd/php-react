<?php
require_once('../controllers/EnsiegnantDaoImp.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

$response = array();
$ens = new EnsiegnatDaoImp();

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

echo json_encode($response);
