# Chunk 02: Logging Standards - Log Levels & Format / Tiêu chuẩn ghi log - Mức độ và định dạng

**Chunk ID:** `08_LOGGING_MONITORING_chunk_02`  
**Section:** VIII.2 Logging Standards - VIII.2.1 Log Levels, VIII.2.2 Log Format  
**Word Count:** ~600 words  
**Retrieval Keywords:** log levels, TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL, structured logging, JSON format, timestamp, trace_id, request_id, log format, ISO 8601  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_01`, `08_LOGGING_MONITORING_chunk_03`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_2`

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_01` (Header & Overview)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_03` (Backend, Frontend & Database Log Rules)






