<?php
    function get($parameter)
    {
        if(isset($_GET[$parameter]) and $_GET[$parameter]!="") return $_GET[$parameter];
        else return "";
    }
    function post($parameter)
    {
        if(isset($_POST[$parameter]) and $_POST[$parameter]!="") return $_POST[$parameter];
        else return "";
    }
    function sess($parameter)
    {
        if(isset($_SESSION[$parameter]) and $_SESSION[$parameter]!="") return $_SESSION[$parameter];
        else return "";
    }
    
    function query($qs)
    {
        global $kapcsolat;
        $q = $kapcsolat->query($qs);
        
        // SELECT esetén van visszatérési érték:
        $r = array();
        preg_match("/^\s*(\S+)/ums", $qs, $type);
        $type = strtoupper($type[0]);
        if ($type == "SELECT")
        {
            $r = $q->fetchArray(SQLITE3_ASSOC);            
        }
        return($r);
    }
    
    function query_field($qs, $field)
    {
        global $kapcsolat;
        $r = query($qs);
        $f = "";
        if ($r != NULL and $r[$field] != null)
        {
            $f = $r[$field];
        }
        return($f);
    }
    
    function query_all($qs)
    {
        global $kapcsolat;
        $a = array();
        $q = $kapcsolat->query($qs);
        while($r = $q->fetchArray(SQLITE3_ASSOC))
            array_push($a, $r);
        return($a);
    }
?>