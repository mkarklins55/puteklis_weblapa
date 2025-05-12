const songs = [
  {
    "title": "The Lost Sock Saga",
    "audio": "music/The Lost Sock Saga.mp3",
    "lyrics": "lyrics/The Lost Sock Saga.txt",
    "image": "cover/The Lost Sock Saga.png",
    "style": "country"
  },
  {
    "title": "Un mēs braucam",
    "audio": "music/un mēs braucam.mp3",
    "lyrics": "lyrics/Un mēs braucam.txt",
    "image": "cover/Un mēs braucam.png",
    "style": "metal, melodic, progressive metal, synth, nu metal"
  },
  {
    "title": "There are prisoners trapped between clocks",
    "audio": "music/There are prisoners trapped between cloc.mp3",
    "lyrics": "lyrics/There are prisoners trapped between cloc.txt",
    "image": "cover/There are prisoners trapped between clocks.png",
    "style": "hip hop, Conscious hip hop, east coast"
  },
  {
    "title": "We are driving",
    "audio": "music/We are driving past trees.mp3",
    "lyrics": "lyrics/We are driving past trees.txt",
    "image": "cover/We are driving.png",
    "style": "country, country like 1970's"
  },
   {
    "title": "Yesterday I searched for future's perfection",
    "audio": "music/Yesterday I searched for future's perfec.mp3",
    "lyrics": "lyrics/1.txt",
    "image": "cover/Yesterday I searched for future's perfect.png",
    "style": "metal, progresive metal"
  },
   {
    "title": "Dziesmiņa par puteklīti",
    "audio": "music/Dziesmina par putekliti.mp3",
    "lyrics": "lyrics/Dziesmina par putekliti.txt",
    "image": "cover/Dziesmiņa par puteklīti.png",
    "style": "metal, progresive metal"
  },
  {
    "title": "Whispers fall",
    "audio": "music/Whispers fall.mp3",
    "lyrics": "lyrics/Whispers fall.txt",
    "image": "cover/Whispers fall.png",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Putekļi krīt",
    "audio": "music/Putekļi krīt.mp3",
    "lyrics": "lyrics/Putekļi krīt.txt",
    "image": "cover/Putekļi krīt.png",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Where roads crumble softly underfoot",
    "audio": "music/Where roads crumble softly underfoot.mp3",
    "lyrics": "lyrics/Where roads crumble softly underfoot.txt",
    "image": "cover/Where roads crumble softly underfoot.png",
    "style": "blues, dark blues"
  },
  {
    "title": "You swept me like ashes",
    "audio": "music/You swept me like ashes.mp3",
    "lyrics": "lyrics/You swept me like ashes.txt",
    "image": "cover/You swept me like ashes.png",
    "style": "rock, Symphonic Rock, Post-Rock, Progressive Metal, Alternative Rock, Cinematic"
  },
  {
    "title": "Organic House III",
    "audio": "music/Organic House III.mp3",
    "lyrics": "lyrics/Organic House III.txt",
    "image": "cover/Organic House III.png",
    "style": "house, Organic House, Progressive Melodic Techno, Tech-House"
  },
  {
    "title": "Organic House VII",
    "audio": "music/Organic House VII.mp3",
    "lyrics": "lyrics/Organic House VII.txt",
    "image": "cover/Organic House VII.png",
    "style": "house, Organic House, Tribal Drums, Punchy Kick, Groove-focused Hi-hats, Atmospheric Pads, Afro-inspired percussion"
  },
  {
    "title": "Kurzemes_rezidence",
    "audio": "music/Kurzemes_rezidence.mp3",
    "lyrics": "lyrics/Kurzemes_rezidence.txt",
    "image": "cover/Kurzemes_rezidence.png",
    "style": "country, Americana, folk, western, bluegrass influences, country storytelling, warm acoustic textures"
  },
  {
    "title": "Wheels are turning, morning's gold",
    "audio": "music/Wheels are turning, morning's gold.mp3",
    "lyrics": "lyrics/Wheels are turning, morning's gold.txt",
    "image": "cover/Wheels are turning, morning's gold.png",
    "style": "country, Americana, folk, western, bluegrass influences, Traditional Country, Folk Country, acoustic-driven rhythm, storytelling lyrics"
  },
  {
    "title": "Dusty paths wind through the rye",
    "audio": "music/Dusty paths wind through the rye.mp3",
    "lyrics": "lyrics/Dusty paths wind through the rye.txt",
    "image": "cover/Dusty paths wind through the rye.png",
    "style": "country, Americana, folk, western, bluegrass influences, Traditional Country "
  },
  {
    "title": "Rust on the rails and grass in the ties",
    "audio": "music/Rust on the rails and grass in the ties.mp3",
    "lyrics": "lyrics/Rust on the rails and grass in the ties.txt",
    "image": "cover/Rust on the rails and grass in the ties.png",
    "style": "country, Americana Folk with Traditional Country and Western influence"
  },
  {
    "title": "Riteņi minas pa ceļu, kas nav",
    "audio": "music/Riteņi minas pa ceļu, kas nav.mp3",
    "lyrics": "lyrics/Riteņi minas pa ceļu, kas nav.txt",
    "image": "cover/Riteņi minas pa ceļu, kas nav.png",
    "style": "jazz, dark acid jazz"
  },
  {
    "title": "Ridin' hard on a frozen track",
    "audio": "music/Ridin' hard on a frozen track.mp3",
    "lyrics": "lyrics/Ridin' hard on a frozen track.txt",
    "image": "cover/Ridin' hard on a frozen track.png",
    "style": "country, icy outlaw country male singer reverb echo country band up-tempo"
  },
  {
    "title": "Ich spür’ dein Herz, es schlägt so kalt",
    "audio": "music/Ich spür’ dein Herz, es schlägt so kalt.mp3",
    "lyrics": "lyrics/Ich spür’ dein Herz, es schlägt so kalt.txt",
    "image": "cover/Ich spür’ dein Herz, es schlägt so kalt.png",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche"
  },
  {
    "title": "Die letzte Straßenbahn nach Riga",
    "audio": "music/Die letzte Straßenbahn nach Riga.mp3",
    "lyrics": "lyrics/Die letzte Straßenbahn nach Riga.txt",
    "image": "cover/Die letzte Straßenbahn nach Riga.png",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche Härte, Darkwave, Post-Industrial "
  },
  {
    "title": "Muris",
    "audio": "music/Muris.mp3",
    "lyrics": "lyrics/Muris.txt",
    "image": "cover/muris.png",
    "style": "rock, Melodic Industrial Rock, Dark Ballad, Gothic Rock, Soft Neue Deutsche Härte, Darkwave"
  },
  {
    "title": "Sous mes bottes, la poussière chante",
    "audio": "music/Sous mes bottes, la poussière chante.mp3",
    "lyrics": "lyrics/Sous mes bottes, la poussière chante.txt",
    "image": "cover/Sous mes bottes, la poussière chante.png",
    "style": "blues, Acoustic Blues Glitch Hop"
  },
  {
    "title": "In der Ecke liegt der Staub",
    "audio": "music/In der Ecke liegt der Staub.mp3",
    "lyrics": "lyrics/In der Ecke liegt der Staub.txt",
    "image": "cover/In der Ecke liegt der Staub.png",
    "style": "blues, Dreamy Fife And Drum Blues"
  },
  {
    "title": "Steel und Blut",
    "audio": "music/Steel und Blut.mp3",
    "lyrics": "lyrics/Steel und Blut.txt",
    "image": "cover/Steel und Blut.png",
    "style": "industrial, Breakstep Synthwave / Dark Electro / Industrial Fusion"
  },
  {
    "title": "Ich bin Staub",
    "audio": "music/Ich bin Staub.mp3",
    "lyrics": "lyrics/Ich bin Staub.txt",
    "image": "cover/Ich bin Staub.png",
    "style": "rock, Melancholic Neue Deutsche Härte / Dark Electro Rock / Synth-Gothic"
  },
  {
    "title": "I open my eyes",
    "audio": "music/I open my eyes.mp3",
    "lyrics": "lyrics/I open my eyes.txt",
    "image": "cover/I open my eyes.png",
    "style": "synthwave, Dark Synthwave, Industrial Darkwave, Neue Deutsche Härte, Aggrotech, Dark Electro"
  },
  {
    "title": "Ma kõnnin tolmus",
    "audio": "music/Ma kõnnin tolmus.mp3",
    "lyrics": "lyrics/Ma kõnnin tolmus.txt",
    "image": "cover/Ma kõnnin tolmus.png",
    "style": "synthwave, Dark Synthwave, Industrial Darkwave, Neue Deutsche Härte, Aggrotech, Dark Electro"
  },
  {
    "title": "Oh little Button, scared and small",
    "audio": "music/Oh little Button, scared and small.mp3",
    "lyrics": "lyrics/Oh little Button, scared and small.txt",
    "image": "cover/Oh little Button, scared and small.png",
    "style": "country, americana country, western, bluegrass influences"
  },
  {
    "title": "Dust in my mouth",
    "audio": "music/Dust in my mouth.mp3",
    "lyrics": "lyrics/Dust in my mouth.txt",
    "image": "cover/Dust in my mouth.png",
    "style": "country, Americana, cowpunk"
  },
  {
    "title": "The Button",
    "audio": "music/The Button.mp3",
    "lyrics": "lyrics/The Button.txt",
    "image": "cover/The Button.png",
    "style": "country, road trip country, front porch stompin"
  },
  {
    "title": "Dust and Silver",
    "audio": "music/dust_and_silver.mp3",
    "lyrics": "lyrics/dust_and_silver.txt",
    "image": "cover/Dust and Silver.png",
    "style": "country, Classic Country / Honky-Tonk / Storytelling Country"
  },
  {
    "title": "Old Man and a Hundred Dreams",
    "audio": "music/Old Man and a Hundred Dreams.mp3",
    "lyrics": "lyrics/Old Man and a Hundred Dreams.txt",
    "image": "cover/Old Man and a Hundred Dreams.png",
    "style": "country, Classic Country / Honky-Tonk / Storytelling Country"
  },
  {
    "title": "Sunday Train",
    "audio": "music/Sunday Train.mp3",
    "lyrics": "lyrics/Sunday Train.txt",
    "image": "cover/Sunday Train.png",
    "style": "country, Country Train Beat"
  },
  {
    "title": "Два дні їдемо крізь пил",
    "audio": "music/Два дні їдемо крізь пил.mp3",
    "lyrics": "lyrics/Два дні їдемо крізь пил.txt",
    "image": "cover/Два дні їдемо крізь пил.png",
    "style": "rock, Ukrainian Post-Rock, Ukrainian Indie Rock, Ukrainian New Wave, Alternative folk rock"
  },
  {
    "title": "Crows return on shattered wings",
    "audio": "music/Crows return on shattered wings.mp3",
    "lyrics": "lyrics/Crows return on shattered wings.txt",
    "image": "cover/Crows return on shattered wings.png",
    "style": "darkwave, Coldwave, Minimal Synth, Post-Rock (very atmospheric)"
  },
  {
    "title": "After the autumn sadness",
    "audio": "music/After the autumn sadness.mp3",
    "lyrics": "lyrics/After the autumn sadness.txt",
    "image": "cover/After the autumn sadness.png",
    "style": "cabaret, Spoken Word, Dark Cabaret, Post-Punk, Experimental Poetry, Art Rock"
  },
  {
    "title": "We don’t fight wars",
    "audio": "music/We don’t fight wars.mp3",
    "lyrics": "lyrics/We don’t fight wars.txt",
    "image": "cover/We don’t fight wars.png",
    "style": "cabaret, Theatrical Falsetto Punk, Dark Cabaret, Brechtian Punk Cabaret"
  },
  {
    "title": "Lai dzīvo puritānisms",
    "audio": "music/lai dzīvo puritānisms.mp3",
    "lyrics": "lyrics/Lai dzīvo puritānisms.txt",
    "image": "cover/Lai dzīvo puritānisms.png",
    "style": "cabaret, Theatrical Falsetto Punk, Dark Cabaret, Brechtian Punk Cabaret"
  },
  {
    "title": "When all the fucking ropes snap",
    "audio": "music/When all the fucking ropes snap.mp3",
    "lyrics": "lyrics/When all the fucking ropes snap.txt",
    "image": "cover/When all the fucking ropes snap.png",
    "style": "industrial, Gothic Folk, Lo-Fi Spoken Apocalypse, Angry Industrial Beat poetry"
  },
  {
    "title": "Sanctus, sanctus, Sanctus Algorithmus",
    "audio": "music/Sanctus, sanctus, Sanctus Algorithmus.mp3",
    "lyrics": "lyrics/Sanctus, sanctus, Sanctus Algorithmus.txt",
    "image": "cover/Sanctus, sanctus, Sanctus Algorithmus.png",
    "style": "cabaret, Gregorian Trap, Experimental Spoken Word, Absurdist Cabaret, Minimal wave"
  },
  {
    "title": "Smoke in the mirror",
    "audio": "music/Smoke in the mirror2.mp3",
    "lyrics": "lyrics/Smoke in the mirror2.txt",
    "image": "cover/Smoke in the mirror.png",
    "style": "rock, Rustbelt Rock, Post-Apocalyptic Americana, Ukrainian Resistance rock"
  },
  {
    "title": "The Deal Was Clean",
    "audio": "music/The Deal Was Clean.mp3",
    "lyrics": "lyrics/The Deal Was Clean.txt",
    "image": "cover/The Deal Was Clean.png",
    "style": "country, Dark Americana, Outlaw Folk Rock, Protest Blues, Spoken Gothic Country"
  },
  {
    "title": "I was born",
    "audio": "music/I was born.mp3",
    "lyrics": "lyrics/I was born.txt",
    "image": "cover/I was born.png",
    "style": "synthpop, Industrial Synthpop, Brechtian Electro-Cabaret, Shockwave Gothic Glam"
  },
  {
    "title": "He loved the burn",
    "audio": "music/He loved the burn.mp3",
    "lyrics": "lyrics/He loved the burn.txt",
    "image": "cover/He loved the burn.png",
    "style": "cabaret, Industrial Doom Cabaret, Electro-Goth March, Post-Apocalyptic Torch Song"
  },
  {
    "title": "Out by the edge of the pinewood trail",
    "audio": "music/Out by the edge of the pinewood trail.mp3",
    "lyrics": "lyrics/Out by the edge of the pinewood trail.txt",
    "image": "cover/Out by the edge of the pinewood trail.png",
    "style": "country, Southern Gothic Country / Murder Ballad Americana"
  },
  {
    "title": "I should sort through my papers",
    "audio": "music/I should sort through my papers.mp3",
    "lyrics": "lyrics/I should sort through my papers.txt",
    "image": "cover/I should sort through my papers.png",
    "style": "country, existential country blues, slowcore folk noir, minimalist outlaw Americana"
  },
  {
    "title": "Laika ziņas",
    "audio": "music/Radio teic laika ziņas.mp3",
    "lyrics": "lyrics/Radio teic laika ziņas.txt",
    "image": "cover/Laika ziņas.png",
    "style": "rock, Latvian blues rock"
  },
  {
    "title": "A Little Song for Joy",
    "audio": "music/A Little Song for Joy.mp3",
    "lyrics": "lyrics/A Little Song for Joy.txt",
    "image": "cover/A Little Song for Joy.png",
    "style": "country, country gospel, southern gothic, americana, dark folk"
  },
  {
    "title": "Broken Chain Anthem",
    "audio": "music/Broken Chain Anthem.mp3",
    "lyrics": "lyrics/Broken Chain Anthem.txt",
    "image": "cover/Broken Chain Anthem.png",
    "style": "synthpop, post-punk/grunge, industrial synthpop"
  },
  {
    "title": "Some fucking nature scene",
    "audio": "music/Some fucking nature scene.mp3",
    "lyrics": "lyrics/Some fucking nature scene.txt",
    "image": "cover/Some fucking nature scene.png",
    "style": "blues, Dirty noir-blues, slow-burning tempo, baritone snarl, cracked and nicotine-drenched voice"
  },
  {
    "title": "A Hundred Kilometres",
    "audio": "music/I started rollin’ early, sun just touchi.mp3",
    "lyrics": "lyrics/I started rollin’ early, sun just touchi.txt",
    "image": "cover/A Hundred Kilometres.png",
    "style": "country, outlaw country, Americana, folk"
  },
  {
    "title": "Ich zähle jeden Atemzug",
    "audio": "music/Ich zähle jeden Atemzug.mp3",
    "lyrics": "lyrics/Ich zähle jeden Atemzug.txt",
    "image": "images/Ich zähle jeden Atemzug.jpg",
    "style": ""
  },
  {
    "title": "One Last Time (Burn It Down)",
    "audio": "music/Wrong shoes, wrong night.mp3",
    "lyrics": "lyrics/One Last Time (Burn It Down).txt",
    "image": "images/One Last Time (Burn It Down).jpg",
    "style": ""
  },
  {
    "title": "The Old Cat Walks",
    "audio": "music/Red dusk falls on his tired face.mp3",
    "lyrics": "lyrics/The Old Cat Walks.txt",
    "image": "images/The Old Cat Walks.jpg",
    "style": ""
  },
  {
    "title": "Awake to Be Happy",
    "audio": "music/You lit me up, then walked away.mp3",
    "lyrics": "lyrics/Awake to Be Happy.txt",
    "image": "images/Awake to Be Happy.jpg",
    "style": ""
  },
  {
    "title": "You fucked, you ran, you left the light",
    "audio": "music/You fucked, you ran, you left the light.mp3",
    "lyrics": "lyrics/You fucked, you ran, you left the light.txt",
    "image": "images/You fucked, you ran, you left the light.jpg",
    "style": ""
  },
  {
    "title": "I’m the Fuckin’ Cat",
    "audio": "music/I don’t knead, I don’t purr, I don’t play.mp3",
    "lyrics": "lyrics/I’m the Fuckin’ Cat.txt",
    "image": "images/I’m the Fuckin’ Cat.jpg",
    "style": ""
  },
  {
    "title": "Ash and Velvet",
    "audio": "music/She stitched my name in a coat of smoke.mp3",
    "lyrics": "lyrics/Ash and Velvet.txt",
    "image": "images/Ash and Velvet.jpg",
    "style": ""
  },
  {
    "title": "Vēja zirdziņš",
    "audio": "music/Dipadu dapadu.mp3",
    "lyrics": "lyrics/Vēja zirdziņš.txt",
    "image": "images/Vēja zirdziņš.jpg",
    "style": ""
  },
  {
    "title": "Pūpoliņi",
    "audio": "music/Pūpoliņi, pūpoliņi.mp3",
    "lyrics": "lyrics/Pūpoliņi.txt",
    "image": "images/Pūpoliņi.jpg",
    "style": ""
  },
  {
    "title": "AND THEN THEY SCREAM",
    "audio": "music/first row freaks.mp3",
    "lyrics": "lyrics/AND THEN THEY SCREAM.txt",
    "image": "images/AND THEN THEY SCREAM.jpg",
    "style": ""
  },
  {
    "title": "If Someone Licks the Stamp",
    "audio": "music/We got your letter.mp3",
    "lyrics": "lyrics/If Someone Licks the Stamp.txt",
    "image": "images/If Someone Licks the Stamp.jpg",
    "style": ""
  },
  {
    "title": "Four Days in Paris",
    "audio": "music/Had a little money from the cow we sold.mp3",
    "lyrics": "lyrics/Four Days in Paris.txt",
    "image": "images/Four Days in Paris.jpg",
    "style": ""
  },
  {
    "title": "WALK, MOTHERFUCKER",
    "audio": "music/Streets don’t care.mp3",
    "lyrics": "lyrics/WALK, MOTHERFUCKER.txt",
    "image": "images/WALK, MOTHERFUCKER.jpg",
    "style": ""
  },
  {
    "title": "Skolas diena",
    "audio": "music/Katru rītu agri ceļos.mp3",
    "lyrics": "lyrics/Skolas diena.txt",
    "image": "images/Skolas diena.jpg",
    "style": ""
  },
  {
    "title": "Klucis un Cena",
    "audio": "music/Alfrēds Klucis — darbā sētnieks.mp3",
    "lyrics": "lyrics/Klucis un Cena.txt",
    "image": "images/Klucis un Cena.jpg",
    "style": ""
  },
  {
    "title": "Sidewalk of Shards",
    "audio": "music/Shiny shards in sidewalk seams.mp3",
    "lyrics": "lyrics/Sidewalk of Shards.txt",
    "image": "images/Sidewalk of Shards.jpg",
    "style": ""
  }
];