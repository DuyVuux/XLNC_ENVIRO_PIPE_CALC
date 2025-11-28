# Canonical Summary: 09_SECURITY_AUTHENTICATION

**Section ID:** `09_SECURITY_AUTHENTICATION`  
**Last Updated:** 2024  
**Total Chunks:** 9  
**Purpose:** Defines comprehensive security and authentication framework for XLNC Automated Water Treatment Calculation System, ensuring secure user authentication, role-based access control, API security, data protection, and compliance with Vietnamese data protection regulations (NĐ 13/2023). The system must support both authenticated users and guest access with appropriate security measures and limitations.

**Chunk List:**
- `chunk_01`: Header & Overview (IX.0, IX.1) - AI instructions, security framework overview, objectives
- `chunk_02`: Authentication (IX.2.1 to IX.2.4) - User authentication (JWT, access/refresh tokens), user registration, guest access with limitations, password management
- `chunk_03`: Authorization & RBAC (IX.3.1 to IX.3.4) - RBAC overview, user roles (guest, engineer, admin), permission model, resource ownership
- `chunk_04`: User Management (IX.4.1 to IX.4.3) - User profile, user preferences, account management (deletion, data export)
- `chunk_05`: API Security (IX.5.1 to IX.5.5) - HTTPS & TLS, rate limiting, CORS policy, input validation & sanitization, OWASP Top 10 protection
- `chunk_06`: Frontend Security (IX.6.1 to IX.6.4) - Token management, protected routes, CSRF protection, Content Security Policy
- `chunk_07`: Data Security & Privacy (IX.7.1 to IX.7.4) - Data classification, encryption (at rest & in transit), PII handling, data retention
- `chunk_08`: Security Policies & Compliance (IX.8.1 to IX.8.3) - NĐ 13/2023 compliance, security policies (password, session, access, data), security headers
- `chunk_09`: Security Testing & Auditing + Conclusion (IX.9.1 to IX.9.3, IX.10) - Security testing, security auditing, security incident response, conclusion

---

## 1. Header & Overview (IX.0, IX.1)

### 1.1. Role Setup
- AI Assistant must understand security and authentication framework for XLNC system
- Must reference authentication, authorization, API security, and compliance when implementing security features
- Must use Chain of Thought when implementing security (5 steps: user type → authentication → authorization → API security → compliance)

### 1.2. Objectives
1. **Authentication:** Secure user login, registration, and guest access
2. **Authorization:** Role-based access control (RBAC) for all resources
3. **User Management:** Complete user lifecycle management
4. **API Security:** Protection against common attacks (OWASP Top 10)
5. **Data Protection:** Encryption, PII handling, compliance with NĐ 13/2023
6. **Frontend Security:** Secure token management, protected routes, CSRF protection

### 1.3. Key Requirements
- MUST use JWT-based authentication (IX.2.1)
- MUST comply with RBAC (IX.3)
- MUST support guest access with limitations (IX.2.3)
- MUST ensure HTTPS mandatory (IX.5.1)
- MUST comply with NĐ 13/2023 (IX.8.1)

---

## 2. Authentication (IX.2)

### 2.1. User Authentication (IX.2.1)
**JWT-Based Authentication:**
- **Access Token:** Short-lived (15 minutes), contains user_id, role, permissions
- **Refresh Token:** Long-lived (7 days), stored in httpOnly cookie (secure, sameSite=strict)
- **Token Refresh:** Automatic refresh before expiration, refresh token rotation
- **Logout:** Invalidate refresh token, remove access token

**Security Requirements:**
- Passwords hashed using bcrypt (cost factor 12)
- Access tokens signed with HS256 or RS256
- Refresh tokens stored in database with expiration
- All authentication endpoints use HTTPS only
- Rate limiting: 5 login attempts per 15 minutes per IP

**Priority:** High

