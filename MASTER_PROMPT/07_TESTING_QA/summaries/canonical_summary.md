# Canonical Summary: 07_TESTING_QA

**Section ID:** `07_TESTING_QA`  
**Last Updated:** 2024  
**Total Chunks:** 9  
**Purpose:** Defines comprehensive testing and quality assurance strategy for XLNC Automated Water Treatment Calculation System, ensuring correctness, safety, reproducibility, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002). All tests must be deterministic, reproducible, and maintain ≥ 85% code coverage.

**Chunk List:**
- `chunk_01`: Header & Overview (VII.0, VII.1)
- `chunk_02`: Types of Tests (VII.2) - 7 test types: Unit, Integration, System, API Contract, UI/UX, Performance, Security
- `chunk_03`: Test Corpus (VII.3) - Standardized inputs, Engineering thresholds, Edge case data, Stress test data
- `chunk_04`: Test Cases by Module (VII.4) - Test cases for all 5 modules with standard calculations, edge cases, and invalid inputs
- `chunk_05`: Integration Test Cases & Edge Case Handling (VII.5, VII.6) - Module chains, mathematical/engineering/user input/API edge cases
- `chunk_06`: Threshold Checks & Test Quality Criteria (VII.7, VII.8) - Module thresholds, deterministic/reproducible/comprehensive/self-documenting tests
- `chunk_07`: Test Output Format & QA Workflow (VII.9, VII.10) - Test file structure, execution commands, coverage reports, pre-commit/pre-push/pre-merge/pre-release checks
- `chunk_08`: Test Automation, Validation & Performance (VII.11, VII.12, VII.13) - CI/CD, test data management, accuracy validation, standards compliance, performance benchmarks
- `chunk_09`: Security, Regression, Metrics & Conclusion (VII.14, VII.15, VII.16, VII.17) - Security testing, regression testing, QA metrics/reports, conclusion

---

## 1. Header & Overview (VII.0, VII.1)

### 1.1. Role Setup
- AI Assistant must understand testing and QA strategy for XLNC system
- Must reference test types, test corpus, test cases, and QA workflow when writing tests or evaluating quality

### 1.2. Testing Objectives
1. **Correctness:** Ensure all calculations match validated engineering formulas
2. **Standards Compliance:** Verify compliance with TCVN 33-2006 and TCVN 7222:2002
3. **Accuracy:** Results must match manual calculations within ±3% for standard cases
4. **Reliability:** System must handle edge cases and errors gracefully
5. **Performance:** Meet performance targets for all workflows
6. **Security:** Protect against common vulnerabilities

### 1.3. Key Requirements
- Coverage ≥ 85% for calculation modules
- All tests must be deterministic and reproducible
- Tests must use real-world water treatment scenarios
- Test data based on TCVN/QCVN standards

---

## 2. Types of Tests (VII.2)

### 2.1. Unit Tests (VII.2.1)
**Scope:**
- Calculation formulas for all 5 modules
- Utility functions (unit conversion, lookup tables, validation, data transformation)
- FastAPI services (service layer, business logic, data access)
- Pydantic validators (input/output validation, data type/range validation)

**Coverage Requirement:** ≥ 85% for calculation modules

### 2.2. Integration Tests (VII.2.2)
**Scope:**
- Backend integration (FastAPI routers ↔ services ↔ database)
- Frontend integration (React components ↔ backend API)
- Module chain integration (1→2, 2→3, 3→4, 4→5, full chains, partial chains)
- External integration (database, file I/O, PDF generation, report export)

### 2.3. System Tests (VII.2.3)
**Scope:**
- End-to-end workflows (input → computation → output)
- Multi-module workflows (full chain, partial chains, custom combinations)
- Report generation (PDF, Excel, JSON, CSV, Markdown)
- User scenarios (small/medium/large-scale projects)

### 2.4. API Contract Tests (VII.2.4)
**Scope:**
- OpenAPI compliance (request/response schemas, endpoints, HTTP methods, status codes)
- Schema validation (JSON schema, Pydantic models)
- API versioning (version compatibility, backward compatibility, deprecation)

