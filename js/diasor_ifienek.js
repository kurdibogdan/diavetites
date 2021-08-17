function Diasor_Ifienek(kivalasztott_enek)
{
    var dalszoveg    = dalszovegek[kivalasztott_enek].szoveg;
    var ifienek_diai = [];
    
    for(var i=0, n=dalszoveg.length; i<n; i++)
    {
        var szovegdoboz =
        {
            "tipus"      : "szovegdoboz",
            "poz_x"      : 4,           // % (~ 1 cm)
            "poz_y"      : 13,          // % (~ 1 cm)
            "szelesseg"  : 96,          // % (100% - 1 cm)
            "magassag"   : 87,          // % (100% - 1 cm)
            "igazitas_x" : "balra",
            "igazizas_y" : "fent",
            "szovegek"   :
            [
                {
                    "szoveg"    : dalszoveg[i].join("\n"),
                    "betumeret" : 32,        // pt
                },
            ]
        };
        
        var dia = [szovegdoboz];
        ifienek_diai.push(dia);
    }
    
    return(ifienek_diai);
}