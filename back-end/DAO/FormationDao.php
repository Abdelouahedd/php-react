<?php
interface FormationDao{
    public function ajouterFormation($formation);
    public function updateFormation($id);
    public function deleterFormation($id);
    public function displayFormation($id);
}