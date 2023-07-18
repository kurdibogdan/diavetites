<?php
    include("kapcsolat_fuggvenyei.php");
    include("kepszerkeszto.php");
    
    $fajl = get("fajl");
    $keparany = get("keparany");
    $fajl = str_replace("..", "", $fajl);   // hackelés ellen
    
    $kep = new Kepszerkeszto("../kepek/hatter/$fajl");
    $uj_kep = $kep->atmeretezes_uj_keparannyal($keparany);
    
    header("Content-Type: image/jpeg");
    imagejpeg($uj_kep);
    imagedestroy($uj_kep);
?>