function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="footer__grid">
          <div className="footer__about">
            <div className="footer__brand">
              <div className="brand__logo">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm2 13h-2v-3H7v-2h3V9h2v3h3v2h-3v3z" />
                </svg>
              </div>
              <span className="footer__brand-name">Healthca</span>
            </div>
            <p className="footer__desc">
              Habitant augue molestie felis purus platea mollis mauris lectus
              cursus. Viverra scelerisque commodo sem nisl sed vitae in neque
              volutpat.
            </p>
            <div className="footer__contact">
              <h4 className="footer__subtitle">Liên hệ</h4>
              <div className="footer__contact-item">
                <span className="footer__icon">📍</span>
                <span>Thorne ridge Cir. Syracuse, Connecticut 35624</span>
              </div>
              <div className="footer__contact-item">
                <span className="footer__icon">📞</span>
                <span>
                  Cuộc gọi khẩn cấp
                  <br />
                  (+86) 1208 1091 86
                </span>
              </div>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">Dịch vụ của chúng tôi</h4>
            <ul className="footer__list">
              <li>
                <a href="#primary">Chăm sóc sơ cấp & Phòng ngừa</a>
              </li>
              <li>
                <a href="#dental">Nha khoa & Sức khỏe răng miệng</a>
              </li>
              <li>
                <a href="#virtual">Chăm sóc ảo & Từ xa</a>
              </li>
              <li>
                <a href="#rehab">Phục hồi chức năng & Vận động</a>
              </li>
              <li>
                <a href="#women">Sức khỏe phụ nữ</a>
              </li>
              <li>
                <a href="#diagnostics">Chẩn đoán</a>
              </li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">Liên kết nhanh</h4>
            <ul className="footer__list">
              <li>
                <a href="#home">Trang chủ</a>
              </li>
              <li>
                <a href="#about">Về chúng tôi</a>
              </li>
              <li>
                <a href="#services">Dịch vụ của chúng tôi</a>
              </li>
              <li>
                <a href="#team">Đội ngũ của chúng tôi</a>
              </li>
              <li>
                <a href="#appointments">Đặt lịch hẹn</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__title">Hỗ trợ</h4>
            <ul className="footer__list">
              <li>
                <a href="#help">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#security">Bảo mật</a>
              </li>
              <li>
                <a href="#terms">Điều khoản & Điều kiện</a>
              </li>
              <li>
                <a href="#privacy">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copy">
            Bệnh viện & Phòng khám Y tế Healthca © 2025. Bảo lưu mọi quyền
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
