import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/img/banner.jpg'

// 1. Nhận thêm heroImgUrl từ Home truyền sang
const Hero = ({ onOpenScan, heroImgUrl }) => {
    const defaultImage = banner;

    return (
        <section className="hero" id="hero" style={{
            backgroundImage: `url(${heroImgUrl || defaultImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
        }}>
            <div className="hero-content">
                <div className="hero-badge">🌿 THUẦN CHAY & TỰ NHIÊN</div>
                <h1>Khám Phá <em>Vẻ Đẹp Tự Nhiên</em>, Từ Sâu Bên Trong.</h1>
                <p className="hero-desc">Mỹ phẩm thuần chay, nguyên chất và hiệu quả, giúp làm nổi bật vẻ đẹp tự nhiên của làn da. Năng lượng từ thiên nhiên, hoàn thiện bởi khoa học.</p>
                <div className="hero-actions">
                    <Link className="btn-primary" to="/products">Khám Phá Sản Phẩm</Link>
                    <button className="btn-outline" onClick={onOpenScan}>Phân Tích Da Bằng AI</button>
                </div>
            </div>

            <div className="hero-floating-badge">
                <span className="icon">✨</span>
                <div>
                    <strong>98% Thành Phần Tự Nhiên</strong>
                    <span>Thành phần tự nhiên</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;