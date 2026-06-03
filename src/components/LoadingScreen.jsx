import React from 'react';

const LoadingScreen = ({ isFading }) => {
    return (
        <div id="loading-screen" className={isFading ? 'fade-out' : ''}>
            <div className="loading-logo">CELLVANY</div>
            <div className="loading-bar-wrap">
                <div className="loading-bar"></div>
            </div>
            <div className="loading-text">VẺ ĐẸP TỪ BẢN THÂN</div>
        </div>
    );
};

export default LoadingScreen;
