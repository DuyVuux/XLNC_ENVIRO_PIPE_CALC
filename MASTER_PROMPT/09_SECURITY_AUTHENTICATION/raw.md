# IX. SECURITY & AUTHENTICATION / BẢO MẬT & XÁC THỰC

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

## IX.2 Authentication — Xác thực

### IX.2.1 User Authentication / Xác thực người dùng

**EN:** System must implement secure JWT-based authentication for registered users.

**VI:** Hệ thống phải triển khai xác thực dựa trên JWT an toàn cho người dùng đã đăng ký.

**Authentication Flow:**

1. **Login:**
   - User provides email/username and password
   - System validates credentials against database
   - On success, system generates:
     - **Access Token (JWT):** Short-lived (15 minutes), contains user_id, role, permissions
     - **Refresh Token:** Long-lived (7 days), stored in httpOnly cookie
   - System returns access token in response body
   - Refresh token sent via httpOnly cookie (secure, sameSite=strict)

2. **Token Structure:**
   ```json
   {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "token_type": "bearer",
     "expires_in": 900,
     "user": {
       "id": "user_123",
       "email": "user@example.com",
       "role": "engineer",
       "permissions": ["read:calculations", "create:calculations"]
     }
   }
   ```

3. **Token Refresh:**
   - Client sends refresh token via cookie
   - System validates refresh token
   - On success, system issues new access token
   - Refresh token rotation (new refresh token issued)

4. **Logout:**
   - Client calls `/api/v1/auth/logout`
   - System invalidates refresh token in database
   - Client removes access token from storage

**Security Requirements:**

- Passwords must be hashed using bcrypt (cost factor 12)
- Access tokens must be signed with HS256 or RS256
- Refresh tokens must be stored in database with expiration
- All authentication endpoints must use HTTPS only
- Implement rate limiting: 5 login attempts per 15 minutes per IP

**Priority:** High

---

### IX.2.2 User Registration / Đăng ký người dùng

**EN:** System must provide secure user registration with email verification.

**VI:** Hệ thống phải cung cấp đăng ký người dùng an toàn với xác minh email.

**Registration Flow:**

