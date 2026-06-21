let userPlaylists = [];
let activePl = null;

function _esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function renderPlaylists() {
  if (!currentUser) return;
  const { data, error } = await sb.from('playlists')
    .select('*')
    .eq('user_id', currentUser.id)
    .order('created_at', { ascending: false });
  if (error) { console.warn('Playlist ielāde:', error); return; }
  userPlaylists = data || [];
  renderPlaylistList();
}

function renderPlaylistList() {
  const container = document.getElementById('sb-playlist-list');
  if (!container) return;
  container.innerHTML = '';
  if (!userPlaylists.length) {
    container.innerHTML = '<p class="sb-empty">Vēl nav sarakstu.</p>';
    return;
  }
  userPlaylists.forEach(pl => {
    const div = document.createElement('div');
    div.className = 'sb-pl-item';
    div.innerHTML = `
      <span class="sb-pl-name">${_esc(pl.name)}</span>
      <div class="sb-pl-btns">
        <button class="sb-icon-btn" title="Atskaņot visu" data-a="play">▶</button>
        <button class="sb-icon-btn" title="${pl.is_public ? 'Padarīt privātu' : 'Padarīt publisku'}" data-a="pub">${pl.is_public ? '🔓' : '🔒'}</button>
        ${pl.is_public ? `<button class="sb-icon-btn" title="Kopēt saiti" data-a="link">🔗</button>` : ''}
        <button class="sb-icon-btn sb-del-btn" title="Dzēst" data-a="del">✕</button>
      </div>`;
    div.querySelector('.sb-pl-name').onclick       = ()  => openPlaylistDetail(pl);
    div.querySelector('[data-a="play"]').onclick    = e  => { e.stopPropagation(); playPlaylist(pl.id); };
    div.querySelector('[data-a="pub"]').onclick     = e  => { e.stopPropagation(); togglePublic(pl); };
    const lb = div.querySelector('[data-a="link"]');
    if (lb) lb.onclick = e => { e.stopPropagation(); copyPlaylistLink(pl); };
    div.querySelector('[data-a="del"]').onclick     = e  => { e.stopPropagation(); deletePlaylist(pl.id); };
    container.appendChild(div);
  });
}

async function createNewPlaylist() {
  const inp = document.getElementById('sb-new-pl-name');
  const name = inp?.value.trim();
  if (!name || !currentUser) return;
  const { error } = await sb.from('playlists').insert({ user_id: currentUser.id, name });
  if (error) { alert('Kļūda: ' + error.message); return; }
  inp.value = '';
  renderPlaylists();
}

async function deletePlaylist(id) {
  if (!confirm('Dzēst šo sarakstu?')) return;
  await sb.from('playlists').delete().eq('id', id);
  if (activePl?.id === id) { activePl = null; closePlaylistDetail(); }
  renderPlaylists();
}

async function togglePublic(pl) {
  const { error } = await sb.from('playlists').update({ is_public: !pl.is_public }).eq('id', pl.id);
  if (!error) renderPlaylists();
}

function copyPlaylistLink(pl) {
  const url = `${window.location.origin}/muzika.html?playlist=${pl.share_token}`;
  navigator.clipboard.writeText(url).then(() => alert('Saite nokopēta!\n' + url));
}

async function openPlaylistDetail(pl) {
  activePl = pl;
  const nameEl = document.getElementById('sb-detail-name');
  if (nameEl) nameEl.textContent = pl.name;
  document.getElementById('sb-pl-list-view').style.display = 'none';
  document.getElementById('sb-pl-detail-view').style.display = 'block';

  const { data, error } = await sb.from('playlist_songs')
    .select('*').eq('playlist_id', pl.id).order('position');

  const container = document.getElementById('sb-detail-songs');
  container.innerHTML = '';
  if (error || !data?.length) {
    container.innerHTML = '<p class="sb-empty">Saraksts tukšs.<br>Nospiedi + pie dziesmas!</p>';
    return;
  }
  data.forEach((row, idx) => {
    const div = document.createElement('div');
    div.className = 'sb-detail-song';
    div.innerHTML = `<span class="sb-song-num">${idx + 1}</span>
      <span class="sb-song-title">${_esc(row.song_id)}</span>
      <button class="sb-icon-btn sb-del-btn" title="Noņemt">✕</button>`;
    div.querySelector('.sb-icon-btn').onclick = () => removeSongFromPlaylist(row.id, pl.id);
    container.appendChild(div);
  });
}

function closePlaylistDetail() {
  activePl = null;
  document.getElementById('sb-pl-list-view').style.display = 'block';
  document.getElementById('sb-pl-detail-view').style.display = 'none';
}

async function addSongToPlaylist(songId, playlistId) {
  const { count } = await sb.from('playlist_songs')
    .select('id', { count: 'exact', head: true })
    .eq('playlist_id', playlistId);
  const { error } = await sb.from('playlist_songs').insert({
    playlist_id: playlistId, song_id: songId, position: count || 0
  });
  if (error && error.code !== '23505') { console.warn('Add song:', error); return false; }
  if (activePl?.id === playlistId) openPlaylistDetail(activePl);
  return true;
}

async function removeSongFromPlaylist(rowId, playlistId) {
  await sb.from('playlist_songs').delete().eq('id', rowId);
  const pl = userPlaylists.find(p => p.id === playlistId);
  if (pl) openPlaylistDetail(pl);
}

async function playPlaylist(playlistId) {
  const { data } = await sb.from('playlist_songs')
    .select('song_id').eq('playlist_id', playlistId).order('position');
  if (!data?.length) { alert('Saraksts ir tukšs!'); return; }
  if (typeof startPlaylistMode === 'function') startPlaylistMode(data.map(r => r.song_id));
}

function showAddToPlaylistPopup(songId, anchorBtn) {
  if (!currentUser) { openSidebar(); return; }

  document.querySelectorAll('.sb-add-popup').forEach(p => p.remove());
  const popup = document.createElement('div');
  popup.className = 'sb-add-popup';

  if (!userPlaylists.length) {
    popup.innerHTML = '<div class="sb-pop-empty">Nav sarakstu.<br>Izveido sānjoslā!</div>';
  } else {
    userPlaylists.forEach(pl => {
      const btn = document.createElement('button');
      btn.className = 'sb-pop-item';
      btn.textContent = pl.name;
      btn.onclick = async e => {
        e.stopPropagation();
        const ok = await addSongToPlaylist(songId, pl.id);
        if (ok) { btn.textContent = '✓ ' + pl.name; btn.style.color = '#4ba3ff'; btn.disabled = true; }
      };
      popup.appendChild(btn);
    });
  }

  anchorBtn.style.position = 'relative';
  anchorBtn.appendChild(popup);

  setTimeout(() => {
    function closePopup(e) {
      if (!popup.contains(e.target)) { popup.remove(); document.removeEventListener('click', closePopup); }
    }
    document.addEventListener('click', closePopup);
  }, 10);
}

function openSidebar()  { document.getElementById('playlist-sidebar')?.classList.remove('sb-closed'); }
function closeSidebar() { document.getElementById('playlist-sidebar')?.classList.add('sb-closed'); }
function toggleSidebar(){ document.getElementById('playlist-sidebar')?.classList.toggle('sb-closed'); }
