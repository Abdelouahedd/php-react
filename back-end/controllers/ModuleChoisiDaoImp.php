<?php
require_once ("../DAO/ModuleChoisiDao.php");
require_once ("../conexionBD/Cnx.php");
require_once("../config/config.php");

class ModuleChoisiDaoImp implements ModuleChoisiDao
{

    public function choisirModul($idProf, $idModule)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("INSERT INTO ModuleChoisi (idProf,idModule) VALUES (?,?)");
        $stmt->bindParam(1,$idProf);
        $stmt->bindParam(2,$idModule);

        $res = $stmt->execute();
        if($res){
            return 1;
        }else{
            return 2;
        }
    }

    public function validerChoix($idModule)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("UPDATE ModuleChoisi SET valide = true ,attribue = true WHERE idModule = ?");
        $stmt->bindParam(1,$idModule);
        $res = $stmt->execute();
        if($res){
            return 1;
        }else{
            return 2;
        }
    }
    public function getAllModuleNv(){
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("SELECT f.libelle as libelle,f.semestre as semestre,p.nom as nom,c.idProf,c.idModule FROM module f,enseignant p,ModuleChoisi c 
                                        WHERE f.id = c.idModule and p.id = c.idProf and c.valide = 'false';");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}