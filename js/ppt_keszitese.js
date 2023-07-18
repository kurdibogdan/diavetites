function ppt_keszitese()
{
    // beállítások:
    let pptx = new PptxGenJS();
    
    // képarányok definiálása:
    var kulcs = DIA_MERET.keparany;
    pptx.defineLayout(
    {
        "name"   : kulcs,
        "width"  : 10,
        "height" : (10 / DIA_MERET.beepitett_keparanyok[kulcs].ertek)
    });
    pptx.layout = kulcs;
    
    var betutipus = BETUBEALLITASOK.betutipusok[BETUBEALLITASOK.kivalasztott_betutipus];
    
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        var dia = pptx.addSlide();
        dia.color = STILUS.betuszin;
        
        if (HATTER.kivalasztott_hatterkep != "semmi")
        {
            dia.background =
            {
                path: "php/kep_letoltese_keparannyal.php?fajl=" 
                      + HATTER.kivalasztott_hatterkep
                      + "&keparany="
                      + DIA_MERET.beepitett_keparanyok[kulcs].ertek
            };
        }
        else
        {
            dia.background = {color: STILUS.hatterszin};
        }
        
        
        
        var objektumok = diasor[i].objektumok;
        for(var j = 0, o = objektumok.length; j < o; j++)
        {
            var obj = objektumok[j];
            switch(obj.tipus)
            {
                case "hatterszin":
                    dia.background = {color: obj.szin};
                    break;
                case "szovegdoboz":
                    var szovegek = [];
                    for(var k = 0, p = obj.szovegek.length; k < p; k++)
                    {
                        var sz = obj.szovegek[k];
                        var szoveg = sz.szoveg.replace(/<br>/g, "\n");
                            szoveg = (sz.nagybetus == true ? szoveg.toUpperCase() : szoveg);
                        szovegek.push(
                        {
                            text    : szoveg,
                            options :
                            {
                                fontSize  : sz.betumeret,
                                fontFace  : sz.betutipus,
                                breakLine : true,
                            }
                        });
                    }
                    
                    dia.addText(szovegek,   // https://gitbrent.github.io/PptxGenJS/docs/api-text
                    {
                        x       : (betutipus.margo_x + obj.poz_x) + "%",
                        y       : (betutipus.margo_y + obj.poz_y) + "%",
                        w       : (obj.szelesseg - betutipus.margo_x * 2) + "%",
                        h       : (obj.magassag - betutipus.margo_y * 2) + "%",
                        align   : (obj.igazitas_x == "balra"   ? "left" 
                                :  obj.igazitas_x == "jobbra"  ? "right"
                                :  obj.igazitas_x == "kozepre" ? "center"
                                :  "initial"),
                        valign  : (obj.igazitas_y == "fent"    ? "top"
                                :  obj.igazitas_y == "kozepre" ? "middle"
                                :  obj.igazitas_y == "lent"    ? "bottom"
                                :  "initial"),        
                        bold    : betutipus.felkover,
                        outline : (betutipus.korvonal ? { size: 2, color: "000000"} : null),
                        shadow  : (betutipus.arnyekolt ? { type: "outer", color: "444444", blur: 4, offset: 3, angle: 45 } : null),
                        lang : "hu-HU",
                    });
                    break;
                case "kep":
                    if (location.hostname != "")
                    {
                        dia.addImage(
                        {
                            path : obj.kep,
                            x    : obj.poz_x,
                            y    : obj.poz_y,
                            w    : obj.szelesseg,
                            h    : obj.magassag,
                            sizing   :
                            {
                                type : 'contain',
                                x    : 0   + "%",
                                y    : 0   + "%",
                                w    : 100 + "%",
                                h    : 100 + "%",
                            }
                        });
                    }
                    else
                    {
                        dia.addText("Itt jelenne meg a '" + obj.kep + "' képfájl, de az oldal nem fér hozzá a gép fájlrendszeréhez. Megoldás: szerverről futtatni (pl. http://mix.metodista.hu)!",
                        {
                            // x        : obj.poz_x     + "%",
                            // y        : obj.poz_y     + "%",
                            // w        : obj.szelesseg + "%",
                            // h        : obj.magassag  + "%",
                            fontFace : "Arial",
                            fontSize : 24,
                            color    : "#00CC00",
                            sizing   :
                            {
                                type : 'contain',
                                x    : obj.poz_x     + "%", 
                                y    : obj.poz_y     + "%",
                                w    : obj.szelesseg + "%",
                                h    : obj.magassag  + "%",
                            }
                        });
                    }
                    break;
                default:
                    console.log("Ilyen típus még nem volt: " + obj.tipus);
                    break;
            }
        }
    }
    
    
    // prezi mentése
    pptx.writeFile(
    {
        fileName: $("#focim_datum").val().replace(/-/g, "") + ".pptx"
    });
}