### 2.5. UI/UX Tests (VII.2.5)
**Scope:**
- Form validation (required fields, data types, ranges, units, real-time feedback)
- Error handling (error message clarity, EN/VI language, recovery suggestions)
- Layout & responsiveness (desktop ≥1280px, tablet 768-1279px, mobile <768px, print A4/A3)
- Input/Output formatting (numbers, units, dates/times, tables, charts)
- Accessibility (WCAG 2.1 Level AA, keyboard navigation, screen readers, color contrast)

### 2.6. Performance Tests (VII.2.6)
**Scope:**
- Computation performance (single module <5s, chain <30s, recommendation <2s, reports <2min)
- API performance (simple queries <1s, complex <5s, database <500ms, concurrent requests)
- Load testing (normal 10 users, high 50 users, stress 100+ users)
- Resource usage (memory, CPU, database connections, file I/O)

### 2.7. Security Tests (VII.2.7)
**Scope:**
- Input validation security (SQL injection, XSS, command injection, path traversal prevention)
- Authentication & authorization (user auth, RBAC, session management, token validation)
- API security (rate limiting, CORS, HTTPS, secure headers)
- Data protection (encryption at rest/in transit, sensitive data masking, audit logging)

---

## 3. Test Corpus (VII.3)

### 3.1. Standardized Water Treatment Inputs (VII.3.1)
**Test Data Categories:**
1. **Flowrate Ranges:** Small scale (1-100), Medium (100-1000), Large (1000-100000) m³/ngày
2. **Temperature Ranges:** 0-100°C, typical [10, 20, 25, 30]°C
3. **Water Quality Parameters:** Fe²⁺ (0-50), H₂S (0-20), Turbidity (0-1000 NTU), TSS (0-500 mg/l)
4. **Pipe Parameters:** Materials (steel, cast_iron, concrete, plastic), diameters 0.05-2.0m, lengths 1-10000m, roughness by material

### 3.2. Engineering Design Thresholds (VII.3.2)
**Module-Specific Thresholds:**
- **Module 1:** Velocity suction 0.6-1.5 m/s, discharge 1.5-3.0 m/s, headloss <10m per 100m, Re >4000 (turbulent)
- **Module 2:** Spray intensity 2-10 m/h, efficiency 0.5-0.95, oxygen saturation 0-15 mg/l
- **Module 3:** Mixing time 30-300s, volume 0.1-100 m³, reaction rates 0.1-2.0 l/(mg·s)
- **Module 4:** Settling velocity 0.3-2.0 mm/s, time 0.5-3.0h, overflow rate 0.5-2.0 m³/(m²·h)
- **Module 5:** Filtration rate 6-10 m/h, backwash intensity 12-15 l/(s·m²), time 5-15min, headloss 2.0-3.5m

### 3.3. Edge Case Data (VII.3.3)
**Edge Cases:**
1. Extremely low values (Q=0.001 m³/ngày, t=0.1°C, L=0.1m)
2. Extremely high values (Q=100000 m³/ngày, t=99.9°C, L=10000m)
3. Extreme contamination (Fe²⁺=50, H₂S=20, turbidity=1000)
4. Invalid combinations (negative Q/t, zero diameter, negative length)
5. Missing/null values (null Q, undefined t, empty material, zero beta)

### 3.4. Stress Test Data (VII.3.4)
**Stress Scenarios:**
1. Large dataset (10,000 data points, 100 concurrent calculations, full chain)
2. High-frequency requests (50 req/s, 60s duration, 100 concurrent users)
3. Complex module chains (1000 iterations, 100 data variations)

---

## 4. Test Cases by Module (VII.4)

