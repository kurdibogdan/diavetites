function ppt_keszitese()
{
    // beállítások:
    let pptx = new PptxGenJS();
    pptx.defineLayout(
    {
        name   : 'szélesvásznú',
        width  : 10,
        height : 5.625
    });
    pptx.layout = 'szélesvásznú';
    
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        var dia = pptx.addSlide();
        dia.color      = STILUS.betuszin;
        dia.background = {color: STILUS.hatterszin};
        
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
                        x       : obj.poz_x     + "%",
                        y       : obj.poz_y     + "%",
                        w       : obj.szelesseg + "%",
                        h       : obj.magassag  + "%",
                        align   : (obj.igazitas_x == "balra"   ? "left" 
                                :  obj.igazitas_x == "jobbra"  ? "right"
                                :  obj.igazitas_x == "kozepre" ? "center"
                                :  "initial"),
                        valign  : (obj.igazitas_y == "fent"    ? "top"
                                :  obj.igazitas_y == "kozepre" ? "middle"
                                :  obj.igazitas_y == "lent"    ? "bottom"
                                :  "initial"),
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
