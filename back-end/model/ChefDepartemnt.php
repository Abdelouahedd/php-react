<?php
class ChefDepartement extends Utilisateur{
    public function __construct($id, $nom, $prenom, $email, $tele){
        parent::__construct($id, $nom, $prenom, $email, $tele);
    }
}