<?php
    include("kapcsolat_fuggvenyei.php");
    
    try
    {
        $kapcsolat = new PDO("sqlite:phpLiteAdmin/adatbazis_v4wb87b.db");
        $kapcsolat->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        echo "HIBA: ".$e->getMessage();
    }
?>