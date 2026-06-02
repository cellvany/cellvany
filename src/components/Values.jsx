import React from 'react';

const Values = () => {
    return (
        <section id="values">
            <div className="section-header">
                <span className="section-label">Cam kết của CellVany</span>
                <h2>Đẹp từ sự lành tính</h2>
            </div>
            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon">🌿</div>
                    <h4>100% Thuần chay</h4>
                    <p>Không sử dụng thành phần có nguồn gốc động vật trong mọi công thức.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">♡</div>
                    <h4>Cruelty-Free</h4>
                    <p>Sản phẩm không thử nghiệm trên động vật, từ nghiên cứu đến hoàn thiện.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">✦</div>
                    <h4>Công thức sạch</h4>
                    <p>Ưu tiên thành phần dịu nhẹ, không paraben, sulfate và chất gây tranh cãi.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon">♻</div>
                    <h4>Thân thiện môi trường</h4>
                    <p>Nguồn nguyên liệu bền vững và bao bì có thể tái chế.</p>
                </div>
            </div>
        </section>
    );
};

export default Values;
