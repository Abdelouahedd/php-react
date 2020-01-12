<?php
require_once ("../DAO/ModuleDao.php");
require_once ("../conexionBD/Cnx.php");
require_once("../config/config.php");
class ModuleDaoImp implements ModuleDAO
{

    public function ajouterModule($libelle,$semestre,$description,$idFormation)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("INSERT INTO module (libelle,semestre,description,idFormation) VALUES (?,?,?,?)");
        $stmt->bindParam(1,$libelle);
        $stmt->bindParam(2,$semestre);
        $stmt->bindParam(3,$description);
        $stmt->bindParam( 4,$idFormation);
        $res = $stmt->execute();
        if($res){
            return 1;
        }else{
            return 2;
        }
    }

    public function updateModule($id)
    {
        // TODO: Implement updateModule() method.
    }

    public function deleterModule($id)
    {
        // TODO: Implement deleterModule() method.
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $mod = $this->displayModule($id);
        $stmt = $con->prepare("DELETE FROM module WHERE id = ? ");
        $stmt->bindParam(1,$id);
        $deleteFile =  unlink("../uploads/modules".$mod["libelle"].".pdf");
        if($deleteFile && $stmt->execute()){
            return 1;
        }else{
            return 2;
        }
    }

    public function displayModule($id)
    {
        // TODO: Implement displayModule() method.
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $sql = "SELECT * FROM module WHERE id = ? ";
        $stm = $con->prepare($sql);
        $stm->bindParam(1,$id);
        $stm->execute();
        return ($stm->fetch(PDO::FETCH_ASSOC));
    }
    public  function getAll(){
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $sql = "SELECT * FROM module";
        $stm = $con->prepare($sql);
        $stm->execute();
        return ($stm->fetchAll(PDO::FETCH_ASSOC));
    }
}