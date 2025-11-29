# Chunk 06: Distributed Tracing / Truy vết phân tán

**Chunk ID:** `08_LOGGING_MONITORING_chunk_06`  
**Section:** VIII.5 Distributed Tracing - VIII.5.1 to VIII.5.3  
**Word Count:** ~500 words  
**Retrieval Keywords:** distributed tracing, OpenTelemetry, trace_id, span_id, Jaeger, Tempo, trace propagation, request tracing, module calculation tracing, chain tracing  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_05`, `08_LOGGING_MONITORING_chunk_07`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_5`

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_05` (Metrics & Dashboards)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_07` (Alerts & Incident Response)







