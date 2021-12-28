var Diasor_Urvacsora_Parbeszed =
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
                                "szoveg"    : "Az Úr legyen veletek!",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial",
                            },
                            {
                                "szoveg"    : "    És a te lelkeddel!",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "Emeljük fel szívünket!",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial",
                            },
                            {
                                "szoveg"    : "    Fölemeljük az Úrhoz!",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "Adjunk hálát az Úrnak, a mi Istenünknek!",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial",
                            },
                            {
                                "szoveg"    : "    Méltó ez és igaz!",
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
                        "igazitas_y" : "fent",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "... és ujjongó énekkel hirdetjük szent neved dicsőségét:",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial",
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
              + "  <td width='230'>Párbeszéd a lelkész és a gyülekezet között</td>\n"
              + "  <td><button onclick=\"Diasor_Urvacsora_Parbeszed.uj_diasor('" + gomb_id + "', diasor_bovitese);\">&rarr;</button></td>\n"
              + " </tr>\n"
              + " <tr>\n"
              ;
        return(t);
    },
};