const faqs = [
  { q: 'Làm sao để xem kết quả?', a: 'Chọn Tra cứu, nhập mã xét nghiệm và ngày sinh để xác thực.' },
  { q: 'Tôi quên mã xét nghiệm thì sao?', a: 'Liên hệ hỗ trợ để được cấp lại mã hoặc xác thực thông tin.' },
]

function QuickGuide() {
  return (
    <div className="quick-guide">
      <div className="quick-guide__media" aria-hidden>
        <div className="video-placeholder">🎬 Hướng dẫn tra cứu</div>
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



