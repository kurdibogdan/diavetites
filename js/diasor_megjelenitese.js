var diasor = [];
var DIA_MERET = new function()
{
    this.szelesseg         = 100;  // px
    this.magassag          = 92;   // px
    this.obj_szelesseg     = 96;   // px
    this.obj_magassag      = 63;   // px
    this.obj_margo_fent    = 14.5; // px
    this.obj_margo_balra   = 2.5;  // px
    this.skalazas          = 10;   // pt/px
    this.beepitett_meretek = 
    {
        100 : {kiskep_merete: 12},
        150 : {kiskep_merete: 18},
        200 : {kiskep_merete: 26},
        300 : {kiskep_merete: 32},
        500 : {kiskep_merete: 40},
    };
    
    this.diameretek_beallitasa = function(dia_merete)
    {
        this.szelesseg       = dia_merete;                    // 500px
        this.magassag        = this.szelesseg * 0.92;          // 460px
        this.obj_szelesseg   = this.szelesseg * 0.9485         // egyenes illesztése ezekre a pontokra: (0, 0), (100, 96), (500, 474)
        this.obj_magassag    = this.obj_szelesseg * 63.2/95;
        this.obj_margo_fent  = this.obj_magassag * 14.5/63;
        this.obj_margo_balra = this.obj_szelesseg * 2.5/95;
        this.skalazas        = 1000 / this.szelesseg;
        
        // console.log("Dia mérete              = " + this.merete);
        // console.log("Dia szélessége          = " + this.szelesseg);
        // console.log("Dia magassága           = " + this.magassag);
        // console.log("Dia objektum szélessége = " + this.obj_szelesseg);
        // console.log("Dia objektum magassága  = " + this.obj_magassag);
        
        $(".diameret_kijelolve").removeClass("diameret_kijelolve");
        $("#diameret_" + dia_merete).addClass("diameret_kijelolve");
        diasor_megjelenitese();
    };
    this.gombok_megjelenitese = function()
    {
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in Object.keys(this.beepitett_meretek))
        {
            var kulcs         = Object.keys(this.beepitett_meretek)[i];
            var kiskep_merete = this.beepitett_meretek[kulcs].kiskep_merete;
            t += "<td>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"DIA_MERET.diameretek_beallitasa('" + kulcs + "');\">"
               + "  <img src='kepek/doboz.png' style='height:" + kiskep_merete + "px; width:" + kiskep_merete + "px;'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        
        $("#dia_meretvalasztas").html(t);
    };
    
    this.diameretek_beallitasa(200);
};

var STILUS = new function()
{
    this.betuszin;
    this.hatterszin;
    this.beepitett_stilusok =
    {
        "lila"   : {"betuszin": "#ffffff", "hatterszin": "#640064"}, // [100,   0, 100];    // "#a754ac"}, // [167,  84, 172];
        "feher"  : {"betuszin": "#000000", "hatterszin": "#ffffff"}, // [255, 255, 255];
        "zold"   : {"betuszin": "#ffffff", "hatterszin": "#004511"}, // [  0,  69,  17];    // "#3b8d4f"}, // [ 59, 141,  79];
        "piros"  : {"betuszin": "#ffffff", "hatterszin": "#940200"}, // [148,   2,   0];    // "#db0a05"}, // [219,  10,   5];
        "fekete" : {"betuszin": "#ffffff", "hatterszin": "#000000"}, // [  0,   0,   0];
    };
    this.beepitett_stilus_valasztasa = function(beepitett_stilus)
    {
        this.betuszin   = this.beepitett_stilusok[beepitett_stilus].betuszin;
        this.hatterszin = this.beepitett_stilusok[beepitett_stilus].hatterszin;
        diasor_megjelenitese();
    };
    this.gombok_megjelenitese = function()
    {
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in Object.keys(this.beepitett_stilusok))
        {
            var kulcs = Object.keys(this.beepitett_stilusok)[i];
            t += "<td>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"STILUS.beepitett_stilus_valasztasa('" + kulcs + "');\""
               + "      style='background-color:" + this.beepitett_stilusok[kulcs].hatterszin + ";'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        
        $("#dia_stilusvalasztas").html(t);
    };
    
    this.beepitett_stilus_valasztasa("zold");
};

