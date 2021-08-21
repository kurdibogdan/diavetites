var Diasor_Urvacsora =
{
    uj_diasor : function(gomb_id)
    {
        // var enek_1 = "";   // gomb_id alapján a kiválasztott dal
        // var enek_2 = "";
        var diak = 
        [
            {   // 1 dia objektumokkal
                kijelolve  : false,
                csoport    : "",
                objektumok :
                [
                    {   // 1 objektum
                        "tipus"      : "szovegdoboz",
                        "poz_x"      : 4,           // % (~ 1 cm)
                        "poz_y"      : 13,          // % (~ 1 cm)
                        "szelesseg"  : 96,          // % (100% - 1 cm)
                        "magassag"   : 87,          // % (100% - 1 cm)
                        "igazitas_x" : "balra",
                        "igazitas_y" : "fent",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Lelkész:",
                                "betumeret" : 32,        // pt
                                "felkover"  : true
                            },
                            {
                                "szoveg"    : "A mi Urunk Jézus Krisztus így szól: Jöjjetek énhozzám mindnyájan, akik "
                                            + "megfáradtatok és meg vagytok terhelve, és én megnyugvást adok nektek. (Mt 11,28) "
                                            + "Tőle kaptuk ezt az ígéretet, és most asztalához hív bennünket. Előbb azonban "
                                            + "valljuk meg bűneinket a szent Isten előtt.",
                                "betumeret" : 32        // pt
                            }
                        ]
                    }
                ]
            },
            {
                
                kijelolve  : false,
                csoport    : "",
                objektumok :
                [
                    {
                        "tipus"      : "szovegdoboz",
                        "poz_x"      : 4,           // % (~ 1 cm)
                        "poz_y"      : 13,          // % (~ 1 cm)
                        "szelesseg"  : 96,          // % (100% - 1 cm)
                        "magassag"   : 87,          // % (100% - 1 cm)
                        "igazitas_x" : "balra",
                        "igazitas_y" : "fent",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Gyülekezet:",
                                "betumeret" : 32,        // pt
                                "felkover"  : true,
                                "dolt"      : true
                            },
                            {
                                "szoveg"    : "Mi Urunk és Istenünk, mindenek teremtője. Életünk és gyülekezetünk élete "
                                            + "nincs elrejtve előtted. Megvalljuk, hogy vétkeztünk ellened gondolatban, "
                                            + "szóval és cselekedettel. Megvalljuk, hogy sokszor nem figyeltünk szeretetedre, "
                                            + "és parancsolataidra, és teret engedtünk a szeretetlenségnek.",
                                "betumeret" : 32,      // pt
                                "dolt"      : true
                            }
                        ]
                    }
                ]
            },
        ];
        
        return(diak);
    },
    
    jelolo_valtasa : function(gomb_id)
    {
        var jelolo_allapota = $("#dia_keszitese_" + gomb_id).prop("checked");
        if (jelolo_allapota == false)
        {
            $("#dia_keszitese_urvacsora_bunvallas_cim").prop("checked", false);
            $("#dia_keszitese_urvacsora_enek_1").prop("checked", false);
            $("#dia_keszitese_urvacsora_urvacsora_cim").prop("checked", false);
            $("#dia_keszitese_urvacsora_halaado_ima_cim").prop("checked", false);
            $("#dia_keszitese_urvacsora_miatyank_cim").prop("checked", false);
            $("#dia_keszitese_urvacsora_enek_2").prop("checked", false);
            $("#dia_keszitese_urvacsora_urvacsorai_kozosseg_cim").prop("checked", false);
        }
        else
        {
            $("#dia_keszitese_urvacsora_bunvallas_cim").prop("checked", "checked");
            Diasor_Dalszoveg.jelolo_valtasa("urvacsora_enek_1");
            $("#dia_keszitese_urvacsora_urvacsora_cim").prop("checked", "checked");
            $("#dia_keszitese_urvacsora_halaado_ima_cim").prop("checked", "checked");
            $("#dia_keszitese_urvacsora_miatyank_cim").prop("checked", "checked");
            Diasor_Dalszoveg.jelolo_valtasa("urvacsora_enek_2");
            $("#dia_keszitese_urvacsora_urvacsorai_kozosseg_cim").prop("checked", "checked");
        }
    },
    
    diakeszites_gomb : function(gomb_id)
    {   
        var t1 = " <tr>\n"
               + "  <th><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' onchange=\"Diasor_Urvacsora.jelolo_valtasa('" + gomb_id + "');\"><span class='slider round'></span></label></th>\n"
               + "  <th width='230'>úrvacsorai liturgia</th>\n"
               + "  <th><button onclick=\"diasor_bovitese(Diasor_Urvacsora.uj_diasor('" + gomb_id + "'));\">&rarr;</button></th>\n"
               + " </tr>\n"
               + " <tr>\n";
        
        var t2 =
               + "  <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "_enek_1' type='checkbox'><span class='slider round'></span></label></td>\n"
               + "  <td>ének 1 versszakkal<br>\n"
               + "   <select>\n"     // TODO: ének kiválasztása
               + "    <option>47. Ó, hála az Úrnak</option>\n"
               + "   </select>\n"
               + "  </td>\n"
               + "  <td></td>\n"
               + " </tr>\n"
               + " <tr>\n"
               + "  <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "_enek_2' type='checkbox'><span class='slider round'></span></label></td>\n"
               + "  <td>\n"
               + "   közbülső ének (utolsó előtti versszakig)<br>\n"
               + "   <select>\n"
               + "    <option>502. Az Úr szent Bárányára</option>\n"
               + "   </select>\n"
               + "  </td>\n"
               + "  <td></td>\n"
               + " </tr>\n";
              
        var t3 = Diasor_Cim.diakeszites_gomb("urvacsora_bunvallas_cim", "BŰNVALLÁS<br>-<br>FELOLDOZÁS")
               // + bűnvallás szöveg
               + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_1", "dicseret_1_vsz", "ének 1 versszakkal")
               + Diasor_Cim.diakeszites_gomb("urvacsora_urvacsora_cim", "ÚRVACSORA")
               + Diasor_Cim.diakeszites_gomb("urvacsora_halaado_ima_cim", "NAGY, HÁLAADÓ IMÁDSÁG")
               // + hálaadás szöveg
               + Diasor_Cim.diakeszites_gomb("urvacsora_miatyank_cim", "MIATYÁNK")
               // + Mi Atyánk szöveg
               + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_2", "dicseret_majdnem_vegig", "közbülső ének (utolsó előtti versszakig)")
               + Diasor_Cim.diakeszites_gomb("urvacsora_urvacsorai_kozosseg_cim", "ÚRVACSORAI<br>KÖZÖSSÉG")
               // + úrvacsorai közösség szöveg
               ;
        return(t1 + t3);
    },
}