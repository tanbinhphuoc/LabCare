import { Link } from 'react-router-dom';

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
          <h1 className="hero__title">Hệ thống quản lý kết quả xét nghiệm</h1>
          <p className="hero__subtitle">
            Tra cứu kết quả xét nghiệm và khám bệnh của bạn một cách nhanh chóng
            và tiện lợi.
          </p>
          <div className="hero__actions">
            <Link to="/patient/login" className="btn btn--primary">
              Xem kết quả xét nghiệm
            </Link>
            <a href="#contact" className="btn btn--secondary">
              Liên hệ hỗ trợ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
