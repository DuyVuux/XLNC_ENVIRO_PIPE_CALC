# Chunk 02: Types of Tests / Các loại Kiểm thử

**Chunk ID:** `07_TESTING_QA_chunk_02`  
**Section:** VII.2 Types of Tests  
**Word Count:** ~800 words  
**Retrieval Keywords:** unit tests, integration tests, system tests, API contract tests, UI/UX tests, performance tests, security tests, coverage requirement, test scope  
**Related Chunks:** `07_TESTING_QA_chunk_01`, `07_TESTING_QA_chunk_03`, `07_TESTING_QA_chunk_04`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_2`

---

## VII.2 Types of Tests — Các loại kiểm thử

### VII.2.1 Unit Tests / Kiểm thử đơn vị

**EN:** Small, isolated tests for individual functions, formulas, and components.

**VI:** Test nhỏ, độc lập cho từng hàm, công thức và thành phần riêng lẻ.

**Scope:**

1. **Calculation Formulas:**
   - Flowrate calculations (Module 1)
   - Headloss calculations (Module 1)
   - Oxygen saturation (Module 2)
   - Aeration efficiency (Module 2)
   - Mixing tank volume (Module 3)
   - Reaction kinetics (Module 3)
   - Sedimentation area (Module 4)
   - Settling velocity (Module 4)
   - Filtration area (Module 5)
   - Backwash calculations (Module 5)

2. **Utility Functions:**
   - Unit conversion functions
   - Lookup table functions
   - Validation functions
   - Data transformation functions

3. **FastAPI Services:**
   - Service layer functions
   - Business logic functions
   - Data access functions

4. **Pydantic Validators:**
   - Input validation
   - Output validation
   - Data type validation
   - Range validation

**Coverage Requirement:** ≥ 85% for calculation modules

**Hóa phàm:** Test từng hàm để biết nó chạy đúng.

---

### VII.2.2 Integration Tests / Kiểm thử tích hợp

**EN:** Validate communication and data flow between system components.

**VI:** Kiểm thử tương tác và dòng chảy dữ liệu giữa các thành phần hệ thống.

**Scope:**

1. **Backend Integration:**
   - FastAPI routers ↔ services ↔ database
   - Module chain orchestration
   - Data flow between modules
   - Error propagation through chains

2. **Frontend Integration:**
   - React components ↔ backend API
   - Form submission → calculation → results display
   - Error handling in UI
   - Data validation in forms

3. **Module Chain Integration:**
   - Module 1 → Module 2 data passing
   - Module 2 → Module 3 data passing
   - Module 3 → Module 4 data passing
   - Module 4 → Module 5 data passing
   - Full chain (1→2→3→4→5) execution
   - Partial chains (1→3→4, 1→2→5, etc.)

4. **External Integration:**
   - Database connections
   - File I/O (CSV, Excel, JSON)
   - PDF generation
   - Report export

**Hóa phàm:** Kiểm xem các phần ghép lại có chạy trơn tru không.

---

### VII.2.3 System Tests / Kiểm thử hệ thống

**EN:** Full end-to-end tests validating complete user workflows.

**VI:** Test toàn hệ thống từ đầu đến cuối để xác thực quy trình người dùng hoàn chỉnh.

**Scope:**

1. **End-to-End Workflows:**
   - Input → computation → output
   - Single module calculation workflow
   - Module chain calculation workflow
   - Module chain recommendation workflow
   - Report generation workflow

2. **Multi-Module Workflows:**
   - Full chain (1→2→3→4→5)
   - Partial chains (1→3→4, 1→2→5, 1→4→5, etc.)
   - Custom module combinations

3. **Report Generation:**
   - PDF report generation
   - Excel export
   - JSON export
   - CSV export
   - Markdown export

4. **User Scenarios:**
   - Small-scale project (< 100 m³/ngày)
   - Medium-scale project (100-1000 m³/ngày)
   - Large-scale project (> 1000 m³/ngày)

**Hóa phàm:** Giả lập người dùng thật để xem toàn bộ hệ thống chạy ngon không.

---

### VII.2.4 API Contract Tests / Kiểm thử hợp đồng API

**EN:** Ensure OpenAPI specification matches real implementation.

**VI:** Kiểm tra API có đúng OpenAPI không.

**Scope:**

1. **OpenAPI Compliance:**
   - Request/response schemas match specification
   - Endpoint paths match specification
   - HTTP methods match specification
   - Status codes match specification

2. **Schema Validation:**
   - JSON schema validation
   - Pydantic model validation
   - Request validation
   - Response validation

3. **API Versioning:**
   - Version compatibility
   - Backward compatibility
   - Deprecation handling

**Hóa phàm:** API mô tả sao → chạy đúng y như vậy.

---

### VII.2.5 UI/UX Tests / Kiểm thử giao diện

**EN:** Validate user interface functionality and user experience.

**VI:** Kiểm thử chức năng giao diện người dùng và trải nghiệm người dùng.

**Scope:**

1. **Form Validation:**
   - Required field validation
   - Data type validation
   - Range validation
   - Unit validation
   - Real-time validation feedback

2. **Error Handling:**
   - Error message clarity
   - Error message language (EN/VI)
   - Error recovery suggestions
   - Error display formatting

3. **Layout & Responsiveness:**
   - Desktop layout (≥ 1280px)
   - Tablet layout (768px - 1279px)
   - Mobile layout (< 768px)
   - Print layout (A4, A3)

4. **Input/Output Formatting:**
   - Number formatting
   - Unit display
   - Date/time formatting
   - Table formatting
   - Chart/graph display

5. **Accessibility:**
   - WCAG 2.1 Level AA compliance
   - Keyboard navigation
   - Screen reader compatibility
   - Color contrast

**Hóa phàm:** Kiểm xem giao diện không lỗi vặt, dễ dùng, không nhập sai.

---

### VII.2.6 Performance Tests / Kiểm thử hiệu suất

**EN:** Validate system performance under various load conditions.

**VI:** Kiểm thử hiệu suất hệ thống dưới các điều kiện tải khác nhau.

**Scope:**

1. **Computation Performance:**
   - Single module calculation: < 5 seconds
   - Module chain calculation: < 30 seconds (full chain)
   - Module chain recommendation: < 2 seconds
   - Report generation: < 2 minutes

2. **API Performance:**
   - API response time: < 1 second (simple queries)
   - API response time: < 5 seconds (complex calculations)
   - Database query time: < 500ms
   - Concurrent request handling

3. **Load Testing:**
   - Normal load (10 concurrent users)
   - High load (50 concurrent users)
   - Stress test (100+ concurrent users)
   - Peak load handling

4. **Resource Usage:**
   - Memory usage
   - CPU usage
   - Database connection pool
   - File I/O performance

**Hóa phàm:** Dồn dữ liệu lớn vào xem hệ thống có nghẽn không.

---

### VII.2.7 Security Tests / Kiểm thử bảo mật

**EN:** Validate security measures and protect against vulnerabilities.

**VI:** Kiểm thử các biện pháp bảo mật và bảo vệ chống lại lỗ hổng.

**Scope:**

1. **Input Validation:**
   - SQL injection prevention
   - XSS (Cross-Site Scripting) prevention
   - Command injection prevention
   - Path traversal prevention

2. **Authentication & Authorization:**
   - User authentication
   - Role-based access control (RBAC)
   - Session management
   - Token validation

3. **API Security:**
   - Rate limiting
   - CORS configuration
   - HTTPS enforcement
   - Secure headers

4. **Data Protection:**
   - Data encryption at rest
   - Data encryption in transit
   - Sensitive data masking
   - Audit logging

**Hóa phàm:** Chặn hacker phá hệ thống.

---

**Previous Chunk:** `07_TESTING_QA_chunk_01`  
**Next Chunk:** `07_TESTING_QA_chunk_03` (Test Corpus)

