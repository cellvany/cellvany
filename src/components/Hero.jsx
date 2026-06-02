import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ onOpenScan }) => {
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
                <div className="hero-img-wrap">
                    <div className="hero-img-placeholder">
                        <span className="leaf-icon">🌿</span>
                        <span>Plant-based ritual</span>
                    </div>
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
