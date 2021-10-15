<?php
    include("kapcsolat.php");
    
    $q = $kapcsolat->prepare("SELECT id, szoveg
                              FROM   dalszovegek
                              WHERE  1
                              LIMIT  1;");
    $q->execute();
    
    $a = array();
    while($sor = $q->fetch(PDO::FETCH_ASSOC))
    {
        $sor['szoveg'] = str_replace("\n", "<br>", $sor['szoveg']);
        $sor['szoveg'] = str_replace("\r", "<br>", $sor['szoveg']);
        echo $sor['szoveg'];
        echo "<hr>";
    }
        
    $kapcsolat = null;
?>