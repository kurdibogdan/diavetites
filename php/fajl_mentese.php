<?php
    include("kapcsolat.php");
    $fajlnev = post("fajlnev");
    if ($fajlnev != "")
    {
        echo "Fáj mentése: $fajlnev";
    }
    $kapcsolat = null;
?>