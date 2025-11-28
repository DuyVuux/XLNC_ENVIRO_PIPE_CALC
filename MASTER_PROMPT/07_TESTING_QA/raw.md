# VII. TESTING & QA / KIỂM THỬ & ĐẢM BẢO CHẤT LƯỢNG

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnVII_Testing&QA.md` - phần định nghĩa chiến lược kiểm thử và đảm bảo chất lượng cho hệ thống XLNC. File này mô tả các loại test, test corpus, edge cases, và QA workflow.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm các loại test cần thiết (unit, integration, system, API, UI/UX, performance, security)
2. Hiểu test corpus và test cases cho 5 module
3. Nắm cách xử lý edge cases và threshold checks
4. Hiểu QA workflow và metrics
5. Tham chiếu đúng khi viết test hoặc đánh giá chất lượng

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Viết test cases
- Thiết kế test strategy
- Đánh giá chất lượng code
- Thiết kế QA workflow

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng test type (ví dụ: "Theo VII.2.1, unit test cho Module 1 phải test flowrate calculations...")
- Tuân thủ test quality criteria
- Đảm bảo coverage ≥ 85% cho calculation modules

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi viết test:
1. **Bước 1:** Xác định test type cần thiết
2. **Bước 2:** Tham khảo test corpus và test cases
3. **Bước 3:** Thiết kế test cases cho edge cases
4. **Bước 4:** Áp dụng threshold checks
5. **Bước 5:** Đảm bảo test quality criteria

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI đạt coverage ≥ 85% cho calculation modules
- PHẢI test tất cả edge cases
- PHẢI áp dụng threshold checks
- PHẢI tuân thủ test quality criteria
- PHẢI đảm bảo tests có tính xác định và tái lập

**G. Examples / Ví dụ:**

**Ví dụ 1 - Unit test cho Module 1:**
> "Theo VII.2.1, unit test cho Module 1 phải test: flowrate calculations, headloss calculations (Darcy-Weisbach), Reynolds number calculations. Coverage requirement: ≥ 85%"

**Ví dụ 2 - Edge case handling:**
> "Theo VII.4, edge cases cho Module 1: Q < 10 m³/ngày (rất thấp), Q > 10000 m³/ngày (rất cao), t = 0°C hoặc t = 99°C (nhiệt độ cực đoan)"

---

*(EN + VI, chuẩn quốc tế, đầy đủ cho hệ thống XLNC)*

---

## VII.1 Overview — Tổng quan

**EN:**

This section defines the complete testing and quality assurance strategy for the XLNC Automated Water Treatment Calculation System. The system must ensure correctness, safety, reproducibility, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and international engineering practices. All tests must be deterministic, reproducible, and maintain ≥ 85% code coverage.

**VI:**

Phần này định nghĩa chiến lược kiểm thử và đảm bảo chất lượng hoàn chỉnh cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Hệ thống phải đảm bảo tính đúng đắn, an toàn, tái lập và tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002) và thực hành kỹ thuật quốc tế. Tất cả các test phải có tính xác định, tái lập và duy trì độ phủ mã ≥ 85%.

**Testing Objectives:**

1. **Correctness:** Ensure all calculations match validated engineering formulas
2. **Standards Compliance:** Verify compliance with TCVN 33-2006 and TCVN 7222:2002
3. **Accuracy:** Results must match manual calculations within ±3% for standard cases
4. **Reliability:** System must handle edge cases and errors gracefully
5. **Performance:** Meet performance targets for all workflows
6. **Security:** Protect against common vulnerabilities

**Hóa phàm:**

Kiểm tra để chắc chắn hệ thống chạy đúng, không sai công thức, không crash, không cho ra kết quả điên. Tất cả test phải chạy lại được và cho kết quả giống nhau.

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

## VII.3 Test Corpus — Tập dữ liệu test chuẩn ngành

**EN:** System must maintain a comprehensive, standardized test corpus tailored for the water treatment domain.

**VI:** Hệ thống phải duy trì một tập dữ liệu test toàn diện, chuẩn hóa phù hợp với lĩnh vực xử lý nước.

### VII.3.1 Standardized Water Treatment Inputs / Đầu vào xử lý nước chuẩn hóa

**EN:** Reference parameter ranges based on QCVN/TCVN standards and typical industrial/municipal plant data.

**VI:** Phạm vi tham số tham chiếu dựa trên tiêu chuẩn QCVN/TCVN và dữ liệu nhà máy công nghiệp/đô thị điển hình.

**Test Data Categories:**

1. **Flowrate Ranges:**
   ```json
   {
     "small_scale": {"Q_min": 1, "Q_max": 100, "unit": "m³/ngày"},
     "medium_scale": {"Q_min": 100, "Q_max": 1000, "unit": "m³/ngày"},
     "large_scale": {"Q_min": 1000, "Q_max": 100000, "unit": "m³/ngày"}
   }
   ```

2. **Temperature Ranges:**
   ```json
   {
     "min": 0, "max": 100, "typical": [10, 20, 25, 30], "unit": "°C"
   }
   ```

3. **Water Quality Parameters:**
   ```json
   {
     "Fe2_plus": {"min": 0, "max": 50, "typical": [1, 3, 5, 10], "unit": "mg/l"},
     "H2S": {"min": 0, "max": 20, "typical": [0.5, 1, 2, 5], "unit": "mg/l"},
     "turbidity": {"min": 0, "max": 1000, "typical": [5, 10, 50, 100], "unit": "NTU"},
     "TSS": {"min": 0, "max": 500, "typical": [10, 50, 100, 200], "unit": "mg/l"}
   }
   ```

4. **Pipe Parameters:**
   ```json
   {
     "materials": ["steel", "cast_iron", "concrete", "plastic"],
     "diameters": {"min": 0.05, "max": 2.0, "unit": "m"},
     "lengths": {"min": 1, "max": 10000, "unit": "m"},
     "roughness": {
       "steel_new": {"min": 0.00005, "max": 0.0001, "unit": "m"},
       "steel_old": {"min": 0.0001, "max": 0.0005, "unit": "m"},
       "cast_iron": {"min": 0.00025, "max": 0.001, "unit": "m"},
       "concrete": {"min": 0.0003, "max": 0.003, "unit": "m"},
       "plastic": {"min": 0.0000015, "max": 0.000007, "unit": "m"}
     }
   }
   ```

---

### VII.3.2 Engineering Design Thresholds / Ngưỡng thiết kế kỹ thuật

**EN:** Engineering thresholds based on TCVN 33-2006 and TCVN 7222:2002.

**VI:** Ngưỡng kỹ thuật dựa trên TCVN 33-2006 và TCVN 7222:2002.

**Thresholds by Module:**

1. **Module 1 - Pipe Hydraulics:**
   ```json
   {
     "velocity_suction": {"min": 0.6, "max": 1.5, "standard": 1.2, "unit": "m/s"},
     "velocity_discharge": {"min": 1.5, "max": 3.0, "standard": 2.4, "unit": "m/s"},
     "reynolds_laminar": {"max": 2000},
     "reynolds_transition": {"min": 2000, "max": 4000},
     "reynolds_turbulent": {"min": 4000},
     "headloss_per_100m": {"max": 10, "unit": "m"}
   }
   ```

2. **Module 2 - Rainfall Aeration:**
   ```json
   {
     "spray_intensity": {"min": 2, "max": 10, "typical": [4, 6, 8], "unit": "m/h"},
     "aeration_efficiency": {"min": 0.5, "max": 0.95, "typical": [0.7, 0.8, 0.85]},
     "oxygen_saturation": {"min": 0, "max": 15, "unit": "mg/l"},
     "area": {"min": 1, "max": 1000, "unit": "m²"}
   }
   ```

3. **Module 3 - Rapid Mixing:**
   ```json
   {
     "mixing_time": {"min": 30, "max": 300, "typical": [60, 120, 180], "unit": "seconds"},
     "tank_volume": {"min": 0.1, "max": 100, "unit": "m³"},
     "reaction_rate_Fe": {"min": 0.1, "max": 2.0, "typical": [0.3, 0.5, 1.0], "unit": "l/(mg·s)"},
     "reaction_rate_H2S": {"min": 0.1, "max": 2.0, "typical": [0.5, 1.0, 1.5], "unit": "l/(mg·s)"}
   }
   ```

4. **Module 4 - Sedimentation:**
   ```json
   {
     "settling_velocity": {"min": 0.3, "max": 2.0, "typical": [0.5, 0.8, 1.0], "unit": "mm/s"},
     "settling_time": {"min": 0.5, "max": 3.0, "typical": [1.0, 1.5, 2.0], "unit": "hours"},
     "overflow_rate": {"min": 0.5, "max": 2.0, "typical": [0.8, 1.0, 1.5], "unit": "m³/(m²·h)"},
     "safety_factor": {"min": 1.0, "max": 2.0, "typical": [1.1, 1.2, 1.5]}
   }
   ```

5. **Module 5 - Filtration:**
   ```json
   {
     "filtration_rate": {"min": 6, "max": 10, "typical": [6, 8, 10], "unit": "m/h"},
     "backwash_intensity": {"min": 12, "max": 15, "typical": [12, 14, 15], "unit": "l/(s·m²)"},
     "backwash_time": {"min": 5, "max": 15, "typical": [8, 10, 12], "unit": "minutes"},
     "max_headloss": {"min": 2.0, "max": 3.5, "typical": [2.5, 3.0, 3.5], "unit": "m"}
   }
   ```

---

### VII.3.3 Edge Case Data / Dữ liệu trường hợp biên

**EN:** Test data for extreme and boundary conditions.

**VI:** Dữ liệu test cho các điều kiện cực đoan và biên.

**Edge Cases:**

1. **Extremely Low Values:**
   ```json
   {
     "Q_near_zero": 0.001,
     "Q_unit": "m³/ngày",
     "t_min": 0.1,
     "t_unit": "°C",
     "L_min": 0.1,
     "L_unit": "m"
   }
   ```

2. **Extremely High Values:**
   ```json
   {
     "Q_max": 100000,
     "Q_unit": "m³/ngày",
     "t_max": 99.9,
     "t_unit": "°C",
     "L_max": 10000,
     "L_unit": "m"
   }
   ```

3. **Extreme Contamination:**
   ```json
   {
     "Fe2_plus_max": 50,
     "H2S_max": 20,
     "turbidity_max": 1000,
     "unit": "mg/l"
   }
   ```

4. **Invalid Combinations:**
   ```json
   {
     "negative_Q": -10,
     "negative_t": -5,
     "zero_diameter": 0,
     "negative_length": -100
   }
   ```

5. **Missing/Null Values:**
   ```json
   {
     "null_Q": null,
     "missing_t": undefined,
     "empty_material": "",
     "zero_beta": 0
   }
   ```

---

### VII.3.4 Stress Test Data / Dữ liệu test tải

**EN:** Test data for high-load and stress scenarios.

**VI:** Dữ liệu test cho các kịch bản tải cao và stress.

**Stress Scenarios:**

1. **Large Dataset:**
   ```json
   {
     "data_points": 10000,
     "concurrent_calculations": 100,
     "chain_length": 5,
     "report_size": "large"
   }
   ```

2. **High-Frequency Requests:**
   ```json
   {
     "requests_per_second": 50,
     "duration_seconds": 60,
     "concurrent_users": 100
   }
   ```

3. **Complex Module Chains:**
   ```json
   {
     "chain": [1, 2, 3, 4, 5],
     "iterations": 1000,
     "data_variations": 100
   }
   ```

---

## VII.4 Test Cases by Module — Test case theo module

### VII.4.1 Module 1: Pipe Hydraulics Test Cases

#### Test Case M1-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 500,
  "Q_unit": "m³/ngày",
  "t": 25,
  "t_unit": "°C",
  "L": 1000,
  "L_unit": "m",
  "Hc": 5,
  "Hc_unit": "m",
  "material": "steel",
  "beta": 2.5
}
```