### 2.2. User Registration (IX.2.2)
**Registration Flow:**
1. User provides: email, password, full name, organization (optional)
2. System validates: email format/uniqueness, password strength, full name
3. Email verification: System sends verification email with token (expires in 24 hours)
4. Default role assignment: New users assigned role `engineer`

**Password Requirements:**
- Minimum 8 characters
- Must contain: uppercase, lowercase, number, special character
- Cannot be common password
- Cannot contain user's email or name

**Security Requirements:**
- Email verification mandatory before account activation
- Registration rate limiting: 3 registrations per hour per IP
- Account locked after 5 failed login attempts (unlock after 30 minutes or admin action)

**Priority:** High

### 2.3. Guest Access (IX.2.3)
**Guest Access Permissions:**
1. **Allowed Operations:**
   - View calculation interface
   - Perform calculations (single module or chain)
   - View calculation results
   - Export results (PDF, Excel, JSON) - limited to 5 exports per day
   - View documentation and help

2. **Restricted Operations:**
   - Cannot save calculations to account
   - Cannot access calculation history
   - Cannot create or manage projects
   - Cannot access admin features
   - Cannot modify system settings

3. **Rate Limiting:**
   - API Requests: 10 requests per minute per IP
   - Calculations: 5 calculations per hour per IP
   - Exports: 5 exports per day per IP
   - File Size: Maximum 10MB per calculation input

4. **Data Retention:**
   - Guest calculation results stored temporarily (24 hours)
   - No personal data collection (no email, no name)
   - Session data cleared after 24 hours of inactivity
   - IP address logged for security (masked in logs per VIII.8.2)

5. **Session Management:**
   - Guest sessions identified by session ID (stored in httpOnly cookie)
   - Session expires after 24 hours of inactivity
   - No authentication tokens issued for guests

**Security Requirements:**
- Guest access must not bypass authentication checks
- Rate limiting enforced at API gateway level
- Guest sessions must be tracked for abuse prevention
- All guest operations must be logged (per VIII.2)
- Guest data must comply with NĐ 13/2023 (no PII collection)

**Priority:** High

### 2.4. Password Management (IX.2.4)
**Password Reset Flow:**
1. User requests password reset via email
2. System generates secure token (expires in 1 hour)
3. User clicks reset link, provides new password
4. System validates new password, updates password hash
5. System invalidates all existing sessions (force re-login)

**Password Change Flow:**
1. Authenticated user provides current password and new password
2. System validates current password
3. System validates new password meets requirements
4. System updates password hash
5. System invalidates refresh tokens (access token remains valid)

**Security Requirements:**
- Password reset tokens must be single-use
- Password reset tokens expire in 1 hour
- Password change requires current password verification
- Password history: prevent reuse of last 5 passwords
- Password change must be logged (security audit)

**Priority:** High

---

## 3. Authorization & RBAC (IX.3)

### 3.1. Overview (IX.3.1)
**RBAC Model:**
- **Roles:** Predefined user roles (guest, engineer, admin)
- **Permissions:** Granular permissions for each resource
- **Resource-Based:** Permissions tied to specific resources (calculations, projects, users)

**Priority:** High

### 3.2. User Roles (IX.3.2)
**3 Roles Defined:**

1. **Guest (unauthenticated):**
   - Permissions: `read:calculations` (view only), `create:calculations` (temporary, rate limited), `export:results` (limited to 5 per day)
   - Restrictions: No access to saved calculations, no access to projects, rate limited (10 requests/min)

2. **Engineer (default authenticated user):**
   - Permissions: `read:calculations` (own and shared), `create:calculations` (unlimited), `update:calculations` (own only), `delete:calculations` (own only), `create:projects`, `update:projects`, `delete:projects`, `export:results` (unlimited), `read:documentation`
   - Restrictions: Cannot access admin features, cannot modify other users' data, cannot access system settings

3. **Admin:**
   - Permissions: All engineer permissions + `read:users`, `update:users`, `delete:users`, `read:system`, `update:system`, `read:audit`, `manage:roles`
   - Restrictions: Cannot delete own account, cannot modify critical system settings without confirmation

