var Diasor_Focim =
{
    datum_bevitel      : "focim_datum",
    datum_elokeszitese : function()
    {
        // Vasárnap beállítása alap dátumnak:
        var vasarnap = new Date();
        if (vasarnap.getDay() > 0) vasarnap.setDate(vasarnap.getDate() - vasarnap.getDay() + 7);
        document.getElementById(this.datum_bevitel).valueAsDate = vasarnap;
    },
    uj_diasor : function(gomb_id)
    {
        var datum         = $("#" + this.datum_bevitel).val();
        var ev            = parseInt(datum.substr(0, 4));
        var honap         = parseInt(datum.substr(5, 2));
        var nap           = parseInt(datum.substr(8, 2));
        var honapok_nevei = ["január", "február", "március", "április", "május", "június", 
                             "július", "augusztus", "szeptember", "október", "november", "december"];
        
        datum = ev + ". "
              + honapok_nevei[honap - 1] + " "
              + nap + ".";
        
        var diak = 
        [
            {   // 1 dia objektumokkal
                kijelolve  : false,
                csoport    : "",
                objektumok : 
                [
                    {   // 1 objektum
                        "tipus"      : "szovegdoboz",
                        "poz_x"      : 0,           // %
                        "poz_y"      : 0,           // %
                        "szelesseg"  : 100,         // %
                        "magassag"   : 100,         // %
                        "igazitas_x" : "kozepre",
                        "igazitas_y" : "kozepre",
                        "szovegek"   :
                        [
                            {
                                "szoveg"    : "ISTENTISZTELET",
                                "betumeret" : 44,       // pt
                                "betutipus" : "Gill Sans MT",
                            },
                            {
                                "szoveg"    : datum,
                                "betumeret" : 32,       // pt
                                "betutipus" : "Gill Sans MT",
                            }
                        ]
                    }
                ]
            }
        ];
        
        if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
        {
            diak = [];
        }
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td><input id='cimoldal_szoveg' type='text' value='ISTENTISZTELET'><br>\n"
              + "     <input id='" + this.datum_bevitel + "' type='date'></td>\n"
              + " <td><button onclick=\"diasor_bovitese(Diasor_Focim.uj_diasor('" + gomb_id + "'));\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
