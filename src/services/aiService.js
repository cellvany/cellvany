const GEMINI_MODEL = 'gemini-2.0-flash';

function getGeminiApiKey() {
  return import.meta.env.VITE_GEMINI_API_KEY || window.CONFIG?.GEMINI_API_KEY || window.API_KEY;
}

function fallbackResult() {
  return {
    skinType: 'da hỗn hợp',
    skinAnalysis: 'Làn da có xu hướng dầu ở vùng T và thiếu ẩm nhẹ ở hai bên má.',
    recommendedIds: ['1', '4', '3'],
    tip: 'Dùng toner dịu nhẹ, serum Vitamin C vào buổi sáng và sữa rửa mặt không sulfate.',
  };
}

export async function analyzeSkin(imageBase64, products) {
  const apiKey = getGeminiApiKey();
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') return fallbackResult();

  const productList = products
    .map((product) => (
      `ID:${product.id} | ${product.name} | ${product.category} | ${product.desc} | Tags:${(product.tags || []).join(',')} | Thành phần:${product.ingredients}`
    ))
    .join('\n');

  const prompt = `Bạn là chuyên gia da liễu và tư vấn mỹ phẩm thuần chay CellVany.
Phân tích ảnh khuôn mặt và trả về JSON hợp lệ, không markdown:
{"skinType":"...","skinAnalysis":"...","recommendedIds":["id1","id2","id3"],"tip":"..."}

Yêu cầu:
1. Xác định loại da.
2. Nhận xét ngắn tình trạng da trong 1-2 câu.
3. Gợi ý tối đa 3 sản phẩm phù hợp nhất từ danh sách.

DANH SÁCH SẢN PHẨM:
${productList}`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { inline_data: { mime_type: 'image/jpeg', data: imageBase64 } },
          { text: prompt },
        ],
      }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 512 },
    }),
  });

  if (!response.ok) throw new Error(`Gemini error ${response.status}`);

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  const jsonText = text.replace(/```json|```/g, '').trim();

  return JSON.parse(jsonText);
}

export function getMockAiResult() {
  return fallbackResult();
}
