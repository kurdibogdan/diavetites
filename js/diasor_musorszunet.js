var Diasor_Musorszunet =
{
    uj_diasor : function()
    {
        var diak =
        [
            {   // 1 dia objektumokkal
                kijelolve  : false,
                csoport    : "",
                objektumok :
                [
                    {   // 1 objektum
                        "tipus"     : "kep",
                        "kep"       : "kepek/musorszunet.png",
                        "poz_x"     : 0,            // %
                        "poz_y"     : 0,            // %
                        "szelesseg" : 100,          // %
                        "magassag"  : 100           // %
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
              + " <td>műsorszünet címlap</td>\n"
              + " <td><button onclick=\"diasor_bovitese(Diasor_Musorszunet.uj_diasor());\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
