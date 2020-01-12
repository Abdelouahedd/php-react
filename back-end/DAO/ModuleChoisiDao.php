<?php
interface ModuleChoisiDao{
    public function choisirModul($idProf,$idModule);
    public function validerChoix($idModule);
}
