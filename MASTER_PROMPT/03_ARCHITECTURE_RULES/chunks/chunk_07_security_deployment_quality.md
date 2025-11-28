# Chunk 07: Security, Deployment, Versioning, Do Not Rules & Quality Gates / Bảo mật, Triển khai, Phiên bản, Quy tắc Cấm & Cổng Chất lượng

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_07`  
**Section:** III.8 Security, III.9 Deployment, III.10 Versioning, III.11 Do Not Rules, III.12 Quality Gates  
**Word Count:** ~450 words  
**Retrieval Keywords:** security, authentication, JWT, OWASP, deployment, CI/CD, Docker, versioning, do not rules, quality gates  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_06`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_8_12`

---

### III.8. Security Rules — Quy tắc bảo mật

**Authentication:**
- JWT-based auth
- Access tokens + refresh tokens
- HTTPS mandatory

**Input Sanitization:**
- Validate and sanitize all external input
- Reject invalid units
- Strict type-check on every layer

**OWASP Compliance:**
- Protect against SQL injection, XSS, CSRF
- Use prepared statements
- Limit request size for calculations

**English (concise):**

JWT-based authentication, HTTPS mandatory, validate and sanitize all inputs, strict type-checking, OWASP compliance (SQL injection, XSS, CSRF protection), prepared statements, request size limits.

**Hóa phàm:**

Hệ thống dùng JWT để xác thực, HTTPS bắt buộc, kiểm tra và làm sạch tất cả input, và tuân thủ OWASP.

---

### III.9. Deployment Rules — Quy tắc triển khai

**Environments:**
- dev → staging → production
- No direct deploy to production
- Automated CI/CD pipelines

**Containerization:**
- Docker for all services
- Each module builds into a separate image

**Scaling:**
- Horizontal scaling with load balancer
- FastAPI engine scales as independent microservice

**English (concise):**

Three-tier deployment (dev → staging → production), automated CI/CD, Docker containerization (separate image per module), horizontal scaling with load balancer.

**Hóa phàm:**

Triển khai qua 3 môi trường, tự động hóa CI/CD, dùng Docker, và có thể scale ngang.

---

### III.10. Versioning & Backward Compatibility

- Semantic Versioning: MAJOR.MINOR.PATCH
- Breaking changes → new API version
- Old versions deprecated but maintained for 6–12 months
- Maintain changelog in /docs/CHANGELOG.md

**English (concise):**

Semantic versioning (MAJOR.MINOR.PATCH), breaking changes require new API version, old versions maintained 6-12 months, changelog required.

**Hóa phàm:**

Dùng semantic versioning, thay đổi lớn tạo version mới, giữ version cũ 6-12 tháng, và có changelog.

---

### III.11. "Do Not" Rules — Những điều cấm tuyệt đối

1. Do NOT mix business logic inside UI or controllers
2. Do NOT return inconsistent JSON structures
3. Do NOT perform heavy calculations in frontend
4. Do NOT bypass validation (FE or BE)
5. Do NOT create tables without FK or constraints
6. Do NOT deploy without tests & logs enabled

**English (concise):**

Do not mix business logic in UI/controllers, do not return inconsistent JSON, do not perform heavy calculations in frontend, do not bypass validation, do not create tables without FK/constraints, do not deploy without tests and logs.

**Hóa phàm:**

Không được trộn logic vào UI, không được trả JSON không nhất quán, không tính toán nặng ở frontend, không bỏ qua validation, không tạo bảng thiếu FK, và không deploy thiếu test và log.

---

### III.12. Engineering Quality Gates — Kiểm soát chất lượng

A pull request must pass:
- Unit tests
- Integration tests
- Lint + formatter
- Security checks (SAST)
- API contract validation against OpenAPI
- Database migration validation

**English (concise):**

PR must pass: unit tests, integration tests, lint + formatter, security checks (SAST), API contract validation (OpenAPI), database migration validation.

**Hóa phàm:**

Mỗi pull request phải pass: test unit, test tích hợp, lint, kiểm tra bảo mật, kiểm tra API contract, và kiểm tra migration database.

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_06`  
**End of Section III: ARCHITECTURE RULES**







