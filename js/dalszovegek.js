var dalszovegek = [];

function dallista_betoltese()
{        
    $.post("php/dallista_betoltese.php", function(data)
    {
        dalszovegek = jQuery.parseJSON(data);
        
        var t_ifi                 = "<option value=''>-- ifiének --</option>";
        var t_dicsi               = "<option value=''>-- dicséret --</option>";
        var t_dicsi_1_vsz         = "<option value=''>-- dicséret 1 vsz --</option>";
        var t_dicsi_majdnem_vegig = "<option value=''>-- dicséret utolsó előtti vsz-ig --</option>";
        
        for(var i = 0, n = dalszovegek.length; i < n; i++)
        {
            var dal = dalszovegek[i];
            switch (dal.tipus)
            {
                case "ifiének":
                    t_ifi += "<option value='" + dal.id + "'>" + dal.cim + "</option>\n";
                    break;
                case "dicséret":
                    t_dicsi += "<option value='" + dal.id + "'>" + dal.sorszam + ". " + dal.cim + "</option>\n";
                    break;
                case "dicseret_1_vsz":
                    t_dicsi_1_vsz += "<option value='" + dal.id + "'>" + dal.cim + "</option>\n";
                    break;
                case "dicseret_majdnem_vegig":
                    t_dicsi_majdnem_vegig += "<option value='" + dal.id + "'>" + dal.cim + "</option>\n";
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
    });
}
    
function dalszoveg_betoltese(dalszoveg_id, callback)
{
    $.post("php/dalszoveg_betoltese.php", {dalszoveg_id: dalszoveg_id}, function(data)
    {
        data = jQuery.parseJSON(data);
        if (typeof callback == "function") callback(data);
    });
}
