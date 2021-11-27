var Diasor_Urvacsora =
{
    uj_diasor : function(gomb_id)
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
                                "betutipus" : "Calibri Light",
                                "felkover"  : true
                            },
                            {
                                "szoveg"    : "A mi Urunk Jézus Krisztus így szól: Jöjjetek énhozzám mindnyájan, akik "
                                            + "megfáradtatok és meg vagytok terhelve, és én megnyugvást adok nektek. (Mt 11,28) "
                                            + "Tőle kaptuk ezt az ígéretet, és most asztalához hív bennünket. Előbb azonban "
                                            + "valljuk meg bűneinket a szent Isten előtt.",
                                "betumeret" : 32,       // pt
                                "betutipus" : "Calibri Light",
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
                                "betutipus" : "Calibri Light",
                                "felkover"  : true,
                                "dolt"      : true
                            },
                            {
                                "szoveg"    : "Mi Urunk és Istenünk, mindenek teremtője. Életünk és gyülekezetünk élete "
                                            + "nincs elrejtve előtted. Megvalljuk, hogy vétkeztünk ellened gondolatban, "
                                            + "szóval és cselekedettel. Megvalljuk, hogy sokszor nem figyeltünk szeretetedre, "
                                            + "és parancsolataidra, és teret engedtünk a szeretetlenségnek.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
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
                                "szoveg"    : "Te erővel akartál felruházni bennünket mindennapi szolgálatunkban, mi azonban "
                                            + "elzárkóztunk előled. Sok mindent fontosnak tartottunk, de küldetésed számára "
                                            + "nem volt elég időnk. Sokszor azt tettük, ami tetszésünkre volt, és közben "
                                            + "elfeledkeztünk rólad és felebarátainkról.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
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
                                "szoveg"    : "Te elküldtél bennünket, hogy üdvösségednek bizonyságai legyünk, mi azonban "
                                            + "sokszor adósok maradtunk a bizonyságtétellel. Fájlaljuk kudarcainkat, és "
                                            + "kérünk, Urunk, könyörülj rajtunk, és bocsáss meg nekünk! Újíts meg bennünket "
                                            + "Szentlelked által! Segíts, hogy Jézus Krisztus követeiként szolgáljunk "
                                            + "felebarátainknak, és dicsőségedre élhessünk! Ámen.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
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
                                "szoveg"    : "Bűnvallásunkat és kéréseinket vigyük csendes imádságban Isten elé!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Csendes imádság",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
                            },
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
                                "szoveg"    : "L: Halljátok Isten ígéretét: Ha megvalljuk bűneinket, hű és igaz Ő: "
                                            + "megbocsátja bűneinket, és megtisztít minket minden gonoszságtól. (1Jn 1,9) "
                                            + "Igaz az a beszéd, és teljes elfogadásra méltó, hogy Krisztus Jézus azért "
                                            + "jött el a világba, hogy a bűnösöket üdvözítse! (1Tim 1.15) Ha pedig vélkezik "
                                            + "valaki, van pártfogónk az Atyánál: az igaz Jézus Krisztus, mert ő engesztelő "
                                            + "áldozat a mi bűneinkért; de nem csak a mienkért, hanem az egész világ bűnéért is. ",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                        ]
                    }
                ]
            },
        ];
        
            // 47. ének 1. vsz
        
        diak.concat(
        [
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
                                "szoveg"    : "L: Adjunk hálát Istennek a zsoltár szavaival:",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Áldjad, lelkem, az Urat és egész bensőm az ő szent nevét!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Gy: Áldjad, lelkem, az Urat, és el ne feledd , mennyi jót tett veled!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
                            },
                            {
                                "szoveg"    : "L: Ő megbocsátja minden bűnödet, meggyógyítja minden betegségedet.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Gy: Megváltja életedet a sírtól, szeretettel és irgalommal koronáz meg.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
                            },
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
                                "szoveg"    : "L: Irgalmas és kegyelmes az Úr, türelme hosszú, szeretete nagy.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Gy: Nem vétkeink szerint bánik velünk, nem bűneink szerint fizet nekünk.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
                            },
                            {
                                "szoveg"    : "L: Mert amilyen magasan van az ég a föld fölött, olyan nagy a szeretete "
                                            + "az istenfélők iránt.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Gy: Áldjad, lelkem, az Urat!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "dolt"      : true
                            },
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
                                "szoveg"    : "Urunk! Hallgass meg bennünket, amikor együtt imádkozunk!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                        ]
                    }
                ]
            },
        ]);
        
            // 502. ének 1-3. vsz
            
        diak.concat(
        [
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
                                "szoveg"    : "Lelkész:",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                                "felkover"  : true
                            },
                            {
                                "szoveg"    : "Imádkozzunk!",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
                            {
                                "szoveg"    : "Úr Jézus Krisztus, e szent jegyek által bizonyossá tettél bennünket a veled "
                                            + "és az egymással való közösségben. Hálát adunk neked, és magasztalunk téged. "
                                            + "Megerősítettél bennünket a további szolgálatra. Segíts szolgálnunk mindazokkal "
                                            + "az ajándékokkal, amiket tőled kaptunk.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light",
                            },
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
                                "szoveg"    : "Te vagy múltunknak, jelenünknek és jövőnknek is Ura. Bízunk benned, "
                                            + "bárhová vezess is bennünket. Erősíts meg minket a te országod "
                                            + "eljövetelének reményében. Ámen.",
                                "betumeret" : 32,      // pt
                                "betutipus" : "Calibri Light"
                            }
                        ]
                    }
                ]
            },
        ]);
        
            // 517. ének (Ámen)
        
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
        var t = " <tr>\n"
              + "  <th><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' onchange=\"Diasor_Urvacsora.jelolo_valtasa('" + gomb_id + "');\"><span class='slider round'></span></label></th>\n"
              + "  <th width='230'>úrvacsorai liturgia</th>\n"
              + "  <th><button onclick=\"diasor_bovitese(Diasor_Urvacsora.uj_diasor('" + gomb_id + "'));\">&rarr;</button></th>\n"
              + " </tr>\n"
              + " <tr>\n"
              // + Diasor_Cim.diakeszites_gomb("urvacsora_bunvallas_cim", "BŰNVALLÁS<br>-<br>FELOLDOZÁS")
              // + bűnvallás szöveg
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_1", "dicseret_1_vsz", "ének 1 versszakkal")
              // + Diasor_Cim.diakeszites_gomb("urvacsora_urvacsora_cim", "ÚRVACSORA")
              // + Diasor_Cim.diakeszites_gomb("urvacsora_halaado_ima_cim", "NAGY, HÁLAADÓ IMÁDSÁG")
              // + hálaadás szöveg
              // + Diasor_Cim.diakeszites_gomb("urvacsora_miatyank_cim", "MIATYÁNK")
              // + Mi Atyánk szöveg
              + Diasor_Dalszoveg.diakeszites_gomb("urvacsora_enek_2", "dicseret_majdnem_vegig", "közbülső ének (utolsó előtti versszakig)")
              // + Diasor_Cim.diakeszites_gomb("urvacsora_urvacsorai_kozosseg_cim", "ÚRVACSORAI<br>KÖZÖSSÉG")
              // + úrvacsorai közösség szöveg
              ;
        return(t);
    },
}