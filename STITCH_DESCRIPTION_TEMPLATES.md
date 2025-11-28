# Stitch Description Templates - Copy & Paste Ready

## Template cho Module 1: Tính toán Đường ống

```
Create a technical calculation page with responsive 2-column layout using Tailwind CSS and React.

Left Column (Input Form):
- White background card with padding-6, rounded-lg, shadow-lg
- Header "Thông số Đầu vào" with text-xl font-semibold text-gray-800, margin-bottom-6
- Form with space-y-4 (vertical spacing 16px between fields)
- Input fields with:
  * Label: text-sm font-medium text-gray-700
  * Input: flex-1, px-3 py-2, border border-gray-300, rounded-md, focus:ring-2 focus:ring-blue-500
  * Unit display: text-sm text-gray-500, whitespace-nowrap (if applicable)
- Fields needed:
  1. Lưu lượng Q: number input, min 0.0001, step 0.0001
  2. Đơn vị lưu lượng: select dropdown with options (m³/s, m³/h, m³/ngày)
  3. Chiều dài ống L: number input, unit "m", min 0.1, step 0.1
  4. Nhiệt độ nước t: number input, unit "°C", min 0, max 100, step 0.1
  5. Chênh lệch chiều cao Hc: number input, unit "m", min 0, step 0.1
  6. Độ nhám ống ε: number input, unit "m", min 0.00001, step 0.00001
  7. Hệ số tổn thất cục bộ β: number input, min 0.1, step 0.1
  8. Vật liệu ống: select dropdown (PVC, HDPE, Thép, Gang)
- Submit button: w-full, bg-blue-600, text-white, py-3 px-4, rounded-md, font-semibold, hover:bg-blue-700, disabled:bg-gray-400, disabled:cursor-not-allowed
- Error message area: mt-4, p-4, bg-red-50, border border-red-200, rounded-md, text-red-800 text-sm

Right Column (Results):
- White background card with shadow-lg, padding-6
- Header section with:
  * Title "Kết quả Tính toán" text-2xl font-bold text-gray-800
  * Two toggle buttons: "Simple View" and "Engineering Full View" with active state bg-blue-500 text-white, inactive bg-gray-200 text-gray-700
- Simple View: Grid 2 columns (grid-cols-1 md:grid-cols-2) with gap-4, showing:
  * Metric cards with colored backgrounds (blue-50, green-50, yellow-50, purple-50)
  * Each card: p-4, rounded-lg, with title (font-semibold text-gray-700 mb-2) and value (text-2xl font-bold with color)
- Engineering View: JSON display in pre tag with bg-gray-50, p-4, rounded-lg, text-sm, overflow-x-auto
- Placeholder when no result: text-center text-gray-500

Page Layout:
- Background: bg-gray-50
- Container: min-h-screen, py-8, max-w-6xl, mx-auto, px-4
- Grid: grid-cols-1 lg:grid-cols-2, gap-8
- Responsive: Stack vertically on mobile (< lg breakpoint)
- Typography: Inter font family, Vietnamese language support
- Colors: Blue primary (#2563eb), Gray neutrals, White cards
```

## Template cho Module 2: Giàn phun mưa

```
Create a calculation page with responsive 2-column layout using Tailwind CSS and React.

Left Column (Input Form):
- Same styling as Module 1
- Title: "Module 2: Giàn phun mưa / Spray Aeration"
- Description: "Tính toán oxy bão hòa, lượng oxy cần thiết và hiệu suất phun mưa theo TCVN 7222:2002"
- Form fields:
  1. Lưu lượng Q: number input, min 0.0001, step 0.0001
  2. Đơn vị lưu lượng: select (m³/s, m³/h, m³/ngày)
  3. Nhiệt độ nước t: number input, unit "°C", min 0, max 100, step 0.1
  4. Nồng độ Fe²⁺ ban đầu: number input, unit "mg/L", min 0, step 0.1
  5. Nồng độ H₂S ban đầu: number input, unit "mg/L", min 0, step 0.1
  6. Diện tích giàn phun A: number input, unit "m²", min 0.1, step 0.1
  7. Hiệu suất phun mưa η: number input, min 0.7, max 0.9, step 0.01

Right Column: Same as Module 1
Page Layout: Same as Module 1
```

## Template cho Module 3: Ngăn trộn Phản ứng

```
Create a calculation page with responsive 2-column layout using Tailwind CSS and React.

Left Column (Input Form):
- Same styling as Module 1
- Title: "Module 3: Ngăn trộn Phản ứng / Rapid Mixing Reaction"
- Description: "Tính toán thể tích ngăn trộn, tốc độ phản ứng và hiệu suất oxy hóa theo TCVN 7222:2002"
- Form fields:
  1. Lưu lượng Q: number input, min 0.0001, step 0.0001
  2. Đơn vị lưu lượng: select (m³/s, m³/h, m³/ngày)
  3. Thời gian trộn t: number input, min 0.1, step 0.1
  4. Đơn vị thời gian: select (Giây, Phút, Giờ)
  5. Nồng độ Fe²⁺ ban đầu: number input, unit "mg/L", min 0, step 0.1
  6. Nồng độ H₂S ban đầu: number input, unit "mg/L", min 0, step 0.1
  7. Hằng số tốc độ Fe²⁺ k_Fe: number input, unit "L/mg·s", min 0.01, step 0.01
  8. Hằng số tốc độ H₂S k_H2S: number input, unit "L/mg·s", min 0.01, step 0.01
  9. Nồng độ oxy O₂: number input, unit "mg/L", min 0.1, step 0.1
  10. Tỷ lệ kích thước: text input (placeholder: "L:W:H = 2:1:1")

Right Column: Same as Module 1
Page Layout: Same as Module 1
```

