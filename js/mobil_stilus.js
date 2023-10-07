const PELDA_DAL_ID = 1954;  // Ó, hála az Úrnak

var Stilus =
{
    eloredefinialt_stilus_valasztasa: function()
    {
        var t = "<select>";
        for(var eloredefinialt_stilus of Object.keys(BETUBEALLITASOK.betutipusok))
        {
            t += "<option value='" + eloredefinialt_stilus + "'>"
               + BETUBEALLITASOK.betutipusok[eloredefinialt_stilus].cim
               + "</option>";
        }
        t += "</select>";
        
        $("#eloredefinialt_stilusok_valasztasa").html(t);
    },
    
    pelda_megjelenitese: function()
    {
        var that = this;
        dalszoveg_betoltese(PELDA_DAL_ID, function(data)
        {
            const MERETARANY = 1/3;
            var dalszoveg = Diasor_Dalszoveg.szoveg_elofeldolgozasa(data.szoveg);
            var dia = dalszoveg[0];
            var szoveg = "";
            
            switch(that.betu_kis_nagy.kivalasztva)
            {
                case "kisbetus":
                    szoveg = dia.join("<br>").toLowerCase();
                    break;
                case "nagybetus":
                    szoveg = dia.join("<br>").toUpperCase();
                    break;
                case "sor_elso_nagybetu":
                    var uj_dia = [];
                    for(var sor of dia)
                    {
                        uj_dia.push(sor.charAt(0).toUpperCase() 
                                      + sor.substring(1));
                    }
                    szoveg = uj_dia.join("<br>");
                    break;
                case "mondat_elso_nagybetu":
                    szoveg = dia.join("<br>");
                    szoveg[0] = szoveg[0].toUpperCase();
                    break;
                default:
                    break;
            }
            
            const igazitas_kodolasa =
            {
                "vizszintes":
                {
                    "balra": "left",
                    "kozepre": "center",
                    "jobbra": "right"
                },
                "fuggoleges":
                {
                    "fent": "top",
                    "kozepre": "middle",
                    "lent": "bottom"
                }
            };
            
            $("#stilus_pelda")
                .css("font-family", that.betutipus.kivalasztva)
                .css("font-size",   that.betumeret.kivalasztva * MERETARANY)
                .css("font-weight", that.betuvastagsag.kivalasztva)
                .css("text-shadow", (that.betuarnyekolas.kivalasztva.tavolsag * MERETARANY) + "px "
                                  + (that.betuarnyekolas.kivalasztva.tavolsag * MERETARANY) + "px "
                                  + that.betuarnyekolas.kivalasztva.szin)
                .css("-webkit-text-stroke", (that.betukorvonal.kivalasztva.meret * MERETARANY) + "px "
                                          + that.betukorvonal.kivalasztva.szin)
                .css("text-align", igazitas_kodolasa.vizszintes[that.szovegigazitas.kivalasztva.vizszintes])
/* ! */         .css("vertical-align", igazitas_kodolasa.fuggoleges[that.szovegigazitas.kivalasztva.fuggoleges])
                .html(szoveg);
        });
    },
    
    betutipus: 
    {
        kivalasztva: "Garamond",
        bevitel_megjelenitese: function()
        {
            const betutipusok = ["Arial", "Arial Black", "Calibri",
                                 "Courier New", "Garamond", "Georgia",
                                 "Tahoma", "Times New Roman", "Verdana"];
            var t = "<input id='betutipus' "
                  + "       type='text' "
                  + "       value='" + this.kivalasztva + "' "
                  + "       placeholder='pl. Arial Black' "
                  + "       autocomplete='off' "
                  + "       list='betutipusok' "
                  + "       onchange='Stilus.betutipus.valtoztatas(this.value);'"
                  + ">"
                  + "<br>"
                  + "<datalist id='betutipusok'>";
            for(var betutipus of betutipusok)
            {
                t += " <option value='" + betutipus + "'></option>";
            }
            t += "</datalist>";
            $("#betutipus_valasztasa").html(t);
        },
        
        valtoztatas: function(uj_betutipus)
        {
            this.kivalasztva = uj_betutipus;
            Stilus.pelda_megjelenitese();
        },
    },
    
    betumeret: 
    {
        kivalasztva: 44,
        bevitel_megjelenitese: function()
        {
            const betumeretek = [25, 36, 44];
            var t = "<input id='betumeret' "
                  + "       type='text' "
                  + "       value='" + this.kivalasztva + "' "
                  + "       placeholder='pl. 44' "
                  + "       autocomplete='off' "
                  + "       list='betumeretek' "
                  + "       onchange='Stilus.betumeret.valtoztatas(this.value);' "
                  + ">"
                  + "<br>"
                  + "<datalist id='betumeretek'>";
            for(var betumeret of betumeretek)
            {
                t += " <option value='" + betumeret + "'></option>";
            }
            t += "</datalist>";
            $("#betumeret_valasztasa").html(t);
        },
        
        valtoztatas: function(uj_betumeret)
        {
            this.kivalasztva = uj_betumeret;
            Stilus.pelda_megjelenitese();
        },
    },

    
    betuvastagsag: 
    {
        kivalasztva: "normal",
        bevitel_megjelenitese: function()
        {
            const vastagsagok =
            {
                "lighter" : "vékony",
                "normal"  : "közepes",
                "bold"    : "vastag"
            };
            
            var t = "<select id='betuvastagsag' "
                  + "        autocomplete='off' "
                  + "        onchange='Stilus.betuvastagsag.valtoztatas(this.value);' "
                  + ">";
            
            for(var kulcs of Object.keys(vastagsagok))
            {
                t += " <option value='" + kulcs + "' " 
                   + (this.kivalasztva == kulcs ? " selected='selected' " : "")
                   + " >" + vastagsagok[kulcs] + "</option>";
            }
            
            t += "</select>";
            $("#betuvastagsag_valasztasa").html(t);
        },
        valtoztatas: function(uj_betuvastagsag)
        {
            this.kivalasztva = uj_betuvastagsag;
            Stilus.pelda_megjelenitese();
        }
    },
    
    betuarnyekolas: 
    {
        kivalasztva:
        {
            tavolsag: 0,
            szin: "#000000"
        },
        bevitel_megjelenitese: function()
        {
            const arnyekolasok =
            {
                0: "nincs",
                1: "1px árnyék",
                2: "2px árnyék"
            };
            
            var t = "<table>"
                  + " <tr>"
                  + "  <td>"
                  + "   <select id='betuarnyekolas' "
                  + "           onchange='Stilus.betuarnyekolas.meret_valtoztatasa(this.value);' "
                  + "           autocomplete='off'>";
            
            for(var kulcs of Object.keys(arnyekolasok))
            {
                t += "<option value='" + kulcs + "' "
                   + (this.kivalasztva.tavolsag == kulcs ? " selected='selected' " : "")
                   + ">" + arnyekolasok[kulcs] + "</option>";
            }
            
            t += "   </select>"
               + "  </td>"
               + "  <td>"
               + "   <input id='betuarnyekolas_szine' "
               + "          type='color' "
               + "          value='" + this.kivalasztva.szin + "' "
               + "          onchange='Stilus.betuarnyekolas.szin_valtoztatasa(this.value);'"
               + "   >"
               + "  </td>"
               + " </tr>"
               + "</table>";
            $("#betuarnyekolas_valasztasa").html(t);
        },
        
        meret_valtoztatasa: function(uj_meret)
        {
            this.kivalasztva.tavolsag = uj_meret;
            Stilus.pelda_megjelenitese();
        },
        
        szin_valtoztatasa: function(uj_szin)
        {
            this.kivalasztva.szin = uj_szin;
            Stilus.pelda_megjelenitese();
        }
    },
    
    betukorvonal: 
    {
        kivalasztva:
        {
            meret: 0,
            szin: "#000000"
        },
        bevitel_megjelenitese: function()
        {
            const korvonalak =
            {
                0: "nincs",
                1: "1px körvonal",
                2: "2px körvonal"
            };
            
            var t = "<table>"
                  + " <tr>"
                  + "  <td>"
                  + "   <select id='betukorvonal' "
                  + "           onchange='Stilus.betukorvonal.meret_valtoztatasa(this.value);' "
                  + "           autocomplete='off'>";
            
            for(var kulcs of Object.keys(korvonalak))
            {
                t += "<option value='" + kulcs + "' "
                   + (this.kivalasztva.tavolsag == kulcs ? " selected='selected' " : "")
                   + ">" + korvonalak[kulcs] + "</option>";
            }
            
            t += "   </select>"
               + "  </td>"
               + "  <td>"
               + "   <input id='betukorvonal_szine' "
               + "          type='color' "
               + "          value='" + this.kivalasztva.szin + "' "
               + "          onchange='Stilus.betukorvonal.szin_valtoztatasa(this.value);'"
               + "   >"
               + "  </td>"
               + " </tr>"
               + "</table>";
            $("#betukorvonal_valasztasa").html(t);
        },
        
        meret_valtoztatasa: function(uj_meret)
        {
            this.kivalasztva.meret = uj_meret;
            Stilus.pelda_megjelenitese();
        },
        
        szin_valtoztatasa: function(uj_szin)
        {
            this.kivalasztva.szin = uj_szin;
            Stilus.pelda_megjelenitese();
        }
    },
    
    betu_kis_nagy:
    {
        kivalasztva: "sor_elso_nagybetu",
        bevitel_megjelenitese: function()
        {
            const opciok =
            {
                "kisbetus": "kisbetűs",
                "nagybetus": "NAGYBETŰS",
                "sor_elso_nagybetu": "Sorok első | Betűje nagy.",
                "mondat_elso_nagybetu": "Mondatok első | betűje nagy."                
            };
            
            var t = "<select id='betu_kis_nagy' onclick='Stilus.betu_kis_nagy.valtoztatas(this.value);'>";
            for(var kulcs of Object.keys(opciok))
            {
                t += "<option value='" + kulcs + "' "
                   + (this.kivalasztva == kulcs ? "selected='selected'" : "")
                   + ">" + opciok[kulcs] + "</option>";
            }
            t += "</select>";
            $("#betu_kis_nagy_valasztasa").html(t);
        },
        valtoztatas: function(uj_ertek)
        {
            this.kivalasztva = uj_ertek;
            Stilus.pelda_megjelenitese();
        }
    },
    
    szovegigazitas:
    {
        kivalasztva:
        {
            "vizszintes": "kozepre",
            "fuggoleges": "kozepre"
        },
        bevitel_megjelenitese: function()
        {
            const ertekek =
            {
                "vizszintes":
                {
                    "cim": "Vízszintesen",
                    "igazitas": ["balra", "kozepre", "jobbra"],
                },
                "fuggoleges":
                {
                    "cim": "Függőlegesen",
                    "igazitas": ["lent", "kozepre", "fent"],
                }
            };
            
            var t = "";
            for(var irany of Object.keys(ertekek))
            {
                t += "<h3>" + ertekek[irany].cim + ":</h3>"
                   + "<div>"
                   + " <table>"
                   + "  <tr>";
                
                for(var igazitas of ertekek[irany].igazitas)
                {
                    t += "<td>"
                       + " <div class='vezerlo_gomb " 
                       + (this.kivalasztva[irany] == igazitas ? " vezerlo_gomb_kivalasztva " : "") + "'"
                       + " onclick=\"Stilus.szovegigazitas.valtoztatas('" + irany + "', '" + igazitas + "');\""
                       + ">"
                       + "  <img src='kepek/" + irany + "_igazitas_" + igazitas + ".png'>"
                       + " </div>"
                       + "</td>";                    
                }
                
                t += "  </tr>"
                   + " </table>"
                   + "</div>";
            }
            
            $("#szovegigazitas_valasztasa").html(t);
        },
        
        valtoztatas: function(irany, igazitas)
        {
            this.kivalasztva[irany] = igazitas;
            this.bevitel_megjelenitese();
            Stilus.pelda_megjelenitese();
        }
    },
    
    margo_valasztasa: function()
    {
        var t = "<table>"
              + " <tr>"
              + "  <td>jobbra-balra:</td>"
              + "  <td><input id='margo_vizszintes' type='text' value='1' class='margo_valasztasa'>cm</td>"
              + " </tr>"
              + " <tr>"
              + "  <td>fent-lent:</td>"
              + "  <td><input id='margo_fuggoleges' type='text' value='1' class='margo_valasztasa'>cm</td>"
              + " </tr>"
              + "</table>";
        $("#margo_valasztasa").html(t);
    },
    
    kivalasztott_keparany: "szelesvaszon",
    keparany_valasztasa: function(uj_keparany)
    {
        this.kivalasztott_keparany = (uj_keparany ? uj_keparany : this.kivalasztott_keparany);
        var t = "";
        for(var keparany of Object.keys(DIA_MERET.beepitett_keparanyok))
        {
            t += "<img onclick=\"Stilus.keparany_valasztasa('" + keparany + "')\" "
               + "     src='kepek/" + DIA_MERET.beepitett_keparanyok[keparany].kep + "' "
               + "     class='gomb keparany_valasztasa " 
               + (keparany == this.kivalasztott_keparany 
               ? " kivalasztott_keparany " 
               : "") + "'>";
        }
        $("#keparany_valasztasa").html(t);
    },
};