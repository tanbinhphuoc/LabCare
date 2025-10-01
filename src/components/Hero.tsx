function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__background">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/6129005/6129005-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay"></div>
      </div>
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
          <div className="hero__illustration">
            <img
              src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Medical professional"
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



