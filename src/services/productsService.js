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

export async function loadProducts() {
  const { sheetId, range, apiKey } = getSheetConfig();

  try {
    if (!sheetId || !apiKey || sheetId === 'YOUR_GOOGLE_SHEET_ID_HERE') {
      throw new Error('Using mock products');
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Sheet fetch failed');

    const data = await response.json();
    const rows = data.values || [];
    const headers = (rows[0] || []).map((header) => header.toLowerCase().trim());
    const products = rows.slice(1).map((row, index) => normalizeProduct(row, headers, index));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return products;
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_PRODUCTS));
    return MOCK_PRODUCTS;
  }
}
