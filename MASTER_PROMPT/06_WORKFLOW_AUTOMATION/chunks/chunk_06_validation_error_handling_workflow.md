# Chunk 06: Validation & Error Handling Workflow / Quy trình Xác thực & Xử lý Lỗi

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_06`  
**Section:** VI.6 Validation & Error Handling Workflow  
**Word Count:** ~700 words  
**Retrieval Keywords:** validation, error handling, input validation, calculation validation, result validation, standards compliance, error classification, error response structure, error recovery, fatal error, warning, info  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_05`, `06_WORKFLOW_AUTOMATION_chunk_07`, `05_FUNCTIONAL_REQUIREMENTS_chunk_06`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_6`

---

## VI.6 Validation & Error Handling Workflow — Quy trình xác thực và xử lý lỗi

### VI.6.1 Overview

**EN:** This workflow defines validation rules and error handling strategies for the entire system.

**VI:** Quy trình này định nghĩa các quy tắc xác thực và chiến lược xử lý lỗi cho toàn bộ hệ thống.

### VI.6.2 Input Validation

#### VI.6.2.1 Required Field Validation

**EN:** Check all required fields are present.

**VI:** Kiểm tra tất cả các trường bắt buộc đều có mặt.

**Rules:**
- Each module has required inputs (from PhầnV_Functional_Requirement.md)
- Missing required field → Error: "Field X is required for Module Y"

---

#### VI.6.2.2 Data Type Validation

**EN:** Check data types match expected types.

**VI:** Kiểm tra kiểu dữ liệu khớp với kiểu mong đợi.

**Rules:**
- Numbers must be numeric (not string)
- Enums must match allowed values
- Units must be valid unit strings

**Example:**
- Input: `Q = "500"` → Error: "Q must be a number, got string"
- Input: `material = "plastic"` (not in enum) → Error: "Invalid material. Allowed: ['steel', 'cast_iron', 'concrete', 'pvc']"

---

#### VI.6.2.3 Range Validation

**EN:** Check values are within acceptable ranges.

**VI:** Kiểm tra giá trị nằm trong phạm vi chấp nhận được.

**Reference Ranges (from PhầnIV_Domain_Knowledge_Base.md Section IV.5):**

**Module 1:**
- Q: > 0 m³/ngày
- t: 0°C < t < 100°C
- L: > 0 m
- ε: > 0 m (typically 0.0001-0.01 m)

**Module 2:**
- Q: > 0 m³/h
- t: 0°C < t < 100°C
- C(Fe²⁺): ≥ 0 mg/l
- C(H₂S): ≥ 0 mg/l
- A: > 0 m²
- η: 0 < η ≤ 1

**Module 3:**
- Q: > 0 m³/h
- t_mix: 30-180 s (recommended)
- k_Fe: > 0
- k_H₂S: > 0

**Module 4:**
- Q: > 0 m³/h
- α: 1.0-1.5 (safety factor)
- U_o: > 0 m/h
- H: > 0 m

**Module 5:**
- Q: > 0 m³/h
- v: 6-10 m/h (recommended)
- q: 12-15 L/s·m² (backwash intensity)

**Validation Actions:**
- Value within range → Accept
- Value outside range → Error with suggestion
- Value at boundary → Warning

**Example:**
- Input: `t = 150°C` → Error: "Temperature out of range. Expected: 0°C < t < 100°C"
- Input: `v = 5.5 m/h` (Module 5) → Warning: "Filtration velocity below recommended minimum (6 m/h). Consider increasing to 6-10 m/h"

---

#### VI.6.2.4 Unit Validation

**EN:** Check units are specified and valid.

**VI:** Kiểm tra đơn vị được chỉ định và hợp lệ.

**Rules:**
- All numeric inputs must have units (except dimensionless values)
- Units must match expected unit types
- System must recognize unit aliases (e.g., "m³/ngày", "m³/ngđ", "m³/d")

**Example:**
- Input: `Q = 500` → Error: "Unit required for Q. Expected: m³/ngày, m³/h, m³/s"
- Input: `Q = 500 m³/ngđ` → Accept (recognize "m³/ngđ" as alias for "m³/ngày")

---

### VI.6.3 Calculation Validation

#### VI.6.3.1 Formula Application Validation

**EN:** Validate formulas are applied correctly with correct parameters.

**VI:** Xác thực công thức được áp dụng đúng với các tham số đúng.

**Checks:**
- All formula parameters are available
- No division by zero
- No negative values where not allowed
- Logarithm arguments are positive
- Square root arguments are non-negative

**Example:**
- Calculation: `v = 4Q/(πD²)` where D = 0 → Error: "Division by zero. D cannot be 0"
- Calculation: `Re = vD/ν` where ν = 0 → Error: "Kinematic viscosity cannot be 0"

---

#### VI.6.3.2 Result Range Validation

**EN:** Validate calculated results are within physically reasonable ranges.

**VI:** Xác thực kết quả tính toán nằm trong phạm vi hợp lý về mặt vật lý.

**Reference Ranges (from PhầnIV_Domain_Knowledge_Base.md):**

**Module 1 Results:**
- v: 1.2-2.4 m/s (TCVN 33-2006)
- Re: > 0 (typically 10³-10⁶)
- H₁: > 0 m

**Module 2 Results:**
- C_phun: 3-8 m/h (recommended)
- C_thực: > 0 mg/l, typically 4-10 mg/l

**Module 3 Results:**
- t_mix: 30-180 s
- η: 0-100%

**Module 4 Results:**
- t_lắng: 1-3 h
- v: < U_o (settling velocity must be less than overflow rate)

**Module 5 Results:**
- v_thực: 6-10 m/h
- q: 12-15 L/s·m²

**Validation Actions:**
- Result within range → Accept
- Result outside range → Warning or Error (depending on severity)
- Result at boundary → Warning

---

#### VI.6.3.3 Standards Compliance Validation

**EN:** Validate results comply with Vietnamese technical standards.

**VI:** Xác thực kết quả tuân thủ các tiêu chuẩn kỹ thuật Việt Nam.

**TCVN 33-2006 Compliance Checks:**
- Pipe velocities: 1.2 m/s (suction) to 2.4 m/s (discharge)
- Pipe diameters: Standard sizes
- Headloss calculations: Use approved formulas

**TCVN 7222:2002 Compliance Checks:**
- Water quality parameters within limits
- Treatment efficiency meets standards

**Actions:**
- Non-compliant → Error with standard reference
- Borderline → Warning with recommendation

---

### VI.6.4 Error Handling Strategy

#### VI.6.4.1 Error Classification

**EN:** Classify errors by severity and type.

**VI:** Phân loại lỗi theo mức độ nghiêm trọng và loại.

**Error Types:**
1. **Fatal Error:** Cannot proceed with calculation
   - Missing required input
   - Division by zero
   - Invalid formula application
   - Action: Stop calculation, return error

2. **Warning:** Can proceed but result may be inaccurate
   - Value outside recommended range
   - Missing optional input (using default)
   - Borderline compliance
   - Action: Continue calculation, flag warning

3. **Info:** Informational message
   - Assumption made
   - Default value used
   - Action: Continue calculation, log info

---

#### VI.6.4.2 Error Response Structure

**EN:** Standard error response format.

**VI:** Định dạng phản hồi lỗi chuẩn.

**Structure:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Temperature out of range",
    "detail": "Temperature 150°C exceeds maximum 100°C",
    "field": "t",
    "module": "Module 1",
    "severity": "FATAL",
    "suggestion": "Please provide temperature between 0°C and 100°C",
    "reference": "TCVN 33-2006, PhầnIV_Domain_Knowledge_Base.md Section IV.5"
  }
}
```

---

#### VI.6.4.3 Error Recovery

**EN:** Provide recovery options for errors.

**VI:** Cung cấp các tùy chọn khôi phục cho lỗi.

**Recovery Actions:**
1. **Suggest Corrections:**
   - Provide corrected value if possible
   - Suggest alternative inputs
   - Recommend parameter adjustments

2. **Partial Results:**
   - If chain calculation fails at module i, return results for modules 1 to i-1
   - Allow user to fix and retry from module i

3. **Alternative Calculations:**
   - Suggest alternative module chains
   - Recommend different approaches

**Example:**
- Error: "Filtration velocity too low (4 m/h)"
- Suggestion: "Increase flowrate Q or decrease filter area. Recommended: v = 6-10 m/h"
- Alternative: "Consider using smaller filter cells or increasing number of filters"

---

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_05`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_07` (Report Generation Workflow)