**Expected Output:**
```json
{
  "Q": 0.005787,
  "Q_unit": "m³/s",
  "v": 1.2,
  "v_unit": "m/s",
  "D": 0.0784,
  "D_unit": "m",
  "Re": 94200,
  "lambda": 0.023,
  "H1": 8.5,
  "H1_unit": "m",
  "Hyc": 13.5,
  "Hyc_unit": "m",
  "validation": {
    "status": "passed",
    "warnings": []
  }
}
```

**Validation:**
- ✅ Velocity within TCVN 33-2006 range (0.6-3.0 m/s)
- ✅ Diameter within standard pipe sizes
- ✅ Headloss reasonable (< 10 m per 100m)
- ✅ Reynolds number indicates turbulent flow

---

#### Test Case M1-TC-002: Edge Case - Very Low Flowrate

**Input:**
```json
{
  "Q": 1,
  "Q_unit": "m³/ngày",
  "t": 20,
  "L": 100,
  "Hc": 2,
  "material": "plastic",
  "beta": 1.5
}
```

**Expected Behavior:**
- System should calculate successfully
- Velocity may be below minimum (should flag warning)
- Suggest minimum pipe diameter

**Validation:**
- ⚠️ Warning: Velocity below recommended minimum
- ✅ Calculation completes without error
- ✅ Suggests alternative pipe size

