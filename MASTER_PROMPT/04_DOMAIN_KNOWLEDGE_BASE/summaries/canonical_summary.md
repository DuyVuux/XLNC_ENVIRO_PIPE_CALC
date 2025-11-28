# Canonical Summary: 04_DOMAIN_KNOWLEDGE_BASE

**Section ID:** `04_DOMAIN_KNOWLEDGE_BASE`  
**Last Updated:** 2024  
**Total Chunks:** 8  
**Purpose:** Provides mandatory domain knowledge base including Vietnamese national standards (TCVN/QCVN), engineering formulas library for all 5 modules, domain glossary, reference tables, validation ranges, construction workflow, AI reasoning instructions, and explicit limitations.

**Chunk List:**
- `chunk_01`: Header & National Standards (IV.1)
- `chunk_02`: Module 1 Formulas - Pipelines (IV.2.1)
- `chunk_03`: Module 2 Formulas - Aeration/Spray Rain Tower (IV.2.2)
- `chunk_04`: Module 3 Formulas - Rapid Mixing/Reaction (IV.2.3)
- `chunk_05`: Module 4 & 5 Formulas - Settling & Filtration (IV.2.4, IV.2.5)
- `chunk_06`: Domain Glossary & Reference Tables (IV.3, IV.4)
- `chunk_07`: Reference Ranges & Construction Workflow (IV.5, IV.6)
- `chunk_08`: AI Reasoning Instructions & Explicit Limitations (IV.7, IV.8)

---

## 1. Header & AI Instructions (IV.0)

### 1.1. Mandatory Role Setup
- AI Assistant must master all formulas, standards, and terminology in this section
- This is a **MANDATORY** reference source for all calculations
- Must follow 8 key requirements when applying this knowledge base

### 1.2. Task Description
AI must:
1. Master all TCVN/QCVN standards (IV.1) - DO NOT fabricate
2. Use correct formulas from library (IV.2) - each module has specific formulas
3. Use correct domain terminology (IV.3) - consistent EN-VI
4. Consult reference tables (IV.4) - roughness, viscosity, oxygen, etc.
5. Check reference ranges (IV.5) - warn if exceeds threshold
6. Understand construction workflow (IV.6) - propose feasible solutions
7. Apply reasoning instructions (IV.7) - domain-aware reasoning
8. Know explicit limitations (IV.8) - when human review needed

### 1.3. Reasoning Instructions (7-Step Process)
1. Identify module to calculate (1-5)
2. Look up corresponding formulas (IV.2.1-IV.2.5)
3. Check applicable standards (IV.1) - TCVN 33-2006, TCVN 7222:2002
4. Consult reference tables if needed (IV.4)
5. Calculate using formulas, cite sources
6. Validate results against reference ranges (IV.5) - warn if exceeds
7. Apply reasoning instructions (IV.7) - check reasonableness, handle units, explain formulas

---

## 2. National Standards & Regulations (IV.1)

### 2.1. TCVN - Vietnamese Standards
**Critical Standards:**
- **TCVN 33:2006** - Water supply networks and facilities
  - Suction velocity: Vh ≤ 1.2 m/s
  - Discharge velocity: Vd ≤ 2.4 m/s
  - Filtration rate: 6-10 m/h
  - Backwash intensity: 12-15 l/s·m²
  - **Applies to:** Module 1 (pipelines), Module 5 (filtration)

- **TCVN 7222:2002** - Wastewater treatment systems design
  - **Applies to:** Module 2, 3, 4, 5 when treating wastewater

- **Other TCVN standards:**
  - TCVN 4513:1988 (indoor water supply)
  - TCVN 5502:2003 (domestic water quality)
  - TCVN 7957:2008 (drainage networks)
  - TCVN 9113:2012 (ductile iron pipes)
  - TCVN 6151:1996 (PVC pipes)
  - TCVN 10304:2014 (tank design)

### 2.2. QCVN - Regulatory Limits
- QCVN 01:2009/BYT - Domestic water
- QCVN 02:2009/BYT - Drinking water
- QCVN 08-MT:2015/BTNMT - Surface water quality
- QCVN 09-MT:2015/BTNMT - Groundwater
- QCVN 14:2008/BTNMT - Domestic wastewater
- QCVN 40:2011/BTNMT - Industrial wastewater