var DIA_VEZERLES = new function()
{
    this.gombok =
    [
        {"kiskep" : "kepek/kuka.png",            "parancs" : "kijelolt_diak_torlese()"},
        {"kiskep" : "kepek/mozgatas_balra.png",  "parancs" : "kijelolt_dia_mozgatasa_balra()"},
        {"kiskep" : "kepek/mozgatas_jobbra.png", "parancs" : "kijelolt_dia_mozgatasa_jobbra()"},
        {"kiskep" : "kepek/powerpoint.png",      "parancs" : "ppt_keszitese()"},
    ];
    
    this.gombok_megjelenitese = function()
    {
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in this.gombok)
        {
            var gomb = this.gombok[i];
            t += "<td>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"" + gomb.parancs + ";\">"
               + "  <img src='" + gomb.kiskep + "'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        
        $("#dia_vezerles").html(t);
    };
};
 
var BETUBEALLITASOK = new function()
{   
    this.gombok = 
    [
        "nagybetus",
        "betutipus",   // legördülő lista: Arial Black 25pt, Calibri 44pt
        "korvonal",    // 2pt széles, szín kiválasztható (háttérhez igazodik)
        "betuszin",    // fehér, fekete
    ];
    
    this.nagybetus_beallitasa = true;
    
    this.igazitasok =
    {
        "x": ["balra", "kozepre", "jobbra"],
        "y": ["fent", "kozepre", "lent"],
        "kivalasztva" : {"x": "kozepre", "y": "kozepre"}
    };
    
    this.gombok_megjelenitese = function()
    {
        // Kisbetűs, nagybetűs váltás:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>"
              + "  <td>"
              + "   <div class='vezerlo_gomb " + (this.nagybetus_beallitasa ? "" : "vezerlo_gomb_kivalasztva") + "' "
              + "        onclick=\"BETUBEALLITASOK.nagybetusse_alakitas(false);\">"
              + "    <img id='kis_nagybetus_beallitas' src='kepek/kisbetus.png'>"
              + "   </div>"
              + "  </td>"
              + "  <td>"
              + "   <div class='vezerlo_gomb " + (this.nagybetus_beallitasa ? "vezerlo_gomb_kivalasztva" : "") + "' "
              + "        onclick=\"BETUBEALLITASOK.nagybetusse_alakitas(true);\">"
              + "    <img id='kis_nagybetus_beallitas' src='kepek/nagybetus.png'>"
              + "   </div>"
              + "  </td>"
              + " </tr>"
              + "</table>";
        $("#dia_kis_nagybetu_valtas").html(t);
        
        // Vízszintes igazítás:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var x_index in this.igazitasok.x)
        {
            var x = this.igazitasok.x[x_index];
            var kivalasztva = (x == this.igazitasok.kivalasztva.x);
            t += "<td>"
               + " <div class='vezerlo_gomb " + (kivalasztva ? "vezerlo_gomb_kivalasztva" : "") + "' "
               + "      onclick=\"BETUBEALLITASOK.vizszintes_igazitas_kivalasztasa('" + x + "');\">"
               + "  <img src='kepek/vizszintes_igazitas_" + x + ".png'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        $("#dia_vizszintes_igazitas").html(t);
        
        // Függőleges igazítás:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var y_index in this.igazitasok.y)
        {
            var y = this.igazitasok.y[y_index];
            var kivalasztva = (y == this.igazitasok.kivalasztva.y);
            t += "<td>"
               + " <div class='vezerlo_gomb " + (kivalasztva ? "vezerlo_gomb_kivalasztva" : "") + "' "
               + "      onclick=\"BETUBEALLITASOK.fuggoleges_igazitas_kivalasztasa('" + y + "');\">"
               + "  <img src='kepek/fuggoleges_igazitas_" + y + ".png'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        $("#dia_fuggoleges_igazitas").html(t);
    };
    
    this.vizszintes_igazitas_kivalasztasa = function(x)
    {
        // gomb kiválasztása:
        this.igazitasok.kivalasztva.x = x;
        this.gombok_megjelenitese();
        
        // kiválasztott diákra alkalmazás:
        for(var i = 0; i < diasor.length; i++)
        {
            if (diasor[i].kijelolve == true)
            {
                diaobjektumok_vizszintes_igazitasa(i, x);
            }
        }
        
        diasor_megjelenitese();
    };
    
    this.fuggoleges_igazitas_kivalasztasa = function(y)
    {
        // gomb kiválasztása:
        this.igazitasok.kivalasztva.y = y;
        this.gombok_megjelenitese();
        
        // kiválasztott diákra alkalmazás:
        for(var i = 0; i < diasor.length; i++)
        {
            if (diasor[i].kijelolve == true)
            {
                diaobjektumok_fuggoleges_igazitasa(i, y);
            }
        }
        
        diasor_megjelenitese();
    };
    
    this.nagybetusse_alakitas = function(nagybetus)
    {
        // gomb kiválasztása:
        this.nagybetus_beallitasa = nagybetus;
        this.gombok_megjelenitese();
        
        // kiválasztott diákra alkalmazás:
        for(var i = 0; i < diasor.length; i++)
        {
            if (diasor[i].kijelolve == true)
            {
                diaszovegek_kis_nagybetus_valtasa(i, nagybetus);
            }
        }
        
        diasor_megjelenitese();
    };
};

function diasor_megjelenitese()
{
    var t = "";
    
    // t += "<div class='kurzorhely_kerete'><div class='kurzorhely'></div></div>";
    
    for(var i=0, n=diasor.length; i<n; i++)
    {
        var dia = diasor[i];
        
        t += "<div class='dia noselect " + (dia.kijelolve == true ? " dia_kijelolve " : "") +  "' "
           + "     onclick=\"dia_kijelolese(event, '" + i + "');\" "
           + "     style='width  : " + DIA_MERET.szelesseg + "px;"
           + "            height : " + DIA_MERET.magassag  + "px;"
           + "            color  : " + STILUS.betuszin + ";"
           + "           '>";
        
        // Háttérszín:
        t += "<div class='dia_obj'"
           + "     style='width            : " + DIA_MERET.obj_szelesseg + "px;"
           + "            height           : " + DIA_MERET.obj_magassag  + "px;"
           + "            margin-top       : " + DIA_MERET.obj_margo_fent  + "px;"
           + "            margin-left      : " + DIA_MERET.obj_margo_balra  + "px;"
           + "            background-color : " + STILUS.hatterszin + ";'></div>";
        
        for(var j=0, o=dia.objektumok.length; j<o; j++)
        {
            var obj = dia.objektumok[j];
            
            t += "<div class='dia_obj'"
               + "     style='width            : " + DIA_MERET.obj_szelesseg + "px;"
               + "            height           : " + DIA_MERET.obj_magassag  + "px;"
               + "            margin-top       : " + DIA_MERET.obj_margo_fent  + "px;"
               + "            margin-left      : " + DIA_MERET.obj_margo_balra  + "px;"
               + "           '>";
            switch(obj.tipus)
            {
                case "hatterszin":
                    t += "<div style='width:100%; height:100%; background-color:" + obj.szin + ";'></div>";
                    break;
                case "kep":
                    var szazalekos_szelesseg = obj.szelesseg / DIA_MERET.obj_szelesseg;
                    var szazalekos_magassag  = obj.magassag / DIA_MERET.obj_magassag;
                    if (szazalekos_magassag > szazalekos_szelesseg)
                    {
                        szazalekos_szelesseg = szazalekos_szelesseg / szazalekos_magassag * 100;
                        szazalekos_magassag  = 100;
                        szazalekos_x         = (100 - szazalekos_szelesseg) / 2;
                        szazalekos_y         = 0;
                    }
                    else
                    {
                        szazalekos_magassag  = szazalekos_magassag / szazalekos_szelesseg * 100;
                        szazalekos_szelesseg = 100;
                        szazalekos_x         = 0;
                        szazalekos_y         = (100 - szazalekos_magassag) / 2;
                    }
               
                    t += "<img src='" + obj.kep + "' "
                       + "     style='position : absolute;"
                       + "            top      : " + szazalekos_y         + "%;"
                       + "            left     : " + szazalekos_x         + "%;"
                       + "            width    : " + szazalekos_szelesseg + "%;"
                       + "            height   : " + szazalekos_magassag  + "%;"
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
                        t += "<div style='font-size      : " + sz.betumeret/DIA_MERET.skalazas + "pt;"
                           + "            font-weight    : " + (sz.felkover  == true ? "bold"       : "normal")  + ";"
                           + "            font-style     : " + (sz.dolt      == true ? "italic"     : "normal")  + ";"
                           + "            font-family    : " + (sz.betutipus != null ? sz.betutipus : "Sylfaen") + ";"
                           + "            text-transform : " + (sz.nagybetus == true ? "uppercase"  : "none")    + ";"
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
