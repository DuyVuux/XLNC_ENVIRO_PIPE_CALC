# VI. WORKFLOW & AUTOMATION / QUY TRÌNH LÀM VIỆC & TỰ ĐỘNG HÓA

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnVI_Workflow.md` - phần định nghĩa quy trình làm việc hoàn chỉnh cho hệ thống XLNC. File này mô tả workflow tính toán module đơn lẻ, module chain, data flow, và validation.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm workflow tính toán module đơn lẻ (VI.2)
2. Hiểu workflow điều phối chuỗi module (VI.3)
3. Nắm logic đề xuất chuỗi module (VI.4)
4. Hiểu workflow validation và error handling (VI.5, VI.6)
5. Tham chiếu đúng khi implement workflow

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement calculation workflow
- Thiết kế module chain orchestration
- Implement validation logic
- Thiết kế error handling

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng workflow step (ví dụ: "Theo VI.2.2 Step 1, hệ thống phải validate inputs...")
- Tuân thủ thứ tự workflow steps
- Đảm bảo data flow đúng giữa các module

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement workflow:
1. **Bước 1:** Xác định workflow type (single module, chain, recommendation)
2. **Bước 2:** Áp dụng workflow steps theo thứ tự
3. **Bước 3:** Kiểm tra data flow giữa modules
4. **Bước 4:** Áp dụng validation và error handling

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI tuân thủ thứ tự workflow steps
- PHẢI đảm bảo data flow đúng giữa modules
- PHẢI áp dụng validation và error handling
- PHẢI đảm bảo tính nhất quán với các phần khác

**G. Examples / Ví dụ:**

**Ví dụ 1 - Single module workflow:**
> "Theo VI.2.2, workflow tính module đơn lẻ: Step 1 (Input Validation) → Step 2 (Unit Normalization) → Step 3 (Calculation Execution) → Step 4 (Result Validation) → Step 5 (Output Formatting)"

**Ví dụ 2 - Module chain workflow:**
> "Theo VI.3, workflow chuỗi module 1→2→3: Execute Module 1 → Pass outputs to Module 2 → Execute Module 2 → Pass outputs to Module 3 → Execute Module 3 → Aggregate results"

---

*(EN + VI, chuẩn quốc tế, đầy đủ cho hệ thống XLNC)*

---

## VI.1 Overview — Tổng quan

**EN:**

This section defines the complete workflow for the Automated Water Treatment Calculation System (XLNC). The workflow covers single module calculations, module chain orchestration, data flow between modules, module chain recommendation, validation, error handling, and report generation. All workflows are designed to ensure accuracy, consistency, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002).

**VI:**

Phần này định nghĩa quy trình làm việc hoàn chỉnh cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Quy trình bao gồm tính toán module đơn lẻ, điều phối chuỗi module, dòng chảy dữ liệu giữa các module, đề xuất chuỗi module, xác thực, xử lý lỗi và xuất báo cáo. Tất cả các quy trình được thiết kế để đảm bảo độ chính xác, tính nhất quán và tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002).

**Workflow Components:**

1. **Single Module Calculation Workflow** — Quy trình tính toán module đơn lẻ
2. **Module Chain Calculation Workflow** — Quy trình tính toán chuỗi module
3. **Module Chain Recommendation Workflow** — Quy trình đề xuất chuỗi module
4. **Data Flow & Transformation Workflow** — Quy trình dòng chảy và chuyển đổi dữ liệu
5. **Validation & Error Handling Workflow** — Quy trình xác thực và xử lý lỗi
6. **Report Generation Workflow** — Quy trình xuất báo cáo

**Hóa phàm:**

Phần này mô tả từng bước cụ thể mà hệ thống phải làm để tính toán và xử lý dữ liệu, từ khi người dùng nhập liệu đến khi xuất báo cáo cuối cùng.

---

## VI.2 Single Module Calculation Workflow — Quy trình tính toán module đơn lẻ

### VI.2.1 Overview

**EN:** This workflow describes the step-by-step process for calculating a single module independently, without dependencies on other modules.

**VI:** Quy trình này mô tả các bước tính toán một module độc lập, không phụ thuộc vào các module khác.

### VI.2.2 Workflow Steps

#### Step 1: Input Validation / Xác thực đầu vào

**EN:** System validates all required inputs against technical standards and acceptable ranges.

**VI:** Hệ thống xác thực tất cả các đầu vào bắt buộc so với tiêu chuẩn kỹ thuật và phạm vi chấp nhận được.

**Actions:**
1. Check required fields are present
2. Validate data types (number, string, enum)
3. Validate units are specified and correct
4. Check values against reference ranges (from PhầnIV_Domain_Knowledge_Base.md)
5. Flag invalid inputs with specific error messages
6. Suggest corrections for invalid inputs

**Output:**
- Validated input object or error list with suggestions

**Example:**
- Input: `Q = 500` (missing unit) → Error: "Unit required. Expected: m³/ngày, m³/h, m³/s"
- Input: `Q = 500 m³/ngày, t = 150°C` → Error: "Temperature out of range. Expected: 0°C < t < 100°C"

---

#### Step 2: Unit Normalization / Chuẩn hóa đơn vị

**EN:** System converts all inputs to standard SI units for internal calculations.

**VI:** Hệ thống chuyển đổi tất cả đầu vào sang đơn vị SI chuẩn để tính toán nội bộ.

**Actions:**
1. Identify input unit for each parameter
2. Convert to standard SI unit:
   - Flowrate: Convert to m³/s
   - Temperature: Convert to °C (if in °F, convert)
   - Length: Convert to m
   - Pressure/Head: Convert to m
3. Store original unit for output formatting
4. Log conversion factors applied

**Output:**
- Normalized input object with all values in SI units
- Unit conversion log

**Example:**
- Input: `Q = 500 m³/ngày` → Normalized: `Q = 0.005787 m³/s`
- Input: `D = 200 mm` → Normalized: `D = 0.2 m`

---

#### Step 3: Calculation Execution / Thực thi tính toán

**EN:** System executes module-specific calculation formulas in the correct sequence.

**VI:** Hệ thống thực thi các công thức tính toán đặc thù của module theo trình tự đúng.

**Actions:**
1. Load module-specific formulas (from PhầnIV_Domain_Knowledge_Base.md)
2. Execute calculations in dependency order:
   - Calculate intermediate values first
   - Then calculate final outputs
3. Apply formulas with proper citations
4. Store intermediate results for step-by-step display
5. Handle edge cases (division by zero, negative values, etc.)

**Output:**
- Complete calculation results (intermediate + final)
- Formula citations for each calculation
- Calculation steps log

**Example for Module 1:**
1. Calculate velocity: `v = 4Q / (πD²)`
2. Calculate Reynolds: `Re = vD / ν`
3. Calculate friction factor: `λ = f(Re, ε/D)` (Colebrook-White)
4. Calculate headloss: `H₁ = λ(L/D)(v²/2g) + β(v²/2g)`
5. Calculate required head: `Hyc = H₁ + Hc`

---

#### Step 4: Result Validation / Xác thực kết quả

**EN:** System validates calculated results against technical standards and physical constraints.

**VI:** Hệ thống xác thực kết quả tính toán so với tiêu chuẩn kỹ thuật và ràng buộc vật lý.

**Actions:**
1. Check results against reference ranges (from PhầnIV_Domain_Knowledge_Base.md)
2. Validate against TCVN 33-2006 constraints
3. Check physical feasibility (e.g., velocity not too high, dimensions reasonable)
4. Flag warnings for borderline values
5. Flag errors for non-compliant values

**Output:**
- Validated results with compliance status
- Warnings and errors (if any)
- Compliance report

**Example:**
- Result: `v = 0.5 m/s` → Warning: "Velocity below recommended minimum (1.2 m/s for suction pipe)"
- Result: `v = 5.0 m/s` → Error: "Velocity exceeds maximum (2.4 m/s for discharge pipe per TCVN 33-2006)"

---

#### Step 5: Output Formatting / Định dạng đầu ra

**EN:** System formats results with proper units, precision, and structure.

**VI:** Hệ thống định dạng kết quả với đơn vị, độ chính xác và cấu trúc phù hợp.

**Actions:**
1. Convert results back to user's preferred units (or standard display units)
2. Apply appropriate precision (e.g., 2 decimal places for dimensions)
3. Structure output according to module specification
4. Include calculation steps and formula citations
5. Add "Hóa phàm" (plain language explanation)

**Output:**
- Formatted result object with units
- Calculation steps with formulas
- Plain language summary

**Example:**
```json
{
  "module": "Module 1 - Pipe Hydraulics",
  "results": {
    "Q": {"value": 0.005787, "unit": "m³/s", "display": "500 m³/ngày"},
    "v": {"value": 1.84, "unit": "m/s"},
    "D": {"value": 0.063, "unit": "m", "display": "63 mm"},
    "H1": {"value": 2.45, "unit": "m"},
    "Hyc": {"value": 5.45, "unit": "m"}
  },
  "calculation_steps": [...],
  "formula_citations": [...],
  "hoa_pham": "Đường ống có đường kính 63mm, vận tốc dòng chảy 1.84 m/s..."
}
```

---

### VI.2.3 Module-Specific Workflows

#### VI.2.3.1 Module 1: Pipe Hydraulics Workflow

**Calculation Sequence:**
1. Validate: Q, t, L, Hc, ε, β, pipe material
2. Normalize: Convert Q to m³/s, all lengths to m
3. Calculate: v = 4Q/(πD²)
4. Calculate: Re = vD/ν (lookup ν from temperature table)
5. Calculate: λ using Colebrook-White equation
6. Calculate: Htt = λ(L/D)(v²/2g)
7. Calculate: Hcb = β(v²/2g)
8. Calculate: H₁ = Htt + Hcb
9. Calculate: Hyc = H₁ + Hc
10. Validate: Check v against TCVN 33-2006 (1.2-2.4 m/s)
11. Format output

---

#### VI.2.3.2 Module 2: Rainfall Aeration Workflow

**Calculation Sequence:**
1. Validate: Q, t, C(Fe²⁺), C(H₂S), A, η
2. Normalize: Convert Q to m³/h, all concentrations to mg/l
3. Calculate: C_ox (saturated oxygen) = 468/(31.6 + t)
4. Calculate: O₂ for Fe²⁺ = 0.143 × C(Fe²⁺)
5. Calculate: O₂ for H₂S = 0.47 × C(H₂S)
6. Calculate: C_ht = C_ox + O₂(Fe²⁺) + O₂(H₂S)
7. Calculate: C_phun = Q/A
8. Calculate: C_thực = C_ox × η
9. Validate: Check C_phun (3-8 m/h), C_thực vs C_ht
10. Format output

---

#### VI.2.3.3 Module 3: Rapid Mixing Tank Workflow

**Calculation Sequence:**
1. Validate: Q, t, [Fe²⁺]_0, [H₂S]_0, k_Fe, k_H₂S, t_mix
2. Normalize: Convert Q to m³/h, t_mix to seconds
3. Calculate: V = Q × t_mix
4. Calculate: Tank dimensions (L, W, H) based on V
5. Calculate: r_Fe = k_Fe × [Fe²⁺]_0 × C_ox (from Module 2 or input)
6. Calculate: r_H₂S = k_H₂S × [H₂S]_0 × C_ox
7. Calculate: [Fe²⁺]_t = [Fe²⁺]_0 × e^(-k_Fe × C_ox × t)
8. Calculate: [H₂S]_t = [H₂S]_0 × e^(-k_H₂S × C_ox × t)
9. Calculate: η_Fe = ([Fe²⁺]_0 - [Fe²⁺]_t) / [Fe²⁺]_0 × 100%
10. Calculate: η_H₂S = ([H₂S]_0 - [H₂S]_t) / [H₂S]_0 × 100%
11. Validate: Check t_mix (30-180s), tank dimensions
12. Format output

---

#### VI.2.3.4 Module 4: Sedimentation Tank Workflow

**Calculation Sequence:**
1. Validate: Q, α, U_o, H, W, inclination angle
2. Normalize: Convert Q to m³/h, all dimensions to m
3. Calculate: Q₁ = Q × α (safety factor)
4. Calculate: F = Q₁ / U_o (required surface area)
5. Calculate: Tank dimensions (D, R, H) based on F
6. Calculate: V = πD²H/4 (tank volume)
7. Calculate: v = Q₁ / F (surface settling velocity)
8. Calculate: t_lắng = V / Q₁ (settling time)
9. Calculate: η (settling efficiency) based on v vs U_o
10. Validate: Check t_lắng (1-3h), v < U_o
11. Format output

---

#### VI.2.3.5 Module 5: Filtration Unit Workflow

**Calculation Sequence:**
1. Validate: Q, v, q, t_rửa, filter type
2. Normalize: Convert Q to m³/h, v to m/h, q to L/s·m²
3. Calculate: f₁ = Q / v (filter area)
4. Calculate: Drain pipe area and compartment layout
5. Calculate: D (tank diameter) based on f₁
6. Calculate: F₁ (actual filter area)
7. Calculate: v_thực = Q / F₁ (actual filtration velocity)
8. Calculate: Various heights (h₁ to h₈) based on filter type
9. Calculate: H (total headloss) = sum of all headloss components
10. Calculate: Q_rửa = q × F₁ (backwash flowrate)
11. Calculate: V_rửa = Q_rửa × t_rửa (backwash volume)
12. Calculate: Filtration cycle time
13. Validate: Check v_thực (6-10 m/h), q (12-15 L/s·m²)
14. Format output

---

## VI.3 Module Chain Calculation Workflow — Quy trình tính toán chuỗi module

### VI.3.1 Overview

**EN:** This workflow describes the process for calculating a chain of modules sequentially, where output from one module becomes input to the next.

**VI:** Quy trình này mô tả quá trình tính toán một chuỗi module tuần tự, trong đó đầu ra của module này trở thành đầu vào của module tiếp theo.

### VI.3.2 Supported Module Chains

**Valid Chains (from Báo_cáo_tổng_hợp):**
- `1 → 2 → 3 → 4 → 5` (Full chain)
- `1 → 3 → 4` (Skip aeration)
- `1 → 2 → 5` (Skip mixing and sedimentation)
- `1 → 4 → 5` (Skip aeration and mixing)
- `1 → 5` (Simple chain)
- `1 → 2 → 3` (Stop at mixing)

**Note:** Module 1 is always required as it provides base flowrate (Q).

---

### VI.3.3 Workflow Steps

#### Step 1: Chain Validation / Xác thực chuỗi

**EN:** System validates the module chain configuration is valid and logically consistent.

**VI:** Hệ thống xác thực cấu hình chuỗi module là hợp lệ và nhất quán về logic.

**Actions:**
1. Check chain starts with Module 1
2. Validate chain sequence is logical (e.g., no skipping required modules)
3. Check for circular dependencies (should not occur in this system)
4. Validate user has permission to use selected modules
5. Check chain length (1-5 modules)

**Output:**
- Validated chain configuration or error

**Example:**
- Valid: `[1, 2, 3, 4, 5]`
- Invalid: `[2, 3, 4]` → Error: "Chain must start with Module 1"
- Invalid: `[1, 5, 2]` → Error: "Invalid sequence. Module 5 cannot precede Module 2"

---

#### Step 2: Input Preparation / Chuẩn bị đầu vào

**EN:** System prepares inputs for the first module in the chain.

**VI:** Hệ thống chuẩn bị đầu vào cho module đầu tiên trong chuỗi.

**Actions:**
1. Collect user inputs for Module 1
2. Validate Module 1 inputs (as per VI.2.2 Step 1)
3. Prepare normalized input object for Module 1

**Output:**
- Validated and normalized input for Module 1

---

#### Step 3: Sequential Module Calculation / Tính toán module tuần tự

**EN:** System calculates each module in sequence, passing outputs as inputs to the next module.

**VI:** Hệ thống tính toán từng module theo trình tự, truyền đầu ra làm đầu vào cho module tiếp theo.

**Actions:**
For each module in chain (i = 1 to n):

1. **Execute Module Calculation:**
   - Run single module workflow (VI.2.2) for module i
   - Store results in chain context

2. **Extract Output for Next Module:**
   - Identify outputs from module i that are inputs to module i+1
   - Map outputs to inputs according to data flow specification (from Báo_cáo_tổng_hợp Section 3)

3. **Prepare Input for Next Module:**
   - Merge module i outputs with user inputs for module i+1 (user inputs take precedence)
   - Normalize units if needed
   - Validate combined input for module i+1

4. **Handle Missing Data:**
   - If required input is missing, prompt user or use default value (with warning)
   - Log any assumptions made

**Output:**
- Results for each module in chain
- Data flow log showing what was passed between modules

**Data Flow Mapping (from Báo_cáo_tổng_hợp Section 3.1):**

**Module 1 → Module 2:**
- Q (m³/s, m³/h, m³/ngđ) → Q
- v (m/s) → (used for spray intensity calculation)
- D (m) → (used for pipe layout)
- Re → (for flow regime analysis)
- ε (m) → (for pipe roughness reference)

**Module 2 → Module 3:**
- Q (m³/h) → Q
- C_phun (m/h) → (for mixing efficiency)
- C_thực (mg/l) → C_ox (for reaction rate calculation)
- C_ht (mg/l) → (for oxygen requirement validation)

**Module 3 → Module 4:**
- Q (m³/h) → Q (for sedimentation flowrate)
- t (h, min) → (for settling time reference)
- Tank dimensions (L×W×H) → (for layout planning)

**Module 4 → Module 5:**
- Q (m³/h) → Q (for filtration flowrate)
- Tank dimensions (D×R×H) → (for layout planning)
- Water quality parameters → (for filter design)

---

#### Step 4: Chain Result Aggregation / Tổng hợp kết quả chuỗi

**EN:** System aggregates results from all modules in the chain into a unified result object.

**VI:** Hệ thống tổng hợp kết quả từ tất cả các module trong chuỗi thành một đối tượng kết quả thống nhất.

**Actions:**
1. Collect results from all modules in chain
2. Create chain summary:
   - Total flowrate (from Module 1)
   - Total headloss (sum of all headlosses)
   - Overall treatment efficiency
   - Total tank volumes
   - Total footprint area
3. Generate chain-level validation:
   - Check overall system compliance
   - Verify data consistency across modules
   - Flag any inconsistencies
4. Create data flow visualization
5. Generate chain-level "Hóa phàm"

**Output:**
- Aggregated chain result object
- Chain summary report
- Data flow diagram
- Compliance report

**Example Structure:**
```json
{
  "chain": [1, 2, 3, 4, 5],
  "modules": {
    "module_1": {...},
    "module_2": {...},
    "module_3": {...},
    "module_4": {...},
    "module_5": {...}
  },
  "chain_summary": {
    "total_flowrate": {"value": 500, "unit": "m³/ngày"},
    "total_headloss": {"value": 8.5, "unit": "m"},
    "total_volume": {"value": 125, "unit": "m³"},
    "total_area": {"value": 45, "unit": "m²"},
    "overall_efficiency": {"value": 95, "unit": "%"}
  },
  "data_flow": [...],
  "compliance": {...}
}
```

---

#### Step 5: Error Handling in Chain / Xử lý lỗi trong chuỗi

**EN:** System handles errors at any point in the chain gracefully, allowing partial results.

**VI:** Hệ thống xử lý lỗi tại bất kỳ điểm nào trong chuỗi một cách linh hoạt, cho phép kết quả một phần.

**Actions:**
1. **Module Calculation Error:**
   - If module i fails, stop chain execution
   - Return results for modules 1 to i-1
   - Return detailed error for module i
   - Suggest fixes or alternatives

2. **Data Flow Error:**
   - If required data missing from previous module:
     - Check if user can provide it directly
     - If yes, prompt user
     - If no, mark chain as incomplete with warning

3. **Validation Error:**
   - If module i results fail validation:
     - Continue to next module with warning
     - Flag non-compliant results
     - Suggest parameter adjustments

**Output:**
- Partial results (if available)
- Error report with suggestions
- Recovery options

---

## VI.4 Module Chain Recommendation Workflow — Quy trình đề xuất chuỗi module

### VI.4.1 Overview

**EN:** This workflow recommends appropriate module chains based on project scale, water quality, and other constraints.

**VI:** Quy trình này đề xuất chuỗi module phù hợp dựa trên quy mô dự án, chất lượng nước và các ràng buộc khác.

### VI.4.2 Input Parameters

**Required:**
- Project scale (Q in m³/ngày)
- Water quality parameters (if available):
  - Fe²⁺ concentration
  - H₂S concentration
  - Turbidity
  - Suspended solids

**Optional:**
- Budget constraints
- Space constraints
- Treatment level requirement (basic/medium/advanced)
- Technology preference (simple/advanced)

---

### VI.4.3 Recommendation Algorithm

#### Step 1: Scale Classification / Phân loại quy mô

**EN:** Classify project into Small, Medium, or Large scale based on flowrate.

**VI:** Phân loại dự án thành Quy mô nhỏ, Vừa hoặc Lớn dựa trên lưu lượng.

**Classification (from Báo_cáo_tổng_hợp Section 6):**
- **Small:** Q < 100 m³/ngày
- **Medium:** 100 ≤ Q ≤ 1000 m³/ngày
- **Large:** Q > 1000 m³/ngày

---

#### Step 2: Water Quality Analysis / Phân tích chất lượng nước

**EN:** Analyze water quality parameters to determine treatment requirements.

**VI:** Phân tích các thông số chất lượng nước để xác định yêu cầu xử lý.

**Analysis:**
- **High Fe²⁺ or H₂S:** Requires Module 2 (aeration) and Module 3 (reaction)
- **High suspended solids:** Requires Module 4 (sedimentation)
- **High turbidity:** Requires Module 5 (filtration)
- **Good quality:** May skip some modules

---

#### Step 3: Chain Selection / Lựa chọn chuỗi

**EN:** Select appropriate chain based on scale and water quality.

**VI:** Lựa chọn chuỗi phù hợp dựa trên quy mô và chất lượng nước.

**Selection Rules (from Báo_cáo_tổng_hợp Section 6):**

**Small Scale (Q < 100 m³/ngày):**
- **Minimum:** `1 → 5`
- **Recommended:** `1 → 4 → 5` (if suspended solids present)
- **Reason:** Skip aeration and mixing for cost/space savings

**Medium Scale (100-1000 m³/ngày):**
- **Recommended:** `1 → 3 → 4 → 5` (if Fe²⁺/H₂S present)
- **Alternative:** `1 → 2 → 5` (if good water quality, need aeration only)
- **Reason:** Balance between treatment quality and cost

**Large Scale (Q > 1000 m³/ngày):**
- **Recommended:** `1 → 2 → 3 → 4 → 5` (full chain)
- **Reason:** Maximum treatment quality required

**Special Cases:**
- **High Fe²⁺/H₂S:** Always include Module 2 and Module 3
- **High suspended solids:** Always include Module 4
- **High turbidity:** Always include Module 5
- **Space constraints:** Skip Module 2 (aeration tower)
- **Budget constraints:** Use shorter chains

---

#### Step 4: Recommendation Generation / Tạo đề xuất

**EN:** Generate recommendation with explanation and alternatives.

**VI:** Tạo đề xuất kèm giải thích và các phương án thay thế.

**Output Structure:**
```json
{
  "recommended_chain": [1, 3, 4, 5],
  "confidence": 0.85,
  "reasoning": {
    "scale": "Medium (Q = 500 m³/ngày)",
    "water_quality": "High Fe²⁺ (5 mg/l), moderate suspended solids",
    "rationale": "Module 3 needed for Fe²⁺ oxidation, Module 4 for sedimentation, Module 5 for final filtration. Module 2 skipped due to space constraints."
  },
  "alternatives": [
    {
      "chain": [1, 2, 3, 4, 5],
      "pros": ["Better aeration", "Higher treatment efficiency"],
      "cons": ["Requires more space", "Higher cost"],
      "when_to_use": "If space and budget allow"
    },
    {
      "chain": [1, 4, 5],
      "pros": ["Lower cost", "Simpler operation"],
      "cons": ["May not fully oxidize Fe²⁺", "Lower efficiency"],
      "when_to_use": "If Fe²⁺ concentration is low"
    }
  ],
  "warnings": [
    "Module 2 skipped - ensure sufficient dissolved oxygen from other sources",
    "Monitor Fe²⁺ removal efficiency in Module 3"
  ]
}
```

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

## VI.8 Summary — Tóm tắt

### VI.8.1 Key Workflows

**EN:** This document defines 7 major workflows for the XLNC system:

1. **Single Module Calculation Workflow:** Step-by-step process for calculating individual modules
2. **Module Chain Calculation Workflow:** Sequential calculation of module chains with automatic data passing
3. **Module Chain Recommendation Workflow:** Intelligent recommendation of module chains based on project requirements
4. **Data Flow & Transformation Workflow:** Management of data flow between modules with unit conversion
5. **Validation & Error Handling Workflow:** Comprehensive validation and error handling strategies
6. **Report Generation Workflow:** Multi-format report generation for different use cases

**VI:** Tài liệu này định nghĩa 7 quy trình chính cho hệ thống XLNC:

1. **Quy trình Tính toán Module Đơn lẻ:** Quy trình từng bước để tính toán các module riêng lẻ
2. **Quy trình Tính toán Chuỗi Module:** Tính toán tuần tự các chuỗi module với truyền dữ liệu tự động
3. **Quy trình Đề xuất Chuỗi Module:** Đề xuất thông minh các chuỗi module dựa trên yêu cầu dự án
4. **Quy trình Dòng chảy và Chuyển đổi Dữ liệu:** Quản lý dòng chảy dữ liệu giữa các module với chuyển đổi đơn vị
5. **Quy trình Xác thực và Xử lý Lỗi:** Chiến lược xác thực và xử lý lỗi toàn diện
6. **Quy trình Xuất Báo cáo:** Tạo báo cáo đa định dạng cho các trường hợp sử dụng khác nhau

### VI.8.2 Workflow Integration

**EN:** All workflows are integrated to provide a seamless user experience:

- User inputs → Validation → Calculation → Results → Reports
- Module chains automatically orchestrate data flow
- Recommendations guide users to optimal configurations
- Comprehensive error handling ensures system reliability

**VI:** Tất cả các quy trình được tích hợp để cung cấp trải nghiệm người dùng liền mạch:

- Đầu vào người dùng → Xác thực → Tính toán → Kết quả → Báo cáo
- Chuỗi module tự động điều phối dòng chảy dữ liệu
- Đề xuất hướng dẫn người dùng đến cấu hình tối ưu
- Xử lý lỗi toàn diện đảm bảo độ tin cậy hệ thống

---

### VI.8.3 Workflow Best Practices / Thực hành tốt nhất

**EN:** To ensure optimal system performance and accuracy, follow these best practices:

**VI:** Để đảm bảo hiệu suất và độ chính xác tối ưu của hệ thống, tuân theo các thực hành tốt nhất sau:

**Best Practices:**

1. **Always validate inputs before calculation**
   - **EN:** Validate all inputs against technical standards and acceptable ranges before starting calculations
   - **VI:** Luôn xác thực tất cả đầu vào so với tiêu chuẩn kỹ thuật và phạm vi chấp nhận được trước khi bắt đầu tính toán

2. **Use module chains for complex projects**
   - **EN:** For projects requiring multiple treatment stages, use module chains to ensure proper data flow and consistency
   - **VI:** Đối với các dự án yêu cầu nhiều giai đoạn xử lý, sử dụng chuỗi module để đảm bảo dòng chảy dữ liệu và tính nhất quán

3. **Review recommendations before accepting**
   - **EN:** System recommendations are based on standard practices but may need adjustment for specific project requirements
   - **VI:** Đề xuất của hệ thống dựa trên thực hành tiêu chuẩn nhưng có thể cần điều chỉnh cho yêu cầu dự án cụ thể

4. **Validate results against standards**
   - **EN:** Always check that calculation results comply with TCVN 33-2006 and TCVN 7222:2002
   - **VI:** Luôn kiểm tra kết quả tính toán tuân thủ TCVN 33-2006 và TCVN 7222:2002

5. **Export reports for documentation**
   - **EN:** Generate and export reports in appropriate formats (PDF, Excel) for project documentation and approval
   - **VI:** Tạo và xuất báo cáo ở định dạng phù hợp (PDF, Excel) để tài liệu hóa và phê duyệt dự án

---

### VI.8.4 Workflow Performance Considerations / Cân nhắc hiệu suất

**EN:** System performance considerations for workflow execution:

**VI:** Cân nhắc hiệu suất hệ thống cho việc thực thi quy trình:

**Performance Metrics:**

1. **Single Module Calculation:**
   - **Target:** < 5 seconds for standard project
   - **Optimization:** Cache lookup tables, optimize formula calculations

2. **Module Chain Calculation:**
   - **Target:** < 30 seconds for full chain (5 modules)
   - **Optimization:** Parallel processing where possible, efficient data passing

3. **Module Chain Recommendation:**
   - **Target:** < 2 seconds
   - **Optimization:** Pre-computed decision trees, cached recommendations

4. **Report Generation:**
   - **Target:** < 2 minutes for standard project
   - **Optimization:** Template-based generation, asynchronous processing

---

### VI.8.5 Workflow Error Recovery / Phục hồi lỗi quy trình

**EN:** System must handle errors gracefully and provide recovery options:

**VI:** Hệ thống phải xử lý lỗi một cách nhẹ nhàng và cung cấp các tùy chọn phục hồi:

**Recovery Strategies:**

1. **Input Validation Errors:**
   - **EN:** System suggests corrections and allows user to fix inputs without losing other data
   - **VI:** Hệ thống đề xuất sửa chữa và cho phép người dùng sửa đầu vào mà không mất dữ liệu khác

2. **Calculation Errors:**
   - **EN:** System logs error details, provides error message, and suggests alternative approaches
   - **VI:** Hệ thống ghi log chi tiết lỗi, cung cấp thông báo lỗi và đề xuất phương án thay thế

3. **Data Flow Errors:**
   - **EN:** System allows manual input override when automatic data passing fails
   - **VI:** Hệ thống cho phép ghi đè đầu vào thủ công khi truyền dữ liệu tự động thất bại

4. **System Errors:**
   - **EN:** System saves calculation state and allows recovery after system restart
   - **VI:** Hệ thống lưu trạng thái tính toán và cho phép phục hồi sau khi khởi động lại hệ thống

---

## VI.9 Workflow Diagrams — Sơ đồ quy trình

### VI.9.1 Single Module Calculation Flowchart / Lưu đồ tính toán module đơn lẻ

```
┌─────────────────┐
│  User Input     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Input Validation│
└────────┬────────┘
         │
    ┌────┴────┐
    │ Valid? │
    └───┬────┘
        │
   ┌────┴────┐
   │   No    │ → ┌──────────────┐ → ┌──────────────┐
   └─────────┘   │ Return Error │   │ User Fixes   │
                 └──────────────┘   └──────┬───────┘
                                           │
   ┌─────────┐                            │
   │   Yes   │ ←──────────────────────────┘
   └────┬────┘
        │
        ↓
