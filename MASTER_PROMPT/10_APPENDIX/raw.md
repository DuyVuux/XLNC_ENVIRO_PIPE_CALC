# Phần X. APPENDIX — Phụ lục

**Version:** 1.0  
**Last Updated:** 2024  
**Purpose:** Quick reference guides, lookup tables, code templates, and troubleshooting guides for rapid development and problem-solving.

---

## X.0 Header / Tiêu đề

**EN:** This section provides quick reference materials, lookup tables, code templates, API endpoint references, error codes, troubleshooting guides, and compliance checklists for the XLNC Automated Water Treatment Calculation System.

**VI:** Phần này cung cấp tài liệu tra cứu nhanh, bảng tra cứu, mẫu code, tham chiếu API endpoints, mã lỗi, hướng dẫn xử lý sự cố, và checklist tuân thủ cho Hệ thống Tính toán Tự động Xử lý Nước XLNC.

**Priority:** Medium (Reference material)

---

## X.1 Quick Reference Guides / Hướng dẫn tra cứu nhanh

### X.1.1 Module Input/Output Quick Reference / Tra cứu nhanh Input/Output Module

**EN:** Quick lookup table for all module inputs and outputs.

**VI:** Bảng tra cứu nhanh cho tất cả input và output của module.

**Module 1 - Pipeline Hydraulics:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Pipe diameter | D | m | > 0 | Yes |
| Pipe length | L | m | > 0 | Yes |
| Pipe roughness | ε | m | 0.0000015 - 0.003 | Yes |
| Temperature | t | °C | 0 - 100 | Yes |
| Local loss coefficient | β | - | ≥ 0 | No |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Velocity | v | m/s | Flow velocity |
| Reynolds number | Re | - | Flow regime indicator |
| Friction factor | λ | - | Darcy-Weisbach friction factor |
| Head loss | H | m | Total head loss |
| Required head | Hyc | m | Pump required head |

**Module 2 - Rainfall Aeration:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Temperature | t | °C | 0 - 100 | Yes |
| Fe²⁺ concentration | C_Fe | mg/l | ≥ 0 | Yes |
| H₂S concentration | C_H2S | mg/l | ≥ 0 | Yes |
| Initial dissolved oxygen | C_ban_đầu | mg/l | ≥ 0 | Yes |
| Aeration efficiency | η | - | 0.7 - 0.9 | No (default: 0.8) |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Saturated oxygen | C_ox | mg/l | Maximum dissolved oxygen |
| Total oxygen required | C_ht | mg/l | Total oxygen needed |
| Actual dissolved oxygen | C_thực | mg/l | Dissolved oxygen after aeration |
| Spray intensity | C_phun | m/h | Required spray intensity |
| Aeration tank area | F | m² | Required aeration area |

**Module 3 - Rapid Mixing/Reaction:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Mixing time | t | s, phút, h | 10s - 60 phút | Yes |
| Reaction type | - | - | Fast/Slow/Reaction | Yes |
| Initial concentration | C₀ | mg/l | ≥ 0 | Yes |
| Rate constant | k | l/mg·s | > 0 | No (default based on type) |

| Output | Symbol | Unit | Description |
|--------|------|------|-------------|
| Mixing tank volume | V | m³ | Required tank volume |
| Reaction rate | r | mg/l·s | Reaction rate |
| Final concentration | C | mg/l | Concentration after reaction |
| Reaction efficiency | η | % | Reaction efficiency |

**Module 4 - Sedimentation Tank:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Settling velocity | U_o | m/s | 0.0001 - 0.001 | Yes |
| Settling time | t_lắng | h, phút | 0.5 - 3 h | Yes |
| Tank type | - | - | Horizontal/Vertical/Inclined | Yes |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Surface loading rate | SLR | m³/m²·h | Surface loading rate |
| Settling area | F | m² | Required settling area |
| Tank volume | V | m³ | Required tank volume |
| Settling efficiency | η | % | Settling efficiency |

**Module 5 - Filtration:**

| Input | Symbol | Unit | Range | Required |
|-------|--------|------|-------|----------|
| Flowrate | Q | m³/s, m³/h, m³/ngày | > 0 | Yes |
| Filtration rate | v | m/h | 6 - 12 | Yes |
| Filter type | - | - | Gravity/Pressure | Yes |
| Backwash intensity | q | l/s·m² | 12 - 15 | No (default: 12) |
| Backwash duration | t_rửa | phút | 5 - 15 | No (default: 10) |

