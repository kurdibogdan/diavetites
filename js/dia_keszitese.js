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

function diasor_bovitese(uj_diasor)
{
    diasor = diak_osszefuzese(diasor, uj_diasor);
    diasor_megjelenitese();
}
