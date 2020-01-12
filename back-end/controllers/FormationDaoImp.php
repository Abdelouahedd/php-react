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
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $f = $this->displayFormation($id);

        $stmt = $con->prepare("DELETE FROM formation WHERE id = ? ");
        $stmt->bindParam(1,$id);
        $delteFile = unlink("../uploads/".$f["libelle"].".pdf");
        if( $delteFile && $stmt->execute()){
            return 1;
        }else{
            return 2;
        }
    }

    public function displayFormation($id)
    {
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $sql = "SELECT * FROM formation WHERE id = ?";
        $stm = $con->prepare($sql);
        $stm->bindParam(1,$id);
        $stm->execute();
        return ($stm->fetch(PDO::FETCH_ASSOC));
    }

    public  function getAll(){
        $cnx = Cnx::getInstance();
        $con = $cnx->getConnection();
        $sql = "SELECT * FROM formation";
        $stm = $con->prepare($sql);
        $stm->execute();
        return ($stm->fetchAll(PDO::FETCH_ASSOC));
    }
}