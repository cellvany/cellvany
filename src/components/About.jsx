import React from 'react';

const team = [
  { name: 'Nguyễn Văn Học', id: 'SS181054', role: 'Trưởng nhóm' },
  { name: 'Nguyễn Hà', id: 'SS180976' },
  { name: 'Nguyễn Hoàng Mỹ Ý', id: 'SS181485' },
  { name: 'Trần Thị Minh Thư', id: 'SS193151' },
  { name: 'Trương Công Nguyên', id: 'SS180624' },
  { name: 'Phạm Thiên An', id: 'SS193358' },
  { name: 'Trần Nam Anh', id: 'SS180738' },
  { name: 'Vũ Tấn Kiệt', id: 'SE172871' },
];

const commitments = [
  { icon: '🌱', title: '100% Thuần chay', desc: 'Hoàn toàn không sử dụng thành phần từ động vật và nói không với thử nghiệm trên động vật.' },
  { icon: '🔬', title: 'Khoa học xanh', desc: 'Chắt lọc những hoạt chất tinh túy nhất từ thực vật, tối ưu bằng công nghệ hiện đại.' },
  { icon: '🛡️', title: 'An tâm tuyệt đối', desc: 'Loại bỏ hoàn toàn Parabens, Sulfates, Phthalates và hương liệu nhân tạo nồng gắt.' },
  { icon: '♻️', title: 'Bền vững', desc: 'Tối giản bao bì, sử dụng chất liệu thân thiện môi trường để bảo vệ hành tinh xanh.' },
];

const About = () => (
  <section id="about">
    <div className="section-header">
      <span className="section-label">Về chúng tôi</span>
      <h2>Đánh thức sức sống nguyên bản của làn da và mái tóc</h2>
    </div>

    <div className="about-story">
      <div className="about-story-text">
        <h3>Cellvany – ĐÁNH THỨC SỨC SỐNG NGUYÊN BẢN</h3>
        <p>
          Tại Cellvany, chúng tôi tin rằng vẻ đẹp bền vững và rạng rỡ nhất là vẻ đẹp được nuôi dưỡng từ sự thuần khiết của tự nhiên.
          Cái tên Cellvany là sự kết hợp giữa &ldquo;Cell&rdquo; (Tế bào) – gốc rễ của sự sống, và &ldquo;Vany&rdquo; – biểu trưng cho sự mềm mại, tinh tế và tràn đầy năng lượng.
        </p>
        <p>
          Chúng tôi ra đời với sứ mệnh mang đến giải pháp chăm sóc toàn diện từ Da (Skincare), Tóc (Haircare) đến Cơ thể (Bodycare) bằng
          100% nguồn nguyên liệu thuần chay thực vật, kết hợp cùng công nghệ khoa học làn da hiện đại.
          Chúng tôi hiểu rằng mỗi tế bào trên cơ thể bạn đều xứng đáng được nâng niu bằng những gì lành tính và an toàn nhất.
        </p>
      </div>
      <div className="about-img-block">🌿</div>
    </div>

    <div className="section-header" style={{ marginTop: 40 }}>
      <span className="section-label">Triết lý &amp; Cam kết</span>
      <h2>Làm đẹp theo cách của thiên nhiên</h2>
    </div>
    <div className="values-grid">
      {commitments.map((c) => (
        <div className="value-card" key={c.title}>
          <div className="value-icon">{c.icon}</div>
          <h4>{c.title}</h4>
          <p>{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="team-grid">
      <div className="section-header">
        <span className="section-label">Đội ngũ</span>
        <h2>Những người kiến tạo Cellvany</h2>
        <p>Mỗi thành viên đều mang đến một góc nhìn và năng lực riêng, cùng nhau viết nên câu chuyện của chúng tôi.</p>
      </div>
      <div className="team-cards">
        {team.map((m) => (
          <div className="team-card" key={m.id + m.name}>
            <div className="team-card-img">👤</div>
            <div className="team-card-info">
              <div className="team-card-name">{m.name}</div>
              {m.role && <div className="team-card-role">{m.role}</div>}
              <div className="team-card-role">{m.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
