<?php
    include("kapcsolat.php");
    
    $fajlnev = post("fajlnev");
    if ($fajlnev != "")
    {
        echo "Fáj törlése: $fajlnev";
    }
    
    $kapcsolat = null;
?>