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
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = " <tr>\n"
              + "  <th><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></th>\n"
              + "  <th width='230'>úrvacsorai liturgia</th>\n"
              + "  <th><button onclick=\"diasor_bovitese(Diasor_Urvacsora.uj_diasor('" + gomb_id + "'));\">&rarr;</button></th>\n"
              + " </tr>\n"
              + " <tr>\n"
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
        return(t);
    },
}