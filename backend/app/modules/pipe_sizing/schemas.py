from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class PipeSizingInput(BaseModel):
    Q: float = Field(..., description="Flow rate (m³/s)", gt=0)
    Q_unit: str = Field("m3/s", description="Flow rate unit: m3/s, m3/h, m3/day")
    L: float = Field(..., description="Pipe length (m)", gt=0)
    t: float = Field(20.0, description="Water temperature (°C)", ge=0, le=100)
    Hc: float = Field(..., description="Height difference (m)", ge=0)
    epsilon: float = Field(0.0001, description="Pipe roughness (m)", gt=0)
    beta: float = Field(2.5, description="Local loss coefficient", gt=0)
    material: str = Field("PVC", description="Pipe material")


class PipeSizingOutput(BaseModel):
    calculation_id: str
    timestamp: datetime
    prompt_version: str
    module: str
    module_version: str
    formula_set_version: str
    inputs: Dict[str, Any]
    outputs: Dict[str, Any]
    intermediates: Optional[Dict[str, Any]] = None
    safety_checks: Optional[Dict[str, Any]] = None
    confidence: float
    warnings: Optional[list] = None
    technical_report: Optional[Dict[str, Any]] = None




