# Chunk 01: Header & Quick Reference Guides / Tiêu đề & Hướng dẫn tra cứu nhanh

**Chunk ID:** `10_APPENDIX_chunk_01`  
**Section:** X.0 Header, X.1 Quick Reference Guides - X.1.1 to X.1.3  
**Word Count:** ~1000 words  
**Retrieval Keywords:** quick reference, module I/O, input output, unit conversion, module chain, lookup table, reference guide  
**Related Chunks:** `10_APPENDIX_chunk_02`, `10_APPENDIX_chunk_05`  
**Canonical Summary Reference:** `10_APPENDIX_summary_section_0_1`

---

## X.0 Header / Tiêu đề

**EN:** This section provides quick reference materials, lookup tables, code templates, API endpoint references, error codes, troubleshooting guides, and compliance checklists for the XLNC Automated Water Treatment Calculation System.

**VI:** Phần này cung cấp tài liệu tra cứu nhanh, bảng tra cứu, mẫu code, tham chiếu API endpoints, mã lỗi, hướng dẫn xử lý sự cố, và checklist tuân thủ cho Hệ thống Tính toán Tự động Xử lý Nước XLNC.

**Priority:** Medium (Reference material)

---

## X.1 Quick Reference Guides / Hướng dẫn tra cứu nhanh

### X.1.1 Module Input/Output Quick Reference / Tra cứu nhanh Input/Output Module

**EN:** Quick lookup table for all module inputs and outputs.

**VI:** Bảng tra cứu nhanh cho tất cả input và output của module.

**Module 1 - Pipeline Hydraulics:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Pipe diameter | D | m | > 0 | Yes |
| Pipe length | L | m | > 0 | Yes |
| Pipe roughness | ε | m | 0.0000015 - 0.003 | Yes |
| Temperature | t | °C | 0 - 100 | Yes |
| Local loss coefficient | β | - | ≥ 0 | No |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Velocity | v | m/s | Flow velocity |
| Reynolds number | Re | - | Flow regime indicator |
| Friction factor | λ | - | Darcy-Weisbach friction factor |
| Head loss | H | m | Total head loss |
| Required head | Hyc | m | Pump required head |

**Module 2 - Rainfall Aeration:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Temperature | t | °C | 0 - 100 | Yes |
| Fe²⁺ concentration | C_Fe | mg/l | ≥ 0 | Yes |
| H₂S concentration | C_H2S | mg/l | ≥ 0 | Yes |
| Initial dissolved oxygen | C_ban_đầu | mg/l | ≥ 0 | Yes |
| Aeration efficiency | η | - | 0.7 - 0.9 | No (default: 0.8) |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Saturated oxygen | C_ox | mg/l | Maximum dissolved oxygen |
| Total oxygen required | C_ht | mg/l | Total oxygen needed |
| Actual dissolved oxygen | C_thực | mg/l | Dissolved oxygen after aeration |
| Spray intensity | C_phun | m/h | Required spray intensity |
| Aeration tank area | F | m² | Required aeration area |

**Module 3 - Rapid Mixing/Reaction:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Mixing time | t | s, phút, h | 10s - 60 phút | Yes |
| Reaction type | - | - | Fast/Slow/Reaction | Yes |
| Initial concentration | C₀ | mg/l | ≥ 0 | Yes |
| Rate constant | k | l/mg·s | > 0 | No (default based on type) |

| Output | Symbol | Unit | Description |
|--------|------|------|-------------|
| Mixing tank volume | V | m³ | Required tank volume |
| Reaction rate | r | mg/l·s | Reaction rate |
| Final concentration | C | mg/l | Concentration after reaction |
| Reaction efficiency | η | % | Reaction efficiency |

