import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const formatPrice = (value) => value.toLocaleString('vi-VN') + 'đ';

const CheckoutPage = () => {
    const { cart, totalPrice, clear } = useCartContext();
    const [payment, setPayment] = useState('card');
    const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: 'TP. Hồ Chí Minh', note: '' });
    const [success, setSuccess] = useState(false);
    const shipping = totalPrice > 500000 ? 0 : 30000;
    const total = totalPrice + shipping;

    const updateForm = (event) => {
        setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    };

    const placeOrder = (event) => {
        event.preventDefault();
        if (!form.name || !form.phone || !form.address) return;
        clear();
        setSuccess(true);
    };

    if (success) {
        return (
            <div className="checkout-container">
                <div className="checkout-success">
                    <div className="success-icon">🎉</div>
                    <h2>Đặt hàng thành công!</h2>
                    <p>Cảm ơn <strong>{form.name}</strong>. Chúng tôi sẽ liên hệ qua <strong>{form.phone}</strong> trong vòng 30 phút.</p>
                    <Link className="btn-primary" to="/">Tiếp tục mua sắm</Link>
                </div>
            </div>
        );
    }

    if (!cart.length) {
        return (
            <div className="checkout-container">
                <div className="cart-empty">
                    <h3>Chưa có sản phẩm để thanh toán</h3>
                    <Link className="btn-primary" to="/#products-section">Quay lại mua sắm</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1>Thanh toán</h1>
            <form className="checkout-form" onSubmit={placeOrder}>
                <h3>Thông tin giao hàng</h3>
                <div className="form-row">
                    <div className="form-group">
                        <label>Họ tên *</label>
                        <input name="name" value={form.name} onChange={updateForm} placeholder="Nguyễn Thị Lan" required />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại *</label>
                        <input name="phone" value={form.phone} onChange={updateForm} placeholder="0901 234 567" required />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={updateForm} placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label>Địa chỉ *</label>
                    <input name="address" value={form.address} onChange={updateForm} placeholder="Số nhà, tên đường" required />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Tỉnh/Thành phố</label>
                        <select name="city" value={form.city} onChange={updateForm}>
                            <option>TP. Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                            <option>Đà Nẵng</option>
                            <option>Cần Thơ</option>
                            <option>Khác</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Ghi chú</label>
                        <input name="note" value={form.note} onChange={updateForm} placeholder="Giao giờ hành chính..." />
                    </div>
                </div>
                <h3>Phương thức thanh toán</h3>
                <div className="payment-methods">
                    {[
                        ['card', 'Thẻ ngân hàng'],
                        ['wallet', 'MoMo / ZaloPay'],
                        ['cod', 'COD'],
                    ].map(([value, label]) => (
                        <button
                            key={value}
                            type="button"
                            className={`payment-option ${payment === value ? 'selected' : ''}`}
                            onClick={() => setPayment(value)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <div className="cart-summary" style={{ margin: '28px 0' }}>
                    <div className="cart-summary-row"><span>Tổng đơn hàng</span><span>{formatPrice(totalPrice)}</span></div>
                    <div className="cart-summary-row"><span>Phí vận chuyển</span><span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span></div>
                    <div className="cart-summary-total"><span>Tổng thanh toán</span><span>{formatPrice(total)}</span></div>
                </div>
                <button className="btn-checkout" type="submit">Đặt hàng - {formatPrice(total)}</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
