# Canonical Summary: 06_WORKFLOW_AUTOMATION

**Section ID:** `06_WORKFLOW_AUTOMATION`  
**Last Updated:** 2024  
**Total Chunks:** 8  
**Purpose:** Defines complete workflows for XLNC Automated Water Treatment Calculation System, including single module calculation, module chain orchestration, data flow between modules, module chain recommendation, validation, error handling, and report generation. All workflows ensure accuracy, consistency, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002).

**Chunk List:**
- `chunk_01`: Header & Overview (VI.0, VI.1)
- `chunk_02`: Single Module Calculation Workflow (VI.2) - Complete with all 5 module-specific workflows
- `chunk_03`: Module Chain Calculation Workflow (VI.3)
- `chunk_04`: Module Chain Recommendation Workflow (VI.4)
- `chunk_05`: Data Flow & Transformation Workflow (VI.5)
- `chunk_06`: Validation & Error Handling Workflow (VI.6)
- `chunk_07`: Report Generation Workflow (VI.7)
- `chunk_08`: Summary, Diagrams, Examples & Conclusion (VI.8, VI.9, VI.10, VI.11)

---

## 1. Header & AI Instructions (VI.0)

### 1.1. Role Setup
- AI Assistant must master workflow definitions for XLNC system
- Must understand single module, chain, recommendation, validation, and report workflows
- Must reference workflow steps correctly when implementing

### 1.2. Task Description
AI must:
1. Master single module calculation workflow (VI.2)
2. Understand module chain orchestration workflow (VI.3)
3. Master module chain recommendation logic (VI.4)
4. Understand validation and error handling workflows (VI.5, VI.6)
5. Reference correctly when implementing workflows

### 1.3. Reasoning Instructions (4-Step Process)
1. Identify workflow type (single module, chain, recommendation)
2. Apply workflow steps in correct order
3. Check data flow between modules
4. Apply validation and error handling

---

## 2. Overview (VI.1)

### 2.1. Workflow Components
1. **Single Module Calculation Workflow** — Step-by-step process for calculating individual modules
2. **Module Chain Calculation Workflow** — Sequential calculation of module chains with automatic data passing
3. **Module Chain Recommendation Workflow** — Intelligent recommendation based on project requirements
4. **Data Flow & Transformation Workflow** — Management of data flow between modules with unit conversion
5. **Validation & Error Handling Workflow** — Comprehensive validation and error handling strategies
6. **Report Generation Workflow** — Multi-format report generation for different use cases

### 2.2. Design Principles
- All workflows ensure accuracy, consistency, and compliance with TCVN 33-2006 and TCVN 7222:2002
- Standardized processes for all module calculations and data flow
- Comprehensive validation and error handling at every step
- Clear workflows that guide users through complex calculations

---

## 3. Single Module Calculation Workflow (VI.2)

### 3.1. Workflow Steps (5 Steps)
1. **Input Validation:** Validate all required inputs against technical standards and acceptable ranges
2. **Unit Normalization:** Convert all inputs to standard SI units for internal calculations
3. **Calculation Execution:** Execute module-specific formulas in correct sequence with proper citations
4. **Result Validation:** Validate calculated results against technical standards and physical constraints
5. **Output Formatting:** Format results with proper units, precision, structure, and "Hóa phàm"

### 3.2. Module-Specific Workflows

**Module 1 - Pipe Hydraulics:**
- 11-step calculation sequence from validation to output formatting
- Key calculations: velocity, Reynolds, friction factor, headloss, required head

**Module 2 - Rainfall Aeration:**
- 10-step calculation sequence
- Key calculations: oxygen saturation, oxygen requirements, spray intensity, actual oxygen

**Module 3 - Rapid Mixing Tank:**
- 12-step calculation sequence
- Key calculations: mixing volume, tank dimensions, reaction rates, removal efficiency

**Module 4 - Sedimentation Tank:**
- 11-step calculation sequence
- Key calculations: surface area, tank dimensions, settling velocity, settling time, efficiency

**Module 5 - Filtration Unit:**
- 14-step calculation sequence
- Key calculations: filter area, dimensions, heights, backwash parameters, cycle time

---

## 4. Module Chain Calculation Workflow (VI.3)

### 4.1. Supported Module Chains
- `1 → 2 → 3 → 4 → 5` (Full chain)
- `1 → 3 → 4` (Skip aeration)
- `1 → 2 → 5` (Skip mixing and sedimentation)
- `1 → 4 → 5` (Skip aeration and mixing)
- `1 → 5` (Simple chain)
- `1 → 2 → 3` (Stop at mixing)

