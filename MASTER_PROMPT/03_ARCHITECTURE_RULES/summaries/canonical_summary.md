# Canonical Summary: 03_ARCHITECTURE_RULES

**Section ID:** `03_ARCHITECTURE_RULES`  
**Last Updated:** 2024  
**Total Chunks:** 7  
**Purpose:** Defines architectural rules, technology stack, module architecture, data flow, and implementation guidelines for XLNC system.

**Chunk List:**
- `chunk_01`: Header & Technology Stack (III.1)
- `chunk_02`: Architectural Principles (III.2)
- `chunk_03`: Module Architecture & Data Flow (III.3)
- `chunk_04`: Backend Rules (III.4)
- `chunk_05`: Frontend Rules (III.5)
- `chunk_06`: Database & API Design Rules (III.6, III.7)
- `chunk_07`: Security, Deployment, Versioning, Do Not Rules & Quality Gates (III.8-III.12)

---

## 1. Technology Stack (III.1)

### 1.1. Frontend
- **Framework:** Next.js + React
- **Principles:** Component-driven design, Server Components where possible, strict TypeScript, TailwindCSS
- **UI Requirements:**
  - All numeric fields must have unit labels (e.g., "Lưu lượng Q (m³/ngày)")
  - Two display modes: "Simple view" (basic results) and "Engineering full view" (complete trace)
  - Module selector: Choose 1-5 modules and configure chains (1→2→3→4→5, 1→3→4, etc.)

### 1.2. Backend
- **Framework:** FastAPI (Python)
- **Architecture:** Modular, domain-driven, calculation-engine isolated
- **Module Structure:** Each module (1-5) is a separate domain module:
  - `modules/pipe_sizing/` (Module 1)
  - `modules/spray_aeration/` (Module 2)
  - `modules/mixing_reaction/` (Module 3)
  - `modules/settling_tank/` (Module 4)
  - `modules/filtration/` (Module 5)
- **Calculation Engine:** Isolated, supports sequential chains or standalone calls

### 1.3. Database
- **Engine:** PostgreSQL
- **Schema Standards:** 3NF+ normalization, UUID primary keys, versioned migrations
- **Required Tables:** projects, calculations, module_chains, calculation_logs, formula_references

### 1.4. API Rules
- **Protocol:** REST
- **Documentation:** OpenAPI 3.x
- **Versioning:** `/api/v1/...`
- **Consistency:** CamelCase for JSON, snake_case for DB fields
- **Error Model:** Standard structure with code, message, detail, trace_id, module

---

## 2. Architectural Principles (III.2)

### 2.1. Separation of Concerns
- **Four Layers:**
  1. Frontend Layer (Next.js + React) - Display, input, UI/UX
  2. API Layer (FastAPI) - Request handling, validation, routing
  3. Calculation Engine Layer (FastAPI modules) - Formula calculations, no business logic
  4. Database Layer (PostgreSQL) - Data storage, audit logs

### 2.2. Modular Design
- Each water treatment module (1-5) is fully independent computing module per I.5
- **Characteristics:**
  - **Independence:** Can operate independently with user input
  - **Connectivity:** Can connect via Output → Input data flow
  - **Flexibility:** Users can select 1-5 modules flexibly
- **Module Structure:** Each module has schemas.py, logic.py, service.py, router.py, tests.py

### 2.3. Stateless APIs
- All REST endpoints are stateless
- Each request must contain all required information
- Session logic handled by auth layer (JWT)
- Calculation state in request body or database, not server memory

### 2.4. Typed Everything
- **Frontend:** TypeScript strict mode
- **Backend:** Pydantic v2 models
- All data must have explicit types, no `any` or unclear `dict` types

### 2.5. Explicit Input/Output Contracts
- API must not infer missing data (per II.2.2)
- All fields must specify: type, unit (mandatory), range, default (if allowed, with impact assessment)

---

## 3. Module Architecture & Data Flow (III.3)

### 3.1. Overall Module Architecture
- Modular architecture where each module (1-5) is independent computing unit
- Supports sequential chains (1→2→3→4→5) or standalone module calls
- Data flows via Output → Input between modules

### 3.2. Data Flow Between Modules
- **M1 → M2:** Q, v, D, Re, ε
- **M2 → M3:** Q, C_phun, C_thực, C_ht
- **M3 → M4:** Q, t, dimensions
- **M4 → M5:** Q, dimensions, water quality
- **Important:** Each module can receive direct user input, not necessarily dependent on previous module

### 3.3. Implementation Patterns
- **Pattern 1:** Sequential Chain (1→2→3→4→5)
- **Pattern 2:** Standalone Module (direct user input)
- **Pattern 3:** Partial Chain (1→3→4, skipping modules)

---

## 4. Backend Rules (III.4)

### 4.1. FastAPI Calculation Engine Structure
- Pythonic, clean, maximum readability
- Use Pydantic v2 models for all I/O
- Each module has: schemas.py, logic.py, service.py, router.py
- No business logic inside router
- Short functions, no hidden side effects
- Returns structured JSON per II.3

