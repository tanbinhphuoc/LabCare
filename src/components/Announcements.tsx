const notices = [
  { type: 'maintenance', title: 'Bảo trì hệ thống', desc: 'Hệ thống bảo trì từ 22:00-23:00 thứ Sáu.' },
  { type: 'news', title: 'Tin y tế', desc: 'Cập nhật hướng dẫn tầm soát sức khỏe định kỳ.' },
  { type: 'policy', title: 'Chính sách bảo mật', desc: 'Điều chỉnh điều khoản bảo vệ dữ liệu người dùng.' },
]

function Announcements() {
  return (
    <>
      <h2>Thông báo mới nhất</h2>
      <div className="announcements">
        {notices.map(n => (
          <div className={`notice notice--${n.type}`} key={n.title}>
            <div className="notice__badge" aria-hidden>📢</div>
            <div className="notice__body">
              <h4 className="notice__title">{n.title}</h4>
              <p className="notice__desc">{n.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Announcements



