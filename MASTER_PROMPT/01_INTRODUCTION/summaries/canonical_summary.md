# Canonical Summary: 01_INTRODUCTION

**Section ID:** `01_INTRODUCTION`  
**Last Updated:** 2024  
**Total Chunks:** 7  
**Purpose:** Provides high-level overview of XLNC system, project goals, scope, stakeholders, and AI persona requirements.

---

## 1. AI Instructions & Project Overview

### 1.1. Prompt Header Structure (A-G)
- **A. Role Setup:** AI Assistant reading Introduction section for XLNC system context
- **B. Task Description:** Must understand 5 modules, TCVN standards, persona (20y SE + 15y water expert)
- **C. Input Format:** Read as part of MASTER_PROMPT.md, read FIRST before other sections
- **D. Output Format:** Must cite sections correctly (e.g., "Theo I.5..."), use correct terminology
- **E. Reasoning Instructions:** Use Chain of Thought (4 steps: context → scope → constraints → reference)
- **F. Constraints:** No fabrication, must follow persona, must maintain consistency
- **G. Examples:** 3 examples provided for goals, scope, and cross-references

### 1.2. Project Name (I.1)
- **Name:** Duke-XLNC-Web (example - replace with official name)
- **Description:** Web system automating calculation and design of water treatment plant components (pipes, spray beds, mixing, settling, filtration) for both drinking water and industrial wastewater
- **Hóa phàm:** "App tính toán thiết kế bể, đường ống, lọc giúp kỹ sư tiết kiệm thời gian."

### 1.3. Business Domain (I.2)
- **Domain:** Construction & Water Treatment (XLNC) - municipal drinking water, industrial wastewater, environmental works
- **Target Users:** Environmental engineers, design engineers, contractors, consultants, water analysis labs, project owners
- **Applications:**
  - Drinking water treatment plants
  - Industrial/municipal wastewater systems
  - Large construction water systems
  - R&D and optimization studies
- **Value:** Optimize pipe design, select equipment, ensure efficiency, reduce manual calculation errors, save time

---

## 2. Goals (I.3) - SMART Objectives

| Goal Category | Description |
|--------------|-------------|
| **Automation** | Complete calculation of all modules (pipes, spray, mixing, settling, filtration) in one run. Modules are independent but can connect via I/O data flow |
| **Multi-configuration** | Support flexible process chains (1-5 modules) with multiple feasible sequences. Save/reuse configuration templates |
| **Standardization** | Export technical reports (PDF/Word) with company template, charts, data tables, flow diagrams. Include all calculation steps and formulas |
| **Accuracy & Validation** | Comply with TCVN 33-2006 and common calculation standards (Darcy-Weisbach, Hazen-Williams). All formulas verified. System validates outputs against acceptance thresholds |
| **Multi-unit Support** | Support multiple units (m³/s, m³/h, m³/day, m, mm, m/s, m/h, mg/l, Pa, m water column) with automatic conversion |
| **UX** | Intuitive input interface with guidance, expert/quick modes. Web interface for input and visual results |
| **Error Reduction** | Automate calculations to reduce manual errors, save time, support equipment selection (pumps, pipes, fittings) |

**Hóa phàm:** Tính chính xác, dễ dùng, xuất được báo cáo, áp dụng cho nhiều loại dự án.

---

## 3. Success Criteria (I.4)

| Criterion | Target |
|-----------|--------|
| **Technical Accuracy** | 95% of internal test cases within acceptable error threshold vs. manual/Excel calculations (±5% pipe diameter, ±10% pressure loss in complex cases) |
| **Product** | User can create and export complete PDF report from interface in < 2 minutes for standard project |
| **Usability** | At least 80% of test users rate interface as "easy to use" in first UX survey |
| **Performance** | System processes standard project (5 modules) with server response time < 5s per module calculation (average server config) |
| **Security & Compliance** | Project data stored securely with backup; comply with internal/customer data regulations |

**Hóa phàm:** Tính đúng, xuất báo cáo nhanh, người dùng thích, dữ liệu an toàn.

