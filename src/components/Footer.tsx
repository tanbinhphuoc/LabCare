function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__links">
          <a href="#privacy" className="link">Chính sách bảo mật</a>
          <a href="#terms" className="link">Điều khoản sử dụng</a>
          <a href="#social" className="link">Mạng xã hội</a>
        </div>
        <div className="footer__copy">© {new Date().getFullYear()} LabCare</div>
      </div>
    </footer>
  )
}

export default Footer



