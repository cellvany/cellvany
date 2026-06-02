import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Admin from './pages/Admin';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoadingScreen from './components/LoadingScreen';
import FaceScan from './components/FaceScan';
import { loadProducts } from './services/productsService';

function App() {
    const [showLoading, setShowLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [products, setProducts] = useState([]);
    const [isScanOpen, setIsScanOpen] = useState(false);
    const [aiResult, setAiResult] = useState(null);

    useEffect(() => {
        // Start fading after the loading bar animation
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 1800); // Corresponds to loading bar animation

        // Remove from DOM after fade out animation
        const removeTimer = setTimeout(() => {
            setShowLoading(false);
        }, 2400); // 1800ms + 600ms fade-out

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    useEffect(() => {
        loadProducts().then(setProducts);
    }, []);

    const openFaceScan = () => {
        localStorage.removeItem('cellvany_scan_dismissed');
        setIsScanOpen(true);
    };

    const closeFaceScan = () => {
        localStorage.setItem('cellvany_scan_dismissed', 'true');
        setIsScanOpen(false);
    };

    const homeElement = (
        <Home
            products={products}
            aiResult={aiResult}
            onOpenScan={openFaceScan}
        />
    );

    return (
        <>
            {showLoading && <LoadingScreen isFading={isFading} />}
            <Navbar onOpenScan={openFaceScan} />
            <Routes>
                <Route path="/" element={homeElement} />
                <Route path="/home" element={homeElement} />
                <Route
                    path="/products"
                    element={(
                        <ProductsPage
                            products={products}
                        />
                    )}
                />
                <Route path="/products/:id" element={<ProductDetailPage products={products} />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <FaceScan
                isOpen={isScanOpen}
                products={products}
                onClose={closeFaceScan}
                onAiResult={setAiResult}
            />
            <Footer />
        </>
    );
}

export default App;
