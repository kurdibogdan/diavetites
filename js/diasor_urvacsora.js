var Diasor_Urvacsora =
{
    uj_diasor : function(gomb_id, callback)
    {
        Diasor_Dalszoveg.uj_diasor("urvacsora_enek_1", function(diak_urvacsora_enek_1)
        {
            Diasor_Dalszoveg.uj_diasor("urvacsora_enek_2", function(diak_urvacsora_enek_2)
            {                
                Diasor_Dalszoveg.uj_diasor("urvacsora_enek_3", function(diak_urvacsora_enek_3)
                {
                    var diak = [].concat(Diasor_Urvacsora_Bunvallas.uj_diasor("urvacsora_bunvallas"))   // Bűnvallás és feloldozás
                                 .concat(diak_urvacsora_enek_1)                                         // 47. ének 1. vsz
                                 .concat(Diasor_Urvacsora_Halaadas.uj_diasor("urvacsora_halaadas"))     // Hálaadás a zsoltár szavaival
                                 .concat(diak_urvacsora_enek_2)                                         // 502. ének 1-3. vsz
                                 .concat(Diasor_Urvacsora_Befejezes.uj_diasor("urvacsora_befejezes"))   // Befejező rész
                                 .concat(diak_urvacsora_enek_3)                                         // 517. ének (Ámen)
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
            "urvacsora_bunvallas",
            "urvacsora_enek_1",
            "urvacsora_halaadas",
            "urvacsora_enek_2",
            "urvacsora_befejezes",
            "urvacsora_enek_3",
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
              + "  <th><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' onchange=\"Diasor_Urvacsora.jelolo_valtasa('" + gomb_id + "');\"><span class='slider round'></span></label></th>\n"
              + "  <th width='230'>úrvacsorai liturgia</th>\n"
              + "  <th><button id='diasor_bovitese_" + gomb_id + "' "
              + "              onclick=\"Diasor_Urvacsora.uj_diasor('" + gomb_id + "', diasor_bovitese);\""
              + "              disabled='disabled'>&rarr;</button></th>\n"
              + " </tr>\n"
              + " <tr>\n"
              + Diasor_Urvacsora_Bunvallas.diakeszites_gomb("urvacsora_bunvallas", REJTETT_GOMB)
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_1", "csak_elso_versszak", "ének 1 versszakkal", REJTETT_GOMB)
              + Diasor_Urvacsora_Halaadas.diakeszites_gomb("urvacsora_halaadas", REJTETT_GOMB)
              // + Mi Atyánk szöveg
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_2", "utolso_versszakig", "közbülső ének (utolsó előtti versszakig)", REJTETT_GOMB)
              + Diasor_Urvacsora_Befejezes.diakeszites_gomb("urvacsora_befejezes", REJTETT_GOMB)
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_3", "csak_utolso_versszak", "befejező ének (utolsó versszak)", REJTETT_GOMB)
              // + úrvacsorai közösség szöveg
              ;
        return(t);
    },
    
    mobil_diakeszites_gomb : function(gomb_id)
    {
        var t = " <tr id='dia_keszitese_sor_"+gomb_id+"'>\n"
              + "  <th width='230'>úrvacsorai liturgia</th>\n"
              + "  <th><button id='diasor_bovitese_" + gomb_id + "' "
              + "              onclick=\"Diasor_Urvacsora.uj_diasor('" + gomb_id + "', diasor_bovitese);\""
              + "              disabled='disabled'>&rarr;</button></th>\n"
              + " </tr>\n"
          //  + " <tr>\n"
          //  + Diasor_Urvacsora_Bunvallas.diakeszites_gomb("urvacsora_bunvallas", REJTETT_GOMB)
          //  + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_1", "csak_elso_versszak", "ének 1 versszakkal", REJTETT_GOMB)
          //  + Diasor_Urvacsora_Halaadas.diakeszites_gomb("urvacsora_halaadas", REJTETT_GOMB)
          //  // + Mi Atyánk szöveg
          //  + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_2", "utolso_versszakig", "közbülső ének (utolsó előtti versszakig)", REJTETT_GOMB)
          //  + Diasor_Urvacsora_Befejezes.diakeszites_gomb("urvacsora_befejezes", REJTETT_GOMB)
          //  + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_3", "csak_utolso_versszak", "befejező ének (utolsó versszak)", REJTETT_GOMB)
          //  // + úrvacsorai közösség szöveg
              ;
        return(t);
    },
}