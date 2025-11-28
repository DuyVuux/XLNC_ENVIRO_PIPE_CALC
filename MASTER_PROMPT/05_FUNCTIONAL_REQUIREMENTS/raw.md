# V. FUNCTIONAL REQUIREMENTS / YÊU CẦU CHỨC NĂNG

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnV_Functional_Requirement.md` - phần định nghĩa yêu cầu chức năng chi tiết cho hệ thống XLNC. File này mô tả user stories, acceptance criteria, inputs/outputs cho từng module.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Hiểu user stories và acceptance criteria cho 5 module
2. Nắm inputs/outputs chi tiết của từng module
3. Hiểu cross-module rules (unit consistency, error handling, safety margins)
4. Nắm non-functional requirements (performance, scalability, security)
5. Tham chiếu đúng khi implement hoặc test chức năng

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement chức năng mới
- Viết test cases
- Thiết kế UI/UX
- Validate requirements

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng user story (ví dụ: "Theo US-01, hệ thống phải hỗ trợ chọn 1-5 module...")
- Tuân thủ acceptance criteria khi implement
- Đảm bảo inputs/outputs khớp với specification

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement chức năng:
1. **Bước 1:** Xác định user story liên quan
2. **Bước 2:** Kiểm tra acceptance criteria
3. **Bước 3:** Xác định inputs/outputs cần thiết
4. **Bước 4:** Áp dụng cross-module rules
5. **Bước 5:** Đảm bảo non-functional requirements

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI đáp ứng tất cả acceptance criteria
- PHẢI tuân thủ cross-module rules
- PHẢI đảm bảo non-functional requirements
- PHẢI validate inputs/outputs theo specification

**G. Examples / Ví dụ:**

**Ví dụ 1 - Implement module selection:**
> "Theo US-01, hệ thống phải hỗ trợ chọn 1-5 module với flexible ordering. Acceptance criteria: validate module dependencies, provide recommendations."

**Ví dụ 2 - Input validation:**
> "Theo US-02, hệ thống phải accept inputs với explicit units. Input 'Q = 500' (thiếu unit) → Error: 'Unit required. Expected: m³/ngày, m³/h, m³/s'"

---

*(EN + VI, chuẩn quốc tế, đầy đủ cho 5 module XLNC)*

---

## V.1 Overview — Tổng quan

**EN:**

This section defines the complete functional requirements of the Automated Water Treatment Calculation System (XLNC). The system is structured as 5 independent modules that can be combined flexibly to form processing chains. Each module has specific inputs, outputs, acceptance criteria, constraints, and edge cases. The requirements are based on Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and international engineering practices.

**VI:**

Mục này mô tả toàn bộ yêu cầu chức năng của hệ thống tính toán tự động xử lý nước XLNC. Hệ thống được cấu trúc thành 5 module độc lập có thể kết hợp linh hoạt để tạo thành chuỗi xử lý. Mỗi module có đầu vào, đầu ra, tiêu chí chấp nhận, ràng buộc và trường hợp đặc biệt cụ thể. Các yêu cầu dựa trên tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002) và thực hành kỹ thuật quốc tế.

**Modules included:**

1. **Module 1 — Pipe Hydraulics / Tính toán đường ống**
2. **Module 2 — Rainfall Aeration / Giàn phun mưa**
3. **Module 3 — Rapid Mixing Tank / Ngăn trộn phản ứng**
4. **Module 4 — Sedimentation Tank / Bể lắng**
5. **Module 5 — Filtration Unit / Bể lọc**

**Hóa phàm:**

Phần này liệt kê tất cả các chức năng mà hệ thống phải làm được, từ nhập liệu đến tính toán và xuất kết quả cho 5 module xử lý nước.

---

## V.2 General User Stories — User Stories tổng quát

### US-01 — Select Modules / Chọn module

**EN:** As a user, I want to select one or multiple treatment modules so that I can design the processing chain that fits my project requirements and scale.

**VI:** Là người dùng, tôi muốn chọn một hoặc nhiều module xử lý để xây dựng chuỗi công nghệ phù hợp với yêu cầu và quy mô dự án.

**Acceptance Criteria:**
- System must support selection of 1-5 modules
- System must allow flexible module ordering
- System must validate module dependencies (e.g., Module 2 requires Module 1 output)
- System must provide module chain recommendations based on project scale and water quality

**Priority:** High

---

### US-02 — Input Parameters / Nhập thông số

**EN:** As a user, I want to enter design parameters and constraints for each module with clear unit specifications so that the system can perform accurate calculations.

**VI:** Là người dùng, tôi muốn nhập thông số thiết kế và ràng buộc cho từng module với đơn vị rõ ràng để hệ thống có thể thực hiện tính toán chính xác.

**Acceptance Criteria:**
- System must accept inputs with explicit units (e.g., Q = 500 m³/ngày, not Q = 500)
- System must support multiple unit systems (SI, Imperial) with automatic conversion
- System must validate input ranges against technical standards (TCVN 33-2006)
- System must provide default values for optional parameters with clear documentation
- System must flag invalid inputs and suggest corrections

**Priority:** High

---

### US-03 — Automatic Calculation / Tính toán tự động

**EN:** As a user, I want the system to automatically compute all hydraulic/chemical parameters using validated engineering formulas so that I get accurate design results.

**VI:** Là người dùng, tôi muốn hệ thống tự động tính các thông số thủy lực/hóa học bằng công thức kỹ thuật đã được kiểm chứng để có kết quả thiết kế chính xác.

**Acceptance Criteria:**
- System must use formulas from recognized sources (TCVN, engineering handbooks)
- System must show intermediate calculation steps
- System must cite formula sources (e.g., "Darcy-Weisbach equation, TCVN 33-2006")
- System must handle unit conversions automatically
- System must complete calculation within 5 seconds for standard project

**Priority:** High

---

### US-04 — Review Outputs / Xem kết quả

**EN:** As a user, I want to see structured, unit-consistent results with intermediate steps and formula references so that I can verify and understand the calculations.

**VI:** Là người dùng, tôi muốn xem kết quả có cấu trúc, chuẩn đơn vị, có các bước trung gian và tham chiếu công thức để có thể kiểm tra và hiểu rõ tính toán.

**Acceptance Criteria:**
- Results must include all calculated parameters with units
- Results must show calculation steps (formula → substitution → result)
- Results must include formula sources and references
- Results must be presented in both technical format and plain language ("Hóa phàm")
- Results must be exportable in JSON format for machine processing

**Priority:** High

---

### US-05 — Export Report / Xuất báo cáo

**EN:** As a user, I want to export the calculation report in multiple formats (PDF/Markdown/Excel) so that I can share results with stakeholders and archive project documentation.

**VI:** Là người dùng, tôi muốn xuất báo cáo tính toán ở nhiều định dạng (PDF/Markdown/Excel) để có thể chia sẻ kết quả với các bên liên quan và lưu trữ tài liệu dự án.

**Acceptance Criteria:**
- System must generate PDF reports with company template
- System must include all calculation steps, formulas, and results
- System must include charts and diagrams where applicable
- System must support bilingual output (EN + VI)
- System must complete report generation within 2 minutes for standard project

**Priority:** Medium

---

### US-06 — Error Validation / Kiểm tra lỗi

**EN:** As a user, I want the system to validate inputs and warn me about out-of-range values so that I can correct errors before calculation.

**VI:** Là người dùng, tôi muốn hệ thống cảnh báo khi thông số nhập không hợp lệ để có thể sửa lỗi trước khi tính toán.

**Acceptance Criteria:**
- System must validate all inputs before calculation
- System must check values against reference ranges (IV.5)
- System must flag values exceeding TCVN limits (e.g., Vd > 2.4 m/s)
- System must provide specific error messages with suggested corrections
- System must prevent calculation if critical inputs are missing or invalid

**Priority:** High

---

### US-07 — Module Chain Recommendation / Đề xuất chuỗi module

**EN:** As a user, I want the system to recommend appropriate module chains based on project scale and water quality so that I can make informed design decisions.

**VI:** Là người dùng, tôi muốn hệ thống đề xuất chuỗi module phù hợp dựa trên quy mô dự án và chất lượng nước để có thể đưa ra quyết định thiết kế đúng đắn.

**Acceptance Criteria:**
- System must analyze project scale (small < 100 m³/day, medium 100-1000 m³/day, large > 1000 m³/day)
- System must analyze water quality parameters (Fe²⁺, H₂S, TSS, turbidity)
- System must recommend module chains (e.g., 1→4→5 for small projects, 1→2→3→4→5 for large projects)
- System must explain reasoning for recommendations
- System must allow user to override recommendations

**Priority:** Medium

---

### US-08 — Data Flow Between Modules / Dòng chảy dữ liệu giữa module

**EN:** As a user, I want data to flow automatically between connected modules so that I don't have to re-enter information manually.

**VI:** Là người dùng, tôi muốn dữ liệu tự động truyền giữa các module được kết nối để không phải nhập lại thông tin thủ công.

**Acceptance Criteria:**
- System must automatically pass output from Module N to input of Module N+1
- System must handle unit conversions between modules (e.g., Q from m³/s to m³/h)
- System must allow user to override auto-filled values
- System must show data flow diagram
- System must validate data consistency across modules

**Priority:** High

---

## V.3 Functional Requirements by Module — Yêu cầu cho từng module

### Module 1 — Pipe Hydraulics (Tính toán đường ống)

#### V.3.1.1 User Stories

**US-P1:** As a user, I want to enter flowrate, pipe material, roughness, and length so that the system can calculate pipe diameter and head loss.

**US-P2:** As a user, I want the system to calculate velocity, diameter, Reynolds number, friction factor, and headloss automatically.

**US-P3:** As a user, I want the system to select standard pipe diameters from TCVN standards so that I can use commercially available pipes.

**US-P4:** As a user, I want the system to calculate required pump head (Hyc) so that I can select appropriate pumps.

#### V.3.1.2 Acceptance Criteria

**AC-P1:** The system must compute velocity within ±3% tolerance compared to manual calculations.

**AC-P2:** The system must compute recommended pipe diameter using Darcy-Weisbach or Hazen-Williams depending on user selection, with automatic selection of nearest standard diameter.

**AC-P3:** Headloss results must include both friction losses (Htt) and minor losses (Hcb), with formula citations.

**AC-P4:** The system must validate velocity against TCVN 33-2006 limits:
- Suction velocity (Vh) ≤ 1.2 m/s
- Discharge velocity (Vd) ≤ 2.4 m/s

**AC-P5:** The system must calculate Reynolds number and classify flow regime (laminar < 2000, transition 2000-4000, turbulent > 4000).

**AC-P6:** The system must use correct friction factor (λ) based on Reynolds number and relative roughness, using Moody chart or Colebrook-White equation.

#### V.3.1.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/s, m³/h, m³/ngày | Flowrate | Yes | - | User input |
| L | m | Pipe length | Yes | - | User input |
| Material | enum | Pipe material (PVC, HDPE, Steel, Cast Iron, Concrete) | Yes | - | User input |
| ε (roughness) | mm, m | Absolute roughness | Conditional* | From lookup table | User input or lookup |
| t (temperature) | °C | Water temperature | Yes | 20°C | User input |
| H_ra | m | Outlet water level height | Yes | - | User input |
| H_vao | m | Inlet water level height | Yes | - | User input |
| β (local loss coefficient) | - | Local loss coefficient for fittings | No | 0 | User input or lookup |
| Fitting types | list | List of fittings (valves, elbows, tees) | No | [] | User input |

*If material is provided, system looks up ε from reference table (IV.4.1). If ε is provided directly, material lookup is skipped.

#### V.3.1.4 Outputs

| Parameter | Unit | Description | Formula Source |
|-----------|------|-------------|----------------|
| D_h (calculated) | m, mm | Calculated suction pipe diameter | D_h = √(4Q/πV_h), TCVN 33-2006 |
| D_h (selected) | m, mm | Selected standard suction pipe diameter | TCVN standard diameters |
| D_d (calculated) | m, mm | Calculated discharge pipe diameter | D_d = √(4Q/πV_d), TCVN 33-2006 |
| D_d (selected) | m, mm | Selected standard discharge pipe diameter | TCVN standard diameters |
| V_h (actual) | m/s | Actual velocity in suction pipe | V = 4Q/(πD²) |
| V_d (actual) | m/s | Actual velocity in discharge pipe | V = 4Q/(πD²) |
| Re | - | Reynolds number | Re = VD/ν, IV.2.1 |
| Flow regime | enum | Flow classification (laminar/transition/turbulent) | Based on Re |
| α (relative roughness) | - | Relative roughness | α = ε/D, IV.2.1 |
| λ (friction factor) | - | Friction factor | Moody chart or Colebrook-White, IV.2.1 |
| H_tt | m | Friction head loss | H_tt = λ·L·V²/(D·2g), Darcy-Weisbach, IV.2.1 |
| H_cb | m | Local head loss | H_cb = β·V²/(2g), IV.2.1 |
| H_1 | m | Total head loss | H_1 = H_tt + H_cb, IV.2.1 |
| H_c | m | Static head difference | H_c = H_ra - H_vao, IV.2.1 |
| H_yc | m | Required pump head | H_yc = H_1 + H_c, IV.2.1 |

#### V.3.1.5 Calculation Steps

1. **Convert flowrate to m³/s** (if needed)
2. **Look up roughness (ε)** from material table (IV.4.1) or use provided value
3. **Look up kinematic viscosity (ν)** from temperature table (IV.4.2)
4. **Calculate suction pipe diameter:** D_h = √(4Q/πV_h) where V_h = 1.2 m/s
5. **Select standard diameter** for suction pipe (nearest larger value)
6. **Calculate discharge pipe diameter:** D_d = √(4Q/πV_d) where V_d = 2.4 m/s
7. **Select standard diameter** for discharge pipe (nearest larger value)
8. **Calculate actual velocities** using selected diameters
9. **Calculate relative roughness:** α = ε/D
10. **Calculate Reynolds number:** Re = VD/ν
11. **Determine flow regime** based on Re
12. **Calculate friction factor (λ)** using appropriate method:
    - If Re < 2000: λ = 64/Re (laminar)
    - If Re > 4000: Use Colebrook-White or Moody chart (turbulent)
    - If 2000 < Re < 4000: Use turbulent formula with warning (transition)
13. **Calculate friction head loss:** H_tt = λ·L·V²/(D·2g)
14. **Calculate local head loss:** H_cb = β·V²/(2g) for each fitting, sum total
15. **Calculate total head loss:** H_1 = H_tt + H_cb
16. **Calculate static head:** H_c = H_ra - H_vao
17. **Calculate required pump head:** H_yc = H_1 + H_c
18. **Validate results** against TCVN 33-2006 limits

#### V.3.1.6 Constraints

- V_h must be ≤ 1.2 m/s (TCVN 33-2006)
- V_d must be ≤ 2.4 m/s (TCVN 33-2006)
- Q must be > 0
- L must be > 0
- Temperature must be 0°C < t < 100°C
- Roughness (ε) must match material type or be within reasonable range

#### V.3.1.7 Edge Cases

- **Very low flowrates (laminar regime, Re < 2000):** Use λ = 64/Re formula
- **Very high flowrates (pipe diameter > DN1000):** Warn user about potential cost and installation challenges
- **Multiple fittings:** Sum all β coefficients: β_total = Σβ_i
- **Missing material specification:** Request user input or use conservative default (e.g., new steel pipe)
- **Extreme temperatures (< 0°C or > 100°C):** Flag and request confirmation

---

### Module 2 — Rainfall Aeration / Giàn phun mưa

#### V.3.2.1 User Stories

**US-A1:** As a user, I want to enter water flow, nozzle type, spray height, and oxygen transfer efficiency so that the system can calculate DO increase and spray intensity.

**US-A2:** As a user, I want the system to calculate oxygen requirements for Fe²⁺ and H₂S oxidation reactions.

**US-A3:** As a user, I want the system to evaluate whether available oxygen is sufficient for required reactions.

**US-A4:** As a user, I want the system to recommend solutions when oxygen is insufficient.

#### V.3.2.2 Acceptance Criteria

**AC-A1:** Oxygen increase must be calculated using KLa and empirical efficiency with formula citation.

**AC-A2:** Spray intensity must meet TCVN/QCVN allowable ranges (1-10 m/h).

**AC-A3:** The system must calculate total oxygen requirement including saturation, Fe²⁺ oxidation, and H₂S oxidation.

**AC-A4:** The system must compare actual dissolved oxygen with required oxygen and provide clear assessment.

**AC-A5:** The system must recommend solutions when oxygen is insufficient (increase efficiency, increase area, reduce concentrations).

#### V.3.2.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/s, m³/h | Water flowrate | Yes | From Module 1 | User input or Module 1 |
| t (temperature) | °C | Water temperature | Yes | 20°C | User input |
| C(Fe²⁺) | mg/l | Initial Fe²⁺ concentration | No | 0 | User input |
| C(H₂S) | mg/l | Initial H₂S concentration | No | 0 | User input |
| A (spray area) | m² | Aeration/spray tower area | Yes | - | User input |
| η (efficiency) | - | Aeration efficiency | Yes | 0.8 | User input (0.7-0.9) |
| Nozzle type | enum | Nozzle type (optional) | No | - | User input |

#### V.3.2.4 Outputs

| Parameter | Unit | Description | Formula Source |
|-----------|------|-------------|----------------|
| C_ox | mg/l | Saturated oxygen concentration | C_ox = 468/(31.6+t), IV.2.2 |
| O₂_Fe | mg/l | Oxygen required for Fe²⁺ oxidation | O₂ = 0.143×C(Fe²⁺), IV.2.2 |
| O₂_H₂S | mg/l | Oxygen required for H₂S oxidation | O₂ = 0.47×C(H₂S), IV.2.2 |
| C_ht | mg/l | Total oxygen required | C_ht = 0.47×C(H₂S) + 0.143×C(Fe²⁺) + C_ox, IV.2.2 |
| C_phun | m/h | Spray intensity | C_phun = Q/A, IV.2.2 |
| C_thực | mg/l | Actual dissolved oxygen after aeration | C_thực = C_ox × η, IV.2.2 |
| O₂_sufficient | boolean | Whether oxygen is sufficient | C_thực ≥ C_ht |
| O₂_deficit | mg/l | Oxygen deficit if insufficient | O₂_deficit = C_ht - C_thực (if C_thực < C_ht) |
| Recommendations | list | Recommended solutions if insufficient | System logic |

#### V.3.2.5 Calculation Steps

1. **Receive flowrate Q** from Module 1 or user input
2. **Convert Q to m³/h** if needed
3. **Calculate saturated oxygen:** C_ox = 468/(31.6 + t)
4. **Calculate oxygen for Fe²⁺:** O₂_Fe = 0.143 × C(Fe²⁺) if C(Fe²⁺) > 0
5. **Calculate oxygen for H₂S:** O₂_H₂S = 0.47 × C(H₂S) if C(H₂S) > 0
6. **Calculate total oxygen required:** C_ht = O₂_H₂S + O₂_Fe + C_ox
7. **Calculate spray intensity:** C_phun = Q/A
8. **Validate spray intensity** against range 1-10 m/h
9. **Calculate actual dissolved oxygen:** C_thực = C_ox × η
10. **Compare oxygen availability:** Check if C_thực ≥ C_ht
11. **Calculate oxygen deficit** if insufficient
12. **Generate recommendations** if oxygen is insufficient:
    - Increase efficiency η (if η < 0.9)
    - Increase spray area A
    - Reduce Fe²⁺ or H₂S concentrations
    - Combination of above

#### V.3.2.6 Constraints

- Spray intensity (C_phun) must be 1-10 m/h
- Aeration efficiency (η) must be 0.7-0.9
- Temperature must be 0°C < t < 100°C
- Concentrations must be ≥ 0
- Spray area (A) must be > 0

#### V.3.2.7 Edge Cases

- **Temperature < 10°C:** Higher oxygen saturation, but may affect reaction rates
- **Very high Fe²⁺ or H₂S concentrations:** May require multiple aeration stages
- **Missing spray area:** System should calculate minimum required area based on Q and desired intensity
- **Zero Fe²⁺ and H₂S:** Only calculate saturation oxygen, skip oxidation calculations

---

### Module 3 — Rapid Mixing Tank / Ngăn trộn phản ứng

#### V.3.3.1 User Stories

**US-M1:** As a user, I want to enter reaction chemicals, mixing time, and initial concentrations so that the system can calculate mixing volume and reaction kinetics.

**US-M2:** As a user, I want the system to calculate G-value, reaction rates, and final concentrations after reaction time.

**US-M3:** As a user, I want the system to calculate reaction efficiency so that I can evaluate treatment effectiveness.

#### V.3.3.2 Acceptance Criteria

**AC-M1:** Mixing time must be within recommended ranges (10s-60min depending on mixing type) per TCVN 7222:2002.

**AC-M2:** G-value must meet coagulation/flocculation standards (typically 300-1000 s⁻¹ for rapid mixing).

**AC-M3:** The system must calculate reaction rates using validated kinetic constants.

**AC-M4:** The system must calculate final concentrations after specified reaction time.

**AC-M5:** The system must calculate reaction efficiency as percentage of initial concentration removed.

#### V.3.3.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/s, m³/h | Water flowrate | Yes | From Module 2 | User input or Module 2 |
| t (mixing time) | s, min, h | Mixing/reaction time | Yes | - | User input |
| [Fe²⁺]_0 | mg/l | Initial Fe²⁺ concentration | No | 0 | User input or Module 2 |
| [H₂S]_0 | mg/l | Initial H₂S concentration | No | 0 | User input or Module 2 |
| C_thực | mg/l | Actual dissolved oxygen | Yes | From Module 2 | Module 2 output |
| k_Fe | l/mg·s | Rate constant for Fe²⁺ oxidation | No | 0.5 | User input (0.01-0.1 range) |
| k_H₂S | l/mg·s | Rate constant for H₂S oxidation | No | 1.0 | User input (0.05-0.2 range) |
| L:W:H ratio | - | Tank dimension ratio | No | 4:2:1 | User input |
| Target G | s⁻¹ | Target velocity gradient | No | 500 | User input |

#### V.3.3.4 Outputs

| Parameter | Unit | Description | Formula Source |
|-----------|------|-------------|----------------|
| V | m³ | Mixing tank volume | V = Q × t, IV.2.3 |
| L | m | Tank length | L = V/(H×W), IV.2.3 |
| W | m | Tank width | Based on L:W:H ratio |
| H | m | Tank height | Based on L:W:H ratio |
| r_Fe | mg/l·s | Fe²⁺ oxidation rate | r_Fe = k_Fe × [Fe²⁺] × [O₂], IV.2.3 |
| r_H₂S | mg/l·s | H₂S oxidation rate | r_H₂S = k_H₂S × [H₂S] × [O₂], IV.2.3 |
| [Fe²⁺]_t | mg/l | Fe²⁺ concentration after time t | [Fe²⁺]_t = [Fe²⁺]_0 × e^(-k_Fe×[O₂]×t), IV.2.3 |
| [H₂S]_t | mg/l | H₂S concentration after time t | [H₂S]_t = [H₂S]_0 × e^(-k_H₂S×[O₂]×t), IV.2.3 |
| η_Fe | % | Fe²⁺ removal efficiency | η = ([Fe²⁺]_0 - [Fe²⁺]_t)/[Fe²⁺]_0 × 100%, IV.2.3 |
| η_H₂S | % | H₂S removal efficiency | η = ([H₂S]_0 - [H₂S]_t)/[H₂S]_0 × 100%, IV.2.3 |
| G | s⁻¹ | Velocity gradient (if power provided) | G = √(P/(μ×V)), IV.2.3 |
| P | kW | Required mixing power (if G provided) | P = G² × μ × V, IV.2.3 |

#### V.3.3.5 Calculation Steps

1. **Receive flowrate Q** from Module 2 or user input
2. **Convert Q and t to consistent units** (e.g., both m³/s and s, or both m³/h and h)
3. **Calculate mixing volume:** V = Q × t
4. **Select or calculate tank dimensions:**
   - If L:W:H ratio provided: Calculate L, W, H from V and ratio
   - If dimensions provided: Use directly
5. **Calculate Fe²⁺ oxidation rate:** r_Fe = k_Fe × [Fe²⁺]_0 × C_thực
6. **Calculate H₂S oxidation rate:** r_H₂S = k_H₂S × [H₂S]_0 × C_thực
7. **Convert reaction time to seconds** if needed
8. **Calculate final Fe²⁺ concentration:** [Fe²⁺]_t = [Fe²⁺]_0 × e^(-k_Fe × C_thực × t)
9. **Calculate final H₂S concentration:** [H₂S]_t = [H₂S]_0 × e^(-k_H₂S × C_thực × t)
10. **Calculate removal efficiencies:**
    - η_Fe = ([Fe²⁺]_0 - [Fe²⁺]_t)/[Fe²⁺]_0 × 100%
    - η_H₂S = ([H₂S]_0 - [H₂S]_t)/[H₂S]_0 × 100%
11. **Calculate G-value or mixing power** if required
12. **Validate mixing time** against recommended ranges (IV.4.5)
13. **Validate tank dimensions** for practical construction

#### V.3.3.6 Constraints

- Mixing time must be within recommended ranges:
  - Rapid mixing: 10-30 seconds
  - Slow mixing: 20-40 minutes
  - Reaction: 30-60 minutes
- Rate constants must be within reasonable ranges:
  - k_Fe: 0.01-0.1 l/mg·s
  - k_H₂S: 0.05-0.2 l/mg·s
- Tank dimensions must be practical (typically H = 2-5 m, W = 2-6 m)
- Concentrations must be ≥ 0

#### V.3.3.7 Edge Cases

- **Unusually high/low coagulant doses:** Flag and request confirmation
- **Very long reaction times (> 60 min):** May indicate need for larger tank or different treatment
- **Extremely high initial concentrations:** May require multiple reaction stages
- **Missing rate constants:** Use default values with warning, or request user input

---

### Module 4 — Sedimentation Tank / Bể lắng

#### V.3.4.1 User Stories

**US-S1:** As a user, I want to enter surface loading rate and detention time so that the system can compute required area, depth, and overflow rate.

**US-S2:** As a user, I want the system to calculate settling efficiency so that I can evaluate treatment performance.

**US-S3:** As a user, I want the system to design inclined plate settler dimensions based on standard formulas.

#### V.3.4.2 Acceptance Criteria

**AC-S1:** Surface loading must meet constraints 20-40 m³/m²·day for supply water, 0.5-1.5 m³/m²·h for wastewater per TCVN 7222:2002.

**AC-S2:** Overflow rate must not exceed design standard.

**AC-S3:** The system must calculate settling efficiency based on particle settling velocity and surface loading rate.

**AC-S4:** The system must use correct formula for inclined plate settler area calculation.

#### V.3.4.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/h, m³/ngày | Water flowrate | Yes | From Module 3 | User input or Module 3 |
| α (safety factor) | - | Safety factor | No | 1.05 | User input |
| U_o | m/s | Particle settling velocity | No | 0.00025 | User input or lookup |
| H | m | Inclined plate height | No | 0.867 | User input |
| W | m | Plate width | No | 0.05 | User input |
| θ (angle) | degrees | Inclination angle | No | 60° | User input |
| D:R ratio | - | Length to width ratio | No | 2.8:1 | User input |
| Tank depth | m | Settling tank depth | No | 3.0 | User input |

#### V.3.4.4 Outputs

| Parameter | Unit | Description | Formula Source |
|-----------|------|-------------|----------------|
| Q₁ | m³/h | Inlet flowrate with safety factor | Q₁ = α × Q, IV.2.4 |
| F | m² | Required surface area | F = Q₁/(U_o×H×cos(θ) + W×cos²(θ)), IV.2.4 |
| S | m² | Selected tank surface area | S = R × D |
| R | m | Tank width | Based on D:R ratio |
| D | m | Tank length | D = F/R (adjusted to meet S ≥ F) |
| H_tank | m | Tank depth | User input or default |
| V | m³ | Tank volume | V = S × H_tank, IV.2.4 |
| v | m/h | Surface settling velocity | v = Q₁/S, IV.2.4 |
| t_lắng | h, min | Settling time | t_lắng = V/Q₁, IV.2.4 |
| η | % | Settling efficiency | η = (U_o/v) × 100%, IV.2.4 |

#### V.3.4.5 Calculation Steps

1. **Receive flowrate Q** from Module 3 or user input
2. **Convert Q to m³/h** if needed
3. **Calculate inlet flowrate:** Q₁ = α × Q (with safety factor)
4. **Convert Q₁ to m³/s** for area calculation
5. **Look up or use particle settling velocity U_o** (default 0.00025 m/s)
6. **Calculate cos(θ) and cos²(θ)** for inclination angle
7. **Calculate required surface area:** F = Q₁/(U_o×H×cos(θ) + W×cos²(θ))
8. **Select tank dimensions:**
   - Choose tank depth H_tank (typically 2.5-4 m)
   - Choose width R based on D:R ratio
   - Calculate length D = F/R
   - Adjust to ensure S = R × D ≥ F
9. **Calculate actual surface area:** S = R × D
10. **Calculate tank volume:** V = S × H_tank
11. **Calculate surface settling velocity:** v = Q₁/S (in m/h)
12. **Convert U_o to m/h** for efficiency calculation: U_o (m/h) = U_o (m/s) × 3600
13. **Calculate settling time:** t_lắng = V/Q₁
14. **Calculate settling efficiency:** η = (U_o/v) × 100%
15. **Validate results:**
    - Check surface loading rate (Q₁/S) against TCVN limits
    - Check settling time against recommended ranges (IV.4.6)
    - Check efficiency (should be ≥ 70%)

#### V.3.4.6 Constraints

- Surface loading rate (SLR) must be:
  - 1-3 m³/m²·h for supply water
  - 0.5-1.5 m³/m²·h for wastewater
- Settling time must be:
  - 1.5-3 h for supply water
  - 2-4 h for wastewater
- Settling efficiency must be ≥ 70%
- Inclination angle typically 45-75 degrees
- Tank depth typically 2.5-4 m

#### V.3.4.7 Edge Cases

- **Sedimentation tanks with extreme aspect ratios:** Flag if D:R > 5:1 or < 1:1
- **Very low particle settling velocity:** May require pre-treatment or different technology
- **Very high flowrates:** May require multiple tanks in parallel
- **Missing particle settling velocity:** Use default with warning, or request user input based on particle analysis

---

### Module 5 — Filtration Unit / Bể lọc

#### V.3.5.1 User Stories

**US-F1:** As a user, I want to enter filtration rate, media type, and headloss limit so that the system can calculate filter area and number of cells.

**US-F2:** As a user, I want the system to calculate backwash intensity, flowrate, and volume so that I can design backwash system.

**US-F3:** As a user, I want the system to calculate all filter heights and total filter height so that I can design complete filter structure.

#### V.3.5.2 Acceptance Criteria

**AC-F1:** Filtration rate must fall within 6-15 m/h per TCVN 33-2006.

**AC-F2:** Backwash intensity must satisfy air-water backwash standards (12-15 l/s·m² for water-only, 8-12 l/s·m² for air-water).

**AC-F3:** The system must calculate all filter component heights (h₁ to h₈) according to standard design.

**AC-F4:** The system must calculate total headloss through filter media.

**AC-F5:** The system must calculate filter cycle time based on headloss development.

#### V.3.5.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/h | Water flowrate | Yes | From Module 4 | User input or Module 4 |
| v (filtration rate) | m/h | Filtration velocity | Yes | 8.0 | User input (6-10 m/h) |
| q (backwash intensity) | l/s·m² | Backwash intensity | Yes | 10.0 | User input (12-15 l/s·m²) |
| t_rửa | min | Backwash time | Yes | 5.0 | User input (5-10 min) |
| n (number of cells) | - | Number of filter cells | No | 1 | User input |
| d (drain pipe diameter) | m | Drain pipe diameter | No | 0.08 | User input |
| Filter type | enum | Filter type (gravity, pressure) | No | gravity | User input |
| Media type | enum | Filter media type | No | sand | User input |
| L₄ (media thickness) | m | Filter media thickness | No | 0.80 | User input |
| C (suspended solids) | mg/l | Inlet suspended solids | No | - | User input or Module 4 |

#### V.3.5.4 Outputs

| Parameter | Unit | Description | Formula Source |
|-----------|------|-------------|----------------|
| f₁ | m² | Calculated filter area | f₁ = Q/v, IV.2.5 |
| f₂ | m² | Drain pipe area | f₂ = π×d²/4, IV.2.5 |
| n | - | Number of drain pipes | User input or calculated |
| f₁' | m² | Total compartment area | f₁' = f₁ + f₂×n, IV.2.5 |
| D | m | Calculated filter diameter | D = √(4×f₁'/π), IV.2.5 |
| D_selected | m | Selected standard diameter | Standard sizes |
| F₁ | m² | Actual filter area | F₁ = f₁ - f₂, IV.2.5 |
| v_actual | m/h | Actual filtration velocity | v = Q/F₁, IV.2.5 |
| h₁ | m | Bottom collection height | Default 0.40 m |
| h₂ | m | Filter plate height | Default 0.20 m |
| h₃ | m | Support layer height | Default 0.10 m |
| h₄ | m | Filter media height | User input or default 0.80 m |
| h₅ | m | Water layer height | Default 0.50 m |
| h₆ | m | Top plate height | Default 0.20 m |
| h₇ | m | Backwash tank height | h₇ = (60×q×t)/(n×100), IV.2.5 |
| h₈ | m | Freeboard height | Default 0.80 m |
| H | m | Total filter height | H = Σh₁ to h₈, IV.2.5 |
| H₂ | m | Height to filter top | H₂ = h₁+h₂+h₃+h₄+h₅+h₆, IV.2.5 |
| Q_rửa | m³/h, l/s | Backwash flowrate | Q_rửa = q×F₁, IV.2.5 |
| V_rửa | m³ | Backwash volume | V_rửa = Q_rửa×t_rửa, IV.2.5 |
| T_lọc | h | Filter cycle time | T_lọc = (V_bùn×F₁)/(Q×C), IV.2.5 |
| Headloss | m | Total headloss through filter | Sum of component headlosses |

#### V.3.5.5 Calculation Steps

1. **Receive flowrate Q** from Module 4 or user input
2. **Convert Q to m³/h** if needed
3. **Calculate filter area:** f₁ = Q/v
4. **Calculate drain pipe area:** f₂ = π×d²/4
5. **Determine number of drain pipes (n)** from user input or calculate based on area
6. **Calculate total compartment area:** f₁' = f₁ + f₂×n
7. **Calculate filter diameter:** D = √(4×f₁'/π)
8. **Select standard diameter** (nearest larger value)
9. **Recalculate actual filter area:** F₁ = f₁ - f₂ (or adjust based on selected diameter)
10. **Calculate actual filtration velocity:** v_actual = Q/F₁
11. **Validate filtration velocity** (must be 6-10 m/h)
12. **Set component heights:**
    - h₁ = 0.40 m (bottom collection)
    - h₂ = 0.20 m (filter plate)
    - h₃ = 0.10 m (support layer)
    - h₄ = user input or 0.80 m (media)
    - h₅ = 0.50 m (water layer)
    - h₆ = 0.20 m (top plate)
    - h₈ = 0.80 m (freeboard)
13. **Calculate backwash tank height:** h₇ = (60×q×t_rửa)/(n×100)
14. **Calculate total height:** H = h₁ + h₂ + h₃ + h₄ + h₅ + h₆ + h₇ + h₈
15. **Calculate H₂:** H₂ = h₁ + h₂ + h₃ + h₄ + h₅ + h₆
16. **Calculate backwash flowrate:** Q_rửa = q × F₁ (convert units as needed)
17. **Calculate backwash volume:** V_rửa = Q_rửa × t_rửa
18. **Calculate filter cycle time** if C (suspended solids) is provided
19. **Calculate headloss components** (if detailed calculation required)
20. **Validate backwash intensity** (12-15 l/s·m² for water-only)

#### V.3.5.6 Constraints

- Filtration rate must be 6-10 m/h for gravity filters (TCVN 33-2006)
- Backwash intensity must be 12-15 l/s·m² for water-only backwash
- Backwash time must be 5-10 minutes
- Filter cycle time typically 12-48 hours
- Total headloss should not exceed 2.5-3.0 m before backwash

#### V.3.5.7 Edge Cases

- **Filter media mismatch with selected filtration rate:** Flag if media type doesn't support rate
- **Very high suspended solids:** May require shorter filter cycles or pre-treatment
- **Multiple filter cells:** Distribute flow evenly, calculate per cell
- **Missing suspended solids data:** Cannot calculate filter cycle, provide estimate based on typical values

---

## V.4 Cross-Module Rules — Quy tắc xuyên module

### CM-01: Unit Consistency / Nhất quán đơn vị

**EN:** All results must include units and unit conversions must be explicit. When data flows between modules, the system must automatically convert units to match receiving module requirements.

**VI:** Tất cả kết quả phải có đơn vị đầy đủ và chuyển đổi đơn vị phải minh bạch. Khi dữ liệu truyền giữa các module, hệ thống phải tự động chuyển đổi đơn vị để phù hợp với yêu cầu module nhận.

**Implementation:**
- Module 1 outputs Q in m³/s, but Module 2 may need m³/h → automatic conversion
- All intermediate calculations must preserve unit information
- Final outputs must display in user-selected units with conversion factors shown

---

### CM-02: Error Handling / Xử lý lỗi

**EN:** If a value is out of realistic range → return structured error with explanation + suggestion. System must not proceed with invalid data.

**VI:** Nếu giá trị bất thường → trả lỗi có cấu trúc kèm giải thích + gợi ý thay thế. Hệ thống không được tiếp tục với dữ liệu không hợp lệ.

**Error Structure:**
```json
{
  "error": true,
  "parameter": "V_d",
  "value": 2.45,
  "unit": "m/s",
  "limit": 2.4,
  "standard": "TCVN 33-2006",
  "message": "Discharge velocity exceeds TCVN limit",
  "suggestion": "Increase pipe diameter or reduce flowrate",
  "confidence": 0.2
}
```

---

### CM-03: Safety Margins / Hệ số an toàn

**EN:** Apply standard design safety factors (1.1–1.3 depending on module) unless user specifies otherwise. Always document safety factor usage.

**VI:** Dùng hệ số an toàn tiêu chuẩn 1.1–1.3 tùy module trừ khi người dùng chỉ định khác. Luôn ghi chép việc sử dụng hệ số an toàn.

**Safety Factors:**
- Module 4 (Sedimentation): α = 1.05 (default)
- Module 1 (Pipes): Consider 1.1-1.2 for pump selection
- User can override with explicit input

---

### CM-04: Standards Compliance / Tuân thủ tiêu chuẩn

**EN:** All calculations must use TCVN/QCVN references where applicable. System must flag non-compliance and recommend human review.

**VI:** Mọi tính toán phải tuân theo TCVN/QCVN khi áp dụng. Hệ thống phải đánh dấu không tuân thủ và đề xuất kiểm duyệt người.

**Compliance Checks:**
- V_h ≤ 1.2 m/s (TCVN 33-2006)
- V_d ≤ 2.4 m/s (TCVN 33-2006)
- v_filter = 6-10 m/h (TCVN 33-2006)
- q_backwash = 12-15 l/s·m² (TCVN 33-2006)
- SLR within ranges (TCVN 7222:2002)

---

### CM-05: Data Flow Validation / Kiểm tra dòng chảy dữ liệu

**EN:** When data flows from Module N to Module N+1, system must validate data consistency, unit compatibility, and value ranges before proceeding.

**VI:** Khi dữ liệu truyền từ Module N sang Module N+1, hệ thống phải kiểm tra tính nhất quán dữ liệu, tương thích đơn vị và khoảng giá trị trước khi tiếp tục.

**Validation Steps:**
1. Check required parameters are present
2. Verify unit compatibility (convert if needed)
3. Validate value ranges against receiving module constraints
4. Flag any inconsistencies for user review

---

### CM-06: Formula Source Citation / Trích dẫn nguồn công thức

**EN:** Every calculation step must cite formula source (TCVN standard, engineering handbook, equation name). System must never invent formulas.

**VI:** Mỗi bước tính toán phải trích dẫn nguồn công thức (tiêu chuẩn TCVN, sổ tay kỹ thuật, tên phương trình). Hệ thống không được tự tạo công thức.

**Citation Format:**
- "Darcy-Weisbach equation, TCVN 33-2006"
- "Colebrook-White equation, IV.2.1"
- "Oxygen saturation formula, IV.2.2"

---

## V.5 Edge Cases — Trường hợp đặc biệt

### EC-01: Extremely Low Flowrates

**Scenario:** Q < 10 m³/day, Re < 2000 (laminar flow)

**Handling:**
- Use laminar flow formula: λ = 64/Re
- Warn user about potential sedimentation issues
- Recommend minimum flowrate for practical operation
- Flag for human review if Q < 5 m³/day

---

### EC-02: Very High Flowrates

**Scenario:** Pipe diameter > DN1000, Q > 10,000 m³/day

**Handling:**
- Calculate normally but flag for cost review
- Warn about installation challenges
- Suggest multiple parallel lines if diameter exceeds practical limits
- Recommend expert consultation

---

### EC-03: Temperature Extremes

**Scenario:** Temperature < 10°C or > 40°C

**Handling:**
- For < 10°C: Higher oxygen saturation but may affect reaction rates
- For > 40°C: Lower oxygen saturation, may require cooling
- Flag and request confirmation
- Adjust viscosity and oxygen calculations accordingly

---

### EC-04: Unusually High/Low Coagulant Doses

**Scenario:** Coagulant dose outside typical range (e.g., > 100 mg/l or < 5 mg/l)

**Handling:**
- Flag as unusual
- Request confirmation
- Suggest alternative treatment if dose is impractical
- Recommend jar testing for optimization

---

### EC-05: Sedimentation Tanks with Extreme Aspect Ratios

**Scenario:** Length:Width ratio > 5:1 or < 1:1

**Handling:**
- Flag as non-standard design
- Warn about potential flow distribution issues
- Suggest optimal ratio (2:1 to 4:1)
- Recommend CFD analysis for extreme cases

---

### EC-06: Filter Media Mismatch

**Scenario:** Selected filtration rate incompatible with media type

**Handling:**
- Check media type against rate:
  - Sand: 6-10 m/h
  - Anthracite: 8-12 m/h
  - Dual media: 10-15 m/h
- Flag mismatch
- Suggest appropriate media or adjust rate

---

### EC-07: Missing Critical Inputs

**Scenario:** Required input not provided (e.g., Q missing, temperature missing)

**Handling:**
- Stop calculation
- Return structured error (CM-02)
- List all missing required inputs
- Suggest default values with impact assessment
- Request user confirmation before using defaults

---

### EC-08: Module Chain Dependencies

**Scenario:** User selects Module 3 without Module 2, but Module 3 needs C_thực from Module 2

**Handling:**
- Detect dependency violation
- Warn user about missing data
- Offer to:
  - Add required module to chain
  - Allow manual input of missing parameter
  - Use default value with warning

---

## V.6 Summary of Module IO — Tổng hợp IO

### Module Input/Output Matrix

| Module | Primary Inputs | Primary Outputs | Key Calculations |
|--------|---------------|-----------------|------------------|
| **Module 1** | Q, L, material, t, H_ra, H_vao | D_h, D_d, V_h, V_d, Re, λ, H_tt, H_cb, H_yc | Pipe diameter, headloss, pump head |
| **Module 2** | Q, t, C(Fe²⁺), C(H₂S), A, η | C_ox, C_phun, C_thực, C_ht, O₂_sufficient | Oxygen saturation, spray intensity, oxygen balance |
| **Module 3** | Q, t, [Fe²⁺]_0, [H₂S]_0, C_thực, k_Fe, k_H₂S | V, L×W×H, [Fe²⁺]_t, [H₂S]_t, η_Fe, η_H₂S | Mixing volume, reaction kinetics, removal efficiency |
| **Module 4** | Q, α, U_o, H, W, θ, D:R | Q₁, F, S, D×R×H, V, v, t_lắng, η | Settling area, tank dimensions, settling efficiency |
| **Module 5** | Q, v, q, t_rửa, n, d, media type | f₁, D, F₁, v_actual, H, h₁-h₈, Q_rửa, V_rửa, T_lọc | Filter area, dimensions, backwash parameters, cycle time |

### Data Flow Summary

**Module 1 → Module 2:**
- Q (m³/s) → Q (m³/h) [converted]
- v, D, Re, ε [optional, for reference]

**Module 2 → Module 3:**
- Q (m³/h) [unchanged]
- C_phun (m/h)
- C_thực (mg/l)
- C_ht (mg/l)

**Module 3 → Module 4:**
- Q (m³/h) [unchanged]
- t (h) [mixing time, for reference]
- L×W×H [tank dimensions, for reference]

**Module 4 → Module 5:**
- Q (m³/h) [unchanged]
- D×R×H [tank dimensions, for reference]
- Water quality parameters [if available]

---

## V.7 Non-Functional Requirements — Yêu cầu phi chức năng

### NFR-01: Performance / Hiệu suất

**EN:** System must complete calculations within acceptable time limits and handle concurrent users efficiently.

**VI:** Hệ thống phải hoàn thành tính toán trong thời gian chấp nhận được và xử lý hiệu quả nhiều người dùng đồng thời.

**Requirements:**
- **Calculation time:** Single module calculation must complete within 5 seconds for standard project
- **Chain calculation:** Full chain (5 modules) must complete within 30 seconds
- **Report generation:** PDF report generation must complete within 2 minutes for standard project
- **Concurrent users:** System must support at least 50 concurrent users without degradation
- **Response time:** API response time must be < 1 second for simple queries
- **Database queries:** Database queries must complete within 500ms for standard operations

**Priority:** High

---

### NFR-02: Scalability / Khả năng mở rộng

**EN:** System must be able to handle increasing load and data volume without major architectural changes.

**VI:** Hệ thống phải có khả năng xử lý tải và khối lượng dữ liệu tăng dần mà không cần thay đổi kiến trúc lớn.

**Requirements:**
- **Horizontal scaling:** System architecture must support horizontal scaling
- **Database scaling:** Database must support partitioning and replication
- **Caching:** System must implement caching for frequently accessed data (lookup tables, standard values)
- **Load balancing:** System must support load balancing for high availability

**Priority:** Medium

---

### NFR-03: Reliability / Độ tin cậy

**EN:** System must operate reliably with minimal downtime and data loss.

**VI:** Hệ thống phải hoạt động tin cậy với thời gian ngừng hoạt động tối thiểu và mất dữ liệu tối thiểu.

**Requirements:**
- **Uptime:** System must achieve 99.5% uptime (approximately 3.65 days downtime per year)
- **Data backup:** Automatic daily backups with 30-day retention
- **Error recovery:** System must recover gracefully from errors without data corruption
- **Transaction integrity:** All database transactions must be ACID compliant
- **Audit logging:** All calculations and data changes must be logged for audit trail

**Priority:** High

---

### NFR-04: Security / Bảo mật

**EN:** System must protect user data and ensure secure access control.

**VI:** Hệ thống phải bảo vệ dữ liệu người dùng và đảm bảo kiểm soát truy cập an toàn.

**Requirements:**
- **Authentication:** User authentication required for all operations
- **Authorization:** Role-based access control (RBAC) with different permission levels
- **Data encryption:** Sensitive data must be encrypted at rest and in transit
- **Input validation:** All user inputs must be validated and sanitized to prevent injection attacks
- **Session management:** Secure session management with timeout
- **API security:** API endpoints must use HTTPS and implement rate limiting

**Priority:** High

---

### NFR-05: Usability / Khả năng sử dụng

**EN:** System must be intuitive and easy to use for engineers with varying technical expertise.

**VI:** Hệ thống phải trực quan và dễ sử dụng cho các kỹ sư với trình độ kỹ thuật khác nhau.

**Requirements:**
- **User interface:** Clean, intuitive interface with clear navigation
- **Help system:** Contextual help and tooltips for all input fields
- **Error messages:** Clear, actionable error messages in Vietnamese and English
- **Form validation:** Real-time validation with immediate feedback
- **Responsive design:** Interface must work on desktop, tablet, and mobile devices
- **Accessibility:** Interface must meet WCAG 2.1 Level AA standards

**Priority:** High

---

### NFR-06: Maintainability / Khả năng bảo trì

**EN:** System must be easy to maintain, update, and extend with new features.

**VI:** Hệ thống phải dễ bảo trì, cập nhật và mở rộng với các tính năng mới.

**Requirements:**
- **Code quality:** Code must follow clean architecture principles and coding standards
- **Documentation:** Comprehensive documentation for code, APIs, and user guides
- **Modularity:** System must be modular to allow independent updates
- **Versioning:** API versioning to support backward compatibility
- **Testing:** Unit tests, integration tests, and end-to-end tests with > 80% code coverage

**Priority:** Medium

---

### NFR-07: Compatibility / Tương thích

**EN:** System must work across different browsers, operating systems, and devices.

**VI:** Hệ thống phải hoạt động trên các trình duyệt, hệ điều hành và thiết bị khác nhau.

**Requirements:**
- **Browsers:** Support for Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Operating systems:** Support for Windows, macOS, Linux
- **Mobile:** Responsive design for iOS and Android devices
- **Screen resolutions:** Support for resolutions from 1280x720 to 4K
- **Print compatibility:** Reports must print correctly on A4 and A3 paper sizes

**Priority:** Medium

---

### NFR-08: Localization / Địa phương hóa

**EN:** System must support multiple languages and regional standards.

**VI:** Hệ thống phải hỗ trợ nhiều ngôn ngữ và tiêu chuẩn khu vực.

**Requirements:**
- **Languages:** Primary Vietnamese, secondary English
- **Units:** Support for SI units (metric) and Imperial units with conversion
- **Standards:** Support for TCVN (Vietnam) with option for international standards (ISO, DIN)
- **Date/time formats:** Support for Vietnamese date format (DD/MM/YYYY) and ISO format
- **Number formats:** Support for Vietnamese number format (comma as decimal separator) and international format

**Priority:** Medium

---

## V.8 Integration Requirements — Yêu cầu tích hợp

### INT-01: Data Import / Nhập dữ liệu

**EN:** System must support importing data from external sources.

**VI:** Hệ thống phải hỗ trợ nhập dữ liệu từ các nguồn bên ngoài.

**Requirements:**
- **CSV import:** Import project parameters from CSV files
- **Excel import:** Import from Excel files (.xlsx, .xls)
- **JSON import:** Import from JSON format for programmatic access
- **Data validation:** Validate imported data before processing
- **Error handling:** Clear error messages for invalid import data

**Priority:** Medium

---

### INT-02: Data Export / Xuất dữ liệu

**EN:** System must support exporting results in multiple formats.

**VI:** Hệ thống phải hỗ trợ xuất kết quả ở nhiều định dạng.

**Requirements:**
- **PDF export:** Generate PDF reports with company template
- **Excel export:** Export calculation results to Excel format
- **JSON export:** Export data in JSON format for API integration
- **Markdown export:** Export reports in Markdown format
- **CSV export:** Export tabular data to CSV format

**Priority:** High

---

### INT-03: API Integration / Tích hợp API

**EN:** System must provide RESTful API for external system integration.

**VI:** Hệ thống phải cung cấp API RESTful để tích hợp với hệ thống bên ngoài.

**Requirements:**
- **REST API:** RESTful API following OpenAPI 3.0 specification
- **Authentication:** API key or OAuth 2.0 authentication
- **Rate limiting:** API rate limiting to prevent abuse
- **Versioning:** API versioning (v1, v2, etc.)
- **Documentation:** Complete API documentation with examples

**Priority:** Medium

---

## V.9 Testing Requirements — Yêu cầu kiểm thử

### TEST-01: Unit Testing / Kiểm thử đơn vị

**EN:** All calculation functions must have unit tests with > 80% code coverage.

**VI:** Tất cả các hàm tính toán phải có kiểm thử đơn vị với độ phủ mã > 80%.

**Requirements:**
- **Coverage:** Minimum 80% code coverage for calculation modules
- **Test cases:** Test cases for normal operation, edge cases, and error conditions
- **Test data:** Use validated test data from engineering handbooks
- **Automation:** Automated test execution in CI/CD pipeline

**Priority:** High

---

### TEST-02: Integration Testing / Kiểm thử tích hợp

**EN:** System must have integration tests for module chains and data flow.

**VI:** Hệ thống phải có kiểm thử tích hợp cho chuỗi module và dòng chảy dữ liệu.

**Requirements:**
- **Module chains:** Test all valid module chain combinations
- **Data flow:** Test data flow between modules with unit conversions
- **Error handling:** Test error propagation through module chains
- **Performance:** Test performance of full chain calculations

**Priority:** High

---

### TEST-03: Validation Testing / Kiểm thử xác thực

**EN:** System calculations must be validated against manual calculations and engineering standards.

**VI:** Tính toán của hệ thống phải được xác thực so với tính toán thủ công và tiêu chuẩn kỹ thuật.

**Requirements:**
- **Accuracy:** Results must match manual calculations within ±3% for standard cases
- **Standards compliance:** Results must comply with TCVN 33-2006 and TCVN 7222:2002
- **Reference data:** Use validated reference data from engineering projects
- **Expert review:** Critical calculations reviewed by domain experts

**Priority:** High

---

### TEST-04: User Acceptance Testing / Kiểm thử chấp nhận người dùng

**EN:** System must pass user acceptance testing with real-world scenarios.

**VI:** Hệ thống phải vượt qua kiểm thử chấp nhận người dùng với các tình huống thực tế.

**Requirements:**
- **Test scenarios:** Test with real project scenarios from company portfolio
- **User feedback:** Collect feedback from engineers and designers
- **Usability testing:** Conduct usability testing with target users
- **Performance testing:** Test with realistic data volumes and concurrent users

**Priority:** High

---

## V.10 Documentation Requirements — Yêu cầu tài liệu

### DOC-01: User Documentation / Tài liệu người dùng

**EN:** System must include comprehensive user documentation.

**VI:** Hệ thống phải bao gồm tài liệu người dùng đầy đủ.

**Requirements:**
- **User manual:** Complete user manual in Vietnamese and English
- **Quick start guide:** Step-by-step quick start guide for new users
- **Video tutorials:** Video tutorials for common workflows
- **FAQ:** Frequently asked questions with answers
- **Examples:** Example projects with step-by-step walkthroughs

**Priority:** High

---

### DOC-02: Technical Documentation / Tài liệu kỹ thuật

**EN:** System must include complete technical documentation for developers.

**VI:** Hệ thống phải bao gồm tài liệu kỹ thuật đầy đủ cho nhà phát triển.

**Requirements:**
- **API documentation:** Complete API documentation with examples
- **Architecture documentation:** System architecture and design decisions
- **Database schema:** Database schema documentation
- **Deployment guide:** Deployment and configuration guide
- **Troubleshooting guide:** Common issues and solutions

**Priority:** Medium

---

### DOC-03: Formula Documentation / Tài liệu công thức

**EN:** All formulas used in calculations must be documented with sources.

**VI:** Tất cả các công thức sử dụng trong tính toán phải được tài liệu hóa với nguồn.

**Requirements:**
- **Formula library:** Complete formula library with citations
- **Source references:** References to TCVN standards and engineering handbooks
- **Derivation:** Mathematical derivation where applicable
- **Limitations:** Formula limitations and applicable ranges
- **Examples:** Worked examples for each formula

**Priority:** High

---

## V.11 Compliance Requirements — Yêu cầu tuân thủ

### COMP-01: Standards Compliance / Tuân thủ tiêu chuẩn

**EN:** System must comply with Vietnamese technical standards and regulations.

**VI:** Hệ thống phải tuân thủ các tiêu chuẩn và quy định kỹ thuật Việt Nam.

**Requirements:**
- **TCVN compliance:** All calculations must comply with TCVN 33-2006 and TCVN 7222:2002
- **QCVN compliance:** Water quality outputs must comply with QCVN standards
- **Validation:** System must validate outputs against standard limits
- **Flagging:** System must flag non-compliant results for human review
- **Documentation:** All standard references must be documented

**Priority:** High

---

### COMP-02: Data Privacy / Bảo mật dữ liệu

**EN:** System must comply with data privacy regulations.

**VI:** Hệ thống phải tuân thủ các quy định về bảo mật dữ liệu.

**Requirements:**
- **Data encryption:** Encrypt sensitive user data
- **Access control:** Implement proper access control mechanisms
- **Audit logging:** Log all data access and modifications
- **Data retention:** Define and implement data retention policies
- **User consent:** Obtain user consent for data processing where required

**Priority:** High

---

## V.12 Change Management — Quản lý thay đổi

### CHG-01: Version Control / Kiểm soát phiên bản

**EN:** System must track changes to calculations, formulas, and configurations.

**VI:** Hệ thống phải theo dõi các thay đổi đối với tính toán, công thức và cấu hình.

**Requirements:**
- **Version history:** Maintain version history for all calculations
- **Formula versions:** Track formula changes and updates
- **Configuration versions:** Version control for system configurations
- **Rollback capability:** Ability to rollback to previous versions
- **Change log:** Maintain changelog for all system updates

**Priority:** Medium

---

### CHG-02: Backward Compatibility / Tương thích ngược

**EN:** System updates must maintain backward compatibility with existing projects.

**VI:** Các cập nhật hệ thống phải duy trì tương thích ngược với các dự án hiện có.

**Requirements:**
- **Project compatibility:** Existing projects must continue to work after updates
- **Data migration:** Automatic migration of old project data to new format
- **API compatibility:** Maintain API compatibility across versions
- **Deprecation policy:** Clear deprecation policy with advance notice
- **Migration tools:** Tools to migrate data between versions

**Priority:** Medium

---

## V.13 Summary — Tóm tắt

### Key Functional Requirements Summary

**EN:** This document defines comprehensive functional requirements for the XLNC Automated Water Treatment Calculation System, covering 5 independent modules that can be combined flexibly. Each module has detailed specifications for inputs, outputs, calculations, constraints, and edge cases. The system must comply with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and provide accurate, validated engineering calculations.

**VI:** Tài liệu này định nghĩa các yêu cầu chức năng toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC, bao gồm 5 module độc lập có thể kết hợp linh hoạt. Mỗi module có thông số kỹ thuật chi tiết cho đầu vào, đầu ra, tính toán, ràng buộc và trường hợp đặc biệt. Hệ thống phải tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002) và cung cấp các tính toán kỹ thuật chính xác, đã được xác thực.

**Key Highlights:**
- **5 Independent Modules:** Pipe Hydraulics, Rainfall Aeration, Rapid Mixing, Sedimentation, Filtration
- **Flexible Module Chains:** Support for 1-5 modules in various combinations
- **Standards Compliance:** Full compliance with TCVN 33-2006 and TCVN 7222:2002
- **Comprehensive Validation:** Input validation, range checking, and standards compliance checking
- **Detailed Calculations:** Step-by-step calculations with formula citations
- **Error Handling:** Structured error handling with suggestions and confidence scores
- **Data Flow:** Automatic data flow between modules with unit conversion
- **Multiple Export Formats:** PDF, Excel, JSON, Markdown export capabilities

**Hóa phàm:**

Tài liệu này liệt kê tất cả các chức năng mà hệ thống phải làm được, từ nhập liệu đến tính toán và xuất kết quả. Hệ thống được thiết kế để giúp kỹ sư tính toán thiết kế hệ thống xử lý nước một cách chính xác và nhanh chóng, tuân thủ các tiêu chuẩn kỹ thuật Việt Nam.

---

**KẾT THÚC PHẦN V. FUNCTIONAL REQUIREMENTS**

---

*Ghi chú: Phần này là phần V của MASTER_PROMPT.md, được tách ra thành file riêng để dễ quản lý do độ dài của tài liệu.*

*Phần này cung cấp đầy đủ các yêu cầu chức năng cho hệ thống tính toán tự động xử lý nước XLNC, bao gồm user stories, acceptance criteria, inputs/outputs, constraints, edge cases, và các yêu cầu phi chức năng. Phần này bổ sung và chi tiết hóa nội dung trong I.5 (Scope & Modules), I.9 (Input/Output summary), và hỗ trợ III.3 (Module architecture & data flow), IV.2 (Engineering Formulas Library).*