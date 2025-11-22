from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class SprayAerationInput(BaseModel):
    Q: float = Field(..., description="Flow rate (m³/s)", gt=0)
    Q_unit: str = Field("m3/s", description="Flow rate unit: m3/s, m3/h, m3/day")
    t: float = Field(20.0, description="Water temperature (°C)", ge=0, le=100)
    C_Fe2_plus: float = Field(0.0, description="Initial Fe²⁺ concentration (mg/L)", ge=0)
    C_H2S: float = Field(0.0, description="Initial H₂S concentration (mg/L)", ge=0)
    A: float = Field(..., description="Spray area (m²)", gt=0)
    eta: float = Field(0.8, description="Aeration efficiency", ge=0.7, le=0.9)


class SprayAerationOutput(BaseModel):
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