1. **Registration Request:**
   - User provides: email, password, full name, organization (optional)
   - System validates:
     - Email format and uniqueness
     - Password strength (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
     - Full name (required, min 2 chars)

2. **Email Verification:**
   - System sends verification email with token (expires in 24 hours)
   - User clicks verification link
   - System activates account
   - User can now login

3. **Default Role Assignment:**
   - New users assigned role: `engineer` (default)
   - Admin can promote users to `admin` role

**Password Requirements:**

- Minimum length: 8 characters
- Must contain: uppercase, lowercase, number, special character
- Cannot be common password (check against common password list)
- Cannot contain user's email or name

**Security Requirements:**

- Email verification mandatory before account activation
- Registration rate limiting: 3 registrations per hour per IP
- Password reset token expires in 1 hour
- Account locked after 5 failed login attempts (unlock after 30 minutes or admin action)

**Priority:** High

---

### IX.2.3 Guest Access / Truy cập khách

**EN:** System must support guest access (unauthenticated users) with appropriate limitations and rate limiting.

**VI:** Hệ thống phải hỗ trợ truy cập khách (người dùng chưa xác thực) với các giới hạn và giới hạn tốc độ phù hợp.

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
   - **API Requests:** 10 requests per minute per IP
   - **Calculations:** 5 calculations per hour per IP
   - **Exports:** 5 exports per day per IP
   - **File Size:** Maximum 10MB per calculation input

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

**Implementation:**

```python
# Example: Guest access middleware
@router.get("/api/v1/modules/{module_id}/calculate")
async def calculate_module(
    module_id: int,
    request: Request,
    inputs: CalculationInputs
):
    # Check if user is authenticated or guest
    user = request.state.user  # None for guests
    is_guest = user is None
    
    if is_guest:
        # Check rate limits for guest
        await check_guest_rate_limit(request.client.host)
        # Perform calculation (no saving)
        result = await calculate(module_id, inputs)
        return result
    else:
        # Authenticated user flow
        result = await calculate_and_save(module_id, inputs, user.id)
        return result
```

**Priority:** High

---

### IX.2.4 Password Management / Quản lý mật khẩu

**EN:** System must provide secure password management (reset, change, recovery).

**VI:** Hệ thống phải cung cấp quản lý mật khẩu an toàn (đặt lại, thay đổi, khôi phục).

**Password Reset Flow:**

1. **Request Reset:**
   - User requests password reset via email
   - System generates secure token (expires in 1 hour)
   - System sends reset email with token link

2. **Reset Password:**
   - User clicks reset link
   - User provides new password
   - System validates new password meets requirements
   - System updates password hash
   - System invalidates all existing sessions (force re-login)

**Password Change Flow:**

1. **Authenticated User:**
   - User provides current password and new password
   - System validates current password
   - System validates new password meets requirements
   - System updates password hash
   - System invalidates refresh tokens (access token remains valid)

**Security Requirements:**

- Password reset tokens must be single-use
- Password reset tokens expire in 1 hour
- Password change requires current password verification
- Password history: prevent reuse of last 5 passwords
- Password change must be logged (security audit)

**Priority:** High

---

## IX.3 Authorization & RBAC — Phân quyền và kiểm soát truy cập

### IX.3.1 Overview / Tổng quan

**EN:** System must implement Role-Based Access Control (RBAC) to manage user permissions.

**VI:** Hệ thống phải triển khai Kiểm soát Truy cập Dựa trên Vai trò (RBAC) để quản lý quyền người dùng.

**RBAC Model:**

- **Roles:** Predefined user roles (guest, engineer, admin)
- **Permissions:** Granular permissions for each resource
- **Resource-Based:** Permissions tied to specific resources (calculations, projects, users)

**Priority:** High

---

### IX.3.2 User Roles / Vai trò người dùng

**EN:** System must define clear user roles with specific permissions.

**VI:** Hệ thống phải định nghĩa vai trò người dùng rõ ràng với quyền cụ thể.

**Roles:**

1. **Guest (unauthenticated):**
   - **Permissions:**
     - `read:calculations` (view only, no save)
     - `create:calculations` (temporary, rate limited)
     - `export:results` (limited to 5 per day)
   - **Restrictions:**
     - No access to saved calculations
     - No access to projects
     - Rate limited (10 requests/min)

2. **Engineer (default authenticated user):**
   - **Permissions:**
     - `read:calculations` (own and shared)
     - `create:calculations` (unlimited)
     - `update:calculations` (own only)
     - `delete:calculations` (own only)
     - `create:projects` (own projects)
     - `update:projects` (own projects)
     - `delete:projects` (own projects)
     - `export:results` (unlimited)
     - `read:documentation` (full access)
   - **Restrictions:**
     - Cannot access admin features
     - Cannot modify other users' data
     - Cannot access system settings

3. **Admin:**
   - **Permissions:**
     - All engineer permissions
     - `read:users` (all users)
     - `update:users` (all users)
     - `delete:users` (all users)
     - `read:system` (system settings, logs, metrics)
     - `update:system` (system configuration)
     - `read:audit` (audit logs)
     - `manage:roles` (assign roles to users)
   - **Restrictions:**
     - Cannot delete own account
     - Cannot modify critical system settings without confirmation

**Priority:** High

---

### IX.3.3 Permission Model / Mô hình quyền

**EN:** System must implement granular permissions for fine-grained access control.

**VI:** Hệ thống phải triển khai quyền chi tiết để kiểm soát truy cập tinh vi.

**Permission Format:**

```
{action}:{resource}
```

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

**Examples:**
- `read:calculations` - Can view calculations
- `create:calculations` - Can create new calculations
- `update:calculations` - Can modify calculations
- `delete:calculations` - Can delete calculations
- `manage:users` - Can manage all users (admin only)

**Implementation:**

```python
# Example: Permission check decorator
from functools import wraps

def require_permission(permission: str):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            user = kwargs.get('user')  # From authentication middleware
            if not user:
                raise HTTPException(401, "Authentication required")
            
            if permission not in user.permissions:
                raise HTTPException(403, f"Permission required: {permission}")
            
            return await func(*args, **kwargs)
        return wrapper
    return decorator

# Usage
@router.post("/api/v1/calculations")
@require_permission("create:calculations")
async def create_calculation(user: User, inputs: CalculationInputs):
    # User has permission, proceed
    pass
```

**Priority:** High

---

### IX.3.4 Resource Ownership / Quyền sở hữu tài nguyên

**EN:** System must enforce resource ownership rules for user data.

**VI:** Hệ thống phải thực thi quy tắc quyền sở hữu tài nguyên cho dữ liệu người dùng.

**Ownership Rules:**

1. **Calculations:**
   - User owns calculations they create
   - User can update/delete only own calculations
   - Admin can read/update/delete any calculation

2. **Projects:**
   - User owns projects they create
   - User can share projects with other users (read-only or read-write)
   - User can update/delete only own projects
   - Admin can manage any project

3. **User Data:**
   - User can read/update own profile
   - User cannot delete own account (must request admin)
   - Admin can read/update/delete any user

**Implementation:**

```python
# Example: Ownership check
async def check_ownership(resource_id: str, resource_type: str, user: User):
    if user.role == "admin":
        return True  # Admin has access to all resources
    
    if resource_type == "calculation":
        calculation = await get_calculation(resource_id)
        return calculation.owner_id == user.id
    elif resource_type == "project":
        project = await get_project(resource_id)
        return project.owner_id == user.id
    
    return False
```

**Priority:** High

---

## IX.4 User Management / Quản lý người dùng

### IX.4.1 User Profile / Hồ sơ người dùng

**EN:** System must provide user profile management with secure data handling.

**VI:** Hệ thống phải cung cấp quản lý hồ sơ người dùng với xử lý dữ liệu an toàn.

**Profile Fields:**

- **Required:**
  - Email (unique, verified)
  - Full name
  - Password (hashed)

- **Optional:**
  - Organization
  - Phone number
  - Address
  - Profile picture
  - Preferences (language, units, theme)

**Profile Management:**

1. **View Profile:**
   - User can view own profile
   - Admin can view any user profile

2. **Update Profile:**
   - User can update own profile (except email, role)
   - Email change requires verification
   - Admin can update any user profile

3. **Delete Account:**
   - User can request account deletion
   - Admin must approve deletion
   - Account data anonymized per NĐ 13/2023 (retention 30 days)

**Security Requirements:**

- Email changes require verification
- Password changes require current password
- Profile updates must be logged (audit trail)
- PII must be encrypted at rest (per IX.7.2)

**Priority:** High

---

### IX.4.2 User Preferences / Tùy chọn người dùng

**EN:** System must store and apply user preferences for personalized experience.

**VI:** Hệ thống phải lưu trữ và áp dụng tùy chọn người dùng cho trải nghiệm cá nhân hóa.

**Preference Categories:**

1. **Language:**
   - Vietnamese (default)
   - English
   - Auto-detect from browser

2. **Units:**
   - SI (default)
   - Imperial
   - Mixed

3. **Theme:**
   - Light (default)
   - Dark
   - Auto (system preference)

4. **Calculation Defaults:**
   - Default temperature
   - Default material
   - Default module chain

**Storage:**

- Preferences stored in user profile
- Applied on login
- Can be changed anytime
- Guest preferences stored in session (not persisted)

**Priority:** Medium

---

### IX.4.3 Account Management / Quản lý tài khoản

**EN:** System must provide account management features for users and admins.

**VI:** Hệ thống phải cung cấp tính năng quản lý tài khoản cho người dùng và quản trị viên.

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

**Security Requirements:**

- Account deletion requires confirmation
- Account suspension must be logged
- Account data retention per NĐ 13/2023 (30 days after deletion request)

**Priority:** High

---

## IX.5 API Security — Bảo mật API

### IX.5.1 HTTPS & TLS / HTTPS và TLS

**EN:** System must enforce HTTPS for all API communications.

**VI:** Hệ thống phải thực thi HTTPS cho tất cả giao tiếp API.

**Requirements:**

- All API endpoints must use HTTPS only
- TLS 1.2 minimum (TLS 1.3 preferred)
- Valid SSL certificate required
- HSTS (HTTP Strict Transport Security) enabled
- Certificate pinning for mobile apps (if applicable)

**Configuration:**

```nginx
# Example: Nginx HTTPS configuration
server {
    listen 443 ssl http2;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

**Priority:** Critical

---

### IX.5.2 Rate Limiting / Giới hạn tốc độ

**EN:** System must implement rate limiting to prevent abuse and ensure fair usage.

**VI:** Hệ thống phải triển khai giới hạn tốc độ để ngăn chặn lạm dụng và đảm bảo sử dụng công bằng.

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
- Rate limit headers in response:
  ```
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 95
  X-RateLimit-Reset: 1640995200
  ```

**Priority:** High

---

### IX.5.3 CORS Policy / Chính sách CORS

**EN:** System must configure CORS to allow only trusted origins.

**VI:** Hệ thống phải cấu hình CORS để chỉ cho phép các nguồn đáng tin cậy.

**CORS Configuration:**

```python
# Example: FastAPI CORS configuration
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://xlnc.example.com",
        "https://app.xlnc.example.com"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type", "X-Requested-With"],
    max_age=3600
)
```

**Requirements:**

- Only allow specific trusted origins (no wildcards in production)
- Credentials allowed only for trusted origins
- Preflight requests cached for 1 hour
- CORS violations must be logged

**Priority:** High

---

### IX.5.4 Input Validation & Sanitization / Xác thực và làm sạch đầu vào

**EN:** System must validate and sanitize all input to prevent injection attacks.

**VI:** Hệ thống phải xác thực và làm sạch tất cả đầu vào để ngăn chặn tấn công tiêm.

**Validation Requirements:**

1. **Type Validation:**
   - All inputs must be validated against Pydantic models
   - Type coercion not allowed (strict typing)
   - Invalid types rejected with 400 Bad Request

2. **Range Validation:**
   - Numeric inputs must be within valid ranges
   - String inputs must meet length requirements
   - Enum inputs must match allowed values

3. **Sanitization:**
   - SQL injection prevention: Use parameterized queries only
   - XSS prevention: Sanitize all user-generated content
   - Path traversal prevention: Validate file paths
   - Command injection prevention: No shell execution

**Implementation:**

```python
# Example: Input validation
from pydantic import BaseModel, validator, Field

