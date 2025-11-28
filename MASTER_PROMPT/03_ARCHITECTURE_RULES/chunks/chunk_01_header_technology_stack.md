# Chunk 01: Header & Technology Stack / Hướng dẫn AI & Công nghệ sử dụng

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_01`  
**Section:** III. Architecture Rules - Header & III.1 Technology Stack  
**Word Count:** ~480 words  
**Retrieval Keywords:** architecture rules, technology stack, Next.js, FastAPI, PostgreSQL, REST API, OpenAPI  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_02`, `03_ARCHITECTURE_RULES_chunk_03`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_1`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnIII_Architecture_rules.md` - phần định nghĩa quy tắc kiến trúc, công nghệ, và nguyên tắc triển khai cho hệ thống XLNC. File này hướng dẫn cách xây dựng hệ thống theo kiến trúc module, domain-driven.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Hiểu technology stack (Next.js, FastAPI, PostgreSQL)
2. Nắm kiến trúc module và data flow giữa 5 module
3. Tuân thủ quy tắc API design và versioning
4. Áp dụng quy tắc bảo mật và quality gates
5. Tham chiếu đúng khi thiết kế hoặc implement code

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Thiết kế kiến trúc hệ thống
- Implement backend API hoặc frontend components
- Thiết kế database schema
- Triển khai module chain orchestration

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng section (ví dụ: "Theo III.1.2, backend dùng FastAPI...")
- Tuân thủ quy tắc API design (III.7) và database schema (III.6)
- Đảm bảo tính nhất quán với các phần khác (I, II, IV, V, VI, VII, VIII)

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi áp dụng quy tắc kiến trúc:
1. **Bước 1:** Xác định component cần thiết kế (frontend, backend, database, API)
2. **Bước 2:** Kiểm tra quy tắc tương ứng (III.1-III.12)
3. **Bước 3:** Áp dụng nguyên tắc kiến trúc (III.2) - separation of concerns, modular design, stateless APIs
4. **Bước 4:** Đảm bảo tuân thủ quality gates (III.12)

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI tuân thủ technology stack đã định nghĩa (III.1)
- PHẢI áp dụng nguyên tắc kiến trúc (III.2) - không được vi phạm
- PHẢI tuân thủ quy tắc API design (III.7) và database schema (III.6)
- PHẢI kiểm tra "Do not" rules (III.11) trước khi implement
- PHẢI pass quality gates (III.12) trước khi deploy

**G. Examples / Ví dụ:**

**Ví dụ 1 - Thiết kế API endpoint:**
> "Theo III.7.1, endpoint cho Module 1 là `POST /api/v1/modules/pipe-sizing/calculate`. Response phải theo cấu trúc chuẩn (III.7.2) với trace_id và error model."

**Ví dụ 2 - Thiết kế database schema:**
> "Theo III.6, schema phải 3NF+, dùng UUID primary keys, và có bảng `calculations` để lưu kết quả tính toán với calculation_id, module, inputs, outputs, intermediates."

---

### III.1. Technology stack / Công nghệ sử dụng

**Vietnamese (chi tiết):**

**III.1.1. Frontend / Giao diện người dùng**

**Framework:** Next.js + React

**Principles / Nguyên tắc:**
- Component-driven design / Thiết kế dựa trên component có trạng thái rõ ràng
- Server Components where possible / Ưu tiên Server Components khi phù hợp
- Strict TypeScript / Dùng TypeScript chế độ strict
- TailwindCSS + UI components / Giao diện linh hoạt, dễ tái sử dụng

**UI Requirements for Water Treatment / Yêu cầu UI cho xử lý nước:**
- Form nhập liệu: Tất cả trường số phải có label đơn vị rõ ràng (ví dụ: "Lưu lượng Q (m³/ngày)")
- 2 chế độ hiển thị: "Simple view" (cho người dùng thông thường) và "Engineering full view" (cho kỹ sư - hiển thị đầy đủ intermediate values, formulas)
- Module selector: Cho phép chọn 1-5 module và cấu hình chuỗi module (1→2→3→4→5, 1→3→4, ...)

