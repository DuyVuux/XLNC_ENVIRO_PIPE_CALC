# Chunk 02: API Endpoint Reference / Tham chiếu API Endpoint

**Chunk ID:** `10_APPENDIX_chunk_02`  
**Section:** X.2 API Endpoint Reference - X.2.1 to X.2.4  
**Word Count:** ~400 words  
**Retrieval Keywords:** API endpoints, REST API, authentication endpoints, calculation endpoints, project endpoints, documentation endpoints, API reference  
**Related Chunks:** `10_APPENDIX_chunk_01`, `10_APPENDIX_chunk_03`  
**Canonical Summary Reference:** `10_APPENDIX_summary_section_2`

---

## X.2 API Endpoint Reference / Tham chiếu API Endpoint

### X.2.1 Authentication Endpoints / Endpoints xác thực

**EN:** API endpoints for authentication and user management.

**VI:** API endpoints cho xác thực và quản lý người dùng.

**Authentication:**

```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
POST /api/v1/auth/refresh
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
GET  /api/v1/auth/verify-email
GET  /api/v1/auth/me
```

**User Management:**

```
GET    /api/v1/users/profile
PUT    /api/v1/users/profile
DELETE /api/v1/users/account
GET    /api/v1/users/preferences
PUT    /api/v1/users/preferences
GET    /api/v1/users/export-data
```

**Priority:** High

---

### X.2.2 Calculation Endpoints / Endpoints tính toán

**EN:** API endpoints for module calculations.

**VI:** API endpoints cho tính toán module.

**Single Module Calculation:**

```
POST /api/v1/modules/{module_id}/calculate
GET  /api/v1/modules/{module_id}/formulas
GET  /api/v1/modules/{module_id}/requirements
```

**Module Chain Calculation:**

```
POST /api/v1/module-chains/calculate
POST /api/v1/module-chains/recommend
GET  /api/v1/module-chains/valid-chains
```

**Calculation History:**

```
GET  /api/v1/calculations
GET  /api/v1/calculations/{calculation_id}
PUT  /api/v1/calculations/{calculation_id}
DELETE /api/v1/calculations/{calculation_id}
POST /api/v1/calculations/{calculation_id}/export
```

**Priority:** High

---

### X.2.3 Project Endpoints / Endpoints dự án

**EN:** API endpoints for project management.

**VI:** API endpoints cho quản lý dự án.

```
GET    /api/v1/projects
POST   /api/v1/projects
GET    /api/v1/projects/{project_id}
PUT    /api/v1/projects/{project_id}
DELETE /api/v1/projects/{project_id}
GET    /api/v1/projects/{project_id}/calculations
POST   /api/v1/projects/{project_id}/calculations
```

**Priority:** Medium

---

### X.2.4 Documentation Endpoints / Endpoints tài liệu

**EN:** API endpoints for documentation and help.

**VI:** API endpoints cho tài liệu và trợ giúp.

```
GET /api/v1/docs
GET /api/v1/docs/modules/{module_id}
GET /api/v1/docs/standards
GET /api/v1/docs/glossary
GET /api/v1/docs/examples
```

**Priority:** Low

---

**Previous Chunk:** `10_APPENDIX_chunk_01` (Header & Quick Reference Guides)  
**Next Chunk:** `10_APPENDIX_chunk_03` (Error Codes & Troubleshooting)







