var dia_szelesseg       = 100;  // px
var dia_magassag        = 92;   // px
var dia_obj_szelesseg   = 96;   // px
var dia_obj_magassag    = 63;   // px
var dia_obj_margo_fent  = 14.5; // px
var dia_obj_margo_balra = 2.5;  // px
var dia_skalazasa       = 10;   // pt/px

function diameretek_beallitasa(dia_merete)
{
    dia_szelesseg       = dia_merete;                       // 500px
    dia_magassag        = dia_szelesseg * 0.92;             // 460px
    dia_obj_szelesseg   = dia_szelesseg * 0.9485            // egyenes illesztése ezekre a pontokra: (0, 0), (100, 96), (500, 474)
    dia_obj_magassag    = dia_obj_szelesseg * 63.2/95;
    dia_obj_margo_fent  = dia_obj_magassag * 14.5/63;
    dia_obj_margo_balra = dia_obj_szelesseg * 2.5/95;
    dia_skalazasa       = 1000 / dia_szelesseg;
    
    // console.log("Dia mérete              = " + dia_merete);
    // console.log("Dia szélessége          = " + dia_szelesseg);
    // console.log("Dia magassága           = " + dia_magassag);
    // console.log("Dia objektum szélessége = " + dia_obj_szelesseg);
    // console.log("Dia objektum magassága  = " + dia_obj_magassag);
    
    $(".diameret_kijelolve").removeClass("diameret_kijelolve");
    $("#diameret_" + dia_merete).addClass("diameret_kijelolve");
    diasor_megjelenitese();
}

function diasor_megjelenitese()
{
    var t = "";
    
    // t += "<div class='kurzorhely_kerete'><div class='kurzorhely'></div></div>";
    
    for(var i=0, n=diasor.length; i<n; i++)
    {
        var dia = diasor[i];
        
        t += "<div class='dia noselect " + (dia.kijelolve == true ? " dia_kijelolve " : "") +  "' "
           + "     onclick=\"dia_kijelolese(event, '" + i + "');\" "
           + "     style='width  : " + dia_szelesseg + "px;"
           + "            height : " + dia_magassag  + "px;"
           + "            color  : " + STILUS.betuszin + ";"
           + "           '>";
        
        // Háttérszín:
        t += "<div class='dia_obj'"
           + "     style='width            : " + dia_obj_szelesseg + "px;"
           + "            height           : " + dia_obj_magassag  + "px;"
           + "            margin-top       : " + dia_obj_margo_fent  + "px;"
           + "            margin-left      : " + dia_obj_margo_balra  + "px;"
           + "            background-color : " + STILUS.hatterszin + ";'></div>";
        
        for(var j=0, o=dia.objektumok.length; j<o; j++)
        {
            var obj = dia.objektumok[j];
            
            t += "<div class='dia_obj'"
               + "     style='width            : " + dia_obj_szelesseg + "px;"
               + "            height           : " + dia_obj_magassag  + "px;"
               + "            margin-top       : " + dia_obj_margo_fent  + "px;"
               + "            margin-left      : " + dia_obj_margo_balra  + "px;"
               + "           '>";
            switch(obj.tipus)
            {
                case "kep":
                    t += "<img src='" + obj.kep + "' "
                       + "     style='position : absolute;"
                       + "            top      : " + obj.poz_y     + "%;"
                       + "            left     : " + obj.poz_x     + "%;"
                       + "            width    : " + obj.szelesseg + "%;"
                       + "            height   : " + obj.magassag  + "%;"
                       + "           '>"
                    break;
                case "szovegdoboz":
                    t += "<table style='width          : 100%;"
                       + "              height         : 100%;"
                       + "              position       : absolute;"
                       + "              top            : " + obj.poz_y     + "%;"
                       + "              left           : " + obj.poz_x     + "%;"
                       + "              width          : " + obj.szelesseg + "%;"
                       + "              height         : " + obj.magassag  + "%;"
                       + "           '>"
                       + " <tr valign='" + (obj.igazitas_y == "fent" 
                                         ? "top"
                                         :  obj.igazitas_y == "kozepre" ? "middle"
                                         :  obj.igazitas_y == "lent" ? "bottom"
                                         : "initial")
                                         + "'>"
                       + "   <td style='text-align: " + (obj.igazitas_x == "balra" ? "left" 
                                                      :  obj.igazitas_x == "jobbra" ? "right"
                                                      :  obj.igazitas_x == "kozepre" ? "center"
                                                      :  "initial")
                                                      + ";'>"
                    for(var k=0, p=obj.szovegek.length; k<p; k++)
                    {
                        var sz = obj.szovegek[k];
                        t += "<div style='font-size   : " + sz.betumeret/dia_skalazasa + "pt;"
                           + "            font-weight : " + (sz.felkover  == true ? "bold"       : "normal") + ";"
                           + "            font-style  : " + (sz.dolt      == true ? "italic"     : "normal") + ";"
                           + "            font-family : " + (sz.betutipus != null ? sz.betutipus : "Sylfaen") + ";"
                           + "           '>"
                           + sz.szoveg
                           + "</div>";
                    }
                    t += "  </td>"
                       + " </tr>"
                       + "</table>";
                    break;
                case "ures":
                    break;
                default:
                    console.log("ilyen típusú objektum még nem volt: " + obj.tipus);
                    break;
            }
            t += "</div>";
        }
        t += "</div>";
        // t += "<div class='kurzorhely_kerete'><div class='kurzorhely'></div></div>";
    }
    t += "</table>";
    $("#diasor").html(t);
}
