<?php
    include("kepszerkeszto.php");
    include("hatterkep_sorszamozas.php");
    
    $SIKERULT = 1;
    $HIBAS = 0;
    
    $fajlnev = $_FILES["hatterkep"]["name"];
    $celmappa = "../kepek/hatter";
    $fajltipus = pathinfo($fajlnev, PATHINFO_EXTENSION);
    $celfajl = uj_sorszamu_fajlnev().".".$fajltipus;
    $ervenyes_fajltipusok = array("jpg", "jpeg", "png");
    
    if (in_array(strtolower($fajltipus), $ervenyes_fajltipusok) == false)
    {
        echo $HIBAS;
    }
    else    // fájl feltöltése
    {
        if (move_uploaded_file($_FILES["hatterkep"]["tmp_name"], $celmappa."/".$celfajl))
        {
            $kep = new Kepszerkeszto($celmappa."/".$celfajl);
            $kep->kepmeret_maximalizalasa(1600, 1600);
            $kep->kiskep_keszitese();
            echo $SIKERULT;
        }
        else
        {
            echo $HIBAS;
        }
    }
?>