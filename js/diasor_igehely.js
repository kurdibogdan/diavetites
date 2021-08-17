function Diasor_Igehely(igehely)
{
    var igehely_diai = 
    [   // diak
        [   // 1 dia objektumokkal
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
                        "szoveg"    : igehely,
                        "betumeret" : 32        // pt
                    }
                ]
            }
        ]
    ];
    
    return(igehely_diai);
}