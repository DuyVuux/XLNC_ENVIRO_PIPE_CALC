# Chunk 03: Error Codes & Troubleshooting / Mã lỗi và xử lý sự cố

**Chunk ID:** `10_APPENDIX_chunk_03`  
**Section:** X.3 Error Codes & Troubleshooting - X.3.1 to X.3.3  
**Word Count:** ~800 words  
**Retrieval Keywords:** error codes, HTTP status codes, application error codes, troubleshooting, validation errors, calculation errors, authentication errors, authorization errors  
**Related Chunks:** `10_APPENDIX_chunk_02`, `10_APPENDIX_chunk_04`  
**Canonical Summary Reference:** `10_APPENDIX_summary_section_3`

---

## X.3 Error Codes & Troubleshooting / Mã lỗi và xử lý sự cố

### X.3.1 HTTP Status Codes / Mã trạng thái HTTP

**EN:** Standard HTTP status codes used in the system.

**VI:** Mã trạng thái HTTP chuẩn được sử dụng trong hệ thống.

| Code | Name | Description | When Used |
|------|------|-------------|-----------|
| 200 | OK | Request successful | Successful GET, PUT, DELETE |
| 201 | Created | Resource created | Successful POST |
| 400 | Bad Request | Invalid input | Validation errors, malformed request |
| 401 | Unauthorized | Authentication required | Missing/invalid token |
| 403 | Forbidden | Permission denied | Insufficient permissions |
| 404 | Not Found | Resource not found | Invalid endpoint or resource ID |
| 409 | Conflict | Resource conflict | Duplicate email, conflicting data |
| 422 | Unprocessable Entity | Validation failed | Input validation errors |
| 429 | Too Many Requests | Rate limit exceeded | Too many requests |
| 500 | Internal Server Error | Server error | Unexpected server error |
| 503 | Service Unavailable | Service unavailable | Maintenance, overload |

**Priority:** High

---

### X.3.2 Application Error Codes / Mã lỗi ứng dụng

**EN:** Custom application error codes for detailed error handling.

**VI:** Mã lỗi ứng dụng tùy chỉnh cho xử lý lỗi chi tiết.

**Validation Errors (VAL_*):**

| Code | Message | Description |
|------|---------|-------------|
| VAL_001 | Invalid flowrate | Flowrate must be > 0 |
| VAL_002 | Invalid diameter | Diameter must be > 0 |
| VAL_003 | Invalid temperature | Temperature must be 0-100°C |
| VAL_004 | Invalid unit | Unit not supported |
| VAL_005 | Missing required input | Required input field missing |
| VAL_006 | Invalid module chain | Invalid module sequence |
| VAL_007 | Unit inconsistency | Units not consistent across modules |

**Calculation Errors (CALC_*):**

| Code | Message | Description |
|------|---------|-------------|
| CALC_001 | Calculation failed | General calculation error |
| CALC_002 | Formula error | Formula execution error |
| CALC_003 | Division by zero | Attempted division by zero |
| CALC_004 | Negative result | Result cannot be negative |
| CALC_005 | Out of range | Result outside valid range |
| CALC_006 | Module dependency error | Previous module output required |

**Authentication Errors (AUTH_*):**

| Code | Message | Description |
|------|---------|-------------|
| AUTH_001 | Invalid credentials | Wrong email/password |
| AUTH_002 | Token expired | Access token expired |
| AUTH_003 | Token invalid | Invalid token format |
| AUTH_004 | Account locked | Account locked after failed attempts |
| AUTH_005 | Email not verified | Email verification required |
| AUTH_006 | Guest rate limit exceeded | Guest rate limit exceeded |

**Authorization Errors (AUTHZ_*):**

| Code | Message | Description |
|------|---------|-------------|
| AUTHZ_001 | Permission denied | User lacks required permission |
| AUTHZ_002 | Resource ownership | User does not own resource |
| AUTHZ_003 | Guest access denied | Guest cannot perform this action |
| AUTHZ_004 | Admin required | Admin role required |

**Priority:** High

---

### X.3.3 Troubleshooting Guide / Hướng dẫn xử lý sự cố

**EN:** Common issues and solutions.

**VI:** Các vấn đề thường gặp và giải pháp.

**Issue: Calculation returns error "Invalid flowrate"**

- **Cause:** Flowrate ≤ 0 or invalid unit
- **Solution:** Check flowrate value is > 0, verify unit is supported
- **Prevention:** Validate input before calculation

**Issue: Module chain calculation fails with "Module dependency error"**

- **Cause:** Previous module output not available or invalid
- **Solution:** Ensure all previous modules in chain completed successfully
- **Prevention:** Validate module chain before calculation

**Issue: "Unit inconsistency" error**

- **Cause:** Units not consistent across modules in chain
- **Solution:** Convert all inputs to consistent units (preferably SI)
- **Prevention:** Use unit conversion service before calculation

**Issue: "Rate limit exceeded" error**

- **Cause:** Too many requests in short time
- **Solution:** Wait for rate limit window to reset, reduce request frequency
- **Prevention:** Implement request throttling on client side

**Issue: "Token expired" error**

- **Cause:** Access token expired (15 minutes)
- **Solution:** Refresh token using `/api/v1/auth/refresh`
- **Prevention:** Implement automatic token refresh

**Priority:** Medium

---

**Previous Chunk:** `10_APPENDIX_chunk_02` (API Endpoint Reference)  
**Next Chunk:** `10_APPENDIX_chunk_04` (Code Templates & Examples)






