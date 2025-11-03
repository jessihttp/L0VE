// --- Frases ---
const loveShort = [
  'Te amo más de lo que las palabras alcanzan.',
  'Cada segundo contigo es magia.',
  'Tu sonrisa es mi lugar favorito.',
  'Eres mi paz, mi caos bonito.',
  'Contigo todo tiene sentido.',
  'Eres mi mejor coincidencia.',
  'Te elijo cada día, sin dudar.',
  'Tu abrazo es mi hogar.',
  'Eres mi ternura hecha persona.',
  'Amarte es mi parte favorita del día.'
];

const patience = [
  'Gracias por tu paciencia infinita, incluso cuando soy un torbellino.',
  'Tu calma me enseña a respirar.',
  'Eres ternura, paciencia y fuerza en un solo corazón.',
  'Tu forma de entenderme me hace sentir amada.',
  'Admiro tu forma de escuchar incluso mis silencios.',
  'Eres luz, eres paz, eres todo lo bonito.',
  'Tu paciencia es un regalo que no dejo de valorar.',
  'Me enamora tu forma de cuidarme sin decir nada.',
  'Eres nobleza, dulzura y magia.',
  'Tu personalidad es mi lugar seguro.'
];

// --- Secciones ---
const sections = {
  home: document.getElementById('home'),
  carta: document.getElementById('carta'),
  musica: document.getElementById('musica')
};

const buttons = {
  home: document.getElementById('btnHome'),
  carta: document.getElementById('btnCarta'),
  musica: document.getElementById('btnMusica')
};

function showSection(name) {
  Object.values(sections).forEach(sec => sec.classList.remove('show'));
  sections[name].classList.add('show');

  Object.values(buttons).forEach(btn => btn.classList.remove('active'));
  buttons[name].classList.add('active');

  if (name === 'home') showRandomPhrase(loveShort);
  if (name === 'carta') showRandomPhrase(patience);
}

// --- Frases aleatorias ---
function showRandomPhrase(pool) {
  const phraseBox = document.getElementById('phraseBox');
  if (phraseBox) {
    phraseBox.textContent = pool[Math.floor(Math.random() * pool.length)];
  }
}

// --- Navegación ---
buttons.home.addEventListener('click', () => showSection('home'));
buttons.carta.addEventListener('click', () => showSection('carta'));
buttons.musica.addEventListener('click', () => showSection('musica'));

// --- Galería de fotos ---
const imgs = ['yop.jpg', 'us.jpg', 'tuyyo.jpg', '22.jpg', 'LL.jpg', 'H.jpg', 'L.jpg', 'B.jpg', 'jh.jpg', 'jj.png', 'N.jpg', 'Ñ.jpg', 'O.jpg', 'Y.jpg'];
const gallery = document.getElementById('gallery');

if (gallery) {
  imgs.forEach(name => {
    const div = document.createElement('div');
    div.className = 'photo';
    const img = document.createElement('img');
    img.src = name;
    img.alt = name;
    div.appendChild(img);
    gallery.appendChild(div);

    // Corazones flotantes
    div.addEventListener('mouseenter', () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.className = 'heart';
          heart.textContent = '💖';
          heart.style.position = 'absolute';
          heart.style.left = Math.random() * 100 + '%';
          heart.style.top = Math.random() * 100 + '%';
          heart.style.fontSize = (12 + Math.random() * 18) + 'px';
          heart.style.pointerEvents = 'none';
          div.appendChild(heart);
          setTimeout(() => heart.remove(), 1200);
        }, i * 150);
      }
    });
  });
}

// --- Reproductor MP3 ---
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const trackName = document.getElementById('trackName');
const trackImage = document.getElementById('trackImage');

const tracks = [
  { file: 'MonL.mp3', img: 'PIN.jpg' },
  { file: 'SL.mp3', img: 'KL.jpg' },
  { file: 'MM.mp3', img: 'NAVI.jpg' }
];

let currentTrack = 0;

function loadTrack(index) {
  audio.src = tracks[index].file;
  trackName.textContent = tracks[index].file;
  trackImage.src = tracks[index].img;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
}

if (playBtn) {
  playBtn.addEventListener('click', playPause);
}
const nextBtn = document.getElementById('nextTrack');
const prevBtn = document.getElementById('prevTrack');
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);
}

// --- Sorpresa mágica ---
const btnSorpresa = document.getElementById('btnSorpresa');
const sorpresaBox = document.getElementById('sorpresaBox');

if (btnSorpresa && sorpresaBox) {
  btnSorpresa.addEventListener('click', () => {
    sorpresaBox.classList.toggle('oculto');
  });
}

// --- Inicio automático ---
window.addEventListener('load', () => {
  loadTrack(currentTrack);
  if (audio) audio.volume = 0.3;
  showRandomPhrase(loveShort);
});
