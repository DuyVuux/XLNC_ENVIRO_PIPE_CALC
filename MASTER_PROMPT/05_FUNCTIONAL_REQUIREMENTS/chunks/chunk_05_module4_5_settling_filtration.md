# Chunk 05: Module 4 & 5 - Settling & Filtration / Module 4 & 5 - Bể lắng & Bể lọc

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_05`  
**Section:** V.3.4 Module 4 - Sedimentation, V.3.5 Module 5 - Filtration  
**Word Count:** ~800 words  
**Retrieval Keywords:** Module 4, Module 5, sedimentation, settling tank, filtration, filter area, backwash, surface loading rate, settling efficiency, TCVN 33-2006, TCVN 7222:2002  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_04`, `05_FUNCTIONAL_REQUIREMENTS_chunk_06`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_05`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_3_4_5`

---

## V.3.4 Module 4 — Sedimentation Tank / Bể lắng

### V.3.4.1 User Stories

**US-S1:** As a user, I want to enter surface loading rate and detention time so that the system can compute required area, depth, and overflow rate.

**US-S2:** As a user, I want the system to calculate settling efficiency so that I can evaluate treatment performance.

**US-S3:** As a user, I want the system to design inclined plate settler dimensions based on standard formulas.

### V.3.4.2 Acceptance Criteria

**AC-S1:** Surface loading must meet constraints 20-40 m³/m²·day for supply water, 0.5-1.5 m³/m²·h for wastewater per TCVN 7222:2002.

**AC-S2:** Overflow rate must not exceed design standard.

**AC-S3:** The system must calculate settling efficiency based on particle settling velocity and surface loading rate.

**AC-S4:** The system must use correct formula for inclined plate settler area calculation.

### V.3.4.3 Inputs

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

### V.3.4.4 Outputs

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

### V.3.4.5 Calculation Steps

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

### V.3.4.6 Constraints

- Surface loading rate (SLR) must be:
  - 1-3 m³/m²·h for supply water
  - 0.5-1.5 m³/m²·h for wastewater
- Settling time must be:
  - 1.5-3 h for supply water
  - 2-4 h for wastewater
- Settling efficiency must be ≥ 70%
- Inclination angle typically 45-75 degrees
- Tank depth typically 2.5-4 m

### V.3.4.7 Edge Cases

- **Sedimentation tanks with extreme aspect ratios:** Flag if D:R > 5:1 or < 1:1
- **Very low particle settling velocity:** May require pre-treatment or different technology
- **Very high flowrates:** May require multiple tanks in parallel
- **Missing particle settling velocity:** Use default with warning, or request user input based on particle analysis

---

## V.3.5 Module 5 — Filtration Unit / Bể lọc

### V.3.5.1 User Stories

**US-F1:** As a user, I want to enter filtration rate, media type, and headloss limit so that the system can calculate filter area and number of cells.

**US-F2:** As a user, I want the system to calculate backwash intensity, flowrate, and volume so that I can design backwash system.

**US-F3:** As a user, I want the system to calculate all filter heights and total filter height so that I can design complete filter structure.

### V.3.5.2 Acceptance Criteria

**AC-F1:** Filtration rate must fall within 6-15 m/h per TCVN 33-2006.

**AC-F2:** Backwash intensity must satisfy air-water backwash standards (12-15 l/s·m² for water-only, 8-12 l/s·m² for air-water).

**AC-F3:** The system must calculate all filter component heights (h₁ to h₈) according to standard design.

**AC-F4:** The system must calculate total headloss through filter media.

**AC-F5:** The system must calculate filter cycle time based on headloss development.

### V.3.5.3 Inputs

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

### V.3.5.4 Outputs

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
| h₁ to h₈ | m | Filter component heights | Defaults or calculated |
| H | m | Total filter height | H = Σh₁ to h₈, IV.2.5 |
| H₂ | m | Height to filter top | H₂ = h₁+h₂+h₃+h₄+h₅+h₆, IV.2.5 |
| Q_rửa | m³/h, l/s | Backwash flowrate | Q_rửa = q×F₁, IV.2.5 |
| V_rửa | m³ | Backwash volume | V_rửa = Q_rửa×t_rửa, IV.2.5 |
| T_lọc | h | Filter cycle time | T_lọc = (V_bùn×F₁)/(Q×C), IV.2.5 |
| Headloss | m | Total headloss through filter | Sum of component headlosses |

### V.3.5.5 Calculation Steps

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

### V.3.5.6 Constraints

- Filtration rate must be 6-10 m/h for gravity filters (TCVN 33-2006)
- Backwash intensity must be 12-15 l/s·m² for water-only backwash
- Backwash time must be 5-10 minutes
- Filter cycle time typically 12-48 hours
- Total headloss should not exceed 2.5-3.0 m before backwash

### V.3.5.7 Edge Cases

- **Filter media mismatch with selected filtration rate:** Flag if media type doesn't support rate
- **Very high suspended solids:** May require shorter filter cycles or pre-treatment
- **Multiple filter cells:** Distribute flow evenly, calculate per cell
- **Missing suspended solids data:** Cannot calculate filter cycle, provide estimate based on typical values

---

**Previous Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_04`  
**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_06` (Cross-Module Rules & Edge Cases)