**Module 4 - Sedimentation Tank:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Settling velocity | U_o | m/s | 0.0001 - 0.001 | Yes |
| Settling time | t_lắng | h, phút | 0.5 - 3 h | Yes |
| Tank type | - | - | Horizontal/Vertical/Inclined | Yes |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Surface loading rate | SLR | m³/m²·h | Surface loading rate |
| Settling area | F | m² | Required settling area |
| Tank volume | V | m³ | Required tank volume |
| Settling efficiency | η | % | Settling efficiency |

**Module 5 - Filtration:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Filtration rate | v | m/h | 6 - 12 | Yes |
| Filter type | - | - | Gravity/Pressure | Yes |
| Backwash intensity | q | l/s·m² | 12 - 15 | No (default: 12) |
| Backwash duration | t_rửa | phút | 5 - 15 | No (default: 10) |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Filter area | F₁ | m² | Required filter area |
| Backwash flowrate | Q_rửa | m³/h | Backwash flowrate |
| Backwash volume | V_rửa | m³ | Backwash water volume |
| Head loss | H | m | Head loss through filter |

**Priority:** High

---

### X.1.2 Unit Conversion Quick Reference / Tra cứu nhanh chuyển đổi đơn vị

**EN:** Quick lookup table for common unit conversions.

**VI:** Bảng tra cứu nhanh cho các chuyển đổi đơn vị thường dùng.

**Flowrate Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m³/s | m³/h | 3600 |
| m³/s | m³/ngày | 86400 |
| m³/h | m³/ngày | 24 |
| m³/ngày | m³/s | 0.000011574 |
| m³/ngày | m³/h | 0.041667 |
| l/s | m³/s | 0.001 |
| l/s | m³/h | 3.6 |
| l/s | m³/ngày | 86.4 |

**Length Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m | mm | 1000 |
| m | cm | 100 |
| m | km | 0.001 |
| mm | m | 0.001 |
| cm | m | 0.01 |

**Time Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| s | phút | 0.016667 |
| s | h | 0.000278 |
| phút | s | 60 |
| phút | h | 0.016667 |
| h | s | 3600 |
| h | phút | 60 |

**Pressure/Head Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m | kPa | 9.81 |
| m | bar | 0.0981 |
| m | atm | 0.0968 |
| kPa | m | 0.102 |
| bar | m | 10.2 |

**Priority:** Medium

---

### X.1.3 Module Chain Quick Reference / Tra cứu nhanh chuỗi Module

**EN:** Quick lookup for valid module chains and their purposes.

**VI:** Tra cứu nhanh các chuỗi module hợp lệ và mục đích của chúng.

**Valid Module Chains:**

| Chain | Modules | Purpose | Use Case |
|-------|---------|---------|----------|
| 1→2→3→4→5 | Pipeline → Aeration → Mixing → Settling → Filtration | Complete treatment | Full water treatment plant |
| 1→3→4→5 | Pipeline → Mixing → Settling → Filtration | Treatment without aeration | Water with low Fe²⁺/H₂S |
| 1→2→4→5 | Pipeline → Aeration → Settling → Filtration | Treatment without mixing | Simple treatment |
| 1→4→5 | Pipeline → Settling → Filtration | Basic treatment | Pre-treated water |
| 1→5 | Pipeline → Filtration | Minimal treatment | High-quality source water |
| 2→3→4→5 | Aeration → Mixing → Settling → Filtration | Treatment without pipeline | Existing pipeline system |
| 3→4→5 | Mixing → Settling → Filtration | Chemical treatment | Chemical treatment only |
| 4→5 | Settling → Filtration | Physical treatment | Physical treatment only |

**Chain Selection Logic:**

- **If Fe²⁺ > 0.3 mg/l OR H₂S > 0.05 mg/l:** Include Module 2 (Aeration)
- **If chemical treatment needed:** Include Module 3 (Mixing)
- **If suspended solids > 10 mg/l:** Include Module 4 (Settling)
- **Always include Module 5 (Filtration)** for final treatment

**Priority:** High

---

**Previous Chunk:** None (First chunk)  
**Next Chunk:** `10_APPENDIX_chunk_02` (API Endpoint Reference)