**Priority:** High

### 3.3. Permission Model (IX.3.3)
**Permission Format:** `{action}:{resource}`

**Actions:**
- `read`: View resource
- `create`: Create new resource
- `update`: Modify existing resource
- `delete`: Remove resource
- `export`: Export resource data
- `manage`: Full management (admin only)

**Resources:**
- `calculations`: Calculation results
- `projects`: User projects
- `users`: User accounts
- `system`: System settings
- `audit`: Audit logs
- `documentation`: Documentation

**Permission Enforcement:**
- API Level: Check user permissions before processing request, return 403 Forbidden if denied, log all permission checks
- Frontend Level: Hide UI elements based on permissions, disable actions user cannot perform, show appropriate error messages

**Priority:** High

### 3.4. Resource Ownership (IX.3.4)
**Ownership Rules:**

1. **Calculations:**
   - User owns calculations they create
   - User can read, update, delete own calculations
   - User cannot access other users' calculations (unless shared)
   - Guest calculations have no owner (temporary)

2. **Projects:**
   - User owns projects they create
   - User can read, update, delete own projects
   - User cannot access other users' projects
   - Projects can be shared with other users (future feature)

3. **User Data:**
   - User can only access their own profile
   - User can only modify their own preferences
   - Admin can access all user data (with audit logging)

**Ownership Checks:** Must verify resource ownership before allowing access (except admin)

**Priority:** High

---

## 4. User Management (IX.4)

### 4.1. User Profile (IX.4.1)
**Profile Fields:**
- **Required:** Email (unique, verified), Full name, Password (hashed)
- **Optional:** Organization, Phone number, Address, Profile picture, Preferences

**Profile Management:**
1. **View Profile:** User can view own profile, Admin can view any user profile
2. **Update Profile:** User can update own profile (except email, role), Email change requires verification, Admin can update any user profile
3. **Delete Account:** User can request account deletion, Admin must approve deletion, Account data anonymized per NĐ 13/2023 (retention 30 days)

**Security Requirements:**
- Email changes require verification
- Password changes require current password
- Profile updates must be logged (audit trail)
- PII must be encrypted at rest (per IX.7.2)

**Priority:** High

### 4.2. User Preferences (IX.4.2)
**Preference Categories:**
1. **Language:** Vietnamese (default), English, Auto-detect from browser
2. **Units:** SI (default), Imperial, Mixed
3. **Theme:** Light (default), Dark, Auto (system preference)
4. **Calculation Defaults:** Default temperature, Default material, Default module chain

**Storage:**
- Preferences stored in user profile
- Applied on login
- Can be changed anytime
- Guest preferences stored in session (not persisted)

**Priority:** Medium

### 4.3. Account Management (IX.4.3)
**User Actions:**
1. **Account Deletion Request:**
   - User submits deletion request
   - System sends confirmation email
   - User confirms deletion
   - Admin reviews and approves
   - Account data anonymized (per NĐ 13/2023)

2. **Account Suspension:**
   - Admin can suspend accounts (temporary or permanent)
   - Suspended users cannot login
   - Suspended users' data retained for audit

3. **Account Reactivation:**
   - Admin can reactivate suspended accounts
   - User must reset password on reactivation

**Data Export:**
- User can request data export (GDPR-like right to access)
- Export includes: profile, calculations, projects, preferences
- Export format: JSON or CSV
- Export delivered via secure download link (expires in 7 days)

**Security Requirements:**
- Account deletion requires confirmation
- Account suspension must be logged
- Account data retention per NĐ 13/2023 (30 days after deletion request)

**Priority:** High

---

## 5. API Security (IX.5)

### 5.1. HTTPS & TLS (IX.5.1)
**Requirements:**
- All API endpoints must use HTTPS only
- TLS 1.2 minimum (TLS 1.3 preferred)
- Valid SSL certificate required
- HSTS (HTTP Strict Transport Security) enabled
- Certificate pinning for mobile apps (if applicable)