| Output | Symbol | Unit | Description |
|--------|--------|------|-------------|
| Filter area | F₁ | m² | Required filter area |
| Backwash flowrate | Q_rửa | m³/h | Backwash flowrate |
| Backwash volume | V_rửa | m³ | Backwash water volume |
| Head loss | H | m | Head loss through filter |

**Priority:** High

---

### X.1.2 Unit Conversion Quick Reference / Tra cứu nhanh chuyển đổi đơn vị

**EN:** Quick lookup table for common unit conversions.

**VI:** Bảng tra cứu nhanh cho các chuyển đổi đơn vị thường dùng.

**Flowrate Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m³/s | m³/h | 3600 |
| m³/s | m³/ngày | 86400 |
| m³/h | m³/ngày | 24 |
| m³/ngày | m³/s | 0.000011574 |
| m³/ngày | m³/h | 0.041667 |
| l/s | m³/s | 0.001 |
| l/s | m³/h | 3.6 |
| l/s | m³/ngày | 86.4 |

**Length Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m | mm | 1000 |
| m | cm | 100 |
| m | km | 0.001 |
| mm | m | 0.001 |
| cm | m | 0.01 |

**Time Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| s | phút | 0.016667 |
| s | h | 0.000278 |
| phút | s | 60 |
| phút | h | 0.016667 |
| h | s | 3600 |
| h | phút | 60 |

**Pressure/Head Conversions:**

| From | To | Multiply by |
|------|-----|------------|
| m | kPa | 9.81 |
| m | bar | 0.0981 |
| m | atm | 0.0968 |
| kPa | m | 0.102 |
| bar | m | 10.2 |

**Priority:** Medium

---

### X.1.3 Module Chain Quick Reference / Tra cứu nhanh chuỗi Module

**EN:** Quick lookup for valid module chains and their purposes.

**VI:** Tra cứu nhanh các chuỗi module hợp lệ và mục đích của chúng.

**Valid Module Chains:**

| Chain | Modules | Purpose | Use Case |
|-------|---------|---------|----------|
| 1→2→3→4→5 | Pipeline → Aeration → Mixing → Settling → Filtration | Complete treatment | Full water treatment plant |
| 1→3→4→5 | Pipeline → Mixing → Settling → Filtration | Treatment without aeration | Water with low Fe²⁺/H₂S |
| 1→2→4→5 | Pipeline → Aeration → Settling → Filtration | Treatment without mixing | Simple treatment |
| 1→4→5 | Pipeline → Settling → Filtration | Basic treatment | Pre-treated water |
| 1→5 | Pipeline → Filtration | Minimal treatment | High-quality source water |
| 2→3→4→5 | Aeration → Mixing → Settling → Filtration | Treatment without pipeline | Existing pipeline system |
| 3→4→5 | Mixing → Settling → Filtration | Chemical treatment | Chemical treatment only |
| 4→5 | Settling → Filtration | Physical treatment | Physical treatment only |

**Chain Selection Logic:**

- **If Fe²⁺ > 0.3 mg/l OR H₂S > 0.05 mg/l:** Include Module 2 (Aeration)
- **If chemical treatment needed:** Include Module 3 (Mixing)
- **If suspended solids > 10 mg/l:** Include Module 4 (Settling)
- **Always include Module 5 (Filtration)** for final treatment

**Priority:** High

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

## X.4 Code Templates & Examples / Mẫu code và ví dụ

### X.4.1 Backend API Endpoint Template / Mẫu API Endpoint Backend

**EN:** Template for creating new API endpoints.

**VI:** Mẫu để tạo API endpoint mới.

```python
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/api/v1/modules", tags=["modules"])

class CalculationInputs(BaseModel):
    Q: float
    D: float
    L: float
    t: float
    ε: float
    β: Optional[float] = None

@router.post("/{module_id}/calculate")
async def calculate_module(
    module_id: int,
    inputs: CalculationInputs,
    user: Optional[User] = Depends(get_current_user)
):
    try:
        # Validate inputs
        validate_inputs(inputs)
        
        # Perform calculation
        result = await calculate(module_id, inputs)
        
        # Log calculation
        log_calculation(module_id, inputs, result, user)
        
        return {
            "status": "success",
            "module_id": module_id,
            "inputs": inputs.dict(),
            "outputs": result
        }
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except CalculationError as e:
        raise HTTPException(status_code=500, detail=str(e))
```

