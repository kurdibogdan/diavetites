<?php
    function legnagyobb_sorszam()
    {
        $bazis = "..";
        $utvonal = "kepek/hatter/";
        $kepek = glob($bazis."/".$utvonal."*.*");
        $legnagyobb_sorszam = 0;
        for ($i=0; $i<sizeof($kepek); $i++)
        {
            $sorszam = (int)(pathinfo($kepek[$i], PATHINFO_FILENAME));
            if ($sorszam > $legnagyobb_sorszam) $legnagyobb_sorszam = $sorszam;
        }
        return($legnagyobb_sorszam);
    }
    
    function kovetkezo_sorszam()    // kitalálja a következő fájlnevet
    {
        return(legnagyobb_sorszam()+1);
    }
    
    function sorszambol_fajlnev($sorszam)
    {
        if ($sorszam < 10) $sorszam = "00".$sorszam;
        else if ($sorszam < 100) $sorszam = "0".$sorszam;
        else $sorszam = "".$sorszam;
        return($sorszam);
    }
    
    function legnagyobb_sorszamu_fajlnev()
    {
        return(sorszambol_fajlnev(legnagyobb_sorszam()));
    }
    
    function kovetkezo_sorszamu_fajlnev()
    {        
        return(sorszambol_fajlnev(kovetkezo_sorszam()));
    }
?>