**Priority:** Critical

### 5.2. Rate Limiting (IX.5.2)
**Rate Limits:**

1. **Authenticated Users:**
   - API requests: 100 requests per minute
   - Calculations: 20 calculations per hour
   - Exports: 50 exports per day
   - File uploads: 10 uploads per hour (max 50MB each)

2. **Guest Users:**
   - API requests: 10 requests per minute
   - Calculations: 5 calculations per hour
   - Exports: 5 exports per day
   - File uploads: Not allowed

3. **Admin Users:**
   - API requests: 500 requests per minute
   - No calculation or export limits
   - File uploads: 100 uploads per hour

**Implementation:**
- Rate limiting enforced at API gateway level
- Use Redis for distributed rate limiting
- Rate limit headers in response: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

**Priority:** High

### 5.3. CORS Policy (IX.5.3)
**CORS Configuration:**
- **Allowed Origins:** Production: `https://xlnc.example.com`, Staging: `https://staging.xlnc.example.com`, Development: `http://localhost:3000` (dev only)
- **Allowed Methods:** GET, POST, PUT, DELETE, OPTIONS
- **Allowed Headers:** Content-Type, Authorization, X-Requested-With
- **Credentials:** Allow credentials for authenticated requests
- **Preflight:** Handle OPTIONS preflight requests, Cache preflight responses (max-age: 86400)

**Requirements:**
- Only allow specific trusted origins (no wildcards in production)
- Credentials allowed only for trusted origins
- CORS violations must be logged

**Priority:** High

### 5.4. Input Validation & Sanitization (IX.5.4)
**Validation Requirements:**
1. **Type Validation:** All inputs must be validated against Pydantic models, Type coercion not allowed (strict typing), Invalid types rejected with 400 Bad Request
2. **Range Validation:** Numeric inputs must be within valid ranges, String inputs must meet length requirements, Enum inputs must match allowed values
3. **Sanitization:**
   - SQL injection prevention: Use parameterized queries only
   - XSS prevention: Sanitize all user-generated content
   - Path traversal prevention: Validate file paths
   - Command injection prevention: No shell execution

**Priority:** Critical

### 5.5. OWASP Top 10 Protection (IX.5.5)
**Protection Measures:**
1. **A01:2021 – Broken Access Control:** RBAC implementation (IX.3), Resource ownership checks (IX.3.4), API endpoint authorization
2. **A02:2021 – Cryptographic Failures:** HTTPS mandatory (IX.5.1), Password hashing (bcrypt, cost 12), Encryption at rest (IX.7.2)
3. **A03:2021 – Injection:** Parameterized queries (SQL injection prevention), Input validation (IX.5.4), Output encoding (XSS prevention)
4. **A04:2021 – Insecure Design:** Security by design (IX.1), Threat modeling, Security reviews
5. **A05:2021 – Security Misconfiguration:** Secure defaults, Configuration reviews, Security headers
6. **A06:2021 – Vulnerable Components:** Dependency scanning, Regular updates, Vulnerability monitoring
7. **A07:2021 – Authentication Failures:** Strong password requirements (IX.2.2), Rate limiting (IX.5.2), Session management (IX.2.1)
8. **A08:2021 – Software and Data Integrity:** Code signing, Dependency verification, Secure update mechanism
9. **A09:2021 – Security Logging Failures:** Comprehensive logging (VIII.2), Security event logging, Audit trails
10. **A10:2021 – Server-Side Request Forgery:** URL validation, Network segmentation, Input sanitization

**Priority:** Critical

---

## 6. Frontend Security (IX.6)

