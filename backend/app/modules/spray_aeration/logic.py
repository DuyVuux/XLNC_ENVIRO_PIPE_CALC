import math
from typing import Dict, Any
from datetime import datetime
from app.modules.spray_aeration.schemas import SprayAerationInput, SprayAerationOutput


def calculate_spray_aeration(input_data: SprayAerationInput) -> SprayAerationOutput:
    Q = input_data.Q
    
    if input_data.Q_unit == "m3/h":
        Q = Q / 3600
    elif input_data.Q_unit == "m3/day":
        Q = Q / 86400
    
    Q_m3_per_h = Q * 3600
    
    t = input_data.t
    
    C_ox = 468 / (31.6 + t)
    
    O2_Fe = 0.143 * input_data.C_Fe2_plus if input_data.C_Fe2_plus > 0 else 0.0
    O2_H2S = 0.47 * input_data.C_H2S if input_data.C_H2S > 0 else 0.0
    
    C_ht = O2_H2S + O2_Fe + C_ox
    
    C_phun = Q_m3_per_h / input_data.A
    
    C_thuc = C_ox * input_data.eta
    
    O2_sufficient = C_thuc >= C_ht
    O2_deficit = max(0, C_ht - C_thuc) if not O2_sufficient else 0.0
    
    calculation_id = f"{datetime.now().strftime('%Y%m%d')}-M2-0001"
    
    outputs = {
        "C_ox": {"value": round(C_ox, 2), "unit": "mg/L", "note": f"Oxy bão hòa ở {t}°C"},
        "O2_can_cho_Fe2_plus": {"value": round(O2_Fe, 2), "unit": "mg/L", "note": "Lượng oxy cần cho Fe²⁺"},
        "O2_can_cho_H2S": {"value": round(O2_H2S, 2), "unit": "mg/L", "note": "Lượng oxy cần cho H₂S"},
        "C_ht": {"value": round(C_ht, 2), "unit": "mg/L", "note": "Tổng oxy cần thiết"},
        "C_phun": {"value": round(C_phun, 2), "unit": "m/h", "note": "Cường độ phun mưa"},
        "C_thuc": {"value": round(C_thuc, 2), "unit": "mg/L", "note": "Oxy hòa tan thực tế"},
        "O2_sufficient": O2_sufficient,
        "O2_deficit": {"value": round(O2_deficit, 2), "unit": "mg/L"} if O2_deficit > 0 else None
    }
    
    intermediates = {
        "O2_Fe_ratio": {"value": 0.143, "unit": "dimensionless", "note": "Tỷ lệ O₂/Fe²⁺ theo phản ứng"},
        "O2_H2S_ratio": {"value": 0.47, "unit": "dimensionless", "note": "Tỷ lệ O₂/H₂S theo phản ứng"},
        "C_ox_saturation": {"value": round(C_ox, 2), "unit": "mg/L", "note": "Oxy bão hòa tính từ công thức 468/(31.6+t)"}
    }
    
    safety_checks = {
        "C_phun_check": {
            "status": "PASS" if 0.5 <= C_phun <= 3.0 else "WARNING",
            "limit_min": 0.5,
            "limit_max": 3.0,
            "unit": "m/h",
            "actual": round(C_phun, 2),
            "note": f"Cường độ phun {round(C_phun, 2)} m/h {'trong' if 0.5 <= C_phun <= 3.0 else 'ngoài'} khoảng 0.5-3 m/h"
        },
        "eta_check": {
            "status": "PASS" if 0.7 <= input_data.eta <= 0.9 else "WARNING",
            "limit_min": 0.7,
            "limit_max": 0.9,
            "unit": "dimensionless",
            "actual": input_data.eta,
            "note": f"Hiệu suất phun mưa {input_data.eta} {'trong' if 0.7 <= input_data.eta <= 0.9 else 'ngoài'} khoảng 0.7-0.9"
        }
    }
    
    if O2_sufficient:
        C_thuc_min = C_ht * 0.6
        safety_checks["C_thuc_check"] = {
            "status": "PASS" if C_thuc >= C_thuc_min else "WARNING",
            "limit": round(C_thuc_min, 2),
            "unit": "mg/L",
            "actual": round(C_thuc, 2),
            "note": f"Oxy thực tế {round(C_thuc, 2)} mg/L {'≥' if C_thuc >= C_thuc_min else '<'} {round(C_thuc_min, 2)} mg/L (60% của C_ht) - {'Đủ' if C_thuc >= C_thuc_min else 'Có thể thiếu'} cho phản ứng"
        }
    else:
        safety_checks["C_thuc_check"] = {
            "status": "WARNING",
            "limit": round(C_ht, 2),
            "unit": "mg/L",
            "actual": round(C_thuc, 2),
            "note": f"Oxy thực tế {round(C_thuc, 2)} mg/L < {round(C_ht, 2)} mg/L (C_ht) - Thiếu oxy cho phản ứng"
        }
    
    warnings = []
    recommendations = []
    
    if not O2_sufficient:
        warnings.append(f"Oxy hòa tan thực tế ({round(C_thuc, 2)} mg/L) không đủ cho phản ứng (cần {round(C_ht, 2)} mg/L)")
        
        if input_data.eta < 0.9:
            recommendations.append(f"Tăng hiệu suất phun mưa từ {input_data.eta} lên 0.9 (tối đa)")
        
        A_min = Q_m3_per_h / 3.0
        if input_data.A < A_min:
            recommendations.append(f"Tăng diện tích giàn phun từ {input_data.A} m² lên ít nhất {round(A_min, 1)} m²")
        
        recommendations.append("Xem xét giảm nồng độ Fe²⁺ hoặc H₂S trong nước đầu vào")
        recommendations.append("Xem xét sử dụng nhiều giai đoạn phun mưa")
    
    if C_phun < 0.5 or C_phun > 3.0:
        warnings.append(f"Cường độ phun {round(C_phun, 2)} m/h ngoài khoảng khuyến nghị 0.5-3.0 m/h")
    
    technical_report = {
        "summary": {
            "en": f"Calculated saturated oxygen C_ox = {round(C_ox, 2)} mg/L at {t}°C. Total oxygen required C_ht = {round(C_ht, 2)} mg/L (for Fe²⁺ and H₂S oxidation). Actual dissolved oxygen C_thực = {round(C_thuc, 2)} mg/L is {'sufficient' if O2_sufficient else 'insufficient'} for reactions. Spray intensity C_phun = {round(C_phun, 2)} m/h.",
            "vi": f"Tính được oxy bão hòa C_ox = {round(C_ox, 2)} mg/L ở {t}°C. Tổng oxy cần thiết C_ht = {round(C_ht, 2)} mg/L (cho oxy hóa Fe²⁺ và H₂S). Oxy hòa tan thực tế C_thực = {round(C_thuc, 2)} mg/L {'đủ' if O2_sufficient else 'không đủ'} cho phản ứng. Cường độ phun C_phun = {round(C_phun, 2)} m/h."
        },
        "assumptions": [
            f"Nhiệt độ nước t = {t}°C",
            f"Nồng độ Fe²⁺ ban đầu = {input_data.C_Fe2_plus} mg/L",
            f"Nồng độ H₂S ban đầu = {input_data.C_H2S} mg/L",
            f"Diện tích giàn phun A = {input_data.A} m²",
            f"Hiệu suất phun mưa η = {input_data.eta}"
        ],
        "safety_flags": warnings.copy(),
        "next_steps": recommendations if recommendations else [
            "Chuyển Module 3 (Ngăn trộn phản ứng) để tính toán phản ứng oxy hóa",
            "Kiểm tra nồng độ oxy sau phun mưa trong thực tế"
        ],
        "references": [
            "TCVN 7222:2002: Hệ thống xử lý nước thải công nghiệp",
            "Công thức oxy bão hòa: C_ox = 468/(31.6 + t)"
        ]
    }
    
    return SprayAerationOutput(
        calculation_id=calculation_id,
        timestamp=datetime.utcnow(),
        prompt_version="MASTER_PROMPT.md v1.0",
        module="spray-aeration",
        module_version="Module 2 v1.2",
        formula_set_version="TCVN 7222:2002",
        inputs=input_data.model_dump(),
        outputs=outputs,
        intermediates=intermediates,
        safety_checks=safety_checks,
        confidence=0.92,
        warnings=warnings if warnings else None,
        technical_report=technical_report
    )



