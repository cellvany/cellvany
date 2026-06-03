import React from 'react';
import { Link } from 'react-router-dom';

// 1. Nhận thêm heroImgUrl từ Home truyền sang
const Hero = ({ onOpenScan, heroImgUrl }) => {

    // Ảnh dự phòng (phòng khi bạn chưa dán link ở trang Admin)
    const defaultImage = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80";

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">🌿 THUẦN CHAY & TỰ NHIÊN</div>
                <h1>Khám Phá <em>Vẻ Đẹp Tự Nhiên</em>, Từ Sâu Bên Trong.</h1>
                <p className="hero-desc">Mỹ phẩm thuần chay, nguyên chất và hiệu quả, giúp làm nổi bật vẻ đẹp tự nhiên của làn da. Năng lượng từ thiên nhiên, hoàn thiện bởi khoa học.</p>
                <div className="hero-actions">
                    <Link className="btn-primary" to="/products">Khám Phá Sản Phẩm</Link>
                    <button className="btn-outline" onClick={onOpenScan}>Phân Tích Da Bằng AI</button>
                </div>
            </div>
            <div className="hero-visual">

                {/* 2. Đã thay thế cục Placeholder bằng thẻ <img> */}
                <div className="hero-img-wrap" style={{ overflow: 'hidden', borderRadius: '40px 40px 120px 40px' }}>
                    <img
                        src={heroImgUrl || defaultImage}
                        alt="CellVany Banner"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>

                <div className="hero-floating-badge">
                    <span className="icon">✨</span>
                    <div>
                        <strong>98% Thành Phần Tự Nhiên</strong>
                        <span>Thành phần tự nhiên</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;