### 6.1. Token Management (IX.6.1)
**Token Storage:**
1. **Access Token:** Stored in memory (React state, not localStorage), Sent in Authorization header: `Bearer {access_token}`, Automatically refreshed before expiration
2. **Refresh Token:** Stored in httpOnly cookie (set by backend), Not accessible via JavaScript, Sent automatically with requests
3. **Token Refresh Flow:** Frontend detects access token expiration (5 minutes before), Frontend calls `/api/v1/auth/refresh` with refresh token, Backend returns new access token, Frontend updates access token in memory

**Security Requirements:**
- Never store tokens in localStorage or sessionStorage
- Never log tokens in console
- Clear tokens on logout
- Handle token refresh errors (redirect to login)

**Priority:** High

### 6.2. Protected Routes (IX.6.2)
**Route Protection:**
1. **Public Routes:** `/` (Home), `/login`, `/register`, `/docs`, `/calculate` (guest access allowed)
2. **Authenticated Routes:** `/dashboard`, `/projects`, `/calculations`, `/profile`, `/settings`
3. **Admin Routes:** `/admin`, `/admin/users`, `/admin/system`, `/admin/audit`

**Implementation:** Protected route component checks authentication and authorization, redirects to login if not authenticated, redirects to dashboard if not authorized

**Priority:** High

### 6.3. CSRF Protection (IX.6.3)
**CSRF Protection:**
1. **CSRF Token:** Backend generates CSRF token on login, Token stored in httpOnly cookie, Token sent in custom header: `X-CSRF-Token`, Token validated on state-changing requests (POST, PUT, DELETE)
2. **SameSite Cookies:** All cookies set with `SameSite=Strict`, Prevents cross-site cookie sending
3. **Origin Validation:** Backend validates `Origin` header, Rejects requests from untrusted origins

**Priority:** High

### 6.4. Content Security Policy (IX.6.4)
**CSP Configuration:**
- Restrict script sources to trusted domains
- Prevent inline scripts (use nonce if needed)
- Restrict style sources
- Restrict image sources
- Restrict API connections to backend only

**Priority:** Medium

---

## 7. Data Security & Privacy (IX.7)

### 7.1. Data Classification (IX.7.1)
**Data Classification:**
1. **Public Data:** Documentation, Public calculation examples, System status - No encryption required
2. **Internal Data:** User preferences, Calculation results (non-sensitive), System logs (non-PII) - Encryption at rest, access control
3. **Confidential Data:** User profiles (email, name), Calculation inputs/outputs (user-specific), Project data - Encryption at rest and in transit, strict access control
4. **Restricted Data:** Passwords (hashed), Authentication tokens, Audit logs - Strong encryption, minimal access, audit logging

**Priority:** High

### 7.2. Encryption (IX.7.2)
**Encryption Requirements:**
1. **Encryption at Rest:**
   - Database: AES-256 encryption for sensitive columns
   - File storage: Encrypted volumes
   - Backup: Encrypted backups
   - Key management: Use key management service (AWS KMS, HashiCorp Vault)

2. **Encryption in Transit:**
   - HTTPS/TLS 1.2+ (IX.5.1)
   - Database connections: SSL/TLS
   - Internal service communication: mTLS (mutual TLS)

3. **Key Management:**
   - Encryption keys stored in key management service
   - Key rotation every 90 days
   - Key access logged and audited

**Priority:** Critical

### 7.3. PII Handling (IX.7.3)
**PII Types:**
- Email addresses
- Full names
- Phone numbers
- IP addresses (masked in logs per VIII.8.2)
- Organization information

**PII Handling Requirements:**
1. **Collection:** Collect only necessary PII, Obtain consent before collection, Document purpose of collection
2. **Storage:** Encrypt PII at rest (IX.7.2), Limit access to authorized personnel only, Implement data retention policies
3. **Processing:** Process PII only for stated purposes, Do not share PII with third parties without consent, Mask PII in logs (VIII.8.2)
4. **Deletion:** Honor user deletion requests (per NĐ 13/2023), Anonymize data within 30 days of deletion request, Retain anonymized data for audit (if required)

**Priority:** Critical

