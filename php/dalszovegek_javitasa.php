<?php
    // Végigmegy az összes éneken.
    // Törli a "\r" sorvégződéseket.
    // A versszakoknak #1, #2, stb. jelölést tesz be.

    include("kapcsolat.php");
    
    $q = $kapcsolat->prepare("SELECT id, szoveg
                              FROM   dalszovegek
                              WHERE  1;");
    $q->execute();
    
    $a = array();
    while($sor = $q->fetch(PDO::FETCH_ASSOC))
    {
        $id         = $sor['id'];
        $szoveg     = $sor['szoveg'];
        $szoveg     = str_replace("\r", "", $szoveg);                   // "\r" sorvég törlése mindenhonnan
        $szoveg     = preg_replace("/^#[0-9].*?$\n/mi", "", $szoveg);   // korábbi versszakjelölések törlése (nehogy duplán belekerüljön)
        $versszakok = explode("\n\n", $szoveg);
        for($i=0, $n=sizeof($versszakok); $i<$n; $i++)
        {
            $versszakok[$i] = "#".($i+1)."\n".$versszakok[$i];          // versszakjelölések hozzáadása
        }
        $szoveg = implode("\n\n", $versszakok);
        echo str_replace("\n", "<br>", $szoveg);
        
        $q2 = $kapcsolat->prepare("UPDATE dalszovegek
                                  SET    szoveg  = :szoveg
                                  WHERE  id      = :id;");
        
        $q2->bindValue(':id',     $id);
        $q2->bindValue(':szoveg', $szoveg);
        $q2->execute();
        echo "<hr>";
    }
    
    $kapcsolat = null;
?>