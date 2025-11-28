# III. ARCHITECTURE RULES / QUY TẮC KIẾN TRÚC

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
2. **Bước 2:** Kiểm tra quy tắc tương ứng (III.1-III.13)
3. **Bước 3:** Áp dụng nguyên tắc kiến trúc (III.2) - separation of concerns, modular design, stateless APIs
4. **Bước 4:** Đảm bảo tuân thủ quality gates (III.13)

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI tuân thủ technology stack đã định nghĩa (III.1)
- PHẢI áp dụng nguyên tắc kiến trúc (III.2) - không được vi phạm
- PHẢI tuân thủ quy tắc API design (III.7) và database schema (III.6)
- PHẢI kiểm tra "Do not" rules (III.12) trước khi implement
- PHẢI pass quality gates (III.13) trước khi deploy

**G. Examples / Ví dụ:**

**Ví dụ 1 - Thiết kế API endpoint:**
> "Theo III.7.1, endpoint cho Module 1 là `POST /api/v1/modules/pipe-sizing/calculate`. Response phải theo cấu trúc chuẩn (III.7.2) với trace_id và error model."

**Ví dụ 2 - Thiết kế database schema:**
> "Theo III.6, schema phải 3NF+, dùng UUID primary keys, và có bảng `calculations` để lưu kết quả tính toán với calculation_id, module, inputs, outputs, intermediates."

---

*Ghi chú: Phần này định nghĩa các ràng buộc kiến trúc, công nghệ sử dụng, quy tắc tương tác, tiêu chuẩn coding, quy ước API, quy tắc schema database, và nguyên tắc triển khai cho toàn bộ nền tảng tính toán thiết kế hệ thống xử lý nước. Phần này bổ sung và chi tiết hóa nội dung tổng quan trong I.5 về kiến trúc module.*

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
Frontend

Framework: Next.js + React
VI: Next.js + React làm framework giao diện.

Principles:

Component-driven design
→ Thiết kế dựa trên component có trạng thái rõ ràng

Server Components where possible
→ Ưu tiên Server Components khi phù hợp

Strict TypeScript
→ Dùng TypeScript chế độ strict

TailwindCSS + UI components
→ Giao diện linh hoạt, dễ tái sử dụng

Backend (API Layer)

Primary Framework: FastAPI
VI: Backend chính dùng FastAPI

Additional Calculation Layer: FastAPI
VI: Lớp tính toán dùng FastAPI theo phong cách “module hóa, ngắn gọn, dễ đọc – dễ debug”.

Architecture style: Modular, domain-driven, and calculation-engine isolated.
VI: Kiến trúc module, domain-driven, tách biệt engine tính toán.

Database

Engine: PostgreSQL

Normalized schema (3NF or higher)
→ Thiết kế dữ liệu chuẩn hóa

Strong typing, constraints, foreign keys
→ Dùng FK, CHECK, NOT NULL, ENUM khi phù hợp

Use UUID primary keys
→ Dùng UUID làm khóa chính

Versioned migration (Prisma / Migration tool)
→ Có phiên bản migration rõ ràng

API Rules

Protocol: REST

Documentation: OpenAPI 3.x

Versioning: /api/v1/...

Consistency:

CamelCase for JSON

snake_case for DB fields

Error model:

Standard API error: { code, message, detail, trace_id }

### III.2. Architectural principles / Nguyên tắc kiến trúc

**Vietnamese (chi tiết):**

**III.2.1. Separation of Concerns (Phân tách rõ ràng):**

UI, API, Calculation Engine, và DB phải tách biệt logic và vật lý.

**Các lớp tách biệt:**
- **Frontend Layer:** Next.js + React (hiển thị, nhập liệu, UI/UX)
- **API Layer:** FastAPI (nhận request, validate input, routing)
- **Calculation Engine Layer:** FastAPI modules (tính toán theo công thức, không có business logic)
- **Database Layer:** PostgreSQL (lưu trữ dữ liệu, audit logs)

**English (concise):**

UI, API, Calculation Engine, and DB must be isolated logically and physically. Layers: Frontend (Next.js), API (FastAPI routing), Calculation Engine (FastAPI modules), Database (PostgreSQL).

**Hóa phàm:**

Hệ thống được chia thành 4 lớp tách biệt: giao diện, API, engine tính toán, và database.

---

**III.2.2. Modular design (Module hóa):**

Mỗi module xử lý nước (Module 1-5: đường ống, giàn phun mưa, ngăn trộn phản ứng, bể lắng, bể lọc) phải là một khối tính toán độc lập hoàn chỉnh (theo I.5).

