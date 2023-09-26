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
            var dalszoveg = Diasor_Dalszoveg.szoveg_elofeldolgozasa(data.szoveg);
            var dia = dalszoveg[0];
            $("#stilus_pelda")
                .css("font-family", that.betutipus.kivalasztva)
                .css("font-size",   that.betumeret.kivalasztva / 3)
                .css("font-weight", that.betuvastagsag.kivalasztva)
                .css("text-shadow", that.betuarnyekolas.kivalasztva.tavolsag + "px "
                                  + that.betuarnyekolas.kivalasztva.tavolsag + "px "
                                  + that.betuarnyekolas.kivalasztva.szin)
                .html(dia.join("<br>"));
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
    
    betukorvonal_valasztasa: function()
    {
        var t = "<table>"
              + " <tr>"
              + "  <td>"
              + "   <select id='betukorvonal' autocomplete='off'>"
              + "    <option value='0'>nincs</option>"
              + "    <option value='1'>1px körvonal</option>"
              + "    <option value='2'>2px körvonal</option>"
              + "   </select>"
              + "  </td>"
              + "  <td>"
              + "   <input id='betukorvonal_szine' type='color'>"
              + "  </td>"
              + " </tr>"
              + "</table>";
        $("#betukorvonal_valasztasa").html(t);
    },
    
    betu_kis_nagy_valasztasa: function()
    {
        var t = "<select id='betu_kis_nagy'>"
              + " <option value='kisbetus'>kisbetűs</option>"
              + " <option value='nagybetus'>NAGYBETŰS</option>"
              + " <option value='sor_elso_nagybetu'>Sorok első | Betűje nagy.</option>"
              + " <option value='vers_elso_nagybetu'>Versszakok első | betűje nagy.</option>"
              + "</select>";
        $("#betu_kis_nagy_valasztasa").html(t);
    },
    
    szovegigazitas_valasztasa: function()
    {
        var t = "<h3>Vízszintesen:</h3>"
              + "<div>"
              + " <table>"
              + "  <tr>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/vizszintes_igazitas_balra.png'>"
              + "    </div>"
              + "   </td>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/vizszintes_igazitas_kozepre.png'>"
              + "    </div>"
              + "   </td>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/vizszintes_igazitas_jobbra.png'>"
              + "    </div>"
              + "   </td>"
              + "  </tr>"
              + " </table>"
              + " <h3>Függőlegesen:</h3>"
              + " <table>"
              + "  <tr>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/fuggoleges_igazitas_fent.png'>"
              + "    </div>"
              + "   </td>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/fuggoleges_igazitas_kozepre.png'>"
              + "    </div>"
              + "   </td>"
              + "   <td>"
              + "    <div class='vezerlo_gomb'>"
              + "     <img src='kepek/fuggoleges_igazitas_lent.png'>"
              + "    </div>"
              + "   </td>"
              + "  </tr>"
              + " </table>";
        $("#szovegigazitas_valasztasa").html(t);
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