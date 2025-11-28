# Chunk 02: Single Module Calculation Workflow / Quy trình Tính toán Module Đơn lẻ

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_02`  
**Section:** VI.2 Single Module Calculation Workflow  
**Word Count:** ~800 words  
**Retrieval Keywords:** single module workflow, input validation, unit normalization, calculation execution, result validation, output formatting, module-specific workflows, Module 1, Module 2, Module 3, Module 4, Module 5  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_01`, `06_WORKFLOW_AUTOMATION_chunk_03`, `05_FUNCTIONAL_REQUIREMENTS_chunk_02`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_2`

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

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_01`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_03` (Module Chain Calculation Workflow)

