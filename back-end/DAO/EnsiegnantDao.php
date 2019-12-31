<?php
interface EnsiegnatDao {
    function ajouterEnsiegnat($prof);
    function updateEnsiegnat($email);
    function deleteEnsiegnat($email);
    function getEnsiegnant($email);
    function choisirModule($idMod);
    function login($email,$pass);
    function getAll();
}
?>