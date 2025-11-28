# Chunk 06: Frontend Security / Bảo mật Frontend

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_06`  
**Section:** IX.6 Frontend Security - IX.6.1 to IX.6.4  
**Word Count:** ~700 words  
**Retrieval Keywords:** frontend security, token management, protected routes, CSRF protection, Content Security Policy, CSP, XSS prevention, secure storage, session management  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_05`, `09_SECURITY_AUTHENTICATION_chunk_07`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_6`

---

## IX.6 Frontend Security — Bảo mật Frontend

### IX.6.1 Token Management / Quản lý token

**EN:** Frontend must securely manage authentication tokens.

**VI:** Frontend phải quản lý token xác thực một cách an toàn.

**Token Storage:**

1. **Access Token:**
   - Stored in memory (React state/context)
   - Never stored in localStorage or sessionStorage
   - Automatically removed on page refresh
   - Sent via Authorization header: `Bearer {token}`

2. **Refresh Token:**
   - Stored in httpOnly cookie (set by backend)
   - Not accessible via JavaScript
   - Automatically sent with requests
   - Secure, sameSite=strict flags

3. **Token Refresh:**
   - Automatic refresh before expiration (5 minutes before)
   - Silent refresh on API 401 response
   - Redirect to login if refresh fails

**Implementation:**

```typescript
// Example: Token management in React
const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  
  useEffect(() => {
    // Get token from API on mount
    fetchToken();
  }, []);
  
  const refreshToken = async () => {
    // Refresh token via httpOnly cookie
    const response = await fetch('/api/v1/auth/refresh', {
      method: 'POST',
      credentials: 'include'
    });
    const data = await response.json();
    setAccessToken(data.access_token);
  };
  
  return { accessToken, refreshToken };
};
```

**Security Requirements:**

- Never log tokens to console
- Never include tokens in URLs
- Clear tokens on logout
- Handle token expiration gracefully

**Priority:** High

---

### IX.6.2 Protected Routes / Routes được bảo vệ

**EN:** Frontend must protect routes based on authentication and authorization.

**VI:** Frontend phải bảo vệ routes dựa trên xác thực và phân quyền.

**Route Protection:**

1. **Public Routes:**
   - Home page
   - Login page
   - Registration page
   - Documentation
   - Guest calculation interface

2. **Authenticated Routes:**
   - Dashboard
   - Calculation history
   - Projects
   - Profile settings
   - Requires valid access token

3. **Admin Routes:**
   - User management
   - System settings
   - Audit logs
   - Requires admin role

**Implementation:**

```typescript
// Example: Protected route component
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (requireAdmin && user.role !== 'admin') {
    return <Navigate to="/unauthorized" />;
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

1. **SameSite Cookies:**
   - Refresh token cookie: `sameSite=strict`
   - Prevents cross-site cookie sending

2. **CSRF Tokens:**
   - Generate CSRF token on page load
   - Include in state-changing requests (POST, PUT, DELETE)
   - Validate on backend

3. **Origin Validation:**
   - Validate request origin
   - Reject requests from untrusted origins

**Implementation:**

```typescript
// Example: CSRF token handling
const getCSRFToken = async () => {
  const response = await fetch('/api/v1/csrf-token', {
    credentials: 'include'
  });
  const { csrf_token } = await response.json();
  return csrf_token;
};

const makeRequest = async (url: string, options: RequestInit) => {
  const csrfToken = await getCSRFToken();
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'X-CSRF-Token': csrfToken
    },
    credentials: 'include'
  });
};
```

**Priority:** High

---

### IX.6.4 Content Security Policy / Chính sách bảo mật nội dung

**EN:** Frontend must implement Content Security Policy (CSP) to prevent XSS attacks.

**VI:** Frontend phải triển khai Chính sách Bảo mật Nội dung (CSP) để ngăn chặn tấn công XSS.

**CSP Configuration:**

```http
Content-Security-Policy: 
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://api.xlnc.example.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
```

**CSP Directives:**

1. **default-src 'self':** Only allow resources from same origin
2. **script-src:** Control JavaScript execution
3. **style-src:** Control CSS loading
4. **img-src:** Control image sources
5. **connect-src:** Control API connections
6. **frame-ancestors 'none':** Prevent clickjacking

**Implementation:**

- Set CSP via meta tag or HTTP header
- Report violations to logging endpoint
- Gradually tighten CSP rules
- Test CSP in development

**Priority:** High

---

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_05` (API Security)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_07` (Data Security & Privacy)






