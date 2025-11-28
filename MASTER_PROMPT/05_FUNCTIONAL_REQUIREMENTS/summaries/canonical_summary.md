# Canonical Summary: 05_FUNCTIONAL_REQUIREMENTS

**Section ID:** `05_FUNCTIONAL_REQUIREMENTS`  
**Last Updated:** 2024  
**Total Chunks:** 9  
**Purpose:** Defines comprehensive functional requirements for XLNC Automated Water Treatment Calculation System, including user stories, acceptance criteria, detailed module specifications (inputs/outputs/calculations/constraints/edge cases), cross-module rules, non-functional requirements, integration, testing, documentation, compliance, and change management.

**Chunk List:**
- `chunk_01`: Header, Overview & General User Stories (V.1, V.2)
- `chunk_02`: Module 1 - Pipe Hydraulics (V.3.1)
- `chunk_03`: Module 2 - Rainfall Aeration (V.3.2)
- `chunk_04`: Module 3 - Rapid Mixing Tank (V.3.3)
- `chunk_05`: Module 4 & 5 - Settling & Filtration (V.3.4, V.3.5)
- `chunk_06`: Cross-Module Rules & Edge Cases (V.4, V.5)
- `chunk_07`: Module IO Summary & Non-Functional Requirements (V.6, V.7)
- `chunk_08`: Integration, Testing & Documentation Requirements (V.8, V.9, V.10)
- `chunk_09`: Compliance, Change Management & Summary (V.11, V.12, V.13)

---

## 1. Header & AI Instructions (V.0)

### 1.1. Role Setup
- AI Assistant must understand functional requirements for XLNC system
- Must reference user stories, acceptance criteria, inputs/outputs when implementing or testing

### 1.2. Task Description
AI must:
1. Understand user stories and acceptance criteria for 5 modules
2. Master inputs/outputs details for each module
3. Understand cross-module rules (unit consistency, error handling, safety margins)
4. Master non-functional requirements (performance, scalability, security)
5. Reference correctly when implementing or testing functionality

### 1.3. Reasoning Instructions (5-Step Process)
1. Identify related user story
2. Check acceptance criteria
3. Identify required inputs/outputs
4. Apply cross-module rules
5. Ensure non-functional requirements

---

## 2. Overview (V.1)

### 2.1. System Structure
- 5 independent modules that can be combined flexibly
- Each module has specific inputs, outputs, acceptance criteria, constraints, and edge cases
- Based on Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and international engineering practices

### 2.2. Modules Included
1. Module 1 — Pipe Hydraulics / Tính toán đường ống
2. Module 2 — Rainfall Aeration / Giàn phun mưa
3. Module 3 — Rapid Mixing Tank / Ngăn trộn phản ứng
4. Module 4 — Sedimentation Tank / Bể lắng
5. Module 5 — Filtration Unit / Bể lọc

---

## 3. General User Stories (V.2)

### 3.1. US-01: Select Modules
- Support selection of 1-5 modules
- Allow flexible module ordering
- Validate module dependencies
- Provide module chain recommendations based on project scale and water quality
- **Priority:** High

### 3.2. US-02: Input Parameters
- Accept inputs with explicit units
- Support multiple unit systems (SI, Imperial) with automatic conversion
- Validate input ranges against technical standards
- Provide default values for optional parameters
- Flag invalid inputs and suggest corrections
- **Priority:** High

### 3.3. US-03: Automatic Calculation
- Use formulas from recognized sources (TCVN, engineering handbooks)
- Show intermediate calculation steps
- Cite formula sources
- Handle unit conversions automatically
- Complete calculation within 5 seconds for standard project
- **Priority:** High

### 3.4. US-04: Review Outputs
- Include all calculated parameters with units
- Show calculation steps (formula → substitution → result)
- Include formula sources and references
- Present in both technical format and plain language ("Hóa phàm")
- Exportable in JSON format
- **Priority:** High

### 3.5. US-05: Export Report
- Generate PDF reports with company template
- Include all calculation steps, formulas, and results
- Include charts and diagrams where applicable
- Support bilingual output (EN + VI)
- Complete within 2 minutes for standard project
- **Priority:** Medium

### 3.6. US-06: Error Validation
- Validate all inputs before calculation
- Check values against reference ranges (IV.5)
- Flag values exceeding TCVN limits
- Provide specific error messages with suggested corrections
- Prevent calculation if critical inputs are missing or invalid
- **Priority:** High

