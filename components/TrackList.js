export default function TrackList({ title, subtitle, tracks }) {
  return (
    <section id="playlist" className="section alt">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        <div className="tracks" role="list">
          {tracks.map((t, i) => (
            <button key={i} className="track" role="listitem">
              <img src={t.cover} alt={`Bìa ${t.title}`} />
              <div className="t-info">
                <div className="t-title">{t.title}</div>
                <div className="t-artist">{t.artist}</div>
              </div>
              <span className="t-action">Phát</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
