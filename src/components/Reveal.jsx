import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, className = '', delayClass = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Khi phần tử lọt vào màn hình
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Ngừng theo dõi sau lần hiện đầu tiên
                }
            },
            {
                threshold: 0.15, // Cần hiện 15% diện tích mới kích hoạt
                rootMargin: "0px 0px -50px 0px", // Kích hoạt sớm/muộn so với mép dưới màn hình
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function khi component unmount
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'active' : ''} ${delayClass} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;