---

#### Test Case M1-TC-003: Edge Case - Very High Flowrate

**Input:**
```json
{
  "Q": 50000,
  "Q_unit": "m³/ngày",
  "t": 30,
  "L": 5000,
  "Hc": 20,
  "material": "concrete",
  "beta": 3.0
}
```

**Expected Behavior:**
- System should calculate successfully
- Velocity may exceed maximum (should flag warning)
- Suggest larger pipe diameter or multiple pipes

**Validation:**
- ⚠️ Warning: Velocity exceeds recommended maximum
- ✅ Calculation completes without error
- ✅ Suggests alternative design

---

#### Test Case M1-TC-004: Invalid Input - Negative Flowrate

**Input:**
```json
{
  "Q": -100,
  "Q_unit": "m³/ngày",
  "t": 25,
  "L": 1000,
  "Hc": 5,
  "material": "steel",
  "beta": 2.5
}
```

**Expected Behavior:**
- System should reject input
- Return validation error
- Suggest correction

**Validation:**
- ❌ Error: Flowrate cannot be negative
- ✅ Error message in Vietnamese and English
- ✅ Suggests valid range

---

### VII.4.2 Module 2: Rainfall Aeration Test Cases

#### Test Case M2-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 0.01666667,
  "Q_unit": "m³/s",
  "t": 25,
  "t_unit": "°C",
  "C_Fe2": 5,
  "C_Fe2_unit": "mg/l",
  "C_H2S": 2,
  "C_H2S_unit": "mg/l",
  "A": 10,
  "A_unit": "m²",
  "eta": 0.8
}
```

**Expected Output:**
```json
{
  "C_ox": 8.27,
  "C_ox_unit": "mg/l",
  "O2_Fe2": 0.715,
  "O2_Fe2_unit": "mg/l",
  "O2_H2S": 0.94,
  "O2_H2S_unit": "mg/l",
  "C_ht": 9.925,
  "C_ht_unit": "mg/l",
  "C_phun": 6.0,
  "C_phun_unit": "m/h",
  "C_thuc": 6.616,
  "C_thuc_unit": "mg/l",
  "evaluation": "insufficient",
  "deficit": 3.309,
  "deficit_unit": "mg/l",
  "recommendations": ["Increase aeration efficiency", "Reduce Fe²⁺ and H₂S concentrations"]
}
```

**Validation:**
- ✅ Oxygen saturation calculated correctly
- ✅ Spray intensity within range (2-10 m/h)
- ✅ Evaluation indicates oxygen deficit
- ✅ Recommendations provided

---

### VII.4.3 Module 3: Rapid Mixing Tank Test Cases

#### Test Case M3-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 208.3,
  "Q_unit": "m³/h",
  "t": 25,
  "t_unit": "°C",
  "Fe2_0": 5,
  "Fe2_0_unit": "mg/l",
  "H2S_0": 2,
  "H2S_0_unit": "mg/l",
  "C_oxygen": 7.03,
  "C_oxygen_unit": "mg/l",
  "k_Fe": 0.5,
  "k_H2S": 1.0,
  "t_mix": 30,
  "t_mix_unit": "minutes"
}
```