┌─────────────────┐
│  Calculation    │
│  (Formulas)     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Result          │
│ Validation      │
└────────┬────────┘
         │
    ┌────┴────┐
    │ Valid? │
    └───┬────┘
        │
   ┌────┴────┐
   │   No    │ → ┌──────────────┐
   └─────────┘   │ Flag Warning │
                 └──────────────┘
   ┌─────────┐
   │   Yes   │
   └────┬────┘
        │
        ↓
┌─────────────────┐
│  Return Results │
└─────────────────┘
```

---

### VI.9.2 Module Chain Calculation Flowchart / Lưu đồ tính toán chuỗi module

```
┌─────────────────┐
│  User Input     │
│  + Chain Config │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Validate Chain  │
│ Configuration   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Module 1        │
│ Calculation     │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Extract Output  │
│ for Next Module │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Module 2        │
│ (if in chain)   │
│ Calculation     │
└────────┬────────┘
         │
         ↓
    ┌────┴────┐
    │ More    │
    │ Modules?│
    └───┬─────┘
        │
   ┌────┴────┐
   │   Yes   │ → Continue...
   └─────────┘
   │
   │   No
   └────┬────┐
        │    │
        ↓    ↓
┌─────────────────┐
│ Aggregate       │
│ Results         │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Generate Report │
└─────────────────┘
```

---

### VI.9.3 Module Chain Recommendation Flowchart / Lưu đồ đề xuất chuỗi module

```
┌─────────────────┐
│  Project        │
│  Requirements   │
│  (Q, scale,     │
│   water quality)│
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Analyze         │
│ Requirements    │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Check Scale     │
│ (Small/Med/Large)│
└────────┬────────┘
         │
    ┌────┴────┐
    │ Scale?  │
    └───┬────┘
        │
   ┌────┴────┐
   │ Small  │ → Recommend: 1→5 or 1→4→5
   │ Medium │ → Recommend: 1→3→4→5 or 1→2→5
   │ Large  │ → Recommend: 1→2→3→4→5
   └────────┘
        │
        ↓
