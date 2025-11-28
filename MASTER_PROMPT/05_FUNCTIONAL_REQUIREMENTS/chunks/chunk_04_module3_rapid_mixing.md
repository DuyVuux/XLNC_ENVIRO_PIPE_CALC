# Chunk 04: Module 3 - Rapid Mixing Tank / Module 3 - Ngăn trộn phản ứng

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_04`  
**Section:** V.3.3 Module 3 - Rapid Mixing Tank  
**Word Count:** ~600 words  
**Retrieval Keywords:** Module 3, rapid mixing, mixing tank, reaction kinetics, Fe²⁺ oxidation, H₂S oxidation, reaction rate, removal efficiency, G-value, TCVN 7222:2002  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_03`, `05_FUNCTIONAL_REQUIREMENTS_chunk_05`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_04`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_3_3`

---

## V.3.3 Module 3 — Rapid Mixing Tank / Ngăn trộn phản ứng

### V.3.3.1 User Stories

**US-M1:** As a user, I want to enter reaction chemicals, mixing time, and initial concentrations so that the system can calculate mixing volume and reaction kinetics.

**US-M2:** As a user, I want the system to calculate G-value, reaction rates, and final concentrations after reaction time.

**US-M3:** As a user, I want the system to calculate reaction efficiency so that I can evaluate treatment effectiveness.

### V.3.3.2 Acceptance Criteria

**AC-M1:** Mixing time must be within recommended ranges (10s-60min depending on mixing type) per TCVN 7222:2002.

**AC-M2:** G-value must meet coagulation/flocculation standards (typically 300-1000 s⁻¹ for rapid mixing).

**AC-M3:** The system must calculate reaction rates using validated kinetic constants.

**AC-M4:** The system must calculate final concentrations after specified reaction time.

**AC-M5:** The system must calculate reaction efficiency as percentage of initial concentration removed.

### V.3.3.3 Inputs

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

### V.3.3.4 Outputs

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

### V.3.3.5 Calculation Steps

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

### V.3.3.6 Constraints

- Mixing time must be within recommended ranges:
  - Rapid mixing: 10-30 seconds
  - Slow mixing: 20-40 minutes
  - Reaction: 30-60 minutes
- Rate constants must be within reasonable ranges:
  - k_Fe: 0.01-0.1 l/mg·s
  - k_H₂S: 0.05-0.2 l/mg·s
- Tank dimensions must be practical (typically H = 2-5 m, W = 2-6 m)
- Concentrations must be ≥ 0

### V.3.3.7 Edge Cases

- **Unusually high/low coagulant doses:** Flag and request confirmation
- **Very long reaction times (> 60 min):** May indicate need for larger tank or different treatment
- **Extremely high initial concentrations:** May require multiple reaction stages
- **Missing rate constants:** Use default values with warning, or request user input

---

**Previous Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_03`  
**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_05` (Module 4 & 5 - Settling & Filtration)

