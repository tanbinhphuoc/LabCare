const items = [
  {
    icon: '✅',
    title: 'Tra cứu kết quả xét nghiệm',
    desc: 'Nhập mã xét nghiệm để xem kết quả nhanh chóng.',
  },
  {
    icon: '📅',
    title: 'Xem lịch sử khám',
    desc: 'Theo dõi lịch sử khám và xét nghiệm của bạn.',
  },
  {
    icon: '📞',
    title: 'Liên hệ bác sĩ / hỗ trợ',
    desc: 'Kết nối đội ngũ hỗ trợ kỹ thuật và bác sĩ.',
  },
  {
    icon: '🔒',
    title: 'Bảo mật thông tin',
    desc: 'Cam kết bảo mật dữ liệu sức khỏe của bạn.',
  },
];

function FeatureGrid() {
  return (
    <>
      <h2>Tính năng nổi bật</h2>
      <div className="features">
        {items.map((it) => (
          <div className="feature" key={it.title}>
            <div className="feature__icon" aria-hidden>
              {it.icon}
            </div>
            <div className="feature__content">
              <h3 className="feature__title">{it.title}</h3>
              <p className="feature__desc">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureGrid;
