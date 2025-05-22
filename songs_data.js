const songs = [
  {
    "title": "The Lost Sock Saga",
    "audio": "music/The Lost Sock Saga.mp3",
    "lyrics": "lyrics/The Lost Sock Saga.txt",
    "image": "cover/The Lost Sock Saga.jpg",
    "style": "country"
  },
  {
    "title": "Un mēs braucam",
    "audio": "music/un mēs braucam.mp3",
    "lyrics": "lyrics/Un mēs braucam.txt",
    "image": "cover/Un mēs braucam.jpg",
    "style": "metal, melodic, progressive metal, synth, nu metal"
  },
  {
    "title": "There are prisoners trapped between clocks",
    "audio": "music/There are prisoners trapped between cloc.mp3",
    "lyrics": "lyrics/There are prisoners trapped between cloc.txt",
    "image": "cover/There are prisoners trapped between clocks.jpg",
    "style": "hip hop, Conscious hip hop, east coast"
  },
  {
    "title": "We are driving",
    "audio": "music/We are driving past trees.mp3",
    "lyrics": "lyrics/We are driving past trees.txt",
    "image": "cover/We are driving.jpg",
    "style": "country, country like 1970's"
  },
   {
    "title": "Yesterday I searched for future's perfection",
    "audio": "music/Yesterday I searched for future's perfec.mp3",
    "lyrics": "lyrics/1.txt",
    "image": "cover/Yesterday I searched for future's perfect.jpg",
    "style": "metal, progresive metal"
  },
   {
    "title": "Dziesmiņa par puteklīti",
    "audio": "music/Dziesmina par putekliti.mp3",
    "lyrics": "lyrics/Dziesmina par putekliti.txt",
    "image": "cover/Dziesmiņa par puteklīti.jpg",
    "style": "metal, progresive metal"
  },
  {
    "title": "Whispers fall",
    "audio": "music/Whispers fall.mp3",
    "lyrics": "lyrics/Whispers fall.txt",
    "image": "cover/Whispers fall.jpg",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Putekļi krīt",
    "audio": "music/Putekļi krīt.mp3",
    "lyrics": "lyrics/Putekļi krīt.txt",
    "image": "cover/Putekļi krīt.jpg",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Where roads crumble softly underfoot",
    "audio": "music/Where roads crumble softly underfoot.mp3",
    "lyrics": "lyrics/Where roads crumble softly underfoot.txt",
    "image": "cover/Where roads crumble softly underfoot.jpg",
    "style": "blues, dark blues"
  },
  {
    "title": "You swept me like ashes",
    "audio": "music/You swept me like ashes.mp3",
    "lyrics": "lyrics/You swept me like ashes.txt",
    "image": "cover/You swept me like ashes.jpg",
    "style": "rock, Symphonic Rock, Post-Rock, Progressive Metal, Alternative Rock, Cinematic"
  },
  {
    "title": "Organic House III",
    "audio": "music/Organic House III.mp3",
    "lyrics": "lyrics/Organic House III.txt",
    "image": "cover/Organic House III.jpg",
    "style": "house, Organic House, Progressive Melodic Techno, Tech-House"
  },
  {
    "title": "Organic House VII",
    "audio": "music/Organic House VII.mp3",
    "lyrics": "lyrics/Organic House VII.txt",
    "image": "cover/Organic House VII.jpg",
    "style": "house, Organic House, Tribal Drums, Punchy Kick, Groove-focused Hi-hats, Atmospheric Pads, Afro-inspired percussion"
  },
  {
    "title": "Kurzemes rezidence",
    "audio": "music/Kurzemes_rezidence.mp3",
    "lyrics": "lyrics/Kurzemes_rezidence.txt",
    "image": "cover/Kurzemes_rezidence.jpg",
    "style": "country, Americana, folk, western, bluegrass influences, country storytelling, warm acoustic textures"
  },
  {
    "title": "Wheels are turning, morning's gold",
    "audio": "music/Wheels are turning, morning's gold.mp3",
    "lyrics": "lyrics/Wheels are turning, morning's gold.txt",
    "image": "cover/Wheels are turning, morning's gold.jpg",
    "style": "country, Americana, folk, western, bluegrass influences, Traditional Country, Folk Country, acoustic-driven rhythm, storytelling lyrics"
  },
  {
    "title": "Dusty paths wind through the rye",
    "audio": "music/Dusty paths wind through the rye.mp3",
    "lyrics": "lyrics/Dusty paths wind through the rye.txt",
    "image": "cover/Dusty paths wind through the rye.jpg",
    "style": "country, Americana, folk, western, bluegrass influences, Traditional Country "
  },
  {
    "title": "Rust on the rails and grass in the ties",
    "audio": "music/Rust on the rails and grass in the ties.mp3",
    "lyrics": "lyrics/Rust on the rails and grass in the ties.txt",
    "image": "cover/Rust on the rails and grass in the ties.jpg",
    "style": "country, Americana Folk with Traditional Country and Western influence"
  },
  {
    "title": "Riteņi minas pa ceļu, kas nav",
    "audio": "music/Riteņi minas pa ceļu, kas nav.mp3",
    "lyrics": "lyrics/Riteņi minas pa ceļu, kas nav.txt",
    "image": "cover/Riteņi minas pa ceļu, kas nav.jpg",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Ridin' hard on a frozen track",
    "audio": "music/Ridin' hard on a frozen track.mp3",
    "lyrics": "lyrics/Ridin' hard on a frozen track.txt",
    "image": "cover/Ridin' hard on a frozen track.jpg",
    "style": "country, icy outlaw country male singer reverb echo country band up-tempo"
  },
  {
    "title": "Ich spür’ dein Herz, es schlägt so kalt",
    "audio": "music/Ich spür’ dein Herz, es schlägt so kalt.mp3",
    "lyrics": "lyrics/Ich spür’ dein Herz, es schlägt so kalt.txt",
    "image": "cover/Ich spür’ dein Herz, es schlägt so kalt.jpg",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche"
  },
  {
    "title": "Die letzte Straßenbahn nach Riga",
    "audio": "music/Die letzte Straßenbahn nach Riga.mp3",
    "lyrics": "lyrics/Die letzte Straßenbahn nach Riga.txt",
    "image": "cover/Die letzte Straßenbahn nach Riga.jpg",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche Härte, Darkwave, Post-Industrial "
  },
  {
    "title": "Muris",
    "audio": "music/Muris.mp3",
    "lyrics": "lyrics/Muris.txt",
    "image": "cover/muris.jpg",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche Härte, Darkwave"
  },
  {
    "title": "Sous mes bottes, la poussière chante",
    "audio": "music/Sous mes bottes, la poussière chante.mp3",
    "lyrics": "lyrics/Sous mes bottes, la poussière chante.txt",
    "image": "cover/Sous mes bottes, la poussière chante.jpg",
    "style": "blues, Acoustic Blues Glitch Hop"
  },
  {
    "title": "In der Ecke liegt der Staub",
    "audio": "music/In der Ecke liegt der Staub.mp3",
    "lyrics": "lyrics/In der Ecke liegt der Staub.txt",
    "image": "cover/In der Ecke liegt der Staub.jpg",
    "style": "blues, Dreamy Fife And Drum Blues"
  },
  {
    "title": "Steel und Blut",
    "audio": "music/Steel und Blut.mp3",
    "lyrics": "lyrics/Steel und Blut.txt",
    "image": "cover/Steel und Blut.jpg",
    "style": "industrial, Breakstep Synthwave / Dark Electro / Industrial Fusion"
  },
  {
    "title": "Ich bin Staub",
    "audio": "music/Ich bin Staub.mp3",
    "lyrics": "lyrics/Ich bin Staub.txt",
    "image": "cover/Ich bin Staub.jpg",
    "style": "rock, Melancholic Neue Deutsche Härte / Dark Electro Rock / Synth-Gothic"
  },
  {
    "title": "I open my eyes",
    "audio": "music/I open my eyes.mp3",
    "lyrics": "lyrics/I open my eyes.txt",
    "image": "cover/I open my eyes.jpg",
    "style": "synthwave, Dark Synthwave, Industrial Darkwave, Neue Deutsche Härte, Aggrotech, Dark Electro"
  },
  {
    "title": "Ma kõnnin tolmus",
    "audio": "music/Ma kõnnin tolmus.mp3",
    "lyrics": "lyrics/Ma kõnnin tolmus.txt",
    "image": "cover/Ma kõnnin tolmus.jpg",
    "style": "synthwave, Dark Synthwave, Industrial Darkwave, Neue Deutsche Härte, Aggrotech, Dark Electro"
  },
  {
    "title": "Oh little Button, scared and small",
    "audio": "music/Oh little Button, scared and small.mp3",
    "lyrics": "lyrics/Oh little Button, scared and small.txt",
    "image": "cover/Oh little Button, scared and small.jpg",
    "style": "country, americana country, western, bluegrass influences"
  },
  {
    "title": "Dust in my mouth",
    "audio": "music/Dust in my mouth.mp3",
    "lyrics": "lyrics/Dust in my mouth.txt",
    "image": "cover/Dust in my mouth.jpg",
    "style": "country, Americana, cowpunk"
  },
  {
    "title": "The Button",
    "audio": "music/The Button.mp3",
    "lyrics": "lyrics/The Button.txt",
    "image": "cover/The Button.jpg",
    "style": "country, road trip country, front porch stompin"
  },
  {
    "title": "Dust and Silver",
    "audio": "music/dust_and_silver.mp3",
    "lyrics": "lyrics/dust_and_silver.txt",
    "image": "cover/Dust and Silver.jpg",
    "style": "country, Classic Country / Honky-Tonk / Storytelling Country"
  },
  {
    "title": "Old Man and a Hundred Dreams",
    "audio": "music/Old Man and a Hundred Dreams.mp3",
    "lyrics": "lyrics/Old Man and a Hundred Dreams.txt",
    "image": "cover/Old Man and a Hundred Dreams.jpg",
    "style": "country, Classic Country / Honky-Tonk / Storytelling Country"
  },
  {
    "title": "Sunday Train",
    "audio": "music/Sunday Train.mp3",
    "lyrics": "lyrics/Sunday Train.txt",
    "image": "cover/Sunday Train.jpg",
    "style": "country, Country Train Beat"
  },
  {
    "title": "Два дні їдемо крізь пил",
    "audio": "music/Два дні їдемо крізь пил.mp3",
    "lyrics": "lyrics/Два дні їдемо крізь пил.txt",
    "image": "cover/Два дні їдемо крізь пил.jpg",
    "style": "rock, Ukrainian Post-Rock, Ukrainian Indie Rock, Ukrainian New Wave, Alternative folk rock"
  },
  {
    "title": "Crows return on shattered wings",
    "audio": "music/Crows return on shattered wings.mp3",
    "lyrics": "lyrics/Crows return on shattered wings.txt",
    "image": "cover/Crows return on shattered wings.jpg",
    "style": "darkwave, Coldwave, Minimal Synth, Post-Rock (very atmospheric)"
  },
  {
    "title": "After the autumn sadness",
    "audio": "music/After the autumn sadness.mp3",
    "lyrics": "lyrics/After the autumn sadness.txt",
    "image": "cover/After the autumn sadness.jpg",
    "style": "cabaret, Spoken Word, Dark Cabaret, Post-Punk, Experimental Poetry, Art Rock"
  },
  {
    "title": "We don’t fight wars",
    "audio": "music/We don’t fight wars.mp3",
    "lyrics": "lyrics/We don’t fight wars.txt",
    "image": "cover/We don’t fight wars.jpg",
    "style": "cabaret, Theatrical Falsetto Punk, Dark Cabaret, Brechtian Punk Cabaret"
  },
  {
    "title": "Lai dzīvo puritānisms",
    "audio": "music/lai dzīvo puritānisms.mp3",
    "lyrics": "lyrics/lai dzīvo puritānisms.txt",
    "image": "cover/Lai dzīvo puritānisms.jpg",
    "style": "cabaret, Theatrical Falsetto Punk, Dark Cabaret, Brechtian Punk Cabaret"
  },
  {
    "title": "When all the fucking ropes snap",
    "audio": "music/When all the fucking ropes snap.mp3",
    "lyrics": "lyrics/When all the fucking ropes snap.txt",
    "image": "cover/When all the fucking ropes snap.jpg",
    "style": "industrial, Gothic Folk, Lo-Fi Spoken Apocalypse, Angry Industrial Beat poetry"
  },
  {
    "title": "Sanctus, sanctus, Sanctus Algorithmus",
    "audio": "music/Sanctus, sanctus, Sanctus Algorithmus.mp3",
    "lyrics": "lyrics/Sanctus, sanctus, Sanctus Algorithmus.txt",
    "image": "cover/Sanctus, sanctus, Sanctus Algorithmus.jpg",
    "style": "cabaret, Gregorian Trap, Experimental Spoken Word, Absurdist Cabaret, Minimal wave"
  },
  {
    "title": "Smoke in the mirror",
    "audio": "music/Smoke in the mirror2.mp3",
    "lyrics": "lyrics/Smoke in the mirror2.txt",
    "image": "cover/Smoke in the mirror.jpg",
    "style": "rock, Rustbelt Rock, Post-Apocalyptic Americana, Ukrainian Resistance rock"
  },
  {
    "title": "The Deal Was Clean",
    "audio": "music/The Deal Was Clean.mp3",
    "lyrics": "lyrics/The Deal Was Clean.txt",
    "image": "cover/The Deal Was Clean.jpg",
    "style": "country, Dark Americana, Outlaw Folk Rock, Protest Blues, Spoken Gothic Country"
  },
  {
    "title": "I was born",
    "audio": "music/I was born.mp3",
    "lyrics": "lyrics/I was born.txt",
    "image": "cover/I was born.jpg",
    "style": "synthpop, Industrial Synthpop, Brechtian Electro-Cabaret, Shockwave Gothic Glam"
  },
  {
    "title": "He loved the burn",
    "audio": "music/He loved the burn.mp3",
    "lyrics": "lyrics/He loved the burn.txt",
    "image": "cover/He loved the burn.jpg",
    "style": "cabaret, Industrial Doom Cabaret, Electro-Goth March, Post-Apocalyptic Torch Song"
  },
  {
    "title": "Out by the edge of the pinewood trail",
    "audio": "music/Out by the edge of the pinewood trail.mp3",
    "lyrics": "lyrics/Out by the edge of the pinewood trail.txt",
    "image": "cover/Out by the edge of the pinewood trail.jpg",
    "style": "country, Southern Gothic Country / Murder Ballad Americana"
  },
  {
    "title": "I should sort through my papers",
    "audio": "music/I should sort through my papers.mp3",
    "lyrics": "lyrics/I should sort through my papers.txt",
    "image": "cover/I should sort through my papers.jpg",
    "style": "country, existential country blues, slowcore folk noir, minimalist outlaw Americana"
  },
  {
    "title": "Laika ziņas",
    "audio": "music/Radio teic laika ziņas.mp3",
    "lyrics": "lyrics/Radio teic laika ziņas.txt",
    "image": "cover/Laika ziņas.jpg",
    "style": "rock, Latvian blues rock"
  },
  {
    "title": "A Little Song for Joy",
    "audio": "music/A Little Song for Joy.mp3",
    "lyrics": "lyrics/A Little Song for Joy.txt",
    "image": "cover/A Little Song for Joy.jpg",
    "style": "country, country gospel, southern gothic, americana, dark folk"
  },
  {
    "title": "Broken Chain Anthem",
    "audio": "music/Broken Chain Anthem.mp3",
    "lyrics": "lyrics/Broken Chain Anthem.txt",
    "image": "cover/Broken Chain Anthem.jpg",
    "style": "synthpop, post-punk/grunge, industrial synthpop"
  },
  {
    "title": "Some fucking nature scene",
    "audio": "music/Some fucking nature scene.mp3",
    "lyrics": "lyrics/Some fucking nature scene.txt",
    "image": "cover/Some fucking nature scene.jpg",
    "style": "blues, Dirty noir-blues, slow-burning tempo, baritone snarl, cracked and nicotine-drenched voice"
  },
  {
    "title": "A Hundred Kilometres",
    "audio": "music/I started rollin’ early, sun just touchi.mp3",
    "lyrics": "lyrics/I started rollin’ early, sun just touchi.txt",
    "image": "cover/A Hundred Kilometres.jpg",
    "style": "country, outlaw country, Americana, folk"
  },
  {
    "title": "Ich zähle jeden Atemzug",
    "audio": "music/Ich zähle jeden Atemzug.mp3",
    "lyrics": "lyrics/Ich zähle jeden Atemzug.txt",
    "image": "cover/Ich zähle jeden Atemzug.jpg",
    "style": "industrial, industrial rock, gothic metal, dark electro"
  },
  {
    "title": "One Last Time - Burn It Down",
    "audio": "music/Wrong shoes, wrong night.mp3",
    "lyrics": "lyrics/Wrong shoes, wrong night.txt",
    "image": "cover/One Last Time.jpg",
    "style": "electro, dark electro, industrial pop, coldwave"
  },
  {
    "title": "The Old Cat Walks",
    "audio": "music/Red dusk falls on his tired face.mp3",
    "lyrics": "lyrics/Red dusk falls on his tired face.txt",
    "image": "cover/The Old Cat Walks.jpg",
    "style": "rock, melodic dark rock, industrial-infused alt rock, gritty synth rock, post-punk shading"
  },
  {
    "title": "Awake to Be Happy",
    "audio": "music/You lit me up, then walked away.mp3",
    "lyrics": "lyrics/You lit me up, then walked away.txt",
    "image": "cover/Awake to Be Happy.jpg",
    "style": "jazz, Dark Jazz, pulsing electronic beats"
  },
  {
    "title": "You fucked, you ran, you left the light",
    "audio": "music/You fucked, you ran, you left the light.mp3",
    "lyrics": "lyrics/You fucked, you ran, you left the light.txt",
    "image": "cover/You fucked, you ran, you left the light.jpg",
    "style": "jazz, dirty techno-jazz, Dark Jazz, pulsing electronic beats"
  },
  {
    "title": "I’m the Fuckin’ Cat",
    "audio": "music/I don’t knead, I don’t purr, I don’t play.mp3",
    "lyrics": "lyrics/I don’t knead, I don’t purr, I don’t play.txt",
    "image": "cover/I’m the Fuckin’ Cat.jpg",
    "style": "country, dark outlaw country, murderfolk, gothic Americana"
  },
  {
    "title": "Ash and Velvet",
    "audio": "music/She stitched my name in a coat of smoke.mp3",
    "lyrics": "lyrics/She stitched my name in a coat of smoke.txt",
    "image": "cover/Ash and Velvet.jpg",
    "style": "rock, industrial blues rock, dark post-punk, doom folk noir, electro-goth grunge"
  },
  {
    "title": "Vēja zirdziņš",
    "audio": "music/Dipadu dapadu.mp3",
    "lyrics": "lyrics/Dipadu dapadu.txt",
    "image": "cover/Vēja zirdziņš.jpg",
    "style": "darkwave, synth noir ballad, electro-goth hymn, slow-burn EBM pop"
  },
  {
    "title": "Pūpoliņi",
    "audio": "music/Pūpoliņi, pūpoliņi.mp3",
    "lyrics": "lyrics/Pūpoliņi, pūpoliņi.txt",
    "image": "cover/Pūpoliņi.jpg",
    "style": "synthpop, electro body music (EBM), post-industrial wave, neo-darkwave"
  },
  {
    "title": "AND THEN THEY SCREAM",
    "audio": "music/first row freaks.mp3",
    "lyrics": "lyrics/first row freaks.txt",
    "image": "cover/AND THEN THEY SCREAM.jpg",
    "style": "metal, industrial metal, alternative metal, shock rock, glam industrial, gothic"
  },
  {
    "title": "If Someone Licks the Stamp",
    "audio": "music/We got your letter.mp3",
    "lyrics": "lyrics/We got your letter.txt",
    "image": "cover/If Someone Licks the Stamp.jpg",
    "style": "blues, Urban Voodoo Rock, Sexualized Swamp Blues / Baritone Noir"
  },
  {
    "title": "Four Days in Paris",
    "audio": "music/Had a little money from the cow we sold.mp3",
    "lyrics": "lyrics/Had a little money from the cow we sold.txt",
    "image": "cover/Four Days in Paris.jpg",
    "style": "blues, outlaw country noir, desert blues, southern existentialism"
  },
  {
    "title": "WALK, MOTHERFUCKER",
    "audio": "music/Streets don’t care.mp3",
    "lyrics": "lyrics/Streets don’t care.txt",
    "image": "cover/WALK.jpg",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence"
  },
  {
    "title": "Skolas diena",
    "audio": "music/Katru rītu agri ceļos.mp3",
    "lyrics": "lyrics/Katru rītu agri ceļos.txt",
    "image": "cover/Skolas diena.jpg",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism"
  },
  {
    "title": "Klucis un Cena",
    "audio": "music/Alfrēds Klucis — darbā sētnieks.mp3",
    "lyrics": "lyrics/Alfrēds Klucis — darbā sētnieks.txt",
    "image": "cover/Klucis un Cena.jpg",
    "style": "synthpop, melodic electro-goth, dark synthpop ballad, cinematic darkwave, glam noir electronica"
  },
  {
    "title": "Sidewalk of Shards",
    "audio": "music/Shiny shards in sidewalk seams.mp3",
    "lyrics": "lyrics/Shiny shards in sidewalk seams.txt",
    "image": "cover/Sidewalk of Shards.jpg",
    "style": "blues, outlaw country noir / desert blues"
  },
  {
    "title": "I Still Boil",
    "audio": "music/I Still Boil.mp3",
    "lyrics": "lyrics/I Still Boil.txt",
    "image": "cover/I Still Boil.jpg",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, post-digital crooner style, burnout wave, synthetic urban lament, stark dark electropop, aesthetic anti-ballad"
  },
   {
    "title": "Bur man laimi",
    "audio": "music/Bur man laimi.mp3",
    "lyrics": "lyrics/Bur man laimi.txt",
    "videoCover": "video/burunduki_loop.mp4",
    "image": "cover/burunduki_eurovision.jpg",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, cinematic fetish pop, folk polyphony, ritual chant-pop, Baltic ethno-electro, female vocal harmony, trance-folk minimalism, shamanic drum pulse, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering, ceremonial vocal trance"
  },
    {
    "title": "Šķērsu dienu Saule teka",
    "audio": "music/Šķērsu dienu Saule tek.mp3",
    "lyrics": "lyrics/Šķērsu dienu Saule tek.txt",
    "image": "cover/skersu_dienu.jpg",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, cinematic fetish pop, folk polyphony, ritual chant-pop, Baltic ethno-electro, female vocal harmony, trance-folk minimalism, shamanic drum pulse, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering, ceremonial vocal trance"
  },
  {
    "title": "Someday again, the paths shall cross",
    "audio": "music/Someday again, the paths shall cross.mp3",
    "lyrics": "lyrics/Someday again, the paths shall cross.txt",
    "image": "cover/someday_again.jpg",
    "style": "blues, Noir Lounge Psych, Baritone Blues Noir"
  },
    {
    "title": "Tumša nakte, zaļa zāle",
    "audio": "music/Tumša nakte, zaļa zāle.mp3",
    "lyrics": "lyrics/Tumša nakte, zaļa zāle.txt",
    "image": "cover/tumsa_nakte.jpg",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, darkwave, erotic darkwave ballad, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, folk polyphony, ritual chant-pop, Baltic ethno-electro, trance-folk minimalism, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering"
  },
     {
    "title": "Rikšiem bērīti es palaidu",
    "audio": "music/Rikšiem bērīti es palaidu.mp3",
    "lyrics": "lyrics/Rikšiem bērīti es palaidu.txt",
    "image": "cover/riksiem_beriti.jpg",
    "style": "synthpop, train beat rhythm, outlaw country, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, post-digital crooner style, burnout wave, synthetic urban lament, stark dark electropop, aesthetic anti-ballad"
  },
      {
    "title": "Four Wolves",
    "audio": "music/Four wolves leapt into the brush.mp3",
    "lyrics": "lyrics/Four wolves leapt into the brush.txt",
    "image": "cover/Four_Wolves.jpg",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, darkwave, erotic darkwave, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, folk polyphony, ritual chant-pop, Baltic ethno-electro, trance-folk minimalism, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering"
  },
        {
    "title": "Raganu nakts",
    "audio": "music/Tiesa, tiesa, ne meliņi, līgo, līgo.mp3",
    "lyrics": "lyrics/Tiesa, tiesa, ne meliņi, līgo, līgo.txt",
    "image": "cover/Raganu_nakts.jpg",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, darkwave, erotic darkwave ballad, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, folk polyphony, ritual chant-pop, Baltic ethno-electro, trance-folk minimalism, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering"
  },
        {
    "title": "Katra vieta klāt savs smukums",
    "audio": "music/Katra vieta klāt savs smukums.mp3",
    "lyrics": "lyrics/Katra vieta klāt savs smukums.txt",
    "image": "cover/katra_vieta.png",
    "style": "synthpop, train beat rhythm, outlaw country, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, post-digital crooner style, burnout wave, synthetic urban lament, stark dark electropop, aesthetic anti-ballad"
  },
      {
    "title": "I’m the palm",
    "audio": "music/I’m the palm.mp3",
    "lyrics": "lyrics/I’m the palm.txt",
    "image": "cover/the_palm.png",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, cinematic fetish pop, folk polyphony, ritual chant-pop, Baltic ethno-electro, female vocal harmony, trance-folk minimalism, shamanic drum pulse, nature-inspired avant-pop, contemporary pagan fusion, ancestral vocal layering, ceremonial vocal trance"
  },
       {
    "title": "The wizard knocks upon my door",
    "audio": "music/The wizard knocks upon my door.mp3",
    "lyrics": "lyrics/The wizard knocks upon my door.txt",
    "image": "cover/wizard.png",
    "style": "country,alt-country, storytelling style"
  },
         {
    "title": "The World Keeps Turning",
    "audio": "music/The world keeps turning, it never stops.mp3",
    "lyrics": "lyrics/The world keeps turning, it never stops.txt",
    "image": "cover/world_turning.png",
    "style": "country,alt-country, storytelling style"
  },
           {
    "title": "Vainagu deja",
    "audio": "music/Es saviju vainadziņu, līgo, Jānīti.mp3",
    "lyrics": "lyrics/Es saviju vainadziņu, līgo, Jānīti.txt",
    "image": "cover/vainagu_deja.png",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, cinematic fetish pop, folk polyphony, ritual chant-pop, Baltic ethno-electro, female vocal harmony"
  },
            {
    "title": "Desmit mazi kukainīši",
    "audio": "music/Desmit mazi kukainīši ceļoja ar plostu.mp3",
    "lyrics": "lyrics/Desmit mazi kukainīši ceļoja ar plostu.txt",
    "image": "cover/desmit_kukainisi.png",
    "style": "darkwave, erotic darkwave ballad, sleazy synth noir, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, cinematic fetish pop, folk polyphony, ritual chant-pop, Baltic ethno-electro, female vocal harmony"
  },
              {
    "title": "Kukainīt",
    "audio": "music/Kukainīt (Remix).mp3",
    "lyrics": "lyrics/Kukainīt (Remix).txt",
    "image": "cover/kukainit.png",
    "style": "synthwave, Breakstep Synthwave / Dark Electro / Industrial Fusion"
  },
                {
    "title": "Uijā, uijā, nikni vilki",
    "audio": "music/četri vilki.mp3",
    "lyrics": "lyrics/četri vilki.txt",
    "image": "cover/cetri_vilki.png",
    "style": "synthpop, industrial-infused synthpop, detached electro-noir, concrete coldwave, cynical alt-pop minimalism, darkwave, erotic darkwave, melodic electro-decadence, industrial crooner pop, gothic bedroom glam, dirty love song for broken neon, folk polyphony, ritual chant-pop, Baltic ethno-electro"
  },
               {
    "title": "Iekšējās kārtības noteikumi",
    "audio": "music/Ieksejas_kartibas_noteikumi.mp3",
    "lyrics": "lyrics/Ieksejas_kartibas_noteikumi.txt",
    "image": "cover/Ieksejas_kartibas_noteikumi.png",
    "style": "trance-folk, electro-noir,ritual chant-pop"
  },
                 {
    "title": "The World Keeps Turning (remix)",
    "audio": "music/The world keeps turning, it never stops (Remix).mp3",
    "lyrics": "lyrics/The world keeps turning, it never stops (Remix).txt",
    "image": "cover/world_turning_remix.png",
    "style": "country, alt-country, storytelling style, erotic darkwave ballad, americana, outlaw country noir"
  }
];