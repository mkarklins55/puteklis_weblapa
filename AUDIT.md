# Puteklis.com — Koda audits
**Datums:** 2026-06-20  
**Auditētās lapas:** muzika.html, index.html, jaunumi.html, maksla.html, foto.html, raksti.html, index_en.html, karaoke.js, likes.js, analytics.js, assets/css/main_puteklis.css, generate_share_pages.js

---

## Kritiskās kļūdas (labots ✅)

### 1. Bojāts emoji `muzika.html` — `playNext()` funkcija
- **Problēma:** Kad dziesmu saraksts beidzas, atskaņošanas poga rādīja `â–¶ï¸` (bojāts UTF-8 kodējums) vietā `▶️`
- **Cēlonis:** Fails tika saglabāts ar nepareizu rakstzīmju kodējumu
- **Labots:** Rinda `playNext()` funkcijā — nomainīts uz pareizu `▶️`

### 2. Bojāts Google Analytics ID — `muzika.html`
- **Problēma:** `<script src="...gtag/js?id=Gâ€'RKRHBD6CN4">` — Analytics netika ielādēts
- **Cēlonis:** UTF-8 mojibake — `â€'` bija en-dash (`–`) vai līdzīga rakstzīme
- **Labots:** Nomainīts uz `G-RKRHBD6CN4`

### 3. Bojāts Google Analytics ID — `jaunumi.html`
- **Problēma:** `id=G‑RKRHBD6CN4"` — U+8209 (non-breaking hyphen) vietā parasta domuzīme
- **Labots:** Nomainīts uz `G-RKRHBD6CN4`

---

## Vidējas problēmas (labots ✅)

### 4. Nepilnas OG meta tags — `muzika.html`
- **Problēma:** Bija tikai `og:image`, trūka `og:title`, `og:description`, `og:url`, `og:type`
- **Ietekme:** Nepilns share preview sociālajos tīklos
- **Labots:** Pievienoti visi četri trūkstošie OG atribūti

### 5. XSS risks — `jaunumi.html`
- **Problēma:** `card.innerHTML = \`<h2>${entry.title}</h2>...\`` — tieša HTML injekcija no JSON datiem
- **Risks:** Zems (dati kontrolēti no lapas īpašnieka), bet sliktā prakse
- **Labots:** Nomainīts uz `textContent` un `createElement` bez innerHTML

### 6. `<link rel="alternate">` iekš `<body>` — `jaunumi.html`
- **Problēma:** RSS links bija `<body>` vietā `<head>`
- **Labots:** Pārvietots uz `<head>`

### 7. Nederīgs `loading="lazy"` uz `<div>` — `index.html`
- **Problēma:** `<div class="background-image" loading="lazy">` — šis atribūts der tikai `<img>` un `<iframe>` elementiem, uz `<div>` tam nav ietekmes
- **Labots:** Atribūts noņemts

---

## Vidējas problēmas (nav labots — ieteikumi)

### 8. Nekonsekventa navigācija starp lapām
- **Problēma:** Dažādas lapas rāda atšķirīgus nav linkus:
  - `index.html`: 10 links (Manifests, Ceļojumi, Foto, Datori, Politika, Māksla, Mūzika, Raksti, Jaunumi, EN)
  - `muzika.html`: 3 links (Manifests, Māksla, Mūzika)
  - `jaunumi.html`: 5 links (Manifests, Jaunumi, Raksti, Abonēt, EN)
- **Ieteikums:** Izveidot vienotu navigācijas fragmentu vai JS komponentu

### 9. Dublikāts CSS — `jaunumi.html`
- **Problēma:** `body`, `.container`, `.article-card` stili definēti divas reizes `<style>` blokā
- **Ieteikums:** Noņemt dublikātus

### 10. `main_puteklis.css` nepareizs komentārs
- **Problēma:** `.dark-overlay` — komentārā raksta "40% caurspīdīgumu", bet kods ir `rgba(0,0,0,0.9)` (= 90% necaurspīdīgs)
- **Faila atrašanās vieta:** `assets/css/main_puteklis.css` rindu ~95

---

## Zemas prioritātes novērojumi

### 11. `karaoke.js` — slēptā globālā atkarība
- **Problēma:** `karaoke.js` izmanto `songs` mainīgo (piemēram `songs.map(...)`) kas nav definēts pašā failā — tas ir jādefinē uz lapas pirms skripta ielādes
- **Risks:** Ja `karaoke.js` tiek iekļauts lapā bez `songs` globālā mainīgā — kļūda konsolē
- **Faila atrašanās vieta:** `karaoke.js:37`

### 12. `likes.js` — Azure Functions CORS atkarība
- **Problēma:** `likes.js` sūta pieprasījumus uz `puteklis-functions.azurewebsites.net` — cits domēns
- **Risks:** Ja Azure Functions ir bojāts vai CORS nav konfigurēts — like poga klusē, kļūda konsolē
- **Piezīme:** `muzika.html` pašlaik NEiekļauj `likes.js`, tā ir aktīva tikai uz `muzika_with_likes.html`

### 13. Attīstības/vecās versijas faili
Repozitorijā ir vairāki faili kas šķiet neizmantoti vai vecas versijas:
- `muzika_json.html` — veca versija bez share/player funkcionalitātes
- `muzika_with_likes.html` — testa versija ar likes
- `script.js`, `script_cel.js`, `style.css`, `main.css` (saknes mapē) — nav skaidrs vai tiek izmantoti

### 14. Ārējās CDN atkarības — `foto.html`
- **Problēma:** Google Fonts un Lightbox2 tiek ielādēti no CDN
- **GDPR:** Apmeklētāju IP adreses tiek nosūtītas uz Google/jsDelivr
- **Ieteikums:** Self-host fonti ja GDPR atbilstība ir prioritāte

### 15. `share/` mapes lapas — nav navigācijas
- **Problēma:** 171 share lapas satur tikai JS redirect un `<body>` ir tukšs ja JavaScript ir izslēgts
- **Piezīme:** Zemāk prioritārs jo mūsdienu pārlūki gandrīz vienmēr izpilda JS

### 16. `index.html` — `<h1>` satura mirgo pirms animācijas
- **Problēma:** `<h1 class="animated-title" data-text="Putekļa manifests">Putekļa manifests</h1>` — JavaScript pārvērš tekstu par animētiem `<span>`, bet ielādes laikā ir redzams nefomatēts teksts
- **Ieteikums:** Sākumā slēpt ar CSS: `h1.animated-title { opacity: 0 }`, atklāt pēc JS

---

## Kopsavilkums

| Kategorija | Skaits | Labots |
|---|---|---|
| Kritiskas kļūdas | 3 | ✅ 3/3 |
| Vidējas problēmas | 7 | ✅ 4/7 |
| Zemas prioritātes | 6 | — |

### Labotie faili:
- `muzika.html` — emoji, Analytics ID, OG tags
- `jaunumi.html` — Analytics ID, RSS link, XSS, navigācija
- `index.html` — `loading="lazy"` noņemts

### Ieteicamās nākamās darbības:
1. Vienota navigācijas komponente visām lapām
2. Noņemt `muzika_json.html`, `muzika_with_likes.html` ja vairs nav vajadzīgi
3. Izlīdzināt CSS dublikātus `jaunumi.html`