### 3.7. US-07: Module Chain Recommendation
- Analyze project scale (small < 100 m³/day, medium 100-1000 m³/day, large > 1000 m³/day)
- Analyze water quality parameters (Fe²⁺, H₂S, TSS, turbidity)
- Recommend module chains (e.g., 1→4→5 for small, 1→2→3→4→5 for large)
- Explain reasoning for recommendations
- Allow user to override recommendations
- **Priority:** Medium

### 3.8. US-08: Data Flow Between Modules
- Automatically pass output from Module N to input of Module N+1
- Handle unit conversions between modules
- Allow user to override auto-filled values
- Show data flow diagram
- Validate data consistency across modules
- **Priority:** High

---

## 4. Functional Requirements by Module (V.3)

### 4.1. Module 1 - Pipe Hydraulics

**User Stories:** US-P1 to US-P4 (enter flowrate/material, calculate velocity/diameter/headloss, select standard diameters, calculate pump head)

**Acceptance Criteria:**
- Compute velocity within ±3% tolerance
- Compute recommended pipe diameter using Darcy-Weisbach or Hazen-Williams
- Include both friction losses (Htt) and minor losses (Hcb) with citations
- Validate velocity: Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s (TCVN 33-2006)
- Calculate Reynolds number and classify flow regime
- Use correct friction factor based on Re and relative roughness

**Key Inputs:** Q, L, Material, ε, t, H_ra, H_vao, β, Fitting types

**Key Outputs:** D_h, D_d, V_h, V_d, Re, Flow regime, λ, H_tt, H_cb, H_yc

**Calculation Steps:** 18 steps from flowrate conversion to result validation

**Constraints:** V_h ≤ 1.2 m/s, V_d ≤ 2.4 m/s, Q > 0, L > 0, 0°C < t < 100°C

**Edge Cases:** Very low/high flowrates, multiple fittings, missing material, extreme temperatures

### 4.2. Module 2 - Rainfall Aeration

**User Stories:** US-A1 to US-A4 (enter flow/nozzle/efficiency, calculate oxygen requirements, evaluate sufficiency, recommend solutions)

**Acceptance Criteria:**
- Calculate oxygen increase using KLa and empirical efficiency
- Spray intensity must meet 1-10 m/h range
- Calculate total oxygen requirement (saturation + Fe²⁺ + H₂S)
- Compare actual vs required oxygen
- Recommend solutions when insufficient

**Key Inputs:** Q, t, C(Fe²⁺), C(H₂S), A, η, Nozzle type

**Key Outputs:** C_ox, O₂_Fe, O₂_H₂S, C_ht, C_phun, C_thực, O₂_sufficient, O₂_deficit, Recommendations

**Calculation Steps:** 12 steps from receiving flowrate to generating recommendations

**Constraints:** C_phun = 1-10 m/h, η = 0.7-0.9, 0°C < t < 100°C, A > 0

**Edge Cases:** Temperature extremes, very high concentrations, missing spray area, zero Fe²⁺/H₂S

### 4.3. Module 3 - Rapid Mixing Tank

**User Stories:** US-M1 to US-M3 (enter reaction chemicals/mixing time, calculate G-value/reaction rates, calculate efficiency)

**Acceptance Criteria:**
- Mixing time within recommended ranges (10s-60min per TCVN 7222:2002)
- G-value meet standards (300-1000 s⁻¹ for rapid mixing)
- Calculate reaction rates using validated kinetic constants
- Calculate final concentrations after specified time
- Calculate reaction efficiency as percentage

**Key Inputs:** Q, t, [Fe²⁺]_0, [H₂S]_0, C_thực, k_Fe, k_H₂S, L:W:H ratio, Target G

**Key Outputs:** V, L×W×H, r_Fe, r_H₂S, [Fe²⁺]_t, [H₂S]_t, η_Fe, η_H₂S, G, P

**Calculation Steps:** 13 steps from receiving flowrate to validating dimensions

**Constraints:** Mixing time in ranges (rapid: 10-30s, slow: 20-40min, reaction: 30-60min), k_Fe: 0.01-0.1, k_H₂S: 0.05-0.2

**Edge Cases:** Unusually high/low coagulant doses, very long reaction times, extremely high concentrations, missing rate constants

### 4.4. Module 4 - Sedimentation Tank

**User Stories:** US-S1 to US-S3 (enter surface loading rate/detention time, calculate efficiency, design inclined plate settler)

**Acceptance Criteria:**
- Surface loading: 20-40 m³/m²·day (supply), 0.5-1.5 m³/m²·h (wastewater) per TCVN 7222:2002
- Overflow rate must not exceed design standard
- Calculate settling efficiency based on particle settling velocity and surface loading
- Use correct formula for inclined plate settler area

