<?php
interface chefDepartementDAO{
    public function login($email,$pass);
    public function validerChoix($module);
}