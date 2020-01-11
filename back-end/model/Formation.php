<?php
class Formation
{
    private $id;
    private $type;
    private $libelle;
    private $nbrSemestre;
    private $description;


    public function __construct($type, $libelle, $nbrSemestre, $description)
    {
        $this->type = $type;
        $this->libelle = $libelle;
        $this->nbrSemestre = $nbrSemestre;
        $this->description = $description;
    }


    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }
    /**
     * Get the value of nbrSemestre
     */
    public function getnbrSemestre()
    {
        return $this->nbrSemestre;
    }
    /**
     * Get the value of libelle
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * Get the value of type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */
    public function setType($type)
    {
        $this->type = $type;
    }

    /**
     * Get the value of description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }
}
