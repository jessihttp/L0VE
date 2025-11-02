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

const extras = [
  'Eres mi canción favorita en repeat.',
  'Si me pierdo, búscame en tus brazos.',
  'Gracias por ser mi lugar seguro.'
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

  if (name === 'home') showRandomPhrase('home');
  if (name === 'carta') showRandomPhrase('carta');
}

buttons.home.addEventListener('click', () => showSection('home'));
buttons.carta.addEventListener('click', () => showSection('carta'));
buttons.musica.addEventListener('click', () => showSection('musica'));

// --- Frases aleatorias ---
const phraseBox = document.getElementById('phraseBox');
function showRandomPhrase(page) {
  let pool = [];
  if (page === 'home') pool = loveShort;
  if (page === 'carta') pool = patience;
  phraseBox.textContent = pool[Math.floor(Math.random() * pool.length)];
}

// --- Galería de fotos ---
const imgs = ['yop.jpg', 'us.jpg', 'tuyyo.jpg', '22.jpg', 'LL.jpg', 'H.jpg', 'L.jpg', 'B.jpg', 'jh.jpg', 'jj.png', 'N.jpg', 'Ñ.jpg', 'O.jpg', 'Y.jpg'];
const gallery = document.getElementById('gallery');
imgs.forEach(name => {
  const div = document.createElement('div');
  div.className = 'photo';
  const img = document.createElement('img');
  img.src = name;
  img.alt = name;
  div.appendChild(img);
  gallery.appendChild(div);

  // corazones al pasar el mouse
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
        div.appendChild(heart);
        setTimeout(() => heart.remove(), 1200);
      }, i * 150);
    }
  });
});

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
    document.querySelector('.mp3-player').classList.add('playing');

    for (let i = 0; i < 3; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.textContent = '✨';
      sparkle.style.left = (window.innerWidth / 2 + (Math.random() * 100 - 50)) + 'px';
      sparkle.style.top = (window.innerHeight / 2 + (Math.random() * 60 - 30)) + 'px';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1800);
    }
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
    document.querySelector('.mp3-player').classList.remove('playing');
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
  document.querySelector('.mp3-player').classList.add('playing');
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = '⏸️';
  document.querySelector('.mp3-player').classList.add('playing');
}

playBtn.addEventListener('click', playPause);
document.getElementById('nextTrack').addEventListener('click', nextTrack);
document.getElementById('prevTrack').addEventListener('click', prevTrack);

// Autoplay inicial
window.addEventListener('load', () => {
  loadTrack(currentTrack);
  audio.volume = 0.3;
  phraseBox.textContent = 'Eres mi ternura hecha persona.';
});

// --- Sorpresa mágica ---
const btnSorpresa = document.getElementById('btnSorpresa');
const sorpresaBox = document.getElementById('sorpresaBox');

btnSorpresa.addEventListener('click', () => {
  sorpresaBox.classList.remove('oculto');

  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = (window.innerWidth / 2 + (Math.random() * 100 - 50)) + 'px';
    sparkle.style.top = (window.innerHeight / 2 + (Math.random() * 60 - 30)) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1800);
  }
});