import math
from typing import Dict, Any
from datetime import datetime
from app.modules.mixing_reaction.schemas import MixingReactionInput, MixingReactionOutput


def calculate_mixing_reaction(input_data: MixingReactionInput) -> MixingReactionOutput:
    Q = input_data.Q
    
    if input_data.Q_unit == "m3/h":
        Q = Q / 3600
    elif input_data.Q_unit == "m3/day":
        Q = Q / 86400
    
    t = input_data.t
    if input_data.t_unit == "minute":
        t_s = t * 60
    elif input_data.t_unit == "hour":
        t_s = t * 3600
    else:
        t_s = t
    
    V = Q * t_s
    
    ratio_parts = input_data.ty_le_kich_thuoc.replace("L:W:H =", "").strip().split(":")
    L_ratio = float(ratio_parts[0].strip())
    W_ratio = float(ratio_parts[1].strip())
    H_ratio = float(ratio_parts[2].strip())
    
    H = (V / (L_ratio * W_ratio)) ** (1/3) * H_ratio
    W = (V / (L_ratio * W_ratio)) ** (1/3) * W_ratio
    L = (V / (L_ratio * W_ratio)) ** (1/3) * L_ratio
    
    k_Fe_O2 = input_data.k_Fe * input_data.O2
    k_H2S_O2 = input_data.k_H2S * input_data.O2
    
    exponent_Fe = -k_Fe_O2 * t_s
    exponent_H2S = -k_H2S_O2 * t_s
    
    Fe2_plus_t = input_data.Fe2_plus_0 * math.exp(exponent_Fe) if input_data.Fe2_plus_0 > 0 else 0.0
    H2S_t = input_data.H2S_0 * math.exp(exponent_H2S) if input_data.H2S_0 > 0 else 0.0
    
    r_Fe = input_data.k_Fe * input_data.Fe2_plus_0 * input_data.O2 if input_data.Fe2_plus_0 > 0 else 0.0
    r_H2S = input_data.k_H2S * input_data.H2S_0 * input_data.O2 if input_data.H2S_0 > 0 else 0.0
    
    eta_Fe = ((input_data.Fe2_plus_0 - Fe2_plus_t) / input_data.Fe2_plus_0 * 100) if input_data.Fe2_plus_0 > 0 else 0.0
    eta_H2S = ((input_data.H2S_0 - H2S_t) / input_data.H2S_0 * 100) if input_data.H2S_0 > 0 else 0.0
    
    calculation_id = f"{datetime.now().strftime('%Y%m%d')}-M3-0001"
    
    outputs = {
        "V": {"value": round(V, 3), "unit": "m3", "note": "Thể tích ngăn trộn"},
        "L": {"value": round(L, 2), "unit": "m", "note": "Chiều dài"},
        "W": {"value": round(W, 2), "unit": "m", "note": "Chiều rộng"},
        "H": {"value": round(H, 2), "unit": "m", "note": "Chiều cao"},
        "r_Fe": {"value": round(r_Fe, 2), "unit": "mg/L·s", "note": "Tốc độ phản ứng Fe²⁺"},
        "r_H2S": {"value": round(r_H2S, 2), "unit": "mg/L·s", "note": "Tốc độ phản ứng H₂S"},
        "Fe2_plus_t": {"value": round(Fe2_plus_t, 2), "unit": "mg/L", "note": "Nồng độ Fe²⁺ sau phản ứng"},
        "H2S_t": {"value": round(H2S_t, 2), "unit": "mg/L", "note": "Nồng độ H₂S sau phản ứng"},
        "eta_Fe": {"value": round(eta_Fe, 1), "unit": "%", "note": "Hiệu suất oxy hóa Fe²⁺"},
        "eta_H2S": {"value": round(eta_H2S, 1), "unit": "%", "note": "Hiệu suất oxy hóa H₂S"}
    }
    
    intermediates = {
        "t_s": {"value": round(t_s, 0), "unit": "s", "note": "Thời gian trộn tính bằng giây"},
        "k_Fe_O2_product": {"value": round(k_Fe_O2, 4), "unit": "1/s", "note": "Tích k_Fe × [O₂]"},
        "k_H2S_O2_product": {"value": round(k_H2S_O2, 4), "unit": "1/s", "note": "Tích k_H2S × [O₂]"},
        "exponent_Fe": {"value": round(exponent_Fe, 2), "unit": "dimensionless", "note": "Số mũ trong công thức e^(-k_Fe×[O₂]×t)"},
        "exponent_H2S": {"value": round(exponent_H2S, 2), "unit": "dimensionless", "note": "Số mũ trong công thức e^(-k_H2S×[O₂]×t)"}
    }
    
    t_minutes = t_s / 60
    safety_checks = {
        "t_check": {
            "status": "PASS" if 1 <= t_minutes <= 5 else "WARNING",
            "limit_min": 1,
            "limit_max": 5,
            "unit": "minute",
            "actual": round(t_minutes, 1),
            "note": f"Thời gian trộn {round(t_minutes, 1)} phút {'trong' if 1 <= t_minutes <= 5 else 'ngoài'} khoảng 1-5 phút cho ngăn trộn nhanh"
        },
        "V_check": {
            "status": "PASS" if 0.1 <= V <= 10 else "WARNING",
            "limit_min": 0.1,
            "limit_max": 10,
            "unit": "m3",
            "actual": round(V, 3),
            "note": f"Thể tích {round(V, 3)} m³ {'hợp lý' if 0.1 <= V <= 10 else 'có thể không hợp lý'} cho Q = {Q} m³/s"
        }
    }
    
    if input_data.Fe2_plus_0 > 0:
        safety_checks["eta_check_Fe"] = {
            "status": "PASS" if eta_Fe >= 70 else "WARNING",
            "limit": 70,
            "unit": "%",
            "actual": round(eta_Fe, 1),
            "note": f"Hiệu suất oxy hóa Fe²⁺ {round(eta_Fe, 1)}% {'≥' if eta_Fe >= 70 else '<'} 70%"
        }
    
    if input_data.H2S_0 > 0:
        safety_checks["eta_check_H2S"] = {
            "status": "PASS" if eta_H2S >= 70 else "WARNING",
            "limit": 70,
            "unit": "%",
            "actual": round(eta_H2S, 1),
            "note": f"Hiệu suất oxy hóa H₂S {round(eta_H2S, 1)}% {'≥' if eta_H2S >= 70 else '<'} 70%"
        }
    
    warnings = []
    if t_minutes < 1 or t_minutes > 5:
        warnings.append(f"Thời gian trộn {round(t_minutes, 1)} phút ngoài khoảng khuyến nghị 1-5 phút cho ngăn trộn nhanh")
    
    if eta_Fe < 70 and input_data.Fe2_plus_0 > 0:
        warnings.append(f"Hiệu suất oxy hóa Fe²⁺ {round(eta_Fe, 1)}% < 70% - Cần tăng thời gian trộn hoặc nồng độ oxy")
    
    if eta_H2S < 70 and input_data.H2S_0 > 0:
        warnings.append(f"Hiệu suất oxy hóa H₂S {round(eta_H2S, 1)}% < 70% - Cần tăng thời gian trộn hoặc nồng độ oxy")
    
    technical_report = {
        "summary": {
            "en": f"Calculated mixing tank volume V = {round(V, 3)} m³ for flow Q = {Q} m³/s and mixing time t = {round(t_minutes, 1)} minutes. Fe²⁺ oxidation efficiency η_Fe = {round(eta_Fe, 1)}%, H₂S oxidation efficiency η_H2S = {round(eta_H2S, 1)}%.",
            "vi": f"Tính được thể tích ngăn trộn V = {round(V, 3)} m³ cho lưu lượng Q = {Q} m³/s và thời gian trộn t = {round(t_minutes, 1)} phút. Hiệu suất oxy hóa Fe²⁺ η_Fe = {round(eta_Fe, 1)}%, hiệu suất oxy hóa H₂S η_H2S = {round(eta_H2S, 1)}%."
        },
        "assumptions": [
            f"Lưu lượng Q = {Q} m³/s",
            f"Thời gian trộn t = {round(t_minutes, 1)} phút",
            f"Nồng độ Fe²⁺ ban đầu = {input_data.Fe2_plus_0} mg/L",
            f"Nồng độ H₂S ban đầu = {input_data.H2S_0} mg/L",
            f"Nồng độ oxy O₂ = {input_data.O2} mg/L",
            f"Tỷ lệ kích thước: {input_data.ty_le_kich_thuoc}"
        ],
        "safety_flags": warnings.copy(),
        "next_steps": [
            "Chuyển Module 4 (Bể lắng) để tính toán lắng cặn",
            "Kiểm tra nồng độ Fe²⁺ và H₂S sau phản ứng trong thực tế"
        ],
        "references": [
            "TCVN 7222:2002: Hệ thống xử lý nước thải công nghiệp",
            "Động học phản ứng bậc nhất: [A]_t = [A]_0 × e^(-k×[O₂]×t)"
        ]
    }
    
    return MixingReactionOutput(
        calculation_id=calculation_id,
        timestamp=datetime.utcnow(),
        prompt_version="MASTER_PROMPT.md v1.0",
        module="rapid-mixing-reaction",
        module_version="Module 3 v1.2",
        formula_set_version="TCVN 7222:2002",
        inputs=input_data.model_dump(),
        outputs=outputs,
        intermediates=intermediates,
        safety_checks=safety_checks,
        confidence=0.92,
        warnings=warnings if warnings else None,
        technical_report=technical_report
    )




