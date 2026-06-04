import React, { useRef } from 'react';
import ProductCard from './ProductCard';

const Products = ({ products, limit = 4 }) => {
    const visibleProducts = limit ? products.slice(0, limit) : products;
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        const el = scrollRef.current;
        console.log('scroll el:', el, 'scrollLeft:', el?.scrollLeft);
        if (el) {
            el.scrollLeft += dir * 304;
            console.log('after:', el.scrollLeft);
        }
    };

    return (
        <section id="products-section">
            <div className="section-header">
                <span className="section-label">Bộ sưu tập</span>
                <h2>Chăm sóc da thuần chay, dịu dàng và có chủ đích</h2>
                <p>Những công thức giàu chiết xuất thực vật, được chọn lọc để nuôi dưỡng làn da mỗi ngày.</p>
            </div>

            <div className="products-carousel-wrap">
                <button className="carousel-btn carousel-btn-left" onClick={() => scroll(-1)}>&#8592;</button>
                <div className="products-carousel" ref={scrollRef}>
                    {!products.length && (
                        <div className="products-loading">
                            <div className="spinner"></div>
                            Đang tải sản phẩm...
                        </div>
                    )}
                    {visibleProducts.map(product => (
                        <div className="carousel-item" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                <button className="carousel-btn carousel-btn-right" onClick={() => scroll(1)}>&#8594;</button>
            </div>
        </section>
    );
};

export default Products;