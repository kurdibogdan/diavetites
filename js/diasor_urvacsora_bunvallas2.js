var Diasor_Urvacsora_Bunvallas2 =
{
    uj_diasor : function(gomb_id, callback)
    {
        var diak =
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
                        "igazitas_y" : "kozepen",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Kegyelmes Isten, megvalljuk, hogy nem szerettünk téged teljes szívünkből, "
                                            + "egyházadként kudarcot vallottunk az engedelmességben.",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black"
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
                        "igazitas_y" : "kozepen",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Nem cselekedtük a te akaratodat, megszegtük törvényedet, lázadtunk "
                                            + "szereteted ellen, nem szerettük felebarátainkat, és nem hallottuk meg "
                                            + "a szükségben lévők kiáltását.",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
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
                        "igazitas_y" : "kozepen",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Kérünk, bocsáss meg nekünk. Szabadíts fel örömteli engedelmességre, "
                                            + "Jézus Krisztus, a mi Urunk által.",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "Ámen.",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                        ]
                    }
                ]
            },
            {
                kijelolve  : false,
                csoport    : "",
                objektumok : [],
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
                        "igazitas_y" : "kozepen",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "Jézus Krisztus nevében: ",
                                "betumeret" : 28,
                                "betutipus" : "Arial",
                            },
                            {
                                "szoveg"    : "    bűneid megbocsátattak!",
                                "betumeret" : 28,
                                "betutipus" : "Arial",
                            },
                            {
                                "szoveg"    : ""
                            },
                            {
                                "szoveg"    : "    Jézus Krisztus nevében:",
                                "betumeret" : 28,
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "    bűneid megbocsátattak!",
                                "betumeret" : 28,
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : ""
                            },
                            {
                                "szoveg"    : "    Dicsőség Istennek. Ámen.",
                                "betumeret" : 28,
                                "betutipus" : "Arial Black",
                            },
                        ]
                    }
                ]
            },
        ];
        
        if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
        {
            diak = [];
        }
        if (typeof callback == "function") callback(diak);
        else return(diak);
    },
    
    diakeszites_gomb : function(gomb_id, rejtett)
    {
        var t = " <tr id='dia_keszitese_sor_"+gomb_id+"' style='display:" + (rejtett ? "none" : "") + ";'>\n"
              + "  <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + "  <td width='230'>Bűnvallás 2 (rövidebb verzió)</td>\n"
              + "  <td><button onclick=\"Diasor_Urvacsora_Bunvallas2.uj_diasor('" + gomb_id + "', diasor_bovitese);\">&rarr;</button></td>\n"
              + " </tr>\n"
              + " <tr>\n"
              ;
        return(t);
    },
};