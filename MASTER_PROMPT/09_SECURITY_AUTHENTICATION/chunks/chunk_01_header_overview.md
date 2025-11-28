# Chunk 01: Header & Overview / Hướng dẫn AI & Tổng quan

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_01`  
**Section:** IX. Security & Authentication - Header, IX.1 Overview  
**Word Count:** ~400 words  
**Retrieval Keywords:** security, authentication, authorization, RBAC, user management, API security, frontend security, data protection, NĐ 13/2023, guest access, JWT, HTTPS, OWASP  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_02`, `09_SECURITY_AUTHENTICATION_chunk_03`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_1`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnIX_Security&Authentication.md` - phần định nghĩa khung bảo mật và xác thực toàn diện cho hệ thống XLNC. File này mô tả authentication, authorization, user management, API security, và compliance với quy định Việt Nam.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm authentication flow (login, registration, guest access) - IX.2
2. Hiểu authorization và RBAC - IX.3
3. Nắm user management requirements - IX.4
4. Hiểu API security và frontend security - IX.5, IX.6
5. Tham chiếu đúng khi implement security features

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement authentication và authorization
- Thiết kế user management system
- Implement API security và rate limiting
- Thiết kế frontend security (protected routes, token management)
- Thiết kế guest access flow

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng security standard (ví dụ: "Theo IX.2.1, authentication phải dùng JWT với access token và refresh token...")
- Tuân thủ RBAC rules (IX.3)
- Đảm bảo guest access permissions (IX.2.3)
- Tuân thủ NĐ 13/2023 (IX.8)

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement security:
1. **Bước 1:** Xác định user type (authenticated, guest, admin)
2. **Bước 2:** Kiểm tra authentication requirements
3. **Bước 3:** Áp dụng authorization rules (RBAC)
4. **Bước 4:** Đảm bảo API security (rate limiting, CORS)
5. **Bước 5:** Đảm bảo compliance với NĐ 13/2023

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI dùng JWT-based authentication (IX.2.1)
- PHẢI tuân thủ RBAC (IX.3)
- PHẢI hỗ trợ guest access với limitations (IX.2.3)
- PHẢI đảm bảo HTTPS mandatory (IX.5.1)
- PHẢI tuân thủ NĐ 13/2023 (IX.8)

**G. Examples / Ví dụ:**

**Ví dụ 1 - Authentication flow:**
> "Theo IX.2.1, khi user login thành công, hệ thống phải trả về access_token (15 phút) và refresh_token (7 ngày). Guest access không cần token nhưng có rate limit 10 requests/phút."

**Ví dụ 2 - Authorization:**
> "Theo IX.3.2, user role 'engineer' có quyền: READ calculations, CREATE calculations, UPDATE own calculations, DELETE own calculations. Không có quyền ADMIN operations."

---

*(EN + VI, chuẩn quốc tế, đầy đủ cho hệ thống XLNC)*

---

## IX.1 Overview — Tổng quan

**EN:**

This section defines a comprehensive security and authentication framework for the XLNC Automated Water Treatment Calculation System. The framework ensures secure user authentication, role-based access control, API security, data protection, and compliance with Vietnamese data protection regulations (NĐ 13/2023). The system must support both authenticated users and guest access with appropriate security measures and limitations.

**VI:**

Phần này định nghĩa khung bảo mật và xác thực toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Khung này đảm bảo xác thực người dùng an toàn, kiểm soát truy cập dựa trên vai trò, bảo mật API, bảo vệ dữ liệu, và tuân thủ các quy định bảo vệ dữ liệu Việt Nam (NĐ 13/2023). Hệ thống phải hỗ trợ cả người dùng đã xác thực và truy cập khách với các biện pháp bảo mật và giới hạn phù hợp.

**Objectives:**

1. **Authentication:** Secure user login, registration, and guest access
2. **Authorization:** Role-based access control (RBAC) for all resources
3. **User Management:** Complete user lifecycle management
4. **API Security:** Protection against common attacks (OWASP Top 10)
5. **Data Protection:** Encryption, PII handling, compliance with NĐ 13/2023
6. **Frontend Security:** Secure token management, protected routes, CSRF protection

**Hóa phàm:**

Đảm bảo hệ thống an toàn, chỉ người đúng mới vào được, mỗi người chỉ làm được những gì họ được phép. Khách không đăng nhập cũng dùng được nhưng có giới hạn để tránh lạm dụng.

---

**Previous Chunk:** None (First chunk)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_02` (Authentication - Login & Registration)






