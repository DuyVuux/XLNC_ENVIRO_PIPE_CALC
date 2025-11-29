# Global Canonical Summary: EnviroPipeCalc Master Prompt

**Document ID:** `MASTER_PROMPT_GLOBAL`  
**Version:** 1.0  
**Last Updated:** 2024  
**Total Sections:** 10  
**Total Chunks:** 81  
**Total Canonical Summaries:** 10  
**Purpose:** Comprehensive global summary of all sections in the EnviroPipeCalc Master Prompt, providing high-level overview, key requirements, cross-references, and navigation guide for the XLNC Automated Water Treatment Calculation System.

---

## Executive Summary / Tóm tắt Điều hành

**EN:**

The EnviroPipeCalc Master Prompt is a comprehensive specification document for the XLNC Automated Water Treatment Calculation System. It consists of 10 major sections covering introduction, roles & behaviors, architecture, domain knowledge, functional requirements, workflows, testing, observability, security, and reference materials. The system automates water treatment engineering calculations for 5 modules: Pipeline Hydraulics, Rainfall Aeration, Rapid Mixing, Sedimentation, and Filtration, following Vietnamese national standards (TCVN) and regulatory limits (QCVN).

**VI:**

Master Prompt EnviroPipeCalc là tài liệu đặc tả toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Nó bao gồm 10 phần chính về giới thiệu, vai trò & hành vi, kiến trúc, tri thức ngành, yêu cầu chức năng, quy trình, kiểm thử, quan sát, bảo mật, và tài liệu tham khảo. Hệ thống tự động hóa tính toán kỹ thuật xử lý nước cho 5 module: Thủy lực Đường ống, Giàn phun mưa, Trộn nhanh, Lắng, và Lọc, tuân theo tiêu chuẩn quốc gia Việt Nam (TCVN) và giới hạn quy định (QCVN).

---

## Section Overview / Tổng quan các Phần

### Phần I - Introduction (7 chunks)
**Purpose:** Project overview, goals, scope, stakeholders, deliverables, usage scenarios, persona  
**Key Content:** Project name (XLNC), 5 modules, success criteria, constraints, input/output summary  
**Priority:** Medium  
**Canonical Summary:** `01_INTRODUCTION/summaries/canonical_summary.md`

### Phần II - Roles & Behaviors (7 chunks) ⚠️ **MOST IMPORTANT**
**Purpose:** Define AI assistant roles, mandatory behaviors, response structure, validation rules  
**Key Content:** 5 roles (System, Assistant, User, Reviewer, DevOps), 10 mandatory behaviors, MANDATORY response structure (JSON → Technical Report → Hóa phàm), validation rules, "Do not" list  
**Priority:** **CRITICAL** - All AI responses MUST comply  
**Canonical Summary:** `02_ROLES_BEHAVIORS/summaries/canonical_summary.md`

### Phần III - Architecture Rules (7 chunks)
**Purpose:** Technology stack, architectural principles, module architecture, backend/frontend/database rules  
**Key Content:** Next.js + React, FastAPI (Python), PostgreSQL, modular design, stateless APIs, module chain orchestration, API design, security rules  
**Priority:** High  
**Canonical Summary:** `03_ARCHITECTURE_RULES/summaries/canonical_summary.md`

### Phần IV - Domain Knowledge Base (8 chunks) ⚠️ **MANDATORY**
**Purpose:** National standards, engineering formulas, domain glossary, reference tables, AI reasoning instructions  
**Key Content:** TCVN/QCVN standards, formulas for all 5 modules (Darcy-Weisbach, Colebrook-White, oxygen saturation, reaction rates, settling, filtration), EN-VI glossary, reference tables, construction workflow  
**Priority:** **MANDATORY** - AI must use correct formulas and terminology  
**Canonical Summary:** `04_DOMAIN_KNOWLEDGE_BASE/summaries/canonical_summary.md`

### Phần V - Functional Requirements (9 chunks)
**Purpose:** User stories, module specifications, inputs/outputs, cross-module rules, non-functional requirements  
**Key Content:** 8 general user stories, detailed specifications for 5 modules, acceptance criteria, input/output definitions, unit consistency rules, integration requirements  
**Priority:** High  
**Canonical Summary:** `05_FUNCTIONAL_REQUIREMENTS/summaries/canonical_summary.md`

