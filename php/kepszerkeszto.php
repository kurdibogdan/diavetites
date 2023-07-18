<?php
// TODO:
// - PNG kezelésének tesztelése

class Kepszerkeszto    // https://code.tutsplus.com/how-to-create-a-thumbnail-image-in-php--cms-36421t
{
    private $eredeti;
    public function __construct($utvonal_fajlnevvel)
    {
        $this->eredeti = $utvonal_fajlnevvel;
    }
    
    function ez_JPG()
    {
        $fajltipus = pathinfo($this->eredeti, PATHINFO_EXTENSION);
        return($fajltipus == "jpg" or
               $fajltipus == "JPG" or
               $fajltipus == "jpeg" or
               $fajltipus == "JPEG");
    }
    
    function ez_PNG()
    {
        $fajltipus = pathinfo($this->eredeti, PATHINFO_EXTENSION);
        return($fajltipus == "png" or 
               $fajltipus == "PNG");
    }
    
    function kep_beolvasasa()
    {
        $kep = 0;
        if ($this->ez_JPG())
        {
            $kep = imagecreatefromjpeg($this->eredeti);
        }
        else if ($this->ez_PNG())
        {
            $kep = imagecreatefrompng($this->eredeti);
        }
        return($kep);
    }
    
    public function kepmeret_maximalizalasa($max_szelesseg, $max_magassag)
    {
        $kep = $this->kep_beolvasasa();
        if ($kep != 0)
        {
            // átméretezés:
            $eredeti_szelesseg = imagesx($kep);
            $eredeti_magassag = imagesy($kep);
            $eredeti_keparany = $eredeti_szelesseg / $eredeti_magassag;
            $uj_keparany = $max_szelesseg / $max_magassag;
            if ($uj_keparany < $eredeti_keparany)   // szélesség lesz a meghatározó
            {
                $uj_szelesseg = $max_szelesseg;
                $uj_magassag = round($uj_szelesseg / $eredeti_keparany);
            }
            else    // magasság lesz a meghatározó
            {
                $uj_magassag = $max_magassag;
                $uj_szelesseg = round($eredeti_keparany * $uj_magassag);
            }
            
            // echo "Képméret maximalizálása ($max_szelesseg, $max_magassag):\n";  // 1600 x 1600
            // echo "- eredeti képarány: $eredeti_keparany\n";
            // echo "- új magasság: $uj_magassag\n";     // 1164
            // echo "- új szélesség: $uj_szelesseg\n";   // 1600
            
            // új kép készítése:
            $uj_kep = imagecreatetruecolor($uj_szelesseg, $uj_magassag);
            imagecopyresampled($uj_kep, $kep, 0, 0, 0, 0, $uj_szelesseg, $uj_magassag, $eredeti_szelesseg, $eredeti_magassag);
            
            // képfájl mentése (eredeti törlése):
            $utvonal = dirname($this->eredeti);
            $fajlnev = pathinfo($this->eredeti, PATHINFO_FILENAME);
            unlink($this->eredeti);
            imagejpeg($uj_kep, $utvonal."/".$fajlnev.".jpg", 70);
            $this->eredeti = $utvonal."/".$fajlnev.".jpg";
            
            // ideiglenes változók törlése:
            imagedestroy($kep);
            imagedestroy($uj_kep);
        }
    }
    
    public function kiskep_keszitese()
    {
        $szelesseg = 84;
        $magassag = 104;
        $utvonal = dirname($this->eredeti);
        $fajlnev = pathinfo($this->eredeti, PATHINFO_FILENAME);
        $utvonal_fajlnevvel = $utvonal."/kiskep/".$fajlnev.".jpg";
        $this->atmeretezes_uj_fajlkent($szelesseg, $magassag, $utvonal_fajlnevvel);
    }
    
