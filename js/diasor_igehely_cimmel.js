function Diasor_Igehely_Cimmel(cim, igehely)
{
    var igehely_diai = 
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
                            "szoveg"    : cim,
                            "betumeret" : 40,       // pt
                            "betutipus" : "Gill Sans MT",
                            "felkover"  : true
                        },
                        {
                            "szoveg"    : igehely,
                            "betumeret" : 44,
                            "betutipus" : "Sylfaen",
                            "felkover"  : true
                        }
                    ]
                }
            ]
        }
    ];
    
    return(igehely_diai);
}