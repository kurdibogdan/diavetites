const ALAP_BETUMERET = 28;
var diasor = [];
$(document).mouseup(function(e)
{
	var container = $("#dia_hattervalasztas");
	if (!container.is(e.target) && container.has(e.target).length === 0)
	{
	    HATTER.hattervalaszto_bezarasa();
	}
});

var REJTETT_GOMBOK = new function()
{
    var megjelenitve = false;
    this.valtas = function()
    {
        if (megjelenitve == true)
        {
            $(".rejtett_gombok").hide();
            megjelenitve = false;
        }
        else
        {
            $(".rejtett_gombok").css("display", "inline-block");
            megjelenitve = true;
        }
    }
    this.gombok_megjelenitese = function()
    {
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>"
              + "  <td>"
              + "   <div class='vezerlo_gomb' onclick='REJTETT_GOMBOK.valtas();'>"
              + "    <img src='kepek/rejtett_gombok.png'>"
              + "   </div>"
              + "  </td>"
              + " </tr>"
              + "</table>";
        $("#rejtett_gombok_megjelenitese").html(t);
    };
};

var DIA_MERET = new function()
{
    this.beepitett_keparanyok =
    {
        "szelesvaszon":
        {
            "teljes_nev" : "Széles vászon (16:9)",
            "rovid_nev"  : "16:9",
            "kep"        : "keparany_16_9.png",
            "ertek"      : 16/9
        },
        "normalvaszon":
        {
            "teljes_nev" : "Normál vászon (4:3)",
            "rovid_nev"  : "4:3",
            "kep"        : "keparany_4_3.png",
            "ertek"      : 4/3
        },
    };
    this.beepitett_meretek =
    {
        100 : {kiskep_merete: 12},
        150 : {kiskep_merete: 18},
        200 : {kiskep_merete: 26},
        300 : {kiskep_merete: 32},
        500 : {kiskep_merete: 40},
    };
    
    this.keparany  = "szelesvaszon";
    this.szelesseg = 100;  // px
    this.magassag  = this.szelesseg / this.beepitett_keparanyok[this.keparany].ertek;   // px
    this.skalazas  = 10;   // pt/px

    this.diameretek_beallitasa = function(dia_merete)
    {
        this.szelesseg = dia_merete;
        this.magassag  = this.szelesseg / this.beepitett_keparanyok[this.keparany].ertek;
        this.skalazas  = 1000 / this.szelesseg;
        this.gombok_megjelenitese();
        diasor_megjelenitese();
    };
    
    this.keparany_beallitasa = function(keparany)
    {
        this.keparany = keparany;
        this.diameretek_beallitasa(this.szelesseg);
    };
    
    this.gombok_megjelenitese = function()
    {
        // dia mérete megjelenítésben:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in Object.keys(this.beepitett_meretek))
        {
            var kulcs = Object.keys(this.beepitett_meretek)[i];
            var obj = this.beepitett_meretek[kulcs];
            t += "<td class='" + (this.szelesseg == kulcs ? "vezerlo_gomb_kivalasztva" : "") + "'>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"DIA_MERET.diameretek_beallitasa('" + kulcs + "');\">"
               + "  <img src='kepek/doboz.png' style='height:" + obj.kiskep_merete + "px; width:" + obj.kiskep_merete + "px;'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        $("#dia_meretvalasztas").html(t);
        
        // képarány (generálandó PPT-re is hatással van):
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in Object.keys(this.beepitett_keparanyok))
        {
            var kulcs = Object.keys(this.beepitett_keparanyok)[i];
            var obj = this.beepitett_keparanyok[kulcs];
            t += "<td class='" + (this.keparany == kulcs ? "vezerlo_gomb_kivalasztva" : "") + "'>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"DIA_MERET.keparany_beallitasa('" + kulcs + "');\">"
               + "  <img src='kepek/" + obj.kep + "'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        
        $("#dia_keparanyvalasztas").html(t);
    };
    
    $(document).ready(function()
    {
        DIA_MERET.diameretek_beallitasa(200);
    });
};

const BETUSZINEK =
{
    "fekete" : "#000000",
    "feher"  : "#ffffff",
};

const HATTERSZINEK =
{
    "lila"  : "#640064",    // "#a754ac"}, // [167,  84, 172];
    "feher" : "#ffffff",    // [255, 255, 255];
    "zold"  : "#004511",    // [  0,  69,  17];    // "#3b8d4f"}, // [ 59, 141,  79];
    "piros" : "#940200",    // [148,   2,   0];    // "#db0a05"}, // [219,  10,   5];
    "fekete" : "#000000",   // [  0,   0,   0];
};

var STILUS = new function()
{
    this.betuszin;
    this.hatterszin;
    this.beepitett_stilusok =
    {
        "lila"   : {"betuszin": BETUSZINEK.feher,  "hatterszin": HATTERSZINEK.lila},
        "feher"  : {"betuszin": BETUSZINEK.fekete, "hatterszin": HATTERSZINEK.feher},
        "zold"   : {"betuszin": BETUSZINEK.feher,  "hatterszin": HATTERSZINEK.zold},
        "piros"  : {"betuszin": BETUSZINEK.feher,  "hatterszin": HATTERSZINEK.piros},
        "fekete" : {"betuszin": BETUSZINEK.feher,  "hatterszin": HATTERSZINEK.fekete},
    };
    this.kivalasztott_stilus = "zold";
    this.naptar =
    [
        {"nap": new Date("2023-01-01"), "stilus": "feher" },  // karácsonyi ünnepkör
        {"nap": new Date("2023-01-15"), "stilus": "zold"  },  // vízkereszt utáni időszak
        {"nap": new Date("2023-03-05"), "stilus": "lila"  },  // böjt
        {"nap": new Date("2023-04-07"), "stilus": "fekete"},  // nagypéntek
        {"nap": new Date("2023-04-09"), "stilus": "feher" },  // húsvét
        {"nap": new Date("2023-05-28"), "stilus": "piros" },  // pünkösd
        {"nap": new Date("2023-06-04"), "stilus": "zold"  },  // pünkösd utáni időszak
        {"nap": new Date("2023-11-26"), "stilus": "lila"  },  // advent
        {"nap": new Date("2023-12-24"), "stilus": "feher" },  // karácsonyi ünnepkör
    ];
    
    this.stilus_valasztasa_naptar_szerint = function(datum)
    {
        var datum = new Date(datum);
        var stilus = "zold";
        for(var nap of this.naptar)
        {
            if (datum > nap.nap)
            {
                stilus = nap.stilus;
            }
        }
        this.beepitett_stilus_valasztasa(stilus);
    };
    
    this.beepitett_stilus_valasztasa = function(beepitett_stilus)
    {
        HATTER.hatter_kivalasztasa('semmi');
        this.kivalasztott_stilus = beepitett_stilus;
        this.betuszin = this.beepitett_stilusok[beepitett_stilus].betuszin;
        this.hatterszin = this.beepitett_stilusok[beepitett_stilus].hatterszin;
        this.gombok_megjelenitese();
        diasor_megjelenitese();
    };
    this.gombok_megjelenitese = function()
    {
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>";
        for(var i in Object.keys(this.beepitett_stilusok))
        {
            var kulcs = Object.keys(this.beepitett_stilusok)[i];
            t += "<td class='" 
               + (kulcs == this.kivalasztott_stilus ? "vezerlo_gomb_kivalasztva" : "")
               + "'>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"STILUS.beepitett_stilus_valasztasa('" + kulcs + "');\""
               + "      style='background-color:" + this.beepitett_stilusok[kulcs].hatterszin + ";'>"
               + " </div>"
               + "</td>";
        }
        t += "  <td class='kiskep_keret "
           +    (this.kivalasztott_stilus == "kép" ? "vezerlo_gomb_kivalasztva" : "")
           + "   '>"
           + "   <div id='hatterkep_valasztasa' class='vezerlo_gomb' onclick=\"STILUS.hatterkep_kivalasztasa();\">"
           + "    <div class='kiskep'>"
           + "     Kép"
           + "    </div>"
           + "   </div>"
           + "  </td>"
        t += " </tr>"
           + "</table>";
        
        $("#dia_stilusvalasztas").html(t);
    };
    
    this.hatterkep_kivalasztasa = function()
    {
        HATTER.meglevo_hatterkepek_megjelenitese();
        this.kivalasztott_stilus = "kép";
        this.gombok_megjelenitese();
    };
    
    $(document).ready(function()
    {
        STILUS.beepitett_stilus_valasztasa("zold");        
    });
};

var HATTER = new function()
{
    this.kivalasztott_hatterkep = "semmi";    
    this.meglevo_hatterkepek_megjelenitese = function(callback)
    {
        $("#dia_hattervalasztas").show();
        $.post("php/meglevo_hatterkepek.php", function(data)
        {
            const kepek = jQuery.parseJSON(data);
            var t = "<table class='diakeszites_tabla'>"
                  + " <tr>"
                  + "  <td>"
                  + "   <label for='hatter_feltoltese'>"
                  + "    <div class='vezerlo_gomb'>"
                  + "     <img src='kepek/hatter_feltoltese.png'>"
                  + "    </div>"
                  + "   </label>"
                  + "   <input id='hatter_feltoltese' "
                  + "          type='file' "
                  + "          accept='image/png, image/jpeg' "
               // + "          multiple "
                  + "          style='display:none;' "
                  + "          onchange='HATTER.uj_hatter_feltoltese(event);'>"
                  + "  </td>"
                  + "  <td id='kiskep_keret_semmi' class='kiskep_keret " + (HATTER.kivalasztott_hatterkep == "semmi" ? "vezerlo_gomb_kivalasztva" : "") + "'>"
                  + "   <div class='vezerlo_gomb' onclick=\"HATTER.hatter_kivalasztasa('semmi');\"></div>"
                  + "  </td>";
            
            for(var i = 0; i < kepek.length; i++)
            {
                if ((i + 1) % 5 == 4)
                {
                    t += "</tr><tr>";
                }
                var kep = kepek[i];
                t += "<td id='kiskep_keret_" + kep + "' class='kiskep_keret " + (kep == HATTER.kivalasztott_hatterkep ? "vezerlo_gomb_kivalasztva" : "") + "'>"
                   + " <div class='vezerlo_gomb_hatterrel'>"
                   + "  <div id='kiskep_" + kep + "' class='kiskep' "
                   + "       style='background-image: url(kepek/hatter/kiskep/" + kep + ");'"
                   + "       onclick=\"HATTER.hatter_kivalasztasa('" + kep + "');\""
                   + "       tabindex='" + i + "'"
                   + "       onkeydown=\"HATTER.hatterkep_torlese(event, '" + kep + "');\">"
                   + "  </div>"
                   + " </div>"
                   + "</td>";
            }
            
            if ((i + 1) % 5 == 4)
            {
                t += "</tr><tr>";
            }
            
            t += " </tr>"
               + "</table>";
           
            $("#dia_hattervalasztas").html(t);
            if (typeof callback == "function") callback();
        });
    };
    
    this.hatter_kivalasztasa = function(kep)
    {
        this.kivalasztott_hatterkep = kep;
        this.hattervalaszto_bezarasa();
        $(document.getElementById("kiskep_keret_" + kep)).addClass("vezerlo_gomb_kivalasztva");
        diasor_megjelenitese();
    };
    
    this.hattervalaszto_bezarasa = function()
    {
        $("#dia_hattervalasztas").hide();
    };
    
    this.hatterkep_torlese = function(e, kep)
    {
        if (e.keyCode == 46)
        {
            e.preventDefault();
            $.post("php/hatterkep_torlese.php", {kep: kep}, function()
            {
                HATTER.meglevo_hatterkepek_megjelenitese();
            });
        }
    };
    
    this.uj_hatter_feltoltese = function(e)
    {
        var fd = new FormData();
        var hatterkep = e.target.files[0];
        fd.append("hatterkep", hatterkep);
        $.ajax(
        {
            url: "php/hatterkep_feltoltese.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function(response)
            {
                if (response != 0)
                {
                    HATTER.meglevo_hatterkepek_megjelenitese();
                }
                else
                {
                    alert("Nem sikerült feltölteni a fájlt.");
                }
            },
        });
    };
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
    
    this.betutipusok =
    {
        "kiscelli":
        {
            "cim"        : "Kiscelli (Arial Black 25pt, nagybetűs, középre igazított, 13:9 szélesvászon)",
            "betutipus"  : "Arial Black",
            "betumeret"  : 25, // pt
            "felkover"   : false,
            "arnyekolt"  : false,
            "korvonal"   : false,
            "nagybetus"  : true,
            "igazitas_x" : "kozepre",
            "igazitas_y" : "kozepre",
            "margo_x"    : 0,
            "margo_y"    : 0,
            "keparany"   : "szelesvaszon"
        },
        "felsoerdosor": // TODO: árnyékolt, körvonalas
        {
            "cim"        : "Felsőerdősor (Calibri 44pt, kisbetűs, balrazárt, fent, 4:3 normál vászon)",
            "betutipus"  : "Calibri",
            "betumeret"  : 44, // pt  // TODO: generált PPT-ben is legyen
            "felkover"   : true,
            "arnyekolt"  : true,      // TODO: alkalmazni
            "korvonal"   : true,      // TODO: alkalmazni
            "nagybetus"  : false,
            "igazitas_x" : "balra",
            "igazitas_y" : "fent",
            "margo_x"    : 3,
            "margo_y"    : 3,
            "keparany"   : "normalvaszon"
        }
    };
    this.kivalasztott_betutipus = "kiscelli";
    
    this.gombok_megjelenitese = function()
    {
        // Kisbetűs, nagybetűs váltás:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>"
              + "  <td class='" + (this.nagybetus_beallitasa ? "" : "vezerlo_gomb_kivalasztva") + "'>"
              + "   <div class='vezerlo_gomb' "
              + "        onclick=\"BETUBEALLITASOK.nagybetusse_alakitas(false);\">"
              + "    <img id='kis_nagybetus_beallitas' src='kepek/kisbetus.png'>"
              + "   </div>"
              + "  </td>"
              + "  <td class='" + (this.nagybetus_beallitasa ? "vezerlo_gomb_kivalasztva" : "") + "'>"
              + "   <div class='vezerlo_gomb' "
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
            t += "<td class='" + (kivalasztva ? "vezerlo_gomb_kivalasztva" : "") + "'>"
               + " <div class='vezerlo_gomb' "
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
            t += "<td class='" + (kivalasztva ? "vezerlo_gomb_kivalasztva" : "") + "'>"
               + " <div class='vezerlo_gomb' "
               + "      onclick=\"BETUBEALLITASOK.fuggoleges_igazitas_kivalasztasa('" + y + "');\">"
               + "  <img src='kepek/fuggoleges_igazitas_" + y + ".png'>"
               + " </div>"
               + "</td>";
        }
        t += " </tr>"
           + "</table>";
        $("#dia_fuggoleges_igazitas").html(t);
        
        // Betűtípus:
        var t = "<table class='diakeszites_tabla'>"
              + " <tr>"
              + "  <td>"
              + "    <select class='listavalaszto' "
              + "            onchange=\"BETUBEALLITASOK.betutipus_kivalasztasa(this.value);\">";
        for(var kulcs in this.betutipusok)
        {
            t += "<option value='" + kulcs + "' "
              +   (kulcs == this.kivalasztott_betutipus ? "selected='selected'" : "")
              + ">"
              + this.betutipusok[kulcs].cim
              + "</option>";
        }
        t += "   </select>"
           + "  </td>"
           + " </tr>"
           + "</table>";
        $("#dia_betutipus").html(t);
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
    
    this.betutipus_kivalasztasa = function(betutipus)
    {
        this.kivalasztott_betutipus = betutipus;
        var betutipus = this.betutipusok[this.kivalasztott_betutipus];
        
        osszes_dia_kijelolese();
        this.nagybetusse_alakitas(betutipus.nagybetus);
        this.vizszintes_igazitas_kivalasztasa(betutipus.igazitas_x);
        this.fuggoleges_igazitas_kivalasztasa(betutipus.igazitas_y);
        DIA_MERET.keparany_beallitasa(betutipus.keparany);
        diak_kijelolesenek_megszuntetese();
    };
};

function diasor_megjelenitese()
{
    var t = "";
    // t += "<div class='kurzorhely_kerete'><div class='kurzorhely'></div></div>";
    
    for(var i=0, n=diasor.length; i<n; i++)
    {
        var dia = diasor[i];
        
        t += "<table class='noselect " + (dia.kijelolve == true ? " dia_kijelolve " : "") + "' "
           + "       style='display: inline-block;'"
           + "       cellpadding='0' cellspacing='0'"
           + "       onclick=\"dia_kijelolese(event, '" + i + "');\">"
           + " <tr><td class='dia_keret_fuggoleges'></td></tr>"
           + " <tr>"
           + "  <td class='dia_keret_vizszintes'>"
           + "   <div style=\"position: relative; "
           + "               width: " + DIA_MERET.szelesseg + "px; "
           + "               height: " + DIA_MERET.magassag + "px; "
           + "               color: " + STILUS.betuszin + "; "
           + "               background-color:" + STILUS.hatterszin + ";"
           +                 (HATTER.kivalasztott_hatterkep != "semmi"
                          ? ("background-image: url('kepek/hatter/" + HATTER.kivalasztott_hatterkep + "');"
                          + "background-position: center center;"
                          + "background-size: cover;")
                          : "")
           + "\">";
        
        // Dia objektumai:
        for(var j=0, o=dia.objektumok.length; j<o; j++)
        {
            var obj = dia.objektumok[j];
            
            t += "<div class='dia_obj'"
               + "     style='width  : " + DIA_MERET.szelesseg + "px;"
               + "            height : " + DIA_MERET.magassag  + "px;"
               + "           '>";
            switch(obj.tipus)
            {
                case "hatterszin":
                    t += "<div style='width:100%; height:100%; background-color:" + obj.szin + ";'></div>";
                    break;
                case "kep":
                    var szazalekos_szelesseg = obj.szelesseg / DIA_MERET.szelesseg;
                    var szazalekos_magassag  = obj.magassag / DIA_MERET.magassag;
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
                        t += "<div style='font-size      : " + (sz.betumeret ? sz.betumeret : ALAP_BETUMERET) / DIA_MERET.skalazas + "pt;"
                           + "            font-weight    : " + (sz.felkover  == true ? "bold"       : "normal")  + ";"
                           + "            font-style     : " + (sz.dolt      == true ? "italic"     : "normal")  + ";"
                           + "            font-family    : " + (sz.betutipus != null ? sz.betutipus : "Sylfaen") + ";"
                           + "            text-transform : " + (sz.nagybetus == true ? "uppercase"  : "none")    + ";"
                           + "           '>"
                           + (sz.szoveg.length == 0
                              ? "<br>"
                              : sz.szoveg.replace(/  /g, "&nbsp; "))
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

        t += "   </div>"
           + "  </td>"
           + " </tr>"
           + " <tr><td class='dia_keret_fuggoleges'></td></tr>"
           + "</table>";
        
        // t += "<div class='kurzorhely_kerete'><div class='kurzorhely'></div></div>";
    }
    t += "</table>";
    $("#diasor").html(t);
}