**Note:** Module 1 is always required as it provides base flowrate (Q).

### 4.2. Workflow Steps (5 Steps)
1. **Chain Validation:** Validate module chain configuration is valid and logically consistent
2. **Input Preparation:** Prepare inputs for the first module in the chain
3. **Sequential Module Calculation:** Calculate each module in sequence, passing outputs as inputs to next module
4. **Chain Result Aggregation:** Aggregate results from all modules into unified result object
5. **Error Handling in Chain:** Handle errors gracefully, allowing partial results

### 4.3. Data Flow Mapping
- **Module 1 → Module 2:** Q, v, D, Re, ε
- **Module 2 → Module 3:** Q, C_phun, C_thực (→ C_ox), C_ht
- **Module 3 → Module 4:** Q, t, Tank dimensions
- **Module 4 → Module 5:** Q, Tank dimensions, Water quality parameters

---

## 5. Module Chain Recommendation Workflow (VI.4)

### 5.1. Input Parameters
- **Required:** Project scale (Q), water quality parameters (Fe²⁺, H₂S, turbidity, suspended solids)
- **Optional:** Budget constraints, space constraints, treatment level, technology preference

### 5.2. Recommendation Algorithm (4 Steps)
1. **Scale Classification:** Classify into Small (< 100 m³/ngày), Medium (100-1000 m³/ngày), or Large (> 1000 m³/ngày)
2. **Water Quality Analysis:** Analyze water quality to determine treatment requirements
3. **Chain Selection:** Select appropriate chain based on scale and water quality
4. **Recommendation Generation:** Generate recommendation with explanation, alternatives, and warnings

### 5.3. Selection Rules
- **Small Scale:** Minimum `1 → 5`, Recommended `1 → 4 → 5` (if suspended solids present)
- **Medium Scale:** Recommended `1 → 3 → 4 → 5` (if Fe²⁺/H₂S present), Alternative `1 → 2 → 5`
- **Large Scale:** Recommended `1 → 2 → 3 → 4 → 5` (full chain)
- **Special Cases:** High Fe²⁺/H₂S → include Module 2 and 3, High suspended solids → include Module 4, High turbidity → include Module 5

---

## 6. Data Flow & Transformation Workflow (VI.5)

### 6.1. Data Flow Rules (4 Rules)
1. **Automatic Data Passing:** Outputs from module i automatically become inputs to module i+1 if they match
2. **User Input Override:** User can provide direct inputs to any module, which override automatic data passing
3. **Unit Conversion:** System automatically converts units when passing data between modules
4. **Missing Data Handling:** If required data missing, prompt user or use defaults with warning

### 6.2. Unit Conversion Rules
- Flowrate: Convert to module's preferred unit (Module 1: m³/s, Modules 2-5: m³/h)
- Length: Always convert to m (meters)
- Time: Convert to module's preferred unit (s, min, h)
- Concentration: Always mg/l

### 6.3. Data Transformation Examples
- Module 1 → Module 2: Q = 0.005787 m³/s × 3600 = 20.833 m³/h
- Module 2 → Module 3: Q = 60 m³/h (no conversion), C_ox = C_thực = 6.616 mg/l (mapped)

---

## 7. Validation & Error Handling Workflow (VI.6)

### 7.1. Input Validation (4 Types)
1. **Required Field Validation:** Check all required fields are present
2. **Data Type Validation:** Check data types match expected types
3. **Range Validation:** Check values are within acceptable ranges (from PhầnIV_Domain_Knowledge_Base.md)
4. **Unit Validation:** Check units are specified and valid

### 7.2. Calculation Validation (3 Types)
1. **Formula Application Validation:** Validate formulas applied correctly (no division by zero, valid arguments)
2. **Result Range Validation:** Validate calculated results within physically reasonable ranges
3. **Standards Compliance Validation:** Validate results comply with TCVN 33-2006 and TCVN 7222:2002

### 7.3. Error Handling Strategy
**Error Classification:**
- **Fatal Error:** Cannot proceed (missing required input, division by zero) → Stop calculation, return error
- **Warning:** Can proceed but result may be inaccurate → Continue calculation, flag warning
- **Info:** Informational message → Continue calculation, log info