### Phần VI - Workflow Automation (8 chunks)
**Purpose:** Calculation workflows, module chain orchestration, data flow, validation, error handling, report generation  
**Key Content:** Single module calculation workflow, module chain calculation workflow, module chain recommendation logic, data transformation, validation workflow, error handling, report generation  
**Priority:** High  
**Canonical Summary:** `06_WORKFLOW_AUTOMATION/summaries/canonical_summary.md`

### Phần VII - Testing & QA (9 chunks)
**Purpose:** Testing objectives, test types, test corpus, test cases, quality criteria, QA workflow  
**Key Content:** 7 test types (unit, integration, system, API contract, UI/UX, performance, security), test corpus for all modules, edge case handling, engineering threshold checks, QA workflow, test automation  
**Priority:** High  
**Canonical Summary:** `07_TESTING_QA/summaries/canonical_summary.md`

### Phần VIII - Logging, Monitoring & Observability (11 chunks)
**Purpose:** Logging framework, metrics, distributed tracing, alerts, SLOs, privacy & compliance logging  
**Key Content:** Structured JSON logs (6 levels: TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL), module-specific logging, Prometheus/Grafana metrics, OpenTelemetry tracing, alert priorities (P1-P4), SLOs, NĐ 13/2023 compliance logging  
**Priority:** High  
**Canonical Summary:** `08_LOGGING_MONITORING/summaries/canonical_summary.md`

### Phần IX - Security & Authentication (9 chunks)
**Purpose:** Security framework, authentication, authorization, API security, data protection, compliance  
**Key Content:** JWT-based authentication (access/refresh tokens), guest access with limitations, RBAC (guest, engineer, admin), API security (HTTPS, rate limiting, CORS, OWASP Top 10), data encryption, PII handling, NĐ 13/2023 compliance, security testing & auditing  
**Priority:** Critical  
**Canonical Summary:** `09_SECURITY_AUTHENTICATION/summaries/canonical_summary.md`

### Phần X - Appendix (6 chunks)
**Purpose:** Quick reference guides, API endpoints, error codes, code templates, formulas lookup, compliance checklists  
**Key Content:** Module I/O quick reference, unit conversion tables, module chain reference, API endpoint list, HTTP/application error codes, troubleshooting guide, code templates (backend/frontend), formulas quick lookup, TCVN/QCVN/NĐ 13/2023 checklists  
**Priority:** Medium (Reference material)  
**Canonical Summary:** `10_APPENDIX/summaries/canonical_summary.md`

---

## Key Requirements Summary / Tóm tắt Yêu cầu Chính

### Mandatory Requirements / Yêu cầu Bắt buộc

1. **Response Structure (II.3):** MANDATORY - All AI responses must follow: JSON → Technical Report → Hóa phàm
2. **Terminology (II.2.3, IV.3):** MANDATORY - Use consistent EN-VI terminology from glossary
3. **Formulas (IV.2):** MANDATORY - Only use formulas from TCVN standards and domain knowledge base
4. **Standards Compliance (IV.1, V.11, IX.8.1):** MANDATORY - Comply with TCVN, QCVN, NĐ 13/2023
5. **Security (IX):** MANDATORY - JWT authentication, RBAC, HTTPS, encryption, OWASP Top 10 protection

### Critical Requirements / Yêu cầu Quan trọng

1. **Accuracy (II.2.1):** No assumptions, verify all inputs, cite sources
2. **No Assumptions (II.2.2):** Never assume missing information, ask for clarification
3. **Bilingual (II.2.4):** All responses must be bilingual (EN + VI)
4. **Error Handling (II.2.6, VI.6):** Comprehensive error handling, graceful degradation
5. **Logging (VIII.2):** Structured JSON logs with required fields (timestamp, level, service, module, request_id, trace_id, etc.)

### High Priority Requirements / Yêu cầu Ưu tiên Cao

1. **Module Calculations (V.3):** Accurate calculations for all 5 modules with proper unit handling
2. **Module Chains (VI.3):** Support valid module chains (1→2→3→4→5, 1→3→4→5, etc.)
3. **Testing (VII):** Comprehensive test coverage for all modules and workflows
4. **Observability (VIII):** Complete logging, metrics, tracing, alerting
5. **API Design (III.7):** RESTful APIs, versioning, backward compatibility

---

