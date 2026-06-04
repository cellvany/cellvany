import { MOCK_PRODUCTS } from '../data/products';

const STORAGE_KEY = 'cellvany_products';

function normalizeProduct(row, headers, index) {
  const product = { id: String(index + 1) };

  headers.forEach((header, columnIndex) => {
    product[header] = row[columnIndex] || '';
  });

  const price = product.price || product['gia'] || product['giá'] || '0d';

  return {
    ...product,
    name: product.name || product['ten san pham'] || product['tên sản phẩm'] || 'San pham',
    price,
    priceNum: parseInt(String(price).replace(/\D/g, ''), 10) || 0,
    desc: product.desc || product['mo ta'] || product['mô tả'] || '',
    category: product.category || product['danh muc'] || product['danh mục'] || '',
    tags: Array.isArray(product.tags)
      ? product.tags
      : String(product.tags || '').split(',').map((tag) => tag.trim()).filter(Boolean),
    image: product.image || product['hinh anh'] || product['hình ảnh'] || '',
    ingredients: product.ingredients || product['thanh phan'] || product['thành phần'] || '',
    emoji: product.emoji || 'V',
  };
}

function getSheetConfig() {
  const runtimeConfig = window.CONFIG || {};

  return {
    sheetId: import.meta.env.VITE_GOOGLE_SHEET_ID || runtimeConfig.GOOGLE_SHEET_ID,
    range: import.meta.env.VITE_SHEET_RANGE || runtimeConfig.SHEET_RANGE || 'Sheet1!A:Z',
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY || runtimeConfig.GOOGLE_API_KEY,
  };
}

export async function loadProducts(forceRefresh = false) {
  const { sheetId, range, apiKey } = getSheetConfig();

  // KIỂM TRA CACHE CHẶT CHẼ HƠN: Chỉ lấy nếu cache có chứa dữ liệu thật (độ dài > 0)
  // if (!forceRefresh) {
  //   const saved = localStorage.getItem(STORAGE_KEY);
  //   if (saved) {
  //     const parsedData = JSON.parse(saved);
  //     if (parsedData && parsedData.length > 0) {
  //       return parsedData; // Có sản phẩm thật thì mới trả về
  //     }
  //   }
  // }

  // Gọi lên Google Sheets
  try {
    if (!sheetId || !apiKey || apiKey.includes('AIzaSy...')) {
      throw new Error('Thiếu cấu hình API Key hoặc Sheet ID');
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Không thể tải file Google Sheets');
    console.log('res product: ', response);

    const data = await response.json();
    const rows = data.values || [];

    const headers = (rows[0] || []).map((header) => header.toLowerCase().trim());
    const products = rows.slice(1).map((row, index) => normalizeProduct(row, headers, index));

    // Lưu cứng vào bộ nhớ trình duyệt
    if (products.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }

    console.log('✅ Đã tải thành công từ Google Sheets: ', products);
    return products;

  } catch (error) {
    console.error("❌ Lỗi Google Sheets:", error.message);
    // Trả về dữ liệu Mock nếu rớt mạng hoặc cấu hình sai
    return MOCK_PRODUCTS;
  }
}