class CalculationInputs(BaseModel):
    Q: float = Field(..., gt=0, description="Flow rate must be positive")
    t: float = Field(..., ge=0, le=100, description="Temperature 0-100°C")
    L: float = Field(..., gt=0, description="Length must be positive")
    
    @validator('Q')
    def validate_flow_rate(cls, v):
        if v > 100000:
            raise ValueError("Flow rate too high (max 100000 m³/ngày)")
        return v
```

**Priority:** Critical

---

### IX.5.5 OWASP Top 10 Protection / Bảo vệ OWASP Top 10

**EN:** System must protect against OWASP Top 10 security risks.

**VI:** Hệ thống phải bảo vệ chống lại 10 rủi ro bảo mật hàng đầu của OWASP.

**Protection Measures:**

1. **A01:2021 – Broken Access Control:**
   - RBAC implementation (IX.3)
   - Resource ownership checks (IX.3.4)
   - API endpoint authorization

2. **A02:2021 – Cryptographic Failures:**
   - HTTPS mandatory (IX.5.1)
   - Password hashing (bcrypt, cost 12)
   - Encryption at rest (IX.7.2)

3. **A03:2021 – Injection:**
   - Parameterized queries (SQL injection prevention)
   - Input validation (IX.5.4)
   - Output encoding (XSS prevention)

4. **A04:2021 – Insecure Design:**
   - Security by design (IX.1)
   - Threat modeling
   - Security reviews

5. **A05:2021 – Security Misconfiguration:**
   - Secure defaults
   - Configuration reviews
   - Security headers

6. **A06:2021 – Vulnerable Components:**
   - Dependency scanning
   - Regular updates
   - Vulnerability monitoring

7. **A07:2021 – Authentication Failures:**
   - Strong password requirements (IX.2.2)
   - Rate limiting (IX.5.2)
   - Session management (IX.2.1)

8. **A08:2021 – Software and Data Integrity:**
   - Code signing
   - Dependency verification
   - Secure update mechanism

9. **A09:2021 – Security Logging Failures:**
   - Comprehensive logging (VIII.2)
   - Security event logging
   - Audit trails

10. **A10:2021 – Server-Side Request Forgery:**
    - URL validation
    - Network segmentation
    - Input sanitization

**Priority:** Critical

---

## IX.6 Frontend Security — Bảo mật Frontend

### IX.6.1 Token Management / Quản lý token

**EN:** Frontend must securely manage authentication tokens.

**VI:** Frontend phải quản lý token xác thực một cách an toàn.

**Token Storage:**

1. **Access Token:**
   - Stored in memory (React state, not localStorage)
   - Sent in Authorization header: `Bearer {access_token}`
   - Automatically refreshed before expiration

2. **Refresh Token:**
   - Stored in httpOnly cookie (set by backend)
   - Not accessible via JavaScript
   - Sent automatically with requests

3. **Token Refresh Flow:**
   - Frontend detects access token expiration (5 minutes before)
   - Frontend calls `/api/v1/auth/refresh` with refresh token
   - Backend returns new access token
   - Frontend updates access token in memory

**Security Requirements:**

- Never store tokens in localStorage or sessionStorage
- Never log tokens in console
- Clear tokens on logout
- Handle token refresh errors (redirect to login)

**Implementation:**

```typescript
// Example: Token management in React
const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  
  useEffect(() => {
    // Refresh token before expiration
    const interval = setInterval(async () => {
      if (accessToken) {
        const newToken = await refreshAccessToken();
        setAccessToken(newToken);
      }
    }, 10 * 60 * 1000); // Every 10 minutes
    
    return () => clearInterval(interval);
  }, [accessToken]);
  
  return { accessToken };
};
```

**Priority:** High

---

### IX.6.2 Protected Routes / Routes được bảo vệ

**EN:** Frontend must protect routes based on authentication and authorization.

**VI:** Frontend phải bảo vệ routes dựa trên xác thực và phân quyền.

**Route Protection:**

1. **Public Routes:**
   - `/` - Home page
   - `/login` - Login page
   - `/register` - Registration page
   - `/docs` - Documentation
   - `/calculate` - Calculation interface (guest access allowed)

2. **Authenticated Routes:**
   - `/dashboard` - User dashboard
   - `/projects` - User projects
   - `/calculations` - Saved calculations
   - `/profile` - User profile
   - `/settings` - User settings

3. **Admin Routes:**
   - `/admin` - Admin dashboard
   - `/admin/users` - User management
   - `/admin/system` - System settings
   - `/admin/audit` - Audit logs

**Implementation:**

```typescript
// Example: Protected route component
const ProtectedRoute = ({ children, requireAuth = true, requireAdmin = false }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <Loading />;
  
  if (requireAuth && !user) {
    return <Navigate to="/login" />;
  }
  
  if (requireAdmin && user?.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};
```

**Priority:** High

---

### IX.6.3 CSRF Protection / Bảo vệ CSRF

**EN:** Frontend must implement CSRF protection for state-changing operations.

**VI:** Frontend phải triển khai bảo vệ CSRF cho các thao tác thay đổi trạng thái.

**CSRF Protection:**

1. **CSRF Token:**
   - Backend generates CSRF token on login
   - Token stored in httpOnly cookie
   - Token sent in custom header: `X-CSRF-Token`
   - Token validated on state-changing requests (POST, PUT, DELETE)

2. **SameSite Cookies:**
   - All cookies set with `SameSite=Strict`
   - Prevents cross-site cookie sending

3. **Origin Validation:**
   - Backend validates `Origin` header
   - Rejects requests from untrusted origins

**Implementation:**

```typescript
// Example: CSRF token in API calls
const apiClient = axios.create({
  headers: {
    'X-CSRF-Token': getCsrfToken(), // From cookie
  }
});
```

**Priority:** High

---

### IX.6.4 Content Security Policy / Chính sách bảo mật nội dung

**EN:** Frontend must implement Content Security Policy (CSP) headers.

**VI:** Frontend phải triển khai tiêu đề Chính sách Bảo mật Nội dung (CSP).

**CSP Configuration:**

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://cdn.example.com; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:; 
               connect-src 'self' https://api.xlnc.example.com;">
```

**Requirements:**

- Restrict script sources to trusted domains
- Prevent inline scripts (use nonce if needed)
- Restrict style sources
- Restrict image sources
- Restrict API connections to backend only

**Priority:** Medium

---

## IX.7 Data Security & Privacy — Bảo mật và quyền riêng tư dữ liệu

### IX.7.1 Data Classification / Phân loại dữ liệu

**EN:** System must classify data by sensitivity level for appropriate protection.

**VI:** Hệ thống phải phân loại dữ liệu theo mức độ nhạy cảm để bảo vệ phù hợp.

**Data Classification:**

1. **Public Data:**
   - Documentation
   - Public calculation examples
   - System status
   - **Protection:** No encryption required

2. **Internal Data:**
   - User preferences
   - Calculation results (non-sensitive)
   - System logs (non-PII)
   - **Protection:** Encryption at rest, access control

3. **Confidential Data:**
   - User profiles (email, name)
   - Calculation inputs/outputs (user-specific)
   - Project data
   - **Protection:** Encryption at rest and in transit, strict access control

4. **Restricted Data:**
   - Passwords (hashed)
   - Authentication tokens
   - Audit logs
   - **Protection:** Strong encryption, minimal access, audit logging

**Priority:** High

---

### IX.7.2 Encryption / Mã hóa

**EN:** System must encrypt sensitive data at rest and in transit.

**VI:** Hệ thống phải mã hóa dữ liệu nhạy cảm khi lưu trữ và khi truyền.

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

---

### IX.7.3 PII Handling / Xử lý dữ liệu cá nhân

**EN:** System must handle Personally Identifiable Information (PII) in compliance with NĐ 13/2023.

**VI:** Hệ thống phải xử lý Thông tin Cá nhân (PII) tuân thủ NĐ 13/2023.

**PII Types:**

- Email addresses
- Full names
- Phone numbers
- IP addresses (masked in logs per VIII.8.2)
- Organization information

**PII Handling Requirements:**

1. **Collection:**
   - Collect only necessary PII
   - Obtain consent before collection
   - Document purpose of collection

2. **Storage:**
   - Encrypt PII at rest (IX.7.2)
   - Limit access to authorized personnel only
   - Implement data retention policies

3. **Processing:**
   - Process PII only for stated purposes
   - Do not share PII with third parties without consent
   - Mask PII in logs (VIII.8.2)

4. **Deletion:**
   - Honor user deletion requests (per NĐ 13/2023)
   - Anonymize data within 30 days of deletion request
   - Retain anonymized data for audit (if required)

**Priority:** Critical

---

### IX.7.4 Data Retention / Lưu trữ dữ liệu

**EN:** System must define data retention periods based on compliance and operational needs.

**VI:** Hệ thống phải định nghĩa thời gian lưu trữ dữ liệu dựa trên tuân thủ và nhu cầu vận hành.

**Retention Periods:**

1. **User Accounts:**
   - Active accounts: Retained indefinitely
   - Deleted accounts: Anonymized after 30 days, retained for audit (1 year)

2. **Calculation Data:**
   - Authenticated users: Retained per user preference (default: 1 year)
   - Guest calculations: Deleted after 24 hours
   - Archived calculations: Retained for 5 years (if user requests)

3. **Audit Logs:**
   - Security events: 1 year
   - Authentication logs: 90 days
   - Access logs: 30 days

4. **Backup Data:**
   - Daily backups: 30 days
   - Weekly backups: 3 months
   - Monthly backups: 1 year

**Compliance:**

- Retention periods comply with NĐ 13/2023
- User can request data deletion
- System must provide data export (GDPR-like right to access)

**Priority:** High

---

## IX.8 Security Policies & Compliance — Chính sách bảo mật và tuân thủ

### IX.8.1 NĐ 13/2023 Compliance / Tuân thủ NĐ 13/2023

**EN:** System must comply with Vietnamese Decree 13/2023 on Personal Data Protection.

**VI:** Hệ thống phải tuân thủ Nghị định 13/2023 về Bảo vệ Dữ liệu Cá nhân.

**Compliance Requirements:**

1. **Data Collection:**
   - Collect only necessary personal data
   - Obtain explicit consent before collection
   - Document purpose of data collection
   - Provide privacy policy in Vietnamese

2. **Data Processing:**
   - Process data only for stated purposes
   - Do not process data for other purposes without consent
   - Implement data minimization principle

3. **Data Storage:**
   - Store data securely (encryption, access control)
   - Implement data retention policies (IX.7.4)
   - Limit data access to authorized personnel

4. **Data Sharing:**
   - Do not share personal data with third parties without consent
   - Document all data sharing agreements
   - Ensure third parties comply with NĐ 13/2023

5. **User Rights:**
   - Right to access: Users can request their data
   - Right to correction: Users can correct their data
   - Right to deletion: Users can request data deletion
   - Right to object: Users can object to data processing

6. **Data Breach:**
   - Report data breaches to authorities within 72 hours
   - Notify affected users within 24 hours
   - Document breach and remediation actions

**Priority:** Critical

---

### IX.8.2 Security Policies / Chính sách bảo mật

**EN:** System must define and enforce security policies.

**VI:** Hệ thống phải định nghĩa và thực thi chính sách bảo mật.

**Security Policies:**

1. **Password Policy:**
   - Minimum 8 characters
   - Must contain uppercase, lowercase, number, special character
   - Cannot be common password
   - Must be changed every 90 days (optional, user can enable)

2. **Session Policy:**
   - Access token expires in 15 minutes
   - Refresh token expires in 7 days
   - Session timeout after 30 minutes of inactivity
   - Maximum 5 concurrent sessions per user

3. **Access Policy:**
   - Failed login attempts: Account locked after 5 attempts
   - Lockout duration: 30 minutes or admin unlock
   - IP-based rate limiting (IX.5.2)
   - Geographic restrictions (if applicable)

4. **Data Policy:**
   - Data encryption mandatory (IX.7.2)
   - Regular security audits (IX.9.2)
   - Incident response plan (VIII.6.3)
   - Backup and recovery procedures

**Priority:** High

---

### IX.8.3 Security Headers / Tiêu đề bảo mật

**EN:** System must set security headers to protect against common attacks.

**VI:** Hệ thống phải đặt tiêu đề bảo mật để bảo vệ chống lại các cuộc tấn công phổ biến.

**Required Headers:**

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Priority:** High

---

## IX.9 Security Testing & Auditing — Kiểm thử và kiểm toán bảo mật

### IX.9.1 Security Testing / Kiểm thử bảo mật

**EN:** System must undergo regular security testing to identify and fix vulnerabilities.

**VI:** Hệ thống phải trải qua kiểm thử bảo mật thường xuyên để xác định và sửa lỗ hổng.

**Testing Types:**

1. **Penetration Testing:**
   - **Frequency:** Quarterly or after major changes
   - **Scope:** Authentication, authorization, API endpoints, data protection
   - **Tools:** OWASP ZAP, Burp Suite, manual testing
   - **Deliverables:** Security assessment report with findings and remediation plan

2. **Vulnerability Scanning:**
   - **Frequency:** Weekly automated scans
   - **Scope:** Dependencies, code vulnerabilities, configuration issues
   - **Tools:** Snyk, Dependabot, OWASP Dependency-Check
   - **Action:** Critical vulnerabilities must be patched within 24 hours

3. **Authentication Testing:**
   - Test login flow (valid/invalid credentials)
   - Test token refresh mechanism
   - Test logout and session invalidation
   - Test password reset flow
   - Test account lockout after failed attempts

4. **Authorization Testing:**
   - Test RBAC enforcement
   - Test resource ownership checks
   - Test guest access limitations
   - Test privilege escalation attempts
   - Test unauthorized access attempts

5. **API Security Testing:**
   - Test rate limiting enforcement
   - Test CORS policy
   - Test input validation and sanitization
   - Test SQL injection protection
   - Test XSS protection
   - Test CSRF protection

6. **Data Protection Testing:**
   - Test encryption at rest and in transit
   - Test PII masking in logs
   - Test data retention policies
   - Test data deletion procedures
   - Test backup and recovery

**Priority:** High

---

### IX.9.2 Security Auditing / Kiểm toán bảo mật

**EN:** System must maintain security audit logs and conduct regular security audits.

**VI:** Hệ thống phải duy trì nhật ký kiểm toán bảo mật và tiến hành kiểm toán bảo mật thường xuyên.

**Audit Requirements:**

1. **Audit Logging:**
   - Log all authentication events (login, logout, failed attempts)
   - Log all authorization decisions (access granted/denied)
   - Log all sensitive operations (password changes, role changes, data deletion)
   - Log all security policy violations
   - Log all admin actions

2. **Audit Log Format:**
   ```json
   {
     "timestamp": "2024-01-15T10:30:45.123Z",
     "event_type": "authentication",
     "action": "login_success",
     "user_id": "user_123",
     "ip_address": "192.168.1.***",
     "user_agent": "Mozilla/5.0...",
     "result": "success",
     "metadata": {
       "role": "engineer",
       "session_id": "sess_abc123"
     }
   }
   ```

3. **Audit Review:**
   - **Frequency:** Monthly review of audit logs
   - **Scope:** Authentication anomalies, authorization failures, security incidents
   - **Responsibility:** Security team or designated security officer
   - **Deliverables:** Monthly security audit report

4. **Compliance Auditing:**
   - **Frequency:** Annually or as required by regulations
   - **Scope:** NĐ 13/2023 compliance, data protection practices, security policies
   - **Conducted by:** External security auditor or internal security team
   - **Deliverables:** Compliance audit report with recommendations

**Priority:** High

---

### IX.9.3 Security Incident Response / Phản ứng sự cố bảo mật

**EN:** System must have defined procedures for security incident response.

**VI:** Hệ thống phải có quy trình xác định cho phản ứng sự cố bảo mật.

**Incident Response Process:**

1. **Detection:**
   - Automated alerts from security monitoring (VIII.6)
   - Manual detection by security team
   - User reports of suspicious activity

2. **Classification:**
   - **Severity Levels:**
     - **Critical:** Data breach, system compromise, unauthorized admin access
     - **High:** Multiple failed login attempts, privilege escalation attempt
     - **Medium:** Single failed authorization, suspicious API activity
     - **Low:** Minor security policy violations

3. **Response:**
   - **Immediate Actions:**
     - Isolate affected systems if necessary
     - Revoke compromised credentials
     - Block malicious IP addresses
     - Preserve evidence for investigation
   - **Investigation:**
     - Analyze audit logs
     - Identify root cause
     - Assess impact
     - Document findings

4. **Remediation:**
   - Apply security patches
   - Update security policies if needed
   - Notify affected users (if required by NĐ 13/2023)
   - Report to authorities (if required by NĐ 13/2023)

5. **Post-Incident:**
   - Conduct post-mortem analysis
   - Update security procedures
   - Improve monitoring and detection
   - Document lessons learned

**Priority:** Critical

---

## IX.10 Conclusion — Kết luận

**EN:**

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

**VI:**

Tài liệu này định nghĩa khung bảo mật và xác thực toàn diện cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Khung này đảm bảo:

- **Xác thực an toàn:** Xác thực dựa trên JWT với access token và refresh token, quản lý mật khẩu an toàn, và truy cập khách với các giới hạn phù hợp
- **Phân quyền dựa trên vai trò:** RBAC chi tiết với các vai trò rõ ràng (khách, kỹ sư, quản trị viên) và mô hình quyền
- **Quản lý người dùng:** Quản lý vòng đời người dùng hoàn chỉnh với hồ sơ, tùy chọn và quản lý tài khoản
- **Bảo mật API:** Bảo vệ chống lại các cuộc tấn công OWASP Top 10, giới hạn tốc độ, CORS, xác thực đầu vào và tiêu đề bảo mật
- **Bảo mật Frontend:** Quản lý token an toàn, routes được bảo vệ, bảo vệ CSRF và Chính sách Bảo mật Nội dung
- **Bảo vệ dữ liệu:** Phân loại dữ liệu, mã hóa khi lưu trữ và truyền tải, xử lý PII và chính sách lưu trữ dữ liệu
- **Tuân thủ:** Tuân thủ đầy đủ các quy định bảo vệ dữ liệu Việt Nam (NĐ 13/2023)
- **Kiểm thử và kiểm toán bảo mật:** Kiểm thử bảo mật thường xuyên, ghi log kiểm toán và quy trình phản ứng sự cố

Khung bảo mật tích hợp với khung quan sát (Phần VIII) để cung cấp giám sát bảo mật toàn diện và phản ứng sự cố. Tất cả các thực hành bảo mật được thiết kế để bảo vệ dữ liệu người dùng, đảm bảo tính toàn vẹn hệ thống và tuân thủ các quy định Việt Nam trong khi duy trì khả năng sử dụng và hiệu suất.

**Hóa phàm:**

Phần này mô tả toàn bộ cách hệ thống bảo vệ chính nó và người dùng. Từ đăng nhập an toàn, phân quyền rõ ràng, đến bảo vệ dữ liệu và tuân thủ quy định, tất cả đều được quy định chi tiết để đảm bảo hệ thống an toàn và đáng tin cậy. Khách không đăng nhập cũng có thể sử dụng hệ thống nhưng với các giới hạn phù hợp để tránh lạm dụng.

---

**KẾT THÚC PHẦN IX. SECURITY & AUTHENTICATION**

*Phần này cung cấp đầy đủ khung bảo mật và xác thực cho hệ thống tính toán tự động xử lý nước XLNC, bao gồm authentication, authorization, user management, API security, frontend security, data protection, compliance với NĐ 13/2023, và security testing & auditing. Phần này bổ sung và chi tiết hóa nội dung trong Phần III.8 (Security Rules) và tích hợp với Phần VII (Security Testing) và Phần VIII (Privacy & Compliance Logging).*