# AI ART DIRECTOR PROMPT — CELLVANY
## Mỹ Phẩm Thuần Chay Cao Cấp — Website Thiết Kế Chuyên Nghiệp Độc Quyền

---

## 1. BRAND ESSENCE — BẢN SẮC THƯƠNG HIỆU

**Tên thương hiệu:** CellVany
**Lĩnh vực:** Mỹ phẩm thuần chay (Vegan Cosmetics) cao cấp
**Positioning:** "Vẻ đẹp từ thiên nhiên, sức mạnh từ khoa học"
**Brand personality:** Thanh lịch, tinh tế, có trách nhiệm, khoa học nhưng gần gũi, sang trọng nhưng không kiêu căng
**Target audience:** Người tiêu dùng hiện đại (25-45 tuổi), yêu thích mỹ phẩm thuần chay, quan tâm đến sức khỏe da và môi trường, có thu nhập trung bình khá trở lên, thích mua sắm online, hoạt động trên Instagram và Pinterest, ưa chuộng thiết kế tối giản, organic, gần gũi thiên nhiên.

---

## 2. COLOR PALETTE — BẢNG MÀU CHÍNH (THEO HÌNH MẪU)

| Tên màu | Hex Code | Công dụng |
|---------|----------|-----------|
| **Forest Depth** | `#1a3a2a` | Màu chủ đạo đậm — navbar, footer, CTA buttons, headings chính |
| **Botanical Mid** | `#2d6a4f` | Màu trung gian — gradient backgrounds, hover states, accents |
| **Vitality Green** | `#40916c` | Màu tươi sáng — badge, secondary buttons, links, icon |
| **Sage Light** | `#74c69d` | Màu nhạt — success states, highlights, decorative elements |
| **Mint Mist** | `#b7e4c7` | Màu rất nhạt — section backgrounds, cards hover, subtle dividers |
| **Foam White** | `#d8f3dc` | Gần trắng — hero background tint, input backgrounds |
| **Pale Cream** | `#f0faf3` | Kem trắng — page background, card backgrounds |
| **Warm White** | `#faf9f5` | Trắng ấm — hero text areas, main content background |
| **Pure White** | `#ffffff` | Trắng tinh — cards, modals, form inputs |

**Màu phụ (Accent):**
- **Gold Sand** `#c9a96e` — sao đánh giá, điểm nhấn sang trọng
- **Gold Light** `#e8d5b0` — gold hover, decorative lines

**Text hierarchy:**
- **Text Dark** `#1a2e22` — headings chính, body text
- **Text Mid** `#3d5a47` — secondary text, descriptions
- **Text Light** `#6b8f78` — placeholder, muted info

**Gradient đặc trưng thương hiệu:**
```
Linear Gradient 135deg: #1a3a2a → #2d6a4f → #40916c (CTA, hero sections)
Radial Gradient: #d8f3dc → transparent (blob backgrounds, decorative)
```

---

## 3. TYPOGRAPHY — HỆ FONT CHỮ

**Font chính (Primary): Inter** — Sử dụng cho tất cả UI elements, body text, buttons, form labels, navigation
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- Letter-spacing: 0.02em (body), 0.05em (labels), 0.08em (badges), 0.15em (section labels uppercase)
- Line-height: 1.6 (body), 1.15 (headings)

**Font phụ (Display/Accent): Cormorant Garamond** — Sử dụng CHO HEADINGS LỚN, HERO TITLE, SECTION TITLES CHỈ
- Weights: 300 (Light), 400 (Regular)
- Style: italic cho từ nhấn mạnh trong hero
- Tạo sự tương phản tinh tế giữa serif đẹp và sans-serif hiện đại

**Quy tắc kết hợp:**
- Headings lớn (H1, H2 hero) → Cormorant Garamond 300-400
- Body text, UI elements → Inter 300-500
- Buttons, badges, labels → Inter 500-600
- Quotes, testimonials → Cormorant Garamond italic 300

---

## 4. DESIGN STYLE & VIBE — PHONG CÁCH THIẾT KẾ

