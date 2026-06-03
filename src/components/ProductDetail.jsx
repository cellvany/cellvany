import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const { add } = useCartContext();
    const product = products.find((item) => item.id === id);

    if (!product) {
        return (
            <div className="product-detail-container">
                <Link to="/#products-section" className="back-btn">
                    <span>&larr;</span>
                    Back to Products
                </Link>
                <div className="products-loading">
                    <div className="spinner"></div>
                    Loading product...
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail-container">
            <Link to="/#products-section" className="back-btn">
                <span>&larr;</span>
                Back to Products
            </Link>
            <div id="product-detail-content" className="product-detail-grid">
                <div className="detail-img-wrap">
                    {product.image ? (
                        <img src={product.image} alt={product.name} />
                    ) : (
                        <span>{product.emoji || 'V'}</span>
                    )}
                </div>
                <div className="detail-info">
                    <div className="detail-category">{product.category}</div>
                    <h1 className="detail-name">{product.name}</h1>
                    <div className="detail-price">{product.price}</div>
                    <p className="detail-desc">{product.desc}</p>
                    <div className="detail-tags">
                        {(product.tags || []).map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                    <div className="detail-actions">
                        <button className="btn-add-cart-large" onClick={() => add(product)}>Thêm vào giỏ</button>
                        <button className="btn-outline" onClick={() => add(product)}>Mua ngay</button>
                    </div>
                    {product.ingredients && (
                        <div className="detail-ingredients">
                            <h4>Thành phần chính</h4>
                            <p>{product.ingredients}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
