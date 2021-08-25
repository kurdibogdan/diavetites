var Diasor_Dalszoveg =
{
    uj_diasor : function(gomb_id)
    {
        var kivalasztott_enek = $("#enek_valasztasa_" + gomb_id).val();
        var dalszoveg         = dalszovegek[kivalasztott_enek].szoveg;
        var diak              = [];
        
        diak.push(
        { 
            kijelolve  : false,
            csoport    : "",
            objektumok : []
        });
        
        for(var i=0, n=dalszoveg.length; i<n; i++)
        {
            var szovegdoboz =
            {
                "tipus"      : "szovegdoboz",
                "poz_x"      : 4,           // % (~ 1 cm)
                "poz_y"      : 8,           // % (~ 1 cm)
                "szelesseg"  : 92,          // % (100% - 1 cm)
                "magassag"   : 84,          // % (100% - 1 cm)
                "igazitas_x" : "balra",
                "igazitas_y" : "fent",
                "szovegek"   :
                [
                    {
                        "szoveg"    : dalszoveg[i].join("<br>"),
                        "betumeret" : 32,   // pt
                        "betutipus" : "Sylfaen"
                    },
                ]
            };
            
            var dia =
            {
                kijelolve  : false,
                csoport    : "",
                objektumok : [szovegdoboz]
            };
            diak.push(dia);
        }
        
        diak.push(
        { 
            kijelolve  : false,
            csoport    : "",
            objektumok : []
        });
        
        return(diak);
    },
    
    jelolo_valtasa : function(gomb_id)
    {
        var jelolo  = $("#dia_keszitese_" + gomb_id);
        var bovito  = $("#diasor_bovitese_" + gomb_id);
        var bevitel = $("#enek_valasztasa_" + gomb_id).val();
        if (jelolo && bovito)
        {
            $(jelolo).prop("checked", (bevitel.length > 0 ? "checked" : ""));
            $(bovito).prop("disabled", (bevitel.length > 0 ? "" : "disabled"));
        }
    },
    
    diakeszites_gomb : function(gomb_id, tipus, cim) // tipus = "ifienek", "dicseret", cim = "ifiének", "dicséret"
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "<br>\n"
              + "  <select id='enek_valasztasa_" + gomb_id + "' "
              + "          class='" + tipus + "_valasztasa' "
              + "          onchange=\"Diasor_Dalszoveg.jelolo_valtasa('" + gomb_id + "');\">"
              + "  </select>\n"
              + " </td>\n"
              + " <td><button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"diasor_bovitese(Diasor_Dalszoveg.uj_diasor('" + gomb_id + "'));\" "
              + "             disabled='disabled'>&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}
