<?php
    include("kapcsolat.php");
    
    $id           = post("dalszoveg_id");
    $cim          = post("cim");
    $tipus        = post("tipus");
    $sorszam      = post("sorszam");
    $szoveg       = post("szoveg");
    
    if ($szoveg != "")
    {
        if ($id != "")
        {
            $q = $kapcsolat->prepare("UPDATE dalszovegek
                                      SET    cim     = :cim,
                                             tipus   = :tipus,
                                             sorszam = :sorszam,
                                             szoveg  = :szoveg
                                      WHERE  id      = :id;");
            
            $q->bindValue(':id',      $id);
            $q->bindValue(':cim',     $cim);
            $q->bindValue(':tipus',   $tipus);
            $q->bindValue(':sorszam', $sorszam);
            $q->bindValue(':szoveg',  $szoveg);
            $q->execute();
        }
        else if ($cim != "")
        {
            $q = $kapcsolat->prepare("INSERT INTO dalszovegek(cim, tipus, sorszam, szoveg)
                                      VALUES(:cim, :tipus, :sorszam, :szoveg);");
            $q->bindValue(':cim',     $cim);
            $q->bindValue(':tipus',   $tipus);
            $q->bindValue(':sorszam', $sorszam);
            $q->bindValue(':szoveg',  $szoveg);
            $q->execute();
        }
    }
  
    $kapcsolat = null;
?>