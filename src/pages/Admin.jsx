import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Admin = ({ currentHeroImg, setHeroImgUrl }) => {
    const [products, setProducts] = useState([]);
    const [inputUrl, setInputUrl] = useState(currentHeroImg || '');

    // Hàm lưu link ảnh
    const handleSaveHeroImage = () => {
        if (!inputUrl) {
            alert("Vui lòng dán đường link ảnh!");
            return;
        }
        setHeroImgUrl(inputUrl);
        localStorage.setItem('cellvany_hero_img', inputUrl); // Lưu vào bộ nhớ máy
        alert('Cập nhật ảnh banner trang chủ thành công!');
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

            const headers = data[0];
            const jsonData = data.slice(1).map(row => {
                const rowData = {};
                headers.forEach((header, index) => {
                    rowData[header] = row[index];
                });
                return rowData;
            });
            setProducts(jsonData);
            console.log('Updated products:', jsonData);
            alert('Cập nhật sản phẩm thành công!');
        };
        reader.readAsBinaryString(file);
    };

    const handleDownloadTemplate = () => {
        const ws = XLSX.utils.aoa_to_sheet([
            ['id', 'name', 'category', 'price', 'description', 'image', 'tags', 'isVegan']
        ]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Products');
        XLSX.writeFile(wb, 'product_template.xlsx');
    };

    return (
        <div className="admin-container" style={{ padding: '64px' }}>
            <h5 className="admin-title">Trang quản trị hệ thống</h5>
            <p className="admin-subtitle">Khu vực dành riêng cho việc cập nhật dữ liệu CellVany.</p>
            {/* KHỐI 1: CẬP NHẬT ẢNH BANNER */}
            <div className="admin-upload-card" style={{ marginBottom: '30px' }}>
                <h2>Đổi ảnh Banner trang chủ</h2>
                <p>Dán đường link URL của bức ảnh bạn muốn hiển thị trên trang chủ.</p>

                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <input
                        type="text"
                        placeholder="https://vidu.com/anh-dep.jpg"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        style={{ flex: 1, padding: '12px 20px', borderRadius: '50px', border: '1.5px solid var(--green-pale)', outline: 'none', fontSize: '0.95rem' }}
                    />
                    <button onClick={handleSaveHeroImage} className="btn-primary" style={{ padding: '12px 32px' }}>
                        Lưu ảnh
                    </button>
                </div>
                {inputUrl && (
                    <div style={{ marginTop: '20px' }}>
                        <p style={{ fontSize: '0.8rem', color: '#6b8f78', marginBottom: '8px' }}>Xem trước ảnh:</p>
                        <img src={inputUrl} alt="Preview" style={{ height: '150px', borderRadius: '16px', objectFit: 'cover' }} />
                    </div>
                )}
            </div>
            {/* KHỐI 2: QUẢN LÝ DỮ LIỆU SẢN PHẨM (GOOGLE SHEETS) */}
            <div className="admin-upload-card">
                <h2>Quản lý Dữ liệu Sản phẩm</h2>
                <p>Dữ liệu CellVany hiện đang được kết nối trực tiếp và tự động với Google Sheets.</p>
                <p style={{ marginBottom: '24px', fontSize: '0.9rem', color: '#6b8f78' }}>
                    *Để thay đổi tên, giá, hoặc mô tả sản phẩm, hãy sửa trực tiếp trên file Google Sheets.
                </p>

                <a
                    href="https://docs.google.com/spreadsheets/d/1r8LSTFDrF6QNWZKqBk3qPiT9NNVIsM-npGJqQRN0QZs/edit?hl=vi&gid=0#gid=0"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-download-red"
                    style={{ display: 'inline-block', textDecoration: 'none' }}
                >
                    Mở trang tính Google Sheets
                </a>
            </div>

            {products.length > 0 && (
                <div className="admin-result">
                    <h3>Dữ liệu đã được trích xuất thành công:</h3>
                    <pre>{JSON.stringify(products, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Admin;