# Chunk 07: Data Security & Privacy / Bảo mật và quyền riêng tư dữ liệu

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_07`  
**Section:** IX.7 Data Security & Privacy - IX.7.1 to IX.7.4  
**Word Count:** ~600 words  
**Retrieval Keywords:** data security, data privacy, data classification, encryption, encryption at rest, encryption in transit, PII, personal data, data retention, data deletion, AES-256, TLS  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_06`, `09_SECURITY_AUTHENTICATION_chunk_08`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_7`

---

## IX.7 Data Security & Privacy — Bảo mật và quyền riêng tư dữ liệu

### IX.7.1 Data Classification / Phân loại dữ liệu

**EN:** System must classify data by sensitivity level to apply appropriate security measures.

**VI:** Hệ thống phải phân loại dữ liệu theo mức độ nhạy cảm để áp dụng các biện pháp bảo mật phù hợp.

**Data Classification:**

1. **Public Data:**
   - Documentation
   - Public calculation examples
   - System status
   - **Security:** No encryption required

2. **Internal Data:**
   - Calculation results (non-personal)
   - System logs (non-sensitive)
   - **Security:** Encryption at rest, access control

3. **Confidential Data:**
   - User profiles (email, name)
   - Calculation history
   - User preferences
   - **Security:** Encryption at rest and in transit, strict access control

4. **Highly Confidential Data:**
   - Passwords (hashed)
   - Authentication tokens
   - Payment information (if applicable)
   - **Security:** Strong encryption, minimal access, audit logging

**Priority:** High

---

### IX.7.2 Encryption / Mã hóa

**EN:** System must encrypt sensitive data at rest and in transit.

**VI:** Hệ thống phải mã hóa dữ liệu nhạy cảm khi lưu trữ và truyền tải.

**Encryption at Rest:**

1. **Database Encryption:**
   - Use PostgreSQL encryption at rest
   - Encrypt sensitive columns (email, phone, address)
   - Use AES-256 encryption
   - Encryption keys stored in secure key management system

2. **File Storage Encryption:**
   - Encrypt uploaded files
   - Encrypt exported reports
   - Use AES-256 encryption

3. **Backup Encryption:**
   - All backups must be encrypted
   - Encryption keys separate from backups
   - Secure key rotation

**Encryption in Transit:**

1. **HTTPS/TLS:**
   - All API communications use HTTPS (IX.5.1)
   - TLS 1.2 minimum (TLS 1.3 preferred)
   - Strong cipher suites

2. **Database Connections:**
   - Encrypted database connections (SSL/TLS)
   - Certificate validation required

**Key Management:**

- Use secure key management service (AWS KMS, HashiCorp Vault)
- Key rotation every 90 days
- Key access logged and audited
- Separate keys for different environments

**Priority:** Critical

---

### IX.7.3 PII Handling / Xử lý dữ liệu cá nhân

**EN:** System must handle Personal Identifiable Information (PII) according to NĐ 13/2023.

**VI:** Hệ thống phải xử lý Thông tin Nhận dạng Cá nhân (PII) theo NĐ 13/2023.

**PII Data Types:**

1. **Direct Identifiers:**
   - Email address
   - Full name
   - Phone number
   - IP address (masked in logs)

2. **Indirect Identifiers:**
   - Organization
   - Location data
   - User preferences (if combined with other data)

**PII Handling Requirements:**

1. **Collection:**
   - Collect only necessary PII
   - Obtain explicit consent
   - Document purpose of collection

2. **Storage:**
   - Encrypt PII at rest (IX.7.2)
   - Limit access to authorized personnel
   - Implement data retention policies

3. **Processing:**
   - Process PII only for stated purposes
   - Do not share with third parties without consent
   - Mask PII in logs (per VIII.8.2)

4. **Deletion:**
   - Honor user deletion requests
   - Delete PII after retention period
   - Anonymize data when possible

**Priority:** Critical

---

### IX.7.4 Data Retention / Lưu trữ dữ liệu

**EN:** System must define data retention periods based on compliance and operational needs.

**VI:** Hệ thống phải định nghĩa thời gian lưu trữ dữ liệu dựa trên tuân thủ và nhu cầu vận hành.

**Retention Periods:**

1. **User Data:**
   - **Active Users:** Retained while account active
   - **Deleted Users:** 30 days after deletion request (per NĐ 13/2023)
   - **Suspended Users:** Retained for audit purposes

2. **Calculation Data:**
   - **Authenticated Users:** Retained indefinitely (user can delete)
   - **Guest Users:** 24 hours (temporary storage)
   - **Critical Projects:** 1 year minimum

3. **Audit Logs:**
   - **Security Events:** 1 year
   - **Authentication Events:** 90 days
   - **Access Logs:** 30 days

4. **Backup Data:**
   - **Daily Backups:** 30 days
   - **Weekly Backups:** 90 days
   - **Monthly Backups:** 1 year

**Data Deletion:**

1. **User-Initiated:**
   - User requests data deletion
   - System marks data for deletion
   - Data deleted after retention period

2. **Automated Deletion:**
   - Guest data deleted after 24 hours
   - Expired tokens deleted automatically
   - Old backups deleted per retention policy

**Priority:** High

---

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_06` (Frontend Security)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_08` (Security Policies & Compliance)






