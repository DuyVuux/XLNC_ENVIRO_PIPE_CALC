# VIII. LOGGING, MONITORING & OBSERVABILITY / GHI LOG, GIÁM SÁT & QUAN SÁT

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnVIII_Logging_Monitoring&Observability.md` - phần định nghĩa khung quan sát hệ thống toàn diện cho XLNC. File này mô tả logging standards, monitoring, metrics, tracing, và compliance.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm cấu trúc logging (JSON, log levels) - VIII.2
2. Hiểu quy tắc logging cho từng layer (backend, frontend, database) - VIII.3
3. Nắm metrics, tracing, và alerting - VIII.4, VIII.5
4. Hiểu SLOs và compliance requirements - VIII.6, VIII.7
5. Tham chiếu đúng khi implement logging/monitoring

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement logging trong code
- Thiết kế monitoring và alerting
- Thiết kế metrics và dashboards
- Implement distributed tracing
- Thiết kế compliance logging

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng logging standard (ví dụ: "Theo VIII.2.2, log phải dùng JSON format với timestamp, level, service, module...")
- Tuân thủ log levels (TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL)
- Đảm bảo trace_id propagate qua tất cả layers

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement logging:
1. **Bước 1:** Xác định log level phù hợp
2. **Bước 2:** Tạo structured JSON log với đầy đủ fields
3. **Bước 3:** Đảm bảo trace_id propagate
4. **Bước 4:** Áp dụng module-specific logging rules
5. **Bước 5:** Đảm bảo compliance với NĐ 13/2023

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI dùng structured JSON logs (VIII.2.2)
- PHẢI tuân thủ log levels (VIII.2.1)
- PHẢI đảm bảo trace_id propagate (VIII.2.2)
- PHẢI tuân thủ module-specific logging rules (VIII.3)
- PHẢI đảm bảo compliance với NĐ 13/2023 (VIII.7)

**G. Examples / Ví dụ:**

**Ví dụ 1 - Structured log:**
> "Theo VIII.2.2, log phải có format JSON: {\"timestamp\": \"2024-01-15T10:30:45.123Z\", \"level\": \"INFO\", \"service\": \"xlnc-backend\", \"module\": \"module_1\", \"request_id\": \"req_abc123\", \"message\": \"...\"}"

**Ví dụ 2 - Log level:**
> "Theo VIII.2.1, khi calculation thành công → dùng INFO level. Khi input validation fail → dùng WARN level. Khi calculation error → dùng ERROR level."

---

*(EN + VI, chuẩn quốc tế, đầy đủ cho hệ thống XLNC)*

---

## VIII.1 Overview — Tổng quan

**EN:**

This section defines a comprehensive observability framework for the XLNC Automated Water Treatment Calculation System. The framework ensures system transparency, quick incident detection, reliable long-term operation, and compliance with Vietnamese data protection regulations. All logging, monitoring, and observability practices must support the system's mission-critical nature in water treatment engineering calculations.

**VI:**

Phần này định nghĩa khung quan sát hệ thống toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Khung này đảm bảo tính minh bạch hệ thống, phát hiện sự cố nhanh, vận hành ổn định lâu dài, và tuân thủ các quy định bảo vệ dữ liệu Việt Nam. Tất cả các thực hành ghi log, giám sát và quan sát phải hỗ trợ tính chất quan trọng của hệ thống trong tính toán kỹ thuật xử lý nước.

**Objectives:**

1. **Transparency:** Complete visibility into system operations and calculations
2. **Reliability:** Early detection of issues before they impact users
3. **Compliance:** Adherence to Vietnamese data protection regulations (NĐ 13/2023)
4. **Performance:** Real-time monitoring of calculation performance and system health
5. **Auditability:** Full audit trail for all calculations and data changes

**Hóa phàm:**

Giúp ta "nhìn xuyên" vào hệ thống, biết nó khỏe hay sắp ốm để xử lý trước khi người dùng thấy lỗi. Tất cả tính toán đều được ghi log để có thể kiểm tra lại sau này.

---

## VIII.2 Logging Standards — Tiêu chuẩn ghi log

### VIII.2.1 Log Levels / Mức độ log

**EN:** System must use standardized log levels for consistent log management and filtering.

**VI:** Hệ thống phải sử dụng các mức log chuẩn hóa để quản lý và lọc log nhất quán.

**Log Levels:**

1. **TRACE:**
   - **EN:** Internal flow-level debugging (disabled in production)
   - **VI:** Gỡ lỗi mức dòng chảy nội bộ (tắt trong production)
   - **Use cases:** Detailed function entry/exit, variable values during development
   - **Example:** `TRACE: Entering calculate_pipe_diameter() with Q=0.0167 m³/s`

2. **DEBUG:**
   - **EN:** Development debugging data
   - **VI:** Dữ liệu gỡ lỗi phát triển
   - **Use cases:** Intermediate calculation steps, formula parameter values
   - **Example:** `DEBUG: Calculated Reynolds number Re=94200, flow type=turbulent`

3. **INFO:**
   - **EN:** Normal system events (startup, shutdown, successful requests)
   - **VI:** Sự kiện hệ thống bình thường (khởi động, tắt, yêu cầu thành công)
   - **Use cases:** Module calculation started/completed, API requests, successful validations
   - **Example:** `INFO: Module 1 calculation completed successfully in 1.2s`

4. **WARN:**
   - **EN:** Unexpected events that do not break functionality
   - **VI:** Sự kiện bất ngờ không làm hỏng chức năng
   - **Use cases:** Input values near limits, performance degradation, non-critical validation failures
   - **Example:** `WARN: Flow rate Q=0.001 m³/s is below recommended minimum (0.01 m³/s)`

5. **ERROR:**
   - **EN:** Failures that break request flow
   - **VI:** Lỗi làm gián đoạn luồng yêu cầu
   - **Use cases:** Calculation failures, validation errors, database connection failures
   - **Example:** `ERROR: Module 2 calculation failed: Division by zero in oxygen saturation formula`

6. **CRITICAL:**
   - **EN:** System-wide failures requiring immediate action
   - **VI:** Lỗi toàn hệ thống cần hành động ngay lập tức
   - **Use cases:** Database corruption, system crash, security breach
   - **Example:** `CRITICAL: Database connection pool exhausted, system may become unavailable`

**Priority:** High

---

### VIII.2.2 Log Format / Định dạng log

**EN:** All logs must use structured JSON format for easy parsing, searching, and analysis.

**VI:** Tất cả log phải sử dụng định dạng JSON có cấu trúc để dễ phân tích, tìm kiếm và phân tích.

**Required Fields:**

```json
{
  "timestamp": "2024-01-15T10:30:45.123Z",
  "level": "INFO",
  "service": "xlnc-backend",
  "module": "module_1",
  "request_id": "req_abc123xyz",
  "trace_id": "trace_def456uvw",
  "user_id": "user_789",
  "session_id": "sess_ghi012jkl",
  "duration_ms": 1200,
  "message": "Module 1 calculation completed",
  "context": {
    "input": {
      "Q": 0.0167,
      "Q_unit": "m³/s",
      "t": 25,
      "t_unit": "°C"
    },
    "output": {
      "D": 0.0784,
      "D_unit": "m",
      "v": 1.2,
      "v_unit": "m/s"
    },
    "formula_used": "Darcy-Weisbach",
    "standard_reference": "TCVN 33-2006"
  },
  "environment": "production",
  "version": "1.2.3"
}
```

**Field Descriptions:**

- **timestamp:** ISO 8601 format with timezone (UTC)
- **level:** One of TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL
- **service:** Service name (xlnc-backend, xlnc-frontend, xlnc-db)
- **module:** Module identifier (module_1, module_2, module_3, module_4, module_5, module_chain)
- **request_id:** Unique identifier for each API request
- **trace_id:** Distributed tracing identifier (propagated across services)
- **user_id:** User identifier (if authenticated)
- **session_id:** User session identifier
- **duration_ms:** Request/operation duration in milliseconds
- **message:** Human-readable log message
- **context:** Additional structured data (inputs, outputs, formulas, references)
- **environment:** Environment name (development, staging, production)
- **version:** Application version

**Priority:** High

---

### VIII.2.3 Backend Log Rules (FastAPI) / Quy tắc log backend

**EN:** Backend services must log all critical operations with appropriate context.

**VI:** Các dịch vụ backend phải ghi log tất cả các thao tác quan trọng với ngữ cảnh phù hợp.

**Logging Requirements:**

1. **Request Logging:**
   - Log all incoming API requests (method, path, headers, query params)
   - Log request duration
   - Log response status code
   - **Example:** `INFO: POST /api/v1/modules/1/calculate - 200 OK - 1.2s`

2. **Calculation Logging:**
   - Log module calculation start with input parameters
   - Log intermediate calculation steps (DEBUG level)
   - Log calculation completion with results
   - Log formula used and standard reference
   - **Example:** `INFO: Module 1 calculation started - Q=0.0167 m³/s, t=25°C`

3. **Validation Logging:**
   - Log input validation failures (WARN level)
   - Log validation warnings (WARN level)
   - Log successful validations (DEBUG level)
   - **Example:** `WARN: Input validation failed - Q=-50 m³/ngày (must be > 0)`

4. **Error Logging:**
   - Log all exceptions with full stack trace (ERROR level)
   - Log error context (input parameters, module, formula)
   - Log error recovery attempts
   - **Example:** `ERROR: Module 2 calculation failed - Division by zero in oxygen saturation formula`

5. **Database Logging:**
   - Log slow queries (> 200ms) (WARN level)
   - Log database connection failures (ERROR level)
   - Log transaction rollbacks (WARN level)
   - **Example:** `WARN: Slow database query detected - 350ms - SELECT * FROM projects WHERE user_id=123`

**Implementation:**

- Use `structlog` or `loguru` for structured logging
- Attach `request_id` to all logs via middleware
- Use correlation IDs for distributed tracing
- Never log sensitive data (passwords, tokens, personal information)

**Priority:** High

---

### VIII.2.4 Frontend Log Rules (Next.js/React) / Quy tắc log frontend

**EN:** Frontend must log client-side events and send critical errors to backend.

**VI:** Frontend phải ghi log các sự kiện phía client và gửi lỗi quan trọng đến backend.

**Logging Requirements:**

1. **Client-Side Logging:**
   - Log only INFO/WARN level events locally
   - Log user interactions (form submissions, module selections)
   - Log navigation events
   - **Example:** `INFO: User selected module chain 1→2→3→4→5`

2. **Error Reporting:**
   - Send all ERROR/CRITICAL logs to backend `/api/v1/monitor/fe-log` endpoint
   - Include browser information, user agent, error stack trace
   - Include user context (if authenticated)
   - **Example:** `ERROR: React component error - Cannot read property 'Q' of undefined`

3. **Performance Logging:**
   - Log page load times
   - Log API call durations
   - Log calculation form submission times
   - **Example:** `INFO: Calculation form submitted - duration: 2.3s`

4. **Privacy:**
   - Never log sensitive data (passwords, tokens, personal information)
   - Mask user input in logs (if sensitive)
   - Comply with data protection regulations

**Implementation:**

- Use browser console for development (DEBUG/INFO)
- Send errors to backend for centralized logging
- Use structured logging format (JSON)
- Include correlation IDs for tracing

**Priority:** Medium

---

### VIII.2.5 Database Log Rules (PostgreSQL) / Quy tắc log database

**EN:** Database must log slow queries and critical events for performance monitoring.

**VI:** Database phải ghi log các truy vấn chậm và sự kiện quan trọng để giám sát hiệu suất.

**Logging Requirements:**

1. **Slow Query Logging:**
   - Enable slow query logging for queries > 200ms
   - Log query text, duration, execution plan
   - **Example:** `WARN: Slow query - 350ms - SELECT * FROM calculations WHERE module_id=1`

2. **Lock and Deadlock Logging:**
   - Log lock waits > 1 second
   - Log all deadlocks with transaction details
   - **Example:** `ERROR: Deadlock detected - Transaction 12345 and 12346`

3. **Connection Logging:**
   - Log connection pool exhaustion
   - Log connection failures
   - **Example:** `WARN: Connection pool 80% full - 8/10 connections in use`

4. **Privacy:**
   - Disable full query logging in production (privacy reasons)
   - Log only query metadata (table, operation, duration)
   - Mask sensitive data in query logs

**Configuration:**

```sql
-- Enable slow query logging
SET log_min_duration_statement = 200;

