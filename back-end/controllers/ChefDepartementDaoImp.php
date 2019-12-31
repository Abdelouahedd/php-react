<?php
class ChefDepartementDaoImp implements ChefDepartementDao
{

    public function login($email, $pass)
    {
      $cnx = Cnx::getInstance();
      $con = $cnx.getConnection();
    }

    public function validerChoix($module)
    {
        // TODO: Implement validerChoix() method.
    }
}