**Expected Output:**
```json
{
  "V": 6.25,
  "V_unit": "m³",
  "t_mix_actual": 0.03,
  "t_mix_actual_unit": "hours",
  "L": 2.5,
  "L_unit": "m",
  "W": 2.5,
  "W_unit": "m",
  "H": 1.0,
  "H_unit": "m",
  "r_Fe": 17.575,
  "r_Fe_unit": "mg/(l·s)",
  "r_H2S": 14.06,
  "r_H2S_unit": "mg/(l·s)",
  "Fe2_t": 0.0,
  "Fe2_t_unit": "mg/l",
  "H2S_t": 0.0,
  "H2S_t_unit": "mg/l",
  "eta_Fe": 100.0,
  "eta_Fe_unit": "%",
  "eta_H2S": 100.0,
  "eta_H2S_unit": "%"
}
```

**Validation:**
- ✅ Mixing time within range (30-300 seconds)
- ✅ Tank dimensions reasonable
- ✅ Reaction rates calculated correctly
- ✅ Efficiency ≥ 95% (target)

---

### VII.4.4 Module 4: Sedimentation Tank Test Cases

#### Test Case M4-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 208.3,
  "Q_unit": "m³/h",
  "alpha": 1.2,
  "U_o": 0.5,
  "U_o_unit": "mm/s",
  "H": 3.5,
  "H_unit": "m",
  "W": 0.05,
  "W_unit": "m",
  "angle": 60,
  "angle_unit": "degrees"
}
```

**Expected Output:**
```json
{
  "Q1": 250.0,
  "Q1_unit": "m³/h",
  "F": 138.9,
  "F_unit": "m²",
  "D": 13.3,
  "D_unit": "m",
  "R": 13.3,
  "R_unit": "m",
  "H_actual": 3.5,
  "H_actual_unit": "m",
  "V": 646.2,
  "V_unit": "m³",
  "v_settling": 1.8,
  "v_settling_unit": "m/h",
  "t_settling": 2.58,
  "t_settling_unit": "hours",
  "eta": 27.8,
  "eta_unit": "%"
}
```

**Validation:**
- ✅ Settling time within range (0.5-3.0 hours)
- ✅ Overflow rate within standard limits
- ✅ Tank dimensions reasonable
- ✅ Efficiency calculated correctly

---

### VII.4.5 Module 5: Filtration Unit Test Cases

#### Test Case M5-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 250,
  "Q_unit": "m³/h",
  "v_filter": 8,
  "v_filter_unit": "m/h",
  "q_backwash": 15,
  "q_backwash_unit": "l/(s·m²)",
  "t_backwash": 10,
  "t_backwash_unit": "minutes",
  "tank_type": "circular"
}
```

**Expected Output:**
```json
{
  "f1": 31.25,
  "f1_unit": "m²",
  "f2": 0.31,
  "f2_unit": "m²",
  "f_total": 31.56,
  "f_total_unit": "m²",
  "D": 6.34,
  "D_unit": "m",
  "F1": 31.2,
  "F1_unit": "m²",
  "v_actual": 8.01,
  "v_actual_unit": "m/h",
  "H_total": 4.5,
  "H_total_unit": "m",
  "H_headloss": 2.5,
  "H_headloss_unit": "m",
  "Q_backwash": 468,
  "Q_backwash_unit": "l/s",
  "V_backwash": 280.8,
  "V_backwash_unit": "m³",
  "t_cycle": 24,
  "t_cycle_unit": "hours"
}
```

**Validation:**
- ✅ Filtration rate within range (6-10 m/h)
- ✅ Backwash intensity within range (12-15 l/(s·m²))
- ✅ Headloss within limits (2.0-3.5 m)
- ✅ Tank dimensions reasonable

---

## VII.5 Integration Test Cases — Test case tích hợp

### VII.5.1 Module Chain Test Cases

#### Test Case IC-TC-001: Full Chain (1→2→3→4→5)

