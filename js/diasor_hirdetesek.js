var Diasor_Hirdetesek =
{
    uj_diasor : function(szoveg)
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
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td>HIRDETÉSEK<br>\n"
              + "  <textarea id='hirdetesek_" + gomb_id + "'></textarea>\n"
              + " </td>\n"
              + " <td><button onclick='dia_keszitese_specialisan('hirdetesek_" + gomb_id + "');'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}