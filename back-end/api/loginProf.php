<?php

use \Firebase\JWT\JWT;

require('../vendor/autoload.php');
require_once("../controllers/EnsiegnantDaoImp.php");

// header("Access-Control-Allow-Origin:*");
// header("Access-Control-Request-Headers: origin, x-requested-with");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");      
// header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
header("Access-Control-Allow-Methods: POST");

$response = array();
$ens = new EnsiegnatDaoImp();
if ($_SERVER['REQUEST_METHOD'] == 'POST' and $_SERVER['CONTENT_TYPE'] == 'application/json') {
    $var = json_decode(file_get_contents("php://input"));
    if (isset($var->email) and isset($var->passwrd)) {
        if ($ens->login($var->email, $var->passwrd) == 1) {
            $row = $ens->getEnsiegnant($var->email);
            $token = array(
                "iss" => issuer_claim,
                "aud" => audience_claim,
                "iat" => time(),
                "nbf" => time() + 10,
                "exp" => time() + (60 * 60 * 60 * 60),
                "admine" => true,
                "data" =>  $row
            );
            http_response_code(200);
            $jwt = JWT::encode($token, secret_key);
            $response["error"] =  "false";
            $response["message"] = "Successful login.";
            $response["jwt"] = $jwt;
        } elseif ($ens->login($var->email, $var->passwrd) == 2) {
            $response["error"] =  "true";
            $response["message"] = "password wrong !!";
            http_response_code(401);
        } else {
            $response["error"] =  "true";
            $response["message"] = "user not found";
            http_response_code(401);
        }
    }
}

echo json_encode($response);