**Input:**
```json
{
  "chain": [1, 2, 3, 4, 5],
  "module_1": {
    "Q": 5000,
    "Q_unit": "m³/ngày",
    "t": 25,
    "L": 2000,
    "Hc": 10,
    "material": "steel",
    "beta": 2.5
  },
  "module_2": {
    "C_Fe2": 5,
    "C_H2S": 2,
    "A": 50,
    "eta": 0.85
  },
  "module_3": {
    "k_Fe": 0.5,
    "k_H2S": 1.0,
    "t_mix": 30
  },
  "module_4": {
    "alpha": 1.2,
    "U_o": 0.5,
    "H": 3.5
  },
  "module_5": {
    "v_filter": 8,
    "q_backwash": 15,
    "t_backwash": 10
  }
}
```

**Expected Behavior:**
1. Module 1 calculates successfully
2. Module 1 output (Q, t) passed to Module 2
3. Module 2 calculates successfully
4. Module 2 output (Q, C_thuc) passed to Module 3
5. Module 3 calculates successfully
6. Module 3 output (Q) passed to Module 4
7. Module 4 calculates successfully
8. Module 4 output (Q) passed to Module 5
9. Module 5 calculates successfully
10. All results aggregated and validated

**Validation:**
- ✅ Data flow between modules correct
- ✅ Unit conversions accurate
- ✅ All calculations complete successfully
- ✅ Final results consistent across chain

---

#### Test Case IC-TC-002: Partial Chain (1→3→4)

**Input:**
```json
{
  "chain": [1, 3, 4],
  "module_1": {
    "Q": 500,
    "Q_unit": "m³/ngày",
    "t": 25,
    "L": 1000,
    "Hc": 5,
    "material": "steel"
  },
  "module_3": {
    "Fe2_0": 3,
    "H2S_0": 1,
    "k_Fe": 0.5,
    "k_H2S": 1.0
  },
  "module_4": {
    "alpha": 1.2,
    "U_o": 0.5,
    "H": 3.5
  }
}
```

**Expected Behavior:**
1. Module 1 calculates successfully
2. Module 1 output (Q) passed to Module 3
3. Module 3 requires manual input for C_oxygen (since Module 2 skipped)
4. Module 3 calculates successfully
5. Module 3 output (Q) passed to Module 4
6. Module 4 calculates successfully

**Validation:**
- ✅ System handles missing intermediate modules
- ✅ Prompts for required inputs when module skipped
- ✅ Chain completes successfully

---

## VII.6 Edge Case Handling — Xử lý trường hợp biên

### VII.6.1 Mathematical Edge Cases

**Test Cases:**

1. **Division by Zero:**
   - Q = 0 → Error: Flowrate cannot be zero
   - D = 0 → Error: Diameter cannot be zero
   - A = 0 → Error: Area cannot be zero

2. **Logarithm of Negative Values:**
   - Negative concentration → Error: Concentration cannot be negative
   - Negative temperature → Error: Temperature out of range

3. **Overflow/Underflow:**
   - Very large Q → Check for overflow, use appropriate data types
   - Very small Q → Check for underflow, maintain precision

4. **Invalid pH Ranges:**
   - pH < 0 or pH > 14 → Error: pH out of valid range

5. **Negative Flowrate:**
   - Q < 0 → Error: Flowrate cannot be negative

---

### VII.6.2 Engineering Edge Cases

**Test Cases:**

1. **Pipe Diameters Below Standard:**
   - D < 0.05 m → Warning: Diameter below minimum standard
   - Suggest minimum standard diameter

2. **Turbidity Too High for Filtration:**
   - Turbidity > 1000 NTU → Warning: Pre-treatment required
   - Suggest sedimentation before filtration

3. **Sedimentation Area < Minimum:**
   - F < 1 m² → Warning: Area below minimum
   - Suggest minimum area

4. **Zero Mixing Time:**
   - t_mix = 0 → Error: Mixing time cannot be zero
   - Suggest minimum mixing time

5. **Negative Chemical Dosage:**
   - Dosage < 0 → Error: Dosage cannot be negative

---

### VII.6.3 User Input Edge Cases

**Test Cases:**

1. **Missing Required Fields:**
   - Missing Q → Error: Flowrate is required
   - Missing t → Error: Temperature is required
   - Clear error messages in EN/VI

2. **Wrong Units:**
   - Q in m³/ngày but system expects m³/s → Auto-convert with warning
   - Invalid unit string → Error: Invalid unit

3. **Non-Numeric Values:**
   - Q = "abc" → Error: Flowrate must be numeric
   - t = null → Error: Temperature is required

4. **Out-of-Range Values:**
   - Q > 100000 → Warning: Flowrate exceeds typical range
   - t > 100 → Warning: Temperature exceeds valid range

---

### VII.6.4 API Edge Cases

**Test Cases:**

1. **Invalid JSON:**
   - Malformed JSON → Error: Invalid JSON format
   - Missing brackets → Error: JSON syntax error

2. **Missing Authentication:**
   - No token → Error: Authentication required
   - Invalid token → Error: Invalid authentication

3. **Rate Limit Exceeded:**
   - Too many requests → Error: Rate limit exceeded
   - Retry after X seconds