**Đặc điểm module:**
- **Tính độc lập:** Mỗi module có thể hoạt động độc lập với dữ liệu đầu vào từ người dùng, không có sự phụ thuộc cứng giữa các module
- **Tính kết nối:** Các module có thể kết nối với nhau thông qua việc truyền dữ liệu Output → Input tự động
- **Tính linh hoạt:** Người dùng có thể chọn sử dụng một hoặc nhiều module tùy theo yêu cầu dự án, thứ tự sử dụng module có thể thay đổi

**Ví dụ cấu trúc module:**
```
modules/
  module_1_pipe_sizing/
    schemas.py        # Input/Output models (Pydantic)
    logic.py          # Core formulas (Darcy-Weisbach, TCVN 33-2006)
    service.py        # Orchestrator
    router.py         # API endpoint (/api/v1/modules/pipe-sizing/calculate)
    tests.py          # Unit tests
  module_2_spray_aeration/
    ...
  module_3_mixing_reaction/
    ...
  module_4_settling_tank/
    ...
  module_5_filtration/
    ...
```

**English (concise):**

Each water treatment module (1-5: pipes, aeration, mixing, settling, filtration) must be fully independent computing module per I.5. Modules can connect via Output → Input data flow. Users can select 1-5 modules flexibly.

**Hóa phàm:**

Mỗi module xử lý nước là một khối tính toán độc lập, có thể dùng riêng hoặc kết nối với module khác.

---

**III.2.3. Stateless APIs / API không trạng thái:**

All REST endpoints are stateless; session logic handled by auth layer.

**Vietnamese (chi tiết):**

- API REST không được có trạng thái (stateless)
- Mỗi request phải chứa đầy đủ thông tin cần thiết
- Session logic (authentication, authorization) được xử lý bởi auth layer (JWT tokens)
- Calculation state không được lưu trên server, phải được truyền qua request hoặc lưu trong database

**Ví dụ:**
- ✅ Đúng: `POST /api/v1/modules/pipe-sizing/calculate` với full input trong request body
- ❌ Sai: Gọi `POST /api/v1/modules/pipe-sizing/start` rồi `POST /api/v1/modules/pipe-sizing/continue` (stateful)

**English (concise):**

All REST endpoints are stateless. Each request must contain all required information. Session logic handled by auth layer (JWT). Calculation state must be in request body or database, not server memory.

**Hóa phàm:**

API không lưu trạng thái, mỗi request phải đầy đủ thông tin.

---

**III.2.4. Typed Everything (Mọi thứ có type):**

**Vietnamese (chi tiết):**

- **TypeScript strict mode** cho Frontend
- **Pydantic v2 models** cho FastAPI (backend)
- Tất cả dữ liệu đều phải có type rõ ràng, không được dùng `any` hoặc `dict` không rõ ràng

**Ví dụ Pydantic model cho Module 1:**
```python
from pydantic import BaseModel, Field
from typing import Literal

class PipeSizingInput(BaseModel):
    flowrate: float = Field(..., gt=0, description="Lưu lượng Q", unit="m3/s")
    temperature: float = Field(..., ge=0, le=100, description="Nhiệt độ nước", unit="°C")
    pipe_length: float = Field(..., gt=0, description="Chiều dài ống", unit="m")
    elevation_diff: float = Field(..., description="Chênh chiều cao bơm", unit="m")
    roughness: float = Field(..., gt=0, description="Độ nhám tuyệt đối", unit="m")
    material: Literal["steel", "PVC", "concrete"] = Field(..., description="Vật liệu ống")
    
class PipeSizingOutput(BaseModel):
    diameter_suction: float = Field(..., description="Đường kính ống hút", unit="m")
    diameter_discharge: float = Field(..., description="Đường kính ống đẩy", unit="m")
    velocity_suction: float = Field(..., description="Vận tốc ống hút", unit="m/s")
    velocity_discharge: float = Field(..., description="Vận tốc ống đẩy", unit="m/s")
    reynolds: float = Field(..., description="Hệ số Reynolds")
    head_loss: float = Field(..., description="Tổng tổn thất áp lực", unit="m")
    required_head: float = Field(..., description="Cột áp yêu cầu", unit="m")
```

**English (concise):**

TypeScript strict mode for Frontend, Pydantic v2 models for FastAPI. All data must have explicit types. No `any` or unclear `dict` types.

**Hóa phàm:**

