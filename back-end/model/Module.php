<?php
class Module
{
    private $id;
    private $libelle;
    private $semestre;
    private $description;
    //Constructeur
    function __construct($id, $libelle, $semestre, $description)
    {
        $this->id = $id;
        $this->libelle = $libelle;
        $this->semestre = $semestre;
        $this->description = $description;
    }

    //getters and setters
    public function getID()
    {
        return $this->id;
    }
    public function getLibelle()
    {
        return $this->libelle;
    }
    public function getSemestre()
    {
        return $this->semestre;
    }
    public function getDescription()
    {
        return $this->description;
    }

    public function setLibelle($libelle)
    {
        $this->libelle = $libelle;
    }
    public function setSemestre($semestre)
    {
        $this->semestre = $semestre;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
}
