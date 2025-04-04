// Politiku dati
const politicians = {
  government: [
    {
      id: 'vaira-vike',
      name: 'Vaira Vīķe-Freiberga',
      party: 'Latvijas eksprezidente',
      image: 'images/vaira_freiberga.jpg',
      videos: [
        {
          youtube: 'https://www.youtube.com/embed/bQZbYTCwHNs',
          translation: `1. Fragments (00:00:01 – 00:01:13)
Ko viņa teica (kopsavilkums)
Arnis Krauze ievadā norāda, ka Vaira Vīķe-Freiberga (VVF) jau pirms gada salīdzinājusi Donalda Trampa (DT) pozīcijas ar “vēja rādītāju”, kurš viegli maina virzienu. Toreiz viņa teikusi, ka, ja Tramps saka ko šķietami absurdu, atliek cerība, ka viņš mainīs domas.

Godīgā atbilde
Šajā posmā uzsvars ir uz Trampa neprognozējamo ārpolitiku. Jau pirms viņa kļūšanas par prezidentu daudzi – tostarp VVF – atzina, ka šādas impulsīvas idejas ir bīstamas, bet tajā pašā laikā pastāv cerība, ka, ja viņš “vienu dienu saka kaut ko galēji radikālu, tad jau nākamajā var pateikt ko pavisam pretēju.”

Komentārs par manipulāciju / kontekstu
Izmanto vienkāršu, visiem saprotamu salīdzinājumu (“vēja rādītājs”), lai radītu košu tēlu.
Veido emocionālu fonu: klausītājs tiek sagatavots kritikai par to, cik bīstama vai vienkārši mulsinoša var būt Trampa neparedzamība.
Pieminēt, ka tas viss bija “jau pirms gada”, piešķir VVF viedoklim “redzīguma” auru.`
        }
      ]
    },
    {
      id: 'artis-pabriks',
      name: 'Artis Pabriks',
      party: 'Attīstībai/Par!',
      image: 'images/artis_pabriks.jpg',
      videos: [
        {
          youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          translation: 'Pabriks: Drošības jautājumi ir mūsu prioritāte...'
        }
      ]
    }
  ],
  opposition: [
    {
      id: 'ainars-slesers',
      name: 'Ainārs Šlesers',
      party: 'LPV',
      image: 'images/ainars_slesers.jpg',
      videos: [
        {
          youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          translation: 'Šlesers: Valdība nepareizi pārvalda valsts resursus...'
        }
      ]
    },
    {
      id: 'alvis-hermanis',
      name: 'Alvis Hermanis',
      party: 'Saskaņa',
      image: 'images/alvis_hermanis.jpg',
      videos: [
        {
          youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          translation: 'Hermanis: Sociālā nevienlīdzība jāsamazina...'
        }
      ]
    }
  ]
};

// ------------------
// DOM elementi
// ------------------
const btnLeft               = document.getElementById("btn-left");   // Poga "PRĀTOTĀJI"
const btnRight              = document.getElementById("btn-right");  // Poga "ATPRĀTOTĀJI"
const container             = document.getElementById("container");
const left                  = document.getElementById("left");
const right                 = document.getElementById("right");
const mainTitle             = document.getElementById("main-title");
const leftTitle             = document.getElementById("left-title");
const rightTitle            = document.getElementById("right-title");
const buttonWrapper         = document.getElementById("button-wrapper");

const governmentList        = document.getElementById("government-list");
const oppositionList        = document.getElementById("opposition-list");
const governmentSelector    = document.getElementById("government-selector");
const oppositionSelector    = document.getElementById("opposition-selector");
const governmentVideoSection= document.getElementById("government-video");
const oppositionVideoSection= document.getElementById("opposition-video");

let activeSide              = null;
let currentPolitician       = { government: null, opposition: null };
let currentVideoIndex       = { government: 0, opposition: 0 };
let resetTimeout            = null;

// ------------------
// Aizpilda politiku sarakstus
// ------------------
function populatePoliticians() {
  governmentList.innerHTML = '';
  oppositionList.innerHTML = '';

  // Aizpilda valdības pusi
  politicians.government.forEach(politician => {
    governmentList.innerHTML += `
      <div class="politician-card" onclick="selectPolitician('government', '${politician.id}')">
        <div class="politician-image" style="background-image: url('${politician.image}')"></div>
        <div class="politician-name">${politician.name}</div>
        <div class="politician-party">${politician.party}</div>
      </div>
    `;
  });

  // Aizpilda opozīcijas pusi
  politicians.opposition.forEach(politician => {
    oppositionList.innerHTML += `
      <div class="politician-card" onclick="selectPolitician('opposition', '${politician.id}')">
        <div class="politician-image" style="background-image: url('${politician.image}')"></div>
        <div class="politician-name">${politician.name}</div>
        <div class="politician-party">${politician.party}</div>
      </div>
    `;
  });
}

// ------------------
// Izvēlas politiķi un rāda viņa video
// ------------------
function selectPolitician(side, id) {
  const politician = politicians[side].find(p => p.id === id);
  currentPolitician[side] = politician;
  currentVideoIndex[side] = 0;
  showVideo(side);
}