---

## VII.7 Threshold Checks — Kiểm tra ngưỡng kỹ thuật

**EN:** Each module must define strict engineering thresholds based on TCVN 33-2006 and TCVN 7222:2002.

**VI:** Mỗi module phải định nghĩa ngưỡng kỹ thuật nghiêm ngặt dựa trên TCVN 33-2006 và TCVN 7222:2002.

### VII.7.1 Module 1 Thresholds

**Thresholds:**
- **Velocity (suction):** 0.6 - 1.5 m/s (standard: 1.2 m/s)
- **Velocity (discharge):** 1.5 - 3.0 m/s (standard: 2.4 m/s)
- **Headloss per 100m:** < 10 m
- **Reynolds number:** > 4000 (turbulent flow preferred)

**Validation Rules:**
- If velocity < 0.6 m/s → Warning + suggest larger pipe
- If velocity > 3.0 m/s → Warning + suggest smaller pipe or multiple pipes
- If headloss > 10 m per 100m → Warning + suggest larger pipe

---

### VII.7.2 Module 2 Thresholds

**Thresholds:**
- **Spray intensity:** 2 - 10 m/h (optimal: 4-8 m/h)
- **Aeration efficiency:** 0.5 - 0.95 (optimal: 0.8-0.9)
- **Oxygen saturation:** 0 - 15 mg/l (temperature dependent)

**Validation Rules:**
- If spray intensity < 2 m/h → Warning: Low efficiency
- If spray intensity > 10 m/h → Warning: May cause splashing
- If efficiency < 0.5 → Warning: Very low efficiency
- If oxygen deficit > 50% → Warning: Insufficient aeration

---

### VII.7.3 Module 3 Thresholds

**Thresholds:**
- **Mixing time:** 30 - 300 seconds (optimal: 60-180 seconds)
- **Tank volume:** > 0.1 m³
- **Reaction efficiency:** ≥ 95% (target)

**Validation Rules:**
- If mixing time < 30 seconds → Warning: May be insufficient
- If mixing time > 300 seconds → Warning: May be excessive
- If efficiency < 95% → Warning: Consider increasing mixing time or oxygen

---

### VII.7.4 Module 4 Thresholds

**Thresholds:**
- **Settling velocity:** 0.3 - 2.0 mm/s (optimal: 0.5-1.0 mm/s)
- **Settling time:** 0.5 - 3.0 hours (optimal: 1.0-2.0 hours)
- **Overflow rate:** 0.5 - 2.0 m³/(m²·h) (optimal: 0.8-1.5 m³/(m²·h))

**Validation Rules:**
- If settling time < 0.5 hours → Warning: May be insufficient
- If settling time > 3.0 hours → Warning: May be excessive
- If overflow rate > 2.0 m³/(m²·h) → Warning: Exceeds standard

---

### VII.7.5 Module 5 Thresholds

**Thresholds:**
- **Filtration rate:** 6 - 10 m/h (optimal: 8 m/h)
- **Backwash intensity:** 12 - 15 l/(s·m²) (optimal: 14 l/(s·m²))
- **Backwash time:** 5 - 15 minutes (optimal: 10 minutes)
- **Max headloss:** 2.0 - 3.5 m (optimal: 2.5-3.0 m)

**Validation Rules:**
- If filtration rate < 6 m/h → Warning: Low efficiency
- If filtration rate > 10 m/h → Warning: May cause breakthrough
- If headloss > 3.5 m → Warning: Backwash required

---

## VII.8 Test Quality Criteria — Tiêu chí chất lượng test

**EN:** All tests must meet strict quality criteria to ensure reliability and maintainability.

**VI:** Tất cả các test phải đáp ứng tiêu chí chất lượng nghiêm ngặt để đảm bảo độ tin cậy và khả năng bảo trì.

### VII.8.1 Deterministic Tests

**Requirements:**
- Same input → Same output (always)
- No random elements in test logic
- No time-dependent behavior (unless testing time functions)
- No external dependencies (use mocks)

**Example:**
```python
def test_flowrate_calculation():
    # Deterministic test
    Q_input = 500  # m³/ngày
    Q_expected = 0.005787  # m³/s
    Q_actual = convert_flowrate(Q_input, "m³/ngày", "m³/s")
    assert abs(Q_actual - Q_expected) < 0.0001
```

---

### VII.8.2 Reproducible Tests

**Requirements:**
- Tests can be run multiple times with same results
- No flaky tests (tests that sometimes pass, sometimes fail)
- Clear test data and setup
- Isolated test environment

---

### VII.8.3 Relevant to Domain

**Requirements:**
- Tests use real-world water treatment scenarios
- Test data based on TCVN/QCVN standards
- Test cases cover actual engineering use cases
- Edge cases are realistic engineering scenarios

---

### VII.8.4 Comprehensive Coverage

**Requirements:**
- **Code Coverage:** ≥ 85% for calculation modules
- **Branch Coverage:** ≥ 80% for decision logic
- **Function Coverage:** 100% for all public functions
- **Edge Case Coverage:** All identified edge cases tested

