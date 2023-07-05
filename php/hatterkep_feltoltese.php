<?php
    include("thumbimage.class.php");
    include("hatterkep_sorszamozas.php");
    
    $fajlnev = $_FILES["hatterkep"]["name"];
    $celmappa = "../kepek/hatter";
    $fajltipus = pathinfo($fajlnev, PATHINFO_EXTENSION);
    $celfajl = kovetkezo_sorszamu_fajlnev().".".$fajltipus;
    $ervenyes_fajltipusok = array("jpg", "jpeg", "png");
    
    if (in_array(strtolower($fajltipus), $ervenyes_fajltipusok) == false)
    {
        echo 0;
    }
    else    // fájl feltöltése
    {
        if (move_uploaded_file($_FILES["hatterkep"]["tmp_name"], $celmappa."/".$celfajl))
        {
            $kiskep = new ThumbImage($celmappa."/".$celfajl);
            $kiskep->createThumb($celmappa."/kiskep/".$celfajl, 100);
            echo 1;
        }
        else
        {
            echo 0;
        }
    }
?>