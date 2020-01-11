<?php
interface FormationDao{
    public function ajouterFormation($type,$libelle,$nbrSemestre,$description);
    public function updateFormation($id);
    public function deleterFormation($id);
    public function displayFormation($id);
}