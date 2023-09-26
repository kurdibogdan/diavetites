var Hatter =
{
    betuszin_valasztasa: function()
    {
        var t = "<input id='betuszin' type='color'>";
        $("#betuszin_valasztasa").html(t);
    },
    
    hatterszin_valasztasa: function()
    {
        var t = "";
        for(var hatterszin of Object.keys(HATTERSZINEK))
        {
            t += "<button style='background-color: " + HATTERSZINEK[hatterszin] + ";'>"
               + "</button>";
        }
        $("#hatterszin_valasztasa").html(t);
    },
    
    kivalasztott_hatterkep: "semmi",
    hatterkep_valasztasa: function()
    {
        var that = this;
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
                  + "  <td id='kiskep_keret_semmi' class='kiskep_keret " + (that.kivalasztott_hatterkep == "semmi" ? "vezerlo_gomb_kivalasztva" : "") + "'>"
                  + "   <div class='vezerlo_gomb' onclick=\"STILUS.hatterkep_valasztasa.hatter_kivalasztasa('semmi');\"></div>"
                  + "  </td>";
            
            var i = 0;
            for(i = 0; i < kepek.length; i++)
            {
                var kep = kepek[i];
                t += "<td id='kiskep_keret_" + kep + "' class='kiskep_keret " + (kep == that.kivalasztott_hatterkep ? "vezerlo_gomb_kivalasztva" : "") + "'>"
                   + " <div class='vezerlo_gomb_hatterrel'>"
                   + "  <div id='kiskep_" + kep + "' class='kiskep' "
                   + "       style='background-image: url(kepek/hatter/kiskep/" + kep + ");'"
                   + "       onclick=\"HATTER.hatter_kivalasztasa('" + kep + "');\""
                   + "       tabindex='" + i + "'"
                   + "       onkeydown=\"HATTER.hatterkep_torlese(event, '" + kep + "');\">"
                   + "  </div>"
                   + " </div>"
                   + "</td>";
                // console.log("i = " + i + ", (i+2) = " + (i+2) + ", (i+2)%7 = " + ((i+2)%7));
                if ((i+2)%5==4) // 7 van 1 sorban, de az első sorban csak 5 (mert 2 egyéb gombot hozzáadtunk)
                {
                   t += "</tr><tr>";
                }
            }
            for(--i; (i+2)%5!=4; i++)
            {
                t += "<td></td>";
            }
            t += " </tr>"
               + "</table>";
           
           
            $("#hatterkep_valasztasa").html(t);
        });
    },
};