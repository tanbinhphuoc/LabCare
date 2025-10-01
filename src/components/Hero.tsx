function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Xét nghiệm của bạn – Kết quả trong tầm tay</h1>
          <p className="hero__subtitle">Theo dõi, tra cứu và hiểu kết quả xét nghiệm của bạn nhanh chóng, an toàn.</p>
          <div className="hero__actions">
            <a href="#features" className="btn btn--primary">🔍 Tra cứu kết quả ngay</a>
            <a href="#signup" className="btn btn--secondary">📝 Đăng ký tài khoản</a>
          </div>
        </div>
        <div className="hero__media" aria-hidden>
          <div className="hero__illustration">👩‍⚕️📱</div>
        </div>
      </div>
    </section>
  )
}

export default Hero



