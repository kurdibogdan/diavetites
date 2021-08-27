
function z___ppt_keszitese()
{
    // PPTX generátor dokumentációja: https://gitbrent.github.io/PptxGenJS/docs/api-text
    // PPTX PPT-be konvertálása: https://cloudconvert.com/pptx-to-ppt
    // beállítások:
    var szelesseg = 10;         // 25,4 cm = 10 inch
    var magassag  = 5.625;      // 15,87 cm = 6,2480314960629921259842519685039 inch --> 5,625 inch (16:9)

    let pptx = new PptxGenJS();
    pptx.defineLayout(
    {
        name   : 'szélesvásznú',
        width  : szelesseg,
        height : magassag
    });
    pptx.layout = 'szélesvásznú';

    // diák hozzáadása:
    // let kezdolap = pptx.addSlide("kezdőlap")     // localhost-on a chrome nem engedi
    //                    .addImage({path: "kepek/kezdolap.png", x: 0, y: 0, w: '100%', h: '100%'});
    let cimlap = pptx.addSlide("címlap")
                     .addText(
                     [
                        {text: "ISTENTISZTELET", options: {align:'center', color: "#FFFFFF", fontSize:44, breakLine: true}},
                        {text: "2021. augusztus 1.", options: {align:'center', color: "#FFFFFF", fontSize:32, breakLine: false}}
                     ],
                     {
                        x: 0, y: 0, w: '100%', h: '100%',
                        fill: { color: "#008000" }
                     });

    // prezi mentése
    pptx.writeFile(
    {
        fileName: $("#focim_datum").val().replace(/-/g, "") + ".pptx"
    });
}

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
                case "szovegdoboz":
                    var szovegek = [];
                    for(var k = 0, p = obj.szovegek.length; k < p; k++)
                    {
                        var sz = obj.szovegek[k];
                        szovegek.push(
                        {
                            text    : sz.szoveg.replace(/<br>/g, "\n"),
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
                        x      : obj.poz_x     + "%",
                        y      : obj.poz_y     + "%",
                        w      : obj.szelesseg + "%",
                        h      : obj.magassag  + "%",
                        align  : (obj.igazitas_x == "balra"   ? "left" 
                               :  obj.igazitas_x == "jobbra"  ? "right"
                               :  obj.igazitas_x == "kozepre" ? "center"
                               :  "initial"),
                        valign : (obj.igazitas_y == "fent"    ? "top"
                               :  obj.igazitas_y == "kozepre" ? "middle"
                               :  obj.igazitas_y == "lent"    ? "bottom"
                               :  "initial"),
                        shadow :
                        {
                            'type'    : "outer",
                            'angle'   : 45,
                            'blur'    : 1,
                        },
                    });
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
