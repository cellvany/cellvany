import React from 'react';
import Hero from '../components/Hero';
import AiReco from '../components/AiReco';
import Products from '../components/Products';
import Values from '../components/Values';
import Testimonials from '../components/Testimonials';
import Reveal from '../components/Reveal'; // Đảm bảo đường dẫn này đúng với vị trí file Reveal.jsx của bạn

const Home = ({ products, aiResult, onOpenScan, heroImgUrl }) => {
    return (
        <>
            {/* Hero thường nằm ở trên cùng, nếu bọc Reveal thì nó sẽ trượt lên ngay khi vừa vào web */}
            <Reveal>
                <Hero onOpenScan={onOpenScan} heroImgUrl={heroImgUrl} />
            </Reveal>

            {/* Các section bên dưới sẽ được ẩn đi và chỉ hiện ra khi bạn cuộn chuột tới */}
            <Reveal>
                <AiReco products={products} result={aiResult} />
            </Reveal>

            <Reveal>
                <Products products={products} />
            </Reveal>

            <Reveal>
                <Values />
            </Reveal>

            <Reveal>
                <Testimonials />
            </Reveal>
        </>
    );
};

export default Home;