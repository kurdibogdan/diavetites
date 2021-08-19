function Diasor_Hirdetesek(szoveg)
{
    var hirdetesek_diai = 
    [   // diak
        {   // 1 dia objektumokkal
            kijelolve  : false,
            csoport    : "",
            objektumok : 
            [
                {   // 1 objektum
                    "tipus"      : "szovegdoboz",
                    "poz_x"      : 0,           // %
                    "poz_y"      : 5,           // %
                    "szelesseg"  : 100,         // %
                    "magassag"   : 100,         // %
                    "igazitas_x" : "kozepre",
                    "igazitas_y" : "fent",
                    "szovegek"   :
                    [
                        {
                            "szoveg"    : "HIRDETÉSEK",
                            "betumeret" : 44        // pt
                        }
                    ]
                },
                {   // 1 objektum
                    "tipus"      : "szovegdoboz",
                    "poz_x"      : 5,           // %
                    "poz_y"      : 20,          // %
                    "szelesseg"  : 90,          // %
                    "magassag"   : 80,          // %
                    "igazitas_x" : "balra",
                    "igazitas_y" : "fent",
                    "szovegek"   :
                    [
                        {
                            "szoveg"    : szoveg.replace("\n", "<br>"),
                            "betumeret" : 32        // pt
                        }
                    ]
                }
            ]
        }
    ];
    
    return(hirdetesek_diai);
}