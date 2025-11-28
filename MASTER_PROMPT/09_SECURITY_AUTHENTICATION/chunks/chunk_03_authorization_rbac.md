# Chunk 03: Authorization & RBAC / Phân quyền và kiểm soát truy cập

**Chunk ID:** `09_SECURITY_AUTHENTICATION_chunk_03`  
**Section:** IX.3 Authorization & RBAC - IX.3.1 to IX.3.4  
**Word Count:** ~800 words  
**Retrieval Keywords:** authorization, RBAC, role-based access control, user roles, guest role, engineer role, admin role, permissions, permission model, resource ownership, access control  
**Related Chunks:** `09_SECURITY_AUTHENTICATION_chunk_02`, `09_SECURITY_AUTHENTICATION_chunk_04`  
**Canonical Summary Reference:** `09_SECURITY_AUTHENTICATION_summary_section_3`

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

**Permission Examples:**
- `read:calculations` - Can view calculations
- `create:calculations` - Can create calculations
- `update:calculations` - Can modify calculations
- `delete:calculations` - Can delete calculations
- `read:users` - Can view user list (admin only)
- `manage:roles` - Can assign roles (admin only)

**Permission Enforcement:**

1. **API Level:**
   - Check user permissions before processing request
   - Return 403 Forbidden if permission denied
   - Log all permission checks (audit trail)

2. **Frontend Level:**
   - Hide UI elements based on permissions
   - Disable actions user cannot perform
   - Show appropriate error messages

**Priority:** High

---

### IX.3.4 Resource Ownership / Quyền sở hữu tài nguyên

**EN:** System must enforce resource ownership to ensure users can only access their own resources (unless shared).

**VI:** Hệ thống phải thực thi quyền sở hữu tài nguyên để đảm bảo người dùng chỉ có thể truy cập tài nguyên của họ (trừ khi được chia sẻ).

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

**Ownership Checks:**

```python
# Example: Ownership check
async def check_ownership(resource_id: str, user_id: str, resource_type: str):
    resource = await get_resource(resource_id, resource_type)
    if resource.owner_id != user_id:
        raise PermissionError("User does not own this resource")
    return resource
```

**Priority:** High

---

**Previous Chunk:** `09_SECURITY_AUTHENTICATION_chunk_02` (Authentication)  
**Next Chunk:** `09_SECURITY_AUTHENTICATION_chunk_04` (User Management)






