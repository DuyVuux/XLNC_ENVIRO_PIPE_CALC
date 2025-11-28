# Chunk 05: API Security / Bảo mật API

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_05`  
**Section:** IX.5 API Security - IX.5.1 to IX.5.5  
**Word Count:** ~900 words  
**Retrieval Keywords:** API security, HTTPS, TLS, rate limiting, CORS, input validation, input sanitization, OWASP Top 10, SQL injection, XSS, CSRF, prepared statements  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_04`, `09_SECURITY_AUTHENTICATION_chunk_06`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_5`

---

## IX.5 API Security — Bảo mật API

### IX.5.1 HTTPS & TLS / HTTPS và TLS

**EN:** All API communications must use HTTPS with strong TLS configuration.

**VI:** Tất cả giao tiếp API phải sử dụng HTTPS với cấu hình TLS mạnh.

**Requirements:**

1. **HTTPS Mandatory:**
   - All API endpoints must use HTTPS only
   - HTTP requests must redirect to HTTPS
   - No mixed content allowed

2. **TLS Configuration:**
   - Minimum TLS version: 1.2 (prefer 1.3)
   - Strong cipher suites only
   - Perfect Forward Secrecy (PFS) enabled
   - Certificate validation required

3. **Certificate Management:**
   - Valid SSL/TLS certificates from trusted CA
   - Certificate auto-renewal
   - Certificate expiration monitoring

**Priority:** Critical

---

### IX.5.2 Rate Limiting / Giới hạn tốc độ

**EN:** System must implement rate limiting to prevent abuse and DoS attacks.

**VI:** Hệ thống phải triển khai giới hạn tốc độ để ngăn chặn lạm dụng và tấn công DoS.

**Rate Limiting Rules:**

1. **Authenticated Users:**
   - **API Requests:** 100 requests per minute per user
   - **Calculations:** 20 calculations per hour per user
   - **Exports:** 10 exports per hour per user

2. **Guest Users:**
   - **API Requests:** 10 requests per minute per IP
   - **Calculations:** 5 calculations per hour per IP
   - **Exports:** 5 exports per day per IP

3. **Authentication Endpoints:**
   - **Login:** 5 attempts per 15 minutes per IP
   - **Registration:** 3 attempts per hour per IP
   - **Password Reset:** 3 attempts per hour per IP

**Implementation:**

- Rate limiting enforced at API gateway level
- Use Redis or similar for distributed rate limiting
- Return 429 Too Many Requests when limit exceeded
- Include rate limit headers in response:
  ```
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 95
  X-RateLimit-Reset: 1640000000
  ```

**Priority:** High

---

### IX.5.3 CORS Policy / Chính sách CORS

**EN:** System must configure CORS properly to allow legitimate cross-origin requests while blocking malicious ones.

**VI:** Hệ thống phải cấu hình CORS đúng cách để cho phép các yêu cầu cross-origin hợp pháp trong khi chặn các yêu cầu độc hại.

**CORS Configuration:**

1. **Allowed Origins:**
   - Production: `https://xlnc.example.com`
   - Staging: `https://staging.xlnc.example.com`
   - Development: `http://localhost:3000` (dev only)

2. **Allowed Methods:**
   - GET, POST, PUT, DELETE, OPTIONS

3. **Allowed Headers:**
   - Content-Type, Authorization, X-Requested-With

4. **Credentials:**
   - Allow credentials for authenticated requests
   - Use `Access-Control-Allow-Credentials: true`

5. **Preflight:**
   - Handle OPTIONS preflight requests
   - Cache preflight responses (max-age: 86400)

**Priority:** High

---

### IX.5.4 Input Validation & Sanitization / Xác thực và làm sạch đầu vào

**EN:** System must validate and sanitize all input to prevent injection attacks.

**VI:** Hệ thống phải xác thực và làm sạch tất cả đầu vào để ngăn chặn các cuộc tấn công injection.

**Validation Rules:**

1. **Type Validation:**
   - Validate data types (string, number, boolean, array, object)
   - Reject invalid types immediately

2. **Range Validation:**
   - Validate numeric ranges (e.g., Q > 0, t between 0-100°C)
   - Validate string lengths
   - Validate array sizes

3. **Format Validation:**
   - Validate email format
   - Validate date format
   - Validate unit formats (must match allowed units)

4. **Business Logic Validation:**
   - Validate module dependencies
   - Validate unit consistency
   - Validate calculation parameters against TCVN standards

**Sanitization:**

1. **SQL Injection Prevention:**
   - Use parameterized queries (prepared statements)
   - Never concatenate user input into SQL queries
   - Use ORM with built-in protection

2. **XSS Prevention:**
   - Sanitize all user input before rendering
   - Use Content Security Policy (IX.6.4)
   - Escape special characters in output

3. **Command Injection Prevention:**
   - Never execute user input as commands
   - Validate file paths
   - Use whitelist for allowed operations

**Priority:** Critical

---

### IX.5.5 OWASP Top 10 Protection / Bảo vệ OWASP Top 10

**EN:** System must protect against OWASP Top 10 security risks.

**VI:** Hệ thống phải bảo vệ chống lại 10 rủi ro bảo mật hàng đầu của OWASP.

**Protection Measures:**

1. **A01:2021 – Broken Access Control:**
   - Implement RBAC (IX.3)
   - Enforce resource ownership (IX.3.4)
   - Validate permissions on every request

2. **A02:2021 – Cryptographic Failures:**
   - Use strong encryption (AES-256)
   - Hash passwords with bcrypt (cost factor 12)
   - Use HTTPS for all communications

3. **A03:2021 – Injection:**
   - Use parameterized queries
   - Validate and sanitize all input
   - Use ORM with built-in protection

4. **A04:2021 – Insecure Design:**
   - Follow security-by-design principles
   - Regular security reviews
   - Threat modeling

5. **A05:2021 – Security Misconfiguration:**
   - Secure default configurations
   - Regular security audits
   - Remove unnecessary features

6. **A06:2021 – Vulnerable Components:**
   - Regular dependency updates
   - Vulnerability scanning (IX.9.1)
   - Patch management

7. **A07:2021 – Authentication Failures:**
   - Strong password requirements
   - Rate limiting on authentication
   - Multi-factor authentication (future)

8. **A08:2021 – Software and Data Integrity:**
   - Code signing
   - Dependency verification
   - Secure update mechanisms

9. **A09:2021 – Security Logging Failures:**
   - Comprehensive audit logging (VIII.2)
   - Log security events
   - Monitor for suspicious activity

10. **A10:2021 – Server-Side Request Forgery (SSRF):**
    - Validate all URLs
    - Use whitelist for allowed domains
    - Restrict internal network access

**Priority:** Critical

---

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_04` (User Management)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_06` (Frontend Security)






