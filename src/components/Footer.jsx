import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-grid">
                {/* Cột 1: Brand (Chiếm 2fr) */}
                <div className="footer-brand">
                    <h2 className="nav-logo">CELLVANY</h2>
                    <p>
                        Beauty In Your Essence.<br />
                        Đánh thức vẻ đẹp tự nhiên của bạn với các dòng mỹ phẩm thuần chay và công nghệ AI.
                    </p>
                </div>

                {/* Cột 2: Khám phá (Chiếm 1fr) */}
                <div className="footer-col">
                    <h4>Khám phá</h4>
                    <Link to="/">Trang chủ</Link>
                    <Link to="/products">Sản phẩm</Link>
                    <Link to="/cart">Giỏ hàng</Link>
                </div>

                {/* Cột 3: Hỗ trợ (Chiếm 1fr) */}
                <div className="footer-col">
                    <h4>Hỗ trợ</h4>
                    <Link to="#">Hướng dẫn mua hàng</Link>
                    <Link to="#">Chính sách đổi trả</Link>
                    <Link to="#">Chính sách bảo mật</Link>
                </div>

                {/* Cột 4: Liên hệ (Chiếm 1fr) */}
                <div className="footer-col">
                    <h4>Liên hệ</h4>
                    <a href="#">TP. Hồ Chí Minh, VN</a>
                    <a href="mailto:hello@cellvany.com">hello@cellvany.com</a>
                    <a href="tel:19000000">1900 xxxx</a>
                </div>
            </div>

            {/* Phần dưới cùng */}
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} CellVany. All rights reserved.</span>
                <span>Beauty in your essence</span>
            </div>
        </footer>
    );
};

export default Footer;