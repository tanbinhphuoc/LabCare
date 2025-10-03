function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <div className="header__info">
            <span className="header__info-item">Hỗ trợ: 24/7 Cuộc gọi khẩn cấp</span>
          </div>
          <div className="header__info">
            <span className="header__info-item">Email: lab@pharma.com</span>
          </div>
        </div>
      </div>
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.5 3.09L15 5.59l-3-1-3.18 1.7A2.5 2.5 0 007 6.5a2.5 2.5 0 00-2.5 2.5v11a2.5 2.5 0 002.5 2.5 2.5 2.5 0 002.5-2.5c0-.58-.2-1.11-.53-1.54L12 17l3 1 4.5-2.4a2.5 2.5 0 001.5-2.3V6.5a2.5 2.5 0 00-1.5-2.41zM7 20a1 1 0 110-2 1 1 0 010 2zm1-5v-3H6v3H5v-3H4v-2h1v-1h1v1h2v-1h1v1h1v2h-1v3H8zm9.5-3.7l-3 1.6-3-1-3.18 1.7c.11.29.18.6.18.9V9h1v3h2V9h1v3h2V9h1v3h1v1.3z"/>
            </svg>
          </div>
          <div className="brand__name">Pharma Lab</div>
        </div>
        <nav className="nav" aria-label="Chính">
          <a href="#top" className="nav__link">Trang chủ</a>
          <a href="#results" className="nav__link">Tra cứu kết quả</a>
          <a href="#pricing" className="nav__link">Bảng giá</a>
          <a href="#process" className="nav__link">Quy trình</a>
          <a href="#contact" className="nav__link">Liên hệ</a>
        </nav>
      </div>
    </header>
  )
}

export default Header



