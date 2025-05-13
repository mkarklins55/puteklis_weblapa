// karaoke.js — visas funkcionālās daļas, kas agrāk bija inline

/******************** UTIL *********************/
const cssSafe = str => str.replace(/[^a-z0-9]/gi, '_');
const getMainStyle = s => (s.split(',')[0] || '').trim().toLowerCase();

/******************** AUDIO LAZY LOAD + VIENA DZIESMA */
function loadAudio(el) {
  if (!el.src) {
    el.src = el.dataset.src;
    el.load();
    el.play();
  }
}
function pauseOthers(current) {
  document.querySelectorAll('audio').forEach(a => {
    if (a !== current) a.pause();
  });
}

/******************** KARTĪTES IZVEIDE *********************/
function createSongCard(song) {
  const card = document.createElement('div');
  card.className = 'song-card';
  card.style = 'width:280px;background:#2b2b2b;color:#eee;border-radius:10px;box-shadow:0 0 12px rgba(0,0,0,.4);overflow:hidden;';

  const styleText = song.style;
  const safePath = encodeURI(song.lyrics);

  card.innerHTML = `\n    <img src="${song.image}" alt="${song.title}" style="width:100%;height:180px;object-fit:cover;">\n    <div style="padding:12px;">\n      <h4 style="margin:0 0 8px 0;font-size:1.05em;">${song.title}</h4>\n      <p style="margin:0 0 8px 0;font-size:.85em;color:#bbb;">${styleText}</p>\n      <audio controls preload="none" data-src="${song.audio}" style="width:100%;" onplay="loadAudio(this); pauseOthers(this)"></audio>\n      <button class="lyrics-btn" data-lyrics="${safePath}" data-title="${song.title}"\n              style="margin-top:8px;background:#ee6c4d;border:none;color:#fff;padding:6px 10px;border-radius:5px;cursor:pointer;font-size:.9em;">Vārdi</button>\n      <div id="lyricsBox_${cssSafe(song.title)}" style="display:none;margin-top:8px;background:#111;color:#ddd;padding:8px;border-radius:5px;font-family:monospace;white-space:pre-wrap;max-height:140px;overflow-y:auto;"></div>\n    </div>`;
  return card;
}

/******************** DROPDOWN STILI *********************/
function populateStyleSelector() {
  const sel = document.getElementById('styleSelector');
  const mains = [...new Set(songs.map(s => getMainStyle(s.style)).filter(Boolean))];
  mains.forEach(st => {
    const opt = document.createElement('option');
    opt.value = st;
    opt.textContent = st;
    sel.appendChild(opt);
  });
}

/******************** LYRICS LOADER *********************/
function loadLyrics(path, title) {
  const box = document.getElementById('lyricsBox_' + cssSafe(title));
  if (!box) return;
  if (box.style.display === 'block') {
    box.style.display = 'none';
    return;
  }
  fetch(path)
    .then(r => {
      if (!r.ok) throw new Error('404');
      return r.text();
    })
    .then(txt => {
      box.textContent = txt;
      box.style.display = 'block';
    })
    .catch(() => {
      box.textContent = '❗ Teksts nav atrasts';
      box.style.display = 'block';
    });
}

/******************** FILTRS & RENDER *********************/
function filterAndRender() {
  const selVal = document.getElementById('styleSelector').value.toLowerCase();
  const term = document.getElementById('searchInput').value.toLowerCase();
  const list = songs.filter(s => {
    const mainMatch = !selVal || getMainStyle(s.style) === selVal;
    const searchMatch = s.title.toLowerCase().includes(term) || s.style.toLowerCase().includes(term);
    return mainMatch && searchMatch;
  });
  const container = document.getElementById('songListContainer');
  container.innerHTML = '';
  list.forEach(song => container.appendChild(createSongCard(song)));
  container.querySelectorAll('.lyrics-btn').forEach(btn =>
    btn.addEventListener('click', () => loadLyrics(btn.dataset.lyrics, btn.dataset.title))
  );
}

/******************** POPULAR STYLE BUTTONS *********************/
function initPopularButtons() {
  document.querySelectorAll('#popularStyles .style-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.getElementById('styleSelector').value = btn.dataset.style;
      filterAndRender();
    })
  );
}

/******************** MODĀĻA FONA KLIKŠĶIS *********************/
function closeModalOutside(evt, id) {
  if (evt.target.id === id) {
    document.getElementById(id).style.display = 'none';
  }
}

/******************** INIT *********************/
document.addEventListener('DOMContentLoaded', () => {
  populateStyleSelector();
  filterAndRender();
  initPopularButtons();
  document.getElementById('styleSelector').addEventListener('change', filterAndRender);
  document.getElementById('searchInput').addEventListener('input', filterAndRender);
});
