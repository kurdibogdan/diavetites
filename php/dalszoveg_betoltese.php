<?php
    include("kapcsolat.php");
    
    $dalszoveg_id = post("dalszoveg_id");
    if ($dalszoveg_id != "")
    {
        $q = $kapcsolat->prepare("SELECT szoveg FROM dalszovegek WHERE id = :dalszoveg_id;");
        $q->bindValue(":dalszoveg_id", $dalszoveg_id);
        $q->execute();
        
        $sor = $q->fetch(PDO::FETCH_ASSOC);
        echo json_encode($sor['szoveg']);
    }
    
    $kapcsolat = null;
?>