var Diasor_Urvacsora_Titok =
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
                                "szoveg"    : "... miközben a hit titkát hirdetjük.",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial"
                            },
                            {
                                "szoveg"    : "",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial"
                            },
                            {
                                "szoveg"    : "    Krisztus meghalt,",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "    Krisztus feltámadt,",
                                "betumeret" : 28,      // pt
                                "betutipus" : "Arial Black",
                            },
                            {
                                "szoveg"    : "    Krisztus újra eljön.",
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
                                "szoveg"    : "",
                                "betumeret" : 28,      // pt
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
              + "  <td width='230'>A hit titka</td>\n"
              + "  <td><button onclick=\"Diasor_Urvacsora_Titok.uj_diasor('" + gomb_id + "', diasor_bovitese);\">&rarr;</button></td>\n"
              + " </tr>\n"
              + " <tr>\n"
              ;
        return(t);
    },
};