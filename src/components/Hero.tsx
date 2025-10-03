function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__label">QUẢN LÝ XÉT NGHIỆM PHÒNG THÍ NGHIỆM</span>
          <h1 className="hero__title">Tra cứu kết quả xét nghiệm nhanh chóng và chính xác</h1>
          <p className="hero__subtitle">
            Hệ thống quản lý xét nghiệm hiện đại, giúp bạn dễ dàng tra cứu kết quả xét nghiệm
            và lịch sử khám bệnh mọi lúc mọi nơi.
          </p>
          <div className="hero__actions">
            <a href="#results" className="btn btn--primary">Tra cứu kết quả</a>
            <a href="#pricing" className="btn btn--secondary">Xem bảng giá</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



