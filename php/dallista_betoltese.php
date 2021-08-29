<?php
    include("kapcsolat.php");
    include("osszehasonlito.php");
    
    function cimek_osszehasonlitasa($a, $b)
    {
        // A címben találtak megelőzik a szövegben találtakat (keresés esetén):
        if (isset($a['cimben_talalt']) and 
            isset($b['cimben_talalt']) and
            $a['cimben_talalt'] != $b['cimben_talalt'])
        {
            return($a['cimben_talalt'] < $b['cimben_talalt'] ? 1 : -1);
        }
        
        // Azonos típusúakat hasonlítunk össze:
        if ($a['tipus'] == $b['tipus'])
        {
            // Dicséreteknél a sorszám számít:
            if ($a['tipus'] == "dicséret")
            {
                return($a['sorszam'] > $b['sorszam'] ? 1 : -1);
            }
            
            // Ifiénekeknél AÁBC-rendbe rendezzük (külön függvény van a magyar ABC szerinti sorbarendezésre):
            return(osszehasonlito($a['cim'], $b['cim']));
        }
        
        // Egyébként a normális összehasonlító fut:
        return($a['tipus'] > $b['tipus'] ? 1 : -1);
    }
    
    $DEBUG = false;
    $keres = get("keres");
    $a     = array();
    
    // Dallista lekérdezése:
    if ($keres != "")
    {
        $q = $kapcsolat->prepare("SELECT * FROM
                                 (
                                     SELECT   id, cim, tipus, sorszam, 
                                              '1' AS cimben_talalt,
                                              '0' AS szovegben_talalt
                                     FROM     dalszovegek
                                     WHERE    cim LIKE :keres
                                     UNION
                                     SELECT   id, cim, tipus, sorszam,
                                              '0' AS cimben_talalt,
                                              '1' AS szovegben_talalt
                                     FROM     dalszovegek
                                     WHERE    szoveg LIKE :keres
                                 )
                                 GROUP BY id;");
        $q->bindValue(':keres', "%$keres%", PDO::PARAM_STR);
        $q->execute();
        while($sor = $q->fetch())
        {
            array_push
            (
                $a, array
                (
                    'id' => $sor['id'],
                    'cim' => $sor['cim'],
                    'tipus' => $sor['tipus'],
                    'sorszam' => $sor['sorszam'],
                    'cimben_talalt' => $sor['cimben_talalt'],
                    'szovegben_talalt' => $sor['szovegben_talalt']
                )
            );
        }
    }
    else
    {
        $q = $kapcsolat->query("SELECT  id, cim, tipus, sorszam, 
                                        'false' AS cimben_talalt,
                                        'false' AS szovegben_talalt
                                FROM    dalszovegek;");
        
        while($sor = $q->fetch())
        {
            array_push
            (
                $a, array
                (
                    'id' => $sor['id'],
                    'cim' => $sor['cim'],
                    'tipus' => $sor['tipus'],
                    'sorszam' => $sor['sorszam'],
                )
            );
        }
    }
    
    // Címek rendezése betűrendben:
    usort($a, "cimek_osszehasonlitasa");
    
    // Címek szép kijelzése:
    if ($DEBUG == true)
    {
        echo "<pre>";
        print_r($a);
        echo "</pre>";
        for($i=0; $i<sizeof($a); $i++)
        {
            echo $a[$i]['tipus']." -> ";
            if ($a[$i]['tipus'] == "dicséret")
            {
                echo $a[$i]['sorszam'].". ";
            }
            echo $a[$i]['cim']."<br>";
        }
    }
    else
    {
        echo json_encode($a);
    }
    
    $kapcsolat = null;
?>