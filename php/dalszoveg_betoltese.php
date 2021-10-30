<?php
    include("kapcsolat.php");
    
    $id = post("dalszoveg_id");
    $dalszoveg = array
    (
        "id"      => 0,
        "cim"     => "",
        "tipus"   => "",
        "sorszam" => "",
        "szoveg"  => ""
    );
    
    if ($id != "")
    {
        $q = $kapcsolat->prepare("SELECT * FROM dalszovegek WHERE id = :id;");
        $q->bindValue(":id", $id);
        $q->execute();
        
        $dalszoveg = $q->fetch(PDO::FETCH_ASSOC);
    }
    
    echo json_encode($dalszoveg);
    
    $kapcsolat = null;
?>