    public function atmeretezes_uj_fajlkent($szelesseg, $magassag, $utvonal_fajlnevvel)
    {
        $kep = $this->kep_beolvasasa();
        if ($kep != 0)
        {
            // átméretezés:
            $eredeti_szelesseg = imagesx($kep);
            $eredeti_magassag = imagesy($kep);
            $eredeti_keparany = $eredeti_szelesseg / $eredeti_magassag;
            $uj_keparany = $szelesseg / $magassag;
            if ($uj_keparany < $eredeti_keparany)   // magasság lesz a meghatározó
            {
                $uj_magassag = $magassag;
                $uj_szelesseg = round($eredeti_keparany * $uj_magassag);
            }
            else    // szélesség lesz a meghatározó
            {
                $uj_szelesseg = $szelesseg;
                $uj_magassag = round($uj_szelesseg / $eredeti_keparany);
            }
            
            // echo "Átméretezés (kép kivágásával ($szelesseg, $magassag):\n";
            // echo "- eredeti képarány: $eredeti_keparany\n";
            // echo "- új szélesség: $uj_szelesseg\n";   // 143
            // echo "- új magasság: $uj_magassag\n";     // 104
            
            // új kép készítése:
            $uj_kep = imagecreatetruecolor($uj_szelesseg, $uj_magassag);
            imagecopyresampled($uj_kep, $kep, 0, 0, 0, 0, $uj_szelesseg, $uj_magassag, $eredeti_szelesseg, $eredeti_magassag);
            $uj_kep = imagecrop($uj_kep, ["x" => ($uj_szelesseg - $szelesseg) / 2,
                                "y" => ($uj_magassag - $magassag) /2,
                                "width" => $szelesseg,
                                "height" => $magassag]);
            
            // képfájl mentése:
            $utvonal = dirname($this->eredeti);
            $fajlnev = pathinfo($this->eredeti, PATHINFO_FILENAME);
            imagejpeg($uj_kep, $utvonal_fajlnevvel, 70);
            
            // ideiglenes változók törlése:
            imagedestroy($kep);
            imagedestroy($uj_kep);
        }
    }
    
    public function atmeretezes_uj_keparannyal($uj_keparany)
    {
        $kep = $this->kep_beolvasasa();
        if ($kep != 0)
        {
            $eredeti_szelesseg = imagesx($kep);
            $eredeti_magassag = imagesy($kep);
            $eredeti_keparany = $eredeti_szelesseg / $eredeti_magassag;
            
            if ($uj_keparany < $eredeti_keparany)
            {
                $uj_magassag = $eredeti_magassag;
                $uj_szelesseg = round($uj_magassag * $uj_keparany);
            }
            else
            {
                $uj_szelesseg = $eredeti_szelesseg;
                $uj_magassag = round($uj_szelesseg / $uj_keparany);
            }
            
            // echo "Átméretezés új képaránnyal ($uj_keparany):\n";
            // echo "- eredeti szélesség: $eredeti_szelesseg\n";   // 
            // echo "- eredeti magasság: $eredeti_magassag\n";     // 
            // echo "- eredeti képarány: $eredeti_keparany\n";
            // echo "- új szélesség: $uj_szelesseg\n";   // 
            // echo "- új magasság: $uj_magassag\n";     // 
            // echo "- új képarány: $uj_keparany\n";     // 
            
            // új kép készítése:
            $uj_kep = imagecrop($kep, ["x" => ($eredeti_szelesseg - $uj_szelesseg) / 2,
                                "y" => ($eredeti_magassag - $uj_magassag) / 2,
                                "width" => $uj_szelesseg,
                                "height" => $uj_magassag]);
            
            // ideiglenes változók törlése:
            imagedestroy($kep);
            return($uj_kep);  // imagedestroy($uj_kep);
        }
    }
}

// $objThumbImage = new ThumbImage("/web/uploads/orig.jpg");
// $objThumbImage->createThumb("/web/uploads/thumb.jpg", 125);