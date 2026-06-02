import React from 'react';
import { Link } from 'react-router-dom';

// 1. Nhận thêm heroImgUrl từ Home truyền sang
const Hero = ({ onOpenScan, heroImgUrl }) => {

    // Ảnh dự phòng (phòng khi bạn chưa dán link ở trang Admin)
    const defaultImage = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80";

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-badge">VEGAN & NATURAL</div>
                <h1>Discover Your <em>True Radiance</em>, Naturally.</h1>
                <p className="hero-desc">Pure, potent, and plant-based skincare designed to reveal your skin's inherent beauty. Powered by nature, perfected by science.</p>
                <div className="hero-actions">
                    <Link className="btn-primary" to="/products">Explore Products</Link>
                    <button className="btn-outline" onClick={onOpenScan}>AI Skin Analysis</button>
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
                        <strong>98% Natural</strong>
                        <span>Ingredients</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;