<?php

class ModuleChoisi
{
    private $idProf;
    private $idModule;
    private $valide;
    private $attribue;

    /**
     * ModuleChoisi constructor.
     * @param $idProf
     * @param $idModule
     * @param $valide
     * @param $attribue
     */
    public function __construct($idProf, $idModule, $valide, $attribue)
    {
        $this->idProf = $idProf;
        $this->idModule = $idModule;
        $this->valide = $valide;
        $this->attribue = $attribue;
    }

    /**
     * @return mixed
     */
    public function getIdProf()
    {
        return $this->idProf;
    }

    /**
     * @param mixed $idProf
     */
    public function setIdProf($idProf)
    {
        $this->idProf = $idProf;
    }

    /**
     * @return mixed
     */
    public function getIdModule()
    {
        return $this->idModule;
    }

    /**
     * @param mixed $idModule
     */
    public function setIdModule($idModule)
    {
        $this->idModule = $idModule;
    }

    /**
     * @return mixed
     */
    public function getValide()
    {
        return $this->valide;
    }

    /**
     * @param mixed $valide
     */
    public function setValide($valide)
    {
        $this->valide = $valide;
    }

    /**
     * @return mixed
     */
    public function getAttribue()
    {
        return $this->attribue;
    }

    /**
     * @param mixed $attribue
     */
    public function setAttribue($attribue)
    {
        $this->attribue = $attribue;
    }



}