var Diasor_Cim =
{
    uj_diasor : function(cim)
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
                                "szoveg"    : cim,
                                "betumeret" : 32        // pt
                            }
                        ]
                    }
                ]
            }
        ];
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id, cim)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "</td>\n"
              + " <td><button onclick=\"dia_keszitese_cim('" + cim + "');\">&rarr;</button></td>\n"
              + "</tr>\n";
        
        return(t);
    },
};
