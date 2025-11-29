from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class MixingReactionInput(BaseModel):
    Q: float = Field(..., description="Flow rate (m³/s)", gt=0)
    Q_unit: str = Field("m3/s", description="Flow rate unit: m3/s, m3/h, m3/day")
    t: float = Field(..., description="Mixing time", gt=0)
    t_unit: str = Field("minute", description="Time unit: second, minute, hour")
    Fe2_plus_0: float = Field(0.0, description="Initial Fe²⁺ concentration (mg/L)", ge=0)
    H2S_0: float = Field(0.0, description="Initial H₂S concentration (mg/L)", ge=0)
    k_Fe: float = Field(0.18, description="Fe²⁺ reaction rate constant (L/mg·s)", gt=0)
    k_H2S: float = Field(0.25, description="H₂S reaction rate constant (L/mg·s)", gt=0)
    O2: float = Field(..., description="Dissolved oxygen concentration (mg/L)", gt=0)
    ty_le_kich_thuoc: str = Field("L:W:H = 2:1:1", description="Tank dimension ratio")


class MixingReactionOutput(BaseModel):
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




