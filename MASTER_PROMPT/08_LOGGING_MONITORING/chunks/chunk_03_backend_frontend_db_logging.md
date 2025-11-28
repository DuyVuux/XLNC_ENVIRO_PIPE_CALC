# Chunk 03: Backend, Frontend & Database Log Rules / Quy tắc log Backend, Frontend & Database

**Chunk ID:** `08_LOGGING_MONITORING_chunk_03`  
**Section:** VIII.2.3 Backend Log Rules, VIII.2.4 Frontend Log Rules, VIII.2.5 Database Log Rules  
**Word Count:** ~700 words  
**Retrieval Keywords:** backend logging, FastAPI logging, frontend logging, Next.js logging, React logging, database logging, PostgreSQL logging, slow query logging, request logging, calculation logging, validation logging, error logging  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_02`, `08_LOGGING_MONITORING_chunk_04`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_2_3_4_5`

---

## VIII.2.3 Backend Log Rules (FastAPI) / Quy tắc log backend

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

## VIII.2.4 Frontend Log Rules (Next.js/React) / Quy tắc log frontend

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

## VIII.2.5 Database Log Rules (PostgreSQL) / Quy tắc log database

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_02` (Logging Standards - Log Levels & Format)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_04` (Module-Specific Logging)






