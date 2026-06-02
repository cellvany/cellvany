import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Navbar = ({ onOpenScan }) => {
    const { totalItems } = useCartContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={isScrolled ? 'scrolled' : ''}>
            <Link to="/home" className="nav-logo">Cell<span>vany</span></Link>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link to="/home#values" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link to="/home#footer" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
            <div className="nav-actions">
                <button className="scan-btn" aria-label="Open AI Skin Analysis" onClick={onOpenScan}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                        <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
                        <path d="M21 9v6" />
                        <path d="M3 9v6" />
                        <path d="M9 3H5a2 2 0 0 0-2 2v4" />
                    </svg>
                </button>
                <Link className="cart-btn" aria-label="Open Shopping Cart" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    {totalItems > 0 && <span className="cart-count show">{totalItems}</span>}
                </Link>
                <button className="hamburger" aria-label="Toggle menu" onClick={() => setIsMenuOpen((open) => !open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
