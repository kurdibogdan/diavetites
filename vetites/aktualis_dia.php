<?php
    function get($parameter)
    {
        if(isset($_GET[$parameter]) and $_GET[$parameter]!="") return $_GET[$parameter];
        else return "";
    }
    
    $DB = "aktualis_dia.db";
    $aktualis_dia = get("aktualis_dia");
    
    if ($aktualis_dia != "")
    {
        file_put_contents($DB, $aktualis_dia);
    }
    else
    {
        $aktualis_dia = file_get_contents($DB);
    }
    
    echo $aktualis_dia;
?>