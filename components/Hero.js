export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Âm nhạc cho mọi khoảnh khắc</h1>
          <p>Tạo playlist, phát nhạc mượt mà, giao diện đẹp & responsive.</p>
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
  );
}
