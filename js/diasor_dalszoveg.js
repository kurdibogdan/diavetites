function Diasor_Dalszoveg(kivalasztott_enek)
{
    console.log(kivalasztott_enek);
    var dalszoveg    = dalszovegek[kivalasztott_enek].szoveg;
    var dalszoveg_diai = [];
    
    dalszoveg_diai.push([{"tipus" : "ures"}]);
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
                    "betumeret" : 32,   // pt
                    "betutipus" : "Sylfaen"
                },
            ]
        };
        
        var dia = [szovegdoboz];
        dalszoveg_diai.push(dia);
    }
    dalszoveg_diai.push([{"tipus" : "ures"}]);
    
    return(dalszoveg_diai);
}
