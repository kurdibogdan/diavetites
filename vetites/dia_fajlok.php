<?php
    $MAPPA = "diak";
    $kepek = glob($MAPPA."/*.*");  // fájlok listája
    
    // csak a fájlnevet hagyja meg:
    for($i=0; $i<sizeof($kepek); $i++)
    {
        $kepek[$i] = basename($kepek[$i]);
    }
     
    echo(json_encode(array("kepek" => $kepek, "mappa" => $MAPPA)));
?>