<?php
require_once ("../DAO/ChefDepartementDao.php");
require_once ("../conexionBD/Cnx.php");
require_once("../config/config.php");

class ChefDepartementDaoImp implements ChefDepartementDao
{
    function ajouterAdmin($prof)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $password = password_hash($prof->passwrd,PASSWORD_BCRYPT);
        $stmt = $con->prepare("INSERT INTO chefDepartement (nom,prenom, email,tele,passwrd) VALUES (?,?,?,?,?)");
        $stmt->bindParam(1,$prof->nom);
        $stmt->bindParam(2,$prof->prenom);
        $stmt->bindParam(3,$prof->email);
        $stmt->bindParam( 4,$prof->tele);
        $stmt->bindParam(5,$password);
        $res = $stmt->execute();
        if($res){
            return 1;
        }else{
            return 2;
        }
    }
    public function login($email, $pass)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT * FROM chefDepartement WHERE email= ?");
        $stmt->bindParam(1,$email);
        $stmt->execute();
        if($stmt->rowCount()>0){
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            print_r($row);
            if(password_verify($pass,$row["passwrd"])){
                return 1;
            }else{
                return 2;
            }
        }else{
            return 3;
        }
    }

    function userExiste($email){
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT * FROM chefDepartement WHERE email= ?");
        $stmt->bindParam(1,$email);
        $stmt->execute();
        if($stmt->rowCount()>0){
            return 1;
        }else{
            return 2;
        }
    }

    public function validerChoix($module)
    {
        // TODO: Implement validerChoix() method.
    }
}