**Priority:** Medium

---

### X.4.2 Frontend API Call Template / Mẫu gọi API Frontend

**EN:** Template for making API calls from frontend.

**VI:** Mẫu để gọi API từ frontend.

```typescript
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.xlnc.example.com';

interface CalculationInputs {
  Q: number;
  D: number;
  L: number;
  t: number;
  ε: number;
  β?: number;
}

interface CalculationResult {
  status: string;
  module_id: number;
  inputs: CalculationInputs;
  outputs: Record<string, any>;
}

export async function calculateModule(
  moduleId: number,
  inputs: CalculationInputs
): Promise<CalculationResult> {
  try {
    const response = await axios.post<CalculationResult>(
      `${API_BASE_URL}/api/v1/modules/${moduleId}/calculate`,
      inputs,
      {
        headers: {
          'Authorization': `Bearer ${getAccessToken()}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        // Token expired, refresh and retry
        await refreshToken();
        return calculateModule(moduleId, inputs);
      }
      throw new Error(error.response?.data?.detail || 'Calculation failed');
    }
    throw error;
  }
}
```

**Priority:** Medium

---

### X.4.3 Unit Conversion Template / Mẫu chuyển đổi đơn vị

**EN:** Template for unit conversion functions.

**VI:** Mẫu cho hàm chuyển đổi đơn vị.

```python
from enum import Enum
from typing import Dict

class FlowrateUnit(str, Enum):
    M3_S = "m³/s"
    M3_H = "m³/h"
    M3_DAY = "m³/ngày"
    L_S = "l/s"

CONVERSION_FACTORS: Dict[tuple, float] = {
    (FlowrateUnit.M3_S, FlowrateUnit.M3_H): 3600,
    (FlowrateUnit.M3_S, FlowrateUnit.M3_DAY): 86400,
    (FlowrateUnit.M3_H, FlowrateUnit.M3_DAY): 24,
    (FlowrateUnit.L_S, FlowrateUnit.M3_S): 0.001,
    (FlowrateUnit.L_S, FlowrateUnit.M3_H): 3.6,
}

def convert_flowrate(value: float, from_unit: FlowrateUnit, to_unit: FlowrateUnit) -> float:
    if from_unit == to_unit:
        return value
    
    if (from_unit, to_unit) in CONVERSION_FACTORS:
        return value * CONVERSION_FACTORS[(from_unit, to_unit)]
    
    if (to_unit, from_unit) in CONVERSION_FACTORS:
        return value / CONVERSION_FACTORS[(to_unit, from_unit)]
    
    raise ValueError(f"Cannot convert from {from_unit} to {to_unit}")
