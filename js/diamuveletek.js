$(document).mouseup(function(e)
{
	var container = $(".dia, .vezerlo_gomb");
	if (!container.is(e.target) && container.has(e.target).length === 0)
	{
		kijelolesek_megszuntetese();
	}
});

function dia_kijelolese(e, dia_id)
{
    if (e.shiftKey == true)
    {
        for(i=0, n=diasor.length; i<n; i++)
        {
            if (diasor[kurzor].kijelolve == true)   // kijelölések összekötése
            {
                if ((dia_id > kurzor && i >= kurzor && i <= dia_id) ||
                    (dia_id < kurzor && i >= dia_id && i <= kurzor))
                {
                    diasor[i].kijelolve = true;
                }
            }
            else if (i == dia_id)    // sima kijelölés
            {
                diasor[i].kijelolve = (diasor[dia_id].kijelolve ? false : true);  // kijelölés megfordítása
            }
            else
            {
                diasor[i].kijelolve = false;
            }
        }
    }
    else if (e.ctrlKey == true)
    {
        diasor[dia_id].kijelolve = (diasor[dia_id].kijelolve ? false : true);  // kijelölés megfordítása
    }
    else
    {
        for(i=0, n=diasor.length; i<n; i++)
        {
            if (i == dia_id)
            {
                diasor[i].kijelolve = (diasor[dia_id].kijelolve ? false : true);  // kijelölés megfordítása
            }
            else
            {
                diasor[i].kijelolve = false;
            }
        }
    }
    
    kurzor = dia_id;
    diasor_megjelenitese();
}

function kijelolt_diak_torlese()
{
    for(var i = diasor.length - 1; i >= 0; i--)
    {
        if (diasor[i].kijelolve == true)
        {
            diasor.splice(i, 1);
        }
    }
    
    kurzor = 0;
    diasor_megjelenitese();
}

function kijelolt_dia_mozgatasa_balra()
{
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        // A szomszédos kijelölések együttmozognak, ezért a hátrébb lévőnek a mögötte lévők számával alacsonyabb helyre kell ugrania.
        var szomszedos_kijelolesek = 0;
        if (diasor[i].kijelolve)
        {
            var j = i;
            while(j >= 0 && diasor[j].kijelolve) j--;
            szomszedos_kijelolesek = i - j;
        }
        diasor[i].sorrend = (i - (diasor[i].kijelolve ? szomszedos_kijelolesek + 0.5 : 0));
    }
    
    diasor.sort(function(a, b)
    {
        return(a.sorrend - b.sorrend);
    });
    
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        diasor[i].sorrend = null;
    }
    
    kurzor = 0;
    diasor_megjelenitese();
}

function kijelolt_dia_mozgatasa_jobbra()
{
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        // A szomszédos kijelölések együttmozognak, ezért a hátrébb lévőnek az előtte lévők számával magasabb helyre kell ugrania.
        var szomszedos_kijelolesek = 0;
        if (diasor[i].kijelolve)
        {
            var j = i;
            while(j < diasor.length && diasor[j].kijelolve) j++;
            szomszedos_kijelolesek = j - i;
        }
        diasor[i].sorrend = (i + (diasor[i].kijelolve ? szomszedos_kijelolesek + 0.5 : 0));
    }
    
    diasor.sort(function(a, b)
    {
        return(a.sorrend - b.sorrend);
    });
    
    for(var i = 0, n = diasor.length; i < n; i++)
    {
        diasor[i].sorrend = null;
    }
    
    kurzor = 0;
    diasor_megjelenitese();
}

function kijelolesek_megszuntetese()
{
    for(var i=0, n=diasor.length; i<n; i++)
    {
        diasor[i].kijelolve = false;
    }
    kurzor = 0;
    diasor_megjelenitese();
}