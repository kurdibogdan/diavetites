<?php
    include("kapcsolat.php");
    
    $keres = post("keres");
    if ($keres != "")
    {
        $keres = str_replace("'", "", $keres);
        $q = $kapcsolat->prepare("SELECT id, cim, sorszam
                                  FROM   dalszovegek
                                  WHERE  kereses(szoveg, :keres) == '1'
                                  LIMIT  10;");
        $q->bindValue(':keres', "$keres", PDO::PARAM_STR);
        $q->execute();
        $a = array();
        while($sor = $q->fetch(PDO::FETCH_ASSOC))
            array_push($a, $sor);
        echo json_encode($a);
    }
    
    $kapcsolat = null;
?>