**Error Response Structure:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "...",
    "detail": "...",
    "field": "...",
    "module": "...",
    "severity": "FATAL/WARNING/INFO",
    "suggestion": "...",
    "reference": "..."
  }
}
```

**Error Recovery:**
- Suggest corrections
- Provide partial results (if chain fails at module i, return results for modules 1 to i-1)
- Suggest alternative calculations

---

## 8. Report Generation Workflow (VI.7)

### 8.1. Report Types (3 Types)
1. **Calculation Report:** Detailed calculation report with formulas, steps, and results (PDF, Markdown, HTML)
2. **Summary Report:** High-level summary for management (PDF, Excel)
3. **Technical Report:** Detailed technical report for engineers (PDF, Markdown)

### 8.2. Report Generation Steps (5 Steps)
1. **Data Collection:** Collect all calculation results, inputs, and metadata
2. **Template Selection:** Select appropriate report template based on type and user preference
3. **Content Generation:** Generate report content using selected template
4. **Formatting:** Apply formatting according to report type and company standards
5. **Export:** Export report in requested format(s) (PDF, Excel, JSON, Markdown, HTML)

### 8.3. Report Contents
- Header (project name, date, modules, chain configuration)
- Input Summary (all inputs with units, source)
- Calculation Steps (step-by-step, formula citations, intermediate results)
- Results Summary (all outputs with units, compliance status, warnings/errors)
- Hóa phàm (plain language explanation, key findings, recommendations)

---

## 9. Summary, Diagrams, Examples & Conclusion (VI.8-VI.11)

### 9.1. Key Workflows Summary
This document defines 6 major workflows:
1. Single Module Calculation Workflow
2. Module Chain Calculation Workflow
3. Module Chain Recommendation Workflow
4. Data Flow & Transformation Workflow
5. Validation & Error Handling Workflow
6. Report Generation Workflow

### 9.2. Workflow Integration
All workflows integrated to provide seamless user experience:
- User inputs → Validation → Calculation → Results → Reports
- Module chains automatically orchestrate data flow
- Recommendations guide users to optimal configurations
- Comprehensive error handling ensures system reliability

### 9.3. Workflow Best Practices
1. Always validate inputs before calculation
2. Use module chains for complex projects
3. Review recommendations before accepting
4. Validate results against standards
5. Export reports for documentation

### 9.4. Performance Considerations
- Single Module Calculation: < 5 seconds
- Module Chain Calculation: < 30 seconds for full chain (5 modules)
- Module Chain Recommendation: < 2 seconds
- Report Generation: < 2 minutes for standard project

### 9.5. Error Recovery Strategies
1. Input Validation Errors: Suggest corrections, allow user to fix without losing data
2. Calculation Errors: Log error details, provide error message, suggest alternatives
3. Data Flow Errors: Allow manual input override when automatic passing fails
4. System Errors: Save calculation state, allow recovery after restart

### 9.6. Workflow Diagrams
- Single Module Calculation Flowchart
- Module Chain Calculation Flowchart
- Module Chain Recommendation Flowchart

### 9.7. Workflow Examples
- Example 1: Single Module Calculation (Module 1 - Pipe Hydraulics)
- Example 2: Module Chain Calculation (Full chain 1→2→3→4→5)
- Example 3: Module Chain Recommendation (Medium-scale project)

### 9.8. Conclusion
The workflows ensure:
- **Accuracy:** All calculations follow validated engineering formulas and Vietnamese technical standards
- **Consistency:** Standardized processes for all module calculations and data flow
- **Reliability:** Comprehensive validation and error handling at every step
- **Usability:** Clear workflows that guide users through complex calculations
- **Flexibility:** Support for single modules, module chains, and intelligent recommendations

---

## 10. Cross-References

### 10.1. Related Sections
- **Phần V (Functional Requirements):** User stories, acceptance criteria, module specifications
- **Phần IV (Domain Knowledge Base):** Formulas, reference ranges, standards
- **Phần III (Architecture Rules):** Module architecture, data flow, API design

### 10.2. Critical Workflow Rules
- **MANDATORY:** Must follow workflow steps in correct order
- **DATA FLOW:** Must validate data consistency and unit compatibility between modules
- **VALIDATION:** Must validate all inputs and results against standards
- **ERROR HANDLING:** Must use structured error format with suggestions
- **REPORT GENERATION:** Must include all calculation steps, formulas, and "Hóa phàm"

---

**END OF CANONICAL SUMMARY**

*This section provides complete workflows for the XLNC Automated Water Treatment Calculation System, including single module calculation, module chain orchestration, data flow, validation, error handling, and report generation. This section supplements and details content in Phần V (Functional Requirements) and supports actual implementation of the system.*