**Key Inputs:** Q, α, U_o, H, W, θ, D:R ratio, Tank depth

**Key Outputs:** Q₁, F, S, R, D, H_tank, V, v, t_lắng, η

**Calculation Steps:** 15 steps from receiving flowrate to validating results

**Constraints:** SLR = 1-3 m³/m²·h (supply), 0.5-1.5 m³/m²·h (wastewater), t_lắng = 1.5-3h (supply), 2-4h (wastewater), η ≥ 70%

**Edge Cases:** Extreme aspect ratios, very low particle settling velocity, very high flowrates, missing particle settling velocity

### 4.5. Module 5 - Filtration Unit

**User Stories:** US-F1 to US-F3 (enter filtration rate/media type, calculate backwash parameters, calculate all filter heights)

**Acceptance Criteria:**
- Filtration rate: 6-15 m/h per TCVN 33-2006
- Backwash intensity: 12-15 l/s·m² (water-only), 8-12 l/s·m² (air-water)
- Calculate all filter component heights (h₁ to h₈)
- Calculate total headloss through filter media
- Calculate filter cycle time based on headloss development

**Key Inputs:** Q, v, q, t_rửa, n, d, Filter type, Media type, L₄, C

**Key Outputs:** f₁, f₂, f₁', D, F₁, v_actual, h₁-h₈, H, H₂, Q_rửa, V_rửa, T_lọc, Headloss

**Calculation Steps:** 20 steps from receiving flowrate to validating backwash intensity

**Constraints:** v = 6-10 m/h (gravity), q = 12-15 l/s·m² (water-only), t_rửa = 5-10 min, T_lọc = 12-48h, Headloss ≤ 2.5-3.0m

**Edge Cases:** Filter media mismatch, very high suspended solids, multiple filter cells, missing suspended solids data

---

## 5. Cross-Module Rules (V.4)

### 5.1. CM-01: Unit Consistency
- All results must include units
- Automatic unit conversion when data flows between modules
- Preserve unit information in intermediate calculations
- Display in user-selected units with conversion factors

### 5.2. CM-02: Error Handling
- Return structured error with explanation + suggestion for out-of-range values
- Error structure includes: error flag, parameter, value, unit, limit, standard, message, suggestion, confidence
- System must not proceed with invalid data

### 5.3. CM-03: Safety Margins
- Apply standard design safety factors (1.1-1.3 depending on module)
- Module 4: α = 1.05 (default)
- Module 1: Consider 1.1-1.2 for pump selection
- User can override with explicit input
- Always document safety factor usage

### 5.4. CM-04: Standards Compliance
- All calculations must use TCVN/QCVN references
- Flag non-compliance and recommend human review
- Compliance checks: V_h ≤ 1.2 m/s, V_d ≤ 2.4 m/s, v_filter = 6-10 m/h, q_backwash = 12-15 l/s·m², SLR within ranges

### 5.5. CM-05: Data Flow Validation
- Validate data consistency, unit compatibility, and value ranges before proceeding
- Check required parameters are present
- Verify unit compatibility (convert if needed)
- Validate value ranges against receiving module constraints
- Flag inconsistencies for user review

### 5.6. CM-06: Formula Source Citation
- Every calculation step must cite formula source
- Format: "Darcy-Weisbach equation, TCVN 33-2006" or "Colebrook-White equation, IV.2.1"
- System must never invent formulas

---

## 6. Edge Cases (V.5)

### 6.1. EC-01: Extremely Low Flowrates
- Q < 10 m³/day, Re < 2000 (laminar flow)
- Use λ = 64/Re formula
- Warn about sedimentation issues
- Flag for human review if Q < 5 m³/day

### 6.2. EC-02: Very High Flowrates
- Pipe diameter > DN1000, Q > 10,000 m³/day
- Flag for cost review
- Warn about installation challenges
- Suggest multiple parallel lines
- Recommend expert consultation

### 6.3. EC-03: Temperature Extremes
- Temperature < 10°C or > 40°C
- Adjust calculations accordingly
- Flag and request confirmation

### 6.4. EC-04: Unusually High/Low Coagulant Doses
- Dose outside typical range (> 100 mg/l or < 5 mg/l)
- Flag as unusual, request confirmation
- Suggest alternative treatment or jar testing

### 6.5. EC-05: Sedimentation Tanks with Extreme Aspect Ratios
- Length:Width ratio > 5:1 or < 1:1
- Flag as non-standard design
- Suggest optimal ratio (2:1 to 4:1)
- Recommend CFD analysis for extreme cases

