# Chunk 03: Module 2 - Rainfall Aeration / Module 2 - Giàn phun mưa

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_03`  
**Section:** V.3.2 Module 2 - Rainfall Aeration  
**Word Count:** ~550 words  
**Retrieval Keywords:** Module 2, rainfall aeration, spray tower, oxygen saturation, Fe²⁺ oxidation, H₂S oxidation, spray intensity, aeration efficiency, TCVN 7222:2002  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_02`, `05_FUNCTIONAL_REQUIREMENTS_chunk_04`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_03`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_3_2`

---

## V.3.2 Module 2 — Rainfall Aeration / Giàn phun mưa

### V.3.2.1 User Stories

**US-A1:** As a user, I want to enter water flow, nozzle type, spray height, and oxygen transfer efficiency so that the system can calculate DO increase and spray intensity.

**US-A2:** As a user, I want the system to calculate oxygen requirements for Fe²⁺ and H₂S oxidation reactions.

**US-A3:** As a user, I want the system to evaluate whether available oxygen is sufficient for required reactions.

**US-A4:** As a user, I want the system to recommend solutions when oxygen is insufficient.

### V.3.2.2 Acceptance Criteria

**AC-A1:** Oxygen increase must be calculated using KLa and empirical efficiency with formula citation.

**AC-A2:** Spray intensity must meet TCVN/QCVN allowable ranges (1-10 m/h).

**AC-A3:** The system must calculate total oxygen requirement including saturation, Fe²⁺ oxidation, and H₂S oxidation.

**AC-A4:** The system must compare actual dissolved oxygen with required oxygen and provide clear assessment.

**AC-A5:** The system must recommend solutions when oxygen is insufficient (increase efficiency, increase area, reduce concentrations).

### V.3.2.3 Inputs

| Parameter | Unit | Description | Required | Default | Source |
|-----------|------|-------------|----------|---------|--------|
| Q | m³/s, m³/h | Water flowrate | Yes | From Module 1 | User input or Module 1 |
| t (temperature) | °C | Water temperature | Yes | 20°C | User input |
| C(Fe²⁺) | mg/l | Initial Fe²⁺ concentration | No | 0 | User input |
| C(H₂S) | mg/l | Initial H₂S concentration | No | 0 | User input |
| A (spray area) | m² | Aeration/spray tower area | Yes | - | User input |
| η (efficiency) | - | Aeration efficiency | Yes | 0.8 | User input (0.7-0.9) |
| Nozzle type | enum | Nozzle type (optional) | No | - | User input |

### V.3.2.4 Outputs

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

### V.3.2.5 Calculation Steps

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

### V.3.2.6 Constraints

- Spray intensity (C_phun) must be 1-10 m/h
- Aeration efficiency (η) must be 0.7-0.9
- Temperature must be 0°C < t < 100°C
- Concentrations must be ≥ 0
- Spray area (A) must be > 0

### V.3.2.7 Edge Cases

- **Temperature < 10°C:** Higher oxygen saturation, but may affect reaction rates
- **Very high Fe²⁺ or H₂S concentrations:** May require multiple aeration stages
- **Missing spray area:** System should calculate minimum required area based on Q and desired intensity
- **Zero Fe²⁺ and H₂S:** Only calculate saturation oxygen, skip oxidation calculations

---

**Previous Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_02`  
**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_04` (Module 3 - Rapid Mixing Tank)

