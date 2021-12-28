var dalszovegek = [];

function dallista_betoltese(callback)
{
    $.post("php/dallista_betoltese.php", function(data)
    {
        dalszovegek = jQuery.parseJSON(data);
        if (typeof callback == "function") callback();
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