### 4.2. Module Chain Orchestration
- Service layer supports sequential module chains (1→2→3→4→5, 1→3→4, etc.)
- Automatically passes Output → Input between modules
- Each module can also receive direct user input

---

## 5. Frontend Rules (III.5)

### 5.1. Rendering Strategy
- Prefer Server Components for heavy logic
- Client Components only where interactivity needed
- Data fetching via server actions or API routes
- Global state via Zustand/Recoil only if needed

### 5.2. UI/UX Rules for Water Treatment
- **Engineering Clarity:** All numeric fields must include unit labels
- **Validations:** Both FE + BE (frontend: basic checks, backend: full validation per II.5)
- **Two Modes:**
  - **Simple view:** Basic results (D, v, H, Hyc) + "Hóa phàm"
  - **Engineering full view:** Complete trace (inputs, outputs, intermediates, formulas, confidence)
- **Module Selector:** Supports 1-5 modules and chain configuration, displays data flow diagram

---

## 6. Database Architecture Rules (III.6)

### 6.1. Schema Standards
- Normalization: 3NF+
- Enum tables for controlled vocabularies
- UUID as primary key
- Foreign keys mandatory (no orphan records)

### 6.2. Naming Conventions
- snake_case for table/column
- Primary key: id
- Timestamps: created_at, updated_at

### 6.3. Migrations
- Versioned migrations
- Downgrades supported
- Large migrations must be backward-compatible

### 6.4. Performance
- Index columns used for filter/sort
- Use composite indexes when needed
- Query plans reviewed for long-running operations

---

## 7. API Design Rules (III.7)

### 7.1. Endpoint Structure
- **Module Calculation Endpoints:**
  - `POST /api/v1/modules/pipe-sizing/calculate` (Module 1)
  - `POST /api/v1/modules/spray-aeration/calculate` (Module 2)
  - `POST /api/v1/modules/mixing-reaction/calculate` (Module 3)
  - `POST /api/v1/modules/settling-tank/calculate` (Module 4)
  - `POST /api/v1/modules/filtration/calculate` (Module 5)
  - `POST /api/v1/modules/chain/calculate` (Module chains)
- **Query Endpoints:**
  - `GET /api/v1/modules/:module/inputs`
  - `GET /api/v1/modules/:module/formulas`
  - `GET /api/v1/calculations/:calculation_id`

### 7.2. Request/Response Model
- Standard response structure per II.3 (data, error, meta with trace_id, version, timestamp, prompt_version)
- Error model includes: code, message, detail, trace_id, module, suggested_defaults

### 7.3. Versioning
- `/api/v1/...` required
- Major breaking changes → bump version (`/api/v2/...`)
- Old versions deprecated but maintained for 6–12 months

---

## 8. Security Rules (III.8)

### 8.1. Authentication
- JWT-based auth
- Access tokens + refresh tokens
- HTTPS mandatory

### 8.2. Input Sanitization
- Validate and sanitize all external input
- Reject invalid units
- Strict type-check on every layer

### 8.3. OWASP Compliance
- Protect against SQL injection, XSS, CSRF
- Use prepared statements
- Limit request size for calculations

---

## 9. Deployment Rules (III.9)

### 9.1. Environments
- dev → staging → production
- No direct deploy to production
- Automated CI/CD pipelines

### 9.2. Containerization
- Docker for all services
- Each module builds into a separate image

### 9.3. Scaling
- Horizontal scaling with load balancer
- FastAPI engine scales as independent microservice

---

## 10. Versioning & Backward Compatibility (III.10)

- Semantic Versioning: MAJOR.MINOR.PATCH
- Breaking changes → new API version
- Old versions deprecated but maintained for 6–12 months
- Maintain changelog in /docs/CHANGELOG.md

---

## 11. "Do Not" Rules (III.11)

1. Do NOT mix business logic inside UI or controllers
2. Do NOT return inconsistent JSON structures
3. Do NOT perform heavy calculations in frontend
4. Do NOT bypass validation (FE or BE)
5. Do NOT create tables without FK or constraints
6. Do NOT deploy without tests & logs enabled

---

## 12. Engineering Quality Gates (III.12)

A pull request must pass:
- Unit tests
- Integration tests
- Lint + formatter
- Security checks (SAST)
- API contract validation against OpenAPI
- Database migration validation

---

## Cross-References

- **Part I (Introduction):** Module overview (I.5), project scope
- **Part II (Roles & Behaviors):** Response structure (II.3), validation rules (II.5)
- **Part IV (Domain Knowledge Base):** Engineering formulas, TCVN standards
- **Part V (Functional Requirements):** Module specifications
- **Part VI (Workflow):** Module chain calculation workflows
- **Part VII (Testing & QA):** Test cases, validation thresholds
- **Part VIII (Logging & Monitoring):** Observability framework

---

**End of Canonical Summary: 03_ARCHITECTURE_RULES**







