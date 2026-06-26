const TRANSLATIONS = {
  lv: {
    'nav.manifests': 'Manifests',
    'nav.maksla': 'Māksla',
    'nav.muzika': 'Mūzika',
    'nav.foto': 'Foto',
    'nav.piedzivojumi': 'Ceļojumi',
    'nav.raksti': 'Raksti',
    'nav.jaunumi': 'Jaunumi',
    'nav.datori': 'Datori',
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
    'pl.name': 'Saraksts',
    'pl.exit': '✕ Iziet',
    'main.title': '🎧 Putekļa radio',
    'main.all-styles': '-- Visi stili --',
    'main.search-ph': 'Meklē nosaukumu, stilu',
    'main.loading': 'Notiek ielāde...',
    'main.new-pl-ph': 'Jauna saraksta nosaukums',
    'card.lyrics': 'Vārdi',
    'card.add-title': 'Pievienot sarakstam',
    'card.share': 'Dalīties',
    'card.share-via': 'Dalīties ar...',
    'card.copy-link': 'Kopēt saiti',
    'card.lyrics-loading': 'Ielāde...',
    'page.muzika': 'Mūzika | Puteklis',
    'page.foto': 'Foto | Puteklis',
    'page.maksla': 'Māksla | Puteklis',
    'page.piedzivojumi': 'Ceļojumi | Puteklis',
    'page.raksti': 'Raksti | Puteklis',
  },
  en: {
    'nav.manifests': 'Manifesto',
    'nav.maksla': 'Art',
    'nav.muzika': 'Music',
    'nav.foto': 'Photo',
    'nav.piedzivojumi': 'Travel',
    'nav.raksti': 'Articles',
    'nav.jaunumi': 'News',
    'nav.datori': 'Tech',
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
    'pl.name': 'Playlist',
    'pl.exit': '✕ Exit',
    'main.title': '🎧 Puteklis Radio',
    'main.all-styles': '-- All genres --',
    'main.search-ph': 'Search by title, genre',
    'main.loading': 'Loading...',
    'main.new-pl-ph': 'New playlist name',
    'card.lyrics': 'Lyrics',
    'card.add-title': 'Add to playlist',
    'card.share': 'Share',
    'card.share-via': 'Share via...',
    'card.copy-link': 'Copy link',
    'card.lyrics-loading': 'Loading...',
    'page.muzika': 'Music | Puteklis',
    'page.foto': 'Photo | Puteklis',
    'page.maksla': 'Art | Puteklis',
    'page.piedzivojumi': 'Travel | Puteklis',
    'page.raksti': 'Articles | Puteklis',
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

  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const v = t(titleEl.dataset.i18n);
    if (v) document.title = v;
  }

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'lv' ? 'EN' : 'LV';

  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  if (nav) {
    const btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.style.cssText = [
      'background:none',
      'border:1px solid #888',
      'color:#f8f8f8',
      'border-radius:4px',
      'padding:2px 9px',
      'cursor:pointer',
      'font-weight:bold',
      'font-size:.85em',
      'margin-left:1.2rem',
      'vertical-align:middle',
      'letter-spacing:.05em',
    ].join(';');
    btn.onclick = () => applyLang(currentLang === 'lv' ? 'en' : 'lv');
    nav.appendChild(btn);
  }
  applyLang(currentLang);
});