### 4.1. Module 1: Pipe Hydraulics Test Cases
- **M1-TC-001:** Standard calculation (Q=500 m³/ngày, t=25°C, L=1000m, steel, beta=2.5)
- **M1-TC-002:** Edge case - Very low flowrate (Q=1 m³/ngày, should flag warning)
- **M1-TC-003:** Edge case - Very high flowrate (Q=50000 m³/ngày, should flag warning)
- **M1-TC-004:** Invalid input - Negative flowrate (Q=-100, should reject with error)

### 4.2. Module 2: Rainfall Aeration Test Cases
- **M2-TC-001:** Standard calculation (Q=0.0167 m³/s, t=25°C, C_Fe2=5, C_H2S=2, A=10m², eta=0.8)
- Expected: Oxygen saturation calculation, spray intensity 2-10 m/h, evaluation with recommendations

### 4.3. Module 3: Rapid Mixing Tank Test Cases
- **M3-TC-001:** Standard calculation (Q=208.3 m³/h, t=25°C, Fe2_0=5, H2S_0=2, C_oxygen=7.03, t_mix=30min)
- Expected: Mixing time 30-300s, tank dimensions reasonable, efficiency ≥95%

### 4.4. Module 4: Sedimentation Tank Test Cases
- **M4-TC-001:** Standard calculation (Q=208.3 m³/h, alpha=1.2, U_o=0.5mm/s, H=3.5m)
- Expected: Settling time 0.5-3.0h, overflow rate within limits, efficiency calculated

### 4.5. Module 5: Filtration Unit Test Cases
- **M5-TC-001:** Standard calculation (Q=250 m³/h, v_filter=8m/h, q_backwash=15 l/(s·m²), t_backwash=10min)
- Expected: Filtration rate 6-10 m/h, backwash intensity 12-15 l/(s·m²), headloss 2.0-3.5m

---

## 5. Integration Test Cases & Edge Case Handling (VII.5, VII.6)

### 5.1. Integration Test Cases (VII.5)
**Module Chain Test Cases:**
- **IC-TC-001:** Full chain (1→2→3→4→5) - All modules calculate successfully, data flow correct, unit conversions accurate
- **IC-TC-002:** Partial chain (1→3→4) - System handles missing intermediate modules, prompts for required inputs

### 5.2. Edge Case Handling (VII.6)
**Mathematical Edge Cases:**
- Division by zero (Q=0, D=0, A=0 → Error)
- Logarithm of negative values (negative concentration/temperature → Error)
- Overflow/underflow (very large/small Q → Check data types and precision)
- Invalid pH ranges (pH <0 or >14 → Error)
- Negative flowrate (Q <0 → Error)

**Engineering Edge Cases:**
- Pipe diameters below standard (D <0.05m → Warning + suggest minimum)
- Turbidity too high for filtration (>1000 NTU → Warning + suggest pre-treatment)
- Sedimentation area < minimum (F <1m² → Warning + suggest minimum)
- Zero mixing time (t_mix=0 → Error + suggest minimum)
- Negative chemical dosage (dosage <0 → Error)

**User Input Edge Cases:**
- Missing required fields (Missing Q/t → Error with EN/VI messages)
- Wrong units (Auto-convert with warning, invalid unit → Error)
- Non-numeric values (Q="abc" → Error: must be numeric)
- Out-of-range values (Q >100000 → Warning: exceeds typical range)

**API Edge Cases:**
- Invalid JSON (Malformed JSON → Error: Invalid format)
- Missing authentication (No token → Error: Authentication required)
- Rate limit exceeded (Too many requests → Error: Rate limit exceeded)

---

## 6. Threshold Checks & Test Quality Criteria (VII.7, VII.8)

