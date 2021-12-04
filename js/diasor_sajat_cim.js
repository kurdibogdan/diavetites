var Diasor_Sajat_Cim =
{
    uj_diasor : function(gomb_id)
    {
        var cim  = $("#sajat_cim_" + gomb_id).val();
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
                                "betumeret" : 40,       // pt
                                "betutipus" : "Gill Sans MT",
                                "felkover"  : true
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
        var bevitel = $("#sajat_cim_" + gomb_id).val();
        $(jelolo).prop("checked", (bevitel.length > 0 ? "checked" : ""));
        $(bovito).prop("disabled", (bevitel.length > 0 ? "" : "disabled"));
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td><input id='sajat_cim_" + gomb_id + "' "
              + "            type='text' "
              + "            placeholder='(saját cím)' "
              + "            onkeyup=\"Diasor_Sajat_Cim.jelolo_valtasa('" + gomb_id + "');\">\n"
              + " </td>\n"
              + " <td><button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"diasor_bovitese(Diasor_Sajat_Cim.uj_diasor('" + gomb_id + "'));\" "
              + "             disabled='disabled'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