**Coverage Tools:**
- Python: `pytest-cov`, `coverage.py`
- JavaScript: `jest --coverage`, `nyc`

---

### VII.8.5 Self-Documenting Tests

**Requirements:**
- Clear test names describing what is tested
- Comments explaining complex test logic
- Assertion messages explaining expected behavior
- Test data clearly labeled with units and ranges

**Example:**
```python
def test_module1_headloss_calculation_with_steel_pipe_1000m_length():
    """
    Test headloss calculation for Module 1 with:
    - Steel pipe material
    - 1000m length
    - Standard flowrate (500 m³/ngày)
    Expected: Headloss within TCVN 33-2006 limits
    """
    # Test implementation
    pass
```

---

## VII.9 Test Output Format — Định dạng đầu ra test

**EN:** System must generate tests in standardized formats and locations.

**VI:** Hệ thống phải tạo test ở định dạng và vị trí chuẩn hóa.

### VII.9.1 Test File Structure

```
tests/
├── unit/
│   ├── test_module1_pipe_hydraulics.py
│   ├── test_module2_rainfall_aeration.py
│   ├── test_module3_rapid_mixing.py
│   ├── test_module4_sedimentation.py
│   ├── test_module5_filtration.py
│   ├── test_utilities.py
│   └── test_validators.py
├── integration/
│   ├── test_module_chains.py
│   ├── test_data_flow.py
│   ├── test_api_integration.py
│   └── test_database_integration.py
├── system/
│   ├── test_end_to_end.py
│   ├── test_report_generation.py
│   └── test_user_workflows.py
├── api/
│   ├── test_api_contracts.py
│   ├── test_api_security.py
│   └── test_api_performance.py
├── ui/
│   ├── test_form_validation.spec.ts
│   ├── test_error_handling.spec.ts
│   └── test_responsive_design.spec.ts
└── data/
    ├── test_data_standard.json
    ├── test_data_edge_cases.json
    └── test_data_stress.json
```

---

### VII.9.2 Test Execution Commands

**Unit Tests:**
```bash
pytest tests/unit/ -v --cov=src --cov-report=html
```

**Integration Tests:**
```bash
pytest tests/integration/ -v
```

**System Tests:**
```bash
pytest tests/system/ -v --slow
```

**All Tests:**
```bash
pytest tests/ -v --cov=src --cov-report=term-missing
```

---

### VII.9.3 Coverage Report Format

**Requirements:**
- HTML coverage report for detailed analysis
- Terminal coverage report for quick review
- Coverage summary in CI/CD pipeline
- Coverage trends over time

**Minimum Coverage:**
- Overall: ≥ 85%
- Calculation modules: ≥ 90%
- Utility functions: ≥ 80%
- API endpoints: ≥ 85%

---

## VII.10 QA Workflow — Quy trình QA

**EN:** Standardized QA workflow to ensure quality before deployment.

**VI:** Quy trình QA chuẩn hóa để đảm bảo chất lượng trước khi triển khai.

### VII.10.1 Pre-Commit Checks

**Steps:**
1. Run linters (flake8, pylint, eslint)
2. Run formatters (black, prettier)
3. Run type checkers (mypy, TypeScript)
4. Run unit tests (fast tests only)

---

### VII.10.2 Pre-Push Checks

**Steps:**
1. Run all unit tests
2. Run integration tests
3. Check code coverage (≥ 85%)
4. Run static analysis

---

### VII.10.3 Pre-Merge Checks (CI/CD)

**Steps:**
1. Run all tests (unit, integration, system)
2. Run API contract tests
3. Run security tests
4. Validate threshold rules
5. Confirm OpenAPI alignment
6. Produce coverage report
7. Run performance benchmarks

---

### VII.10.4 Pre-Release Checks

**Steps:**
1. All pre-merge checks
2. Full system tests
3. User acceptance testing scenarios
4. Performance stress tests
5. Security audit
6. Documentation review
7. Final QA summary

---

## VII.11 Test Automation — Tự động hóa kiểm thử

### VII.11.1 Continuous Integration

**CI Pipeline:**
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Python
        uses: actions/setup-python@v2
      - name: Install dependencies
        run: pip install -r requirements.txt
      - name: Run tests
        run: pytest tests/ -v --cov=src
      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

---

### VII.11.2 Test Data Management

**Strategies:**
1. **Fixtures:** Reusable test data in pytest fixtures
2. **Factories:** Generate test data programmatically
3. **Mocks:** Mock external dependencies
4. **Test Databases:** Isolated test database instances

---

### VII.11.3 Test Reporting

**Reports:**
1. **JUnit XML:** For CI/CD integration
2. **HTML Reports:** For detailed analysis
3. **Coverage Reports:** For code coverage tracking
4. **Performance Reports:** For performance regression detection

---

## VII.12 Validation Testing — Kiểm thử xác thực

### VII.12.1 Accuracy Validation

**Requirements:**
- Results must match manual calculations within ±3% for standard cases
- Results must match reference implementations
- Formula implementations verified against engineering handbooks

**Test Approach:**
1. Compare system results with manual calculations
2. Compare with reference data from engineering projects
3. Verify against published engineering examples
4. Expert review of critical calculations

