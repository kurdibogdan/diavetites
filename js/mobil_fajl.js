var Fajl =
{
    megnyitott: null,
    fajllista: null,
    fajllista_betoltese: function()
    {
        var that = this;
        $.post("php/fajllista_betoltese.php", function(data)
        {
            that.fajllista = jQuery.parseJSON(data);
            var mentett_fajlok = "";
            var fajllista_tabla = "<table border='1' rules='all' cellpadding='5' width='100%'>";
            for(var fajl of that.fajllista)
            {
                mentett_fajlok += "<option value='" + fajl.nev + "'></option>";
                fajllista_tabla += "<tr>"
                                 + " <td>"
                                 + fajl.nev
                                 + " </td>"
                                 + " <td width='1'>"
                                 + "  <button class='megnyitas_gomb' onclick=\"Fajl.megnyitas('" + fajl.nev + "');\">&rarr;</button>"
                                 + " </td>"
                                 + "</tr>";
            }
            fajllista_tabla += "</table>";
            $("#mentett_fajlok").html(mentett_fajlok);
            $("#fajllista").html(fajllista_tabla);
        });
    },
    
    uj_fajl: function()
    {
        $("#fajlnev").val("").focus();
    },
    
    kivalasztott_megnyitasa: function()
    {
        this.megnyitas($("#fajlnev").val());
    },
    
    megnyitas: function(fajlnev)
    {
        if (fajlnev.length == 0)
        {
            alert("Adj meg egy fájlnevet előbb!");
        }
        else
        {
            var that = this;
            $.post("php/fajl_megnyitasa.php", {fajlnev: fajlnev}, function(data)
            {
                console.log(data);
                that.megnyitott = fajlnev;
                $("#fajlnev").val(fajlnev);
            });
        }
    },
    
    mentes: function()
    {
        var fajlnev = $("#fajlnev").val();
        var listan_van = (this.fajllista.find(function(o){return(o.nev == fajlnev);}) != null);
        
        if (fajlnev.length == 0)
        {
            alert("Adj meg egy fájlnevet előbb!");
        }
        else if ((listan_van == false) ||
                 (fajlnev == this.megnyitott) ||
                 (confirm("Már van ilyen fájl. Felül akarod írni?")) == true)
        {
            var that = this;
            $.post("php/fajl_mentese.php", {fajlnev: fajlnev}, function(data)
            {
                console.log(data);
                that.megnyitas(fajlnev);
                that.fajllista_betoltese();
            });
        }
    },
    
    kivalaszott_letoltese: function()
    {
        console.log("Kiválasztott letöltése .pptx formátumban.");
    },
    
    kivalaszott_torlese: function()
    {
        this.torles($("#fajlnev").val());
    },
    
    torles: function(fajlnev)
    {
        if (fajlnev.length == 0)
        {
            alert("Adj meg egy fájlnevet előbb!");
        }
        else
        {
            var that = this;
            $.post("php/fajl_torlese.php", {fajlnev: fajlnev}, function(data)
            {
                console.log(data);
                that.uj_fajl();
                that.fajllista_betoltese();
            });
        }
    },
    
    ikonallapotok_frissitese: function()
    {
        if ($("#fajlnev").val().length > 0)
        {
            $("#fajl_megnyitas_gomb, #fajl_mentes_gomb, #fajl_torles_gomb")
                .removeAttr("disabled");
        }
        else
        {
            $("#fajl_megnyitas_gomb, #fajl_mentes_gomb, #fajl_torles_gomb")
                .attr("disabled", "disabled");
        }
    },
};