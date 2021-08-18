function Diasor_Cimoldal(datum)
{
    var cimoldal_diai = 
    [   // diak
        {   // 1 dia objektumokkal
            kijelolve  : false,
            csoport    : "",
            objektumok : 
            [
                {   // 1 objektum
                    "tipus"      : "szovegdoboz",
                    "poz_x"      : 0,           // %
                    "poz_y"      : 0,           // %
                    "szelesseg"  : 100,         // %
                    "magassag"   : 100,         // %
                    "igazitas_x" : "kozepre",
                    "igazitas_y" : "kozepre",
                    "szovegek"   :
                    [
                        {
                            "szoveg"    : "ISTENTISZTELET",
                            "betumeret" : 44        // pt
                        },
                        {
                            "szoveg"    : datum,
                            "betumeret" : 32        // pt
                        }
                    ]
                }
            ]
        }
    ];
    
    return(cimoldal_diai);
}