Mọi dữ liệu phải có type rõ ràng: TypeScript cho frontend, Pydantic cho backend.

---

**III.2.5. Explicit Input/Output Contracts / Hợp đồng Input/Output rõ ràng:**

**Vietnamese (chi tiết):**

API không được suy đoán dữ liệu thiếu (theo II.2.2). Mọi trường phải chỉ định rõ:
- **type:** Kiểu dữ liệu (float, int, string, enum)
- **unit:** Đơn vị (m³/s, m, m/s, °C, mg/l) - bắt buộc
- **range:** Khoảng giá trị hợp lệ (ví dụ: Q > 0, 0°C < t < 100°C)
- **default:** Giá trị mặc định (nếu được phép, phải ghi rõ và có impact assessment)

**Ví dụ hợp đồng rõ ràng:**
```python
class Module1Input(BaseModel):
    flowrate: float = Field(
        ...,  # Required, không có default
        gt=0,  # range: phải > 0
        description="Lưu lượng nước",
        unit="m3/s"  # Đơn vị bắt buộc
    )
    temperature: float = Field(
        default=20.0,  # Default nếu thiếu
        ge=0, le=100,  # range: 0-100°C
        description="Nhiệt độ nước [Mặc định: 20°C, ảnh hưởng: C_ox có thể sai ±5%]",
        unit="°C"
    )
```

**English (concise):**

API must not infer missing data (per II.2.2). All fields must specify: type, unit (mandatory), range, default (if allowed, with impact assessment).

**Hóa phàm:**

API phải rõ ràng: không được đoán, phải ghi rõ kiểu, đơn vị, khoảng giá trị, và mặc định (nếu có).

### III.3. Module architecture & data flow / Kiến trúc module & dòng chảy dữ liệu

**Vietnamese (chi tiết):**

**III.3.1. Kiến trúc tổng thể module:**

Hệ thống được thiết kế theo mô hình module hóa, trong đó mỗi module là một đơn vị tính toán độc lập nhưng có thể kết nối với các module khác thông qua việc truyền dữ liệu Input-Output tự động (theo I.5, báo cáo tổng hợp Phần 2).

**Sơ đồ kiến trúc module:**
```
┌─────────────┐
│  Module 1   │ → Tính toán đường ống
│ Đường ống   │
└──────┬──────┘
       │ Output: Q, v, D, Re, ε, H1, Hyc
       ↓
┌─────────────┐
│  Module 2   │ → Giàn phun mưa
│ Phun mưa    │
└──────┬──────┘
       │ Output: Q, C_phun, C_thực, C_ht
       ↓
┌─────────────┐
│  Module 3   │ → Ngăn trộn, phản ứng
│ Trộn phản ứng│
└──────┬──────┘
       │ Output: Q, t, kích thước (L×W×H)
       ↓
┌─────────────┐
│  Module 4   │ → Bể lắng
│ Bể lắng     │
└──────┬──────┘
       │ Output: Q, kích thước (D×R×H), chất lượng nước
       ↓
┌─────────────┐
│  Module 5   │ → Bể lọc
│ Bể lọc      │
└─────────────┘
```

**English (concise):**

Modular architecture where each module (1-5) is an independent computing unit that can connect via Output → Input data flow. Supports sequential chains (1→2→3→4→5) or standalone module calls.

**Hóa phàm:**

Mỗi module là một khối tính toán độc lập, có thể kết nối với nhau qua dòng chảy dữ liệu Output → Input.

---

**III.3.2. Dòng chảy dữ liệu giữa các module (Data Flow):**

**Vietnamese (chi tiết):**

**Module 1 → Module 2:**

**Module 1 cung cấp cho Module 2:**
- **Lưu lượng nước (Q)**: m³/s, m³/h, m³/phút, m³/ngđ
- **Vận tốc dòng chảy (v)**: m/s
- **Đường kính ống (D)**: m
- **Hệ số Reynolds (Re)**: không thứ nguyên
- **Độ nhám ống (ε)**: m

**Module 2 sử dụng để tính:**
- Cường độ phun mưa (C_phun) = Q / A
- Lượng oxy hòa tan trong nước (C_ox)
- Các phản ứng oxy hóa

**Module 2 → Module 3:**

**Module 2 cung cấp cho Module 3:**
- **Lưu lượng nước (Q)**: m³/s, m³/h
- **Cường độ phun mưa (C_phun)**: m/h
- **Lượng oxy hòa tan thực tế (C_thực)**: mg/l
- **Tổng lượng oxy cần thiết (C_ht)**: mg/l

