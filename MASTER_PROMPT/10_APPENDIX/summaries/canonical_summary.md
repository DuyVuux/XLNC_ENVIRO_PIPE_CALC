# Canonical Summary: 10_APPENDIX

**Section ID:** `10_APPENDIX`  
**Last Updated:** 2024  
**Total Chunks:** 6  
**Purpose:** Provides quick reference materials, lookup tables, code templates, API endpoint references, error codes, troubleshooting guides, and compliance checklists for rapid development and problem-solving in the XLNC Automated Water Treatment Calculation System.

**Chunk List:**
- `chunk_01`: Header & Quick Reference Guides (X.0, X.1.1 to X.1.3) - Module I/O quick reference, unit conversion tables, module chain quick reference
- `chunk_02`: API Endpoint Reference (X.2.1 to X.2.4) - Authentication endpoints, calculation endpoints, project endpoints, documentation endpoints
- `chunk_03`: Error Codes & Troubleshooting (X.3.1 to X.3.3) - HTTP status codes, application error codes, troubleshooting guide
- `chunk_04`: Code Templates & Examples (X.4.1 to X.4.3) - Backend API endpoint template, frontend API call template, unit conversion template
- `chunk_05`: Formulas Quick Lookup (X.5.1 to X.5.5) - All formulas for all 5 modules (Pipeline, Aeration, Mixing, Settling, Filtration)
- `chunk_06`: Standards & Compliance Checklist + Conclusion (X.6.1 to X.6.4, X.7) - TCVN checklist, QCVN checklist, NĐ 13/2023 checklist, Security compliance checklist, conclusion

---

## 1. Header & Quick Reference Guides (X.0, X.1)

### 1.1. Overview
- Purpose: Quick reference materials for rapid development and problem-solving
- Content: Module I/O tables, unit conversion tables, module chain reference
- Priority: Medium (Reference material)

### 1.2. Module Input/Output Quick Reference (X.1.1)
**All 5 Modules Covered:**
- Module 1 (Pipeline): Inputs (Q, D, L, ε, t, β), Outputs (v, Re, λ, H, Hyc)
- Module 2 (Aeration): Inputs (Q, t, C_Fe, C_H2S, C_ban_đầu, η), Outputs (C_ox, C_ht, C_thực, C_phun, F)
- Module 3 (Mixing): Inputs (Q, t, reaction type, C₀, k), Outputs (V, r, C, η)
- Module 4 (Settling): Inputs (Q, U_o, t_lắng, tank type), Outputs (SLR, F, V, η)
- Module 5 (Filtration): Inputs (Q, v, filter type, q, t_rửa), Outputs (F₁, Q_rửa, V_rửa, H)

**Priority:** High

### 1.3. Unit Conversion Quick Reference (X.1.2)
**Conversion Tables:**
- Flowrate: m³/s ↔ m³/h ↔ m³/ngày ↔ l/s
- Length: m ↔ mm ↔ cm ↔ km
- Time: s ↔ phút ↔ h
- Pressure/Head: m ↔ kPa ↔ bar ↔ atm

**Priority:** Medium

### 1.4. Module Chain Quick Reference (X.1.3)
**Valid Module Chains:**
- 1→2→3→4→5: Complete treatment
- 1→3→4→5: Treatment without aeration
- 1→2→4→5: Treatment without mixing
- 1→4→5: Basic treatment
- 1→5: Minimal treatment
- 2→3→4→5: Treatment without pipeline
- 3→4→5: Chemical treatment
- 4→5: Physical treatment

**Chain Selection Logic:**
- If Fe²⁺ > 0.3 mg/l OR H₂S > 0.05 mg/l: Include Module 2
- If chemical treatment needed: Include Module 3
- If suspended solids > 10 mg/l: Include Module 4
- Always include Module 5 for final treatment

**Priority:** High

---

## 2. API Endpoint Reference (X.2)

### 2.1. Authentication Endpoints (X.2.1)
**Endpoints:**
- POST /api/v1/auth/register
- POST /api/v1/auth/login
- POST /api/v1/auth/logout
- POST /api/v1/auth/refresh
- POST /api/v1/auth/forgot-password
- POST /api/v1/auth/reset-password
- GET /api/v1/auth/verify-email
- GET /api/v1/auth/me
- GET/PUT/DELETE /api/v1/users/profile
- GET/PUT /api/v1/users/preferences
- GET /api/v1/users/export-data

**Priority:** High

