const TRANSLATIONS = {
  lv: {
    /* --- Navigācija (visās lapās) --- */
    'nav.manifests': 'Manifests',
    'nav.maksla': 'Māksla',
    'nav.muzika': 'Mūzika',
    'nav.foto': 'Foto',
    'nav.piedzivojumi': 'Ceļojumi',
    'nav.raksti': 'Raksti',
    'nav.jaunumi': 'Jaunumi',
    'nav.datori': 'Datori',
    'nav.abonet': 'Abonēt',
    /* --- muzika.html: sidebar --- */
    'sb.title': '📋 Mani saraksti',
    'sb.google': 'Ielogoties ar Google',
    'sb.or-email': 'vai ar e-pastu',
    'sb.email': 'E-pasts',
    'sb.password': 'Parole',
    'sb.login': 'Ielogoties',
    'sb.register': 'Reģistrēties',
    'sb.logout': 'Iziet',
    'sb.create': 'Izveidot',
    'sb.play-all': 'Atskaņot visu',
    'sb.toggle-title': 'Mani saraksti',
    /* --- muzika.html: playlist bar --- */
    'pl.name': 'Saraksts',
    'pl.exit': '✕ Iziet',
    /* --- muzika.html: galvenais saturs --- */
    'main.title': '🎧 Putekļa radio',
    'main.all-styles': '-- Visi stili --',
    'main.search-ph': 'Meklē nosaukumu, stilu',
    'main.loading': 'Notiek ielāde...',
    'main.new-pl-ph': 'Jauna saraksta nosaukums',
    /* --- muzika.html: kartītes --- */
    'card.lyrics': 'Vārdi',
    'card.add-title': 'Pievienot sarakstam',
    'card.share': 'Dalīties',
    'card.share-via': 'Dalīties ar...',
    'card.copy-link': 'Kopēt saiti',
    'card.lyrics-loading': 'Ielāde...',
    /* --- Lapas nosaukumi --- */
    'page.muzika': 'Mūzika | Puteklis',
    'page.foto': 'Foto — Putekļa pasaule',
    'page.maksla': 'Māksla | Puteklis',
    'page.piedzivojumi': 'Ceļojumi | Puteklis',
    'page.raksti': 'Raksti | Puteklis',
    /* --- foto.html --- */
    'foto.h1': 'No putekļiem rodas stāsti. No gaismas — attēli.',
    'foto.filter.all': 'Visi',
    'foto.filter.daba': 'Daba',
    'foto.filter.cilveks': 'Cilvēks',
    'foto.filter.sabiedriba': 'Sabiedrība',
    'foto.filter.putekli': 'Putekļi',
    'foto.view-pdf': '📄 Skatīt PDF',
    'foto.view-gallery': '📷 Skatīt galeriju',
    'foto.portfolio.desc': 'Putekļi ir kā klusais ceļš starp redzamo un nojaušamo',
    'foto.nojauta': 'Nojauta',
    'foto.nojauta.desc': 'Ceļo cauri gaismas un ēnas stāstiem — vietai, kur atmiņas, sajūtas un laiks saplūst vienā bezgalīgā mirklī',
    'foto.enas': 'Ēnas',
    'foto.enas.desc': 'Noslēpumainā urbānā noskaņa satiekas ar ēterisku skaistumu',
    'foto.nakotne': 'Nākotne',
    'foto.nakotne.desc': 'Fotogrāfija tver mirkli, māksla – izjūtu, bet kopā ar MI tās veido nākotnes redzējumu.',
    'foto.liepaja.desc': 'Katru foto vēro divi skatītāji — cilvēks un MI.',
    'foto.daba.title': 'Daba neskrien',
    'foto.daba.desc': 'Un tomēr tā vienmēr ir priekšā.',
    'foto.sejas': 'Sejas mainās',
    'foto.sejas.desc': 'Cilvēks — vienīgais zīdītājs, kas fotografē ēdienu.',
    'foto.kultura': 'Kultūra kvadrātmetros',
    'foto.kultura.desc': 'Sabiedrība kļuva civilizēta, kad iemācījās dalīt sienas, bet ne klusumu.',
    'foto.riga': 'Viena diena Rīgā',
    'foto.riga.desc': 'Teātris no rīta, streetfoto vakarā',
    'foto.liepajaDays': 'Nedēļa Liepājā',
    'foto.liepajaDays.desc': 'Zemenes no rīta, krogs vakarā',
    'foto.kosmos': 'Kosmosa daļiņas',
    'foto.kosmos.desc': 'Puteklis — vienīgā lieta, kas vienlaikus ir gan senatnes liecība, gan šodienas problēma.',
    'foto.footer': 'Ar mīlestību pret fotogrāfiju',
    'foto.totop': 'Uz augšu',
    /* --- piedzivojumi.html --- */
    'adv.h1': 'Ceļojumi un piedzīvojumi',
    'adv.subtext': 'Filtrē pēc kategorijas vai izvēlies konkrētu ceļojumu no sadaļas',
    'adv.nav.pargajieni': 'Piedzīvojumi dabā',
    'adv.nav.latvija': 'Ar velo Latvijā',
    'adv.nav.arzemes': 'Ar velo ārzemēs',
    'adv.nav.auto': 'Ar auto',
    'adv.nav.mi': 'MI un citi',
    'adv.pargajieni.h2': '🥾 Piedzīvojumi dabā',
    'adv.pargajieni.p': 'Pārgājieni, laivu braucieni un uz slēpēm',
    'adv.latvija.h2': '🚲 Ar velo Latvijā',
    'adv.latvija.p': 'Šeit ir mana dzimtene ...',
    'adv.arzemes.h2': '🌍 Velo ārzemēs',
    'adv.arzemes.p': 'Kas gan var būt labāks par šo',
    'adv.auto.h2': '🚗 Ar auto',
    'adv.auto.p': 'šurpu turpu',
    'adv.mi.h2': '🌀 MI un citi',
    'adv.mi.p': 'Mākslīgais intelekts un citi',
    /* --- raksti.html --- */
    'raksti.h1': 'Putekļa pārdomas',
    'raksti.burtiska.h2': 'Burtiskā uztvere un domāšana',
    'raksti.burtiska.p': 'Par to, kā nespēja uztvert metaforas var novest pie politiskas manipulējamības un morālas panikas.',
    'raksti.eiropa.h2': 'Eiropas reputācijas lamatas',
    'raksti.eiropa.p': 'Kā normatīvā kultūra kavē izaugsmi, tehnoloģijas un drošību',
    'raksti.eurovision.h2': 'Eirovīzija - dziesmu konkurss vai meme šovs?',
    'raksti.eurovision.p': 'Analītisks skatiens uz Eirovīzijas evolūciju, drāmām un nākotnes iespējam',
    'raksti.industrija.h2': 'Industrijas dziesmas vs. Eirovīzijas dziesmas',
    'raksti.industrija.p': 'Vai mūzika ir māksla vai maskarāde? Vienā pusē algoritms un albums, otrā – lāzeri, karogi un trīs minūšu drāma.',
    'raksti.kods.h2': 'Eirovīzijas kods',
    'raksti.kods.p': 'Simulācija, kurā tu pats esi algoritma daļa',
    'raksti.it.h2': 'Pašvaldību vēlēšanu IT fiasko',
    'raksti.it.p': 'Kas nogāja greizi, cik tas maksāja un ko darīt nākotnē',
    /* --- index.html --- */
    'index.h3': 'Puteklis bija tik mazs, ka viņu varēja aizpūst pat doma',
    'index.subtext': 'Visneiedomājamākās vētras sākas ar vismazāko putekli',
    'index.button': 'Uzzināt vairāk',
    'index.about.h2': 'Par Putekli...',
    /* --- datori.html --- */
    'datori.h1': 'Datori',
    'datori.p': 'Laiks un saprāts digitālajā laikmetā.',
    'datori.intro': 'Cilvēks radīja mašīnu, lai palīdzētu sev … un tā sāka ieteikt, ko ēst vakariņās.',
    'datori.mi': 'MI',
    'datori.intuicija': 'Digitālā intuīcija',
    'datori.tagadne': 'Tagadne',
    'datori.nakotne': 'Nākotne',
    'datori.pagatne': 'Pagātne',
    /* --- maksla.html --- */
    'maksla.h1': 'Māksla',
    'maksla.gramatas.h2': 'Grāmatas',
    'maksla.gramatas.p': 'Vārdi, kas maina pasauli.',
    'maksla.gramatas.sub': 'Putekļi starp lappusēm. Vārdi, kas elpo. Domu ceļi, kas ved uz citām pasaulēm.',
    'maksla.gramatas.read': 'Lasītās grāmatas',
    'maksla.gramatas.recommended': 'Rekomendācijas',
    'maksla.gramatas.unread': 'Neizlasīts',
    'maksla.filmas.h2': 'Filmas',
    'maksla.filmas.p': 'Gaisma, kas kustas un sapņo.',
    'maksla.filmas.sub': 'Šeit ir sadaļas par dažādiem filmu žanriem. Klikšķini, lai atvērtu detalizētu sarakstu.',
    'maksla.filmas.lost': 'Pazudušās gaismas',
    'maksla.filmas.lost.p': 'Tikai tumsā var ieraudzīt zvaigznes',
    'maksla.filmas.misty': 'Dūmakainie ceļi',
    'maksla.filmas.misty.p': 'Psiholoģisks ceļojums miglā, kur nekas nav skaidrs.',
    'maksla.filmas.dust': 'Putekļos dzimušie',
    'maksla.filmas.dust.p': 'No putekļiem — uz gaismu.',
    'maksla.filmas.wind': 'Vējš nesīs tālāk',
    'maksla.filmas.wind.p': 'Mēs esam tikai vēja stāsti nākotnes tukšumā.',
    'maksla.teatris.h2': 'Teātris',
    'maksla.teatris.p': 'Dzīve, kas elpo uz skatuves.',
    'maksla.teatris.sub': 'Aktieri, teksti, klusuma spriedze. Skatuve kā spogulis.',
    'maksla.teatris.scenes': 'Putekļos iededzinātās ainas',
    'maksla.teatris.scenes.p': 'Kad skatuve kļūst par telpu, kur valoda deg klusumā.',
    'maksla.teatris.conductors': 'Putekļu diriģenti',
    'maksla.teatris.conductors.p': 'Tēli, kas nerunā, bet atstāj pēdas uz skatuves sirdsapziņas.',
    'maksla.teatris.semiotics': 'Klusuma semiotika',
    'maksla.teatris.semiotics.p': 'Estētika, simboli, kustība un absurds – skatuves valoda ārpus teksta.',
    'maksla.muzika.h2': 'Mūzika',
    'maksla.muzika.p': 'Skaņas, kas dreb un skar dvēseli.',
    'maksla.muzika.sub': 'Skaņas, kas dzied klusumā. Dziesmas, kas elpo starp rindiņām.',
    'maksla.muzika.chronicles': 'Putekļu hronikas',
    'maksla.muzika.ears': 'Putekļa ausis',
    'maksla.muzika.mosaic': 'Putekļa mozaīkas',
    'maksla.muzika.karaoke': 'Putekļa karaoke',
    'maksla.muzika.radio': 'Putekļa radio',
    'maksla.muzeji.h2': 'Muzeji',
    'maksla.muzeji.p': 'Pēdas, kas ved cauri pagātnei.',
    'maksla.muzeji.sub': 'Pēdas, kas dzīvo starp mums. Atmiņas, kas elpo cauri laikam.',
    'maksla.muzeji.gallery': 'Fantāziju galerija',
    'maksla.muzeji.thought': 'Laikmetīgā doma',
    'maksla.muzeji.science': 'Zinātnes pasaule',
  },

  en: {
    /* --- Navigation --- */
    'nav.manifests': 'Manifesto',
    'nav.maksla': 'Art',
    'nav.muzika': 'Music',
    'nav.foto': 'Photo',
    'nav.piedzivojumi': 'Travel',
    'nav.raksti': 'Articles',
    'nav.jaunumi': 'News',
    'nav.datori': 'Tech',
    'nav.abonet': 'Subscribe',
    /* --- muzika.html: sidebar --- */
    'sb.title': '📋 My playlists',
    'sb.google': 'Sign in with Google',
    'sb.or-email': 'or with email',
    'sb.email': 'Email',
    'sb.password': 'Password',
    'sb.login': 'Sign in',
    'sb.register': 'Sign up',
    'sb.logout': 'Sign out',
    'sb.create': 'Create',
    'sb.play-all': 'Play all',
    'sb.toggle-title': 'My playlists',
    /* --- muzika.html: playlist bar --- */
    'pl.name': 'Playlist',
    'pl.exit': '✕ Exit',
    /* --- muzika.html: main content --- */
    'main.title': '🎧 Puteklis Radio',
    'main.all-styles': '-- All genres --',
    'main.search-ph': 'Search by title, genre',
    'main.loading': 'Loading...',
    'main.new-pl-ph': 'New playlist name',
    /* --- muzika.html: cards --- */
    'card.lyrics': 'Lyrics',
    'card.add-title': 'Add to playlist',
    'card.share': 'Share',
    'card.share-via': 'Share via...',
    'card.copy-link': 'Copy link',
    'card.lyrics-loading': 'Loading...',
    /* --- Page titles --- */
    'page.muzika': 'Music | Puteklis',
    'page.foto': 'Photo — Puteklis World',
    'page.maksla': 'Art | Puteklis',
    'page.piedzivojumi': 'Travel | Puteklis',
    'page.raksti': 'Articles | Puteklis',
    /* --- foto.html --- */
    'foto.h1': 'Stories from dust. Images from light.',
    'foto.filter.all': 'All',
    'foto.filter.daba': 'Nature',
    'foto.filter.cilveks': 'People',
    'foto.filter.sabiedriba': 'Society',
    'foto.filter.putekli': 'Dust',
    'foto.view-pdf': '📄 View PDF',
    'foto.view-gallery': '📷 View gallery',
    'foto.portfolio.desc': 'Dust is like the quiet path between the visible and the intuited',
    'foto.nojauta': 'Intuition',
    'foto.nojauta.desc': 'Journey through stories of light and shadow — a place where memories, feelings and time merge into one endless moment',
    'foto.enas': 'Shadows',
    'foto.enas.desc': 'Mysterious urban atmosphere meets ethereal beauty',
    'foto.nakotne': 'Future',
    'foto.nakotne.desc': 'Photography captures the moment, art the feeling — but together with AI they shape a vision of the future.',
    'foto.liepaja.desc': 'Every photo is watched by two viewers — a person and AI.',
    'foto.daba.title': 'Nature never hurries',
    'foto.daba.desc': 'And yet it is always ahead.',
    'foto.sejas': 'Faces change',
    'foto.sejas.desc': 'Humans — the only mammals that photograph their food.',
    'foto.kultura': 'Culture in square meters',
    'foto.kultura.desc': 'Society became civilized when it learned to share walls, but not silence.',
    'foto.riga': 'One Day in Riga',
    'foto.riga.desc': 'Theatre in the morning, street photo in the evening',
    'foto.liepajaDays': 'A Week in Liepāja',
    'foto.liepajaDays.desc': 'Strawberries in the morning, a bar in the evening',
    'foto.kosmos': 'Cosmic particles',
    'foto.kosmos.desc': 'Dust — the only thing that is simultaneously a witness of antiquity and a problem of today.',
    'foto.footer': 'With love for photography',
    'foto.totop': 'To top',
    /* --- piedzivojumi.html --- */
    'adv.h1': 'Travel and Adventures',
    'adv.subtext': 'Filter by category or choose a specific journey from the section',
    'adv.nav.pargajieni': 'Adventures in Nature',
    'adv.nav.latvija': 'Cycling in Latvia',
    'adv.nav.arzemes': 'Cycling Abroad',
    'adv.nav.auto': 'By Car',
    'adv.nav.mi': 'AI and Others',
    'adv.pargajieni.h2': '🥾 Adventures in Nature',
    'adv.pargajieni.p': 'Hikes, boat trips and skiing',
    'adv.latvija.h2': '🚲 Cycling in Latvia',
    'adv.latvija.p': 'This is my homeland...',
    'adv.arzemes.h2': '🌍 Cycling Abroad',
    'adv.arzemes.p': 'What could be better than this',
    'adv.auto.h2': '🚗 By Car',
    'adv.auto.p': 'back and forth',
    'adv.mi.h2': '🌀 AI and Others',
    'adv.mi.p': 'Artificial intelligence and others',
    /* --- raksti.html --- */
    'raksti.h1': 'Puteklis Thoughts',
    'raksti.burtiska.h2': 'Literal Perception and Thinking',
    'raksti.burtiska.p': 'On how the inability to perceive metaphors can lead to political manipulability and moral panic.',
    'raksti.eiropa.h2': "Europe's Reputation Trap",
    'raksti.eiropa.p': 'How normative culture hinders growth, technology and security',
    'raksti.eurovision.h2': 'Eurovision — a song contest or a meme show?',
    'raksti.eurovision.p': 'An analytical look at Eurovision\'s evolution, dramas and future possibilities',
    'raksti.industrija.h2': 'Industry songs vs. Eurovision songs',
    'raksti.industrija.p': 'Is music art or masquerade? On one side — an algorithm and an album, on the other — lasers, flags and three minutes of drama.',
    'raksti.kods.h2': 'The Eurovision Code',
    'raksti.kods.p': 'A simulation in which you yourself are part of the algorithm',
    'raksti.it.h2': 'Municipal Elections IT Fiasco',
    'raksti.it.p': 'What went wrong, how much it cost and what to do next',
    /* --- index.html --- */
    'index.h3': 'Dust was so small that even a thought could blow it away',
    'index.subtext': 'The most unimaginable storms begin with the smallest particle of dust',
    'index.button': 'Learn more',
    'index.about.h2': 'About Puteklis...',
    /* --- datori.html --- */
    'datori.h1': 'Computers',
    'datori.p': 'Time and reason in the digital age.',
    'datori.intro': 'Humans created the machine to help themselves… and it started suggesting what to have for dinner.',
    'datori.mi': 'AI',
    'datori.intuicija': 'Digital Intuition',
    'datori.tagadne': 'Present',
    'datori.nakotne': 'Future',
    'datori.pagatne': 'Past',
    /* --- maksla.html --- */
    'maksla.h1': 'Art',
    'maksla.gramatas.h2': 'Books',
    'maksla.gramatas.p': 'Words that change the world.',
    'maksla.gramatas.sub': 'Dust between pages. Words that breathe. Paths of thought leading to other worlds.',
    'maksla.gramatas.read': 'Books I\'ve Read',
    'maksla.gramatas.recommended': 'Recommendations',
    'maksla.gramatas.unread': 'Unread',
    'maksla.filmas.h2': 'Films',
    'maksla.filmas.p': 'Light that moves and dreams.',
    'maksla.filmas.sub': 'Sections about different film genres. Click to open a detailed list.',
    'maksla.filmas.lost': 'Lost Lights',
    'maksla.filmas.lost.p': 'Only in darkness can you see the stars',
    'maksla.filmas.misty': 'Misty Paths',
    'maksla.filmas.misty.p': 'A psychological journey in fog, where nothing is clear.',
    'maksla.filmas.dust': 'Born from Dust',
    'maksla.filmas.dust.p': 'From dust — toward light.',
    'maksla.filmas.wind': 'The Wind Will Carry On',
    'maksla.filmas.wind.p': 'We are only wind stories in the emptiness of the future.',
    'maksla.teatris.h2': 'Theatre',
    'maksla.teatris.p': 'Life that breathes on stage.',
    'maksla.teatris.sub': 'Actors, texts, tension of silence. The stage as a mirror.',
    'maksla.teatris.scenes': 'Scenes Lit in Dust',
    'maksla.teatris.scenes.p': 'When the stage becomes a space where language burns in silence.',
    'maksla.teatris.conductors': 'Conductors of Dust',
    'maksla.teatris.conductors.p': 'Characters who don\'t speak, but leave marks on the conscience of the stage.',
    'maksla.teatris.semiotics': 'Semiotics of Silence',
    'maksla.teatris.semiotics.p': 'Aesthetics, symbols, movement and absurdity – stage language beyond text.',
    'maksla.muzika.h2': 'Music',
    'maksla.muzika.p': 'Sounds that tremble and touch the soul.',
    'maksla.muzika.sub': 'Sounds that sing in silence. Songs that breathe between the lines.',
    'maksla.muzika.chronicles': 'Chronicles of Dust',
    'maksla.muzika.ears': 'Ears of Dust',
    'maksla.muzika.mosaic': 'Dust Mosaics',
    'maksla.muzika.karaoke': 'Dust Karaoke',
    'maksla.muzika.radio': 'Dust Radio',
    'maksla.muzeji.h2': 'Museums',
    'maksla.muzeji.p': 'Footprints leading through the past.',
    'maksla.muzeji.sub': 'Footprints that live among us. Memories that breathe through time.',
    'maksla.muzeji.gallery': 'Fantasy Gallery',
    'maksla.muzeji.thought': 'Contemporary Thought',
    'maksla.muzeji.science': 'World of Science',
  }
};

