var Diasor_Urvacsora_Befejezes =
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
              + "  <td width='230'>Befejezés</td>\n"
              + "  <td><button onclick=\"Diasor_Urvacsora_Befejezes.uj_diasor('" + gomb_id + "', diasor_bovitese);\">&rarr;</button></td>\n"
              + " </tr>\n"
              + " <tr>\n"
              ;
        return(t);
    },
};