### 2.2. Calculation Endpoints (X.2.2)
**Endpoints:**
- POST /api/v1/modules/{module_id}/calculate
- GET /api/v1/modules/{module_id}/formulas
- GET /api/v1/modules/{module_id}/requirements
- POST /api/v1/module-chains/calculate
- POST /api/v1/module-chains/recommend
- GET /api/v1/module-chains/valid-chains
- GET/PUT/DELETE /api/v1/calculations/{calculation_id}
- POST /api/v1/calculations/{calculation_id}/export

**Priority:** High

### 2.3. Project Endpoints (X.2.3)
**Endpoints:**
- GET/POST /api/v1/projects
- GET/PUT/DELETE /api/v1/projects/{project_id}
- GET/POST /api/v1/projects/{project_id}/calculations

**Priority:** Medium

### 2.4. Documentation Endpoints (X.2.4)
**Endpoints:**
- GET /api/v1/docs
- GET /api/v1/docs/modules/{module_id}
- GET /api/v1/docs/standards
- GET /api/v1/docs/glossary
- GET /api/v1/docs/examples

**Priority:** Low

---

## 3. Error Codes & Troubleshooting (X.3)

### 3.1. HTTP Status Codes (X.3.1)
**Standard Codes:**
- 200 OK, 201 Created
- 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- 409 Conflict, 422 Unprocessable Entity
- 429 Too Many Requests
- 500 Internal Server Error, 503 Service Unavailable

**Priority:** High

### 3.2. Application Error Codes (X.3.2)
**Error Categories:**
- **Validation Errors (VAL_*):** VAL_001 to VAL_007 (Invalid flowrate, diameter, temperature, unit, missing input, invalid chain, unit inconsistency)
- **Calculation Errors (CALC_*):** CALC_001 to CALC_006 (Calculation failed, formula error, division by zero, negative result, out of range, module dependency error)
- **Authentication Errors (AUTH_*):** AUTH_001 to AUTH_006 (Invalid credentials, token expired, token invalid, account locked, email not verified, guest rate limit exceeded)
- **Authorization Errors (AUTHZ_*):** AUTHZ_001 to AUTHZ_004 (Permission denied, resource ownership, guest access denied, admin required)

**Priority:** High

### 3.3. Troubleshooting Guide (X.3.3)
**Common Issues:**
- Invalid flowrate: Check value > 0, verify unit
- Module dependency error: Ensure previous modules completed successfully
- Unit inconsistency: Convert all inputs to consistent units
- Rate limit exceeded: Wait for reset, reduce request frequency
- Token expired: Refresh token using /api/v1/auth/refresh

**Priority:** Medium

---

## 4. Code Templates & Examples (X.4)

### 4.1. Backend API Endpoint Template (X.4.1)
**Template Features:**
- FastAPI router setup
- Pydantic models for input validation
- Error handling (ValidationError, CalculationError)
- Logging integration
- User authentication (optional)

**Priority:** Medium

### 4.2. Frontend API Call Template (X.4.2)
**Template Features:**
- TypeScript interfaces
- Axios API calls
- Token management
- Automatic token refresh on 401
- Error handling

**Priority:** Medium

### 4.3. Unit Conversion Template (X.4.3)
**Template Features:**
- Enum for units
- Conversion factors dictionary
- Bidirectional conversion
- Error handling for unsupported conversions

**Priority:** Medium

---

## 5. Formulas Quick Lookup (X.5)

### 5.1. Module 1 Formulas (X.5.1)
**Formulas:**
- Velocity: v = 4Q / (πD²)
- Reynolds Number: Re = vD / ν
- Friction Factor: 1/√λ = -2 log₁₀(ε/(3.7D) + 2.51/(Re√λ))
- Head Loss: H = λ(L/D)(v²/(2g)) + Σ(β)(v²/(2g))
- Required Head: Hyc = H + H_static + H_safety

**Priority:** High

### 5.2. Module 2 Formulas (X.5.2)
**Formulas:**
- Saturated Oxygen: C_ox = 468 / (31.6 + t)
- Total Oxygen Required: C_ht = 0.143 × C_Fe + 0.5 × C_H2S + (C_ox - C_ban_đầu)
- Actual Dissolved Oxygen: C_thực = C_ban_đầu + η × (C_ox - C_ban_đầu)
- Spray Intensity: C_phun = C_ht / (η × C_ox)
- Aeration Area: F = Q / C_phun

**Priority:** High

### 5.3. Module 3 Formulas (X.5.3)
**Formulas:**
- Mixing Tank Volume: V = Q × t
- Reaction Rate: r = k × [A] × [B]
- Final Concentration: C = C₀ × e^(-kt)
- Reaction Efficiency: η = (C₀ - C) / C₀ × 100%