-- Enable deadlock logging
SET deadlock_timeout = 1000;

-- Log lock waits
SET log_lock_waits = on;
```

**Priority:** Medium

---

## VIII.3 Module-Specific Logging — Ghi log theo module

### VIII.3.1 Module 1: Pipe Hydraulics Logging / Ghi log Module 1

**EN:** Module 1 must log all pipe hydraulics calculations with detailed context.

**VI:** Module 1 phải ghi log tất cả tính toán thủy lực đường ống với ngữ cảnh chi tiết.

**Required Logs:**

1. **Input Validation:**
   ```json
   {
     "level": "INFO",
     "module": "module_1",
     "message": "Module 1 input validation started",
     "context": {
       "input": {
         "Q": 500,
         "Q_unit": "m³/ngày",
         "t": 25,
         "t_unit": "°C",
         "L": 1000,
         "L_unit": "m",
         "material": "steel"
       }
     }
   }
   ```

2. **Calculation Steps:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_1",
     "message": "Calculated pipe diameter",
     "context": {
       "step": "diameter_calculation",
       "formula": "D = √(4Q/πV)",
       "input": {"Q": 0.005787, "V": 1.2},
       "output": {"D": 0.0784},
       "standard": "TCVN 33-2006"
     }
   }
   ```

3. **Result Validation:**
   ```json
   {
     "level": "INFO",
     "module": "module_1",
     "message": "Module 1 calculation completed",
     "context": {
       "output": {
         "D": 0.0784,
         "D_unit": "m",
         "v": 1.2,
         "v_unit": "m/s",
         "Re": 94200,
         "H1": 8.5,
         "H1_unit": "m"
       },
       "validation": {
         "status": "passed",
         "warnings": []
       },
       "duration_ms": 1200
     }
   }
   ```

**Priority:** High

---

### VIII.3.2 Module 2: Rainfall Aeration Logging / Ghi log Module 2

**EN:** Module 2 must log aeration calculations and oxygen saturation results.

**VI:** Module 2 phải ghi log tính toán sục khí và kết quả oxy bão hòa.

**Required Logs:**

