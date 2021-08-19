var Diasor_Dalszoveg =
{
    uj_diasor : function(kivalasztott_enek)
    {
        var dalszoveg      = dalszovegek[kivalasztott_enek].szoveg;
        var diak = [];
        
        diak.push(
        { 
            kijelolve  : false,
            csoport    : "",
            objektumok : []
        });
        
        for(var i=0, n=dalszoveg.length; i<n; i++)
        {
            var szovegdoboz =
            {
                "tipus"      : "szovegdoboz",
                "poz_x"      : 4,           // % (~ 1 cm)
                "poz_y"      : 8,           // % (~ 1 cm)
                "szelesseg"  : 92,          // % (100% - 1 cm)
                "magassag"   : 84,          // % (100% - 1 cm)
                "igazitas_x" : "balra",
                "igazitas_y" : "fent",
                "szovegek"   :
                [
                    {
                        "szoveg"    : dalszoveg[i].join("<br>"),
                        "betumeret" : 32,   // pt
                        "betutipus" : "Sylfaen"
                    },
                ]
            };
            
            var dia =
            {
                kijelolve  : false,
                csoport    : "",
                objektumok : [szovegdoboz]
            };
            diak.push(dia);
        }
        
        diak.push(
        { 
            kijelolve  : false,
            csoport    : "",
            objektumok : []
        });
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id, tipus, cim) // tipus = "ifienek", "dicseret", cim = "ifiének", "dicséret"
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + "<br><select id='enek_valasztasa_" + gomb_id + "' class='" + tipus + "_valasztasa'></select></td>\n"
              + " <td><button onclick=\"dia_keszitese_dalszoveg('enek_valasztasa_" + gomb_id + "');\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
}
