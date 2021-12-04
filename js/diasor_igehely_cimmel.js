var Diasor_Igehely_Cimmel =
{
    uj_diasor : function(cim, gomb_id)
    {
        var igehely = $("#textus_" + gomb_id).val();
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
        var bevitel = $("#textus_" + gomb_id).val();
        $(jelolo).prop("checked", (bevitel.length > 0 ? "checked" : ""));
        $(bovito).prop("disabled", (bevitel.length > 0 ? "" : "disabled"));
    },
    
    diakeszites_gomb : function(gomb_id, cim)    // cim = TEXTUS, ...
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "<br>\n"
              + "     <input id='textus_" + gomb_id + "' "
              + "            type='text' "
              + "            placeholder='1Pt 5,6-7' "
              + "            onkeyup=\"Diasor_Igehely_Cimmel.jelolo_valtasa('" + gomb_id + "');\">\n"
              + " </td>\n"
              + " <td><button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"diasor_bovitese(Diasor_Igehely_Cimmel.uj_diasor('" + cim + "', '" + gomb_id + "'));\" "
              + "             disabled='disabled'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}