function Diasor_Urvacsora()
{
    var urvacsora_diai = 
    [   // diak
        [   // 1 dia objektumokkal
            {   // 1 objektum
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
                        "szoveg"    : "Lelkész:",
                        "betumeret" : 32,        // pt
                        "felkover"  : true
                    },
                    {
                        "szoveg"    : "A mi Urunk Jézus Krisztus így szól: Jöjjetek énhozzám mindnyájan, akik "
                                    + "megfáradtatok és meg vagytok terhelve, és én megnyugvást adok nektek. (Mt 11,28) "
                                    + "Tőle kaptuk ezt az ígéretet, és most asztalához hív bennünket. Előbb azonban "
                                    + "valljuk meg bűneinket a szent Isten előtt.",
                        "betumeret" : 32        // pt
                    }
                ]
            }
        ],
        [
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
                        "szoveg"    : "Gyülekezet:",
                        "betumeret" : 32,        // pt
                        "felkover"  : true,
                        "dolt"      : true
                    },
                    {
                        "szoveg"    : "Mi Urunk és Istenünk, mindenek teremtője. Életünk és gyülekezetünk élete "
                                    + "nincs elrejtve előtted. Megvalljuk, hogy vétkeztünk ellened gondolatban, "
                                    + "szóval és cselekedettel. Megvalljuk, hogy sokszor nem figyeltünk szeretetedre, "
                                    + "és parancsolataidra, és teret engedtünk a szeretetlenségnek.",
                        "betumeret" : 32,      // pt
                        "dolt"      : true
                    }
                ]
            }
        ],
    ];
    
    return(urvacsora_diai);
}