**Module 3 sử dụng để tính:**
- Thể tích ngăn trộn (V) = Q × t
- Thời gian trộn (t)
- Kích thước ngăn trộn (L × W × H)
- Tốc độ phản ứng hóa học (r_Fe, r_H₂S)
- Nồng độ sau phản ứng

**Module 3 → Module 4:**

**Module 3 cung cấp cho Module 4:**
- **Lưu lượng nước (Q)**: m³/h
- **Thời gian trộn (t)**: h, phút
- **Kích thước ngăn trộn**: L × W × H (m)

**Module 4 sử dụng để tính:**
- Công suất nước vào bể lắng (Q₁) = α × Q
- Diện tích mặt bằng cần thiết (F)
- Kích thước bể lắng (D × R × H)
- Thể tích bể lắng (V)
- Tốc độ lắng bề mặt (v)
- Thời gian lắng (t_lắng)
- Hiệu suất lắng (η)

**Module 4 → Module 5:**

**Module 4 cung cấp cho Module 5:**
- **Lưu lượng nước (Q)**: m³/h
- **Kích thước bể lắng**: D × R × H (m)
- **Chất lượng nước sau lắng**: Độ đục, hàm lượng cặn lơ lửng

**Module 5 sử dụng để tính:**
- Diện tích bể lọc (f₁) = Q / v
- Đường kính bể lọc (D)
- Diện tích lọc thực tế (F₁)
- Vận tốc lọc thực tế (v)
- Các chiều cao trong bể lọc
- Tổn thất áp lực (H)
- Cường độ rửa lọc (q)
- Lưu lượng nước rửa lọc (Q_rửa)

**Lưu ý quan trọng:** Mỗi module có thể nhận dữ liệu đầu vào trực tiếp từ người dùng, không nhất thiết phải phụ thuộc vào module trước. Người dùng có thể can thiệp để điều chỉnh dữ liệu truyền giữa các module (theo báo cáo tổng hợp Phần 3.3).

**English (concise):**

Data flow between modules: M1→M2 (Q, v, D, Re, ε), M2→M3 (Q, C_phun, C_thực, C_ht), M3→M4 (Q, t, dimensions), M4→M5 (Q, dimensions, water quality). Each module can also receive direct user input, not necessarily dependent on previous module.

**Hóa phàm:**

Dữ liệu tự động truyền từ module trước sang module sau, nhưng mỗi module cũng có thể nhận input trực tiếp từ người dùng.

---

**III.3.3. Implementation pattern cho module chains / Mẫu triển khai cho chuỗi module:**

**Vietnamese (chi tiết):**

**Pattern 1: Sequential Chain / Chuỗi tuần tự (1→2→3→4→5):**

```python
# Ví dụ: Tính toán chuỗi đầy đủ
result_m1 = module_1_calculate(input_m1)  # Module 1: Đường ống
result_m2 = module_2_calculate(
    input_m2_user,  # Input từ người dùng
    **result_m1.outputs  # Output từ Module 1 (Q, v, D, Re, ε)
)
result_m3 = module_3_calculate(
    input_m3_user,
    **result_m2.outputs  # Output từ Module 2 (Q, C_phun, C_thực, C_ht)
)
# ... tiếp tục cho Module 4, 5
```

**Pattern 2: Standalone Module / Module độc lập:**

```python
# Ví dụ: Chỉ tính Module 3 với input từ người dùng
result_m3 = module_3_calculate(input_m3_from_user)  # Không cần Module 1, 2
```

**Pattern 3: Partial Chain / Chuỗi một phần (1→3→4):**

```python
result_m1 = module_1_calculate(input_m1)
# Bỏ qua Module 2 (không cần phun mưa)
result_m3 = module_3_calculate(
    input_m3_user,
    Q=result_m1.outputs['Q']  # Chỉ lấy Q từ Module 1
)
result_m4 = module_4_calculate(
    input_m4_user,
    **result_m3.outputs
)
```

**English (concise):**

Implementation patterns: Sequential chain (1→2→3→4→5), standalone module (direct user input), partial chain (1→3→4, skipping modules). Each module can receive both user input and previous module outputs.

**Hóa phàm:**

Có 3 cách gọi module: theo chuỗi đầy đủ, gọi riêng lẻ, hoặc chuỗi một phần (bỏ qua một số module).

---

### III.4. Backend rules / Quy tắc backend

**Vietnamese (chi tiết):**

