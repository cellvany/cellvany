const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export async function analyzeSkin(base64Image) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) throw new Error('Thiếu VITE_GEMINI_API_KEY trong .env');

  const body = {
    contents: [
      {
        parts: [
          {
            text: 'Bạn là chuyên gia da liễu. Phân tích ảnh da mặt ngắn gọn: (1) loại da, (2) 1-2 vấn đề nổi bật, (3) gợi �ích 2-3 sản phẩm trong danh sách: Serum Vitamin C, Kem Dưỡng Ẩm Hoa Hồng, Sữa Rửa Mặt Rau Má, Toner Trà Xanh, Mặt Nạ Đất Sét Nghệ, Tinh Chất Aloe Vera, Kem Chống Nắng Zinc SPF50, Dầu Dưỡng Argan. Trả lời tiếng Việt, dễ đọc.'
          },
          { inline_data: { mime_type: 'image/jpeg', data: base64Image } }
        ]
      }
    ],
    generationConfig: { temperature: 0.4, maxOutputTokens: 512 }
  };

  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini error ${res.status}: ${err}`);
  }
  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Không có kết quả phân tích.';
}

export function matchProductsToRecommendation(aiText, allProducts) {
  const lower = aiText.toLowerCase();
  const keywordMap = {
    'vitamin': '1',
    'dưỡng ẩm': '2',
    'hoa hồng': '2',
    'rau má': '3',
    'làm sạch': '3',
    'sữa rửa': '3',
    'toner': '4',
    'trà xanh': '4',
    'mặt nạ': '5',
    'nghệ': '5',
    'aloe': '6',
    'phục hồi': '6',
    'chống nắng': '7',
    'zinc': '7',
    'dưỡng tóc': '8',
    'argan': '8',
  };
  const matchedIds = new Set();
  for (const [kw, id] of Object.entries(keywordMap)) {
    if (lower.includes(kw)) matchedIds.add(id);
  }
  if (matchedIds.size === 0) return allProducts.slice(0, 4);
  return allProducts.filter((p) => matchedIds.has(p.id)).slice(0, 4);
}
