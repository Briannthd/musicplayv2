export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#">
          Your<span>Music</span>
        </a>
        <div className="search">
          <input
            id="searchInput"
            type="search"
            placeholder="Tìm bài hát, nghệ sĩ..."
            aria-label="Tìm kiếm"
          />
        </div>
        <div className="nav-actions">
          <button id="themeToggle" className="icon-btn" title="Đổi giao diện">
            🌓
          </button>
          <a className="btn" href="#trending">
            Khám phá
          </a>
        </div>
      </div>
    </header>
  );
}
