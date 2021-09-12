import re
import json
from os import listdir
from os.path import isfile, join

def cim_formazasa(cim):
    return(re.sub(r"[^a-zA-Z]+$", "", cim))

def sorszam_fajlnev_osszehasonlitasa(fajlnev, sorszam):
    sorszam3 = ""
    if sorszam < 10:
        sorszam3 = "00" + str(sorszam)
    elif sorszam < 100:
        sorszam3 = "0" + str(sorszam)
    else:
        sorszam3 = str(sorszam)
    fajlnev_szoveg_alapjan = "converted-" + sorszam3 + ".txt"
    if fajlnev != fajlnev_szoveg_alapjan:
        print("Nem jó a fájl neve? (" + fajlnev + " != " + fajlnev_szoveg_alapjan)

''' ITT KEZDŐDIK '''
tipus       = 'dicséret'   # dicséret vagy ifiének
utvonal     = './txt/'
kimenet     = 'php'        # php vagy js
dalszovegek = []
for fajlnev in listdir(utvonal):
    teljes_utvonal = join(utvonal, fajlnev)
    if isfile(teljes_utvonal):
        print(fajlnev)
        
        # Fájlnévből sorszám kitalálása:
        sorszam_fajlnevbol = 0
        m = re.search(r"([0-9]+)", fajlnev)
        if m != None:
            sorszam_fajlnevbol = int(m.groups(0)[0])
        
        # Fájlnévből cím kitalálása:
        cim_fajlnevbol = ''
        m = re.search("converted-[()0-9 ]*(.*?)$", fajlnev)
        if m != None:
            cim_fajlnevbol = m.groups(0)[0].strip()
        
        with open(teljes_utvonal,  mode='r', encoding='utf-8') as fajl:
            sorszam  = 0
            tartalom = fajl.read()
            diak     = tartalom.split("")      # speciális karakterek mentén feldaraboljuk
            if len(diak[0]) == 0:               # üres diát levágjuk az elejéről
                diak = diak[1:]
            
            # az első dia első sorából kivesszük a sorszámot, aztán töröljük a sort
            sorok = diak[0].splitlines()
            m     = re.search(r"^([0-9]+)[.\s]*$", sorok[0])
            if m is not None:
                sorszam = int(m.groups(0)[0])   # ugyanaz, mint a fájl neve
                sorszam_fajlnev_osszehasonlitasa(fajlnev, sorszam)
                sorok = sorok[1:]               # sorszám teljes sorát levágjuk az elejéről
            cim     = cim_formazasa(sorok[0])   # a cím az első sor lesz írásjelek nélkül
            diak[0] = "\n".join(sorok)          # felülírjuk az első diát
            
            
            # diák feldarabolása sorokra:
            szurt_diak = []
            for dia in diak:
                sorok       = dia.splitlines()
                szurt_sorok = []
                van_szoveg  = False
                for sor in reversed(sorok):
                    if van_szoveg == False and\
                       len(sor.strip()) > 0:
                        van_szoveg = True
                    if van_szoveg:
                        szurt_sorok.append(sor)
                szurt_sorok.reverse()
                
                if szurt_sorok != None and\
                   len(szurt_sorok) > 0:
                    szurt_diak.append(szurt_sorok)
            diak = szurt_diak
            
            # elmentjük a dalszöveget címmel:
            if tipus == 'dicséret':
                dalszoveg_obj = {'cim' : cim, 'tipus': 'dicséret', 'sorszam': sorszam, 'cim_fajlnevbol': '', 'szoveg': diak}
            elif tipus == 'ifiének':
                dalszoveg_obj = {'cim' : cim, 'tipus': 'ifiének', 'sorszam': sorszam_fajlnevbol, 'cim_fajlnevbol': cim_fajlnevbol, 'szoveg': diak}
            else:
                print('HIBA: ismeretlen típus')
            dalszovegek.append(dalszoveg_obj)

with open("dalszovegek_generalt." + kimenet, "w", encoding="utf-8") as f:
    if kimenet == 'js':
        f.write("var dalszovegek =\n" + json.dumps(dalszovegek, indent=4) + ";")
    elif kimenet == 'php':
        objektumok = []
        for dalszoveg in dalszovegek:
            t = 'array\n' \
               + '(\n' \
               + '    "cim"            => "' + str(dalszoveg['cim']) + '",\n' \
               + '    "tipus"          => "' + str(dalszoveg['tipus']) + '",\n' \
               + '    "sorszam"        => "' + str(dalszoveg['sorszam']) + '",\n' \
               + '    "cim_fajlnevbol" => "' + str(dalszoveg['cim_fajlnevbol']) + '",\n' \
               + '    "szoveg"         => "'
             # + '    "cim"            => "' + json.dumps(str(dalszoveg['cim'])).strip('"') + '",\n' # ha a címet is kódolni kell
            
            versszakok = []
            for versszak in dalszoveg['szoveg']:
                for i in range(len(versszak)):
                    versszak[i] = json.dumps(versszak[i]).strip('"')
                versszakok.append('\n'.join(versszak))
            t += '\n\n'.join(versszakok) \
               + '"\n' \
               + ')'
            objektumok.append(t)
        t = '<?php\n' \
          + '$dalszovegek = array' \
          + '(\n' \
          + ',\n'.join(objektumok) \
          + '\n' \
          + ');\n' \
          + '?>\n'
        f.write(t)
    else:
        print('HIBA: ismeretlen kimenet')