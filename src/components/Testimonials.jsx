import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="section-header">
                <span className="section-label">Testimonials</span>
                <h2>What Our Community Says</h2>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"My skin has never felt so alive and healthy. The Vitamin C serum is pure magic! I'm a customer for life."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">🌸</div>
                        <div>
                            <div className="author-name">An Nguyen</div>
                            <div className="author-location">Hanoi, Vietnam</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"I was skeptical about vegan skincare, but Cellvany changed my mind. The results are visible and my sensitive skin is finally calm."</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">✨</div>
                        <div>
                            <div className="author-name">Le Minh</div>
                            <div className="author-location">Da Nang, Vietnam</div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"The AI analysis was so accurate! It recommended the perfect products for my combination skin. Highly recommend!"</p>
                    <div className="testimonial-author">
                        <div className="author-avatar">🌿</div>
                        <div>
                            <div className="author-name">Trang Tran</div>
                            <div className="author-location">Ho Chi Minh City, Vietnam</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
