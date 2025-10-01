const faqs = [
  { q: 'Làm sao để xem kết quả?', a: 'Chọn Tra cứu, nhập mã xét nghiệm và ngày sinh để xác thực.' },
  { q: 'Tôi quên mã xét nghiệm thì sao?', a: 'Liên hệ hỗ trợ để được cấp lại mã hoặc xác thực thông tin.' },
]

function QuickGuide() {
  return (
    <div className="quick-guide">
      <div className="quick-guide__media" aria-hidden>
        <div className="video-container">
          <video
            className="guide-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/8088013/8088013-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <span className="video-icon">▶</span>
            <span className="video-label">Hướng dẫn tra cứu</span>
          </div>
        </div>
      </div>
      <div className="quick-guide__content">
        <h2>Hướng dẫn nhanh</h2>
        <ol className="steps">
          <li>Mở Tra cứu kết quả</li>
          <li>Nhập mã xét nghiệm và thông tin xác thực</li>
          <li>Xem và tải kết quả</li>
        </ol>
        <div className="faq">
          {faqs.map(item => (
            <details key={item.q} className="faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickGuide



