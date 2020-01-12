<?php
interface ModuleDAO{
    public function ajouterModule($libelle,$semestre,$description,$idFormation);
    public function updateModule($id);
    public function deleterModule($id);
    public function displayModule($id);
}