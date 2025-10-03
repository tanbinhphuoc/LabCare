function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <div className="header__info">
            <span className="header__info-item">Hỗ trợ: 24/7 Cuộc gọi khẩn cấp</span>
          </div>
          <div className="header__info">
            <span className="header__info-item">Email: HealthCa@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm2 13h-2v-3H7v-2h3V9h2v3h3v2h-3v3z"/>
            </svg>
          </div>
          <div className="brand__name">Healthca</div>
        </div>
        <nav className="nav" aria-label="Chính">
          <a href="#top" className="nav__link">Trang chủ</a>
          <a href="#about" className="nav__link">Về chúng tôi</a>
          <a href="#services" className="nav__link">Dịch vụ +</a>
          <a href="#pages" className="nav__link nav__link--highlight">Trang +</a>
          <a href="#blog" className="nav__link">Blog +</a>
          <a href="#contact" className="nav__link">Liên hệ</a>
          <a href="#signup" className="nav__cta">Bắt đầu</a>
        </nav>
      </div>
    </header>
  )
}

export default Header



