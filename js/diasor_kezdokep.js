var Diasor_Kezdokep =
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
                        "tipus" : "hatterszin",
                        "szin"  : "#ffffff",
                    },
                    {
                        "tipus"     : "kep",
                        "kep"       : "kepek/kezdokep.png",
                        "poz_x"     : 0,    // px
                        "poz_y"     : 0,    // px
                        "szelesseg" : 1040, // px
                        "magassag"  : 902   // px
                    }
                ]
            }
        ];
        
        return(diak);
    },
    
    diakeszites_gomb : function(gomb_id)
    {
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox' checked='checked'><span class='slider round'></span></label></td>\n"
              + " <td>Kezdőkép (amit Julcsi rajzolt)</td>\n"
              + " <td><button onclick=\"diasor_bovitese(Diasor_Kezdokep.uj_diasor());\">&rarr;</button></td>\n"
              + "</tr>\n";
        return(t);
    },
};
