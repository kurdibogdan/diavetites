var Diasor_Urvacsora2 =
{
    uj_diasor : function(gomb_id, callback)
    {
        Diasor_Dalszoveg.uj_diasor("urvacsora2_enek_1", function(diak_urvacsora2_enek_1)
        {
            Diasor_Dalszoveg.uj_diasor("urvacsora2_enek_2", function(diak_urvacsora2_enek_2)
            {
                Diasor_Dalszoveg.uj_diasor("urvacsora2_enek_3", function(diak_urvacsora2_enek_3)
                {
                    var diak = [].concat(Diasor_Urvacsora_Bunvallas2.uj_diasor("urvacsora2_bunvallas"))  // Bűnvallás és feloldozás (rövid verzió)
                                 .concat(diak_urvacsora2_enek_1)                                        // Örvendj, világ (1 vsz.)
                                 .concat(Diasor_Urvacsora_Parbeszed.uj_diasor("urvacsora2_parbeszed"))  // Párbeszéd: - Az Úr legyen veletek! - És a te lelkeddel.
                                 .concat(diak_urvacsora2_enek_2)                                        // Szent, szent, szent a Seregek Ura (1 vsz.)
                                 .concat(Diasor_Urvacsora_Titok.uj_diasor("urvacsora2_titok"))          // A hit titkát hirdetjük
                                 .concat(diak_urvacsora2_enek_3)                                        // Az Úr szent bárányára (1 vsz.)
                    if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
                    {
                        diak = [];
                    }
                    
                    if (typeof callback == "function") callback(diak);
                });
            }); 
        });
    },
    
    jelolo_valtasa : function(gomb_id)
    {
        var jelolo             = $("#dia_keszitese_" + gomb_id);
        var jelolo_bekapcsolva = jelolo.prop("checked");
        var bovito             = $("#diasor_bovitese_" + gomb_id);
        
        // Bővítő átkapcsolása:
        $(bovito).prop("disabled", (jelolo_bekapcsolva ? "" : "disabled"));
        
        // Kapcsolódó gombok elrejtése / mutatása:
        var kapcsolodo_gombok =
        [
            "urvacsora2_bunvallas",
            "urvacsora2_enek_1",
            "urvacsora2_parbeszed",
            "urvacsora2_enek_2",
            "urvacsora2_titok",
            "urvacsora2_enek_3",
        ];
        
        for(var i=0, n = kapcsolodo_gombok.length; i<n; i++)
        {
            if (jelolo_bekapcsolva == true)
            {
                $("#dia_keszitese_sor_" + kapcsolodo_gombok[i]).show();
            }
            else
            {
                $("#dia_keszitese_sor_" + kapcsolodo_gombok[i]).hide();
            }
        }
    },
    
    diakeszites_gomb : function(gomb_id)
    {   
        var t = " <tr id='dia_keszitese_sor_"+gomb_id+"'>\n"
              + "  <th><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' onchange=\"Diasor_Urvacsora2.jelolo_valtasa('" + gomb_id + "');\"><span class='slider round'></span></label></th>\n"
              + "  <th width='230'>úrvacsorai liturgia 2</th>\n"
              + "  <th><button id='diasor_bovitese_" + gomb_id + "' "
              + "              onclick=\"Diasor_Urvacsora2.uj_diasor('" + gomb_id + "', diasor_bovitese);\""
              + "              disabled='disabled'>&rarr;</button></th>\n"
              + " </tr>\n"
              + " <tr>\n"
              + Diasor_Urvacsora_Bunvallas2.diakeszites_gomb("urvacsora2_bunvallas", REJTETT_GOMB)
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora2_enek_1", "csak_elso_versszak", "ének 1 versszakkal", REJTETT_GOMB)
              + Diasor_Urvacsora_Parbeszed.diakeszites_gomb("urvacsora2_parbeszed", REJTETT_GOMB)
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora2_enek_2", "csak_elso_versszak", "ének 1 versszakkal", REJTETT_GOMB)
              + Diasor_Urvacsora_Titok.diakeszites_gomb("urvacsora2_titok", REJTETT_GOMB)
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora2_enek_3", "csak_elso_versszak", "ének 1 versszakkal", REJTETT_GOMB)
              ;
        return(t);
    },
}