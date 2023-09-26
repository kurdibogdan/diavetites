<?php
    include("kapcsolat.php");
    
    $q = $kapcsolat->query("SELECT id, nev FROM fajlok WHERE 1;");
    $a = array();
    while($sor = $q->fetch(PDO::FETCH_ASSOC))
    {
        array_push($a, $sor);
    }
    echo json_encode($a);
    
    $kapcsolat = null;
?>