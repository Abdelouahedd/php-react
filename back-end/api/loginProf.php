<?php

use \Firebase\JWT\JWT;

require('../vendor/autoload.php');
require_once("../controllers/EnsiegnantDaoImp.php");

header("Access-Control-Request-Headers: origin, x-requested-with");
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

$response = array();
$ens = new EnsiegnatDaoImp();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
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
                "admine" => false,
                "data" =>  $row
            );
            $jwt = JWT::encode($token, secret_key);
            $response["error"] =  "false";
            $response["message"] = "Successful login.";
            $response["jwt"] = $jwt;
            http_response_code(200);
        } elseif ($ens->login($var->email, $var->passwrd) == 2) {
            http_response_code(401);

            $response["error"] =  "true";
            $response["message"] = "password wrong !!";
        } else {
            http_response_code(401);

            $response["error"] =  "true";
            $response["message"] = "user not found";
        }
    }
}

echo json_encode($response);
