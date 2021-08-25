dalszovegek_ifienekek.sort(function(a,b){return(a.cim.localeCompare(b.cim));});
dalszovegek_dicseretek.sort(function(a,b){return(a.sorszam > b.sorszam);});
var dalszovegek = dalszovegek_dicseretek.concat(dalszovegek_ifienekek);

function dallista_betoltese()
{
    var t_ifi                 = "<option value=''>-- ifiének --</option>";
    var t_dicsi               = "<option value=''>-- dicséret --</option>";
    var t_dicsi_1_vsz         = "<option value=''>-- dicséret 1 vsz --</option>";
    var t_dicsi_majdnem_vegig = "<option value=''>-- dicséret utolsó vsz-ig --</option>";
    
    for(var i = 0, n = dalszovegek.length; i < n; i++)
    {
        var dal = dalszovegek[i];
        var div = "";
        switch (dal.tipus)
        {
            case "ifiének":
                t_ifi += "<option value='" + i + "'>" + dal.cim + "</option>\n";
                break;
            case "dicséret":
                t_dicsi += "<option value='" + i + "'>" + dal.sorszam + ". " + dal.cim + "</option>\n";
                break;
            case "dicseret_1_vsz":
                t_dicsi_1_vsz += "<option value='" + i + "'>" + dal.cim + "</option>\n";
                break;
            case "dicseret_majdnem_vegig":
                t_dicsi_majdnem_vegig += "<option value='" + i + "'>" + dal.cim + "</option>\n";
                break;
            default:
                console.log("ilyen típusú ének még nem volt: " + dal.tipus);
                break;
        }
    }
    
    $(".ifienek_valasztasa").html(t_ifi);
    $(".dicseret_valasztasa").html(t_dicsi);
    $(".dicseret_1_vsz_valasztasa").html(t_dicsi_1_vsz);
    $(".dicseret_majdnem_vegig_valasztasa").html(t_dicsi_majdnem_vegig);
}
