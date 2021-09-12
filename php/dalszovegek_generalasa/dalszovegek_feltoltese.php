<meta charset="utf-8">
<?php
    include("dalszovegek_generalt.php");
    include("kapcsolat.php");
    
    function json_unicode_dekodolasa($t)    // https://stackoverflow.com/a/2934602
    {
        $t = preg_replace_callback('/\\\\u([0-9a-fA-F]{4})/', function ($match) {
            return mb_convert_encoding(pack('H*', $match[1]), 'UTF-8', 'UCS-2BE');
        }, $t);
        return($t);
    }

    for($i=0; $i<sizeof($dalszovegek); $i++)
    {
        $smt = $kapcsolat->prepare("INSERT INTO dalszovegek(cim, tipus, sorszam, cim_fajlnevbol, szoveg)
                                    VALUES(:cim, :tipus, :sorszam, :cim_fajlnevbol, :szoveg);");
        $smt->bindValue(':cim', json_unicode_dekodolasa($dalszovegek[$i]['cim']));
        $smt->bindValue(':tipus', json_unicode_dekodolasa($dalszovegek[$i]['tipus']));
        $smt->bindValue(':sorszam', json_unicode_dekodolasa($dalszovegek[$i]['sorszam']));  // csak dicséretekhez
        $smt->bindValue(':cim_fajlnevbol', '');                                             // csak ifiénekekhez
        $smt->bindValue(':szoveg', json_unicode_dekodolasa($dalszovegek[$i]['szoveg']));
        $smt->execute();
    }
    
    echo "OK";
    
    $kapcsolat = null;
?>