## System Architecture Overview / Tổng quan Kiến trúc Hệ thống

### Technology Stack / Công nghệ

- **Frontend:** Next.js 14+ (App Router), React 18+, TypeScript, Tailwind CSS
- **Backend:** FastAPI (Python 3.11+), Pydantic, SQLAlchemy
- **Database:** PostgreSQL 15+, pgvector (for future AI features)
- **Authentication:** JWT (access + refresh tokens), bcrypt password hashing
- **Observability:** Loki/ELK (logs), Prometheus/Grafana (metrics), OpenTelemetry/Jaeger (tracing)
- **Security:** HTTPS/TLS 1.2+, rate limiting, CORS, OWASP Top 10 protection

### Module Architecture / Kiến trúc Module

**5 Calculation Modules:**
1. **Module 1 - Pipeline Hydraulics:** Darcy-Weisbach, Colebrook-White, Reynolds number, head loss
2. **Module 2 - Rainfall Aeration:** Oxygen saturation, Fe²⁺/H₂S oxidation, spray intensity
3. **Module 3 - Rapid Mixing/Reaction:** Mixing tank volume, reaction rates, Fe²⁺/H₂S kinetics
4. **Module 4 - Sedimentation Tank:** Surface loading rate, settling area, settling efficiency
5. **Module 5 - Filtration:** Filter area, backwash flowrate, head loss

**Module Chains:** Support multiple valid chains (1→2→3→4→5, 1→3→4→5, 1→4→5, etc.)

### Data Flow / Dòng chảy Dữ liệu

1. User inputs → Frontend validation
2. Frontend → Backend API (with authentication)
3. Backend → Module calculation engine
4. Module outputs → Next module (if chain) or final results
5. Results → Database (if authenticated) or temporary storage (if guest)
6. Results → Frontend display + export (PDF, Excel, JSON)

---

## Compliance & Standards / Tuân thủ & Tiêu chuẩn

### Vietnamese Standards / Tiêu chuẩn Việt Nam

**TCVN Standards:**
- **TCVN 33-2006:** Water Supply Systems - Pipeline design, pipe roughness, filtration rate (6-10 m/h), backwash intensity (12-15 l/s·m²)
- **TCVN 7222:2002:** Water Treatment - Mixing time (10-30s fast, 20-40 min slow), settling time (1.5-3h horizontal, 1-2h vertical), aeration efficiency (0.7-0.9)
- **TCVN 9113:2012:** Pipe Materials - Pipe material selection, pipe roughness values

**QCVN Standards:**
- **QCVN 01:2009/BYT:** Drinking Water Quality - Fe²⁺ < 0.3 mg/l, H₂S < 0.05 mg/l, Turbidity < 2 NTU, pH: 6.5-8.5
- **QCVN 08:2015/BTNMT:** Surface Water Quality - Input water quality limits

### Data Protection / Bảo vệ Dữ liệu

**NĐ 13/2023 Compliance:**
- Data collection: Only necessary PII, explicit consent, documented purpose
- Data storage: Encryption at rest (AES-256), limited access, retention policies (30 days after deletion)
- Data processing: Stated purposes only, no third-party sharing without consent, PII masking in logs
- User rights: Access, correction, deletion, object
- Data breach: Report within 72 hours, notify users within 24 hours

### Security Standards / Tiêu chuẩn Bảo mật

- **Authentication:** JWT-based, access token 15 min, refresh token 7 days, bcrypt (cost 12)
- **Authorization:** RBAC (guest, engineer, admin), resource ownership checks
- **API Security:** HTTPS mandatory (TLS 1.2+), rate limiting, CORS, input validation, OWASP Top 10 protection
- **Data Security:** Encryption at rest (AES-256), encryption in transit (HTTPS/TLS), PII masking, secure key management

---

## User Roles & Access / Vai trò Người dùng & Truy cập

### Guest (Unauthenticated)
- **Permissions:** View calculation interface, perform calculations (rate limited), export results (5 per day)
- **Restrictions:** Cannot save calculations, no access to history/projects, rate limited (10 requests/min)
- **Data Retention:** 24 hours (temporary storage)

### Engineer (Default Authenticated User)
- **Permissions:** Full calculation access, save calculations, create/manage projects, unlimited exports
- **Restrictions:** Cannot access admin features, cannot modify other users' data
- **Data Retention:** Indefinite (user can delete)

