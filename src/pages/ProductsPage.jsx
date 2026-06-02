import React, { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';

const normalize = (value) => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const ProductsPage = ({ products }) => {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('all');

    const categories = useMemo(() => {
        return ['all', ...Array.from(new Set(products.map((product) => product.category).filter(Boolean)))];
    }, [products]);

    const filteredProducts = useMemo(() => {
        const normalizedQuery = normalize(query.trim());

        return products.filter((product) => {
            const matchesCategory = category === 'all' || product.category === category;
            const haystack = normalize([
                product.name,
                product.category,
                product.desc,
                ...(product.tags || []),
            ].join(' '));

            return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
        });
    }, [category, products, query]);

    return (
        <main className="products-page">
            <section className="products-hero">
                <div>
                    <span className="section-label">CellVany Shop</span>
                    <h1>Tất cả sản phẩm</h1>
                    <p>Tìm công thức phù hợp theo nhu cầu da, danh mục hoặc thành phần bạn yêu thích.</p>
                </div>
                <div className="products-count">
                    <strong>{filteredProducts.length}</strong>
                    <span>sản phẩm</span>
                </div>
            </section>

            <section className="products-toolbar" aria-label="Bộ lọc sản phẩm">
                <div className="search-field">
                    <span>⌕</span>
                    <input
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Tìm serum, toner, rau má..."
                    />
                </div>
                <div className="category-tabs">
                    {categories.map((item) => (
                        <button
                            key={item}
                            className={category === item ? 'active' : ''}
                            onClick={() => setCategory(item)}
                        >
                            {item === 'all' ? 'Tất cả' : item}
                        </button>
                    ))}
                </div>
            </section>

            <section className="products-results">
                <div className="products-grid">
                    {!products.length && (
                        <div className="products-loading">
                            {/* <div className="spinner"></div> */}
                            Không có sản phẩm
                        </div>
                    )}
                    {products.length > 0 && filteredProducts.length === 0 && (
                        <div className="products-loading">Không tìm thấy sản phẩm phù hợp.</div>
                    )}
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ProductsPage;
