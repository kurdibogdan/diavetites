function diak_osszefuzese(d1, d2)
{
    var d12 = [];
    
    // Ha üres oldallal végződik az egyik, és a másik is üres oldallal kezdődik, 
    // akkor csak 1 üres oldalt hagy meg a kettő között:
    if (d1.length > 0 &&
        d2.length > 0 &&
        d1[d1.length-1].objektumok.length == 0 &&
        d2[0].objektumok.length == 0)
    {
        d12 = d1.concat(d2.slice(1));
    }
    else
    {
        d12 = d1.concat(d2);
    }
    
    return(d12);
}

function dia_keszitese_cim(cim)
{
    diasor = diak_osszefuzese(diasor, Diasor_Cim(cim));
    diasor_megjelenitese();
}

function dia_keszitese_sajat_cim(cim_mezo)
{
    diasor = diak_osszefuzese(diasor, Diasor_Cim($("#" + cim_mezo).val()));
    diasor_megjelenitese();
}

function dia_keszitese_dalszoveg(valaszto_mezo)
{
    diasor = diak_osszefuzese(diasor, Diasor_Dalszoveg($("#" + valaszto_mezo).val()));
    diasor_megjelenitese();
}

function dia_keszitese_ige_cimmel(cim, ige_mezo)
{
    diasor = diak_osszefuzese(diasor, Diasor_Igehely_Cimmel(cim, $("#" + ige_mezo).val()));
    diasor_megjelenitese();
}

function dia_keszitese_specialisan(tipus)
{
    switch(tipus)
    {
        case "musorszunet":
            diasor = diak_osszefuzese(diasor, Diasor_Musorszunet());
            break;
        case "focim":
            diasor = diak_osszefuzese(diasor, Diasor_Focim($("#focim_datum").val()));
            break;
        case "urvacsora": 
            diasor = diak_osszefuzese(diasor, Diasor_Urvacsora());
            break;
        case "urvacsora_enek_utolso_versszaka":
            // TODO
            break;
        default:
            console.log("ilyen típusú dia még nem volt: " + tipus);
            break;
    }
    
    diasor_megjelenitese();
}
