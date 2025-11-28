# Chunk 04: Code Templates & Examples / Mẫu code và ví dụ

**Chunk ID:** `10_APPENDIX_chunk_04`  
**Section:** X.4 Code Templates & Examples - X.4.1 to X.4.3  
**Word Count:** ~600 words  
**Retrieval Keywords:** code templates, code examples, backend template, frontend template, API endpoint template, unit conversion template, FastAPI, React, TypeScript, Python  
**Related Chunks:** `10_APPENDIX_chunk_03`, `10_APPENDIX_chunk_05`  
**Canonical Summary Reference:** `10_APPENDIX_summary_section_4`

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

**Previous Chunk:** `10_APPENDIX_chunk_03` (Error Codes & Troubleshooting)  
**Next Chunk:** `10_APPENDIX_chunk_05` (Formulas Quick Lookup)






