# Chunk 02: Module 1 - Pipe Hydraulics / Module 1 - Tính toán Đường ống

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_02`  
**Section:** V.3.1 Module 1 - Pipe Hydraulics  
**Word Count:** ~700 words  
**Retrieval Keywords:** Module 1, pipe hydraulics, flowrate, pipe diameter, head loss, Reynolds number, friction factor, Darcy-Weisbach, Colebrook-White, pump head, TCVN 33-2006  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_01`, `05_FUNCTIONAL_REQUIREMENTS_chunk_03`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_02`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_3_1`

---

## V.3.1 Module 1 — Pipe Hydraulics (Tính toán đường ống)

### V.3.1.1 User Stories

**US-P1:** As a user, I want to enter flowrate, pipe material, roughness, and length so that the system can calculate pipe diameter and head loss.

**US-P2:** As a user, I want the system to calculate velocity, diameter, Reynolds number, friction factor, and headloss automatically.

**US-P3:** As a user, I want the system to select standard pipe diameters from TCVN standards so that I can use commercially available pipes.

**US-P4:** As a user, I want the system to calculate required pump head (Hyc) so that I can select appropriate pumps.

### V.3.1.2 Acceptance Criteria

**AC-P1:** The system must compute velocity within ±3% tolerance compared to manual calculations.

**AC-P2:** The system must compute recommended pipe diameter using Darcy-Weisbach or Hazen-Williams depending on user selection, with automatic selection of nearest standard diameter.

**AC-P3:** Headloss results must include both friction losses (Htt) and minor losses (Hcb), with formula citations.

**AC-P4:** The system must validate velocity against TCVN 33-2006 limits:
- Suction velocity (Vh) ≤ 1.2 m/s
- Discharge velocity (Vd) ≤ 2.4 m/s

**AC-P5:** The system must calculate Reynolds number and classify flow regime (laminar < 2000, transition 2000-4000, turbulent > 4000).

**AC-P6:** The system must use correct friction factor (λ) based on Reynolds number and relative roughness, using Moody chart or Colebrook-White equation.

### V.3.1.3 Inputs

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

### V.3.1.4 Outputs

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

### V.3.1.5 Calculation Steps

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

### V.3.1.6 Constraints

- V_h must be ≤ 1.2 m/s (TCVN 33-2006)
- V_d must be ≤ 2.4 m/s (TCVN 33-2006)
- Q must be > 0
- L must be > 0
- Temperature must be 0°C < t < 100°C
- Roughness (ε) must match material type or be within reasonable range

### V.3.1.7 Edge Cases

- **Very low flowrates (laminar regime, Re < 2000):** Use λ = 64/Re formula
- **Very high flowrates (pipe diameter > DN1000):** Warn user about potential cost and installation challenges
- **Multiple fittings:** Sum all β coefficients: β_total = Σβ_i
- **Missing material specification:** Request user input or use conservative default (e.g., new steel pipe)
- **Extreme temperatures (< 0°C or > 100°C):** Flag and request confirmation

---

**Previous Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_01`  
**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_03` (Module 2 - Rainfall Aeration)

