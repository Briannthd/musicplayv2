export default function Player() {
  return (
    <div className="player">
      <audio id="audio"></audio>

      <div className="player-left">
        <img id="playerCover" className="cover-sm" alt="Bìa album" src="/assets/covers/default.webp" />
        <div className="meta">
          <div id="playerTitle" className="title">Chưa phát</div>
          <div id="playerArtist" className="artist">—</div>
        </div>
      </div>

      <div className="player-center">
        <div className="controls">
          <button id="btnShuffle" className="icon-btn" title="Ngẫu nhiên">🔀</button>
          <button id="btnPrev" className="icon-btn" title="Trước đó">⏮️</button>
          <button id="btnPlay" className="play-btn" title="Phát / Tạm dừng">▶️</button>
          <button id="btnNext" className="icon-btn" title="Kế tiếp">⏭️</button>
          <button id="btnRepeat" className="icon-btn" title="Lặp lại">🔁</button>
        </div>
        <div className="progress">
          <span id="currentTime">0:00</span>
          <input id="seek" type="range" min="0" max="100" defaultValue="0" aria-label="Thanh tiến trình" />
          <span id="duration">0:00</span>
        </div>
      </div>

      <div className="player-right">
        <div className="volume">
          <span>🔊</span>
          <input id="volume" type="range" min="0" max="1" step="0.01" defaultValue="0.9" aria-label="Âm lượng" />
        </div>
      </div>
    </div>
  );
}
