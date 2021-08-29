<?php
    function osszehasonlito($a, $b)
    {
        $karakterek = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxzAÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXZ";   // speciális karakterek pozíciójának definiálása
        
        for($i = 0, $n = min(strlen($a), strlen($b)); $i < $n; $i++)
        {
            if ($a[$i] != $b[$i])
            {
                $a_egybajtos = -1;
                $a_ketbajtos = -1;
                $b_egybajtos = -1;
                $b_ketbajtos = -1;
                
                for($j = 0, $o = strlen($karakterek); $j < $o; $j++)
                {
                    if ($a_ketbajtos == -1 and 
                        $karakterek[$j] == $a[$i])
                    {
                        $a_egybajtos = $j;
                        // echo "egybájtos[$j]: ".$karakterek[$j]."<br>";
                        if (isset($karakterek[$j+1]) and 
                            isset($a[$i+1]) and
                            $karakterek[$j].$karakterek[$j+1] == $a[$i].$a[$i+1])
                        {
                            $a_ketbajtos = $j;
                            // echo "kétbájtos[$j]: ".$karakterek[$j].$karakterek[$j+1]."<br>";
                        }
                    }
                    
                    if ($b_ketbajtos == -1 and 
                        $karakterek[$j] == $b[$i])
                    {
                        $b_egybajtos = $j;
                        // echo "egybájtos[$j]: ".$karakterek[$j]."<br>";
                        if (isset($karakterek[$j+1]) and 
                            isset($b[$i+1]) and
                            $karakterek[$j].$karakterek[$j+1] == $b[$i].$b[$i+1])
                        {
                            $b_ketbajtos = $j;
                            // echo "kétbájtos[$j]: ".$karakterek[$j].$karakterek[$j+1]."<br>";
                        }
                    }
                    
                    if ($a_ketbajtos != -1 and 
                        $b_ketbajtos != -1)
                    {
                        break;
                    }
                }
                
                $a_idx = ($a_ketbajtos != -1 ? $a_ketbajtos : $a_egybajtos);
                $b_idx = ($b_ketbajtos != -1 ? $b_ketbajtos : $b_egybajtos);
                
                // echo "($a_idx, $b_idx)<br>";
                
                if ($a_idx != $b_idx)
                {
                    return($a_idx > $b_idx ? 1 : -1);
                }
                else if ($a[$i] != $b[$i])  // ismeretlen karakternél az eredeti összehasonlító függvényt használjuk
                {                           // így az összehasonlító függvény gyakorlatilag csak egy kiegészítés a speciális karakterekre
                    return($a[$i] > $b[$i] ? 1 : -1);
                }
            }
        }
        return(0);
    }
?>