### 6.1. Threshold Checks (VII.7)
**Module-Specific Thresholds with Validation Rules:**
- **Module 1:** Velocity <0.6 m/s → Warning + suggest larger pipe; >3.0 m/s → Warning + suggest smaller/multiple pipes; Headloss >10m per 100m → Warning + suggest larger pipe
- **Module 2:** Spray intensity <2 m/h → Warning: Low efficiency; >10 m/h → Warning: May cause splashing; Efficiency <0.5 → Warning: Very low; Oxygen deficit >50% → Warning: Insufficient aeration
- **Module 3:** Mixing time <30s → Warning: May be insufficient; >300s → Warning: May be excessive; Efficiency <95% → Warning: Consider increasing time/oxygen
- **Module 4:** Settling time <0.5h → Warning: May be insufficient; >3.0h → Warning: May be excessive; Overflow rate >2.0 m³/(m²·h) → Warning: Exceeds standard
- **Module 5:** Filtration rate <6 m/h → Warning: Low efficiency; >10 m/h → Warning: May cause breakthrough; Headloss >3.5m → Warning: Backwash required

### 6.2. Test Quality Criteria (VII.8)
**Requirements:**
1. **Deterministic Tests:** Same input → Same output (always), no random elements, no time-dependent behavior, no external dependencies (use mocks)
2. **Reproducible Tests:** Run multiple times with same results, no flaky tests, clear test data and setup, isolated test environment
3. **Relevant to Domain:** Real-world water treatment scenarios, TCVN/QCVN-based test data, actual engineering use cases, realistic edge cases
4. **Comprehensive Coverage:** Code coverage ≥85% (calculation modules ≥90%), branch coverage ≥80%, function coverage 100% for public functions, all edge cases tested
5. **Self-Documenting Tests:** Clear test names, comments explaining complex logic, assertion messages, test data labeled with units/ranges

---

## 7. Test Output Format & QA Workflow (VII.9, VII.10)

### 7.1. Test Output Format (VII.9)
**Test File Structure:**
```
tests/
├── unit/ (test_module1-5, test_utilities, test_validators)
├── integration/ (test_module_chains, test_data_flow, test_api_integration, test_database_integration)
├── system/ (test_end_to_end, test_report_generation, test_user_workflows)
├── api/ (test_api_contracts, test_api_security, test_api_performance)
├── ui/ (test_form_validation, test_error_handling, test_responsive_design)
└── data/ (test_data_standard, test_data_edge_cases, test_data_stress)
```

**Test Execution Commands:**
- Unit: `pytest tests/unit/ -v --cov=src --cov-report=html`
- Integration: `pytest tests/integration/ -v`
- System: `pytest tests/system/ -v --slow`
- All: `pytest tests/ -v --cov=src --cov-report=term-missing`

**Coverage Report Format:**
- HTML for detailed analysis, terminal for quick review, CI/CD summary, trends over time
- Minimum: Overall ≥85%, Calculation modules ≥90%, Utility functions ≥80%, API endpoints ≥85%

### 7.2. QA Workflow (VII.10)
**Pre-Commit Checks:**
1. Run linters (flake8, pylint, eslint)
2. Run formatters (black, prettier)
3. Run type checkers (mypy, TypeScript)
4. Run unit tests (fast tests only)

**Pre-Push Checks:**
1. Run all unit tests
2. Run integration tests
3. Check code coverage (≥ 85%)
4. Run static analysis

**Pre-Merge Checks (CI/CD):**
1. Run all tests (unit, integration, system)
2. Run API contract tests
3. Run security tests
4. Validate threshold rules
5. Confirm OpenAPI alignment
6. Produce coverage report
7. Run performance benchmarks

**Pre-Release Checks:**
1. All pre-merge checks
2. Full system tests
3. User acceptance testing scenarios
4. Performance stress tests
5. Security audit
6. Documentation review
7. Final QA summary

---

## 8. Test Automation, Validation & Performance (VII.11, VII.12, VII.13)

### 8.1. Test Automation (VII.11)
**Continuous Integration:**
- CI pipeline with GitHub Actions
- Steps: Checkout, setup Python, install dependencies, run tests with coverage, upload coverage

**Test Data Management:**
- Fixtures: Reusable test data in pytest fixtures
- Factories: Generate test data programmatically
- Mocks: Mock external dependencies
- Test Databases: Isolated test database instances

