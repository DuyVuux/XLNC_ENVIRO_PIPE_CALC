# Chunk 04: User Management / Quản lý người dùng

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_04`  
**Section:** IX.4 User Management - IX.4.1 to IX.4.3  
**Word Count:** ~500 words  
**Retrieval Keywords:** user management, user profile, user preferences, account management, profile update, account deletion, data export, user settings  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_03`, `09_SECURITY_AUTHENTICATION_chunk_05`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_4`

---

## IX.4 User Management / Quản lý người dùng

### IX.4.1 User Profile / Hồ sơ người dùng

**EN:** System must provide user profile management with secure data handling.

**VI:** Hệ thống phải cung cấp quản lý hồ sơ người dùng với xử lý dữ liệu an toàn.

**Profile Information:**

1. **Required Fields:**
   - Email (unique, verified)
   - Full name
   - Role (assigned by system/admin)

2. **Optional Fields:**
   - Organization
   - Phone number
   - Address
   - Profile picture

3. **Profile Management:**
   - User can update own profile
   - Email change requires verification
   - Profile updates logged (audit trail)
   - Profile data encrypted at rest (IX.7.2)

**Security Requirements:**

- Profile updates require authentication
- Email changes require re-verification
- Sensitive fields (email, phone) masked in logs
- Profile data subject to NĐ 13/2023 (IX.8.1)

**Priority:** Medium

---

### IX.4.2 User Preferences / Tùy chọn người dùng

**EN:** System must allow users to customize their preferences and settings.

**VI:** Hệ thống phải cho phép người dùng tùy chỉnh tùy chọn và cài đặt của họ.

**User Preferences:**

1. **Display Preferences:**
   - Language (Vietnamese, English)
   - Date format
   - Number format
   - Unit system (SI, Imperial)

2. **Calculation Preferences:**
   - Default module selection
   - Default input units
   - Calculation result format
   - Auto-save calculations

3. **Notification Preferences:**
   - Email notifications (on/off)
   - Calculation completion notifications
   - System update notifications

**Storage:**

- Preferences stored in user profile
- Preferences synced across devices
- Default preferences applied for new users

**Priority:** Low

---

### IX.4.3 Account Management / Quản lý tài khoản

**EN:** System must provide account management features (deletion, data export).

**VI:** Hệ thống phải cung cấp tính năng quản lý tài khoản (xóa, xuất dữ liệu).

**Account Deletion:**

1. **User-Initiated Deletion:**
   - User requests account deletion
   - System requires password confirmation
   - System provides data export option before deletion
   - Account marked for deletion (soft delete)
   - Data deleted after retention period (30 days)

2. **Admin-Initiated Deletion:**
   - Admin can delete user accounts
   - Requires audit logging
   - Same soft delete process

**Data Export:**

1. **User Data Export:**
   - User can request data export (GDPR-like right to access)
   - Export includes: profile, calculations, projects, preferences
   - Export format: JSON or CSV
   - Export delivered via secure download link (expires in 7 days)

2. **Data Retention After Deletion:**
   - Soft delete: 30 days retention
   - Hard delete: Complete removal after retention period
   - Audit logs retained per compliance requirements

**Security Requirements:**

- Account deletion requires authentication
- Data export requires authentication
- Deletion operations logged (audit trail)
- Data export links expire after 7 days

**Priority:** High

---

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_03` (Authorization & RBAC)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_05` (API Security)







