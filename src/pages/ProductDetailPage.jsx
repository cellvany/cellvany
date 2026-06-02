import React from 'react';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = ({ products }) => {
    return (
        <ProductDetail products={products} />
    );
};

export default ProductDetailPage;
