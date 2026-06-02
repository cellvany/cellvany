import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { add } = useCartContext();

    return (
        <article className="product-card">
            <Link to={`/products/${product.id}`} className="product-img-link">
                <div className="product-img">
                    {product.image ? (
                        <img src={product.image} alt={product.name} loading="lazy" />
                    ) : (
                        <div className="product-img-placeholder">{product.emoji || '🌿'}</div>
                    )}
                    <span className="product-badge-vegan">Vegan</span>
                </div>
            </Link>
            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <Link to={`/products/${product.id}`}>
                    <h3 className="product-name">{product.name}</h3>
                </Link>
                <p className="product-desc">
                    {(product.desc || '').slice(0, 96)}{(product.desc || '').length > 96 ? '...' : ''}
                </p>
                <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="btn-add-cart" onClick={() => add(product)}>+ Thêm</button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
