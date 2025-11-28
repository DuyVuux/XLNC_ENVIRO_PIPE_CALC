# Chunk 02: Authentication / Xác thực

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_02`  
**Section:** IX.2 Authentication - IX.2.1 to IX.2.4  
**Word Count:** ~900 words  
**Retrieval Keywords:** authentication, JWT, access token, refresh token, login, registration, email verification, guest access, password management, password reset, password change, bcrypt, rate limiting, session management  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_01`, `09_SECURITY_AUTHENTICATION_chunk_03`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_2`

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

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_01` (Header & Overview)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_03` (Authorization & RBAC)






