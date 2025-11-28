# Chunk 05: Metrics & Dashboards / Chỉ số và bảng điều khiển

**Chunk ID:** `08_LOGGING_MONITORING_chunk_05`  
**Section:** VIII.4 Metrics & Dashboards - VIII.4.1 to VIII.4.6  
**Word Count:** ~1000 words  
**Retrieval Keywords:** metrics, dashboards, Prometheus, Grafana, system metrics, backend metrics, module calculation metrics, frontend metrics, dashboard configuration, time-series database, TSDB, performance monitoring  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_04`, `08_LOGGING_MONITORING_chunk_06`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_4`

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_04` (Module-Specific Logging)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_06` (Distributed Tracing)






