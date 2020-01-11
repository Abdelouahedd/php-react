<?php
require_once ("../DAO/FormationDao.php");
require_once ("../conexionBD/Cnx.php");
require_once("../config/config.php");


class FormationDaoImp implements FormationDao
{

    public function ajouterFormation($type,$libelle,$nbrSemestre,$description)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $stmt = $con->prepare("INSERT INTO formation (type,libelle,nbrSemestre,description) VALUES (?,?,?,?)");
        $stmt->bindParam(1,$type);
        $stmt->bindParam(2,$libelle);
        $stmt->bindParam(3,$nbrSemestre);
        $stmt->bindParam( 4,$description);
        $res = $stmt->execute();
        if($res){
            return 1;
        }else{
            return 2;
        }
    }

    public function updateFormation($id)
    {
        // TODO: Implement updateFormation() method.
    }

    public function deleterFormation($id)
    {
        // TODO: Implement deleterFormation() method.
    }

    public function displayFormation($id)
    {
        // TODO: Implement displayFormation() method.
    }
}