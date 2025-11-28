# Chunk 09: Privacy & Compliance Logging / Ghi log riêng tư và tuân thủ

**Chunk ID:** `08_LOGGING_MONITORING_chunk_09`  
**Section:** VIII.8 Privacy & Compliance Logging - VIII.8.1 to VIII.8.3  
**Word Count:** ~700 words  
**Retrieval Keywords:** privacy, compliance, data protection, NĐ 13/2023, GDPR, sensitive data, data masking, log retention, audit logs, calculation logs, error logs, performance metrics  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_08`, `08_LOGGING_MONITORING_chunk_10`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_8`

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

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_08` (Service Level Objectives)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_10` (Observability Tooling Stack)