### 7.4. Data Retention (IX.7.4)
**Retention Periods:**
1. **User Accounts:** Active accounts: Retained indefinitely, Deleted accounts: Anonymized after 30 days, retained for audit (1 year)
2. **Calculation Data:** Authenticated users: Retained per user preference (default: 1 year), Guest calculations: Deleted after 24 hours, Archived calculations: Retained for 5 years (if user requests)
3. **Audit Logs:** Security events: 1 year, Authentication logs: 90 days, Access logs: 30 days
4. **Backup Data:** Daily backups: 30 days, Weekly backups: 3 months, Monthly backups: 1 year

**Compliance:**
- Retention periods comply with NĐ 13/2023
- User can request data deletion
- System must provide data export (GDPR-like right to access)

**Priority:** High

---

## 8. Security Policies & Compliance (IX.8)

### 8.1. NĐ 13/2023 Compliance (IX.8.1)
**Compliance Requirements:**
1. **Data Collection:** Collect only necessary personal data, Obtain explicit consent before collection, Document purpose of data collection, Provide privacy policy in Vietnamese
2. **Data Processing:** Process data only for stated purposes, Do not process data for other purposes without consent, Implement data minimization principle
3. **Data Storage:** Store data securely (encryption, access control), Implement data retention policies (IX.7.4), Limit data access to authorized personnel
4. **Data Sharing:** Do not share personal data with third parties without consent, Document all data sharing agreements, Ensure third parties comply with NĐ 13/2023
5. **User Rights:** Right to access, Right to correction, Right to deletion, Right to object
6. **Data Breach:** Report data breaches to authorities within 72 hours, Notify affected users within 24 hours, Document breach and remediation actions

**Priority:** Critical

### 8.2. Security Policies (IX.8.2)
**Security Policies:**
1. **Password Policy:** Minimum 8 characters, Must contain uppercase, lowercase, number, special character, Cannot be common password, Must be changed every 90 days (optional)
2. **Session Policy:** Access token expires in 15 minutes, Refresh token expires in 7 days, Session timeout after 30 minutes of inactivity, Maximum 5 concurrent sessions per user
3. **Access Policy:** Failed login attempts: Account locked after 5 attempts, Lockout duration: 30 minutes or admin unlock, IP-based rate limiting (IX.5.2), Geographic restrictions (if applicable)
4. **Data Policy:** Data encryption mandatory (IX.7.2), Regular security audits (IX.9.2), Incident response plan (VIII.6.3), Backup and recovery procedures

**Priority:** High

