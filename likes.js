const SUPABASE_URL = 'https://czeqqdorcwmonjmgtbsu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_kSYMKb3RH53KAsyDyHWJ0g_axqhoOeE';

const _h = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json'
};

function getDeviceId() {
  let id = localStorage.getItem('puteklis_device_id');
  if (!id) {
    id = (typeof crypto.randomUUID === 'function')
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem('puteklis_device_id', id);
  }
  return id;
}

let _likeCache = null;

async function loadLikeData() {
  if (_likeCache) return _likeCache;
  const deviceId = getDeviceId();
  try {
    const [countsRes, myRes] = await Promise.all([
      fetch(`${SUPABASE_URL}/rest/v1/song_like_counts?select=song_id,count`, { headers: _h }),
      fetch(`${SUPABASE_URL}/rest/v1/song_likes?device_id=eq.${encodeURIComponent(deviceId)}&select=song_id`, { headers: _h })
    ]);
    const counts = countsRes.ok ? await countsRes.json() : [];
    const myLikes = myRes.ok ? await myRes.json() : [];
    _likeCache = {
      countMap: Object.fromEntries(counts.map(r => [r.song_id, r.count])),
      likedSet: new Set(myLikes.map(r => r.song_id))
    };
  } catch (e) {
    console.warn('Likes ielāde neizdevās:', e);
    _likeCache = { countMap: {}, likedSet: new Set() };
  }
  return _likeCache;
}

async function initLikes() {
  const { countMap, likedSet } = await loadLikeData();
  document.querySelectorAll('.like-btn').forEach(btn => {
    const id = btn.dataset.songId;
    const liked = likedSet.has(id);
    btn.querySelector('.like-heart').textContent = liked ? '♥' : '♡';
    btn.querySelector('.like-count').textContent = countMap[id] ?? 0;
    btn.classList.toggle('liked', liked);
  });
}

function attachLikeHandler(btn) {
  btn.addEventListener('click', async () => {
    const songId = btn.dataset.songId;
    const isLiked = btn.classList.contains('liked');
    const countEl = btn.querySelector('.like-count');
    const heartEl = btn.querySelector('.like-heart');
    const cur = parseInt(countEl.textContent) || 0;
    const deviceId = getDeviceId();

    const newLiked = !isLiked;
    btn.classList.toggle('liked', newLiked);
    heartEl.textContent = newLiked ? '♥' : '♡';
    countEl.textContent = newLiked ? cur + 1 : Math.max(0, cur - 1);
    btn.disabled = true;

    let ok = false;
    try {
      if (isLiked) {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/song_likes?song_id=eq.${encodeURIComponent(songId)}&device_id=eq.${encodeURIComponent(deviceId)}`,
          { method: 'DELETE', headers: _h }
        );
        ok = res.ok;
      } else {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/song_likes`, {
          method: 'POST',
          headers: { ..._h, 'Prefer': 'return=minimal' },
          body: JSON.stringify({ song_id: songId, device_id: deviceId })
        });
        ok = res.ok || res.status === 409;
      }
    } catch (e) {
      console.warn('Like neizdevās:', e);
    }

    btn.disabled = false;

    if (ok && _likeCache) {
      if (newLiked) {
        _likeCache.likedSet.add(songId);
        _likeCache.countMap[songId] = cur + 1;
      } else {
        _likeCache.likedSet.delete(songId);
        _likeCache.countMap[songId] = Math.max(0, cur - 1);
      }
    }
    if (!ok) {
      btn.classList.toggle('liked', isLiked);
      heartEl.textContent = isLiked ? '♥' : '♡';
      countEl.textContent = cur;
    }
  });
}
