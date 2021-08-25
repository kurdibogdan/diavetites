var dalszovegek = 
[
    {
        "cim"    : "Szentlélek jöjj",
        "tipus"  : "ifiének",
        "szoveg" :
        [
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj el élő vízforrás,"          ,
                "Jöjj, a szívünk Téged vár!"      ,
                "Jöjj, ki fényt adsz lelkünknek," ,
                "Jöjj, úgy vágyunk Rád!",
            ],
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj igazság forrása,"           ,
                "Jöjj, imádunk mindnyájan!"       ,
                "Jöjj, reményünk éleszd fel,"     ,
                "Jöjj kegyelmeddel!",
            ],
            [
                "Szentlélek jöjj, lobogó láng,"   ,
                "Szentlélek jöjj, a világ vár."   ,
                "Szentlélek jöjj, viharos szél,"  ,
                "Jöjj, áradj szét."               ,
                ""                                ,
                "Jöjj, a néped gyűjtsd egybe,"    ,
                "Jöjj, az alvót ébreszd fel!"     ,
                "Jöjj, a bűntől tisztíts meg,"    ,
                "Bátoríts minket!"
            ]
        ]
    },
    {
        "cim"    : "496. Urunk, add Lelkedet",
        "tipus"  : "dicséret",
        "szoveg" :
        [
            [
                "496."                         ,
                "Urunk add lelkedet,"          ,
                "Újítsd meg népedet."          ,
                "Lélek gyümölcse,"             ,
                "szívünket töltse"             ,
                "Láttassék bőviben életünkön!" ,
                "Szeretet, békesség,"          ,
                "Szent öröm, jóság,"           ,
                "Türelem, szelídség,"          ,
                "Hűség, józanság"              ,
                "Láttassék bőviben életünkön!"
            ]
        ]
    },
    {
        "cim"    : "47. Ó, hála az Úrnak",
        "tipus"  : "dicseret_1_vsz",
        "szoveg" :
        [
            [
                "47.",
                "Ó, hála az Úrnak, zengjünk neki hát,",
                "Mert úgy szeretett, hogy od'adta Fiát",
                "A kínra, halálra küldötte el Őt,",
                "Megnyitni a Mennyet a bűnös előtt."
            ],
            [
                "Szívem áldd a Királyt, az Övé ez a föld!",
                "Szívem áldd a Királyt, neve mindent betölt!",
                "Jöjj bűnös az Úrhoz! Jöjj, Jézus az út!",
                "Ó, vedd be szívedbe a drága Fiút!"
            ]
        ]
    },
    {
        "cim"    : "502. Az Úr szent bárányára",
        "tipus"  : "dicseret_majdnem_vegig",
        "szoveg" : 
        [
            [
                "502.",
                "1. Az Úr szent Bárányára",
                "Teszem le bűnömet,",
                "S ott a kereszt aljába‘",
                "Békességet lelek."
            ],
            [
                "A szívem mindenestül ",
                "Az Úr elé viszem.",
                "Megtisztul minden szennytől ",
                "A Jézus vériben.",
                "A Jézus vériben."
            ],
            [
                "2. Megtörve és üresen ",
                "Adom magam neki,",
                "Hogy újjá Ő teremtsen, ",
                "Az űrt Ő töltse ki."
            ],
            [
                "Minden gondom, keservem ",
                "Az Úrnak átadom.",
                "Ő hordja minden terhem, ",
                "Eltörli bánatom.",
                "Eltörli bánatom.",
            ],
            [
                "3. Örök kőszálra állva ",
                "A lelkem megpihen.",
                "Nyugszom Atyám házába’, ",
                "Jézus kegyelmiben."
            ],
            [
                "Az Ő nevét imádom ",
                "Most mindenekfelett.",
                "Jézus az én Királyom, ",
                "Imámra felelet.",
                "Imámra felelet."
            ],
        ],
        "utolso" :
        [
            [
                "4. Szeretnék lenni, mint Ő:",
                "Alázatos, szelíd.",
                "Követni híven, mint Ő,",
                "Atyám parancsait."
            ],
            [
                "Szeretnék lakni nála, ",
                "Hol mennyei sereg",
                "Dicső harmóniába’",
                "Örök imát rebeg!",
                "Örök imát rebeg!"
            ]
        ]
    },
];

function dallista_betoltese()
{
    var t_ifi                 = "<option value=''>-- ifiének --</option>";
    var t_dicsi               = "<option value=''>-- dicséret --</option>";
    var t_dicsi_1_vsz         = "<option value=''>-- dicséret 1 vsz --</option>";
    var t_dicsi_majdnem_vegig = "<option value=''>-- dicséret utolsó előtti vsz-ig --</option>";
    
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
                t_dicsi += "<option value='" + i + "'>" + dal.cim + "</option>\n";
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
