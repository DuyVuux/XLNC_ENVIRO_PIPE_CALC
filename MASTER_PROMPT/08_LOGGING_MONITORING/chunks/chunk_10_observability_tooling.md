# Chunk 10: Observability Tooling Stack / Công cụ quan sát hệ thống

**Chunk ID:** `08_LOGGING_MONITORING_chunk_10`  
**Section:** VIII.9 Observability Tooling Stack - VIII.9.1 to VIII.9.7  
**Word Count:** ~1000 words  
**Retrieval Keywords:** observability tools, log aggregation, Loki, ELK stack, Elasticsearch, Logstash, Kibana, Prometheus, Grafana, OpenTelemetry, Jaeger, Tempo, Zipkin, Alertmanager, Datadog, PagerDuty, tool integration  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_09`, `08_LOGGING_MONITORING_chunk_11`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_9`

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_09` (Privacy & Compliance Logging)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_11` (Reporting & Review + Conclusion)






