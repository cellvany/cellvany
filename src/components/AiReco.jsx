import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const AiReco = ({ products, result }) => {
    const { add } = useCartContext();
    const recommended = result?.recommendedIds?.length
        ? products.filter((product) => result.recommendedIds.includes(product.id))
        : [];

    if (!result || recommended.length === 0) return null;

    return (
        <section id="ai-reco-section" className="show">
            <h3>Gợi Ý Riêng Cho Bạn</h3>
            <p>Dựa trên phân tích da {result.skinType} của bạn: {result.tip}</p>
            <div className="ai-reco-products">
                {recommended.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/products/${product.id}`}>
                            <div className="product-img">
                                <img src={product.image} alt={product.name} loading="lazy" />
                                <span className="product-badge-vegan">Thuần chay</span>
                            </div>
                        </Link>
                        <div className="product-info">
                            <div className="product-category">{product.category}</div>
                            <Link to={`/products/${product.id}`}>
                                <h3 className="product-name">{product.name}</h3>
                            </Link>
                            <div className="product-footer">
                                <span className="product-price">{product.price}</span>
                                <button className="btn-add-cart" onClick={() => add(product)}>+ Thêm</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AiReco;
