import math
from typing import Dict, Any
from datetime import datetime
from app.modules.settling_tank.schemas import SettlingTankInput, SettlingTankOutput


def calculate_settling_tank(input_data: SettlingTankInput) -> SettlingTankOutput:
    Q = input_data.Q
    
    if input_data.Q_unit == "m3/h":
        Q = Q / 3600
    elif input_data.Q_unit == "m3/day":
        Q = Q / 86400
    
    Q_m3_per_h = Q * 3600
    Q1 = input_data.alpha_safety * Q_m3_per_h / 3600
    
    alpha_rad = math.radians(input_data.alpha)
    H = input_data.H_0 / math.cos(alpha_rad)
    
    F = Q1 / (input_data.U_o * H * math.cos(alpha_rad) + input_data.W * (math.cos(alpha_rad) ** 2))
    
    V = F * H
    
    v = Q1 * 3600 / F
    
    t_lang = V / Q1
    
    eta = (input_data.U_o / (v / 3600)) * 100 if v > 0 else 0.0
    
    calculation_id = f"{datetime.now().strftime('%Y%m%d')}-M4-0001"
    
    outputs = {
        "Q1": {"value": round(Q1 * 3600, 2), "unit": "m3/h", "note": "Công suất nước vào bể lắng"},
        "H": {"value": round(H, 3), "unit": "m", "note": "Chiều cao khối trụ lắng nghiêng"},
        "F": {"value": round(F, 2), "unit": "m2", "note": "Diện tích mặt bằng cần thiết"},
        "V": {"value": round(V, 3), "unit": "m3", "note": "Thể tích bể lắng"},
        "v": {"value": round(v, 2), "unit": "m/h", "note": "Tốc độ lắng bề mặt"},
        "t_lang": {"value": round(t_lang, 2), "unit": "h", "note": "Thời gian lắng"},
        "eta": {"value": round(eta, 1), "unit": "%", "note": "Hiệu suất lắng"}
    }
    
    intermediates = {
        "alpha_rad": {"value": round(alpha_rad, 4), "unit": "rad", "note": f"Góc nghiêng {input_data.alpha}° tính bằng radian"},
        "cos_alpha": {"value": round(math.cos(alpha_rad), 4), "unit": "dimensionless", "note": "cos(α)"}
    }
    
    safety_checks = {
        "t_lang_check": {
            "status": "PASS" if 1.5 <= t_lang <= 3.0 else "WARNING",
            "limit_min": 1.5,
            "limit_max": 3.0,
            "unit": "h",
            "actual": round(t_lang, 2),
            "note": f"Thời gian lắng {round(t_lang, 2)} h {'trong' if 1.5 <= t_lang <= 3.0 else 'ngoài'} khoảng 1.5-3 h cho bể lắng ngang"
        },
        "v_check": {
            "status": "PASS" if v <= 1.0 else "WARNING",
            "limit": 1.0,
            "unit": "m/h",
            "actual": round(v, 2),
            "note": f"Tốc độ lắng bề mặt {round(v, 2)} m/h {'≤' if v <= 1.0 else '>'} 1.0 m/h (khuyến nghị)"
        }
    }
    
    warnings = []
    if t_lang < 1.5 or t_lang > 3.0:
        warnings.append(f"Thời gian lắng {round(t_lang, 2)} h ngoài khoảng khuyến nghị 1.5-3 h")
    
    if v > 1.0:
        warnings.append(f"Tốc độ lắng bề mặt {round(v, 2)} m/h > 1.0 m/h - Có thể giảm hiệu suất lắng")
    
    technical_report = {
        "summary": {
            "en": f"Calculated settling tank area F = {round(F, 2)} m² and volume V = {round(V, 3)} m³ for flow Q₁ = {round(Q1 * 3600, 2)} m³/h. Settling time t_lắng = {round(t_lang, 2)} h, settling efficiency η = {round(eta, 1)}%.",
            "vi": f"Tính được diện tích bể lắng F = {round(F, 2)} m² và thể tích V = {round(V, 3)} m³ cho lưu lượng Q₁ = {round(Q1 * 3600, 2)} m³/h. Thời gian lắng t_lắng = {round(t_lang, 2)} h, hiệu suất lắng η = {round(eta, 1)}%."
        },
        "assumptions": [
            f"Lưu lượng Q = {Q} m³/s",
            f"Tốc độ lắng U_o = {input_data.U_o} m/s",
            f"Góc nghiêng α = {input_data.alpha}°",
            f"Hệ số an toàn α = {input_data.alpha_safety}"
        ],
        "safety_flags": warnings.copy(),
        "next_steps": [
            "Chuyển Module 5 (Bể lọc) để tính toán lọc nước",
            "Kiểm tra hiệu suất lắng trong thực tế"
        ],
        "references": [
            "TCVN 7222:2002: Hệ thống xử lý nước thải công nghiệp",
            "TCVN 33-2006: Tiêu chuẩn thiết kế cấp nước"
        ]
    }
    
    return SettlingTankOutput(
        calculation_id=calculation_id,
        timestamp=datetime.utcnow(),
        prompt_version="MASTER_PROMPT.md v1.0",
        module="settling-tank",
        module_version="Module 4 v1.2",
        formula_set_version="TCVN 7222:2002, TCVN 33-2006",
        inputs=input_data.model_dump(),
        outputs=outputs,
        intermediates=intermediates,
        safety_checks=safety_checks,
        confidence=0.92,
        warnings=warnings if warnings else None,
        technical_report=technical_report
    )