**Test Reporting:**
- JUnit XML for CI/CD integration
- HTML reports for detailed analysis
- Coverage reports for code coverage tracking
- Performance reports for performance regression detection

### 8.2. Validation Testing (VII.12)
**Accuracy Validation:**
- Results must match manual calculations within ±3% for standard cases
- Results must match reference implementations
- Formula implementations verified against engineering handbooks
- Test approach: Compare with manual calculations, reference data, published examples, expert review

**Standards Compliance Validation:**
- All calculations comply with TCVN 33-2006 and TCVN 7222:2002
- Water quality outputs comply with QCVN standards
- Engineering thresholds within standard limits
- Test approach: Validate against TCVN reference ranges, check QCVN compliance, verify thresholds, flag non-compliant results

### 8.3. Performance Benchmarks (VII.13)
**Calculation Performance:**
- Single module: < 5 seconds
- Module chain (5 modules): < 30 seconds
- Module recommendation: < 2 seconds
- Report generation: < 2 minutes
- Measurement: Use pytest-benchmark, track trends, alert on >20% regression

**API Performance:**
- Simple query: < 1 second
- Complex calculation: < 5 seconds
- Database query: < 500ms
- Concurrent requests (50 users): < 10 seconds average

---

## 9. Security, Regression, Metrics & Conclusion (VII.14, VII.15, VII.16, VII.17)

### 9.1. Security Testing (VII.14)
**Input Validation Security:**
- SQL injection attempts
- XSS attempts
- Command injection attempts
- Path traversal attempts
- Buffer overflow attempts

**Authentication & Authorization:**
- Unauthenticated access attempts
- Unauthorized access attempts
- Token validation
- Session management
- Role-based access control

**API Security:**
- Rate limiting
- CORS configuration
- HTTPS enforcement
- Secure headers
- Input sanitization

### 9.2. Regression Testing (VII.15)
**Test Suite Maintenance:**
- All existing tests must pass before new features
- Test suite runs on every commit
- Failed tests block deployment
- Test suite reviewed regularly

**Test Case Versioning:**
- Test cases versioned with code
- Test data versioned separately
- Test results archived
- Test history tracked

### 9.3. QA Metrics & Reporting (VII.16)
**Key Metrics:**
1. Test Coverage: ≥ 85%
2. Test Pass Rate: ≥ 95%
3. Bug Detection Rate: Track bugs found by tests
4. Test Execution Time: Track test suite performance
5. Code Quality: Track linting and static analysis scores

**QA Reports:**
1. Daily Test Report: Test execution summary
2. Weekly QA Summary: Coverage, pass rate, issues
3. Release QA Report: Comprehensive pre-release assessment
4. Trend Analysis: Track metrics over time

### 9.4. Conclusion (VII.17)
The testing strategy ensures:
- **Correctness:** All calculations verified against engineering standards
- **Reliability:** Comprehensive test coverage and edge case handling
- **Performance:** System meets performance benchmarks
- **Security:** Protection against common vulnerabilities
- **Maintainability:** Well-documented, reproducible tests

**Key Requirements:**
- System must maintain ≥ 85% code coverage
- Pass all tests before deployment
- Continuously improve test quality based on real-world usage

---

## Cross-References

**Related Sections:**
- `04_DOMAIN_KNOWLEDGE_BASE`: Engineering formulas, thresholds, reference tables
- `05_FUNCTIONAL_REQUIREMENTS`: Testing requirements (V.9), module specifications
- `06_WORKFLOW_AUTOMATION`: Workflow validation, error handling

**Related Chunks:**
- `07_TESTING_QA_chunk_01` → `07_TESTING_QA_chunk_02` → `07_TESTING_QA_chunk_03` → `07_TESTING_QA_chunk_04` → `07_TESTING_QA_chunk_05` → `07_TESTING_QA_chunk_06` → `07_TESTING_QA_chunk_07` → `07_TESTING_QA_chunk_08` → `07_TESTING_QA_chunk_09`

---

**END OF CANONICAL SUMMARY**