**English (concise):**

Next.js + React, component-driven, Server Components, strict TypeScript, TailwindCSS. UI must include unit labels, support simple/engineering views, allow module selection (1-5).

**Hóa phàm:**

Giao diện dùng Next.js + React, thiết kế theo component, có 2 chế độ hiển thị và cho phép chọn module.

---

**III.1.2. Backend (API Layer) / Lớp API**

**Primary Framework:** FastAPI (Python)

**Architecture style:** Modular, domain-driven, and calculation-engine isolated.

**Module Structure / Cấu trúc module:**

Mỗi module (1-5) được triển khai như một domain module độc lập:
- `modules/pipe_sizing/` (Module 1)
- `modules/spray_aeration/` (Module 2)  
- `modules/mixing_reaction/` (Module 3)
- `modules/settling_tank/` (Module 4)
- `modules/filtration/` (Module 5)

**Calculation Engine / Engine tính toán:**

- Tách biệt engine tính toán khỏi API layer
- Mỗi module có engine tính toán riêng, có thể gọi độc lập
- Hỗ trợ gọi tuần tự module (chuỗi 1→2→3→4→5) hoặc gọi riêng lẻ

**English (concise):**

FastAPI (Python), modular domain-driven architecture. Each water treatment module (1-5) is a separate domain module. Calculation engine is isolated and supports both sequential (chain) and standalone module calls.

**Hóa phàm:**

Backend dùng FastAPI, mỗi module xử lý nước là một module độc lập, có thể gọi riêng hoặc gọi theo chuỗi.

---

**III.1.3. Database / Cơ sở dữ liệu**

**Engine:** PostgreSQL

**Schema Standards / Tiêu chuẩn schema:**
- Normalization: 3NF+ (thiết kế dữ liệu chuẩn hóa)
- Strong typing, constraints, foreign keys (dùng FK, CHECK, NOT NULL, ENUM khi phù hợp)
- Use UUID primary keys (dùng UUID làm khóa chính)
- Versioned migration (có phiên bản migration rõ ràng)

**Database Schema for Water Treatment Modules / Schema cho module xử lý nước:**

**Tables cần thiết:**
- `projects` - Lưu thông tin dự án
- `calculations` - Lưu kết quả tính toán (có calculation_id, module, inputs, outputs, intermediates)
- `module_chains` - Lưu cấu hình chuỗi module (1→2→3→4→5, 1→3→4, ...)
- `calculation_logs` - Lưu log tính toán (audit trail)
- `formula_references` - Lưu tham chiếu công thức (Darcy-Weisbach, TCVN 33-2006, ...)

**English (concise):**

PostgreSQL, 3NF+ normalization, UUID primary keys, versioned migrations. Required tables: projects, calculations, module_chains, calculation_logs, formula_references.

**Hóa phàm:**

Database dùng PostgreSQL, thiết kế chuẩn hóa, lưu dự án, kết quả tính toán, chuỗi module, và log.

---

**III.1.4. API Rules / Quy tắc API**

**Protocol:** REST

**Documentation:** OpenAPI 3.x

**Versioning:** `/api/v1/...`

**Consistency / Tính nhất quán:**
- CamelCase for JSON (ví dụ: `flowRate`, `pipeDiameter`)
- snake_case for DB fields (ví dụ: `flow_rate`, `pipe_diameter`)

**Error model / Mô hình lỗi:**

Standard API error: 
```json
{
  "code": "ERR_INVALID_INPUT",
  "message": "Input missing: flowrate (Q)",
  "detail": "Module 1 requires Q (flowrate) with unit (m³/s, m³/h, or m³/ngày)",
  "trace_id": "uuid",
  "module": "pipe-sizing"
}
```

**English (concise):**

REST API, OpenAPI 3.x docs, versioning `/api/v1/...`, CamelCase JSON, snake_case DB, standard error model with trace_id.

**Hóa phàm:**

API dùng REST, có tài liệu OpenAPI, version rõ ràng, và lỗi có cấu trúc chuẩn.

---

**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_02` (Architectural Principles)







