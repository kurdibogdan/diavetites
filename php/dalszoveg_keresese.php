<?php
    include("kapcsolat.php");
    
    $keres = post("keres");
    if ($keres != "")
    {
        $q = $kapcsolat->prepare("SELECT id, cim, sorszam
                                  FROM   dalszovegek
                                  WHERE  szoveg LIKE :keres
                                  LIMIT 10;");
        $q->bindValue(':keres', "%$keres%", PDO::PARAM_STR);
        $q->execute();
        
        $a = array();
        while($sor = $q->fetch(PDO::FETCH_ASSOC))
            array_push($a, $sor);
        echo json_encode($a);
    }
    
    $kapcsolat = null;
?>