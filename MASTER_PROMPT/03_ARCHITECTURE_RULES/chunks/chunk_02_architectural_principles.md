# Chunk 02: Architectural Principles / Nguyên tắc Kiến trúc

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_02`  
**Section:** III.2 Architectural Principles  
**Word Count:** ~500 words  
**Retrieval Keywords:** architectural principles, separation of concerns, modular design, stateless APIs, typed everything, explicit I/O contracts  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_01`, `03_ARCHITECTURE_RULES_chunk_03`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_2`

---

### III.2. Architectural principles / Nguyên tắc kiến trúc

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

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_01`  
**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_03` (Module Architecture & Data Flow)