### 2.3. Critical Rules
- AI must NOT invent standards (per II.8)
- If standard missing → ask user or recommend human review (II.1.4)
- Do NOT mix standards between supply water & wastewater unless explicitly requested

---

## 3. Engineering Formulas Library (IV.2)

### 3.1. Module 1 - Pipelines

**Key Formulas:**
- Flowrate: Q = v·A = v·πD²/4
- Pipe diameter: D_h = √(4Q/(πV_h)), D_d = √(4Q/(πV_d))
- Kinematic viscosity: ν = μ/ρ
- Relative roughness: α = ε/D
- Reynolds number: Re = v·D/ν = v·D·ρ/μ
- Friction loss (Darcy-Weisbach): H_tt = λ·L·v²/(D·2g)
- Friction factor (Colebrook-White): 1/√λ = -2log₁₀(ε/D/3.7 + 2.51/(Re√λ))
- Local head loss: H_cb = β·v²/(2g)
- Total head loss: H₁ = H_tt + H_cb
- Static head: H_c = H_ra - H_vao
- Required head: H_yc = H₁ + H_c

**Flow Regime Classification:**
- Re < 2000: Laminar (λ = 64/Re)
- 2000 < Re < 4000: Transition
- Re > 4000: Turbulent (use Colebrook-White)

**Source:** TCVN 33-2006, Darcy-Weisbach, Colebrook-White

### 3.2. Module 2 - Aeration/Spray Rain Tower

**Key Formulas:**
- Saturated oxygen: C_ox = 468/(31.6 + t)
- Oxygen for Fe²⁺: O₂ (for Fe²⁺) = 0.143 × C(Fe²⁺)
- Oxygen for H₂S: O₂ (for H₂S) = 0.47 × C(H₂S)
- Total oxygen required: C_ht = 0.47×C(H₂S) + 0.143×C(Fe²⁺) + C_ox
- Spray intensity: C_phun = Q/A
- Actual dissolved oxygen: C_thực = C_ox × η (η = 0.7-0.9)

**Source:** TCVN 7222:2002, oxygen saturation formula

### 3.3. Module 3 - Rapid Mixing/Reaction

**Key Formulas:**
- Mixing tank volume: V = Q × t
- Mixing time: t = V/Q
- Tank dimensions: L = V/(H × W)
- First-order reaction: r = k × [A]
- Second-order reaction: r = k × [A] × [B]
- Fe²⁺ reaction rate: r_Fe = k_Fe × [Fe²⁺] × [O₂]
- H₂S reaction rate: r_H₂S = k_H₂S × [H₂S] × [O₂]
- Fe²⁺ after time t: [Fe²⁺]_t = [Fe²⁺]_0 × e^(-k_Fe×[O₂]×t)
- H₂S after time t: [H₂S]_t = [H₂S]_0 × e^(-k_H₂S×[O₂]×t)
- Reaction efficiency: η = ([A]_0 - [A]_t)/[A]_0 × 100%

**Source:** TCVN 7222:2002, first-order reaction kinetics

### 3.4. Module 4 - Sedimentation Tank

**Key Formulas:**
- Inlet flowrate: Q₁ = α × Q (α = 1.05)
- Inclined cylinder height: H = H₀/cos(α) (H₀ = 0.9 m, α = 60°)
- Required surface area: F = Q₁/(U_o×H×cos(α) + W×cos²(α))
- Tank volume: V = S × H = R × D × H
- Surface settling velocity: v = Q₁/S
- Settling time: t_lắng = V/Q₁
- Settling efficiency: η = U_o/v × 100%

**Source:** TCVN 7222:2002, TCVN 33-2006, settling theory

### 3.5. Module 5 - Filtration