### 8.3. Security Headers (IX.8.3)
**Required Headers:**
- `Strict-Transport-Security: max-age=31536000; includeSubDomains` - Forces HTTPS, prevents downgrade attacks
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - Enables XSS filter
- `Content-Security-Policy: default-src 'self'` - Restricts resource loading (detailed policy in IX.6.4)
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy: geolocation=(), microphone=(), camera=()` - Disables unnecessary browser features

**Priority:** High

---

## 9. Security Testing & Auditing (IX.9)

### 9.1. Security Testing (IX.9.1)
**Testing Types:**
1. **Penetration Testing:** Frequency: Quarterly or after major changes, Scope: Authentication, authorization, API endpoints, data protection, Tools: OWASP ZAP, Burp Suite, manual testing
2. **Vulnerability Scanning:** Frequency: Weekly automated scans, Scope: Dependencies, code vulnerabilities, configuration issues, Tools: Snyk, Dependabot, OWASP Dependency-Check, Action: Critical vulnerabilities must be patched within 24 hours
3. **Authentication Testing:** Test login flow, token refresh, logout, password reset, account lockout
4. **Authorization Testing:** Test RBAC enforcement, resource ownership checks, guest access limitations, privilege escalation attempts
5. **API Security Testing:** Test rate limiting, CORS policy, input validation, SQL injection protection, XSS protection, CSRF protection
6. **Data Protection Testing:** Test encryption at rest and in transit, PII masking in logs, data retention policies, data deletion procedures, backup and recovery

**Priority:** High

### 9.2. Security Auditing (IX.9.2)
**Audit Requirements:**
1. **Audit Logging:** Log all authentication events, authorization decisions, sensitive operations, security policy violations, admin actions
2. **Audit Log Format:** JSON format with timestamp, event_type, action, user_id, ip_address (masked), user_agent, result, metadata
3. **Audit Review:** Frequency: Monthly review of audit logs, Scope: Authentication anomalies, authorization failures, security incidents, Responsibility: Security team or designated security officer
4. **Compliance Auditing:** Frequency: Annually or as required by regulations, Scope: NĐ 13/2023 compliance, data protection practices, security policies, Conducted by: External security auditor or internal security team

**Priority:** High

### 9.3. Security Incident Response (IX.9.3)
**Incident Response Process:**
1. **Detection:** Automated alerts from security monitoring (VIII.6), Manual detection by security team, User reports of suspicious activity
2. **Classification:** Severity levels: Critical (data breach, system compromise), High (multiple failed login attempts), Medium (single failed authorization), Low (minor violations)
3. **Response:** Immediate actions (isolate systems, revoke credentials, block IPs, preserve evidence), Investigation (analyze logs, identify root cause, assess impact, document findings)
4. **Remediation:** Apply security patches, Update security policies, Notify affected users (if required by NĐ 13/2023), Report to authorities (if required)
5. **Post-Incident:** Conduct post-mortem analysis, Update security procedures, Improve monitoring and detection, Document lessons learned

**Priority:** Critical

---

## 10. Conclusion (IX.10)

**Summary:**
This document defines a comprehensive security and authentication framework for the XLNC Automated Water Treatment Calculation System. The framework ensures:

- **Secure Authentication:** JWT-based authentication with access and refresh tokens, secure password management, and guest access with appropriate limitations
- **Role-Based Authorization:** Granular RBAC with clear roles (guest, engineer, admin) and permission model
- **User Management:** Complete user lifecycle management with profile, preferences, and account management
- **API Security:** Protection against OWASP Top 10 attacks, rate limiting, CORS, input validation, and secure headers
- **Frontend Security:** Secure token management, protected routes, CSRF protection, and Content Security Policy
- **Data Protection:** Data classification, encryption at rest and in transit, PII handling, and data retention policies
- **Compliance:** Full compliance with Vietnamese data protection regulations (NĐ 13/2023)
- **Security Testing & Auditing:** Regular security testing, audit logging, and incident response procedures

The security framework integrates with the observability framework (Part VIII) to provide comprehensive security monitoring and incident response. All security practices are designed to protect user data, ensure system integrity, and comply with Vietnamese regulations while maintaining usability and performance.

**Hóa phàm:**
Phần này mô tả toàn bộ cách hệ thống bảo vệ chính nó và người dùng. Từ đăng nhập an toàn, phân quyền rõ ràng, đến bảo vệ dữ liệu và tuân thủ quy định, tất cả đều được quy định chi tiết để đảm bảo hệ thống an toàn và đáng tin cậy. Khách không đăng nhập cũng có thể sử dụng hệ thống nhưng với các giới hạn phù hợp để tránh lạm dụng.

---

## Cross-References

**Related Sections:**
- **Phần III.8 (Architecture Rules - Security):** Basic security rules (JWT, HTTPS, OWASP)
- **Phần VII.2.7 (Testing & QA - Security Testing):** Security testing requirements
- **Phần VIII.8 (Logging & Monitoring - Privacy & Compliance):** Privacy logging, data masking, NĐ 13/2023 compliance

**Related Chunks:**
- `03_ARCHITECTURE_RULES_chunk_07` - Security Rules (basic)
- `07_TESTING_QA_chunk_09` - Security Testing
- `08_LOGGING_MONITORING_chunk_09` - Privacy & Compliance Logging

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All 9 chunks created with full metadata and content preservation






