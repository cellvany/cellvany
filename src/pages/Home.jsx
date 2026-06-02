import React from 'react';
import Hero from '../components/Hero';
import AiReco from '../components/AiReco';
import Products from '../components/Products';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';

const Home = ({ products, aiResult, onOpenScan }) => {
    return (
        <>
            <Hero onOpenScan={onOpenScan} />
            <AiReco products={products} result={aiResult} />
            <Products products={products} />
            <Values />
            <Testimonials />
        </>
    );
};

export default Home;