```

**Priority:** Medium

---

## X.5 Formulas Quick Lookup / Tra cứu nhanh công thức

### X.5.1 Module 1 Formulas / Công thức Module 1

**EN:** Quick reference for Module 1 (Pipeline) formulas.

**VI:** Tra cứu nhanh công thức Module 1 (Đường ống).

**Velocity:**
```
v = 4Q / (πD²)
```

**Reynolds Number:**
```
Re = vD / ν
```

**Friction Factor (Colebrook-White):**
```
1/√λ = -2 log₁₀(ε/(3.7D) + 2.51/(Re√λ))
```

**Head Loss (Darcy-Weisbach):**
```
H = λ(L/D)(v²/(2g)) + Σ(β)(v²/(2g))
```

**Required Head:**
```
Hyc = H + H_static + H_safety
```

**Priority:** High

---

### X.5.2 Module 2 Formulas / Công thức Module 2

**EN:** Quick reference for Module 2 (Aeration) formulas.

**VI:** Tra cứu nhanh công thức Module 2 (Giàn phun mưa).

**Saturated Oxygen:**
```
C_ox = 468 / (31.6 + t)
```

**Total Oxygen Required:**
```
C_ht = 0.143 × C_Fe + 0.5 × C_H2S + (C_ox - C_ban_đầu)
```

**Actual Dissolved Oxygen:**
```
C_thực = C_ban_đầu + η × (C_ox - C_ban_đầu)
```

**Spray Intensity:**
```
C_phun = C_ht / (η × C_ox)
```

**Aeration Area:**
```
F = Q / C_phun
```

**Priority:** High

---

### X.5.3 Module 3 Formulas / Công thức Module 3

**EN:** Quick reference for Module 3 (Mixing) formulas.

**VI:** Tra cứu nhanh công thức Module 3 (Ngăn trộn).

**Mixing Tank Volume:**
```
V = Q × t
```

**Reaction Rate:**
```
r = k × [A] × [B]
```

**Final Concentration:**
```
C = C₀ × e^(-kt)
```

**Reaction Efficiency:**
```
η = (C₀ - C) / C₀ × 100%
```

**Priority:** High

---

### X.5.4 Module 4 Formulas / Công thức Module 4

**EN:** Quick reference for Module 4 (Settling) formulas.

**VI:** Tra cứu nhanh công thức Module 4 (Bể lắng).

**Surface Loading Rate:**
```
SLR = Q / F
```

**Settling Area:**
```
F = Q / (U_o × 3600)
```

**Tank Volume:**
```
V = Q × t_lắng
```

**Settling Efficiency:**
```
η = (U_o / SLR) × 100%
```

**Priority:** High

---

### X.5.5 Module 5 Formulas / Công thức Module 5

**EN:** Quick reference for Module 5 (Filtration) formulas.

**VI:** Tra cứu nhanh công thức Module 5 (Bể lọc).

**Filter Area:**
```
F₁ = Q / v
```

**Backwash Flowrate:**
```
Q_rửa = q × F₁ × 3.6
```

**Backwash Volume:**
```
V_rửa = Q_rửa × t_rửa / 60
```

**Head Loss:**
```
H = f₁ × (v² / (2g))
```

**Priority:** High

---

## X.6 Standards & Compliance Checklist / Checklist tiêu chuẩn và tuân thủ

### X.6.1 TCVN Standards Checklist / Checklist tiêu chuẩn TCVN

**EN:** Checklist for TCVN standards compliance.

**VI:** Checklist tuân thủ tiêu chuẩn TCVN.

**TCVN 33-2006 (Water Supply Systems):**
- [ ] Pipeline design follows TCVN 33-2006
- [ ] Pipe roughness values from TCVN tables
- [ ] Filtration rate: 6-10 m/h (TCVN 33-2006)
- [ ] Backwash intensity: 12-15 l/s·m² (TCVN 33-2006)
- [ ] Water quality parameters within TCVN limits

**TCVN 7222:2002 (Water Treatment):**
- [ ] Mixing time: 10-30s (fast), 20-40 min (slow)
- [ ] Settling time: 1.5-3h (horizontal), 1-2h (vertical)
- [ ] Aeration efficiency: 0.7-0.9
- [ ] Reaction efficiency meets TCVN requirements

**TCVN 9113:2012 (Pipe Materials):**
- [ ] Pipe material selection follows TCVN 9113:2012
- [ ] Pipe roughness values from TCVN 9113:2012 tables

**Priority:** High

---

### X.6.2 QCVN Compliance Checklist / Checklist tuân thủ QCVN

**EN:** Checklist for QCVN regulatory limits compliance.

**VI:** Checklist tuân thủ giới hạn quy định QCVN.

**QCVN 01:2009/BYT (Drinking Water Quality):**
- [ ] Fe²⁺ < 0.3 mg/l (after treatment)
- [ ] H₂S < 0.05 mg/l (after treatment)
- [ ] Turbidity < 2 NTU (after filtration)
- [ ] pH: 6.5 - 8.5
- [ ] Coliform: 0 CFU/100ml

**QCVN 08:2015/BTNMT (Surface Water Quality):**
- [ ] Input water quality checked against QCVN 08:2015
- [ ] Treatment designed to meet QCVN 01:2009 output

**Priority:** High

---

### X.6.3 NĐ 13/2023 Compliance Checklist / Checklist tuân thủ NĐ 13/2023

**EN:** Checklist for Vietnamese Personal Data Protection Decree compliance.

**VI:** Checklist tuân thủ Nghị định 13/2023 về Bảo vệ Dữ liệu Cá nhân.

**Data Collection:**
- [ ] Collect only necessary personal data
- [ ] Obtain explicit consent before collection
- [ ] Document purpose of data collection
- [ ] Provide privacy policy in Vietnamese

**Data Storage:**
- [ ] Encrypt PII at rest (AES-256)
- [ ] Limit access to authorized personnel
- [ ] Implement data retention policies (30 days after deletion)

**Data Processing:**
- [ ] Process data only for stated purposes
- [ ] Do not share with third parties without consent
- [ ] Mask PII in logs

**User Rights:**
- [ ] Right to access: Users can request their data
- [ ] Right to correction: Users can correct their data
- [ ] Right to deletion: Users can request data deletion
- [ ] Right to object: Users can object to data processing

**Data Breach:**
- [ ] Report data breaches to authorities within 72 hours
- [ ] Notify affected users within 24 hours
- [ ] Document breach and remediation actions

**Priority:** Critical

---

### X.6.4 Security Compliance Checklist / Checklist tuân thủ bảo mật

**EN:** Checklist for security compliance.

**VI:** Checklist tuân thủ bảo mật.

**Authentication:**
- [ ] JWT-based authentication implemented
- [ ] Access token expires in 15 minutes
- [ ] Refresh token expires in 7 days
- [ ] Password hashing: bcrypt (cost factor 12)
- [ ] Account lockout after 5 failed attempts

**Authorization:**
- [ ] RBAC implemented (guest, engineer, admin)
- [ ] Resource ownership checks enforced
- [ ] Guest access limitations enforced

**API Security:**
- [ ] HTTPS mandatory (TLS 1.2+)
- [ ] Rate limiting implemented
- [ ] CORS policy configured
- [ ] Input validation and sanitization
- [ ] OWASP Top 10 protection

**Data Security:**
- [ ] Encryption at rest (AES-256)
- [ ] Encryption in transit (HTTPS/TLS)
- [ ] PII masking in logs
- [ ] Secure key management

**Priority:** Critical

---

## X.7 Conclusion — Kết luận

**EN:**

This appendix provides quick reference materials for rapid development and problem-solving in the XLNC Automated Water Treatment Calculation System. It includes:

- **Quick Reference Guides:** Module I/O, unit conversions, module chains
- **API Endpoint Reference:** Complete list of all API endpoints
- **Error Codes & Troubleshooting:** HTTP status codes, application error codes, troubleshooting guide
- **Code Templates & Examples:** Backend API templates, frontend API call templates, unit conversion templates
- **Formulas Quick Lookup:** All formulas for all 5 modules
- **Standards & Compliance Checklists:** TCVN, QCVN, NĐ 13/2023, Security compliance checklists

This appendix should be used as a quick lookup reference when implementing features, debugging issues, or ensuring compliance with standards and regulations.

**VI:**

Phụ lục này cung cấp tài liệu tra cứu nhanh cho phát triển nhanh và xử lý sự cố trong Hệ thống Tính toán Tự động Xử lý Nước XLNC. Nó bao gồm:

- **Hướng dẫn tra cứu nhanh:** I/O module, chuyển đổi đơn vị, chuỗi module
- **Tham chiếu API Endpoint:** Danh sách đầy đủ tất cả API endpoints
- **Mã lỗi và xử lý sự cố:** Mã trạng thái HTTP, mã lỗi ứng dụng, hướng dẫn xử lý sự cố
- **Mẫu code và ví dụ:** Mẫu API backend, mẫu gọi API frontend, mẫu chuyển đổi đơn vị
- **Tra cứu nhanh công thức:** Tất cả công thức cho 5 module
- **Checklist tiêu chuẩn và tuân thủ:** TCVN, QCVN, NĐ 13/2023, checklist tuân thủ bảo mật

Phụ lục này nên được sử dụng như tài liệu tra cứu nhanh khi triển khai tính năng, gỡ lỗi, hoặc đảm bảo tuân thủ tiêu chuẩn và quy định.

**Hóa phàm:**

Phụ lục này là bảng tra cứu nhanh cho tất cả thông tin cần thiết: công thức, API, mã lỗi, mẫu code, và checklist tuân thủ. Sử dụng khi cần tra cứu nhanh trong quá trình phát triển.

---

**KẾT THÚC PHẦN X. APPENDIX**

*Phần này cung cấp tài liệu tra cứu nhanh, bảng tra cứu, mẫu code, tham chiếu API, mã lỗi, và checklist tuân thủ cho hệ thống tính toán tự động xử lý nước XLNC.*

---






