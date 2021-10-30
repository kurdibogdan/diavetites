<?php
    include("kapcsolat.php");
    
    $id = post("dalszoveg_id");
    if ($id != "")
    {
        $q = $kapcsolat->prepare("DELETE FROM dalszovegek WHERE id = :id;");        
        $q->bindValue(':id', $id);
        $q->execute();
    }
  
    $kapcsolat = null;
?>