// ------------------
// Parāda video bloku
// ------------------
function showVideo(side) {
  const politician = currentPolitician[side];
  const videoData = politician.videos[currentVideoIndex[side]];

  // Slēpjam lielās pogas centrā
  buttonWrapper.style.display = 'none';

  if (side === 'government') {
    document.getElementById('government-video-iframe').src = videoData.youtube;
    document.getElementById('government-translation').textContent = videoData.translation;
    governmentSelector.classList.remove('visible');
    governmentVideoSection.style.display = 'block';
  } else {
    document.getElementById('opposition-video-iframe').src = videoData.youtube;
    document.getElementById('opposition-translation').textContent = videoData.translation;
    oppositionSelector.classList.remove('visible');
    oppositionVideoSection.style.display = 'block';
  }
}

// ------------------
// "Atpakaļ uz sarakstu" poga
// ------------------
function backToSelection(side) {
  // Rādām centrālās pogas atpakaļ
  buttonWrapper.style.display = 'flex';

  if (side === 'government') {
    document.getElementById('government-video-iframe').src = '';
    governmentVideoSection.style.display = 'none';
    governmentSelector.classList.add('visible');
  } else {
    document.getElementById('opposition-video-iframe').src = '';
    oppositionVideoSection.style.display = 'none';
    oppositionSelector.classList.add('visible');
  }
}

// ------------------
// Klikšķis uz "PRĀTOTĀJI" (kreisā puse) vai "ATPRĀTOTĀJI" (labā puse)
// ------------------
function setActive(side) {
  if (activeSide === side) return; // Ja jau aktīva šī puse, nedaram neko

  // Notīrām, ja bijām gaidījuši "resetActive"
  if (resetTimeout) {
    clearTimeout(resetTimeout);
    resetTimeout = null;
  }

  activeSide = side;

  if (side === "left") {
    // Aktivizē kreiso pusi
    left.classList.add("active");
    right.classList.add("inactive");

    leftTitle.classList.add("visible");
    rightTitle.classList.remove("visible");

    // Slēpjam galveno virsrakstu centrā
    mainTitle.classList.add("hidden");

    // Rādām valdības politiķu sarakstu
    governmentSelector.classList.add('visible');
    oppositionSelector.classList.remove('visible');
    // Ja pirms tam bijām atvēruši opozīcijas video, to slēdzam
    oppositionVideoSection.style.display = 'none';

  } else if (side === "right") {
    // Aktivizē labo pusi
    right.classList.add("active");
    left.classList.add("inactive");

    rightTitle.classList.add("visible");
    leftTitle.classList.remove("visible");

    mainTitle.classList.add("hidden");

    // Rādām opozīcijas politiķu sarakstu
    oppositionSelector.classList.add('visible');
    governmentSelector.classList.remove('visible');
    governmentVideoSection.style.display = 'none';
  }
}

// ------------------
// Ja aizved peles kursoru pretējā pusē - atgriežas sākumā
// ------------------
function resetActive() {
  if (resetTimeout) {
    clearTimeout(resetTimeout);
  }

  resetTimeout = setTimeout(() => {
    // Apstādinām videoklipus (noņemam src)
    document.getElementById('government-video-iframe').src = '';
    document.getElementById('opposition-video-iframe').src = '';

    // Noņemam aktīvo/ neaktīvo klasi
    left.classList.remove("active", "inactive");
    right.classList.remove("active", "inactive");

    // Slēpjam sānu virsrakstus
    leftTitle.classList.remove("visible");
    rightTitle.classList.remove("visible");

    // Slēpjam politiķu sarakstus un video sadaļas
    governmentSelector.classList.remove('visible');
    oppositionSelector.classList.remove('visible');
    governmentVideoSection.style.display = 'none';
    oppositionVideoSection.style.display = 'none';

    activeSide = null;

    // Atjaunojam lielo nosaukumu un pogas centrā
    mainTitle.classList.remove('hidden');
    buttonWrapper.style.display = 'flex';

    // Mazs triks, lai atsvaidzinātu fade-in animāciju
    [mainTitle, btnLeft, btnRight].forEach(el => {
      el.classList.remove('fade-in');
      void el.offsetWidth; 
      el.classList.add('fade-in');
    });

    resetTimeout = null;
  }, 100);
}

// ------------------
// Peles kustība – ja nobrauc dziļi pretējos sānos, atgriež startu
// ------------------
function checkCursorPosition(e) {
  if (!activeSide) return;

  const rect = container.getBoundingClientRect();
  const threshold = rect.width * 0.15; // 15% no kopplatuma
  const x = e.clientX;
  const y = e.clientY;

  const withinY = y >= rect.top && y <= rect.bottom;
  if (!withinY) return;

  // Ja "kreisā" aktīva, bet pele aizgājusi pašā labajā malā
  if (activeSide === 'left' && x > rect.right - threshold) {
    resetActive();
  }
  // Ja "labā" aktīva, bet pele aizgājusi pašā kreisajā malā
  else if (activeSide === 'right' && x < rect.left + threshold) {
    resetActive();
  }
}

// ------------------
// Palaiž visu, kad ielādējas logs
// ------------------
window.addEventListener('load', () => {
  // 1) Pārliecināmies, ka "button-wrapper" ar pogām IR iekš .content (nevis netīšām .left / .right)
  const content = document.querySelector('.content');
  if (content && buttonWrapper && buttonWrapper.parentNode !== content) {
    content.appendChild(buttonWrapper);
  }

  // 2) Aizpildām politiķu sarakstu
  populatePoliticians();
});

// ------------------
// Notikumu klausītāji
// ------------------
container.addEventListener('mousemove', checkCursorPosition);
btnLeft.addEventListener('click', () => setActive('left'));
btnRight.addEventListener('click', () => setActive('right'));
