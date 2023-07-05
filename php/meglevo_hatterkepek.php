<?php
    $bazis = "..";
    $utvonal = "kepek/hatter/";
    $kepek = glob($bazis."/".$utvonal."*.*");
    for($i=0; $i<sizeof($kepek); $i++)
    {
        $darabok = explode("/", $kepek[$i]);
        $fajlnev = utf8_encode($darabok[sizeof($darabok)-1]);
        $kepek[$i] = $fajlnev; // $utvonal.$fajlnev;
    }
    // echo json_encode($kepek);
    echo json_encode($kepek, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>