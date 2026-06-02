import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, limit = 4 }) => {
    const visibleProducts = limit ? products.slice(0, limit) : products;
    return (
        <section id="products-section">
            <div className="section-header">
                <span className="section-label">Bộ sưu tập</span>
                <h2>Chăm sóc da thuần chay, dịu dàng và có chủ đích</h2>
                <p>Những công thức giàu chiết xuất thực vật, được chọn lọc để nuôi dưỡng làn da mỗi ngày.</p>
            </div>
            <div id="products-grid" className="products-grid">
                {!products.length && (
                    <div className="products-loading">
                        <div className="spinner"></div>
                        Đang tải sản phẩm...
                    </div>
                )}
                {visibleProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </section>
    );
};

export default Products;
