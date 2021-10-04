<?php
    include("kapcsolat.php");
    
    $dalszoveg_id = post("dalszoveg_id");
    $szoveg       = post("szoveg");
    
    if ($dalszoveg_id != "" and
        $szoveg       != "")
    {
        $q = $kapcsolat->prepare("UPDATE dalszovegek
                                  SET szoveg = :szoveg
                                  WHERE  id  = :dalszoveg_id;");
        $q->bindValue(':dalszoveg_id', $dalszoveg_id);
        $q->bindValue(':szoveg', $szoveg);
        $q->execute();
    }
  
    $kapcsolat = null;
?>