function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Nhận tin tức mới nhất và nhiều hơn nữa!</h2>
          <p className="newsletter__subtitle">Đăng ký nhận bản tin của chúng tôi</p>
          <form className="newsletter__form">
            <input
              type="email"
              placeholder="Địa chỉ Email"
              className="newsletter__input"
            />
            <button type="submit" className="newsletter__submit">
              Gửi →
            </button>
          </form>
        </div>
        <div className="newsletter__image">
          <img
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Doctor"
            className="newsletter__doctor"
          />
        </div>
      </div>
    </section>
  )
}

export default Newsletter
