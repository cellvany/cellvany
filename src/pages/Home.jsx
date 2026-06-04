import React from 'react';
import Hero from '../components/Hero';
import AiReco from '../components/AiReco';
import Products from '../components/Products';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal';

const Home = ({ products, aiResult, onOpenScan, heroImgUrl }) => {
  return (
    <>
      <Reveal>
        <Hero onOpenScan={onOpenScan} heroImgUrl={heroImgUrl} />
      </Reveal>

      <Reveal>
        <AiReco products={products} result={aiResult} />
      </Reveal>

      <Reveal>
        <Products products={products} />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>
    </>
  );
};

export default Home;