---

## 4. Scope & Modules (I.5)

### 4.1. Five Independent Modules

1. **Module 1 - Pipe Calculation:** Flow rate, velocity, pipe diameter, pressure loss, required head
2. **Module 2 - Spray Bed (Aeration):** Dissolved oxygen, spray intensity, oxidation reactions
3. **Module 3 - Mixing/Reaction Chamber:** Mixing volume, mixing time, chamber size, reaction rate
4. **Module 4 - Settling Tank:** Area, dimensions, volume, settling parameters
5. **Module 5 - Filtration:** Filter area, tank size, pressure loss, backwash intensity, auxiliary systems

### 4.2. Out of Scope
- Detailed concrete structural design
- Structural calculations
- Advanced CFD analysis
- Disinfection module, clean water storage (may expand later)

**Hóa phàm:** Chỉ tính toán quá trình xử lý nước, không làm bản vẽ kết cấu chi tiết.

---

## 5. Stakeholders (I.6)

- Project Owner (Client)
- Design Engineers (End users)
- Construction Contractors
- QC/QA Department
- System Administrators / DevOps

**Hóa phàm:** Chủ đầu tư, kỹ sư, nhà thầu, và IT.

---

## 6. Assumptions & Constraints (I.7)

### 6.1. Input Assumptions
- Users provide standard parameters with clear units (SI/Imperial)
- Input water sample: Fe²⁺, H₂S, TSS, BOD, DO, turbidity if needed
- Operating parameters: water temperature, environmental conditions
- Target treatment requirements: desired output water quality

### 6.2. Technical Standards
- **TCVN 33-2006** (Water Supply Design Standard) - MANDATORY
- All calculation formulas based on verified technical standards
- **Standard Velocities:**
  - Suction pipe (Vh): 1.2 m/s (TCVN 33-2006)
  - Discharge pipe (Vd): 2.4 m/s (TCVN 33-2006)
  - Recommended filtration velocity: 6-10 m/h
  - Recommended backwash intensity: 12-15 l/s·m²

### 6.3. Technical Constraints
- Role-based access control (RBAC)
- Server resource limits for large simulations
- No hard dependencies between modules - each module operates independently

### 6.4. Scope Constraints
- Only water treatment process calculation, not detailed concrete structural design
- No structural calculations or advanced CFD - unless expansion requested
- Does not include disinfection module, clean water storage (may expand later)

### 6.5. Language
- Primary interface: Vietnamese, with English option
- Support multiple measurement units with automatic conversion

**Hóa phàm:** Giả sử người dùng biết nhập đúng các con số và chọn đơn vị.

---

## 7. Deliverables (I.8)

- MASTER_PROMPT.md (complete AI/automation prompt guide)
- Functional Requirements Document (SRS) - summary of Introduction + module specs
- Technical report templates (PDF/Word)
- Test case calculation set (Excel) for comparison

**Hóa phàm:** Prompt chuẩn, tài liệu chức năng, mẫu báo cáo và file kiểm thử.

---

## 8. Input/Output Summary (I.9)

### 8.1. Inputs
- **CSV/Excel files (optional):** Hydraulic parameters (Q, H, roughness), water quality (TSS, BOD, DO, Fe²⁺, H₂S), initial dimensions, operating conditions, target treatment requirements
- **Direct web interface input:** Required parameters for each module (see module specifications for details)
- **Module chaining:** Each module can receive input directly from user or from previous module (Output → Input)

### 8.2. Outputs
- Detailed calculation tables with formulas used and formula sources
- Final design results: Pipe size, tank area, filtration velocity, pressure loss, required head...
- Validity assessment and warnings if results outside recommended thresholds
- Visualization charts
- PDF/Word reports per company template
- Export data files (CSV/JSON) for individual modules or entire module chain

**Note:** Data flow details between modules described in later sections.

**Hóa phàm:** Nhập số liệu, app trả về bảng + file báo cáo.

---

## 9. Example Usage Scenarios (I.10)