### Admin
- **Permissions:** All engineer permissions + user management, system settings, audit logs, role management
- **Restrictions:** Cannot delete own account, cannot modify critical settings without confirmation

---

## Key Workflows / Quy trình Chính

### Single Module Calculation Workflow
1. User inputs module parameters
2. Frontend validates inputs (type, range, unit)
3. Frontend sends request to backend API
4. Backend validates inputs again
5. Backend performs calculation using module formulas
6. Backend logs calculation (structured JSON)
7. Backend returns results
8. Frontend displays results + export options

### Module Chain Calculation Workflow
1. User selects module chain (or system recommends)
2. User inputs initial parameters
3. System calculates Module 1
4. System uses Module 1 outputs as Module 2 inputs
5. System continues through chain
6. System validates unit consistency across modules
7. System returns final results
8. System saves results (if authenticated)

### Module Chain Recommendation Workflow
1. System analyzes input water quality (Fe²⁺, H₂S, suspended solids)
2. System applies recommendation logic:
   - If Fe²⁺ > 0.3 mg/l OR H₂S > 0.05 mg/l → Include Module 2 (Aeration)
   - If chemical treatment needed → Include Module 3 (Mixing)
   - If suspended solids > 10 mg/l → Include Module 4 (Settling)
   - Always include Module 5 (Filtration)
3. System presents recommended chain to user
4. User can accept or modify

---

## Testing & Quality Assurance / Kiểm thử & Đảm bảo Chất lượng

### Test Types / Loại Kiểm thử

1. **Unit Tests:** Individual module calculations, formula accuracy
2. **Integration Tests:** Module chains, data flow between modules
3. **System Tests:** End-to-end workflows, user scenarios
4. **API Contract Tests:** API request/response validation
5. **UI/UX Tests:** User interface, user experience
6. **Performance Tests:** Calculation speed, API response time
7. **Security Tests:** Authentication, authorization, input validation, OWASP Top 10

### Quality Criteria / Tiêu chí Chất lượng

- **Deterministic:** Same inputs always produce same outputs
- **Reproducible:** Results can be reproduced by anyone
- **Comprehensive:** Cover all modules, workflows, edge cases
- **Self-documenting:** Test names and descriptions clearly explain what is being tested

### QA Workflow / Quy trình QA

- **Pre-commit:** Linting, formatting, unit tests
- **Pre-push:** Integration tests, API contract tests
- **Pre-merge:** System tests, performance tests
- **Pre-release:** Security tests, full regression suite

---

## Observability Framework / Khung Quan sát

### Logging / Ghi log

- **Format:** Structured JSON logs
- **Levels:** TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL
- **Required Fields:** timestamp, level, service, module, request_id, trace_id, user_id, session_id, duration_ms, message, context, environment, version
- **Module-Specific:** Detailed logging for all 5 modules and module chains
- **Compliance:** PII masking, NĐ 13/2023 compliance

### Metrics / Số liệu

- **System-Level:** CPU, memory, disk, network
- **Backend:** API request rate, response time, error rate
- **Module Calculation:** Calculation count, success rate, average duration
- **Frontend:** Page load time, API call duration, user interactions

### Tracing / Truy vết

- **Framework:** OpenTelemetry
- **Storage:** Jaeger/Tempo
- **Scope:** API requests, module calculations, database queries
- **Propagation:** trace_id propagated across all services

### Alerts / Cảnh báo

- **Priorities:** P1 (Critical), P2 (High), P3 (Medium), P4 (Low)
- **Channels:** Slack, Email, SMS (for P1)
- **Incident Response:** Detect → Acknowledge → Mitigate → Resolve → Post-Mortem

### SLOs / Mục tiêu Cấp độ Dịch vụ

- **Availability:** 99.9% uptime
- **Performance:** 95% of API requests < 500ms
- **Error Rate:** < 0.1% error rate
- **Data Integrity:** 100% calculation accuracy (validated against test corpus)

---

## Cross-References / Tham chiếu Chéo

### Related Sections / Phần Liên quan