### 4.1 Phong cách tổng thể: "Organic Luxury meets Digital Minimalism"
- **Bán thiên nhiên (Nature-selling):** Sử dụng hình ảnh thực vật, lá cây, hoa, texture giấy, gradient màu sắc tự nhiên
- **Tối giản tinh tế (Refined Minimalism):** Không rối mắt, khoảng trắng (whitespace) dồi dào, layout rõ ràng, grid hệ thống 8px
- **Sang trọng có trách nhiệm (Conscious Luxury):** Premium feel nhưng không lãng phí, thiết kế có ý thức
- **Khoa học + Thiên nhiên:** Cân bằng giữa yếu tố hiện đại (AI scan, tech) và organic (thực vật, texture)

### 4.2 Các yếu tố thiết kế theo xu hướng 2025-2026:
1. **Bento Grid Layout** — Sản phẩm hiển thị dạng lưới bo góc lớn (24-32px radius), gap rộng 24-32px, như hộp bento Nhật Bản
2. **Micro-interactions** — Hover effects tinh tế: translateY(-6px) + shadow mờ (0 8px 30px), transition 0.35s cubic-bezier(0.4, 0, 0.2, 1)
3. **Glassmorphism nhẹ** — Navbar dùng backdrop-filter: blur(12px) với background rgba(250, 249, 245, 0.92), border mờ 1px
4. **Texture & Grain** — Thêm SVG noise filter hoặc gradient noise tạo cảm giác "paper touch" cho các section
5. **Liquid/Organic Shapes** — Sử dụng border-radius không đều (ví dụ: 40px 40px 120px 40px) tạo hình dạng tự nhiên, không cứng nhắc
6. **Dark mode ready** — CSS variables cho phép switch dark mode sau này
7. **Scroll-triggered animations** — Fade-in, slide-up khi scroll xuống (dùng Intersection Observer)
8. **Generative decorative blobs** — Hình elip mờ màu xanh lá làm background cho hero section
9. **Bold typography hierarchy** — Chênh lệch rõ ràng giữa heading (clamp 2.6rem → 4.2rem) và body (1rem)
10. **Sustainable visual cues** — Icon lá cây, badge "🌱 Vegan", certification marks

---

## 5. PAGE STRUCTURE — CẤU TRÚC MULTI-PAGE

### 5.1 Tổng quan:
Website là **multi-page application** với các trang riêng biệt, mỗi trang có URL riêng (hash-based routing hoặc URL-based):
- `/` hoặc `/home` — Trang chủ
- `/product/:id` — Chi tiết sản phẩm (được navigate từ product card click)
- `/cart` — Giỏ hàng
- `/checkout` — Thanh toán
- `/about` — Về chúng tôi

### 5.2 Flow điều hướng:
```
[Face Scan Overlay] → (capture/skip) → [Home Page]
    ├── Click product card → /product/:id
    ├── Click cart icon → /cart
    ├── Click checkout → /checkout
    ├── Click "Về chúng tôi" → /about
    └── CTA "Đăng ký ngay" ở cuối trang → Toast notification
```

---

## 6. PAGE-BY-PAGE BREAKDOWN — CHI TIẾT TỪNG TRANG

### 6.1 FACE SCAN OVERLAY (First Experience — Onboarding)
**Vị trí:** Overlay toàn màn hình, xuất hiện đầu tiên khi vào website
**Mục đích:** Trải nghiệm AI-powered phân tích da → gợi ý sản phẩm cá nhân hóa

**Layout:**
- Dark overlay: `rgba(15, 30, 22, 0.97)` — gần như đen lá
- Center content: video feed trong khung tròn (260x260px), surrounded by animated scan rings
- Scan rings: 2 vòng tròn xoay với animation spinRing (4s và 7s, ngược chiều)
- Scan line: đường quét chuyển động từ 10% → 85% trong 2.5s loop
- Nút chụp:圆形 button 72x72px, màu #40916c, có box-shadow glow
- Text: "Phân tích da của bạn" (Cormorant Garamond 1.8rem), mô tả ngắn bên dưới
- Skip link: "Bỏ qua, vào trang chủ →" màu nhạt, underline, dễ click

**Logic:**
- Mặc định hiện khi load trang (sau loading screen)
- Nếu user click "Bỏ qua" → lưu vào localStorage flag `cellvany_scan_dismissed = true` → KHÔNG BAO GIỜ hiện lại
- **Nút "Phân tích da" trong navbar** (icon camera/scan) → cho phép user trigger lại face scan bất cứ lúc nào
- Sau khi chụp → gửi ảnh đến Gemini AI → hiện modal kết quả + show AI recommendations trên homepage

