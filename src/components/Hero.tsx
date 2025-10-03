function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__background">
        <img
          src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Medical background"
          className="hero__bg-image"
        />
        <div className="hero__overlay"></div>
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Cung cấp giải pháp y tế tốt nhất cho bạn</h1>
          <p className="hero__subtitle">Chăm sóc sức khỏe chất lượng cao với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị hiện đại.</p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">Xem dịch vụ</a>
            <a href="#contact" className="btn btn--secondary">Liên hệ ngay</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