┌─────────────────┐
│ Check Water     │
│ Quality         │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Adjust Chain    │
│ Based on Quality│
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Return          │
│ Recommendations │
│ with Confidence │
└─────────────────┘
```

---

## VI.10 Workflow Examples — Ví dụ quy trình

### VI.10.1 Example 1: Single Module Calculation / Ví dụ 1: Tính toán module đơn lẻ

**Scenario:** Calculate pipe hydraulics for a water supply system

**Input:**
```json
{
  "module": 1,
  "inputs": {
    "Q": 500,
    "Q_unit": "m³/ngày",
    "t": 25,
    "t_unit": "°C",
    "L": 1000,
    "L_unit": "m",
    "Hc": 5,
    "Hc_unit": "m",
    "material": "steel",
    "beta": 2.5
  }
}
```

**Workflow Execution:**

1. **Input Validation:**
   - ✅ Q = 500 m³/ngày (valid range: 1-100000)
   - ✅ t = 25°C (valid range: 0-100)
   - ✅ L = 1000 m (valid range: 1-100000)
   - ✅ Material = "steel" (valid enum)
   - ✅ All required fields present

2. **Calculation:**
   - Convert Q to m³/s: 500 / 86400 = 0.005787 m³/s
   - Calculate velocity: v = 1.2 m/s (suction) or 2.4 m/s (discharge)
   - Calculate diameter: D = √(4Q/πv)
   - Calculate Reynolds: Re = vD/ν
   - Calculate friction factor: λ (Colebrook-White)
   - Calculate headloss: H₁ = H_tt + H_cb

3. **Result Validation:**
   - ✅ Velocity within TCVN 33-2006 range
   - ✅ Diameter within standard pipe sizes
   - ✅ Headloss reasonable

4. **Output:**
```json
{
  "module": 1,
  "results": {
    "Q": 0.005787,
    "Q_unit": "m³/s",
    "v": 1.2,
    "v_unit": "m/s",
    "D": 0.0784,
    "D_unit": "m",
    "Re": 94200,
    "lambda": 0.023,
    "H1": 8.5,
    "H1_unit": "m",
    "Hyc": 13.5,
    "Hyc_unit": "m"
  },
  "validation": {
    "status": "passed",
    "warnings": []
  }
}
```

---

### VI.10.2 Example 2: Module Chain Calculation / Ví dụ 2: Tính toán chuỗi module

**Scenario:** Full treatment chain for large-scale water treatment plant

**Input:**
```json
{
  "chain": [1, 2, 3, 4, 5],
  "module_1": {
    "Q": 5000,
    "Q_unit": "m³/ngày",
    "t": 25,
    "L": 2000,
    "Hc": 10,
    "material": "steel"
  },
  "module_2": {
    "C_Fe2": 5,
    "C_H2S": 2,
    "A": 50,
    "eta": 0.85
  },
  "module_3": {
    "k_Fe": 0.5,
    "k_H2S": 1.0,
    "t_mix": 30
  },
  "module_4": {
    "alpha": 1.2,
    "U_o": 0.5,
    "H": 3.5
  },
  "module_5": {
    "v_filter": 8,
    "q_backwash": 15,
    "t_backwash": 10
  }
}
```

**Workflow Execution:**

1. **Module 1 Calculation:**
   - Input: Q = 5000 m³/ngày, t = 25°C, L = 2000 m
   - Output: Q = 0.05787 m³/s, v = 2.4 m/s, D = 0.175 m, H₁ = 15.2 m

2. **Data Flow: Module 1 → Module 2:**
   - Extract: Q = 0.05787 m³/s, t = 25°C
   - Transform: Q = 208.3 m³/h
   - Pass to Module 2

3. **Module 2 Calculation:**
   - Input: Q = 208.3 m³/h (from Module 1), C_Fe2 = 5 mg/l, C_H2S = 2 mg/l
   - Output: C_phun = 4.17 m/h, C_thực = 7.03 mg/l

4. **Data Flow: Module 2 → Module 3:**
   - Extract: Q = 208.3 m³/h, C_thực = 7.03 mg/l
   - Pass to Module 3

5. **Module 3 Calculation:**
   - Input: Q = 208.3 m³/h, C_thực = 7.03 mg/l (from Module 2)
   - Output: V = 6.25 m³, t_mix = 0.03 h, L = 2.5 m, W = 2.5 m, H = 1.0 m

6. **Data Flow: Module 3 → Module 4:**
   - Extract: Q = 208.3 m³/h
   - Pass to Module 4

7. **Module 4 Calculation:**
   - Input: Q = 208.3 m³/h (from Module 3), α = 1.2, U_o = 0.5 mm/s
   - Output: Q₁ = 250 m³/h, F = 138.9 m², D = 13.3 m, R = 13.3 m, H = 3.5 m

8. **Data Flow: Module 4 → Module 5:**
   - Extract: Q = 250 m³/h
   - Pass to Module 5

9. **Module 5 Calculation:**
   - Input: Q = 250 m³/h (from Module 4), v_filter = 8 m/h
   - Output: f₁ = 31.25 m², D = 6.3 m, F₁ = 31.2 m², v_actual = 8.0 m/h

10. **Aggregate Results:**
    - Combine all module results
    - Validate chain consistency
    - Generate comprehensive report

---

### VI.10.3 Example 3: Module Chain Recommendation / Ví dụ 3: Đề xuất chuỗi module

**Scenario:** User needs recommendation for medium-scale project

**Input:**
```json
{
  "Q": 500,
  "Q_unit": "m³/ngày",
  "scale": "medium",
  "water_quality": {
    "Fe2_plus": 3,
    "H2S": 1,
    "turbidity": "medium"
  },
  "budget": "moderate",
  "space": "adequate"
}
```

**Workflow Execution:**

1. **Scale Analysis:**
   - Q = 500 m³/ngày → Medium scale (100-1000 m³/ngày)
   - Base recommendation: 1→3→4→5

2. **Water Quality Analysis:**
   - Fe²⁺ = 3 mg/l (moderate) → Module 3 recommended
   - H₂S = 1 mg/l (low) → Module 2 optional
   - Turbidity = medium → Module 4 required

3. **Budget & Space Analysis:**
   - Budget = moderate → Can include Module 3
   - Space = adequate → Can include all modules

4. **Recommendation:**
```json
{
  "recommended_chains": [
    {
      "chain": [1, 3, 4, 5],
      "confidence": 0.9,
      "reason": "Optimal for medium scale with moderate Fe²⁺ and H₂S",
      "description": "Pipe → Mixing → Sedimentation → Filtration"
    },
    {
      "chain": [1, 2, 3, 4, 5],
      "confidence": 0.7,
      "reason": "Full treatment for higher quality output",
      "description": "Full chain with aeration"
    }
  ],
  "alternatives": [
    {
      "chain": [1, 4, 5],
      "confidence": 0.6,
      "reason": "Simplified chain if budget is limited",
      "description": "Pipe → Sedimentation → Filtration"
    }
  ]
}
```

---

## VI.11 Conclusion — Kết luận

**EN:**

This document defines comprehensive workflows for the XLNC Automated Water Treatment Calculation System. The workflows ensure:

- **Accuracy:** All calculations follow validated engineering formulas and Vietnamese technical standards
- **Consistency:** Standardized processes for all module calculations and data flow
- **Reliability:** Comprehensive validation and error handling at every step
- **Usability:** Clear workflows that guide users through complex calculations
- **Flexibility:** Support for single modules, module chains, and intelligent recommendations

The system is designed to support engineers in designing water treatment systems efficiently and accurately, complying with TCVN 33-2006 and TCVN 7222:2002 standards.

**VI:**

Tài liệu này định nghĩa các quy trình làm việc toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Các quy trình đảm bảo:

- **Độ chính xác:** Tất cả tính toán tuân theo công thức kỹ thuật đã được kiểm chứng và tiêu chuẩn kỹ thuật Việt Nam
- **Tính nhất quán:** Quy trình chuẩn hóa cho tất cả tính toán module và dòng chảy dữ liệu
- **Độ tin cậy:** Xác thực và xử lý lỗi toàn diện ở mọi bước
- **Khả năng sử dụng:** Quy trình rõ ràng hướng dẫn người dùng qua các tính toán phức tạp
- **Tính linh hoạt:** Hỗ trợ module đơn lẻ, chuỗi module và đề xuất thông minh

Hệ thống được thiết kế để hỗ trợ kỹ sư thiết kế hệ thống xử lý nước hiệu quả và chính xác, tuân thủ các tiêu chuẩn TCVN 33-2006 và TCVN 7222:2002.

**Hóa phàm:**

Phần này mô tả chi tiết từng bước mà hệ thống phải thực hiện để tính toán và xử lý dữ liệu. Từ tính toán module đơn lẻ đến chuỗi module phức tạp, từ đề xuất tự động đến xuất báo cáo, tất cả đều được quy định rõ ràng để đảm bảo hệ thống hoạt động chính xác và đáng tin cậy.

---

**KẾT THÚC PHẦN VI. WORKFLOW & AUTOMATION**

*Phần này cung cấp đầy đủ các quy trình làm việc cho hệ thống tính toán tự động xử lý nước XLNC, bao gồm quy trình tính toán module đơn lẻ, chuỗi module, đề xuất module, dòng chảy dữ liệu, xác thực, xử lý lỗi và xuất báo cáo. Phần này bổ sung và chi tiết hóa nội dung trong Phần V (Functional Requirements) và hỗ trợ triển khai thực tế của hệ thống.*