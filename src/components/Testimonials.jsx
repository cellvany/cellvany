import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="section-header">
                <span className="section-label">Cảm Nhận Khách Hàng</span>
                <h2>Khách Hàng Nói Gì Về CellVany</h2>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">"Làn da tôi chưa bao giờ khỏe và rạng rỡ đến thế. Serum Vitamin C thực sự là thần dược! Tôi sẽ mãi là khách hàng trung thành của CellVany."</p>
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
                    <p className="testimonial-text">"Trước đây tôi còn hoài nghi về mỹ phẩm thuần chay, nhưng CellVany đã thay đổi suy nghĩ của tôi. Kết quả rõ ràng và làn da nhạy cảm của tôi cuối cùng cũng được dịu nhẹ."</p>
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
                    <p className="testimonial-text">"Phân tích AI thật sự chính xác! Nó đã gợi ý những sản phẩm hoàn hảo cho làn da hỗn hợp của tôi. Tôi đánh giá rất cao!"</p>
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