## Template cho Module 4: Bể lắng

```
Create a calculation page with responsive 2-column layout using Tailwind CSS and React.

Left Column (Input Form):
- Same styling as Module 1
- Title: "Module 4: Bể lắng / Settling Tank"
- Description: "Tính toán diện tích, thể tích và hiệu suất lắng theo TCVN 7222:2002, TCVN 33-2006"
- Form fields:
  1. Lưu lượng Q: number input, min 0.0001, step 0.0001
  2. Đơn vị lưu lượng: select (m³/s, m³/h, m³/ngày)
  3. Tốc độ lắng U_o: number input, unit "m/s", min 0.0001, step 0.00001
  4. Góc nghiêng α: number input, unit "°", min 0, max 90, step 1
  5. Chiều cao thực tế H₀: number input, unit "m", min 0.1, step 0.1
  6. Chiều rộng ống lắng W: number input, unit "m", min 0.01, step 0.01
  7. Hệ số an toàn α: number input, min 1.0, step 0.01

Right Column: Same as Module 1
Page Layout: Same as Module 1
```

## Template cho Module 5: Bể lọc

```
Create a calculation page with responsive 2-column layout using Tailwind CSS and React.

Left Column (Input Form):
- Same styling as Module 1
- Title: "Module 5: Bể lọc / Filtration"
- Description: "Tính toán diện tích lọc, đường kính bể và chiều cao các lớp theo TCVN 33-2006"
- Form fields:
  1. Lưu lượng Q: number input, min 0.0001, step 0.0001
  2. Đơn vị lưu lượng: select (m³/s, m³/h, m³/ngày)
  3. Vận tốc lọc v: number input, unit "m/h", min 6, max 10, step 0.1
  4. Cường độ rửa lọc q: number input, unit "l/s·m²", min 12, max 15, step 0.1
  5. Thời gian rửa t_rửa: number input, unit "phút", min 1, step 0.5
  6. Số ngăn bể n: number input, min 1, step 1
  7. Grid 2 columns (grid-cols-2 gap-4) for height fields:
     - h₁ (Bộ phận thu đáy): number input, unit "m", min 0.1, step 0.1
     - h₂ (Bản lọc): number input, unit "m", min 0.1, step 0.1
     - h₃ (Lớp đệm): number input, unit "m", min 0.05, step 0.05
     - h₄ (Vật liệu lọc): number input, unit "m", min 0.5, step 0.1
     - h₅ (Lớp nước): number input, unit "m", min 0.3, step 0.1
     - h₆ (Bản đỉnh): number input, unit "m", min 0.1, step 0.1
     - h₈ (Bảo vệ): number input, unit "m", min 0.5, step 0.1

Right Column: Same as Module 1
Page Layout: Same as Module 1
```

## Template chung cho ResultsDisplay Component

```
Create a results display component with two view modes using Tailwind CSS and React.

Component Structure:
- Container: w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg
- Header section:
  * Title "Kết quả Tính toán" text-2xl font-bold text-gray-800
  * Toggle buttons container: flex gap-2
  * Button "Simple View": px-4 py-2 rounded-md, active: bg-blue-500 text-white, inactive: bg-gray-200 text-gray-700 hover:bg-gray-300
  * Button "Engineering Full View": same styling as Simple View button

Simple View Mode:
- Grid layout: grid-cols-1 md:grid-cols-2 gap-4
- Metric cards with colored backgrounds:
  * Card 1: bg-blue-50 p-4 rounded-lg
    - Title: font-semibold text-gray-700 mb-2
    - Value: text-2xl font-bold text-blue-600
    - Subtitle: text-sm text-gray-600
  * Card 2: bg-green-50 (same structure, text-green-600)
  * Card 3: bg-yellow-50 (same structure, text-yellow-600)
  * Card 4: bg-purple-50 (same structure, text-purple-600)
- Safety checks section (if available):
  * Title: font-semibold text-gray-700 mb-3
  * List: space-y-2
  * Each item: p-3 rounded-md, PASS: bg-green-50 border border-green-200, WARNING: bg-yellow-50 border border-yellow-200
  * Status badge: px-2 py-1 rounded text-xs font-semibold
- Summary section (if available):
  * Container: mt-6 p-4 bg-gray-50 rounded-lg
  * Title: font-semibold text-gray-700 mb-2
  * Text: text-gray-600

Engineering Full View Mode:
- Sections with spacing: space-y-6
- Each section:
  * Title: font-semibold text-gray-700 mb-3
  * Content: bg-gray-50 p-4 rounded-lg
  * JSON display: pre tag with text-sm overflow-x-auto
- Sections: Inputs, Outputs, Intermediate Values, Safety Checks, Technical Report
- Footer: text-sm text-gray-500 with calculation metadata
```

## Quick Start Guide

1. **Copy template** cho module bạn muốn thiết kế
2. **Paste vào Stitch** text input
3. **Chờ Stitch tạo UI**
4. **Chỉnh sửa** nếu cần
5. **Export code** ở format React + Tailwind CSS
6. **Tích hợp** vào dự án theo hướng dẫn trong `HUONG_DAN_STITCH_UI_DESIGN.md`

## Tips

- Bạn có thể **kết hợp** các template (ví dụ: dùng template Module 1 + thêm fields từ Module 2)
- **Thêm chi tiết** vào mô tả để có kết quả tốt hơn
- **Sử dụng thuật ngữ Tailwind CSS** trong mô tả
- **Test từng phần** sau khi Stitch tạo code

