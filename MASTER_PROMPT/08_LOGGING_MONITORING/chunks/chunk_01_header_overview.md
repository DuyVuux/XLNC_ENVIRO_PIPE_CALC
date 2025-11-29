# Chunk 01: Header & Overview / Hướng dẫn AI & Tổng quan

**Chunk ID:** `08_LOGGING_MONITORING_chunk_01`  
**Section:** VIII. Logging, Monitoring & Observability - Header, VIII.1 Overview  
**Word Count:** ~400 words  
**Retrieval Keywords:** logging, monitoring, observability, log levels, log format, structured logging, trace_id, metrics, dashboards, distributed tracing, alerts, SLOs, compliance, NĐ 13/2023  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_02`, `08_LOGGING_MONITORING_chunk_03`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_1`

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

**Previous Chunk:** None (First chunk)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_02` (Logging Standards - Log Levels & Format)







