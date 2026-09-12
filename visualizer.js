const GENRE_PALETTE = [
  { keys: ['metal','härte','industrial noir'],  h: 0,   glow: '#ff2200', rgb: '255,34,0'   },
  { keys: ['industrial','noise'],                h: 10,  glow: '#cc3300', rgb: '204,51,0'   },
  { keys: ['darkwave','gothic','dark synth'],    h: 270, glow: '#9933ff', rgb: '153,51,255' },
  { keys: ['punk','grunge'],                     h: 340, glow: '#ff0055', rgb: '255,0,85'   },
  { keys: ['blues'],                             h: 215, glow: '#1166ff', rgb: '17,102,255' },
  { keys: ['jazz'],                              h: 42,  glow: '#ffaa00', rgb: '255,170,0'  },
  { keys: ['cabaret','theatre','chanson'],        h: 330, glow: '#ff0088', rgb: '255,0,136'  },
  { keys: ['rock'],                              h: 20,  glow: '#ff5500', rgb: '255,85,0'   },
  { keys: ['country','folk'],                    h: 35,  glow: '#cc8800', rgb: '204,136,0'  },
  { keys: ['pop','electro','synth'],             h: 300, glow: '#dd00cc', rgb: '221,0,204'  },
  { keys: ['ambient','cinematic','classical'],   h: 200, glow: '#00aaff', rgb: '0,170,255'  },
];

function getGenrePalette(styleStr) {
  const s = styleStr.toLowerCase();
  for (const pal of GENRE_PALETTE) {
    if (pal.keys.some(k => s.includes(k))) return pal;
  }
  return { h: 210, glow: '#4ba3ff', rgb: '75,163,255' };
}

let _ctx = null, _analyser = null, _src = null, _raf = null, _glow = '#4ba3ff';

function initVisualizer(audioEl) {
  try {
    if (_ctx) { if (_ctx.state === 'suspended') _ctx.resume(); return; }
    const src = audioEl.src || '';
    const isCross = src && (() => { try { return new URL(src).origin !== location.origin; } catch(e) { return false; } })();
    if (isCross && !audioEl.crossOrigin) return;
    _ctx = new (window.AudioContext || window.webkitAudioContext)();
    _ctx.resume();
    _analyser = _ctx.createAnalyser();
    _analyser.fftSize = 128;
    _analyser.smoothingTimeConstant = 0.82;
    _src = _ctx.createMediaElementSource(audioEl);
    _src.connect(_analyser);
    _analyser.connect(_ctx.destination);
  } catch(e) { console.warn('Vizualizators:', e); }
}

function setAmbientStyle(styleStr) {
  const pal = getGenrePalette(styleStr);
  _glow = pal.glow;
  const root = document.documentElement;
  root.style.setProperty('--viz-glow', pal.glow);
  root.style.setProperty('--viz-rgb', pal.rgb);
  document.body.style.transition = 'background 1.8s ease';
  document.body.style.background =
    `radial-gradient(ellipse 90% 35% at 50% -5%, hsl(${pal.h},65%,10%) 0%, #121212 52%)`;
}

function startViz() {
  const canvas = document.getElementById('viz-canvas');
  if (!canvas) return;
  if (_raf) cancelAnimationFrame(_raf);

  if (_analyser) {
    // Īstā vizualizācija — frekvenču dati no AudioContext
    const ctx2d = canvas.getContext('2d');
    const data = new Uint8Array(_analyser.frequencyBinCount);
    function draw() {
      _raf = requestAnimationFrame(draw);
      const W = canvas.width  = canvas.offsetWidth;
      const H = canvas.height = canvas.offsetHeight;
      _analyser.getByteFrequencyData(data);
      ctx2d.clearRect(0, 0, W, H);
      const n = data.length, barW = W / n;
      for (let i = 0; i < n; i++) {
        const v = data[i] / 255, bH = v * H;
        const a = Math.round((0.25 + v * 0.75) * 255).toString(16).padStart(2, '0');
        const grad = ctx2d.createLinearGradient(0, H, 0, H - bH);
        grad.addColorStop(0, _glow + '55');
        grad.addColorStop(1, _glow + a);
        ctx2d.fillStyle = grad;
        ctx2d.fillRect(i * barW, H - bH, Math.max(barW - 1, 1), bH);
      }
    }
    draw();
  } else {
    // Animēta vizualizācija bez AudioContext (sinusa viļņi žanra krāsā)
    const ctx2d = canvas.getContext('2d');
    const N = 32;
    function drawFake() {
      _raf = requestAnimationFrame(drawFake);
      const W = canvas.width  = canvas.offsetWidth;
      const H = canvas.height = canvas.offsetHeight;
      ctx2d.clearRect(0, 0, W, H);
      const t = Date.now() / 1000;
      const barW = W / N;
      for (let i = 0; i < N; i++) {
        const v = 0.15 + 0.6 * Math.abs(
          Math.sin(t * 2.1 + i * 0.45) * Math.cos(t * 1.7 + i * 0.3)
        );
        const bH = v * H;
        const a = Math.round((0.25 + v * 0.75) * 255).toString(16).padStart(2, '0');
        const grad = ctx2d.createLinearGradient(0, H, 0, H - bH);
        grad.addColorStop(0, _glow + '55');
        grad.addColorStop(1, _glow + a);
        ctx2d.fillStyle = grad;
        ctx2d.fillRect(i * barW, H - bH, Math.max(barW - 1, 1), bH);
      }
    }
    drawFake();
  }
}

function stopViz() {
  if (_raf) { cancelAnimationFrame(_raf); _raf = null; }
}

// Kad telefons atgriežas no fona/slēgta ekrāna, atsāk AudioContext
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && _ctx && _ctx.state === 'suspended') {
    _ctx.resume();
  }
});

// iOS: AudioContext bieži suspended pēc klusuma perioda — atsāk pie katra play
document.addEventListener('play', () => {
  if (_ctx && _ctx.state === 'suspended') _ctx.resume();
}, true);
