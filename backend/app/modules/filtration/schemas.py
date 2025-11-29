from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime


class FiltrationInput(BaseModel):
    Q: float = Field(..., description="Flow rate (m³/s)", gt=0)
    Q_unit: str = Field("m3/s", description="Flow rate unit: m3/s, m3/h, m3/day")
    v: float = Field(8.0, description="Filtration velocity (m/h)", ge=6, le=10)
    q: float = Field(13.5, description="Backwash intensity (l/s·m²)", ge=12, le=15)
    t_rua: float = Field(5.0, description="Backwash time (minutes)", gt=0)
    n: int = Field(1, description="Number of filter cells", ge=1)
    h1: float = Field(0.40, description="Bottom collection height (m)", gt=0)
    h2: float = Field(0.20, description="Filter plate height (m)", gt=0)
    h3: float = Field(0.10, description="Support layer height (m)", gt=0)
    h4: float = Field(0.80, description="Filter media height (m)", gt=0)
    h5: float = Field(0.50, description="Water layer height (m)", gt=0)
    h6: float = Field(0.20, description="Top plate height (m)", gt=0)
    h8: float = Field(0.80, description="Protection height (m)", gt=0)


class FiltrationOutput(BaseModel):
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




