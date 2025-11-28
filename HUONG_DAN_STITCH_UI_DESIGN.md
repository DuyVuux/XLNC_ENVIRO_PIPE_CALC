# Hướng dẫn sử dụng Stitch để thiết kế UI mới cho các Modules

## Tổng quan về Frontend hiện tại

### Cấu trúc dự án
- **Framework**: Next.js 16.0.3 với React 19.2.0
- **Styling**: Tailwind CSS v4
- **TypeScript**: v5
- **Cấu trúc thư mục**:
  ```
  frontend/
  ├── app/
  │   ├── modules/
  │   │   ├── pipe-sizing/page.tsx
  │   │   ├── spray-aeration/page.tsx
  │   │   ├── mixing-reaction/page.tsx
  │   │   ├── settling-tank/page.tsx
  │   │   └── filtration/page.tsx
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components/
  │   ├── InputField.tsx
  │   ├── SelectField.tsx
  │   └── ResultsDisplay.tsx
  ├── lib/
  │   └── api.ts
  └── types/
      └── api.ts
  ```

### Đặc điểm UI hiện tại
- Layout 2 cột: Form nhập liệu bên trái, Kết quả bên phải
- Components tái sử dụng: `InputField`, `SelectField`, `ResultsDisplay`
- Responsive: Grid layout với breakpoint `lg:grid-cols-2`
- Màu sắc: Blue primary, Gray background, White cards
- Typography: Inter font từ Google Fonts

---

## Phần A: Hướng dẫn sử dụng Stitch

### Bước 1: Truy cập và đăng nhập Stitch

