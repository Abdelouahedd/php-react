<?php
require_once('../controllers/FormationDaoImp.php');
require_once('../model/Formation.php');
require "../vendor/autoload.php";
require_once ("../helper/protected.php");
require_once ("../config/config.php");

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");

$response = array();
$ens = new FormationDaoImp();


if($_SERVER['REQUEST_METHOD'] == "POST" OR $_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if(isset($_FILES['file'])and isset($_POST["type"])and isset($_POST["libelle"])and isset($_POST["nbrS"]))
    {
        $avatar_name = $_FILES["file"]["name"];
        $avatar_tmp_name = $_FILES["file"]["tmp_name"];
        $error = $_FILES["file"]["error"];
        if($error > 0) {
            $response['error'] = true;
            $response['message'] = "Error uploading the file!";
        }
        else
        {
            $tmp = explode('.', $avatar_name);
            $file_extension = end($tmp);
            $upload_name = $_POST["libelle"].".".$file_extension;

            if(move_uploaded_file($avatar_tmp_name , "../uploads/".$upload_name)) {
                $result = $ens->ajouterFormation($_POST["type"],$_POST["libelle"],$_POST["nbrS"],$upload_name);
                if ($result == 1) {
                    http_response_code(201);
                    $response['error'] = false;
                    $response['message'] = "Formation bien ajouter";
                } elseif ($result == 2) {
                    http_response_code(208);
                    $response['error'] = true;
                    $response['message'] = "Some error occurred please try again";
                }
            }else
            {
                $response['error'] = true;
                $response['message'] = "Error uploading the file!";
            }
        }
    }

} else {
    http_response_code(400);
    $response['error'] = true;
    $response['message'] = "Invalid Request";
}

echo json_encode($response);