### 6.6. EC-06: Filter Media Mismatch
- Selected filtration rate incompatible with media type
- Check media type against rate (Sand: 6-10 m/h, Anthracite: 8-12 m/h, Dual: 10-15 m/h)
- Flag mismatch, suggest appropriate media or adjust rate

### 6.7. EC-07: Missing Critical Inputs
- Required input not provided
- Stop calculation, return structured error
- List all missing required inputs
- Suggest default values with impact assessment
- Request user confirmation before using defaults

### 6.8. EC-08: Module Chain Dependencies
- User selects module without required predecessor
- Detect dependency violation
- Warn about missing data
- Offer to add required module, allow manual input, or use default with warning

---

## 7. Summary of Module IO (V.6)

### 7.1. Module Input/Output Matrix
Comprehensive table showing primary inputs, primary outputs, and key calculations for all 5 modules.

### 7.2. Data Flow Summary
- **Module 1 → Module 2:** Q (m³/s → m³/h), v, D, Re, ε [optional]
- **Module 2 → Module 3:** Q (m³/h), C_phun, C_thực, C_ht
- **Module 3 → Module 4:** Q (m³/h), t, L×W×H [for reference]
- **Module 4 → Module 5:** Q (m³/h), D×R×H [for reference], Water quality parameters

---

## 8. Non-Functional Requirements (V.7)

### 8.1. NFR-01: Performance
- Single module: < 5 seconds
- Full chain (5 modules): < 30 seconds
- PDF report: < 2 minutes
- Support 50+ concurrent users
- API response: < 1 second
- Database queries: < 500ms
- **Priority:** High

### 8.2. NFR-02: Scalability
- Horizontal scaling support
- Database partitioning and replication
- Caching for frequently accessed data
- Load balancing for high availability
- **Priority:** Medium

### 8.3. NFR-03: Reliability
- 99.5% uptime (≈3.65 days downtime/year)
- Automatic daily backups (30-day retention)
- Graceful error recovery
- ACID-compliant transactions
- Audit logging for all calculations
- **Priority:** High

### 8.4. NFR-04: Security
- User authentication required
- Role-based access control (RBAC)
- Data encryption at rest and in transit
- Input validation and sanitization
- Secure session management
- HTTPS and rate limiting for API
- **Priority:** High

### 8.5. NFR-05: Usability
- Clean, intuitive interface
- Contextual help and tooltips
- Clear, actionable error messages (EN+VI)
- Real-time validation with immediate feedback
- Responsive design (desktop, tablet, mobile)
- WCAG 2.1 Level AA accessibility
- **Priority:** High

### 8.6. NFR-06: Maintainability
- Clean architecture principles
- Comprehensive documentation
- Modular design for independent updates
- API versioning for backward compatibility
- > 80% code coverage with tests
- **Priority:** Medium

### 8.7. NFR-07: Compatibility
- Browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- OS: Windows, macOS, Linux
- Mobile: iOS and Android (responsive design)
- Screen resolutions: 1280x720 to 4K
- Print: A4 and A3 paper sizes
- **Priority:** Medium

### 8.8. NFR-08: Localization
- Languages: Primary Vietnamese, secondary English
- Units: SI (metric) and Imperial with conversion
- Standards: TCVN (Vietnam) with option for ISO, DIN
- Date/time: DD/MM/YYYY (Vietnamese) and ISO format
- Number formats: Vietnamese (comma as decimal) and international
- **Priority:** Medium

---

## 9. Integration Requirements (V.8)

### 9.1. INT-01: Data Import
- CSV, Excel (.xlsx, .xls), JSON import
- Data validation before processing
- Clear error messages for invalid data
- **Priority:** Medium

### 9.2. INT-02: Data Export
- PDF (with company template), Excel, JSON, Markdown, CSV export
- **Priority:** High

### 9.3. INT-03: API Integration
- RESTful API following OpenAPI 3.0
- API key or OAuth 2.0 authentication
- Rate limiting
- API versioning (v1, v2, etc.)
- Complete API documentation with examples
- **Priority:** Medium

---

## 10. Testing Requirements (V.9)

### 10.1. TEST-01: Unit Testing
- > 80% code coverage for calculation modules
- Test cases for normal operation, edge cases, error conditions
- Use validated test data from engineering handbooks
- Automated test execution in CI/CD pipeline
- **Priority:** High

### 10.2. TEST-02: Integration Testing
- Test all valid module chain combinations
- Test data flow between modules with unit conversions
- Test error propagation through module chains
- Test performance of full chain calculations
- **Priority:** High

### 10.3. TEST-03: Validation Testing
- Results must match manual calculations within ±3% for standard cases
- Results must comply with TCVN 33-2006 and TCVN 7222:2002
- Use validated reference data from engineering projects
- Critical calculations reviewed by domain experts
- **Priority:** High

