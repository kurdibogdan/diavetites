var Diasor_Focim =
{
    uj_diasor : function(datum)
    {
        var diak = 
        [
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
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td><input id='cimoldal_szoveg' type='text' value='ISTENTISZTELET'><br>\n"
              + "     <input id='focim_datum' type='date'></td>\n"
              + " <td><button onclick=\"dia_keszitese_specialisan('focim');\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