- **Formulas:** Phần IV (Domain Knowledge Base) ↔ Phần X (Appendix - Formulas Quick Lookup)
- **Security:** Phần III.8 (Security Rules) ↔ Phần IX (Security & Authentication)
- **Logging:** Phần VIII (Logging & Monitoring) ↔ Phần IX.9.2 (Security Auditing)
- **Testing:** Phần VII (Testing & QA) ↔ Phần IX.9.1 (Security Testing)
- **Compliance:** Phần IV.1 (National Standards) ↔ Phần IX.8.1 (NĐ 13/2023) ↔ Phần X.6 (Compliance Checklists)

### Module References / Tham chiếu Module

- **Module 1 (Pipeline):** Phần IV.2.1, Phần V.3.1, Phần X.5.1
- **Module 2 (Aeration):** Phần IV.2.2, Phần V.3.2, Phần X.5.2
- **Module 3 (Mixing):** Phần IV.2.3, Phần V.3.3, Phần X.5.3
- **Module 4 (Settling):** Phần IV.2.4, Phần V.3.4, Phần X.5.4
- **Module 5 (Filtration):** Phần IV.2.5, Phần V.3.5, Phần X.5.5

---

## Navigation Guide / Hướng dẫn Điều hướng

### For AI Assistants / Cho AI Assistant

1. **Start Here:** Phần I (Introduction) - Understand project
2. **Must Read:** Phần II (Roles & Behaviors) - **CRITICAL** - All mandatory behaviors
3. **Must Read:** Phần IV (Domain Knowledge Base) - **MANDATORY** - Formulas, standards, terminology
4. **Reference:** Other sections as needed for specific tasks
5. **Quick Lookup:** Phần X (Appendix) - Formulas, API endpoints, error codes

### For Developers / Cho Nhà phát triển

1. **Architecture:** Phần III (Architecture Rules)
2. **Requirements:** Phần V (Functional Requirements)
3. **Workflows:** Phần VI (Workflow Automation)
4. **Testing:** Phần VII (Testing & QA)
5. **Security:** Phần IX (Security & Authentication)
6. **Observability:** Phần VIII (Logging & Monitoring)
7. **Reference:** Phần X (Appendix)

### For Project Managers / Cho Quản lý Dự án

1. **Overview:** Phần I (Introduction)
2. **Requirements:** Phần V (Functional Requirements)
3. **Quality:** Phần VII (Testing & QA)
4. **Compliance:** Phần IX (Security & Authentication)

---

## Statistics / Thống kê

### Content Distribution / Phân bố Nội dung

- **Total Sections:** 10
- **Total Chunks:** 81
- **Total Canonical Summaries:** 10
- **Average Chunks per Section:** 8.1
- **Largest Section:** Phần VIII (11 chunks)
- **Smallest Section:** Phần X (6 chunks)

### Priority Distribution / Phân bố Ưu tiên

- **Critical:** 2 sections (II, IV)
- **High Priority:** 6 sections (III, V, VI, VII, VIII, IX)
- **Medium Priority:** 2 sections (I, X)

---

## Conclusion / Kết luận

**EN:**

This Global Canonical Summary provides a comprehensive overview of the EnviroPipeCalc Master Prompt, covering all 10 sections, 81 chunks, and key requirements. The system is designed to automate water treatment engineering calculations while ensuring accuracy, compliance with Vietnamese standards, security, and observability. All AI assistants working with this system must comply with Phần II (Roles & Behaviors) and use correct formulas and terminology from Phần IV (Domain Knowledge Base).

**VI:**

Tóm tắt Canonical Toàn cục này cung cấp tổng quan toàn diện về Master Prompt EnviroPipeCalc, bao gồm tất cả 10 phần, 81 chunks, và các yêu cầu chính. Hệ thống được thiết kế để tự động hóa tính toán kỹ thuật xử lý nước trong khi đảm bảo độ chính xác, tuân thủ tiêu chuẩn Việt Nam, bảo mật, và khả năng quan sát. Tất cả AI assistant làm việc với hệ thống này phải tuân thủ Phần II (Roles & Behaviors) và sử dụng đúng công thức và thuật ngữ từ Phần IV (Domain Knowledge Base).

**Hóa phàm:**

Tài liệu này là bản tóm tắt toàn cục của toàn bộ Master Prompt, giúp người dùng nhanh chóng nắm bắt cấu trúc, nội dung chính, và cách sử dụng. Sử dụng như điểm bắt đầu để điều hướng đến các phần chi tiết khi cần.

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All 10 sections summarized







