<?php
    function uj_sorszam()
    {
        include("kapcsolat.php");
        $kapcsolat->beginTransaction();
        $kapcsolat->query("UPDATE kepek SET max_id = (max_id + 1) WHERE 1;");
        $q = $kapcsolat->query("SELECT max_id FROM kepek WHERE 1;");
        $r = $q->fetch(PDO::FETCH_ASSOC);
        $kapcsolat->commit();
        $kapcsolat = null;
        return($r['max_id']);
    }
    
    function sorszambol_fajlnev($sorszam)
    {
        if ($sorszam < 10) $sorszam = "00".$sorszam;
        else if ($sorszam < 100) $sorszam = "0".$sorszam;
        else $sorszam = "".$sorszam;
        return($sorszam);
    }
    
    function uj_sorszamu_fajlnev()
    {
        $sorszam = uj_sorszam();
        $fajlnev = sorszambol_fajlnev($sorszam);
        return($fajlnev);
    }
?>