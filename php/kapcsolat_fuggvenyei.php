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
        while($r = $q->fetch(PDO::FETCH_ASSOC))
            array_push($a, $r);
        return($a);
    }
    
    function ekezettelen($szo)
	{
		$ekezettelenito = array( 'ö' => 'o',  'Ö' => 'O',  'ó' => 'o',  'Ó' => 'O',  'ő' => 'o',  'Ő' => 'O',
								 'ú' => 'u',  'Ú' => 'U',  'ű' => 'u',  'Ű' => 'U',  'ü' => 'u',  'Ü' => 'U',
								 'á' => 'a',  'Á' => 'A',  'é' => 'e',  'É' => 'E',  'í' => 'i',  'Í' => 'I',
								 'Ä' => 'A',  'ä' => 'a',  'ß' => 'ss', ' ' => '_',  ',' => '');
		$szo =  mb_strtolower($szo, 'UTF-8');
        $szo = strtolower(strtr($szo, $ekezettelenito));
		return $szo;
	}
    
    function kereses($miben, $mit)
    {
        return(strpos(ekezettelen($miben), ekezettelen($mit)) !== false);
    }
?>