1. **Oxygen Saturation Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_2",
     "message": "Calculated oxygen saturation",
     "context": {
       "formula": "C_ox = 468/(31.6 + t)",
       "input": {"t": 25},
       "output": {"C_ox": 8.27, "C_ox_unit": "mg/l"},
       "standard": "TCVN 7222:2002"
     }
   }
   ```

2. **Aeration Efficiency:**
   ```json
   {
     "level": "INFO",
     "module": "module_2",
     "message": "Module 2 calculation completed",
     "context": {
       "output": {
         "C_phun": 6.0,
         "C_phun_unit": "m/h",
         "C_thực": 6.616,
         "C_thực_unit": "mg/l",
         "C_ht": 9.925,
         "C_ht_unit": "mg/l"
       },
       "efficiency": {
         "eta": 0.8,
         "status": "sufficient",
         "warning": null
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.3 Module 3: Rapid Mixing Tank Logging / Ghi log Module 3

**EN:** Module 3 must log mixing tank calculations and reaction kinetics.

**VI:** Module 3 phải ghi log tính toán bể trộn và động học phản ứng.

**Required Logs:**

1. **Reaction Kinetics:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_3",
     "message": "Calculated reaction rate",
     "context": {
       "formula": "r_Fe = k_Fe × [Fe²⁺] × [O₂]",
       "input": {
         "k_Fe": 0.5,
         "Fe2_plus": 5,
         "O2": 6.616
       },
       "output": {"r_Fe": 16.54, "r_Fe_unit": "mg/l·s"}
     }
   }
   ```

2. **Mixing Tank Dimensions:**
   ```json
   {
     "level": "INFO",
     "module": "module_3",
     "message": "Module 3 calculation completed",
     "context": {
       "output": {
         "V": 30,
         "V_unit": "m³",
         "L": 4,
         "W": 3,
         "H": 2.5,
         "t_mix": 0.5,
         "t_mix_unit": "h"
       },
       "reaction_efficiency": {
         "eta_Fe": 100,
         "eta_H2S": 100,
         "unit": "%"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.4 Module 4: Sedimentation Tank Logging / Ghi log Module 4

**EN:** Module 4 must log sedimentation calculations and settling efficiency.

**VI:** Module 4 phải ghi log tính toán lắng và hiệu suất lắng.

**Required Logs:**

1. **Settling Area Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_4",
     "message": "Calculated required settling area",
     "context": {
       "formula": "F = Q₁/(U_o×H×cos(α) + W×cos²(α))",
       "input": {
         "Q1": 61.25,
         "U_o": 0.00025,
         "H": 0.867,
         "W": 0.05,
         "angle": 60
       },
       "output": {"F": 7.3027, "F_unit": "m²"}
     }
   }
   ```

2. **Sedimentation Results:**
   ```json
   {
     "level": "INFO",
     "module": "module_4",
     "message": "Module 4 calculation completed",
     "context": {
       "output": {
         "D": 6.5,
         "R": 2.3,
         "H": 3,
         "V": 44.85,
         "V_unit": "m³",
         "t_lắng": 43.9,
         "t_lắng_unit": "phút",
         "eta": 21.9,
         "eta_unit": "%"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.5 Module 5: Filtration Unit Logging / Ghi log Module 5

**EN:** Module 5 must log filtration calculations and backwash operations.

**VI:** Module 5 phải ghi log tính toán lọc và thao tác rửa ngược.

**Required Logs:**

1. **Filter Area Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_5",
     "message": "Calculated filter area",
     "context": {
       "formula": "f₁ = Q/v",
       "input": {
         "Q": 250,
         "Q_unit": "m³/h",
         "v": 8,
         "v_unit": "m/h"
       },
       "output": {"f₁": 31.25, "f₁_unit": "m²"}
     }
   }
   ```

2. **Filtration Results:**
   ```json
   {
     "level": "INFO",
     "module": "module_5",
     "message": "Module 5 calculation completed",
     "context": {
       "output": {
         "D": 6.3,
         "D_unit": "m",
         "F₁": 31.2,
         "F₁_unit": "m²",
         "v_actual": 8.0,
         "v_actual_unit": "m/h",
         "H": 2.5,
         "H_unit": "m",
         "q_backwash": 15,
         "q_backwash_unit": "l/s·m²"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.6 Module Chain Logging / Ghi log chuỗi module

**EN:** Module chains must log data flow between modules and chain orchestration.

**VI:** Chuỗi module phải ghi log dòng chảy dữ liệu giữa các module và điều phối chuỗi.

**Required Logs:**

1. **Chain Start:**
   ```json
   {
     "level": "INFO",
     "module": "module_chain",
     "message": "Module chain calculation started",
     "context": {
       "chain": [1, 2, 3, 4, 5],
       "input": {
         "Q": 5000,
         "Q_unit": "m³/ngày"
       }
     }
   }
   ```

2. **Data Flow Between Modules:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_chain",
     "message": "Data passed from Module 1 to Module 2",
     "context": {
       "from": "module_1",
       "to": "module_2",
       "data": {
         "Q": 0.05787,
         "Q_unit": "m³/s",
         "t": 25,
         "t_unit": "°C"
       }
     }
   }
   ```

3. **Chain Completion:**
   ```json
   {
     "level": "INFO",
     "module": "module_chain",
     "message": "Module chain calculation completed",
     "context": {
       "chain": [1, 2, 3, 4, 5],
       "duration_ms": 28000,
       "modules_completed": 5,
       "status": "success"
     }
   }
   ```

**Priority:** High

---

## VIII.4 Metrics & Dashboards — Chỉ số và bảng điều khiển

### VIII.4.1 Overview / Tổng quan

**EN:** System must collect and display comprehensive metrics for monitoring system health and performance.

**VI:** Hệ thống phải thu thập và hiển thị các chỉ số toàn diện để giám sát sức khỏe và hiệu suất hệ thống.

**Tooling Stack:**

- **Metrics Collection:** Prometheus
- **Visualization:** Grafana
- **Alerting:** Alertmanager
- **Storage:** Prometheus TSDB (Time Series Database)

**Priority:** High

---

### VIII.4.2 System-Level Metrics / Chỉ số mức hệ thống

**EN:** Basic system health metrics for infrastructure monitoring.

**VI:** Chỉ số sức khỏe hệ thống cơ bản để giám sát hạ tầng.

**Metrics:**

1. **CPU Usage:**
   - **Metric:** `system_cpu_usage_percent`
   - **Description:** CPU utilization percentage
   - **Alert Threshold:** > 80% for 10 minutes
   - **Unit:** Percentage

2. **Memory Usage:**
   - **Metric:** `system_memory_usage_bytes`
   - **Description:** Memory usage in bytes
   - **Alert Threshold:** > 85% for 10 minutes
   - **Unit:** Bytes

3. **Disk I/O:**
   - **Metric:** `system_disk_io_bytes_per_second`
   - **Description:** Disk read/write operations per second
   - **Alert Threshold:** > 90% of disk capacity
   - **Unit:** Bytes per second

4. **Network I/O:**
   - **Metric:** `system_network_io_bytes_per_second`
   - **Description:** Network traffic per second
   - **Unit:** Bytes per second

**Priority:** High

---

### VIII.4.3 Backend Metrics / Chỉ số backend

**EN:** Application-level metrics for backend services.

**VI:** Chỉ số mức ứng dụng cho các dịch vụ backend.

**Metrics:**

1. **Request Rate:**
   - **Metric:** `http_requests_total`
   - **Description:** Total number of HTTP requests
   - **Labels:** `method`, `endpoint`, `status_code`
   - **Unit:** Requests per second

2. **Request Duration:**
   - **Metric:** `http_request_duration_seconds`
   - **Description:** HTTP request duration
   - **Labels:** `method`, `endpoint`, `status_code`
   - **Percentiles:** p50, p90, p95, p99
   - **Alert Threshold:** p95 > 800ms
   - **Unit:** Seconds

3. **Error Rate:**
   - **Metric:** `http_errors_total`
   - **Description:** Total number of HTTP errors (4xx, 5xx)
   - **Labels:** `method`, `endpoint`, `status_code`
   - **Alert Threshold:** > 5% for 3 minutes
   - **Unit:** Errors per second

4. **Database Query Duration:**
   - **Metric:** `db_query_duration_seconds`
   - **Description:** Database query execution time
   - **Labels:** `query_type`, `table`
   - **Alert Threshold:** p95 > 500ms
   - **Unit:** Seconds

5. **Cache Hit/Miss Ratio:**
   - **Metric:** `cache_hits_total`, `cache_misses_total`
   - **Description:** Cache performance metrics
   - **Labels:** `cache_type`
   - **Unit:** Count

**Priority:** High

---

### VIII.4.4 Module Calculation Metrics / Chỉ số tính toán module

**EN:** Domain-specific metrics for each calculation module.

**VI:** Chỉ số đặc thù ngành cho từng module tính toán.

**Metrics by Module:**

1. **Module 1 (Pipe Hydraulics):**
   - **Metric:** `module_1_calculation_duration_seconds`
   - **Description:** Module 1 calculation duration
   - **Percentiles:** p50, p90, p95, p99
   - **Alert Threshold:** p95 > 2 seconds
   - **Unit:** Seconds

2. **Module 2 (Rainfall Aeration):**
   - **Metric:** `module_2_calculation_duration_seconds`
   - **Description:** Module 2 calculation duration
   - **Alert Threshold:** p95 > 2 seconds
   - **Unit:** Seconds

3. **Module 3 (Rapid Mixing):**
   - **Metric:** `module_3_calculation_duration_seconds`
   - **Description:** Module 3 calculation duration
   - **Alert Threshold:** p95 > 2 seconds
   - **Unit:** Seconds

4. **Module 4 (Sedimentation):**
   - **Metric:** `module_4_calculation_duration_seconds`
   - **Description:** Module 4 calculation duration
   - **Alert Threshold:** p95 > 2 seconds
   - **Unit:** Seconds

5. **Module 5 (Filtration):**
   - **Metric:** `module_5_calculation_duration_seconds`
   - **Description:** Module 5 calculation duration
   - **Alert Threshold:** p95 > 2 seconds
   - **Unit:** Seconds

6. **Module Chain:**
   - **Metric:** `module_chain_calculation_duration_seconds`
   - **Description:** Full module chain calculation duration
   - **Labels:** `chain_config` (e.g., "1-2-3-4-5")
   - **Alert Threshold:** p95 > 30 seconds
   - **Unit:** Seconds

7. **Calculation Warnings:**
   - **Metric:** `calculation_warnings_total`
   - **Description:** Total number of calculation warnings
   - **Labels:** `module`, `warning_type`
   - **Unit:** Count

8. **Parameter Anomalies:**
   - **Metric:** `parameter_anomalies_total`
   - **Description:** Total number of parameter anomalies detected
   - **Labels:** `module`, `parameter_name`
   - **Unit:** Count

**Priority:** High

---

### VIII.4.5 Frontend Metrics / Chỉ số frontend

**EN:** Client-side performance metrics for frontend monitoring.

**VI:** Chỉ số hiệu suất phía client để giám sát frontend.

**Metrics:**

1. **First Paint (FP):**
   - **Metric:** `frontend_first_paint_seconds`
   - **Description:** Time to first paint
   - **Alert Threshold:** > 2 seconds
   - **Unit:** Seconds

2. **Time to Interactive (TTI):**
   - **Metric:** `frontend_time_to_interactive_seconds`
   - **Description:** Time until page is interactive
   - **Alert Threshold:** > 3 seconds
   - **Unit:** Seconds

3. **API Error Rate:**
   - **Metric:** `frontend_api_errors_total`
   - **Description:** Total number of API errors from frontend
   - **Labels:** `endpoint`, `error_type`
   - **Unit:** Count

4. **Bundle Size:**
   - **Metric:** `frontend_bundle_size_bytes`
   - **Description:** JavaScript bundle size
   - **Labels:** `bundle_name`
   - **Unit:** Bytes

**Priority:** Medium

---

### VIII.4.6 Dashboard Configuration / Cấu hình bảng điều khiển

**EN:** Grafana dashboards must provide comprehensive system visibility.

**VI:** Bảng điều khiển Grafana phải cung cấp khả năng quan sát hệ thống toàn diện.

**Required Dashboards:**

1. **System Overview Dashboard:**
   - CPU, Memory, Disk, Network usage
   - Request rate and error rate
   - System uptime

2. **Backend Performance Dashboard:**
   - API latency (p50, p90, p95, p99)
   - Error rate by endpoint
   - Database query performance
   - Cache hit/miss ratio

3. **Module Calculation Dashboard:**
   - Calculation duration by module
   - Calculation success/failure rate
   - Warning and anomaly counts
   - Module chain performance

4. **Frontend Performance Dashboard:**
   - Page load times
   - API error rate
   - User interaction metrics

5. **Business Metrics Dashboard:**
   - Number of calculations per day
   - Most used modules
   - Average calculation time
   - User activity

**Priority:** High

---

## VIII.5 Distributed Tracing — Truy vết phân tán

### VIII.5.1 Overview / Tổng quan

**EN:** System must implement distributed tracing to track requests across services and modules.

**VI:** Hệ thống phải triển khai truy vết phân tán để theo dõi yêu cầu qua các dịch vụ và module.

**Tooling Stack:**

- **Tracing:** OpenTelemetry
- **Backend:** OpenTelemetry SDK for Python (FastAPI)
- **Frontend:** OpenTelemetry SDK for JavaScript (Next.js/React)
- **Collector:** OpenTelemetry Collector
- **Storage:** Jaeger or Tempo

**Priority:** High

---

### VIII.5.2 Trace Identifiers / Định danh truy vết

**EN:** Trace identifiers must propagate across all services and modules.

**VI:** Định danh truy vết phải lan truyền qua tất cả các dịch vụ và module.

**Trace ID Generation:**

1. **Frontend:**
   - Generate `trace_id` at request start
   - Include in all API calls via HTTP header `X-Trace-Id`
   - Store in browser session for correlation

2. **Backend:**
   - Extract `trace_id` from HTTP header
   - Propagate to all downstream services
   - Include in all log entries

3. **Module Calculations:**
   - Include `trace_id` in all calculation logs
   - Correlate module calculations with parent request

**HTTP Header:**

```
X-Trace-Id: trace_def456uvw
X-Span-Id: span_abc123xyz
```

**Priority:** High

---

### VIII.5.3 Required Traces / Truy vết bắt buộc

**EN:** System must trace all critical operations for full visibility.

**VI:** Hệ thống phải truy vết tất cả các thao tác quan trọng để có khả năng quan sát đầy đủ.

**Traced Operations:**

1. **API Request Lifecycle:**
   - Frontend → Backend → Database
   - Request processing time
   - Response generation time

2. **Module Calculation Pipeline:**
   - Module calculation start
   - Formula execution
   - Result validation
   - Module completion

3. **Module Chain Execution:**
   - Chain start
   - Data flow between modules
   - Chain completion

4. **External Service Calls:**
   - File export (PDF, Excel)
   - Report generation
   - External API calls (if any)

**Span Requirements:**

Each span must include:
- **Module name:** Identifier of the module or service
- **Duration:** Operation duration in milliseconds
- **Status:** OK, WARN, or ERROR
- **Input parameter count:** Number of input parameters
- **Output parameter count:** Number of output parameters
- **Formula used:** Formula identifier (if applicable)
- **Standard reference:** TCVN/QCVN reference (if applicable)

**Example Span:**

```json
{
  "trace_id": "trace_def456uvw",
  "span_id": "span_module1_abc",
  "parent_span_id": "span_api_req_xyz",
  "name": "module_1_calculation",
  "start_time": "2024-01-15T10:30:45.123Z",
  "end_time": "2024-01-15T10:30:46.323Z",
  "duration_ms": 1200,
  "status": "OK",
  "attributes": {
    "module": "module_1",
    "input_params": 6,
    "output_params": 8,
    "formula": "Darcy-Weisbach",
    "standard": "TCVN 33-2006"
  }
}
```

**Priority:** High

---

## VIII.6 Alerts & Incident Response — Cảnh báo và quy trình sự cố

### VIII.6.1 Alert Priorities / Ưu tiên cảnh báo

**EN:** System must classify alerts by priority for appropriate response.

**VI:** Hệ thống phải phân loại cảnh báo theo mức ưu tiên để phản hồi phù hợp.

**Alert Priorities:**

1. **P1 – Critical:**
   - **EN:** System down, API unavailable, database connection failure
   - **VI:** Hệ thống sập, API không khả dụng, lỗi kết nối database
   - **Response Time:** Immediate (< 5 minutes)
   - **Example:** `CRITICAL: Database connection pool exhausted - System may become unavailable`

2. **P2 – High:**
   - **EN:** Error rate > 5% for > 3 minutes, calculation failures > 10% for > 5 minutes
   - **VI:** Tỷ lệ lỗi > 5% trong > 3 phút, lỗi tính toán > 10% trong > 5 phút
   - **Response Time:** < 15 minutes
   - **Example:** `HIGH: Error rate 7.5% for 5 minutes - Endpoint: /api/v1/modules/1/calculate`

3. **P3 – Medium:**
   - **EN:** Slow computation (p95 > 2s), performance degradation
   - **VI:** Tính toán chậm (p95 > 2s), suy giảm hiệu suất
   - **Response Time:** < 1 hour
   - **Example:** `MEDIUM: Module 1 calculation p95 latency 2.5s (threshold: 2s)`

4. **P4 – Low:**
   - **EN:** Resource trend warning (CPU > 80% for 10 minutes), capacity planning
   - **VI:** Cảnh báo xu hướng tài nguyên (CPU > 80% trong 10 phút), lập kế hoạch dung lượng
   - **Response Time:** < 4 hours
   - **Example:** `LOW: CPU usage 82% for 12 minutes - Consider scaling`

**Priority:** High

---

### VIII.6.2 Alert Channels / Kênh cảnh báo

**EN:** Alerts must be delivered through appropriate channels based on priority.

**VI:** Cảnh báo phải được gửi qua các kênh phù hợp dựa trên mức ưu tiên.

**Alert Channels:**

1. **Slack:**
   - **Priority:** P1, P2, P3, P4
   - **Channel:** `#xlnc-alerts`
   - **Format:** Structured message with alert details, links to dashboards

2. **Email:**
   - **Priority:** P1, P2, P3
   - **Recipients:** On-call engineer, team lead, project manager
   - **Format:** HTML email with alert summary and links

3. **SMS/Telegram:**
   - **Priority:** P1 only
   - **Recipients:** On-call engineer
   - **Format:** Short message with alert type and link

4. **PagerDuty (if available):**
   - **Priority:** P1, P2
   - **Format:** Automatic incident creation with escalation

**Priority:** High

---

### VIII.6.3 Incident Workflow / Quy trình sự cố

**EN:** System must follow international standard incident response workflow.

**VI:** Hệ thống phải tuân theo quy trình phản hồi sự cố tiêu chuẩn quốc tế.

**Incident Workflow Steps:**

1. **Detect:**
   - **EN:** Automated alert triggers or manual detection
   - **VI:** Cảnh báo tự động kích hoạt hoặc phát hiện thủ công
   - **Actions:** Alert sent, incident ticket created

2. **Acknowledge:**
   - **EN:** On-call engineer acknowledges incident
   - **VI:** Kỹ sư trực ca xác nhận sự cố
   - **Actions:** Update incident status, assign owner

3. **Mitigate:**
   - **EN:** Apply temporary fix (hotfix, scale, rollback)
   - **VI:** Áp dụng sửa chữa tạm thời (hotfix, scale, rollback)
   - **Actions:** Restore service, reduce impact

4. **Resolve:**
   - **EN:** Permanent fix applied, service restored
   - **VI:** Sửa chữa vĩnh viễn được áp dụng, dịch vụ được khôi phục
   - **Actions:** Verify fix, close incident

5. **Post-Mortem:**
   - **EN:** Conduct post-mortem analysis
   - **VI:** Tiến hành phân tích sau sự cố
   - **Actions:** Document root cause, timeline, impact

6. **Improvement Plan:**
   - **EN:** Create improvement plan to prevent recurrence
   - **VI:** Tạo kế hoạch cải thiện để ngăn chặn tái diễn
   - **Actions:** Implement improvements, update monitoring

**Priority:** High

---

### VIII.6.4 Post-Mortem Template / Mẫu phân tích sau sự cố

**EN:** All incidents must be documented using standardized post-mortem template.

**VI:** Tất cả sự cố phải được tài liệu hóa bằng mẫu phân tích sau sự cố chuẩn hóa.

**Post-Mortem Template:**

1. **Summary:**
   - **EN:** Brief description of the incident
   - **VI:** Mô tả ngắn gọn về sự cố
   - **Fields:** Incident ID, date, duration, severity

2. **Timeline:**
   - **EN:** Chronological sequence of events
   - **VI:** Trình tự thời gian của các sự kiện
   - **Fields:** Detection time, mitigation time, resolution time

3. **Root Cause:**
   - **EN:** Primary cause of the incident
   - **VI:** Nguyên nhân chính của sự cố
   - **Fields:** Technical details, contributing factors

4. **User Impact:**
   - **EN:** Impact on users and business
   - **VI:** Tác động đến người dùng và doanh nghiệp
   - **Fields:** Affected users, downtime, data loss

5. **Fix Applied:**
   - **EN:** Temporary and permanent fixes
   - **VI:** Sửa chữa tạm thời và vĩnh viễn
   - **Fields:** Hotfix details, permanent solution

6. **Prevention Plan:**
   - **EN:** Actions to prevent recurrence
   - **VI:** Hành động để ngăn chặn tái diễn
   - **Fields:** Monitoring improvements, code changes, process updates

**Priority:** High

---

## VIII.7 Service Level Objectives (SLOs) — Mục tiêu mức dịch vụ

### VIII.7.1 Overview / Tổng quan

**EN:** System must define and monitor Service Level Objectives based on non-functional requirements.

**VI:** Hệ thống phải định nghĩa và giám sát Mục tiêu Mức Dịch vụ dựa trên yêu cầu phi chức năng.

**SLO Categories:**

1. **Availability:** System uptime and availability
2. **Performance:** Response time and latency
3. **Error Rate:** Error percentage and reliability
4. **Data Integrity:** Data consistency and backup

**Priority:** High

---

### VIII.7.2 Availability SLOs / SLO về tính khả dụng

**EN:** System must meet availability targets based on NFR-03 (Reliability).

**VI:** Hệ thống phải đáp ứng mục tiêu khả dụng dựa trên NFR-03 (Độ tin cậy).

**SLOs:**

1. **Backend Availability:**
   - **Target:** ≥ 99.5% uptime
   - **Measurement:** (Total time - Downtime) / Total time × 100%
   - **Calculation Period:** Monthly
   - **Allowed Downtime:** ~3.65 days per year
   - **Based on:** NFR-03 (Reliability)

2. **Frontend Availability:**
   - **Target:** ≥ 99% uptime
   - **Measurement:** (Total time - Downtime) / Total time × 100%
   - **Calculation Period:** Monthly
   - **Allowed Downtime:** ~7.3 days per year

3. **Database Availability:**
   - **Target:** ≥ 99.9% uptime
   - **Measurement:** (Total time - Downtime) / Total time × 100%
   - **Calculation Period:** Monthly
   - **Allowed Downtime:** ~8.76 hours per year

**Priority:** High

---

### VIII.7.3 Performance SLOs / SLO về hiệu suất

**EN:** System must meet performance targets based on NFR-01 (Performance) and workflow requirements.

**VI:** Hệ thống phải đáp ứng mục tiêu hiệu suất dựa trên NFR-01 (Hiệu suất) và yêu cầu quy trình.

**SLOs:**

1. **API Latency:**
   - **Target:** p95 API latency < 800ms
   - **Measurement:** 95th percentile of API response time
   - **Based on:** NFR-01 (Performance), VI.8.4 (Workflow Performance)

2. **Single Module Calculation:**
   - **Target:** < 5 seconds for standard project
   - **Measurement:** Average calculation time per module
   - **Based on:** NFR-01 (Performance), VI.8.4 (Workflow Performance)

3. **Module Chain Calculation:**
   - **Target:** < 30 seconds for full chain (5 modules)
   - **Measurement:** Average calculation time for full chain
   - **Based on:** NFR-01 (Performance), VI.8.4 (Workflow Performance)

4. **Report Generation:**
   - **Target:** < 2 minutes for standard project
   - **Measurement:** Average report generation time
   - **Based on:** NFR-01 (Performance)

**Priority:** High

---

### VIII.7.4 Error Rate SLOs / SLO về tỷ lệ lỗi

**EN:** System must maintain low error rates for reliable operation.

**VI:** Hệ thống phải duy trì tỷ lệ lỗi thấp để vận hành đáng tin cậy.

**SLOs:**

1. **Normal Operation:**
   - **Target:** < 1% error rate
   - **Measurement:** (Error requests / Total requests) × 100%
   - **Calculation Period:** Daily
   - **Based on:** Industry best practices

2. **High Load Operation:**
   - **Target:** < 3% error rate during high load
   - **Measurement:** (Error requests / Total requests) × 100%
   - **Calculation Period:** During peak hours
   - **Based on:** Industry best practices

3. **Calculation Errors:**
   - **Target:** < 0.5% calculation failure rate
   - **Measurement:** (Failed calculations / Total calculations) × 100%
   - **Calculation Period:** Daily
   - **Based on:** Domain requirements

**Priority:** High

---

### VIII.7.5 Data Integrity SLOs / SLO về tính toàn vẹn dữ liệu

**EN:** System must ensure data integrity based on NFR-03 (Reliability).

**VI:** Hệ thống phải đảm bảo tính toàn vẹn dữ liệu dựa trên NFR-03 (Độ tin cậy).

**SLOs:**

1. **Database Consistency:**
   - **Target:** 100% consistency (no data corruption)
   - **Measurement:** Daily consistency checks
   - **Based on:** NFR-03 (Reliability)

2. **Backup RPO (Recovery Point Objective):**
   - **Target:** ≤ 6 hours
   - **Measurement:** Maximum data loss in case of failure
   - **Based on:** NFR-03 (Reliability)

3. **Backup RTO (Recovery Time Objective):**
   - **Target:** ≤ 2 hours
   - **Measurement:** Maximum time to restore service after failure
   - **Based on:** NFR-03 (Reliability)

**Priority:** High

---

## VIII.8 Privacy & Compliance Logging — Ghi log riêng tư và tuân thủ

### VIII.8.1 Data Protection Requirements / Yêu cầu bảo vệ dữ liệu

**EN:** System must comply with Vietnamese data protection regulations and international best practices.

**VI:** Hệ thống phải tuân thủ các quy định bảo vệ dữ liệu Việt Nam và thực hành tốt nhất quốc tế.

**Compliance Requirements:**

1. **Vietnam: NĐ 13/2023 về bảo vệ dữ liệu cá nhân:**
   - **EN:** Decree 13/2023 on Personal Data Protection
   - **VI:** Nghị định 13/2023 về Bảo vệ Dữ liệu Cá nhân
   - **Requirements:**
     - No personal data in logs without consent
     - Mask sensitive fields (email, IP, tokens)
     - Data retention limits
     - Right to deletion

2. **GDPR-like Practices:**
   - **EN:** For international users, apply GDPR-like practices
   - **VI:** Đối với người dùng quốc tế, áp dụng thực hành giống GDPR
   - **Requirements:**
     - Data minimization
     - Purpose limitation
     - Storage limitation
     - Right to access and deletion

**Priority:** High

---

### VIII.8.2 Sensitive Data Handling / Xử lý dữ liệu nhạy cảm

**EN:** System must never log sensitive data and must mask sensitive fields.

**VI:** Hệ thống không bao giờ ghi log dữ liệu nhạy cảm và phải che dấu các trường nhạy cảm.

**Sensitive Data Types:**

1. **Authentication Data:**
   - Passwords (never log)
   - API tokens (mask: `token_***xyz`)
   - Session IDs (log only for debugging, mask in production)

2. **Personal Information:**
   - Email addresses (mask: `u***@example.com`)
   - IP addresses (mask last octet: `192.168.1.***`)
   - Phone numbers (mask: `+84 *** *** ***`)

3. **Financial Data:**
   - Payment information (never log)
   - Credit card numbers (never log)

**Masking Rules:**

```python
# Example masking functions
def mask_email(email: str) -> str:
    if '@' in email:
        local, domain = email.split('@', 1)
        return f"{local[0]}***@{domain}"
    return "***"

def mask_ip(ip: str) -> str:
    parts = ip.split('.')
    if len(parts) == 4:
        return f"{parts[0]}.{parts[1]}.{parts[2]}.***"
    return "***"

def mask_token(token: str) -> str:
    if len(token) > 8:
        return f"{token[:4]}***{token[-4:]}"
    return "***"
```

**Priority:** High

---

### VIII.8.3 Log Retention / Lưu trữ log

**EN:** System must define log retention periods based on compliance and operational needs.

**VI:** Hệ thống phải định nghĩa thời gian lưu trữ log dựa trên tuân thủ và nhu cầu vận hành.

**Retention Periods:**

1. **Application Logs:**
   - **Retention:** 30-90 days
   - **Reason:** Operational debugging and monitoring
   - **Storage:** Centralized log storage (Loki/Elastic)

2. **Audit Logs:**
   - **Retention:** 1 year
   - **Reason:** Compliance and audit requirements
   - **Storage:** Secure, immutable storage

3. **Calculation Logs:**
   - **Retention:** 90 days (standard), 1 year (for critical projects)
   - **Reason:** Reproducibility and audit trail
   - **Storage:** Database with archival capability

4. **Error Logs:**
   - **Retention:** 90 days
   - **Reason:** Incident analysis and improvement
   - **Storage:** Centralized log storage

5. **Performance Metrics:**
   - **Retention:** 1 year (aggregated), 30 days (detailed)
   - **Reason:** Trend analysis and capacity planning
   - **Storage:** Prometheus TSDB

**Priority:** High

---

## VIII.9 Observability Tooling Stack — Công cụ quan sát hệ thống

### VIII.9.1 Overview / Tổng quan

**EN:** System must use industry-standard observability tools integrated into a cohesive stack.

**VI:** Hệ thống phải sử dụng các công cụ quan sát tiêu chuẩn ngành được tích hợp vào một stack gắn kết.

**Tool Categories:**

1. **Log Aggregation:** Centralized log collection and storage
2. **Metrics Collection:** Time-series metrics storage and querying
3. **Distributed Tracing:** Request tracing across services
4. **Dashboards:** Visualization and monitoring interfaces
5. **Alerting:** Alert management and notification

---

### VIII.9.2 Log Aggregation Tools / Công cụ tổng hợp log

**EN:** System must use centralized log aggregation for all services.

**VI:** Hệ thống phải sử dụng tổng hợp log tập trung cho tất cả các dịch vụ.

**Recommended Tools:**

1. **Loki (Grafana Loki):**
   - **Purpose:** Log aggregation and storage
   - **Advantages:** Lightweight, integrates with Grafana, efficient storage
   - **Configuration:**
     - Retention: 30-90 days for application logs
     - Labels: service, module, level, environment
     - Query language: LogQL

2. **Elasticsearch + Logstash + Kibana (ELK Stack):**
   - **Purpose:** Alternative log aggregation stack
   - **Advantages:** Powerful search, flexible indexing
   - **Configuration:**
     - Index patterns: `xlnc-logs-YYYY.MM.DD`
     - Retention: 30-90 days
     - Index lifecycle management enabled

**Priority:** High

---

### VIII.9.3 Metrics Collection Tools / Công cụ thu thập chỉ số

**EN:** System must use time-series database for metrics storage.

**VI:** Hệ thống phải sử dụng cơ sở dữ liệu chuỗi thời gian để lưu trữ chỉ số.

**Recommended Tools:**

1. **Prometheus:**
   - **Purpose:** Metrics collection and storage
   - **Advantages:** Industry standard, powerful query language (PromQL), pull-based model
   - **Configuration:**
     - Scrape interval: 15 seconds
     - Retention: 1 year (aggregated), 30 days (detailed)
     - Storage: TSDB with compression
   - **Metrics Types:**
     - Counter: Request counts, error counts
     - Gauge: Current values (CPU, memory, active users)
     - Histogram: Request duration, calculation time
     - Summary: Percentiles for latency

2. **Grafana:**
   - **Purpose:** Metrics visualization and dashboards
   - **Advantages:** Rich visualization, alerting integration
   - **Configuration:**
     - Data sources: Prometheus, Loki, PostgreSQL
     - Dashboard refresh: 30 seconds (real-time), 5 minutes (standard)
     - Alert rules: Integrated with Alertmanager

**Priority:** High

---

### VIII.9.4 Distributed Tracing Tools / Công cụ truy vết phân tán

**EN:** System must use distributed tracing for request flow visibility.

**VI:** Hệ thống phải sử dụng truy vết phân tán để có khả năng hiển thị dòng chảy yêu cầu.

**Recommended Tools:**

1. **OpenTelemetry:**
   - **Purpose:** Distributed tracing standard
   - **Advantages:** Vendor-neutral, industry standard, supports multiple backends
   - **Configuration:**
     - Trace sampling: 100% for errors, 10% for normal requests
     - Span attributes: module, calculation_type, input_params_count
     - Export format: OTLP (OpenTelemetry Protocol)

2. **Jaeger:**
   - **Purpose:** Trace storage and visualization
   - **Advantages:** Open-source, good UI, efficient storage
   - **Configuration:**
     - Retention: 7 days
     - Storage: Elasticsearch or Cassandra
     - Sampling: Head-based sampling

3. **Zipkin:**
   - **Purpose:** Alternative trace storage
   - **Advantages:** Lightweight, simple setup
   - **Configuration:**
     - Retention: 7 days
     - Storage: In-memory or Elasticsearch

**Priority:** Medium

---

### VIII.9.5 Dashboard Tools / Công cụ bảng điều khiển

**EN:** System must provide comprehensive dashboards for monitoring.

**VI:** Hệ thống phải cung cấp bảng điều khiển toàn diện để giám sát.

**Recommended Tools:**

1. **Grafana:**
   - **Purpose:** Primary dashboard tool
   - **Dashboards Required:**
     - System Overview Dashboard
     - Module Performance Dashboard
     - API Performance Dashboard
     - Error Rate Dashboard
     - User Activity Dashboard
   - **Configuration:**
     - Auto-refresh: 30 seconds
     - Time range: Last 1 hour, 6 hours, 24 hours, 7 days
     - Export: PDF reports for weekly reviews

2. **Custom Admin Dashboard:**
   - **Purpose:** Internal monitoring interface
   - **Features:**
     - Real-time calculation monitoring
     - Module chain performance
     - User activity tracking
     - System health status

**Priority:** High

---

### VIII.9.6 Alerting Tools / Công cụ cảnh báo

**EN:** System must use alerting tools for incident notification.

**VI:** Hệ thống phải sử dụng công cụ cảnh báo để thông báo sự cố.

**Recommended Tools:**

1. **Alertmanager (Prometheus):**
   - **Purpose:** Alert routing and management
   - **Advantages:** Integrates with Prometheus, flexible routing
   - **Configuration:**
     - Alert groups: P1, P2, P3, P4
     - Routing: Slack, Email, SMS (P1 only)
     - Inhibition rules: Prevent alert storms

2. **Datadog:**
   - **Purpose:** Alternative monitoring and alerting platform
   - **Advantages:** All-in-one solution, good UI
   - **Configuration:**
     - Monitors: Custom alert conditions
     - Notifications: Slack, Email, PagerDuty

3. **PagerDuty:**
   - **Purpose:** On-call management (for P1 alerts)
   - **Advantages:** Escalation policies, on-call scheduling
   - **Configuration:**
     - Escalation: 5 minutes → 10 minutes → 15 minutes
     - On-call rotation: Weekly rotation

**Priority:** High

---

### VIII.9.7 Tool Integration / Tích hợp công cụ

**EN:** All observability tools must be integrated into a cohesive monitoring stack.

**VI:** Tất cả các công cụ quan sát phải được tích hợp vào một stack giám sát gắn kết.

**Integration Requirements:**

1. **Log Correlation:**
   - **EN:** Logs must include trace_id and span_id for correlation
   - **VI:** Log phải bao gồm trace_id và span_id để tương quan
   - **Implementation:** Structured logging with OpenTelemetry context

2. **Metrics from Logs:**
   - **EN:** Extract metrics from logs using log aggregation tools
   - **VI:** Trích xuất chỉ số từ log bằng công cụ tổng hợp log
   - **Example:** Error rate from ERROR level logs

3. **Traces to Metrics:**
   - **EN:** Convert trace spans to metrics (duration, count)
   - **VI:** Chuyển đổi trace spans thành chỉ số (thời lượng, số lượng)
   - **Example:** API latency from trace spans

4. **Unified Dashboard:**
   - **EN:** Single dashboard showing logs, metrics, and traces
   - **VI:** Một bảng điều khiển hiển thị log, chỉ số và traces
   - **Implementation:** Grafana with multiple data sources

**Priority:** Medium

---

## VIII.10 Reporting & Review — Báo cáo và đánh giá

### VIII.10.1 Overview / Tổng quan

**EN:** System must provide regular reporting and review processes for observability data.

**VI:** Hệ thống phải cung cấp quy trình báo cáo và đánh giá thường xuyên cho dữ liệu quan sát.

**Reporting Objectives:**

1. **Performance Review:** Track system performance trends
2. **Reliability Assessment:** Evaluate system reliability and uptime
3. **Incident Analysis:** Review incidents and improvements
4. **Capacity Planning:** Plan for future capacity needs
5. **Compliance Audit:** Verify compliance with regulations

---

### VIII.10.2 Weekly Metrics Review / Đánh giá chỉ số hàng tuần

**EN:** System must generate weekly metrics reports for team review.

**VI:** Hệ thống phải tạo báo cáo chỉ số hàng tuần để nhóm đánh giá.

**Report Contents:**

1. **System Performance:**
   - API response times (p50, p95, p99)
   - Calculation module performance
   - Error rates by module
   - System uptime percentage

2. **User Activity:**
   - Total calculations performed
   - Most used modules
   - Module chain usage patterns
   - Peak usage times

3. **Incidents:**
   - Number of incidents (P1, P2, P3, P4)
   - Mean time to resolution (MTTR)
   - Root cause analysis summary

4. **Trends:**
   - Week-over-week comparisons
   - Growth trends
   - Performance degradation alerts

**Format:** PDF report generated from Grafana dashboards

**Recipients:** Engineering team, Product manager, Operations team

**Priority:** High

---

### VIII.10.3 Monthly Reliability Meeting / Cuộc họp độ tin cậy hàng tháng

**EN:** System must support monthly reliability reviews with stakeholders.

**VI:** Hệ thống phải hỗ trợ đánh giá độ tin cậy hàng tháng với các bên liên quan.

**Meeting Agenda:**

1. **SLO Review:**
   - SLO compliance status
   - Error budget consumption
   - SLO violations and root causes

2. **Incident Review:**
   - Major incidents (P1, P2) from the month
   - Post-mortem summaries
   - Action items and improvements

3. **Performance Trends:**
   - Monthly performance trends
   - Capacity planning updates
   - Resource utilization

4. **Improvement Plans:**
   - Planned improvements
   - Technical debt reduction
   - Infrastructure upgrades

**Deliverables:**
- Monthly reliability report (PDF)
- SLO dashboard snapshot
- Incident summary document

**Priority:** High

---

### VIII.10.4 Quarterly SLO Evaluation / Đánh giá SLO hàng quý

**EN:** System must conduct quarterly SLO evaluation and adjustment.

**VI:** Hệ thống phải tiến hành đánh giá và điều chỉnh SLO hàng quý.

**Evaluation Process:**

1. **SLO Performance Analysis:**
   - Review SLO targets vs. actual performance
   - Identify trends and patterns
   - Assess error budget usage

2. **Stakeholder Feedback:**
   - Collect user feedback on system performance
   - Review business impact of SLO violations
   - Assess user satisfaction

3. **SLO Adjustment:**
   - Propose SLO adjustments if needed
   - Justify changes with data
   - Update SLO documentation

4. **Improvement Roadmap:**
   - Identify areas for improvement
   - Plan infrastructure upgrades
   - Set goals for next quarter

**Deliverables:**
- Quarterly SLO evaluation report
- Updated SLO targets (if changed)
- Improvement roadmap

**Priority:** Medium

---

### VIII.10.5 Annual Architecture Observability Audit / Kiểm toán quan sát kiến trúc hàng năm

**EN:** System must undergo annual observability architecture audit.

**VI:** Hệ thống phải trải qua kiểm toán kiến trúc quan sát hàng năm.

**Audit Scope:**

1. **Tool Effectiveness:**
   - Evaluate effectiveness of current tools
   - Identify gaps in observability
   - Assess tool costs vs. benefits

2. **Coverage Analysis:**
   - Review log coverage across all modules
   - Assess metrics completeness
   - Evaluate trace coverage

3. **Compliance Review:**
   - Verify compliance with data protection regulations
   - Review log retention policies
   - Assess audit trail completeness

4. **Best Practices:**
   - Compare with industry best practices
   - Identify improvement opportunities
   - Plan tool upgrades or replacements

**Deliverables:**
- Annual observability audit report
- Recommendations for improvements
- Tool upgrade plan (if needed)

**Priority:** Low

---

## VIII.11 Conclusion — Kết luận

**EN:**

This document defines a comprehensive observability framework for the XLNC Automated Water Treatment Calculation System. The framework ensures:

- **Complete Visibility:** Full transparency into system operations, calculations, and user activities
- **Proactive Monitoring:** Early detection of issues before they impact users
- **Reliable Operations:** 99.5% uptime with comprehensive alerting and incident response
- **Compliance:** Adherence to Vietnamese data protection regulations (NĐ 13/2023)
- **Performance Tracking:** Real-time monitoring of calculation performance and system health
- **Audit Trail:** Complete audit trail for all calculations and data changes

The observability framework integrates industry-standard tools (Prometheus, Grafana, OpenTelemetry, Loki) into a cohesive stack that provides logs, metrics, traces, and dashboards. All observability practices are designed to support the system's mission-critical nature in water treatment engineering calculations.

**VI:**

Tài liệu này định nghĩa khung quan sát hệ thống toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Khung này đảm bảo:

- **Tầm nhìn hoàn chỉnh:** Tính minh bạch đầy đủ vào hoạt động hệ thống, tính toán và hoạt động người dùng
- **Giám sát chủ động:** Phát hiện sớm các vấn đề trước khi chúng ảnh hưởng đến người dùng
- **Vận hành tin cậy:** 99.5% thời gian hoạt động với cảnh báo toàn diện và phản ứng sự cố
- **Tuân thủ:** Tuân thủ các quy định bảo vệ dữ liệu Việt Nam (NĐ 13/2023)
- **Theo dõi hiệu suất:** Giám sát thời gian thực hiệu suất tính toán và sức khỏe hệ thống
- **Dấu vết kiểm toán:** Dấu vết kiểm toán hoàn chỉnh cho tất cả tính toán và thay đổi dữ liệu

Khung quan sát tích hợp các công cụ tiêu chuẩn ngành (Prometheus, Grafana, OpenTelemetry, Loki) vào một stack gắn kết cung cấp log, chỉ số, traces và bảng điều khiển. Tất cả các thực hành quan sát được thiết kế để hỗ trợ tính chất quan trọng của hệ thống trong tính toán kỹ thuật xử lý nước.

**Hóa phàm:**

Phần này mô tả toàn bộ cách hệ thống "nhìn xuyên" vào chính nó để biết nó khỏe hay sắp ốm. Từ ghi log chi tiết cho từng module tính toán, đến giám sát hiệu suất thời gian thực, đến cảnh báo khi có vấn đề, tất cả đều được quy định rõ ràng để đảm bảo hệ thống hoạt động ổn định và có thể kiểm tra lại mọi tính toán.

---

**KẾT THÚC PHẦN VIII. LOGGING, MONITORING & OBSERVABILITY**

*Phần này cung cấp đầy đủ khung quan sát hệ thống cho hệ thống tính toán tự động xử lý nước XLNC, bao gồm tiêu chuẩn ghi log, chỉ số và bảng điều khiển, truy vết phân tán, cảnh báo và quy trình sự cố, SLOs, tuân thủ quy định, và công cụ quan sát. Phần này bổ sung và chi tiết hóa nội dung trong Phần V (Non-Functional Requirements - Reliability) và hỗ trợ triển khai thực tế của hệ thống.*