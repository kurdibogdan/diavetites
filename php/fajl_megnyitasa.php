<?php
    include("kapcsolat.php");
    $fajlnev = post("fajlnev");
    if ($fajlnev != "")
    {
        echo "Fáj megnyitása: $fajlnev";
    }
    $kapcsolat = null;
?>