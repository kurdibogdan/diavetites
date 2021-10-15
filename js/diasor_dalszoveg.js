var Diasor_Dalszoveg =
{
    uj_diasor : function(gomb_id, callback)
    {
        oldal_megjelenitese("diak_rendezese_oldal");
        
        var kivalasztott_enek = $("#enek_valasztasa_" + gomb_id).attr("data-dal_id");   // data("dal_id") nem jól működik (második kiválasztásnál nem vált át)
        var that = this;
        dalszoveg_betoltese(kivalasztott_enek, function(data)
        {
            data = data.replace(/\r/g, "");
            var dalszoveg = [];
            var versszakok = data.split("\n\n");    // data.split("\r\n\r\n");
            for(var i=0, n=versszakok.length; i<n; i++)
            {
                var versszak = versszakok[i].split("\r\n");
                dalszoveg.push(versszak);
            }
            // dalszoveg = [  1. versszak            ,  2. versszak    , ... ]
            // dalszoveg = [ [1. sor, 2. sor, 3. sor], [4. sor, 5. sor], ... ]
            
            var diak      = [];
            var betumeret = that.maximumalis_betumeret_meghatarozasa(dalszoveg);
            
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
                            "betumeret" : betumeret,    // pt
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
                       
            if (typeof callback == "function") callback(diak);
         });
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
    
    diakeszites_gomb : function(gomb_id, tipus, cim) // tipus = "ifienek", "dicseret"
    {                                                // cim   = "ifiének", "dicséret"
        var t = "<tr>\n"
              + " <td><label class='switch'><input id='dia_keszitese_" + gomb_id + "' type='checkbox'><span class='slider round'></span></label></td>\n"
              + " <td>" + cim + " <br>"
              + "  <input id='enek_valasztasa_" + gomb_id + "'"
              + "         type='text'"
              + "         value=''"
              + "         data-dal_id=''"
              + "         data-gomb_id='" + gomb_id + "'"
              + "         onkeydown=\"dalszoveg_gombok_tiltasa('" + gomb_id + "');\""
              + "         onkeyup=\"dal_keresese(this);\""
              + "         autocomplete='off'"
              + "         placeholder='-- dal keresése --'"
              + "         data-list='dalszoveg_talalatok_" + gomb_id + "'>"
              + "  <div class='dalszoveg_talalatok' id='dalszoveg_talalatok_" + gomb_id + "'></div>"
              + " </td>\n"
              + " <td>"
              + "  <button id='diasor_bovitese_" + gomb_id + "' "
              + "             onclick=\"Diasor_Dalszoveg.uj_diasor('" + gomb_id + "', diasor_bovitese);\" "
              + "             disabled='disabled'>&rarr;</button>"
              + "  <br>"
              +  " <button class='dalszoveg_szerkesztese_gomb' "
              +  "         onclick=\"Diasor_Dalszoveg.dalszoveg_szerkesztese('" + gomb_id + "');\""
              +  "         disabled='disabled'></button>"
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
            var dalszoveg_id = $("#enek_valasztasa_" + gomb_id).attr("data-dal_id");
            dalszoveg_betoltese(dalszoveg_id, function(data)
            {
                var t = "<textarea id='dalszoveg_szerkesztese_" + dalszoveg_id + "' autocomplete='off'>"
                      + data
                      + "</textarea>"
                      + "<br>"
                      + "<button class='szurke_gomb' onclick='dalszoveg_szerkesztes_bezarasa();'>Mégse</button>"
                      + "<button class='zold_gomb' onclick=\"dalszoveg_mentese('" + dalszoveg_id + "');\">Mentés</button>";
                $("#dalszoveg_szerkesztese").html(t);
                oldal_megjelenitese("dalszoveg_szerkesztese_oldal");
            });
        }
    },
}

function dalszoveg_gombok_tiltasa(gomb_id)
{
    $("#diasor_bovitese_" + gomb_id).prop("disabled", "disabled");
    $(".dalszoveg_szerkesztese_gomb").prop("disabled", "disabled");
}

function dalszoveg_gombok_engedelyezese(gomb_id)
{
    $("#diasor_bovitese_" + gomb_id).prop("disabled", "");
    $(".dalszoveg_szerkesztese_gomb").prop("disabled", "");
}

function dalszoveg_szerkesztes_bezarasa()
{
    $("#dalszoveg_szerkesztese").val("");
    oldal_megjelenitese("diak_rendezese_oldal");
}

function dalszoveg_mentese(dalszoveg_id)
{
    var szoveg = $("#dalszoveg_szerkesztese_" + dalszoveg_id).val();
    $.post("php/dalszoveg_mentese.php",
    {
        dalszoveg_id : dalszoveg_id,
        szoveg       : szoveg
    }, function(data)
    {
        if (data != "") console.log(data);
        dalszoveg_szerkesztes_bezarasa();
    });
}
