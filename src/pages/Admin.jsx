import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const Admin = () => {
    const [products, setProducts] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
            // Assuming the first row is the header
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
        <div style={{ padding: '50px' }}>
            <h1>Trang quản trị</h1>
            <p>Chỉ có thể truy cập bằng đường dẫn trực tiếp.</p>

            <div style={{ margin: '20px 0' }}>
                <h2>Cập nhật sản phẩm từ file Excel</h2>
                <p>Tải file mẫu để đảm bảo đúng định dạng.</p>
                <button onClick={handleDownloadTemplate} style={{ marginRight: '10px' }}>Tải file mẫu</button>
                <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
            </div>

            {products.length > 0 && (
                <div>
                    <h3>Sản phẩm đã được cập nhật:</h3>
                    <pre>{JSON.stringify(products, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Admin;
