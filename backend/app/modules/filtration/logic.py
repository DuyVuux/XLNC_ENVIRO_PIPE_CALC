import math
from typing import Dict, Any
from datetime import datetime
from app.modules.filtration.schemas import FiltrationInput, FiltrationOutput


def calculate_filtration(input_data: FiltrationInput) -> FiltrationOutput:
    Q = input_data.Q
    
    if input_data.Q_unit == "m3/h":
        Q = Q / 3600
    elif input_data.Q_unit == "m3/day":
        Q = Q / 86400
    
    Q_m3_per_h = Q * 3600
    
    f1 = Q_m3_per_h / input_data.v
    
    f1_prime = f1 / input_data.n
    
    D = math.sqrt(4 * f1_prime / math.pi)
    
    F1 = f1
    
    v_thuc = Q_m3_per_h / F1
    
    h7 = (60 * input_data.q * input_data.t_rua) / (input_data.n * 100)
    
    H = input_data.h1 + input_data.h2 + input_data.h3 + input_data.h4 + input_data.h5 + input_data.h6 + h7 + input_data.h8
    
    Q_rua = input_data.q * F1 / 1000
    
    calculation_id = f"{datetime.now().strftime('%Y%m%d')}-M5-0001"
    
    outputs = {
        "f1": {"value": round(f1, 2), "unit": "m2", "note": "Diện tích bể lọc"},
        "f1_prime": {"value": round(f1_prime, 2), "unit": "m2", "note": "Diện tích mỗi ngăn bể"},
        "D": {"value": round(D, 2), "unit": "m", "note": "Đường kính bể"},
        "F1": {"value": round(F1, 2), "unit": "m2", "note": "Diện tích lọc thực tế"},
        "v_thuc": {"value": round(v_thuc, 2), "unit": "m/h", "note": "Vận tốc lọc thực tế"},
        "h7": {"value": round(h7, 2), "unit": "m", "note": "Chiều cao két rửa"},
        "H": {"value": round(H, 3), "unit": "m", "note": "Tổng chiều cao bể lọc"},
        "Q_rua": {"value": round(Q_rua, 2), "unit": "m3/h", "note": "Lưu lượng nước rửa lọc"}
    }
    
    intermediates = {
        "Q_m3_per_h": {"value": round(Q_m3_per_h, 2), "unit": "m3/h", "note": "Lưu lượng tính bằng m³/h"}
    }
    
    safety_checks = {
        "v_check": {
            "status": "PASS" if 6 <= v_thuc <= 10 else "WARNING",
            "limit_min": 6,
            "limit_max": 10,
            "unit": "m/h",
            "actual": round(v_thuc, 2),
            "note": f"Vận tốc lọc {round(v_thuc, 2)} m/h {'trong' if 6 <= v_thuc <= 10 else 'ngoài'} khoảng 6-10 m/h (TCVN 33-2006)"
        },
        "q_check": {
            "status": "PASS" if 12 <= input_data.q <= 15 else "WARNING",
            "limit_min": 12,
            "limit_max": 15,
            "unit": "l/s·m²",
            "actual": input_data.q,
            "note": f"Cường độ rửa lọc {input_data.q} l/s·m² {'trong' if 12 <= input_data.q <= 15 else 'ngoài'} khoảng 12-15 l/s·m² (TCVN 33-2006)"
        }
    }
    
    warnings = []
    if v_thuc < 6 or v_thuc > 10:
        warnings.append(f"Vận tốc lọc {round(v_thuc, 2)} m/h ngoài khoảng khuyến nghị 6-10 m/h (TCVN 33-2006)")
    
    if input_data.q < 12 or input_data.q > 15:
        warnings.append(f"Cường độ rửa lọc {input_data.q} l/s·m² ngoài khoảng khuyến nghị 12-15 l/s·m² (TCVN 33-2006)")
    
    technical_report = {
        "summary": {
            "en": f"Calculated filter area f₁ = {round(f1, 2)} m² and tank diameter D = {round(D, 2)} m for flow Q = {round(Q_m3_per_h, 2)} m³/h. Actual filtration velocity v = {round(v_thuc, 2)} m/h. Total filter height H = {round(H, 3)} m.",
            "vi": f"Tính được diện tích lọc f₁ = {round(f1, 2)} m² và đường kính bể D = {round(D, 2)} m cho lưu lượng Q = {round(Q_m3_per_h, 2)} m³/h. Vận tốc lọc thực tế v = {round(v_thuc, 2)} m/h. Tổng chiều cao bể lọc H = {round(H, 3)} m."
        },
        "assumptions": [
            f"Lưu lượng Q = {Q} m³/s",
            f"Vận tốc lọc v = {input_data.v} m/h",
            f"Cường độ rửa lọc q = {input_data.q} l/s·m²",
            f"Số ngăn bể n = {input_data.n}"
        ],
        "safety_flags": warnings.copy(),
        "next_steps": [
            "Kiểm tra tổn thất áp lực qua lớp lọc",
            "Xác định chu kỳ lọc dựa trên chất lượng nước vào"
        ],
        "references": [
            "TCVN 33-2006: Tiêu chuẩn thiết kế cấp nước",
            "Vận tốc lọc khuyến nghị: 6-10 m/h",
            "Cường độ rửa lọc khuyến nghị: 12-15 l/s·m²"
        ]
    }
    
    return FiltrationOutput(
        calculation_id=calculation_id,
        timestamp=datetime.utcnow(),
        prompt_version="MASTER_PROMPT.md v1.0",
        module="filtration",
        module_version="Module 5 v1.2",
        formula_set_version="TCVN 33-2006",
        inputs=input_data.model_dump(),
        outputs=outputs,
        intermediates=intermediates,
        safety_checks=safety_checks,
        confidence=0.92,
        warnings=warnings if warnings else None,
        technical_report=technical_report
    )