### 6.2 HOME PAGE (`/home`)
**Loading Screen:**
- Full screen overlay, background #1a3a2a (deep green)
- Logo "CellVany" ở center, Cormorant Garamond 3rem, letter-spacing 0.3em, màu #d8f3dc
- Progress bar: 200px width, 2px height, màu #74c69d, animation loadProgress 1.8s
- Text "ĐANG TẢI SẢN PHẨM..." màu #b7e4c7

**Navbar (Sticky):**
- Height: 70px, background rgba(250, 249, 245, 0.92) với backdrop-filter: blur(12px)
- Border bottom: 1px solid rgba(45, 106, 79, 0.1)
- Logo "CellVany" bên trái (Cormorant Garamond, color #1a3a2a, span "Vany" màu #40916c)
- Nav links giữa: "Trang chủ" | "Sản phẩm" | "Về chúng tôi" | "Đánh giá" (Inter 500, màu #3d5a47, hover → #40916c)
- Cart icon + hamburger bên phải
- Mobile: hamburger menu toggle, nav-links mở dropdown full-width dưới navbar

**Hero Section:**
- Min-height: 90vh, grid 2 cột (1fr 1fr), gap 60px, align-items center
- Background: cream (#faf9f5) với radial gradient blob (70% width, 140% height, màu #d8f3dc)
- **Left column:**
  - Badge: "🌿 100% Thuần Chay & Không Thử Nghiệm Trên Động Vật" — background #d8f3dc, màu chữ #2d6a4f, pill shape (border-radius 40px), font-size 0.75rem, letter-spacing 0.08em
  - H1: "Vẻ đẹp từ [italic]thiên nhiên[/italic], sức mạnh từ khoa học" — Cormorant Garamond, clamp(2.6rem, 5vw, 4.2rem), weight 300, line-height 1.15, màu #1a3a2a, italic word màu #40916c
  - Description: 1rem, màu #3d5a47, max-width 420px, line-height 1.8, margin-bottom 40px
  - CTAs: 2 buttons cạnh nhau
    - "Khám phá sản phẩm" — filled #1a3a2a, white text, pill shape, hover → #40916c + translateY(-2px)
    - "Về CellVany" — outline, border 1.5px solid #40916c, text #40916c, hover → bg #d8f3dc
- **Right column:**
  - Hero image container: aspect-ratio 4/5, border-radius 40px 40px 120px 40px (bo tròn 3 góc, 1 góc nhọn tạo organic feel), overflow hidden, box-shadow 0 20px 60px rgba(26, 58, 42, 0.2)
  - Placeholder content: gradient 135deg (#d8f3dc → #b7e4c7 → #74c69d), icon lá 5rem, text "CellVany Beauty"
  - Floating badge: absolute positioned, bottom: 32px, left: -24px, white bg, rounded 16px, padding 16px 20px, shadow card
    - Icon 🌱 + "100% Vegan" (strong, #1a3a2a) + "Không cruelty-free" (span, #6b8f78)

**AI Recommendations Banner:**
- Margin: 0 5% 60px
- Background: linear-gradient 135deg (#1a3a2a → #2d6a4f)
- Border-radius: 24px, padding: 40px 48px
- Title: "✨ Gợi ý riêng cho bạn" (Cormorant Garamond 1.6rem, white)
- Subtitle: dynamic text dựa trên kết quả phân tích da
- Products grid: auto-fill, minmax(180px, 1fr), gap 16px
- Initially hidden (display: none), show after AI analysis

**Products Section:**
- Section label: "Bộ sưu tập" (uppercase, 0.72rem, letter-spacing 0.2em, #40916c)
- Section title: "Sản phẩm nổi bật" (Cormorant Garamond, clamp 1.8rem → 2.8rem, #1a3a2a)
- Subtitle: text mô tả ngắn
- Products grid: auto-fill, minmax(240px, 1fr), gap 28px
- Product card specs:
  - Background: white, border-radius 16px, overflow hidden, box-shadow 0 4px 30px rgba(26, 58, 42, 0.08)
  - Hover: translateY(-6px), box-shadow mờ đậm hơn, transition 0.35s
  - Image area: aspect-ratio 1, background #f0faf3, gradient (#f0faf3 → #d8f3dc), icon placeholder 3rem
  - Vegan badge: absolute top-left, bg #1a3a2a, text #b7e4c7, pill shape, font 0.68rem
  - Info: padding 20px
    - Category: 0.72rem, #40916c, uppercase, letter-spacing 0.1em
    - Name: Cormorant Garamond 1.1rem, #1a3a2a
    - Desc: 0.8rem, #6b8f78, max 80 chars + "..."
    - Footer: price (#1a3a2a, 1rem, weight 600) + button "+ Thêm" (#d8f3dc bg, hover #40916c + white)

**Values Section:**
- Background: #f0faf3 (Foam White)
- 4 giá trị cards: 100% Thuần Chay | Nghiên cứu khoa học | Bao bì bền vững | Phù hợp da nhạy cảm
- Mỗi card: white bg, rounded 16px, padding 40px 28px, shadow mờ, hover translateY(-4px)
- Icon emoji 2.4rem, heading Cormorant Garamond 1.2rem, text 0.85rem

**Testimonials Section:**
- 3 testimonial cards, grid auto-fill minmax(280px, 1fr)
- Mỗi card: white, rounded 16px, padding 32px, shadow mờ
- Stars: màu vàng #c9a96e, font-size 0.9rem, letter-spacing 2px
- Quote: Cormorant Garamond italic 1.05rem, màu #3d5a47
- Author: avatar 40px circle + name + location

**CTA Banner (Bottom):**
- Gradient 135deg: #1a3a2a → #2d6a4f → #40916c (3-color gradient)
- Padding 80px 5%, text-align center
- Decorative radial gradient blob (rgba(116, 198, 157, 0.15))
- H2: "Bắt đầu hành trình làm đẹp thuần chay của bạn" (Cormorant Garamond clamp 1.8rem → 3rem, white, weight 300)
- Subtitle: text mô tả, màu #b7e4c7, max-width 440px
- Button: "Đăng ký ngay" — white bg, #1a3a2a text, pill shape, hover → bg #d8f3dc + translateY(-2px)
- **Khi click → redirect sang route /product** (hiển thị products section)

**Footer:**
- Background: #1a3a2a, text #b7e4c7
- 4-column grid: Brand (2fr) + 3 link columns (1fr each)
- Logo "CellVany" (màu #d8f3dc)
- Brand description + social links
- Link columns: Sản phẩm | Thương hiệu | Hỗ trợ
- Bottom: copyright + tagline "🌿 Thuần Chay • Bền Vững • Yêu Thương"

### 6.3 PRODUCT DETAIL PAGE (`/product/:id`)
- Max-width 1100px, margin 60px auto, padding 0 5%
- Back button: "← Quay lại" màu #40916c, hover → gap tăng từ 8px → 12px
- 2-column grid (1fr 1fr, gap 64px)
- Left: Product image — aspect-ratio 1, rounded 32px, bg #f0faf3, shadow card
- Right: Product info
  - Category label: 0.75rem, #40916c, uppercase, letter-spacing 0.15em
  - Name: Cormorant Garamond 2.2rem, #1a3a2a, weight 300
  - Price: 1.6rem, weight 600, #40916c
  - Description: 0.95rem, #3d5a47, line-height 1.9
  - Tags: pill badges, bg #d8f3dc, text #2d6a4f
  - Action buttons: "🛒 Thêm vào giỏ hàng" (filled #1a3a2a) + "Mua ngay" (outline)
  - Ingredients section (nếu có): heading + text, màu nhạt

### 6.4 CART PAGE (`/cart`)
- Max-width 900px, margin 60px auto
- Back button → home
- 2-column layout: cart items (flex 1) + summary sidebar
- Cart item: white bg, rounded 8px, padding 20px 24px, flex row
  - Image 72x72px rounded 12px, bg #f0faf3
  - Info: name + price
  - Qty controls: - [number] + buttons (circular 30px, border #b7e4c7)
  - Total price right-aligned
  - Remove button: ✕, hover → red #e74c3c
- Summary: white card, rounded 16px, padding 32px
  - Subtotal / Shipping / Total rows
  - "Mua thêm X để miễn phí vận chuyển!" hint (nếu subtotal < 500k)
  - "Tiến hành thanh toán →" button (full width, #1a3a2a)

### 6.5 CHECKOUT PAGE (`/checkout`)
- Max-width 800px, margin 60px auto
- Form card: white, rounded 16px, padding 40px, shadow mờ
- Form groups: label (0.82rem, weight 500, #3d5a47) + input (bg #f0faf3, border #b7e4c7, focus → #40916c + white bg)
- Form layout: 2-column grid (1fr 1fr, gap 20px) cho các cặp field
- Payment methods: 3 options (💳 Thẻ ngân hàng | 📱 MoMo/ZaloPay | 💵 COD), border 1.5px solid, selected state: border #40916c + bg #d8f3dc
- Order summary mini-card: bg #f0faf3, rounded 8px, hiển thị subtotal + shipping + total
- Submit button: "Đặt hàng – {total}đ", full width, #1a3a2a
- Success state: icon 🎉, thank you message, "Tiếp tục mua sắm" button

### 6.6 ABOUT PAGE (`/about`)
- Hero: min-height 60vh, gradient bg (#f0faf3 → #d8f3dc), content max-width 640px
  - H1: "Vẻ đẹp thuần khiết từ trái tim người Việt" (Cormorant Garamond 2-3.2rem)
  - Description + CTA button
- Stats section: 3-column grid (#50+ Sản phẩm | #10K+ Khách hàng | #100% Không thử nghiệm), white bg
- Story section: 2-column grid (text + image), max-width 1100px
- Team section: 4 cards grid (TS. Minh Thư | BS. Hoàng Nam | Ngọc Hà | Văn Khoa), background #f0faf3
- Closing CTA: "Cùng chúng tôi thay đổi ngành làm đẹp"
- Footer nhỏ: copyright only

---

## 7. UI COMPONENTS — THÀNH PHẦN GIAO DIỆN

### 7.1 Buttons (4 loại):
```
.btn-primary:     bg #1a3a2a, white text, pill (50px), shadow, hover → #40916c + lift
.btn-outline:     border 1.5px solid #40916c, text #40916c, pill, hover → bg #d8f3dc
.btn-cta-white:   bg white, text #1a3a2a, pill, hover → bg #d8f3dc + lift
.btn-add-cart:    bg #d8f3dc, text #1a3a2a, pill nhỏ (24px), hover → bg #40916c + white
```

### 7.2 Cards:
- Border-radius: 16px (standard), 32px (hero image), 8px (form, cart item)
- Shadow: mờ nhạt `0 4px 30px rgba(26, 58, 42, 0.08)` cho hover default
- Shadow đậm: `0 2px 20px rgba(26, 58, 42, 0.12)` cho hover state
- Background: white hoặc gradient nhạt xanh lá

### 7.3 Badges & Tags:
- Vegan badge: bg #1a3a2a, text #b7e4c7, font 0.68rem, pill 20px
- Tags: bg #d8f3dc, text #2d6a4f, font 0.78rem, pill 20px
- Section labels: text #40916c, uppercase, letter-spacing 0.2em, font 0.72rem

### 7.4 Forms:
- Input bg: #f0faf3, border 1.5px solid #b7e4c7
- Focus: border #40916c, bg white
- Border-radius: 8px
- Padding: 12px 16px
- Font: Inter, 0.9rem

### 7.5 Toast Notifications:
- Fixed: bottom 24px, right 24px, z-index 5000
- Background: #1a3a2a, white text, rounded 8px
- Animation: slideInToast 0.3s ease
- Auto-dismiss sau 3.5s

---

## 8. RESPONSIVE BREAKPOINTS — CHI TIẾT RESPONSIVE

### Desktop (> 1024px):
- Full layout: grid đầy đủ cột, navbar hiển thị đầy đủ links
- Hero: 2 cột, gap 60px
- Products: minmax(240px, 1fr)
- Footer: 4 cột

### Tablet (768px - 1024px):
- Hero: 1 cột, hero-visual lên trên (order: -1)
- Products: minmax(200px, 1fr)
- Footer: 2 cột
- Form rows: 1 cột
- Padding sections: giảm 5% → 4%

### Mobile (< 768px):
- Navbar: hamburger menu (display: flex), nav-links mặc định ẩn, mở dropdown khi click
- Hero: 1 cột, max-height 320px cho image
- Hero floating badge: left 12px, bottom 12px (điều chỉnh vị trí)
- Products: 1 cột hoặc 2 cột tùy space
- Footer: 1 cột
- Form: 1 cột, full width
- Payment methods: stack vertically
- Face scan overlay: padding 16px, camera frame giảm xuống 200px

### Very Small (< 480px):
- Navbar padding: 0 4%
- Footer: single column, center text
- CTA buttons: full width
- Product cards: single column

---

## 9. ANIMATIONS & MICRO-INTERACTIONS — CHUYỂN ĐỘNG

**Global transition:** `all 0.35s cubic-bezier(0.4, 0, 0.2, 1)`

**Loading animations:**
- Progress bar: width 0 → 100% trong 1.8s ease
- Loading screen: fade-out (opacity 1 → 0, pointer-events none) sau 2s

**Face scan animations:**
- Scan ring spin: 4s linear infinite
- Scan ring 2: 7s linear infinite reverse
- Scan line: 2.5s ease-in-out infinite (top: 10% → 85%)

**Product card hover:**
- translateY(-6px) + box-shadow tăng độ mờ
- Image zoom: scale(1.05) trong 0.5s ease

**Button hover:**
- translateY(-2px) + background color shift
- Box-shadow mở rộng

**Toast slide-in:**
- translateX(100%) → translateX(0), opacity 0 → 1, 0.3s ease

**Navigation:**
- Link hover: color transition 0.2s (#3d5a47 → #40916c)

---

## 10. TECHNICAL SPECIFICATIONS — YÊU CẦU KỸ THUẬT

### 10.1 Tech Stack:
- Pure HTML/CSS/JavaScript (no framework dependencies)
- Vanilla JS cho routing, state management, cart logic
- Google Sheets API cho product data (fallback to mock data)
- Gemini AI API cho face skin analysis
- localStorage cho cart persistence + scan dismissed flag

### 10.2 State Management:
```javascript
// Key localStorage fields:
'cellvany_cart': JSON array of cart items
'cellvany_products': cached product list
'cellvany_scan_dismissed': boolean (true = never show scan again)
```

### 10.3 Routing System:
- Hash-based: `#/home`, `#/product/:id`, `#/cart`, `#/checkout`, `#/about`
- Hoặc URL-based nếu deploy lên server với rewrite rules
- Navigation function: `navigate(page, data)` — hide all .page, show target, update navbar

### 10.4 Performance:
- Lazy loading cho product images (`loading="lazy"`)
- CSS-first animations (không dùng JS libraries)
- Font preload: Google Fonts preconnect + swap
- Image placeholders: gradient + emoji cho lần load đầu

### 10.5 Accessibility:
- Semantic HTML: nav, section, footer, button
- Alt text cho images
- Focus states cho interactive elements
- Sufficient color contrast (WCAG AA)

---

## 11. VISUAL REFERENCE & MOCKUP GUIDELINES — HƯỚNG DẪN MOCKUP

### 11.1 Khi generate mockup hình ảnh, AI nên tạo:

**Hero Section Mockup:**
- Background: gradient từ #faf9f5 (cream) đến #f0faf3 (pale cream)
- Decorative element: hình elip mờ màu #d8f3dc ở góc trên bên phải
- Left side text layout với badge pill màu #d8f3dc
- Typography: Heading lớn serif (Cormorant Garamond italic), body sans-serif (Inter)
- Right side: hình ảnh sản phẩm mỹ phẩm trong khung bo cong organic (40px 40px 120px 40px)
- CTA buttons: pill shape, dark green filled + outline variant

**Product Card Mockup:**
- Card trắng, rounded 16px, shadow mờ
- Image area: gradient xanh lá nhạt, emoji placeholder
- Badge "🌱 Vegan" góc trên-trái
- Typography: Category label uppercase nhỏ, product name serif, description sans-serif nhạt màu
- Price + add button footer

**Color usage trong mockup:**
- Background dominantly cream/pale cream (#faf9f5, #f0faf3)
- Accent areas: deep green (#1a3a2a) cho navbar, footer, primary buttons
- Gradient CTA sections: 3-color green gradient
- White cards trên light green background tạo depth
- Gold (#c9a96e) chỉ dùng cho stars, không spread ra các element khác

### 11.2 Moodboard description cho AI image generator:
```
A premium vegan cosmetics website landing page, organic luxury aesthetic,
dominant green color palette (forest deep to mint mist gradient),
clean minimalist layout with generous whitespace,
Inter + Cormorant Garamond typography pairing,
product cards in white rounded containers,
hero section with asymmetric grid layout,
nature-inspired decorative elements (leaves, organic shapes),
soft shadows and glass-morphism navbar,
professional e-commerce feel with sustainability ethos,
light cream background with botanical green accents,
CTA buttons in dark forest green with pill shape,
testimonial cards with star ratings in gold,
footer in deep green with brand story,
overall vibe: clean, trustworthy, eco-conscious, sophisticated
```

---

## 12. DESIGN SYSTEM SUMMARY — TÓM TẮT HỆ THỐNG THIẾT KẾ

| Element | Spec |
|---------|------|
| **Primary Font** | Inter (300, 400, 500, 600) |
| **Display Font** | Cormorant Garamond (300, 400, italic) |
| **Background** | #faf9f5 (cream) |
| **Primary Green** | #1a3a2a (forest) |
| **Accent Green** | #40916c (vitality) |
| **Light Green** | #d8f3dc (mist) |
| **White** | #ffffff |
| **Gold** | #c9a96e |
| **Border Radius** | 8px (input), 16px (card), 24px (section), 32px (hero img), 50px (pill) |
| **Shadow Soft** | 0 4px 30px rgba(26, 58, 42, 0.08) |
| **Shadow Card** | 0 2px 20px rgba(26, 58, 42, 0.12) |
| **Transition** | all 0.35s cubic-bezier(0.4, 0, 0.2, 1) |
| **Container Padding** | 5% desktop, 4% tablet |
| **Grid Gap** | 28-32px products, 60px hero |
| **Button Pill** | border-radius 50px |
| **Max Content Width** | 1100px (product), 900px (cart), 800px (checkout) |

---

## 13. DELIVERABLE REQUIREMENTS — YÊU CẦU ĐẾN TỪ ART DIRECTOR

**Khi generate website/theo prompt này, AI/designer cần đảm bảo:**

1. ✅ **Màu sắc:** Chính xác 5 tone xanh lá gradient như bảng màu, không deviation
2. ✅ **Typography:** Inter làm font chính, Cormorant Garamond chỉ cho headings lớn
3. ✅ **Multi-page:** Tách biệt hoàn toàn các trang (home, product, cart, checkout, about)
4. ✅ **Face scan UX:** Cho phép dismiss vĩnh viễn HOẶC re-trigger bằng nút trong navbar
5. ✅ **CTA → /product:** Button cuối trang chuyển hướng đến trang sản phẩm
6. ✅ **Bento grid:** Products hiển thị dạng lưới bo góc lớn, hiện đại
7. ✅ **Responsive:** Hoạt động tốt trên desktop, tablet, mobile
8. ✅ **Animations:** Smooth transitions, hover effects, loading states
9. ✅ **Vibe "bán thiên nhiên":** Texture giấy, gradient tự nhiên, icon thực vật, organic shapes
10. ✅ **Professional & Exclusive:** Không look like template, thiết kế unique cho CellVany

---

## 14. IMPLEMENTATION NOTES — GHI CHÚ TRIỂN KHAI

### 14.1 Multi-page routing logic:
```javascript
// Hash-based routing
function navigate(page, data) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById(`page-${page}`).classList.add('active');
  // Update URL hash
  window.location.hash = page === 'home' ? '/' : `/${page}`;
  if (data) window.location.hash += `/${data.id}`;
  // Scroll to top
  window.scrollTo(0, 0);
}
```

### 14.2 Face scan re-trigger button:
```javascript
// Thêm icon scan vào navbar (bên cạnh cart icon)
// Click → reset dismissed flag → show face scan overlay
function retriggerFaceScan() {
  localStorage.removeItem('cellvany_scan_dismissed');
  startFaceScan();
}
```

### 14.3 CTA redirect to /product:
```javascript
// Thay vì showToast, navigate sang products section
onclick="navigate('home'); setTimeout(scrollToProducts, 300)"
```

---

**END OF AI ART DIRECTOR PROMPT**
*Generated for CellVany — Mỹ Phẩm Thuần Chay Cao Cấp*
*Brand Essence: Vẻ đẹp từ thiên nhiên, sức mạnh từ khoa học*