### 10.4. TEST-04: User Acceptance Testing
- Test with real project scenarios from company portfolio
- Collect feedback from engineers and designers
- Conduct usability testing with target users
- Test with realistic data volumes and concurrent users
- **Priority:** High

---

## 11. Documentation Requirements (V.10)

### 11.1. DOC-01: User Documentation
- Complete user manual (EN+VI)
- Quick start guide
- Video tutorials for common workflows
- FAQ with answers
- Example projects with step-by-step walkthroughs
- **Priority:** High

### 11.2. DOC-02: Technical Documentation
- Complete API documentation with examples
- System architecture and design decisions
- Database schema documentation
- Deployment and configuration guide
- Troubleshooting guide
- **Priority:** Medium

### 11.3. DOC-03: Formula Documentation
- Complete formula library with citations
- References to TCVN standards and engineering handbooks
- Mathematical derivation where applicable
- Formula limitations and applicable ranges
- Worked examples for each formula
- **Priority:** High

---

## 12. Compliance Requirements (V.11)

### 12.1. COMP-01: Standards Compliance
- All calculations must comply with TCVN 33-2006 and TCVN 7222:2002
- Water quality outputs must comply with QCVN standards
- System must validate outputs against standard limits
- System must flag non-compliant results for human review
- All standard references must be documented
- **Priority:** High

### 12.2. COMP-02: Data Privacy
- Encrypt sensitive user data
- Implement proper access control mechanisms
- Log all data access and modifications
- Define and implement data retention policies
- Obtain user consent for data processing where required
- **Priority:** High

---

## 13. Change Management (V.12)

### 13.1. CHG-01: Version Control
- Maintain version history for all calculations
- Track formula changes and updates
- Version control for system configurations
- Ability to rollback to previous versions
- Maintain changelog for all system updates
- **Priority:** Medium

### 13.2. CHG-02: Backward Compatibility
- Existing projects must continue to work after updates
- Automatic migration of old project data to new format
- Maintain API compatibility across versions
- Clear deprecation policy with advance notice
- Tools to migrate data between versions
- **Priority:** Medium

---

## 14. Summary (V.13)

### 14.1. Key Highlights
- **5 Independent Modules:** Pipe Hydraulics, Rainfall Aeration, Rapid Mixing, Sedimentation, Filtration
- **Flexible Module Chains:** Support for 1-5 modules in various combinations
- **Standards Compliance:** Full compliance with TCVN 33-2006 and TCVN 7222:2002
- **Comprehensive Validation:** Input validation, range checking, and standards compliance checking
- **Detailed Calculations:** Step-by-step calculations with formula citations
- **Error Handling:** Structured error handling with suggestions and confidence scores
- **Data Flow:** Automatic data flow between modules with unit conversion
- **Multiple Export Formats:** PDF, Excel, JSON, Markdown export capabilities

### 14.2. Purpose
This document defines comprehensive functional requirements for the XLNC Automated Water Treatment Calculation System, covering 5 independent modules that can be combined flexibly. Each module has detailed specifications for inputs, outputs, calculations, constraints, and edge cases. The system must comply with Vietnamese technical standards and provide accurate, validated engineering calculations.

---

## 15. Cross-References

### 15.1. Related Sections
- **I.5 (Scope & Modules):** Module definitions and chain selection
- **I.9 (Input/Output summary):** General I/O overview
- **III.3 (Module architecture & data flow):** Technical architecture details
- **IV.2 (Engineering Formulas Library):** Formula sources and references
- **IV.5 (Reference Ranges):** Validation ranges used in error checking

### 15.2. Critical Rules Summary
- **MANDATORY:** All acceptance criteria must be met
- **STANDARDS:** Must comply with TCVN 33-2006 and TCVN 7222:2002
- **VALIDATION:** Must validate all inputs and flag non-compliant results
- **CITATION:** Must cite all formula sources, never invent formulas
- **ERROR HANDLING:** Must use structured error format with suggestions
- **DATA FLOW:** Must validate data consistency and unit compatibility between modules

---

**END OF CANONICAL SUMMARY**

*This section provides complete functional requirements for the XLNC Automated Water Treatment Calculation System, including user stories, acceptance criteria, detailed module specifications, cross-module rules, non-functional requirements, integration, testing, documentation, compliance, and change management. This section supplements and details content in I.5 (Scope & Modules), I.9 (Input/Output summary), and supports III.3 (Module architecture & data flow), IV.2 (Engineering Formulas Library).*

