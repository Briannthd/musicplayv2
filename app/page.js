// app/page.js
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="site-header">
        <div className="container nav">
          <a className="logo" href="#">Your<span>Music</span></a>
          <div className="search">
            <input id="searchInput" type="search" placeholder="Tìm bài hát, nghệ sĩ..." aria-label="Tìm kiếm" />
          </div>
          <div className="nav-actions">
            <button id="themeToggle" className="icon-btn" title="Đổi giao diện">🌓</button>
            <a className="btn" href="#trending">Khám phá</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Âm nhạc cho mọi khoảnh khắc</h1>
            <p>Tạo playlist, phát nhạc mượt mà, giao diện đẹp &amp; responsive.</p>
            <div className="hero-cta">
              <a href="#playlist" className="btn">Nghe ngay</a>
              <a href="#trending" className="btn btn-ghost">Bài hát hot</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="vinyl"><div className="hole"></div></div>
            <div className="cover"></div>
          </div>
        </div>
      </section>

      {/* Trending */}
      <section id="trending" className="section">
        <div className="container">
          <h2 className="section-title">Đang thịnh hành</h2>
          <div className="grid-4" id="trendingGrid"></div>
        </div>
      </section>

      {/* Playlist */}
      <section id="playlist" className="section alt">
        <div className="container">
          <h2 className="section-title">Playlist hôm nay</h2>
          <p className="section-subtitle">Chọn bài để phát. Có thể gõ tìm kiếm bên trên.</p>
          <div className="tracks" id="trackList" role="list"></div>
        </div>
      </section>

      {/* Player bar */}
      <div className="player">
        <audio id="audio"></audio>

        <div className="player-left">
          <img id="playerCover" className="cover-sm" alt="Bìa album" src="/assets/covers/default.webp"/>

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

      {/* Nạp JS sau khi trang đã tương tác */}
      <Script src="/player.js" strategy="afterInteractive" />
    </>
  );
}
