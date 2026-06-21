let currentUser = null;

async function initAuth() {
  const { data: { session } } = await sb.auth.getSession();
  currentUser = session?.user ?? null;
  updateAuthUI();

  sb.auth.onAuthStateChange((event, session) => {
    currentUser = session?.user ?? null;
    updateAuthUI();
    if (event === 'SIGNED_IN') renderPlaylists();
    if (event === 'SIGNED_OUT') {
      const el = document.getElementById('sb-playlist-list');
      if (el) el.innerHTML = '';
    }
  });
}

async function signInWithGoogle() {
  const { error } = await sb.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.href }
  });
  if (error) showAuthMsg(error.message, false);
}

async function signInWithEmail() {
  const email = document.getElementById('sb-email').value.trim();
  const pass  = document.getElementById('sb-pass').value;
  if (!email || !pass) { showAuthMsg('Aizpildi e-pastu un paroli.', false); return; }
  const { error } = await sb.auth.signInWithPassword({ email, password: pass });
  if (error) showAuthMsg(error.message, false);
}

async function signUpWithEmail() {
  const email = document.getElementById('sb-email').value.trim();
  const pass  = document.getElementById('sb-pass').value;
  if (!email || !pass) { showAuthMsg('Aizpildi e-pastu un paroli.', false); return; }
  const { error } = await sb.auth.signUp({ email, password: pass });
  if (error) showAuthMsg(error.message, false);
  else showAuthMsg('Pārbaudī e-pastu un apstiprin reģistrāciju!', true);
}

async function signOut() {
  await sb.auth.signOut();
}

function showAuthMsg(msg, isInfo) {
  const el = document.getElementById('sb-auth-msg');
  if (!el) return;
  el.textContent = msg;
  el.style.color = isInfo ? '#4ba3ff' : '#e74c3c';
}

function updateAuthUI() {
  const loginEl = document.getElementById('sb-login');
  const userEl  = document.getElementById('sb-user');
  const plsEl   = document.getElementById('sb-playlists');
  if (!loginEl) return;

  if (currentUser) {
    loginEl.style.display = 'none';
    userEl.style.display  = 'flex';
    plsEl.style.display   = 'block';
    const em = document.getElementById('sb-user-email');
    if (em) em.textContent = currentUser.email;
  } else {
    loginEl.style.display = 'block';
    userEl.style.display  = 'none';
    plsEl.style.display   = 'none';
  }
}

document.addEventListener('DOMContentLoaded', initAuth);