let currentLang = localStorage.getItem('puteklis-lang') || 'lv';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.lv)[key] || key;
}

function getLang() { return currentLang; }

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('puteklis-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const v = t(el.dataset.i18nTitle);
    if (v) el.title = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t(el.dataset.i18nHtml);
    if (v) el.innerHTML = v;
  });

  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const v = t(titleEl.dataset.i18n);
    if (v) document.title = v;
  }

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'lv' ? 'EN' : 'LV';

  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

function _createLangBtn() {
  const btn = document.createElement('button');
  btn.id = 'lang-toggle';
  btn.style.cssText = [
    'background:none',
    'border:1px solid #888',
    'color:inherit',
    'border-radius:4px',
    'padding:2px 9px',
    'cursor:pointer',
    'font-weight:bold',
    'font-size:.85em',
    'letter-spacing:.05em',
    'vertical-align:middle',
  ].join(';');
  btn.onclick = () => applyLang(currentLang === 'lv' ? 'en' : 'lv');
  return btn;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = _createLangBtn();

  const headerNav = document.querySelector('header nav');
  const topNav = document.querySelector('nav.top-nav');

  if (headerNav) {
    btn.style.marginLeft = '1.2rem';
    const ul = headerNav.querySelector('ul');
    if (ul) {
      const li = document.createElement('li');
      li.appendChild(btn);
      ul.appendChild(li);
    } else {
      headerNav.appendChild(btn);
    }
  } else if (topNav) {
    btn.style.marginLeft = '1rem';
    topNav.appendChild(btn);
  } else {
    // Floating button for pages without standard nav
    btn.style.cssText += ';position:fixed;top:1rem;right:1rem;z-index:9999;background:rgba(0,0,0,0.5);border-color:#aaa;color:#fff;padding:4px 12px';
    document.body.appendChild(btn);
  }

  applyLang(currentLang);
});