**Key Formulas:**
- Filter area: f₁ = Q/v
- Total compartment area: f₁' = f₁ + f₂ × n
- Tank diameter: D = √(4×f₁'/π)
- Actual filter area: F₁ = f₁ - f₂
- Actual filtration velocity: v = Q/F₁
- Backwash tank height: h₇ = (60×q×t)/(n×100)
- Total filter height: H = Σh_i (h₁ to h₈)
- Backwash intensity: q = Q_rửa/F₁
- Backwash flowrate: Q_rửa = q × F₁
- Filtration cycle: T_lọc = (V_bùn×F₁)/(Q×C)

**Recommended Values:**
- Filtration rate: 6-10 m/h (TCVN 33-2006)
- Backwash intensity: 12-15 l/s·m² (TCVN 33-2006)
- Filtration cycle: 12-48 h
- Backwash when head loss reaches 2.5-3.0 m

**Source:** TCVN 33-2006, TCVN 7222:2002, Kozeny-Carman

---

## 4. Domain Glossary (IV.3)

### 4.1. Terminology Table
Comprehensive EN-VI bilingual glossary covering all 5 modules:
- **Module 1:** Flowrate (Q), Velocity (v), Diameter (D), Head loss (H), Reynolds number (Re), Roughness (ε), Friction factor (λ), Local loss coefficient (β)
- **Module 2:** Saturated oxygen (C_ox), Dissolved oxygen (C_thực), Total oxygen required (C_ht), Spray intensity (C_phun), Aeration efficiency (η)
- **Module 3:** Mixing tank volume (V), Mixing time (t), Reaction rate (r), Rate constant (k), Reaction efficiency (η)
- **Module 4:** Surface loading rate (SLR), Settling velocity (U_o), Settling time (t_lắng), Settling efficiency (η)
- **Module 5:** Filtration rate (v), Filter area (F₁), Backwash intensity (q), Backwash flowrate (Q_rửa), Backwash volume (V_rửa), Head loss through filter (H)

### 4.2. Usage Rules
- AI must use consistent terminology per II.2.3
- Glossary can expand to 200-300 terms when needed
- All terms must have EN-VI bilingual format

---

## 5. Reference Tables (IV.4)

### 5.1. Pipe Roughness Table (IV.4.1)
| Material | ε (mm) | ε (m) |
|----------|--------|-------|
| New steel | 0.05-0.1 | 0.00005-0.0001 |
| Old steel | 0.1-0.5 | 0.0001-0.0005 |
| Cast iron | 0.25-1.0 | 0.00025-0.001 |
| Concrete | 0.3-3.0 | 0.0003-0.003 |
| PVC/HDPE | 0.0015-0.007 | 0.0000015-0.000007 |

**Source:** TCVN 33-2006, TCVN 9113:2012, TCVN 6151:1996

### 5.2. Water Kinematic Viscosity Table (IV.4.2)
| Temperature (°C) | ν (m²/s) |
|------------------|----------|
| 0 | 0.00000179 |
| 10 | 0.00000131 |
| 20 | 0.00000101 |
| 25 | 0.00000089 |
| 30 | 0.00000080 |

**Source:** TCVN 33-2006

### 5.3. Saturated Oxygen Table (IV.4.3)
| Temperature (°C) | C_ox (mg/l) |
|------------------|-------------|
| 0 | 14.62 |
| 10 | 11.25 |
| 20 | 9.07 |
| 25 | 8.24 |
| 30 | 7.56 |

**Formula:** C_ox = 468/(31.6 + t)

### 5.4. Local Loss Coefficient Table (IV.4.4)
| Fitting Type | Coefficient β |
|--------------|----------------|
| Gate valve (fully open) | 0.1-0.2 |
| Globe valve | 3-10 |
| 90° elbow | 0.9-1.2 |
| 45° elbow | 0.4-0.5 |
| Contraction | 0.1-0.5 |
| Expansion | 0.3-1.0 |
| Straight tee | 0.1-0.3 |
| Branch tee | 1.0-2.0 |

**Source:** TCVN 33-2006

### 5.5. Recommended Mixing Time Table (IV.4.5)
| Mixing Type | Time |
|-------------|------|
| Rapid mixing | 10-30 seconds |
| Slow mixing | 20-40 minutes |
| Reaction tank | 30-60 minutes |

**Source:** TCVN 7222:2002

### 5.6. Recommended Settling Time Table (IV.4.6)
| Settling Tank Type | Time |
|-------------------|------|
| Horizontal | 1.5-3 h |
| Vertical | 1-2 h |
| Inclined | 0.5-1.5 h |

**Source:** TCVN 7222:2002, TCVN 33-2006

### 5.7. Recommended Filtration Rate Table (IV.4.7)
| Filter Type | Rate (m/h) |
|-------------|------------|
| Rapid gravity | 6-10 |
| Slow sand | 0.1-0.3 |
| Pressure | 8-12 |

**Source:** TCVN 33-2006

### 5.8. Recommended Backwash Intensity Table (IV.4.8)
| Backwash Type | Intensity (l/s·m²) |
|---------------|---------------------|
| Water only | 12-15 |
| Air + water | 8-12 |
| High-speed water | 10-15 |

**Source:** TCVN 33-2006

---

## 6. Reference Ranges (IV.5)

### 6.1. Validation Ranges Table
| Parameter | Range | Module | Standard |
|-----------|-------|--------|----------|
| v (pipe velocity) | 0.6-2.5 m/s | Module 1 | TCVN 33-2006 |
| V_h (suction) | ≤ 1.2 m/s | Module 1 | TCVN 33-2006 |
| V_d (discharge) | ≤ 2.4 m/s | Module 1 | TCVN 33-2006 |
| Re | <2000: laminar, 2000-4000: transition, >4000: turbulent | Module 1 | - |
| C_ox | 7.56-14.62 mg/l (0-30°C) | Module 2 | - |
| C_phun | 1-10 m/h | Module 2 | - |
| η (aeration) | 0.7-0.9 | Module 2 | - |
| t (mixing) | 10s-60min | Module 3 | TCVN 7222:2002 |
| k_Fe | 0.01-0.1 l/mg·s | Module 3 | - |
| k_H₂S | 0.05-0.2 l/mg·s | Module 3 | - |
| U_o | 0.0001-0.0005 m/s | Module 4 | TCVN 7222:2002 |
| SLR | 1-3 m³/m²·h (supply), 0.5-1.5 m³/m²·h (wastewater) | Module 4 | TCVN 7222:2002 |
| t_lắng | 1.5-3 h (supply), 2-4 h (wastewater) | Module 4 | TCVN 7222:2002 |
| η (settling) | ≥ 70% | Module 4 | TCVN 7222:2002 |
| v (filtration) | 6-10 m/h | Module 5 | TCVN 33-2006 |
| q (backwash) | 12-15 l/s·m² | Module 5 | TCVN 33-2006 |
| t_rửa | 5-10 minutes | Module 5 | TCVN 33-2006 |

### 6.2. Warning Examples
- If v_d = 2.45 m/s > 2.4 m/s → WARNING: "Discharge velocity exceeds TCVN 33-2006 → Recommend human review (II.1.4)"
- If η (settling) < 70% → WARNING: "Low settling efficiency, need to re-evaluate design"
- If v (filtration) > 10 m/h → WARNING: "Filtration rate exceeds recommended TCVN 33-2006 threshold"

### 6.3. AI Requirements
- Must flag values outside ranges per II.2.7, II.6.2
- Recommend human review (II.1.4) when values exceed thresholds

---

## 7. Real-world Construction Workflow (IV.6)

### 7.1. Survey → Design → Approval (IV.6.1)
1. **Site Survey:** Topography, geology, location of tanks/pipes, space assessment
2. **Water Sampling & Analysis:** Input water quality (Fe²⁺, H₂S, TSS, turbidity), determine treatment requirements, select module chain (per I.5)
3. **Technology Calculation:** Module 1 (pipes, pump), Modules 2-5 (treatment tanks)
4. **Layout Design:** Arrange tanks/pipes, ensure safety distances, maintenance access
5. **Design Drawings:** Plan view, sections, structural details, piping, electrical, automation
6. **Review & Approval:** Check TCVN/QCVN compliance, approve design

### 7.2. Construction Workflow (IV.6.2)
1. **Positioning:** Mark exact locations of tanks/pipes
2. **Excavation & Foundation:** Excavate, pour foundation concrete
3. **Concrete Work:** Pour bottom, walls, cover (if any)
4. **Piping Installation:** Install buried & above-ground pipes, fittings (valves, elbows, tees)
5. **Equipment Installation:** Install pump (per Module 1: H_yc), control valves, electrical panel, automation
6. **No-load Testing:** Test system without water, check electrical/automation
7. **Load Testing:** Test with actual water, adjust operating parameters
8. **Acceptance & Handover:** Check output water quality, accept project, handover to owner

### 7.3. Operational Constraints (IV.6.3)
- Tanks must have access paths for maintenance/cleaning
- Pipe layout must comply with TCVN 33-2006 (no improper crossings)
- Valves must be positioned for easy operation
- Minimum requirements:
  - Pipe slope: ≥ 0.3% (TCVN 33-2006)
  - Air release valves to prevent air lock
  - Maintenance space available

### 7.4. Purpose
Helps AI understand real-world constraints and propose feasible sizing per II.2.5

---

## 8. AI Reasoning Instructions (Domain-aware) (IV.7)

### 8.1. Check TCVN/QCVN Compliance (IV.7.1)
- Always check calculated values comply with TCVN 33-2006 (Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s, v_filter = 6-10 m/h, q_backwash = 12-15 l/s·m²)
- Check output water quality meets QCVN (QCVN 01:2009/BYT, QCVN 02:2009/BYT)
- If non-compliant → warn and recommend human review (II.1.4)

### 8.2. Compare Inputs with Reference Ranges (IV.7.2)
- Compare inputs with Reference Ranges (IV.5)
- If outside range → warn and explain risks (per II.2.7)

### 8.3. Handle Units (IV.7.3)
- If user enters wrong/missing units → request confirmation or convert with clear flag (per II.2.3, II.5.3)
- Example: User enters "Q = 500" (missing unit) → AI must ask: "Q = 500 m³/day or m³/h?" or use cautious default and clearly mark "[Default: m³/day]"

### 8.4. Explain Formulas (IV.7.4)
- Explain in 2 formats:
  - **Professional engineering:** Formula, source (TCVN), units, technical meaning
  - **Hóa phàm (simple explanation):** 1-3 sentences easy to understand (per II.3, I.11)

### 8.5. Do NOT Invent Formulas (IV.7.5)
- Only use formulas with clear sources (TCVN, technical documents)
- Must NOT fabricate formulas (per II.8)

### 8.6. Do NOT Mix Standards (IV.7.6)
- Do NOT mix standards between supply water & wastewater unless explicitly requested
- Example: Do NOT use TCVN 33-2006 (supply) for wastewater unless requested

---

## 9. Explicit Limitations (IV.8)

### 9.1. No Corresponding Standard (IV.8.1)
- If no TCVN/QCVN found for specific case → must state clearly: "No corresponding TCVN/QCVN standard for this case. Recommend human review (II.1.4) or refer to international standards."
- Confidence score = 0.3 (per II.2.5)

### 9.2. Formula Depends on Water Type (IV.8.2)
- Must state clearly: "This formula applies to supply water (TCVN 33-2006). If wastewater, need to use TCVN 7222:2002."
- Example: Filtration rate for supply water (6-10 m/h) differs from wastewater (may be lower)

### 9.3. Missing Required Parameters (IV.8.3)
- If missing required input → return structured error (per II.6.1):
  - Suggested defaults
  - Impact of using defaults
  - Exact fields needed
- Confidence score = 0 if cannot calculate

### 9.4. User Enters Unrealistic Values (IV.8.4)
- Example: Filtration rate v = 250 m/h (too high, far exceeds 6-10 m/h threshold)
- AI must warn: "WARNING: Filtration rate v = 250 m/h far exceeds recommended TCVN 33-2006 threshold (6-10 m/h). This value is unrealistic. Recommend check input or human review (II.1.4)."
- Confidence score = 0.2 (very low)

---

## 10. Cross-References

### 10.1. Related Sections
- **I.5 (Scope & Modules):** Module definitions and chain selection
- **I.7 (Assumptions & Constraints):** General constraints referenced here
- **II.2 (Behaviors):** Accuracy, terminology, reasoning requirements
- **II.5 (Validation Rules):** Input validation using reference ranges
- **II.6 (Failure Modes):** Error handling and warnings
- **II.8 (Do Not List):** Prohibition against fabricating standards/formulas

### 10.2. Critical Rules Summary
- **MANDATORY:** AI must master all formulas, standards, terminology
- **NO FABRICATION:** Must NOT invent standards or formulas (II.8, IV.7.5)
- **CITE SOURCES:** Must cite formula sources and standards (II.2.1, IV.2)
- **CONSISTENT TERMINOLOGY:** Must use glossary terms (IV.3, II.2.3)
- **VALIDATE RANGES:** Must check reference ranges (IV.5) - warn if exceeds
- **DOMAIN-AWARE REASONING:** Must follow reasoning instructions (IV.7)
- **EXPLICIT LIMITATIONS:** Must state limitations clearly (IV.8)

---

**END OF CANONICAL SUMMARY**

*This section provides complete domain knowledge (standards, formulas, terminology, reference tables, construction workflow) for AI to calculate accurately per Vietnamese standards. This section supplements and details content in I.7 (Assumptions & Constraints), I.5 (Scope & Modules), and supports II.2 (Behaviors), II.5 (Validation rules), II.6 (Failure modes).*

