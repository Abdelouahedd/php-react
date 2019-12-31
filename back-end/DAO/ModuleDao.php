<?php
interface ModuleDAO{
    public function ajouterModule($module);
    public function updateModule($id);
    public function deleterModule($id);
    public function displayModule($id);
}