---

### VII.12.2 Standards Compliance Validation

**Requirements:**
- All calculations comply with TCVN 33-2006
- All calculations comply with TCVN 7222:2002
- Water quality outputs comply with QCVN standards
- Engineering thresholds within standard limits

**Test Approach:**
1. Validate against TCVN reference ranges
2. Check QCVN compliance for water quality parameters
3. Verify engineering thresholds
4. Flag non-compliant results for review

---

## VII.13 Performance Benchmarks — Điểm chuẩn hiệu suất

### VII.13.1 Calculation Performance

**Benchmarks:**
- Single module: < 5 seconds
- Module chain (5 modules): < 30 seconds
- Module recommendation: < 2 seconds
- Report generation: < 2 minutes

**Measurement:**
- Use pytest-benchmark for performance testing
- Track performance trends over time
- Alert on performance regression (> 20% slower)

---

### VII.13.2 API Performance

**Benchmarks:**
- Simple query: < 1 second
- Complex calculation: < 5 seconds
- Database query: < 500ms
- Concurrent requests (50 users): < 10 seconds average

---

## VII.14 Security Testing — Kiểm thử bảo mật

### VII.14.1 Input Validation Security

**Tests:**
1. SQL injection attempts
2. XSS attempts
3. Command injection attempts
4. Path traversal attempts
5. Buffer overflow attempts

---

### VII.14.2 Authentication & Authorization

**Tests:**
1. Unauthenticated access attempts
2. Unauthorized access attempts
3. Token validation
4. Session management
5. Role-based access control

---

### VII.14.3 API Security

**Tests:**
1. Rate limiting
2. CORS configuration
3. HTTPS enforcement
4. Secure headers
5. Input sanitization

---

## VII.15 Regression Testing — Kiểm thử hồi quy

### VII.15.1 Test Suite Maintenance

**Requirements:**
- All existing tests must pass before new features
- Test suite runs on every commit
- Failed tests block deployment
- Test suite reviewed regularly

---

### VII.15.2 Test Case Versioning

**Requirements:**
- Test cases versioned with code
- Test data versioned separately
- Test results archived
- Test history tracked

---

## VII.16 QA Metrics & Reporting — Số liệu và báo cáo QA

### VII.16.1 Key Metrics

**Metrics:**
1. **Test Coverage:** ≥ 85%
2. **Test Pass Rate:** ≥ 95%
3. **Bug Detection Rate:** Track bugs found by tests
4. **Test Execution Time:** Track test suite performance
5. **Code Quality:** Track linting and static analysis scores

---

### VII.16.2 QA Reports

**Report Types:**
1. **Daily Test Report:** Test execution summary
2. **Weekly QA Summary:** Coverage, pass rate, issues
3. **Release QA Report:** Comprehensive pre-release assessment
4. **Trend Analysis:** Track metrics over time

---

## VII.17 Conclusion — Kết luận

**EN:**

This document defines comprehensive testing and quality assurance strategies for the XLNC Automated Water Treatment Calculation System. The testing strategy ensures:

- **Correctness:** All calculations verified against engineering standards
- **Reliability:** Comprehensive test coverage and edge case handling
- **Performance:** System meets performance benchmarks
- **Security:** Protection against common vulnerabilities
- **Maintainability:** Well-documented, reproducible tests

The system must maintain ≥ 85% code coverage, pass all tests before deployment, and continuously improve test quality based on real-world usage.

**VI:**

Tài liệu này định nghĩa chiến lược kiểm thử và đảm bảo chất lượng toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Chiến lược kiểm thử đảm bảo:

- **Độ chính xác:** Tất cả tính toán được xác minh so với tiêu chuẩn kỹ thuật
- **Độ tin cậy:** Độ phủ test toàn diện và xử lý trường hợp biên
- **Hiệu suất:** Hệ thống đáp ứng các điểm chuẩn hiệu suất
- **Bảo mật:** Bảo vệ chống lại các lỗ hổng phổ biến
- **Khả năng bảo trì:** Test được tài liệu hóa tốt, có thể tái lập

Hệ thống phải duy trì ≥ 85% độ phủ mã, vượt qua tất cả test trước khi triển khai, và liên tục cải thiện chất lượng test dựa trên sử dụng thực tế.

**Hóa phàm:**

Phần này mô tả toàn bộ cách kiểm tra hệ thống để đảm bảo nó chạy đúng, không sai công thức, không crash, và cho ra kết quả chính xác. Từ test đơn vị đến test hệ thống, từ test bình thường đến test trường hợp biên, tất cả đều được quy định rõ ràng để đảm bảo chất lượng hệ thống.

---

**KẾT THÚC PHẦN VII. TESTING & QA**

*Phần này cung cấp đầy đủ chiến lược kiểm thử và đảm bảo chất lượng cho hệ thống tính toán tự động xử lý nước XLNC, bao gồm các loại test, test cases, edge cases, threshold checks, QA workflow, và metrics. Phần này bổ sung và chi tiết hóa nội dung trong Phần V (Functional Requirements - Testing Requirements) và hỗ trợ triển khai thực tế của hệ thống.*