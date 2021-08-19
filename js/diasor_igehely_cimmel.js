var Diasor_Igehely_Cimmel =
{
    uj_diasor : function(cim, igehely)
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
    },
    
    diakeszites_gomb : function(gomb_id, cim)    // cim = TEXTUS, ...
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "<br>\n"
              + "     <input id='textus' type='text' placeholder='1Pt 5,6-7'></td>\n"
              + " <td><button onclick=\"dia_keszitese_ige_cimmel('" + cim + "', 'textus');\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}