// Függőségek:
// - jQuery
// Dalszöveg kereséséhez:
// - dalszoveg_szerkesztese.css
// - dalszovegek.js
//   -> dalszovegek[] tömb kell neki
//   -> dallista_betoltese() gyorsítja
// - oldal_megjelenitese()
// Diakészítéshez:
// - gomb.css
// - checkbox.css

const Diasor_Dalszoveg2 = {
    dalszovegbol_diasor: function(dal_id){
        const that = this;
        dalszoveg_betoltese(dal_id, function(dalszoveg){
            const diak = that.dalszoveg_felbontasa_diakra(dalszoveg);
            const feldolgozott_diak = [];
            console.log("Diák száma: " + diak.length);
            for (let dia of diak) {
                let dia = that.diatulajdonsagok_feldolgozasa(dia);
                feldolgozott_diak.push(dia);
            }
            return(feldolgozott_diak);
        });
    },
    
    dalszoveg_felbontasa_diakra: function(dalszoveg){
        return(szoveg.replace(/(\r|\n|\r\n)/g, /\n/).split("\n\n"));
    },
    
    diatulajdonsagok_feldolgozasa: function(nyers_szoveg) {
        // TODO
        let szovegdoboz = {
         // poz_x: 0,
         // poz_y: 0,
         // szelesseg: 92,
         // magassag: 74,
            betumeret: 25,
            betutipus: "Arial Black",
            igazitas: {
                x: "kozepre",   // jobbra, kozepre
                y: "kozepre",   // fent, kozepre, lent
            },
            felkover,
            korvonal,
            arnyek,
            nyelv,
        };
    },
    
    szoveg_elofeldolgozasa : function(szoveg)
    {
        // A szöveg felbontása a diák (üres sorok) mentén:
        var dalszoveg = [];
        
        for(var i=0, n=diak.length; i<n; i++)
        {
            // Szöveg felosztása sorokra, közben a jelölések (#) feldolgozása:
            var dia = diak[i]
                      .replace(/^#\s*$/gm,   "")      // "#" jelölésből dián belüli üres sor lesz
                      .replace(/^#.*?$\n/gm, "")      // jelölések törlése
                      .split("\n");
            dalszoveg.push(dia);
        }
        // dalszoveg = [  1. versszak            ,  2. versszak    , ... ]
        // dalszoveg = [ [1. sor, 2. sor, 3. sor], [4. sor, 5. sor], ... ]
        
        return(dalszoveg);
    },
};

var Diasor_Dalszoveg =
{
    uj_diasor : function(gomb_id, callback)
    {
        oldal_megjelenitese("diak_rendezese_oldal");
        
        var tipus             = $("#dia_keszitese_sor_" + gomb_id).attr("data-tipus");        
        var kivalasztott_enek = $("#enek_valasztasa_" + gomb_id).attr("data-dal_id");   // data("dal_id") nem jól működik (második kiválasztásnál nem vált át)
        
        var that = this;
        dalszoveg_betoltese(kivalasztott_enek, function(data)
        {
            // Szöveg típusra szabása (csak az első versszak, utolsó versszakig, csak az utolsó versszak, teljes dal):
            var szoveg = dalszoveg_tipusra_szabasa(data.szoveg, tipus);
            var dalszoveg = that.szoveg_elofeldolgozasa(szoveg);
            
            // Diák (objektumok) összeállítása:
            var diak      = [];
            var betumeret = 25; // that.maximumalis_betumeret_meghatarozasa(dalszoveg);
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
                    "poz_x"      : 0,
                    "poz_y"      : 0,
                    "szelesseg"  : 100,
                    "magassag"   : 100,
                    "igazitas_x" : BETUBEALLITASOK.igazitasok.kivalasztva.x,
                    "igazitas_y" : BETUBEALLITASOK.igazitasok.kivalasztva.y,
                    "szovegek"   :
                    [
                        {
                            "szoveg"    : dalszoveg[i].join("<br>"),
                            "betumeret" : BETUBEALLITASOK.betutipusok[BETUBEALLITASOK.kivalasztott_betutipus].betumeret,    // 25pt 
                            "betutipus" : BETUBEALLITASOK.betutipusok[BETUBEALLITASOK.kivalasztott_betutipus].betutipus,    // Arial Black; alternatív: 30px "Sylfaen",
                            "nagybetus" : BETUBEALLITASOK.nagybetus_beallitasa
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
            
            if ($("#dia_keszitese_" + gomb_id).prop("checked") == false)
            {
                diak = [];
            }
            if (typeof callback == "function") callback(diak);
         });
    },
    
    szoveg_elofeldolgozasa : function(szoveg)
    {
        // A szöveg felbontása a diák (üres sorok) mentén:
        var dalszoveg = [];
        var diak = szoveg.replace(/\r/g, "").split("\n\n");
        
        for(var i=0, n=diak.length; i<n; i++)
        {
            // Szöveg felosztása sorokra, közben a jelölések (#) feldolgozása:
            var dia = diak[i]
                      .replace(/^#\s*$/gm,   "")      // "#" jelölésből dián belüli üres sor lesz
                      .replace(/^#.*?$\n/gm, "")      // jelölések törlése
                      .split("\n");
            dalszoveg.push(dia);
        }
        // dalszoveg = [  1. versszak            ,  2. versszak    , ... ]
        // dalszoveg = [ [1. sor, 2. sor, 3. sor], [4. sor, 5. sor], ... ]
        
        return(dalszoveg);
    },
    
    betumeret_meghatarozasa : function(sorok_szama)
    {
        // mért értékek: (9, 30), (8, 34), (7, 39), (6, 44pt)  ==> (-4.7 * sorok_szama + 72)
        var betumeret = (sorok_szama < 6 
                         ? 44
                         : Math.max(1, -4.4 * sorok_szama + 64));  // pt   +72
        // console.log(sorok_szama + " -> " + betumeret);
        return(betumeret);
    },
    
    maximumalis_betumeret_meghatarozasa : function(dalszoveg)
    {
        var maximum_betumeret = 44;
        
        for(var i=0, n=dalszoveg.length; i<n; i++)
        {
            var versszak = dalszoveg[i];
            for(var j=0, o=versszak.length; j<o; j++)
            {
                var sor = versszak[j];
                var szelesseg = getTextWidth(sor);
                var betumeret = Math.max(1, -0.1699 * szelesseg + 84.241);
                // console.log(szelesseg + " -> " + sor);
                // Mért értékek:
                //   192,8515625    53
                //   178,625        56
                //   207,484375     47
                //   314,75         32
                //   304,1015625    33
                //   223,6640625    45
                //   307,46875      32
                //   242,015625     41
                // --> betumeret = -0.1699 * szelesseg + 84.241
                max_betumeret = Math.min(betumeret, maximum_betumeret);
            }
        }
        
        for(var i=0, n=dalszoveg.length; i<n; i++)
        {
            var betumeret     = this.betumeret_meghatarozasa(dalszoveg[i].length);
            maximum_betumeret = Math.min(betumeret, maximum_betumeret);
        }
        return(maximum_betumeret);
    },
    
    jelolo_valtasa : function(gomb_id)
    {
        var jelolo  = $("#dia_keszitese_" + gomb_id);
        var bovito  = $("#diasor_bovitese_" + gomb_id);
        var bevitel = $("#enek_valasztasa_" + gomb_id).val();
        if (jelolo && bovito)
        {
            $(jelolo).prop("checked", (bevitel.length > 0 ? "checked" : ""));
            $(bovito).prop("disabled", (bevitel.length > 0 ? "" : "disabled"));
        }
    },
    
    dalszoveg_kereses_gomb : function(gomb_id, callback_neve)
    {
        var t = "  <input id='enek_valasztasa_" + gomb_id + "'"
              + "         type='text'"
              + "         value=''"
              + "         data-dal_id=''"
              + "         data-gomb_id='" + gomb_id + "'"
              + "         onkeydown=\"dalszoveg_kivalasztas_torlese('" + gomb_id + "');\""
              + "         onkeyup=\"dal_keresese(this, '" + callback_neve + "');\""
              + "         autocomplete='off'"
              + "         placeholder='-- dal keresése --'"
              + "         data-list='dalszoveg_talalatok_" + gomb_id + "'>"
              + "  <div class='dalszoveg_talalatok' id='dalszoveg_talalatok_" + gomb_id + "'></div>";
        return(t);
    },
    
    diakeszites_gomb : function(gomb_id, tipus, cim, rejtett)
    {   
        // tipus = ["teljes", "csak_elso_versszak", "utolso_versszakig", "csak_utolso_versszak"];
        var t = "<tr id='dia_keszitese_sor_" + gomb_id + "' "
              + "     data-tipus='" + tipus + "' "
              + "     style='display:" + (rejtett ? "none" : "") + ";'>\n"
              + " <td>"
              + "  <label class='switch'>"
              + "   <input id='dia_keszitese_" + gomb_id + "' type='checkbox'>"
              + "   <span class='slider round'></span>"
              + "  </label>"
              + " </td>\n"
              + " <td>" + cim + " <br>"
              + this.dalszoveg_kereses_gomb(gomb_id, "dalszoveg_szerkesztes_bezarasa")
              + " </td>\n"
              + " <td>"
              + "  <button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"Diasor_Dalszoveg.uj_diasor('" + gomb_id + "', diasor_bovitese);\" "
              + "             disabled='disabled'>&rarr;</button>"
              + "  <br>"
              + "  <button id='dalszoveg_szerkesztese_gomb_" + gomb_id + "' "
              + "          class='dalszoveg_szerkesztese_gomb' "
              + "          onclick=\"Diasor_Dalszoveg.dalszoveg_szerkesztese('" + gomb_id + "');\" "
              + "          disabled='disabled'"
              + "          style='display:none;'></button>"
              + "  <button id='uj_dalszoveg_gomb_" + gomb_id + "' "
              + "          class='uj_dalszoveg_gomb' "
              + "          onclick=\"Diasor_Dalszoveg.uj_dalszoveg_irasa('" + gomb_id + "');\"></button>"
              + " </td>\n"
              + "</tr>\n";
        return(t);
    },
    
    mobil_diakeszites_gomb : function(gomb_id, tipus, cim, rejtett)
    {   
        // tipus = ["teljes", "csak_elso_versszak", "utolso_versszakig", "csak_utolso_versszak"];
        var t = "<tr id='dia_keszitese_sor_" + gomb_id + "' "
              + "     data-tipus='" + tipus + "' "
              + "     style='display:" + (rejtett ? "none" : "") + ";'>\n"
              + " <td>" + cim + " <br>"
              + this.dalszoveg_kereses_gomb(gomb_id, "dalszoveg_szerkesztes_bezarasa")
              + " </td>\n"
              + " <td>"
              + "  <button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"Diasor_Dalszoveg.uj_diasor('" + gomb_id + "', diasor_bovitese);\" "
              + "             disabled='disabled'>&rarr;</button>"
              + "  <br>"
              + "  <button id='dalszoveg_szerkesztese_gomb_" + gomb_id + "' "
              + "          class='dalszoveg_szerkesztese_gomb' "
              + "          onclick=\"Diasor_Dalszoveg.dalszoveg_szerkesztese('" + gomb_id + "');\" "
              + "          disabled='disabled'"
              + "          style='display:none;'></button>"
              + "  <button id='uj_dalszoveg_gomb_" + gomb_id + "' "
              + "          class='uj_dalszoveg_gomb' "
              + "          onclick=\"Diasor_Dalszoveg.uj_dalszoveg_irasa('" + gomb_id + "');\"></button>"
              + " </td>\n"
              + "</tr>\n";
        return(t);
    },
    
    dalszoveg_szerkesztese : function(gomb_id)
    {
        if (megjelenitett_oldal == "dalszoveg_szerkesztese_oldal")
        {
            dalszoveg_szerkesztes_bezarasa();
        }
        else
        {
            var enekvalaszto = $("#enek_valasztasa_" + gomb_id);
            var dalszoveg_id = $(enekvalaszto).attr("data-dal_id");
            var cim          = $(enekvalaszto).val();
            dalszoveg_betoltese(dalszoveg_id, function(data)
            {
                var t = "<table>"
                      + " <tr>"
                      + "  <th>Cím:</th>"
                      + "  <td><input id='dalszoveg_szerkesztese_cim_" + gomb_id + "' type='text' value='" + cim + "'></td"
                      + " </tr>"
                      + " <tr>"
                      + "  <th>Sorszám:</th>"
                      + "  <td><input id='dalszoveg_szerkesztese_sorszam_" + gomb_id + "' type='text' value='" + data.sorszam + "'> (id = " + dalszoveg_id + ")</td>"
                      + " </tr>"
                      + " <tr>"
                      + "  <th>Típus:</th>"
                      + "  <td>"
                      + "   <select id='dalszoveg_szerkesztese_tipus_" + gomb_id + "'>"
                      + "    <option value='' "         + (data.tipus == ""         ? "selected='selected'" : "") + ">egyéb</option>"
                      + "    <option value='ifienek'  " + (data.tipus == "ifienek"  ? "selected='selected'" : "") + ">ifiének</option>"
                      + "    <option value='dicseret' " + (data.tipus == "dicseret" ? "selected='selected'" : "") + ">dicséret</option>"
                      + "   </select>"
                      + "  </td>"
                      + " </tr>"
                      + "</table>"
                      + "<textarea id='dalszoveg_szerkesztese_" + gomb_id + "' autocomplete='off'>"
                      + data.szoveg
                      + "</textarea>"
                      + "<br>"
                      + "<button class='szurke_gomb' onclick='dalszoveg_szerkesztes_bezarasa();'>Mégse</button>"
                      + "<button class='piros_gomb' onclick=\"dalszoveg_torlese('" + gomb_id + "');\">Törlés</button>"
                      + "<button class='zold_gomb' onclick=\"dalszoveg_mentese('" + gomb_id + "');\">Mentés</button>";
                $("#dalszoveg_szerkesztese").html(t);
                oldal_megjelenitese("dalszoveg_szerkesztese_oldal");
            });
        }
    },
    
    uj_dalszoveg_irasa : function(gomb_id)
    {
        $("#enek_valasztasa_" + gomb_id).attr("data-dal_id", "");   // ID törlése
        $("#dalszoveg_szerkesztese_tipus_" + gomb_id).val("");      // típus törlése
        $("#dalszoveg_szerkesztese_sorszam_" + gomb_id).val("");    // sorszám törlése
        $("#dalszoveg_szerkesztese_" + gomb_id).val("");            // dalszöveg törlése
        Diasor_Dalszoveg.dalszoveg_szerkesztese(gomb_id);
    },
}

function dalszoveg_kivalasztas_torlese(gomb_id)
{
    // <button id="dalszoveg_szerkesztese_gomb_urvacsora2_enek_3" 
    //         class="dalszoveg_szerkesztese_gomb" 
    
    // <button id="uj_dalszoveg_gomb_urvacsora2_enek_1" 
    //         class="uj_dalszoveg_gomb" 
    
    $("#diasor_bovitese_" + gomb_id).prop("disabled", "disabled");                      // diasorhoz hozzáadó gomb tiltása
    $("#dalszoveg_szerkesztese_gomb_" + gomb_id).prop("disabled", "disabled").hide();   // szerkesztő gomb letiltás (ne is látszódjon)
    $("#dia_keszitese_" + gomb_id).prop("checked", "");                                 // kipipálás törlése
    $("#uj_dalszoveg_gomb_" + gomb_id).show();                                          // új dalszöveg hozzáadása gomb megjelenítése
    dalszoveg_szerkesztes_bezarasa();                                                   // szerkesztő bezárása
}


function dalszoveg_szerkesztes_bezarasa()
{
    $("#dalszoveg_szerkesztese").val("");
    oldal_megjelenitese("diak_rendezese_oldal");
}

function dalszoveg_mentese(gomb_id)
{
    var dalszoveg_id = $("#enek_valasztasa_" + gomb_id).attr("data-dal_id");
    var cim          = $("#dalszoveg_szerkesztese_cim_" + gomb_id).val();
    var tipus        = $("#dalszoveg_szerkesztese_tipus_" + gomb_id).val();
    var sorszam      = $("#dalszoveg_szerkesztese_sorszam_" + gomb_id).val();
    var szoveg       = $("#dalszoveg_szerkesztese_" + gomb_id).val();
    
    $.post("php/dalszoveg_mentese.php",
    {
        dalszoveg_id : dalszoveg_id,
        cim          : cim,
        tipus        : tipus,
        sorszam      : sorszam,
        szoveg       : szoveg,
    }, function(data)
    {
        if (data != "") console.log(data);
        dalszoveg_szerkesztes_bezarasa();
        dallista_betoltese();
    });
}

function dalszoveg_torlese(gomb_id)
{
    var dalszoveg_id = $("#enek_valasztasa_" + gomb_id).attr("data-dal_id");
    var cim          = $("#dalszoveg_szerkesztese_cim_" + gomb_id).val();
    var a_az         = (cim.charAt(0).match(/[aáeéiíoóöőuúüű]/i) == null ? "a" : "az");
    var r            = confirm("Tényleg törlöd " + a_az + " '" + cim + "' dalt?");
    if (r == true)
    {
        $.post("php/dalszoveg_torlese.php", {dalszoveg_id : dalszoveg_id}, function(data)
        {
            if (data != "") console.log(data);
            dalszoveg_szerkesztes_bezarasa();
            dallista_betoltese();
        });
    }
}

function dalszoveg_tipusra_szabasa(dalszoveg, tipus)
{
    var versszakok = dalszoveg.split(/\s*(?=#[0-9])\s*/g);   // megkeresi a #1, #2, stb. jelölést, de nem törli + az üres karaktereket levágja a végéről
    switch(tipus)
    {
        case "teljes":
            break;
        case "csak_elso_versszak":
            dalszoveg = versszakok.slice(0, 1)[0];              // versszakok[0];
            break;
        case "utolso_versszakig":
            dalszoveg = versszakok.slice(0, -1).join("\n\n");   // utolsó versszak levágása
            break;
        case "csak_utolso_versszak":
            dalszoveg = versszakok.slice(-1)[0];                // versszakok[versszakok.length - 1];
            break;
        default:
            break;
    };
    return(dalszoveg);
}
