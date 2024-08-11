var Diasor_Urvacsora_Halaadas =
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
                        "szelesseg"  : 92,          // % (100% - 2 cm)
                        "magassag"   : 74,          // % (100% - 2 cm)
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
                        "szelesseg"  : 92,          // % (100% - 2 cm)
                        "magassag"   : 74,          // % (100% - 2 cm)
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
                        "szelesseg"  : 92,          // % (100% - 2 cm)
                        "magassag"   : 74,          // % (100% - 2 cm)
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
              + "  <td width='230'>Hálaadás</td>\n"
              + "  <td><button onclick=\"Diasor_Urvacsora_Halaadas.uj_diasor('" + gomb_id + "', diasor_bovitese);\">&rarr;</button></td>\n"
              + " </tr>\n"
              + " <tr>\n"
              ;
        return(t);
    },
};