### 9.1. Scenario 1 - Small Scale: Pipes + Filtration
- **Input:** Q = 50 m³/day, basic treatment requirement
- **Recommended Chain:** Module 1 → 5
- **Output:** Pipe diameter, pressure loss, filter tank size, filtration velocity, connection diagram

### 9.2. Scenario 2 - Medium Scale: Settling Tank for Industrial WWTP
- **Input:** 500 m³/day industrial wastewater with Fe²⁺ and H₂S
- **Recommended Chain:** Module 1 → 3 → 4 → 5
- **Output:** Mixing chamber size, settling tank area, settling efficiency, filter tank size

### 9.3. Scenario 3 - Large Scale: Complete Treatment Process
- **Input:** 5000 m³/day drinking water treatment plant
- **Recommended Chain:** Module 1 → 2 → 3 → 4 → 5 (all modules)
- **Output:** Complete calculations from pipes to filtration

**Note:** Details on feasible module chains and scale-based selection logic described in later sections.

**Hóa phàm:** Các ví dụ cụ thể để người dùng thấy app làm gì.

---

## 10. Persona & Tone (I.11)

### 10.1. Persona
- **Role:** "20-year Software Engineer + 15-year Water Treatment Expert"
- **Details:** See Part II - Roles & Behaviors for specific roles, responsibilities, and behaviors

### 10.2. Tone
- Precise, technical, understandable for engineers
- Include plain-language explanations ("hóa phàm") for non-experts

### 10.3. Language
- **Primary:** Vietnamese
- **Secondary:** English terms/phrases interspersed for language learning support
- **Output:** Bilingual (EN + VI) for all technical reports and simple explanations

**Hóa phàm:** Nói chuyện với kỹ sư: vừa chuyên sâu vừa dễ hiểu.

---

## 11. Prompts/Examples (I.12)

### 11.1. System Prompt Template
```
"Bạn là một chuyên gia với 20 năm kinh nghiệm Software Engineering và 15 năm trong lĩnh vực Xây Lắp - xử lý nước. Khi tôi cung cấp dữ liệu đầu vào, hãy: (1) Xác định module cần chạy; (2) Áp dụng công thức tính thích hợp; (3) Hiện bảng bước tính; (4) Kiểm tra tính hợp lệ đầu vào; (5) Trả về kết quả cuối cùng và chú thích 'hóa phàm'. Trả lời chính bằng tiếng Việt, chèn các thuật ngữ tiếng Anh khi phù hợp."
```

### 11.2. Example User Prompt
```
"Chạy module: Pipes + Settling. Input: Q=500 m3/day; H=5m; Roughness=0.013; Target TSS removal 80%. Xuất báo cáo PDF."
```

**Hóa phàm:** Đoạn mẫu để paste vào hệ thống: nói rõ vai trò AI, thứ tự công việc và ngôn ngữ trả lời.

---

## Cross-References

- **Part II (Roles & Behaviors):** Detailed AI behavior rules, mandatory 3-part response structure
- **Part III (Architecture Rules):** Module architecture, data flow, API design
- **Part IV (Domain Knowledge Base):** Engineering formulas, TCVN standards, reference tables
- **Part V (Functional Requirements):** Detailed module specifications, user stories
- **Part VI (Workflow):** Module chain calculation, data flow, validation workflows
- **Part VII (Testing & QA):** Test cases, validation thresholds
- **Part VIII (Logging & Monitoring):** Observability framework

---

## Critical Rules Summary

1. **MUST read this section FIRST** before other sections for context
2. **MUST cite sections correctly** (e.g., "Theo I.5...")
3. **MUST follow persona:** 20y SE + 15y water treatment expert
4. **MUST use bilingual output:** Vietnamese primary, English secondary
5. **MUST NOT fabricate** project information - only use information in file
6. **MUST maintain consistency** with other parts (II-VIII)
7. **MUST reference TCVN 33-2006** for all design calculations
8. **MUST understand 5 modules** are independent but can chain via I/O

---

**End of Canonical Summary: 01_INTRODUCTION**








