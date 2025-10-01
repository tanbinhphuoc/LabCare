function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden>🧪</div>
          <div className="brand__text">
            <div className="brand__name">LabCare</div>
            <div className="brand__slogan">Tra cứu xét nghiệm dễ dàng – An tâm sức khỏe mỗi ngày</div>
          </div>
        </div>
        <nav className="nav" aria-label="Chính">
          <a href="#top" className="nav__link">Trang chủ</a>
          <a href="#features" className="nav__link">Tra cứu kết quả</a>
          <a href="#guide" className="nav__link">Hướng dẫn sử dụng</a>
          <a href="#contact" className="nav__link">Liên hệ hỗ trợ</a>
          <a href="#login" className="nav__cta">Đăng nhập</a>
          <a href="#signup" className="nav__cta nav__cta--outline">Đăng ký</a>
        </nav>
      </div>
    </header>
  )
}

export default Header