1. **Truy cập**: Mở trình duyệt và vào [https://stitch.withgoogle.com/](https://stitch.withgoogle.com/)
2. **Đăng nhập**: Sử dụng tài khoản Google của bạn
3. **Làm quen giao diện**: Stitch có 2 chế độ chính:
   - **Text-to-UI**: Nhập mô tả văn bản để tạo UI
   - **Sketch-to-UI**: Tải lên bản phác thảo để chuyển đổi thành code

### Bước 2: Chuẩn bị mô tả cho từng Module

#### Template mô tả cho Module tính toán

**Cấu trúc mô tả nên bao gồm:**
1. **Loại trang**: Form tính toán, Dashboard, v.v.
2. **Layout**: Bố cục (2 cột, 1 cột, grid, v.v.)
3. **Components**: Các thành phần cần có
4. **Styling**: Màu sắc, spacing, typography
5. **Responsive**: Yêu cầu responsive
6. **Tương tác**: Buttons, loading states, error handling

---

## Mô tả mẫu cho từng Module

### Module 1: Tính toán Đường ống (Pipe Sizing)

```
Tạo một trang tính toán kỹ thuật với layout 2 cột responsive. 

Cột trái (Form nhập liệu):
- Header: "Thông số Đầu vào" với font semibold, text-xl
- Form có background trắng, padding 6, border radius lg, shadow-lg
- Các trường input:
  * Lưu lượng Q: number input với unit selector (m³/s, m³/h, m³/ngày)
  * Chiều dài ống L: number input với unit "m"
  * Nhiệt độ nước t: number input với unit "°C"
  * Chênh lệch chiều cao Hc: number input với unit "m"
  * Độ nhám ống ε: number input với unit "m"
  * Hệ số tổn thất cục bộ β: number input
  * Vật liệu ống: dropdown với options (PVC, HDPE, Thép, Gang)
- Mỗi input có label với font-medium, text-sm, text-gray-700
- Input có border gray-300, rounded-md, focus ring blue-500
- Button "Tính toán" màu blue-600, full width, disabled state màu gray-400
- Error message: red background với border red-200

Cột phải (Kết quả):
- Card trắng với shadow-lg, padding 6
- Header: "Kết quả Tính toán" với 2 toggle buttons (Simple View / Engineering Full View)
- Simple View: Grid 2 cột với các metric cards (blue, green, yellow, purple backgrounds)
- Engineering View: JSON display với syntax highlighting
- Placeholder khi chưa có kết quả: text-gray-500, centered

Styling:
- Background page: gray-50
- Container: max-width 6xl, mx-auto, padding 4
- Gap giữa 2 cột: 8
- Responsive: Stack vertically trên mobile (< lg breakpoint)
- Typography: Inter font, Vietnamese language support
- Colors: Blue primary (#2563eb), Gray neutrals, White cards
```

### Module 2: Giàn phun mưa (Spray Aeration)

```
Tạo trang tính toán tương tự Module 1 nhưng với các trường input sau:

Form inputs:
- Lưu lượng Q với unit selector
- Nhiệt độ nước t (°C)
- Nồng độ Fe²⁺ ban đầu (mg/L)
- Nồng độ H₂S ban đầu (mg/L)
- Diện tích giàn phun A (m²)
- Hiệu suất phun mưa η (0.7-0.9)

Layout và styling giống Module 1, nhưng thay đổi:
- Title: "Module 2: Giàn phun mưa / Spray Aeration"
- Description: "Tính toán oxy bão hòa, lượng oxy cần thiết và hiệu suất phun mưa"
```

### Module 3: Ngăn trộn Phản ứng (Mixing Reaction)

```
Tạo trang tính toán với các trường đặc biệt:

Form inputs:
- Lưu lượng Q với unit selector
- Thời gian trộn t với unit selector (Giây, Phút, Giờ)
- Nồng độ Fe²⁺ ban đầu (mg/L)
- Nồng độ H₂S ban đầu (mg/L)
- Hằng số tốc độ Fe²⁺ k_Fe (L/mg·s)
- Hằng số tốc độ H₂S k_H2S (L/mg·s)
- Nồng độ oxy O₂ (mg/L)
- Tỷ lệ kích thước: text input (ví dụ: "L:W:H = 2:1:1")

Layout giống Module 1, title và description phù hợp với module này.
```

### Module 4: Bể lắng (Settling Tank)

```
Tạo trang tính toán với các trường:

Form inputs:
- Lưu lượng Q với unit selector
- Tốc độ lắng U_o (m/s)
- Góc nghiêng α (°)
- Chiều cao thực tế H₀ (m)
- Chiều rộng ống lắng W (m)
- Hệ số an toàn α

Layout và styling giống Module 1.
```

### Module 5: Bể lọc (Filtration)

```
Tạo trang tính toán với layout đặc biệt:

Form inputs:
- Lưu lượng Q với unit selector
- Vận tốc lọc v (m/h)
- Cường độ rửa lọc q (l/s·m²)
- Thời gian rửa t_rửa (phút)
- Số ngăn bể n
- Grid 2 cột cho các chiều cao:
  * h₁ (Bộ phận thu đáy) - h₂ (Bản lọc)
  * h₃ (Lớp đệm) - h₄ (Vật liệu lọc)
  * h₅ (Lớp nước) - h₆ (Bản đỉnh)
  * h₈ (Bảo vệ)

Layout giống Module 1 nhưng có grid 2 cột cho phần chiều cao.
```

---

## Bước 3: Sử dụng Stitch để tạo UI

### 3.1. Tạo UI từ Text Description

1. **Chọn chế độ Text-to-UI**
2. **Nhập mô tả**: Copy một trong các mô tả mẫu ở trên
3. **Chỉnh sửa**: Stitch sẽ tạo UI, bạn có thể:
   - Thay đổi màu sắc
   - Điều chỉnh spacing
   - Thêm/xóa components
   - Thay đổi layout

### 3.2. Tạo UI từ Sketch (Tùy chọn)

1. **Vẽ phác thảo** trên giấy hoặc Figma
2. **Chụp ảnh hoặc export** file ảnh
3. **Upload lên Stitch**
4. **Stitch sẽ tự động** chuyển đổi thành code

### 3.3. Xuất Code từ Stitch

Sau khi hoàn thiện thiết kế:

1. **Chọn format xuất**:
   - **React + Tailwind CSS** (khuyến nghị cho dự án này)
   - **HTML/CSS** (nếu cần)
   - **Figma** (nếu muốn chỉnh sửa thêm)

2. **Copy code** và chuẩn bị tích hợp vào dự án

---

## Bước 4: Tích hợp Code từ Stitch vào Dự án

### 4.1. Cấu trúc File khi Tích hợp

```
frontend/
├── app/
│   └── modules/
│       ├── pipe-sizing/
│       │   ├── page.tsx          # Component chính (từ Stitch)
│       │   └── components/       # Components riêng của module (nếu có)
│       │       ├── FormSection.tsx
│       │       └── ResultsSection.tsx
│       └── ...
├── components/
│   ├── InputField.tsx            # Giữ nguyên hoặc cải thiện
│   ├── SelectField.tsx            # Giữ nguyên hoặc cải thiện
│   └── ResultsDisplay.tsx        # Giữ nguyên hoặc cải thiện
└── ...
```

### 4.2. Quy trình Tích hợp

#### Bước 1: Backup code hiện tại
```bash
cd frontend
git checkout -b backup-before-stitch
git add .
git commit -m "Backup before Stitch UI integration"
```

#### Bước 2: Tạo file mới từ Stitch
1. Copy code từ Stitch
2. Tạo file mới: `frontend/app/modules/pipe-sizing/page-stitch.tsx`
3. Paste code vào

#### Bước 3: Chỉnh sửa và Tích hợp Logic

**Các điểm cần chỉnh sửa:**

1. **Import API functions**:
```typescript
import { calculatePipeSizing } from "@/lib/api";
import { PipeSizingInput, PipeSizingOutput } from "@/types/api";
```

2. **Thêm State Management**:
```typescript
const [formData, setFormData] = useState<PipeSizingInput>({...});
const [result, setResult] = useState<PipeSizingOutput | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

3. **Thêm Handler Functions**:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  try {
    const response = await calculatePipeSizing(formData);
    setResult(response);
  } catch (err) {
    setError(err instanceof Error ? err.message : "Có lỗi xảy ra");
  } finally {
    setLoading(false);
  }
};

const handleInputChange = (field: keyof PipeSizingInput, value: string | number) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};
```

4. **Kết nối Form với Handlers**:
- Thêm `onSubmit={handleSubmit}` vào `<form>`
- Thêm `onChange` handlers cho các inputs
- Kết nối `loading` state với button disabled
- Hiển thị `error` message nếu có

5. **Kết nối ResultsDisplay**:
```typescript
{result && <ResultsDisplay result={result} />}
```

6. **Thêm "use client" directive** (nếu chưa có):
```typescript
"use client";
```

#### Bước 4: Kiểm tra và Test

1. **Chạy dev server**:
```bash
cd frontend
npm run dev
```

2. **Kiểm tra từng module**:
   - Form inputs hoạt động đúng
   - API calls thành công
   - Results hiển thị đúng
   - Error handling hoạt động
   - Responsive trên mobile

3. **Fix các lỗi**:
   - Import paths
   - Type mismatches
   - Missing props
   - Styling conflicts

#### Bước 5: Refactor và Tối ưu

1. **Tách Components** (nếu code quá dài):
   - Tách Form section thành component riêng
   - Tách Results section thành component riêng

2. **Tối ưu Performance**:
   - Memoize expensive calculations
   - Lazy load components nếu cần

3. **Đảm bảo Consistency**:
   - Kiểm tra tất cả modules có cùng style
   - Đảm bảo responsive hoạt động tốt

---

## Bước 5: Best Practices khi dùng Stitch

### 5.1. Mô tả Chi tiết và Cụ thể

**❌ Tránh mô tả mơ hồ:**
```
"Tạo một form đẹp"
```

**✅ Mô tả cụ thể:**
```
"Tạo form với background trắng, padding 24px, border radius 8px, 
shadow medium. Inputs có border gray-300, focus ring blue-500. 
Button màu blue-600, full width, disabled state gray-400."
```

### 5.2. Sử dụng Thuật ngữ Tailwind CSS

Stitch hiểu Tailwind CSS classes, nên bạn có thể:
- Dùng class names: `bg-blue-600`, `rounded-lg`, `shadow-lg`
- Dùng spacing scale: `p-6`, `gap-8`, `mb-4`
- Dùng responsive: `lg:grid-cols-2`, `md:flex-row`

### 5.3. Iterative Design

1. **Bắt đầu đơn giản**: Tạo layout cơ bản trước
2. **Thêm chi tiết**: Sau đó thêm styling, interactions
3. **Refine**: Chỉnh sửa từng phần cho đến khi hài lòng

### 5.4. Kiểm tra Code Output

Sau khi Stitch tạo code:
1. **Đọc code** để hiểu cấu trúc
2. **Kiểm tra** có đúng framework (React/Next.js)
3. **Kiểm tra** có đúng styling (Tailwind CSS)
4. **Kiểm tra** responsive classes

---

## Checklist Tích hợp Stitch UI

### Trước khi bắt đầu
- [ ] Đã đọc và hiểu cấu trúc frontend hiện tại
- [ ] Đã backup code hiện tại
- [ ] Đã chuẩn bị mô tả cho module cần thiết kế

### Khi sử dụng Stitch
- [ ] Đã đăng nhập vào Stitch
- [ ] Đã nhập mô tả chi tiết và cụ thể
- [ ] Đã chỉnh sửa UI trên Stitch cho đến khi hài lòng
- [ ] Đã xuất code ở format React + Tailwind CSS

### Khi tích hợp vào dự án
- [ ] Đã copy code vào file mới
- [ ] Đã thêm "use client" directive
- [ ] Đã import đúng API functions và types
- [ ] Đã thêm state management (formData, result, loading, error)
- [ ] Đã thêm handler functions (handleSubmit, handleInputChange)
- [ ] Đã kết nối form với handlers
- [ ] Đã kết nối ResultsDisplay component
- [ ] Đã test form submission
- [ ] Đã test API calls
- [ ] Đã test error handling
- [ ] Đã test responsive trên mobile
- [ ] Đã kiểm tra không có lỗi TypeScript
- [ ] Đã kiểm tra không có lỗi console

### Sau khi hoàn thành
- [ ] Đã test tất cả modules
- [ ] Đã đảm bảo consistency giữa các modules
- [ ] Đã commit code với message rõ ràng
- [ ] Đã tạo PR (nếu làm việc nhóm)

---

## Troubleshooting

### Vấn đề: Code từ Stitch không hoạt động

**Nguyên nhân có thể:**
1. Missing "use client" directive
2. Import paths sai
3. Type mismatches
4. Missing dependencies

**Giải pháp:**
1. Thêm `"use client"` ở đầu file
2. Kiểm tra lại import paths (dùng `@/` alias)
3. Kiểm tra types trong `types/api.ts`
4. Chạy `npm install` để đảm bảo dependencies

### Vấn đề: Styling không đúng

**Nguyên nhân:**
1. Tailwind classes không được compile
2. CSS conflicts

**Giải pháp:**
1. Kiểm tra `tailwind.config.js` hoặc `postcss.config.mjs`
2. Restart dev server
3. Clear `.next` cache: `rm -rf .next`

### Vấn đề: API calls không hoạt động

**Nguyên nhân:**
1. API URL sai
2. CORS issues
3. Request format sai

**Giải pháp:**
1. Kiểm tra `NEXT_PUBLIC_API_URL` trong `.env`
2. Kiểm tra CORS settings ở backend
3. Kiểm tra request body format trong `lib/api.ts`

---

## Tài liệu Tham khảo

- **Stitch Official**: [https://stitch.withgoogle.com/](https://stitch.withgoogle.com/)
- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Docs**: [https://react.dev](https://react.dev)

---

## Kết luận

Stitch là công cụ mạnh mẽ để tạo UI nhanh chóng, nhưng cần:
1. **Mô tả chi tiết** để có kết quả tốt
2. **Kiểm tra và chỉnh sửa** code sau khi xuất
3. **Tích hợp đúng cách** với logic và API hiện có
4. **Test kỹ lưỡng** trước khi deploy

Chúc bạn thiết kế UI thành công với Stitch! 🎨

