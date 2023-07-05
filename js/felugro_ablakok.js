var FelugroAblakok = new function()
{
    this.CHROME_ABLAK_Y = 51;
    this.CHROME_ABLAK_X = 1;
    this.popups = [];
    this.popupMonitor = null;
    this.cachedScreens = null;
    this.isSupported = ("getScreens" in window || "getScreenDetails" in window);
    
    this.uj_felugro_ablak_kepernyore = function(kepernyo)
    {
        var szelesseg = Math.floor(kepernyo.availWidth - this.CHROME_ABLAK_X);
        var magassag = Math.floor(kepernyo.availHeight - this.CHROME_ABLAK_Y);
        this.uj_felugro_ablak_megnyitasa
        (
            kepernyo.availLeft,
            kepernyo.availTop,
            szelesseg,
            magassag
        );
    };
    this.uj_felugro_ablak_megnyitasa = function(x, y, szelesseg, magassag)
    {
        const popup = window.open(
            "teszt_felugro_ablak.html", // url
            Math.random().toString(),   // target
            "left=" + x + ","     // features
            + "top=" + y + ","
            + "width=" + szelesseg + ","
            + "height=" + magassag + ","
            + "menubar=no,"
            + "toolbar=no,"
            + "location=no,"
            + "status=no,"
            + "resizable=yes,"
            + "scrollbars=no"
        );
        
        if (!popup)
        {
            for (popup of this.popups) popup.close();
            alert("Engedélyezd a felugró ablakokat!");
        }
        else
        {
            popup.addEventListener("beforeunload", this.onPopupClose);
            popup.addEventListener("click", this.onPopupClick);
            this.popups.push(popup);
        }
        return(popup);
    };
    
    this.felugro_ablakok_teljes_meret_bezarasa = function(e)
    {
        var that = FelugroAblakok;  // a "this" valamiért nem működik
        for (popup of that.popups)
        {
            popup.document.exitFullscreen();
        }
    };
    
    this.onPopupClose = function(e)
    {
        e.preventDefault();
        this.closeAllPopups();
        return(e.returnValue = "This string must be non-empty");
    };
    this.closeAllPopups = function()
    {
        if (this.popups)
        {
            for (popup of this.popups)
            {
                popup.removeEventListener("beforeunload", this.onPopupClose);
                popup.close();
            }
        }
        this.popups = [];
        clearInterval(this.popupMonitor);
    };
    this.checkPopupClose = function()
    {
        for (popup in this.popups)
        {
            if (popup.closed)
            {
                this.closeAllPopups();
                return;
            }
        }
    };
    
    
    
    this.onPopupClick = async function(e)  // felugró ablakra kattintott -> teljes méret
    {
        var that = FelugroAblakok;  // a "this" valamiért nem működik
        const body = e.target.closest("body");      // TODO: Firefox nem találja !!
        teljes_meret_bezarasa(e);
        // for (popup of that.popups)
        // {
        //     if (e.view === popup) continue;     // eredetileg "return;" volt itt, de akkor nem zárja be az ablakot, ha rákattintasz
        //     popup.document.exitFullscreen();
        // }
        try
        {
            if (e.view.document.fullscreenElement)  // ha teljes méretben van
            {
                return(await e.view.document.exitFullscreen());  // kilépés teljes méretből
            }
            
            const screensInterface = await that.getScreensInterfaceInfo(e);
            let thisScreen = screensInterface.screens.filter(screen => screen === screensInterface.currentScreen)[0];
            let otherScreen = screensInterface.screens.filter(screen => screen !== screensInterface.currentScreen)[0];
            if (!otherScreen)   // ha nincs második kijelző, akkor az egyetlen kijelzőt választja ki
            {
                otherScreen = screensInterface.screens[0];
            }
            // await body.requestFullscreen({screen: otherScreen});
            await body.requestFullscreen({screen: thisScreen});
        }
        catch(err)
        {
            console.error(err.name, err.message);
        }
    };

    this.getScreensInfo = async function()  // chrome 100-tól
    {
        var that = FelugroAblakok;        
        if (that.cachedScreens == null)
        {
            if (that.isSupported == true)
            {
                that.cachedScreens = "getScreens" in window
                                   ? await window.getScreens()
                                   : await window.getScreenDetails();
                that.cachedScreens.addEventListener("screenschange", async function(e)
                {
                    console.log("screens change", e);
                    await FelugroAblakok.elmerify();
                });
                that.cachedScreens.addEventListener("currentscreenchange", async function(e)
                {
                    console.log("current screen change", e);
                });
            }
            else
            {
                that.cachedScreens = {screens: [window.screen]};
            }
        }
        return(that.cachedScreens.screens);
    };
    
    this.getScreensInterfaceInfo = async function(e)
    {
        var that = FelugroAblakok;
        const screensInterface = (that.isSupported == true
                                   ? "getScreens" in window
                                     ? await e.view.getScreens()
                                     : await e.view.getScreenDetails()
                                   : {screens: [window.screen]});
        return(screensInterface);
    };
    
    this.elmerify = async function()    // felugró ablakok megnyitása minden képernyőn
    {   
        var that = FelugroAblakok;
        that.closeAllPopups();
        that.popups = [];
        
        if (window.self !== window.top)
        {
            window.open(location.href); //, "", "noopener,noreferrer");
            return;
        }
      
        const kepernyok = await that.getScreensInfo();
        for (kepernyo of kepernyok)
        {
            if (kepernyo.isExtended == true &&
                kepernyo.isPrimary == false)
            {
                console.log("másodlagos képernyő");
                that.uj_felugro_ablak_kepernyore(kepernyo);
            }
            else
            {
                console.log("elsődleges képernyő (teszt)");
                var teszt_kepernyo =
                {
                    availHeight : kepernyo.availHeight * 0.5,
                    availWidth  : kepernyo.availWidth * 0.5,
                    availLeft   : kepernyo.availWidth * 0.25,
                    availTop    : kepernyo.availHeight * 0.25
                };
                that.uj_felugro_ablak_kepernyore(teszt_kepernyo);
            }
        }
      
        that.popupMonitor = setInterval(that.checkPopupClose, 500);  // Workaround for beforeunload event listener not being called; see crbug.com/1153004.
    };
    
    this.konstruktor = async function()
    {
        var that = this;
        await fetch("teszt_felugro_ablak.html");
        document.querySelector("button").addEventListener("click", async function(e)
        {
            await that.elmerify();
        });
        window.addEventListener("beforeunload", that.closeAllPopups);
    };
    
    
    // document.body.addEventListener("load", function()
    // {
    this.konstruktor();
    // });
};

function teljes_meret_bezarasa(e)
{
    FelugroAblakok.felugro_ablakok_teljes_meret_bezarasa(e);
}

async function teljes_meret_megnyitasa(e)
{
    const body = await FelugroAblakok.popups[0].window.document.body;
    body.requestFullscreen();   // még nem működik
    // const body = e.target.closest("body");
    // body.requestFullscreen({screen: FelugroAblakok.popups[0].screen});
    // const screensInterface = await FelugroAblakok.getScreensInterfaceInfo(e);
    // let thisScreen = screensInterface.screens.filter(screen => screen === screensInterface.currentScreen)[0];
    // let otherScreen = screensInterface.screens.filter(screen => screen !== screensInterface.currentScreen)[0];
    // otherScreen = otherScreen || screensInterface.screens[0];   // ha nincs második kijelző, akkor az egyetlen kijelzőt választja ki
    // // body.requestFullscreen();
    // await body.requestFullscreen({screen: otherScreen});
    // await body.requestFullscreen({screen: thisScreen});
}