**III.4.1. FastAPI Calculation Engine Structure / Cấu trúc FastAPI Calculation Engine:**

Pythonic, clean, maximum readability

Use Pydantic v2 models for all I/O

Each module has:

schemas.py (input/output models)

logic.py (core formulas)

service.py (orchestrator)

router.py (API endpoint)

No business logic inside router

Short functions, no hidden side effects

Each calculation returns:

{
  "inputs": {},
  "outputs": {},
  "intermediates": {},
  "formula_refs": [],
  "timestamp": "...",
  "version": "..."
}


VI:

Code Python phải ngắn, rõ, chia module đúng chuẩn

Không được để logic trong router

Hàm tính toán phải dễ đọc, dễ kiểm tra

**English (concise):**

Backend uses FastAPI only (no NestJS mentioned). Pythonic code structure: schemas.py (Pydantic models), logic.py (formulas), service.py (orchestrator), router.py (endpoints). Returns structured JSON per II.3.

**Hóa phàm:**

Backend chỉ dùng FastAPI, không có NestJS. Code Python chia module rõ ràng, kết quả trả về theo cấu trúc chuẩn.

---

**III.4.2. Module Chain Orchestration / Điều phối chuỗi module:**

**Vietnamese (chi tiết):**

Hệ thống phải hỗ trợ điều phối chuỗi module (theo I.5, III.3.3):

**Service layer cho module chains:**

```python
# services/module_chain_service.py
class ModuleChainService:
    """
    Điều phối chuỗi module: 1→2→3→4→5, 1→3→4, 1→2→5, ...
    """
    
    def calculate_chain(
        self, 
        chain_config: List[str],  # ['module_1', 'module_2', 'module_3', ...]
        user_inputs: Dict[str, Dict],  # {module_1: {...}, module_2: {...}}
        previous_outputs: Dict[str, Dict] = None  # Output từ module trước
    ) -> Dict[str, Any]:
        """
        Tính toán chuỗi module theo thứ tự chain_config
        
        Args:
            chain_config: Danh sách module theo thứ tự ['module_1', 'module_3', 'module_4']
            user_inputs: Input từ người dùng cho từng module
            previous_outputs: Output từ module trước (tự động truyền)
        
        Returns:
            Kết quả tổng hợp từ tất cả module trong chuỗi
        """
        results = {}
        accumulated_outputs = previous_outputs or {}
        
        for module_name in chain_config:
            # Merge user input với output từ module trước
            module_input = {
                **user_inputs.get(module_name, {}),
                **accumulated_outputs  # Output từ module trước
            }
            
            # Gọi module
            result = self._call_module(module_name, module_input)
            results[module_name] = result
            
            # Cập nhật accumulated_outputs cho module tiếp theo
            accumulated_outputs = result['outputs']
        
        return {
            "chain": chain_config,
            "module_results": results,
            "final_outputs": accumulated_outputs,
            "calculation_id": generate_calculation_id(),
            "timestamp": get_timestamp()
        }
```

**English (concise):**

Module chain orchestration service supports sequential module chains (1→2→3→4→5, 1→3→4, etc.). Automatically passes Output → Input between modules. Each module can also receive direct user input.

**Hóa phàm:**

Service điều phối chuỗi module tự động truyền dữ liệu từ module trước sang module sau, nhưng vẫn cho phép người dùng nhập trực tiếp vào bất kỳ module nào.

---

### III.5. Frontend rules / Quy tắc frontend

**Vietnamese (chi tiết):**

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

### III.6. Database architecture rules / Quy tắc cơ sở dữ liệu
Schema Standards

Normalization: 3NF+

Enum tables for controlled vocabularies

Use uuid as primary key

Foreign keys mandatory (no orphan records)

Naming Conventions

snake_case for table/column

Primary key: id

Updated/created timestamps:

created_at

updated_at

Migrations

Schema migrations must be versioned

Downgrades supported

Large migrations must be backward-compatible

Performance

Index columns used for filter/sort

Use composite indexes when needed

Query plans reviewed for long-running operations

### III.7. API design rules / Quy tắc thiết kế API

**Vietnamese (chi tiết):**

**III.7.1. Endpoint Structure / Cấu trúc endpoint:**

**Module calculation endpoints:**
- `POST /api/v1/modules/pipe-sizing/calculate` (Module 1)
- `POST /api/v1/modules/spray-aeration/calculate` (Module 2)
- `POST /api/v1/modules/mixing-reaction/calculate` (Module 3)
- `POST /api/v1/modules/settling-tank/calculate` (Module 4)
- `POST /api/v1/modules/filtration/calculate` (Module 5)
- `POST /api/v1/modules/chain/calculate` (Module chain: 1→2→3→4→5, etc.)

