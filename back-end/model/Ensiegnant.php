<?php
class Ensiegnant extends Utilisateur
{
    //private $spec;
    public function __construct($id, $nom, $prenom, $email, $tele/*,$spec*/){
        parent::__construct($id, $nom, $prenom, $email, $tele);
      //  $this->spec = $spec;
    }
}
