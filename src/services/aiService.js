const OPENROUTER_MODEL = 'nvidia/nemotron-nano-12b-v2-vl:free';

function fallbackResult() {
  return {
    skinType: 'da hỗn hợp',
    skinAnalysis: 'Làn da có xu hướng dầu ở vùng T và thiếu ẩm nhẹ ở hai bên má.',
    recommendedIds: ['1', '4', '3'],
    tip: 'Dùng toner dịu nhẹ, serum Vitamin C vào buổi sáng và sữa rửa mặt không sulfate.',
  };
}

export async function analyzeSkin(imageBase64, products) {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  if (!apiKey) return fallbackResult();

  const productList = products
    .map((p) => `ID:${p.id} | ${p.name} | ${p.category} | ${p.desc} | Tags:${(p.tags || []).join(',')} | Thành phần:${p.ingredients}`)
    .join('\n');

  const prompt = `Bạn là chuyên gia da liễu và tư vấn mỹ phẩm thuần chay CellVany.
Phân tích ảnh khuôn mặt và trả về JSON hợp lệ, không markdown, PHẢI dùng tiếng Việt:
{"skinType":"...","skinAnalysis":"...","recommendedIds":["id1","id2","id3"],"tip":"..."}

Yêu cầu:
1. Xác định loại da (tiếng Việt, ví dụ: da dầu, da khô, da hỗn hợp, da thường, da nhạy cảm).
2. Nhận xét tình trạng da trong 2-3 câu tiếng Việt, mô tả chi tiết.
3. PHẢI gợi ý ĐÚNG 3 sản phẩm phù hợp nhất từ danh sách bên dưới, dùng đúng ID.
4. Tip chăm sóc da chi tiết 2-3 câu tiếng Việt.
5. Phải trả lời bằng tiếng việt

DANH SÁCH SẢN PHẨM:
${productList}`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [{
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } },
            { type: 'text', text: prompt },
          ],
        }],
        temperature: 0.3,
        max_tokens: 512,
      }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    console.log('res: ', data);

    const text = data?.choices?.[0]?.message?.content;
    if (!text) throw new Error('Empty content');

    const jsonText = text.replace(/```json|```/g, '').trim();
    return JSON.parse(jsonText);
  } catch (err) {
    console.error('analyzeSkin error:', err.message);
    return fallbackResult();
  }
}

export function getMockAiResult() {
  return fallbackResult();
}