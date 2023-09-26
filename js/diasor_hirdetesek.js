var Diasor_Hirdetesek =
{
    uj_diasor : function(gomb_id)
    {
        var szoveg = $("#hirdetesek_" + gomb_id).val();
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
        
        if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
        {
            diak = [];
        }
        return(diak);
    },
    
    jelolo_valtasa : function(gomb_id)
    {
        var jelolo  = $("#dia_keszitese_" + gomb_id);
        var bovito  = $("#diasor_bovitese_" + gomb_id);
        var bevitel = $("#hirdetesek_" + gomb_id).val();
        $(jelolo).prop("checked", (bevitel.length > 0 ? "checked" : ""));
        $(bovito).prop("disabled", (bevitel.length > 0 ? "" : "disabled"));
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td>HIRDETÉSEK<br>\n"
              + "  <textarea id='hirdetesek_" + gomb_id + "' "
              + "             onkeyup=\"Diasor_Hirdetesek.jelolo_valtasa('" + gomb_id + "');\"></textarea>\n"
              + " </td>\n"
              + " <td><button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"diasor_bovitese(Diasor_Hirdetesek.uj_diasor('" + gomb_id + "'));\" "
              + "             disabled='disabled'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
    
    mobil_diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td>HIRDETÉSEK<br>\n"
              + "  <textarea id='hirdetesek_" + gomb_id + "' "
              + "             onkeyup=\"Diasor_Hirdetesek.jelolo_valtasa('" + gomb_id + "');\"></textarea>\n"
              + " </td>\n"
              + " <td><button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"diasor_bovitese(Diasor_Hirdetesek.uj_diasor('" + gomb_id + "'));\" "
              + "             disabled='disabled'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}