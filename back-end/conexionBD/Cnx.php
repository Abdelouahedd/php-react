<?php
class Cnx
{
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private static $instance = null;
    private $con = null;

    private function __construct()
    {
        try {
            $this->con = new PDO("mysql:host=$this->servername;dbname=ensa", $this->username, $this->password);
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
    private function __clone() { }


    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new Cnx();
            return self::$instance;
        } else {
            return self::$instance;
        }
    }
    public function getConnection()
    {
        return $this->con;
    }
    public function close()
    {
        $this->con = null;
        self::$instance = null;
    }
}
