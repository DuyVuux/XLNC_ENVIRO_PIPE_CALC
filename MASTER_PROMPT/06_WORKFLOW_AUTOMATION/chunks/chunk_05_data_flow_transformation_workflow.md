# Chunk 05: Data Flow & Transformation Workflow / Quy trình Dòng chảy & Chuyển đổi Dữ liệu

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_05`  
**Section:** VI.5 Data Flow & Transformation Workflow  
**Word Count:** ~500 words  
**Retrieval Keywords:** data flow, data transformation, unit conversion, automatic data passing, user input override, missing data handling, data mapping, Module 1→2, Module 2→3, Module 3→4, Module 4→5  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_03`, `06_WORKFLOW_AUTOMATION_chunk_04`, `06_WORKFLOW_AUTOMATION_chunk_06`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_5`

---

## VI.5 Data Flow & Transformation Workflow — Quy trình dòng chảy và chuyển đổi dữ liệu

### VI.5.1 Overview

**EN:** This workflow manages data flow between modules, including unit conversion, data mapping, and transformation.

**VI:** Quy trình này quản lý dòng chảy dữ liệu giữa các module, bao gồm chuyển đổi đơn vị, ánh xạ dữ liệu và biến đổi.

### VI.5.2 Data Flow Rules

#### Rule 1: Automatic Data Passing / Truyền dữ liệu tự động

**EN:** Outputs from module i automatically become inputs to module i+1 if they match required inputs.

**VI:** Đầu ra từ module i tự động trở thành đầu vào của module i+1 nếu chúng khớp với đầu vào yêu cầu.

**Mapping (from Báo_cáo_tổng_hợp Section 3.1):**

**Module 1 → Module 2:**
- `Q` (any unit) → `Q` (convert to m³/h for Module 2)
- `v` → (used internally for spray calculation)
- `D` → (used for layout)

**Module 2 → Module 3:**
- `Q` (m³/h) → `Q` (m³/h)
- `C_thực` (mg/l) → `C_ox` (mg/l) for reaction rate
- `C_phun` (m/h) → (used for mixing efficiency)

**Module 3 → Module 4:**
- `Q` (m³/h) → `Q` (m³/h)
- Tank dimensions → (for layout planning)

**Module 4 → Module 5:**
- `Q` (m³/h) → `Q` (m³/h)
- Tank dimensions → (for layout planning)

---

#### Rule 2: User Input Override / Ghi đè đầu vào người dùng

**EN:** User can provide direct inputs to any module, which override automatic data passing.

**VI:** Người dùng có thể cung cấp đầu vào trực tiếp cho bất kỳ module nào, ghi đè việc truyền dữ liệu tự động.

**Example:**
- Chain: `1 → 2 → 3`
- Module 1 output: `Q = 60 m³/h`
- User provides for Module 3: `Q = 70 m³/h` (override)
- Result: Module 3 uses `Q = 70 m³/h` (user input takes precedence)

---

#### Rule 3: Unit Conversion / Chuyển đổi đơn vị

**EN:** System automatically converts units when passing data between modules.

**VI:** Hệ thống tự động chuyển đổi đơn vị khi truyền dữ liệu giữa các module.

**Conversion Rules:**
- Flowrate: Always convert to module's preferred unit
  - Module 1: m³/s (internal), but accepts m³/ngày, m³/h
  - Module 2: m³/h
  - Module 3: m³/h
  - Module 4: m³/h
  - Module 5: m³/h
- Length: Always convert to m (meters)
- Time: Convert to module's preferred unit (s, min, h)
- Concentration: Always mg/l

**Example:**
- Module 1 output: `Q = 0.005787 m³/s`
- Module 2 input: `Q = 20.833 m³/h` (converted automatically)

---

#### Rule 4: Missing Data Handling / Xử lý dữ liệu thiếu

**EN:** If required data is missing from previous module, system prompts user or uses defaults with warning.

**VI:** Nếu dữ liệu bắt buộc thiếu từ module trước, hệ thống nhắc người dùng hoặc sử dụng giá trị mặc định kèm cảnh báo.

**Actions:**
1. Check if required input is available from previous module
2. If missing:
   - Check if user provided it directly
   - If not, check if default value exists (from PhầnIV_Domain_Knowledge_Base.md)
   - If default exists, use it with warning
   - If no default, prompt user for input
3. Log all assumptions and defaults used

**Example:**
- Module 2 → Module 3: `C_ox` required
- Module 2 output: `C_thực = 6.616 mg/l`
- System maps: `C_ox = C_thực = 6.616 mg/l`
- If Module 2 not in chain: Prompt user for `C_ox` or use default `C_ox = 8.0 mg/l` (with warning)

---

### VI.5.3 Data Transformation Examples

**Example 1: Module 1 → Module 2**
```
Module 1 Output:
  Q = 0.005787 m³/s
  v = 1.84 m/s
  D = 0.063 m

Transformation for Module 2:
  Q = 0.005787 m³/s × 3600 = 20.833 m³/h ✓
  (v and D used internally, not passed directly)
```

**Example 2: Module 2 → Module 3**
```
Module 2 Output:
  Q = 60 m³/h
  C_thực = 6.616 mg/l
  C_phun = 6 m/h

Transformation for Module 3:
  Q = 60 m³/h ✓ (no conversion needed)
  C_ox = C_thực = 6.616 mg/l ✓ (mapped)
  (C_phun used for mixing efficiency calculation)
```

---

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_04`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_06` (Validation & Error Handling Workflow)

