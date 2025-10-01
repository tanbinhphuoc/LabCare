function ContactSection() {
  return (
    <>
      <h2>Liên hệ hỗ trợ</h2>
      <div className="contact">
        <div className="contact__item">
          <div className="contact__icon" aria-hidden>💬</div>
          <div>
            <div className="contact__title">Chat trực tuyến</div>
            <a href="#chat" className="link">Bắt đầu trò chuyện</a>
          </div>
        </div>
        <div className="contact__item">
          <div className="contact__icon" aria-hidden>📞</div>
          <div>
            <div className="contact__title">Hotline hỗ trợ</div>
            <a href="tel:19001234" className="link">1900 1234</a>
          </div>
        </div>
        <div className="contact__item">
          <div className="contact__icon" aria-hidden>📧</div>
          <div>
            <div className="contact__title">Email / Địa chỉ</div>
            <a href="mailto:support@labcare.vn" className="link">support@labcare.vn</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection



