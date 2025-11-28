# Chunk 06: Database & API Design Rules / Quy tắc Database & Thiết kế API

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_06`  
**Section:** III.6 Database Architecture Rules, III.7 API Design Rules  
**Word Count:** ~480 words  
**Retrieval Keywords:** database rules, PostgreSQL, schema standards, normalization, API design, endpoints, request/response model, versioning  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_05`, `03_ARCHITECTURE_RULES_chunk_07`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_6_7`

---

### III.6. Database architecture rules / Quy tắc cơ sở dữ liệu

**Schema Standards:**
- Normalization: 3NF+
- Enum tables for controlled vocabularies
- Use uuid as primary key
- Foreign keys mandatory (no orphan records)

**Naming Conventions:**
- snake_case for table/column
- Primary key: id
- Updated/created timestamps: created_at, updated_at

**Migrations:**
- Schema migrations must be versioned
- Downgrades supported
- Large migrations must be backward-compatible

**Performance:**
- Index columns used for filter/sort
- Use composite indexes when needed
- Query plans reviewed for long-running operations

**English (concise):**

PostgreSQL, 3NF+ normalization, UUID primary keys, versioned migrations. snake_case naming, mandatory foreign keys, indexed columns for performance.

**Hóa phàm:**

Database dùng PostgreSQL, thiết kế chuẩn hóa, dùng UUID làm khóa chính, và migration có version.

---

### III.7. API design rules / Quy tắc thiết kế API

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

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_05`  
**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_07` (Security, Deployment, Versioning, Do Not, Quality Gates)







