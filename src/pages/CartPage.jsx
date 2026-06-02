import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const formatPrice = (value) => value.toLocaleString('vi-VN') + 'đ';

const CartPage = () => {
    const { cart, updateQty, remove, totalPrice } = useCartContext();
    const shipping = totalPrice > 500000 ? 0 : 30000;
    const total = totalPrice + shipping;

    if (!cart.length) {
        return (
            <div className="cart-container">
                <div className="cart-empty">
                    <div className="cart-empty-icon">🛒</div>
                    <h3>Giỏ hàng trống</h3>
                    <p>Hãy khám phá các sản phẩm của CellVany nhé!</p>
                    <Link className="btn-primary" to="/#products-section">Mua sắm ngay</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Giỏ hàng</h1>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-img">
                            {item.image ? <img src={item.image} alt={item.name} /> : item.emoji}
                        </div>
                        <div className="cart-item-info">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-price">{item.price}</div>
                        </div>
                        <div className="cart-qty">
                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                            <span className="qty-val">{item.qty}</span>
                            <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                        </div>
                        <div className="cart-item-total">{formatPrice(item.priceNum * item.qty)}</div>
                        <button className="cart-remove" onClick={() => remove(item.id)}>x</button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <div className="cart-summary-row"><span>Tạm tính</span><span>{formatPrice(totalPrice)}</span></div>
                <div className="cart-summary-row"><span>Phí vận chuyển</span><span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span></div>
                {totalPrice < 500000 && (
                    <div style={{ fontSize: '1.25rem', color: 'var(--green-bright)', padding: '8px 0' }}>
                        Mua thêm {formatPrice(500000 - totalPrice)} để miễn phí vận chuyển!
                    </div>
                )}
                <div className="cart-summary-total"><span>Tổng cộng</span><span>{formatPrice(total)}</span></div>
                <Link className="btn-checkout" to="/checkout">Tiến hành thanh toán</Link>
            </div>
        </div>
    );
};

export default CartPage;
