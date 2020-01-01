<?php
require_once ("../DAO/EnsiegnantDao.php");
require_once ("../conexionBD/Cnx.php");
require_once("../config/config.php");


class EnsiegnatDaoImp implements EnsiegnatDAO{

    public function __construct(){}
    
    function ajouterEnsiegnat($prof)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $password = password_hash($prof->passwrd,PASSWORD_BCRYPT);
        $stmt = $con->prepare("INSERT INTO enseignant (nom,prenom, email,tele,passwrd) VALUES (?,?,?,?,?)");
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
    function updateEnsiegnat($email)
    {
        
    }
    function deleteEnsiegnat($email)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("DELETE FROM enseignant WHERE email = ? ");
        $stmt->bindParam(1,$email);
        if($stmt->execute()){
            return 1;
        }else{
            return 2;
        }
    }

    function getEnsiegnant($email)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT * FROM enseignant WHERE email = ? ");
        $stmt->bindParam(1,$email);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    function choisirModule($idMod)
    {
        // TODO: Implement choisirModule() method.
    }

    function login($email, $pass)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT * FROM enseignant WHERE email= ?");
        $stmt->bindParam(1,$email);
        $stmt->execute();
        if($stmt->rowCount()>0){
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
         if(password_verify($pass,$row["passwrd"])){
             return 1;
         }else{
             return 2;
         }
        }else{
         return 3;
        }
    }


    function getAll()
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $sql = "SELECT * FROM enseignant";
        $stm = $con->prepare($sql);
        $stm->execute();
        return ($stm->fetchAll(PDO::FETCH_ASSOC));
    }

    function userExiste($email){
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT * FROM enseignant WHERE email= ?");
        $stmt->bindParam(1,$email);
        $stmt->execute();
        if($stmt->rowCount()>0){
           return 1;
        }else{
            return 2;
        }
    }
}