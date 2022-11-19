// diasor_dalszoveg.js kiegészítése
$(document).mouseup(function(e)
{
    var container = $(".dalszoveg_talalatok");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        $(".dalszoveg_talalatok").hide();
    }
});

var legutobbi_keresendo     = "";
var legutobbi_kereses_ideje = 0;
var KERESESEK_KOZTI_IDO     = 1000;     // ms
var kereses_folyamatban     = false;
var kereses_callback        = null;

function dal_keresese_cim_szerint(cim)
{
    var talalat_id;
    for(var i=0, n=dalszovegek.length; i<n; i++)
    {
        var dal_id  = dalszovegek[i].id;
        var dal_cim = dalszovegek[i].cim;
        var sorszam = dalszovegek[i].sorszam;
        
        if (dal_cim == cim)
        {
            talalat_id = dal_id;
            break;
        }
    }
    return(talalat_id);
}

function dalszoveg_keresese(szoveg, callback)
{
    if (szoveg != null) legutobbi_keresendo = szoveg;
    if (callback != null) kereses_callback = callback;
    
    var kereses_ideje = new Date();
    var idokulonbseg  = kereses_ideje - legutobbi_kereses_ideje;
    if (idokulonbseg >= KERESESEK_KOZTI_IDO)
    {
        // console.log("keresés: " + legutobbi_keresendo);
        legutobbi_kereses_ideje = kereses_ideje;
        $.post("php/dalszoveg_keresese.php", {keres: legutobbi_keresendo}, function(data)
        {
            kereses_folyamatban = false;
            var talalatok = jQuery.parseJSON(data);
            if (typeof kereses_callback == "function") kereses_callback(talalatok);
        });
    }
    else if (kereses_folyamatban == false)
    {
        kereses_folyamatban = true;
        setTimeout(function(){dalszoveg_keresese();}, KERESESEK_KOZTI_IDO - idokulonbseg);
    }
}

function dal_keresese(beviteli_mezo, callback_neve)
{
    var cim     = beviteli_mezo.value.toLowerCase();
    var lista   = document.getElementById(beviteli_mezo.getAttribute("data-list"));
    var gomb_id = beviteli_mezo.getAttribute("data-gomb_id");
    $(lista).show();
    
    var MAX_TALALATOK      = 10;
    var cimkezdo_talalatok = [];
    var cimkozep_talalatok = [];
    
    // Pontos találatok:
    // - Először jönnek azok a dalok, amelyikeknek a címében a keresett szó van.
    // - Ezeknél is először azok, amik pont úgy kezdődnek, mint amit keresünk, és csak utána azok, amelyek csak tartalmazzák.
    for(var i=0, n=dalszovegek.length; i<n; i++)
    {
        var dal_id  = dalszovegek[i].id;
        var dal_cim = dalszovegek[i].cim;
        var sorszam = dalszovegek[i].sorszam;
        
        if (dal_cim.toLowerCase().startsWith(cim) || sorszam.startsWith(cim))
        {
            cimkezdo_talalatok.push(dalszovegek[i]);
        }
        else if (dal_cim.toLowerCase().includes(cim) || sorszam.includes(cim))
        {
            cimkozep_talalatok.push(dalszovegek[i]);
        }
    }
    var pontos_talalatok = cimkezdo_talalatok.concat(cimkozep_talalatok);
    
    // Találati lista megjelenítése:
    var t = "";
    var talalatok_szama = 0;
    for(var i=0, n=pontos_talalatok.length;
        i < n && talalatok_szama < MAX_TALALATOK;
        i++, talalatok_szama++)
    {
        t += "<div class='dal_talalat'"
           + "     data-id='" + pontos_talalatok[i].id + "'"
           + "     onclick=\"dal_kivalasztasa('" + gomb_id + "',"
           + "                                '" + beviteli_mezo.id + "', " 
           +                                  pontos_talalatok[i].id + ", "
           + "                                '" + pontos_talalatok[i].cim + "', "
           + "                                '" + callback_neve + "');\""
           + ">" + (pontos_talalatok[i].sorszam ? pontos_talalatok[i].sorszam + ". " : "")
           + pontos_talalatok[i].cim 
           + "</div>";
    }
    lista.innerHTML = t;
    
    // Ha nincs elég találat, akkor keresünk a szövegben is (adatbázisból).
    // Callback függvényben fogja a találati listát bővíteni.
    if (talalatok_szama < MAX_TALALATOK)
    {
        dalszoveg_keresese(cim, function(szoveg_talalatok)
        {
            var t = "";
            for(var i=0, n=szoveg_talalatok.length;
                i < n && talalatok_szama < MAX_TALALATOK;
                i++)
            {
                var mar_volt = (pontos_talalatok.filter(obj=>obj.id == szoveg_talalatok[i].id).length > 0 ? true : false);
                if (mar_volt == false)
                {
                    t += "<div class='dal_talalat'"
                       + "     data-id='" + szoveg_talalatok[i].id + "'"
                       + "     onclick=\"dal_kivalasztasa('" + gomb_id + "', "
                       + "                                '" + beviteli_mezo.id + "', "
                       + "                                 " + szoveg_talalatok[i].id + ", "
                       + "                                '" + szoveg_talalatok[i].cim + "')\""
                       + ">" + (szoveg_talalatok[i].sorszam ? szoveg_talalatok[i].sorszam + ". " : "")
                       + szoveg_talalatok[i].cim 
                       + "</div>";
                    talalatok_szama++;
                }
            }
            lista.innerHTML += t;
        });
    }
}

function dal_kivalasztasa(gomb_id, beviteli_mezo_id, dal_id, dal_cim, callback_neve)
{
    // console.log(beviteli_mezo_id + " -> " + dal_id + "(" + dal_cim + ")");
    var beviteli_mezo = document.getElementById(beviteli_mezo_id);
    beviteli_mezo.setAttribute("data-dal_id", dal_id);
    beviteli_mezo.value = dal_cim;
    $(".dalszoveg_talalatok").hide();
    
    // gombok beállítása:
    $("#diasor_bovitese_" + gomb_id).prop("disabled", "");                              // diasorhoz hozzáadó gomb engedélyezése
    $("#dalszoveg_szerkesztese_gomb_" + gomb_id).prop("disabled", "").show();           // szerkesztő gomb engedélyezése (+ megjelenítése)
    $("#dia_keszitese_" + gomb_id).prop("checked", "checked");                          // kipipálás
    $("#uj_dalszoveg_gomb_" + gomb_id).hide();                                          // új dalszöveg hozzáadása gomb elrejtése
    
    var callback = eval(callback_neve);
    if (typeof callback == "function") callback(dal_id);
}

function dal_kivalasztasa_cim_szerint(gomb_id, dal_cim)
{
    var dal_id = dal_keresese_cim_szerint(dal_cim) || "";
    dal_kivalasztasa(gomb_id, "enek_valasztasa_" + gomb_id, dal_id, dal_cim);
}
