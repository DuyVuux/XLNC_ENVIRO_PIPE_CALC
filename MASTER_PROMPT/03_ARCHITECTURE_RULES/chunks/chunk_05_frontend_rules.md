# Chunk 05: Frontend Rules / Quy tắc Frontend

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_05`  
**Section:** III.5 Frontend Rules  
**Word Count:** ~420 words  
**Retrieval Keywords:** frontend rules, Next.js, React, Server Components, Client Components, UI/UX, module selector, simple view, engineering view  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_04`, `03_ARCHITECTURE_RULES_chunk_06`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_5`

---

### III.5. Frontend rules / Quy tắc frontend

**III.5.1. Rendering Strategy / Chiến lược rendering:**

- Prefer Server Components for heavy logic / Ưu tiên Server Components cho logic nặng
- Client Components only where interactivity needed / Chỉ dùng Client Components khi cần tương tác
- Data fetching via server actions or API routes / Lấy dữ liệu qua server actions hoặc API routes
- Global state via Zustand/Recoil only if needed / Dùng Zustand/Recoil cho state toàn cục chỉ khi cần

**III.5.2. UI/UX Rules for Water Treatment / Quy tắc UI/UX cho xử lý nước:**

**Yêu cầu bắt buộc:**

- **Strong focus on engineering clarity / Tập trung vào tính rõ ràng kỹ thuật:**
  - Tất cả trường số phải có label đơn vị rõ ràng (ví dụ: "Lưu lượng Q (m³/ngày)", "Nhiệt độ t (°C)")
  - Form nhập liệu phải hiển thị cả đơn vị mặc định và cho phép chuyển đổi đơn vị nếu cần

- **Validations occur in both FE + BE / Validation ở cả Frontend và Backend:**
  - Frontend: Kiểm tra sơ bộ (Q > 0, 0°C < t < 100°C) để cải thiện UX
  - Backend: Validation đầy đủ theo II.5 (Validation rules & input checks)

- **Mode: "Simple view" vs "Engineering full view" / Chế độ: Đơn giản vs Kỹ sư đầy đủ:**
  - **Simple view:** Chỉ hiển thị kết quả chính (D, v, H, Hyc) và giải thích "Hóa phàm"
  - **Engineering full view:** Hiển thị đầy đủ: inputs, outputs, intermediates, calculation trace, formulas, confidence score (theo II.3)

- **Module selector / Chọn module:**
  - Cho phép chọn 1-5 module (checkbox)
  - Cho phép cấu hình chuỗi module (1→2→3→4→5, 1→3→4, 1→2→5, ...)
  - Hiển thị sơ đồ dòng chảy dữ liệu giữa các module đã chọn (theo III.3.2)

**Ví dụ UI component:**
```typescript
// components/ModuleSelector.tsx
interface ModuleSelectorProps {
  selectedModules: string[];  // ['module_1', 'module_2', 'module_3']
  onModuleChange: (modules: string[]) => void;
  chainConfig: string[];  // ['module_1', 'module_2', 'module_3']
  onChainChange: (chain: string[]) => void;
}

// components/InputForm.tsx
interface InputFieldProps {
  label: string;  // "Lưu lượng Q"
  unit: string;   // "m³/ngày"
  value: number;
  onChange: (value: number) => void;
  validation: {
    min?: number;
    max?: number;
    required: boolean;
  };
  error?: string;
}
```

**English (concise):**

Rendering: Server Components for heavy logic, Client Components for interactivity. UI/UX: All numeric fields must include unit labels, validations in both FE+BE, two modes (simple/engineering view), module selector supports 1-5 modules and chain configuration (1→2→3→4→5, 1→3→4, etc.).

**Hóa phàm:**

Frontend có 2 chế độ hiển thị: đơn giản (cho người dùng) và kỹ sư (đầy đủ thông tin). Form luôn ghi rõ đơn vị, và cho phép chọn module linh hoạt.

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_04`  
**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_06` (Database & API Design Rules)







