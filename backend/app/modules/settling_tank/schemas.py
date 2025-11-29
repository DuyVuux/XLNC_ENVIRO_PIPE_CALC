from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class SettlingTankInput(BaseModel):
    Q: float = Field(..., description="Flow rate (m³/s)", gt=0)
    Q_unit: str = Field("m3/s", description="Flow rate unit: m3/s, m3/h, m3/day")
    U_o: float = Field(0.00025, description="Settling velocity (m/s)", gt=0)
    alpha: float = Field(60.0, description="Inclined angle (degrees)", ge=0, le=90)
    H_0: float = Field(0.9, description="Actual height (m)", gt=0)
    W: float = Field(0.05, description="Tube width (m)", gt=0)
    alpha_safety: float = Field(1.05, description="Safety factor", gt=0)


class SettlingTankOutput(BaseModel):
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