**Query endpoints:**
- `GET /api/v1/modules/:module/inputs` (Lấy danh sách input fields cho module)
- `GET /api/v1/modules/:module/formulas` (Lấy danh sách công thức được sử dụng)
- `GET /api/v1/calculations/:calculation_id` (Lấy kết quả tính toán theo ID)

**III.7.2. Request/Response Model / Mô hình Request/Response:**

**Standard response structure (theo II.3):**
```json
{
  "data": {
    "calculation_id": "20251120-M1-0001",
    "module": "pipe-sizing",
    "inputs": {...},
    "outputs": {...},
    "intermediates": {...},
    "formula_refs": [...],
    "confidence": 0.92
  },
  "error": null,
  "meta": {
    "trace_id": "uuid",
    "version": "v1.0",
    "timestamp": "2025-11-20T10:30:00Z",
    "prompt_version": "MASTER_PROMPT.md v1.0"
  }
}
```

**Error model standard:**
```json
{
  "code": "ERR_INVALID_INPUT",
  "message": "Input missing: flowrate (Q)",
  "detail": "Module 1 requires Q (flowrate) with unit (m³/s, m³/h, or m³/ngày)",
  "trace_id": "uuid",
  "module": "pipe-sizing",
  "suggested_defaults": {
    "temperature": 20.0,
    "impact": "C_ox có thể sai ±5%, confidence giảm xuống 0.70"
  }
}
```

**III.7.3. Versioning / Phiên bản:**

- `/api/v1/...` required (bắt buộc)
- Major breaking changes → bump version (`/api/v2/...`)
- Old versions deprecated but maintained for 6–12 months

**English (concise):**

API endpoints: `POST /api/v1/modules/{module}/calculate` for each module (1-5), `POST /api/v1/modules/chain/calculate` for module chains. Standard response structure per II.3. Error model includes code, message, detail, trace_id, module, suggested_defaults. Versioning `/api/v1/...` required.

**Hóa phàm:**

API có endpoint riêng cho từng module và endpoint cho chuỗi module. Kết quả trả về theo cấu trúc chuẩn ở phần II.3.

3.7 Security Rules — Quy tắc bảo mật
Authentication

JWT-based auth

Access tokens + refresh tokens

HTTPS mandatory

Input Sanitization

Validate and sanitize all external input

Reject invalid units

Strict type-check on every layer

OWASP Compliance

Protect against SQL injection, XSS, CSRF

Use prepared statements

Limit request size for calculations

3.8 Logging, Monitoring, and Observability
Logging

Structured logs (JSON logs)

Trace ID must propagate from frontend → backend → engine

Monitoring

Basic metrics

API latency

Error rates

Calculation duration

Worker queue length

Observability

Distributed tracing with OpenTelemetry

Log all calculation exceptions with context

3.9 Deployment Rules — Quy tắc triển khai
Environments

dev → staging → production

No direct deploy to production

Automated CI/CD pipelines

Containerization

Docker for all services

Each module builds into a separate image

Scaling

Horizontal scaling with load balancer

FastAPI engine scales as independent microservice

3.10 Versioning & Backward Compatibility

Semantic Versioning: MAJOR.MINOR.PATCH

Breaking changes → new API version

Old versions deprecated but maintained for 6–12 months

Maintain changelog in /docs/CHANGELOG.md

3.11 “Do Not” Rules — Những điều cấm tuyệt đối

Do NOT mix business logic inside UI or controllers

Do NOT return inconsistent JSON structures

Do NOT perform heavy calculations in frontend

Do NOT bypass validation (FE or BE)

Do NOT create tables without FK or constraints

Do NOT deploy without tests & logs enabled

3.12 Engineering Quality Gates — Kiểm soát chất lượng

A pull request must pass:

Unit tests

Integration tests

Lint + formatter

Security checks (SAST)

API contract validation against OpenAPI

Database migration validation

---

**KẾT THÚC PHẦN III. ARCHITECTURE RULES**

*Các phần tiếp theo (IV, V, VI, ...) sẽ được triển khai sau để mô tả chi tiết về:*
- *Module specifications chi tiết (Phần IV)*
- *Các chuỗi module khả thi (Phần V)*
- *Logic lựa chọn module theo quy mô (Phần VI)*
- *Và các nội dung kỹ thuật khác*


