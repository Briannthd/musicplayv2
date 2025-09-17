// public/player.js
const tracks = [
  {
    id: 1,
    title: "Paris in the Rain",
    artist: "Lauv",
    src: "/assets/songs/Lauv - Paris in the Rain.mp3",
    cover:
      "/assets/cover/paris-in-the-rain.jpg",
  },
  {
    id: 2,
    title: "Panno",
    artist: "Zack Tabudlo",
    src: "/assets/songs/Zack Tabudlo - Pano.mp3",
    cover:
      "/assets/cover/Pano.png",
  },
  {
    id: 3,
    title: "The night",
    artist: "Avicii",
    src: "/assets/songs/Avicii - The Nights.mp3",
    cover:
      "/assets/cover/The_Nights.jpg",
  },
  {
    id: 4,
    title: "Bình yên",
    artist: "Vũ",
    src: "/assets/songs/Binh-yen-Vu.mp3",
    cover:
      "assets/cover/Binh-yen.jpg",
  },
];

// ====== DOM ======
const audio = document.getElementById("audio");
const trackListEl = document.getElementById("trackList");
const trendingGrid = document.getElementById("trendingGrid");
const searchInput = document.getElementById("searchInput");

const playerCover = document.getElementById("playerCover");
const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");

const btnPlay = document.getElementById("btnPlay");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnRepeat = document.getElementById("btnRepeat");
const btnShuffle = document.getElementById("btnShuffle");

const seek = document.getElementById("seek");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");

const themeToggle = document.getElementById("themeToggle");

// ====== State ======
let currentIndex = 0;
let isPlaying = false;
let isRepeat = false;
let isShuffle = false;

// ====== Helpers ======
const fmt = (s) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
};

function renderLists() {
  // Trending (top 4)
  trendingGrid.innerHTML = tracks
    .slice(0, 4)
    .map(
      (t) => `
    <article class="card song-card" data-id="${t.id}">
      <div class="thumb" style="background-image:url('${t.cover}')"></div>
      <div class="song-meta">
        <h3>${t.title}</h3>
        <p>${t.artist}</p>
      </div>
      <button class="play-mini" aria-label="Phát ${t.title}">▶️</button>
    </article>
  `
    )
    .join("");

  // Playlist
  trackListEl.innerHTML = tracks
    .map(
      (t, i) => `
    <button class="track" role="listitem" data-index="${i}">
      <img src="${t.cover}" alt="Bìa ${t.title}">
      <div class="t-info">
        <div class="t-title">${t.title}</div>
        <div class="t-artist">${t.artist}</div>
      </div>
      <span class="t-action">Phát</span>
    </button>
  `
    )
    .join("");
}

function loadTrack(i) {
  currentIndex = (i + tracks.length) % tracks.length;
  const t = tracks[currentIndex];
  audio.src = t.src;
  playerCover.src = t.cover;
  playerTitle.textContent = t.title;
  playerArtist.textContent = t.artist;
  document.querySelectorAll(".track").forEach((el) => el.classList.remove("active"));
  const active = document.querySelector(`.track[data-index="${currentIndex}"]`);
  if (active) active.classList.add("active");
}

async function play() {
  try {
    await audio.play();
    isPlaying = true;
    btnPlay.textContent = "⏸️";
    document.body.classList.add("is-playing");
  } catch (e) {
    console.warn(e);
  }
}
function pause() {
  audio.pause();
  isPlaying = false;
  btnPlay.textContent = "▶️";
  document.body.classList.remove("is-playing");
}

function next() {
  if (isShuffle) {
    let r;
    do {
      r = Math.floor(Math.random() * tracks.length);
    } while (r === currentIndex && tracks.length > 1);
    loadTrack(r);
  } else {
    loadTrack(currentIndex + 1);
  }
  play();
}
function prev() {
  loadTrack(currentIndex - 1);
  play();
}

// ====== Events ======
document.addEventListener("click", (e) => {
  const trackBtn = e.target.closest(".track");
  if (trackBtn) {
    loadTrack(parseInt(trackBtn.dataset.index, 10));
    play();
  }
  const cardBtn = e.target.closest(".song-card");
  if (cardBtn) {
    const id = parseInt(cardBtn.dataset.id, 10);
    const idx = tracks.findIndex((t) => t.id === id);
    if (idx > -1) {
      loadTrack(idx);
      play();
    }
  }
});

btnPlay.addEventListener("click", () => (isPlaying ? pause() : play()));
btnNext.addEventListener("click", next);
btnPrev.addEventListener("click", prev);

btnRepeat.addEventListener("click", () => {
  isRepeat = !isRepeat;
  btnRepeat.classList.toggle("active", isRepeat);
});
btnShuffle.addEventListener("click", () => {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle("active", isShuffle);
});

audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = fmt(audio.duration);
});
audio.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = fmt(audio.currentTime);
  if (audio.duration) {
    seek.value = (audio.currentTime / audio.duration) * 100;
  }
});
audio.addEventListener("ended", () => {
  if (isRepeat) {
    audio.currentTime = 0;
    play();
  } else {
    next();
  }
});

seek.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (seek.value / 100) * audio.duration;
  }
});
volume.addEventListener("input", () => (audio.volume = volume.value));

// Live search filter
searchInput.addEventListener("input", () => {
  const q = searchInput.value.toLowerCase().trim();
  document.querySelectorAll(".track").forEach((btn) => {
    const title = btn.querySelector(".t-title").textContent.toLowerCase();
    const artist = btn.querySelector(".t-artist").textContent.toLowerCase();
    btn.style.display = title.includes(q) || artist.includes(q) ? "" : "none";
  });
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("theme-dark");
  localStorage.setItem(
    "theme-dark",
    document.documentElement.classList.contains("theme-dark") ? "1" : "0"
  );
});
if (localStorage.getItem("theme-dark") === "1") {
  document.documentElement.classList.add("theme-dark");
}

// Init
renderLists();
loadTrack(0);
audio.volume = volume.value;
