<?php
    include("kapcsolat_fuggvenyei.php");
    $kep = post("kep");
    $bazis = "../kepek/hatter";
    unlink($bazis."/".$kep);
    unlink($bazis."/kiskep/".$kep);
?>