**Priority:** High

### 5.4. Module 4 Formulas (X.5.4)
**Formulas:**
- Surface Loading Rate: SLR = Q / F
- Settling Area: F = Q / (U_o × 3600)
- Tank Volume: V = Q × t_lắng
- Settling Efficiency: η = (U_o / SLR) × 100%

**Priority:** High

### 5.5. Module 5 Formulas (X.5.5)
**Formulas:**
- Filter Area: F₁ = Q / v
- Backwash Flowrate: Q_rửa = q × F₁ × 3.6
- Backwash Volume: V_rửa = Q_rửa × t_rửa / 60
- Head Loss: H = f₁ × (v² / (2g))

**Priority:** High

---

## 6. Standards & Compliance Checklist (X.6)

### 6.1. TCVN Standards Checklist (X.6.1)
**TCVN 33-2006:**
- Pipeline design, pipe roughness values, filtration rate (6-10 m/h), backwash intensity (12-15 l/s·m²)

**TCVN 7222:2002:**
- Mixing time (10-30s fast, 20-40 min slow), settling time (1.5-3h horizontal, 1-2h vertical), aeration efficiency (0.7-0.9)

**TCVN 9113:2012:**
- Pipe material selection, pipe roughness values

**Priority:** High

### 6.2. QCVN Compliance Checklist (X.6.2)
**QCVN 01:2009/BYT:**
- Fe²⁺ < 0.3 mg/l, H₂S < 0.05 mg/l, Turbidity < 2 NTU, pH: 6.5-8.5, Coliform: 0 CFU/100ml

**QCVN 08:2015/BTNMT:**
- Input water quality checked, treatment designed to meet QCVN 01:2009 output

**Priority:** High

### 6.3. NĐ 13/2023 Compliance Checklist (X.6.3)
**Requirements:**
- Data Collection: Only necessary data, explicit consent, documented purpose, privacy policy in Vietnamese
- Data Storage: Encryption at rest (AES-256), limited access, retention policies (30 days)
- Data Processing: Stated purposes only, no third-party sharing without consent, PII masking
- User Rights: Access, correction, deletion, object
- Data Breach: Report within 72 hours, notify users within 24 hours, document actions

**Priority:** Critical

### 6.4. Security Compliance Checklist (X.6.4)
**Authentication:**
- JWT-based, access token 15 min, refresh token 7 days, bcrypt (cost 12), account lockout after 5 attempts

**Authorization:**
- RBAC (guest, engineer, admin), resource ownership checks, guest access limitations

**API Security:**
- HTTPS mandatory (TLS 1.2+), rate limiting, CORS, input validation, OWASP Top 10 protection

**Data Security:**
- Encryption at rest (AES-256), encryption in transit (HTTPS/TLS), PII masking, secure key management

**Priority:** Critical

---

## 7. Conclusion (X.7)

**Summary:**
This appendix provides quick reference materials for rapid development and problem-solving in the XLNC Automated Water Treatment Calculation System. It includes:

- **Quick Reference Guides:** Module I/O, unit conversions, module chains
- **API Endpoint Reference:** Complete list of all API endpoints
- **Error Codes & Troubleshooting:** HTTP status codes, application error codes, troubleshooting guide
- **Code Templates & Examples:** Backend API templates, frontend API call templates, unit conversion templates
- **Formulas Quick Lookup:** All formulas for all 5 modules
- **Standards & Compliance Checklists:** TCVN, QCVN, NĐ 13/2023, Security compliance checklists

This appendix should be used as a quick lookup reference when implementing features, debugging issues, or ensuring compliance with standards and regulations.

**Hóa phàm:**
Phụ lục này là bảng tra cứu nhanh cho tất cả thông tin cần thiết: công thức, API, mã lỗi, mẫu code, và checklist tuân thủ. Sử dụng khi cần tra cứu nhanh trong quá trình phát triển.

---

## Cross-References

**Related Sections:**
- **Phần IV (Domain Knowledge Base):** Formulas, glossary, reference tables
- **Phần V (Functional Requirements):** Module I/O specifications
- **Phần IX (Security & Authentication):** Security compliance checklist, API security
- **Phần VIII (Logging & Monitoring):** Error logging, troubleshooting

**Related Chunks:**
- `04_DOMAIN_KNOWLEDGE_BASE_chunk_06` - Glossary & Reference Tables
- `05_FUNCTIONAL_REQUIREMENTS_chunk_07` - Module I/O Summary
- `09_SECURITY_AUTHENTICATION_chunk_08` - Security Policies & Compliance

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All 6 chunks created with full metadata and content preservation






