# Chunk 07: Report Generation Workflow / Quy trình Xuất Báo cáo

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_07`  
**Section:** VI.7 Report Generation Workflow  
**Word Count:** ~600 words  
**Retrieval Keywords:** report generation, calculation report, summary report, technical report, report types, data collection, template selection, content generation, formatting, export, PDF, Excel, JSON, Markdown, HTML  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_06`, `06_WORKFLOW_AUTOMATION_chunk_08`, `05_FUNCTIONAL_REQUIREMENTS_chunk_08`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_7`

---

## VI.7 Report Generation Workflow — Quy trình xuất báo cáo

### VI.7.1 Overview

**EN:** This workflow generates comprehensive reports for single modules or module chains.

**VI:** Quy trình này tạo báo cáo toàn diện cho module đơn lẻ hoặc chuỗi module.

### VI.7.2 Report Types

#### VI.7.2.1 Calculation Report / Báo cáo tính toán

**EN:** Detailed calculation report with formulas, steps, and results.

**VI:** Báo cáo tính toán chi tiết với công thức, các bước và kết quả.

**Contents:**
1. **Header:**
   - Project name
   - Calculation date/time
   - Module(s) calculated
   - Chain configuration (if applicable)

2. **Input Summary:**
   - All inputs with units
   - Source of inputs (user/previous module)

3. **Calculation Steps:**
   - Step-by-step calculations
   - Formula citations
   - Intermediate results
   - Final results

4. **Results Summary:**
   - All outputs with units
   - Compliance status
   - Warnings and errors (if any)

5. **Hóa phàm:**
   - Plain language explanation
   - Key findings
   - Recommendations

**Format:** PDF, Markdown, HTML

---

#### VI.7.2.2 Summary Report / Báo cáo tóm tắt

**EN:** High-level summary report for management or quick reference.

**VI:** Báo cáo tóm tắt cấp cao cho quản lý hoặc tham khảo nhanh.

**Contents:**
1. Project overview
2. Selected module chain
3. Key results (flowrate, dimensions, efficiency)
4. Compliance status
5. Recommendations

**Format:** PDF, Excel

---

#### VI.7.2.3 Technical Report / Báo cáo kỹ thuật

**EN:** Detailed technical report for engineers.

**VI:** Báo cáo kỹ thuật chi tiết cho kỹ sư.

**Contents:**
1. Complete calculation details
2. Formula derivations
3. Standards references
4. Design drawings (if applicable)
5. Material specifications
6. Construction notes

**Format:** PDF, Markdown

---

### VI.7.3 Report Generation Steps

#### Step 1: Data Collection / Thu thập dữ liệu

**EN:** Collect all calculation results, inputs, and metadata.

**VI:** Thu thập tất cả kết quả tính toán, đầu vào và siêu dữ liệu.

**Actions:**
1. Collect module results
2. Collect input parameters
3. Collect calculation steps
4. Collect validation results
5. Collect data flow information (for chains)

---

#### Step 2: Template Selection / Chọn mẫu

**EN:** Select appropriate report template based on report type and user preference.

**VI:** Chọn mẫu báo cáo phù hợp dựa trên loại báo cáo và tùy chọn người dùng.

**Templates:**
- Calculation Report Template
- Summary Report Template
- Technical Report Template
- Custom Template (if user-defined)

---

#### Step 3: Content Generation / Tạo nội dung

**EN:** Generate report content using selected template.

**VI:** Tạo nội dung báo cáo sử dụng mẫu đã chọn.

**Actions:**
1. Fill template with collected data
2. Format numbers with appropriate precision
3. Add units to all values
4. Insert formulas with proper notation
5. Generate charts/graphs (if applicable)
6. Add "Hóa phàm" section

---

#### Step 4: Formatting / Định dạng

**EN:** Apply formatting according to report type and company standards.

**VI:** Áp dụng định dạng theo loại báo cáo và tiêu chuẩn công ty.

**Formatting:**
- Fonts and styles
- Page layout
- Headers and footers
- Table formatting
- Chart styling
- Company logo (if applicable)

---

#### Step 5: Export / Xuất

**EN:** Export report in requested format(s).

**VI:** Xuất báo cáo ở định dạng yêu cầu.

**Formats:**
- PDF (for printing and sharing)
- Excel (for data analysis)
- JSON (for programmatic access)
- Markdown (for documentation)
- HTML (for web display)

**Actions:**
1. Generate file in requested format
2. Apply file naming convention
3. Save to specified location
4. Return download link or file path

---

### VI.7.4 Report Examples

#### Example 1: Single Module Report (Module 1)

**Structure:**
```
# Calculation Report - Module 1: Pipe Hydraulics

## Project Information
- Project: Water Treatment Plant A
- Date: 2024-01-15
- Calculated by: XLNC System

## Input Parameters
- Flowrate (Q): 500 m³/ngày
- Temperature (t): 25°C
- Pipe Length (L): 100 m
- Static Head (Hc): 3 m
- Roughness (ε): 0.0001 m
- Local Loss Coefficient (β): 0.5
- Material: Steel

## Calculation Steps
1. Convert flowrate: Q = 500 m³/ngày = 0.005787 m³/s
2. Calculate velocity: v = 4Q/(πD²) = 1.84 m/s
3. Calculate Reynolds: Re = vD/ν = 115,000
4. Calculate friction factor: λ = 0.025 (Colebrook-White)
5. Calculate headloss: H₁ = 2.45 m
6. Calculate required head: Hyc = 5.45 m

## Results
- Velocity (v): 1.84 m/s ✓ (within TCVN 33-2006 range)
- Diameter (D): 63 mm
- Headloss (H₁): 2.45 m
- Required Head (Hyc): 5.45 m

## Compliance
- ✓ Complies with TCVN 33-2006
- ✓ All parameters within acceptable ranges

## Hóa phàm
Đường ống có đường kính 63mm, vận tốc dòng chảy 1.84 m/s, phù hợp với tiêu chuẩn TCVN 33-2006. Tổn thất áp lực là 2.45m, cột áp yêu cầu là 5.45m.
```

---

#### Example 2: Chain Report (1→2→3→4→5)

**Structure:**
```
# Chain Calculation Report - Full Treatment Chain

## Project Information
- Project: Large Water Treatment Plant
- Date: 2024-01-15
- Chain: 1 → 2 → 3 → 4 → 5

## Chain Summary
- Total Flowrate: 5000 m³/ngày
- Total Headloss: 12.5 m
- Total Volume: 850 m³
- Total Area: 320 m²
- Overall Efficiency: 96%

## Module Results
### Module 1: Pipe Hydraulics
[...]

### Module 2: Rainfall Aeration
[...]

### Module 3: Rapid Mixing
[...]

### Module 4: Sedimentation
[...]

### Module 5: Filtration
[...]

## Data Flow
Module 1 → Module 2:
  Q: 5000 m³/ngày → 208.33 m³/h
  v: 2.1 m/s
  D: 0.2 m

Module 2 → Module 3:
  Q: 208.33 m³/h
  C_thực: 7.2 mg/l → C_ox: 7.2 mg/l
  [...]

## Compliance
- ✓ All modules comply with TCVN 33-2006
- ✓ All modules comply with TCVN 7222:2002
- ⚠ Warning: Module 2 efficiency slightly below optimal

## Recommendations
1. Consider increasing aeration efficiency in Module 2
2. Monitor Fe²⁺ removal in Module 3
3. Regular backwash schedule for Module 5
```

---

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_06`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_08` (Summary, Diagrams, Examples & Conclusion)

