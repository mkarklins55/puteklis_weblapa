const fs = require('fs');
const path = require('path');

const songs = JSON.parse(fs.readFileSync('songs.json', 'utf8'));
const base = 'https://puteklis.com';

function slug(title) {
    return title.toLowerCase()
        .replace(/[āàáâä]/g, 'a').replace(/[čç]/g, 'c').replace(/[ēèéêë]/g, 'e')
        .replace(/[ģ]/g, 'g').replace(/[īìíîï]/g, 'i').replace(/[ķ]/g, 'k')
        .replace(/[ļ]/g, 'l').replace(/[ņ]/g, 'n').replace(/[šß]/g, 's')
        .replace(/[ūùúûü]/g, 'u').replace(/[žź]/g, 'z')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const shareDir = 'share';
if (fs.existsSync(shareDir)) fs.rmSync(shareDir, { recursive: true });
fs.mkdirSync(shareDir);

for (const song of songs) {
    const dir = path.join(shareDir, slug(song.title));
    fs.mkdirSync(dir, { recursive: true });

    const image = `${base}/${song.image.split('/').map(encodeURIComponent).join('/')}`;
    const musicUrl = `${base}/muzika.html?track=${encodeURIComponent(song.title)}`;

    const html = `<!DOCTYPE html>
<html lang="lv">
<head>
  <meta charset="UTF-8">
  <title>${esc(song.title)} | Puteklis</title>
  <meta property="og:title" content="${esc(song.title)}" />
  <meta property="og:description" content="${esc(song.style)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:url" content="${esc(musicUrl)}" />
  <meta property="og:type" content="music.song" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(song.title)}" />
  <meta name="twitter:description" content="${esc(song.style)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <meta http-equiv="refresh" content="0; url=${esc(musicUrl)}" />
</head>
<body>
  <script>window.location.replace(${JSON.stringify(musicUrl)});</script>
</body>
</html>`;

    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

console.log(`Uzģenerētas ${songs.length} share lapas mapē "${shareDir}/"`);
