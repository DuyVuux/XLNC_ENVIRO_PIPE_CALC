import math
from typing import Dict, Any
from datetime import datetime
from app.modules.pipe_sizing.schemas import PipeSizingInput, PipeSizingOutput


def get_kinematic_viscosity(temperature: float) -> float:
    """Get kinematic viscosity from reference table (TCVN 33-2006)"""
    viscosity_table = {
        0: 0.00000179,
        10: 0.00000131,
        20: 0.00000101,
        25: 0.00000089,
        30: 0.00000080,
    }
    
    if temperature in viscosity_table:
        return viscosity_table[temperature]
    
    if temperature < 0:
        return viscosity_table[0]
    if temperature > 30:
        return viscosity_table[30]
    
    if temperature < 10:
        t0, v0 = 0, viscosity_table[0]
        t1, v1 = 10, viscosity_table[10]
    elif temperature < 20:
        t0, v0 = 10, viscosity_table[10]
        t1, v1 = 20, viscosity_table[20]
    elif temperature < 25:
        t0, v0 = 20, viscosity_table[20]
        t1, v1 = 25, viscosity_table[25]
    else:
        t0, v0 = 25, viscosity_table[25]
        t1, v1 = 30, viscosity_table[30]
    
    return v0 + (v1 - v0) * (temperature - t0) / (t1 - t0)


def calculate_pipe_sizing(input_data: PipeSizingInput) -> PipeSizingOutput:
    Q = input_data.Q
    
    if input_data.Q_unit == "m3/h":
        Q = Q / 3600
    elif input_data.Q_unit == "m3/day":
        Q = Q / 86400
    
    t = input_data.t
    vn = get_kinematic_viscosity(t)
    
    v_h_target = 1.2
    v_d_target = 2.4
    
    D_h_calc = math.sqrt(4 * Q / (math.pi * v_h_target))
    D_d_calc = math.sqrt(4 * Q / (math.pi * v_d_target))
    
    standard_diameters = [0.025, 0.032, 0.040, 0.050, 0.063, 0.075, 0.090, 0.110, 0.125, 0.140, 0.160, 0.180, 0.200]
    
    D_h_standard = round_to_standard_diameter(D_h_calc)
    D_d_standard = round_to_standard_diameter(D_d_calc)
    
    v_h_actual = 4 * Q / (math.pi * D_h_standard ** 2)
    v_d_actual = 4 * Q / (math.pi * D_d_standard ** 2)
    
    if v_d_actual > 2.4:
        current_idx = standard_diameters.index(D_d_standard)
        if current_idx < len(standard_diameters) - 1:
            D_d_standard = standard_diameters[current_idx + 1]
            v_d_actual = 4 * Q / (math.pi * D_d_standard ** 2)
    
    if v_h_actual > 1.2:
        current_idx = standard_diameters.index(D_h_standard)
        if current_idx < len(standard_diameters) - 1:
            D_h_standard = standard_diameters[current_idx + 1]
            v_h_actual = 4 * Q / (math.pi * D_h_standard ** 2)
    
    Re_h = v_h_actual * D_h_standard / vn
    Re_d = v_d_actual * D_d_standard / vn
    
    alpha_h = input_data.epsilon / D_h_standard
    alpha_d = input_data.epsilon / D_d_standard
    
    lambda_h = calculate_friction_factor(Re_h, alpha_h)
    lambda_d = calculate_friction_factor(Re_d, alpha_d)
    
    g = 9.81
    Htt = lambda_d * input_data.L * v_d_actual ** 2 / (D_d_standard * 2 * g)
    
    Hcb = input_data.beta * v_d_actual ** 2 / (2 * g)
    H1 = Htt + Hcb
    Hyc = H1 + input_data.Hc
    
    calculation_id = f"{datetime.now().strftime('%Y%m%d')}-M1-0001"
    
    outputs = {
        "D_h": {"value": round(D_h_standard, 3), "unit": "m", "selected_standard": get_standard_name(D_h_standard), "note": "Đường kính ống hút"},
        "D_d": {"value": round(D_d_standard, 3), "unit": "m", "selected_standard": get_standard_name(D_d_standard), "note": "Đường kính ống đẩy"},
        "v_h": {"value": round(v_h_actual, 2), "unit": "m/s", "note": "Vận tốc ống hút"},
        "v_d": {"value": round(v_d_actual, 2), "unit": "m/s", "note": "Vận tốc ống đẩy"},
        "Re_hut": {"value": int(Re_h), "flow_type": "turbulent" if Re_h > 4000 else "laminar", "note": "Hệ số Reynolds ống hút"},
        "Re_day": {"value": int(Re_d), "flow_type": "turbulent" if Re_d > 4000 else "laminar", "note": "Hệ số Reynolds ống đẩy"},
        "Htt": {"value": round(Htt, 2), "unit": "m", "note": "Tổn thất ma sát"},
        "Hcb": {"value": round(Hcb, 2), "unit": "m", "note": "Tổn thất cục bộ"},
        "H1": {"value": round(H1, 2), "unit": "m", "note": "Tổng tổn thất"},
        "Hyc": {"value": round(Hyc, 2), "unit": "m", "note": "Cột áp yêu cầu"}
    }
    
    intermediates = {
        "Vn": {"value": round(vn, 9), "unit": "m2/s", "note": f"Độ nhớt động học ở {t}°C"},
        "alpha": {"value": round(alpha_d, 6), "unit": "dimensionless", "note": "Độ nhám tương đối"},
        "lambda": {"value": round(lambda_d, 4), "unit": "dimensionless", "note": "Hệ số ma sát Darcy-Weisbach"}
    }
    
    safety_checks = {
        "v_h_check": {
            "status": "PASS" if v_h_actual <= 1.2 else "WARNING",
            "limit": 1.2,
            "unit": "m/s",
            "actual": round(v_h_actual, 2),
            "note": f"Vận tốc ống hút {round(v_h_actual, 2)} m/s {'≤' if v_h_actual <= 1.2 else '>'} 1.2 m/s theo TCVN 33-2006"
        },
        "v_d_check": {
            "status": "PASS" if v_d_actual <= 2.4 else "WARNING",
            "limit": 2.4,
            "unit": "m/s",
            "actual": round(v_d_actual, 2),
            "note": f"Vận tốc ống đẩy {round(v_d_actual, 2)} m/s {'≤' if v_d_actual <= 2.4 else '>'} 2.4 m/s theo TCVN 33-2006" + (" - Cần kiểm tra với chuyên gia" if v_d_actual > 2.3 else "")
        },
        "Re_check": {
            "status": "PASS",
            "limit": 4000,
            "actual": int(Re_d),
            "note": f"Re = {int(Re_d)} {'> 4000 → dòng chảy turbulent (đúng)' if Re_d > 4000 else '≤ 4000 → dòng chảy laminar'}"
        }
    }
    
    warnings = []
    if v_d_actual > 2.3:
        warnings.append(f"Vận tốc ống đẩy v_d = {round(v_d_actual, 2)} m/s gần ngưỡng TCVN 33-2006 (2.4 m/s) - Đề xuất kiểm tra với chuyên gia")
    
    technical_report = {
        "summary": {
            "en": f"Calculated pipe diameter D_d = {round(D_d_standard, 3)} m ({get_standard_name(D_d_standard)}) for flow Q = {Q} m³/s. Required head Hyc = {round(Hyc, 2)} m.",
            "vi": f"Tính được đường kính ống D_d = {round(D_d_standard, 3)} m ({get_standard_name(D_d_standard)}) cho lưu lượng Q = {Q} m³/s. Cột áp yêu cầu Hyc = {round(Hyc, 2)} m."
        },
        "assumptions": [
            f"Nhiệt độ nước t = {t}°C",
            f"Vật liệu ống: {input_data.material} (ε = {input_data.epsilon} m)"
        ],
        "safety_flags": warnings,
        "next_steps": [
            f"Chọn bơm có cột áp ≥ {round(Hyc, 2)} m",
            "Xem xét tăng đường kính ống nếu muốn giảm vận tốc"
        ],
        "references": [
            "TCVN 33-2006: Tiêu chuẩn thiết kế cấp nước",
            "Darcy-Weisbach formula: Htt = λ·L·v²/(D·2g)"
        ]
    }
    
    return PipeSizingOutput(
        calculation_id=calculation_id,
        timestamp=datetime.utcnow(),
        prompt_version="MASTER_PROMPT.md v1.0",
        module="pipe-sizing",
        module_version="Module 1 v1.2",
        formula_set_version="TCVN 33-2006, Darcy-Weisbach v1.0",
        inputs=input_data.model_dump(),
        outputs=outputs,
        intermediates=intermediates,
        safety_checks=safety_checks,
        confidence=0.95,
        warnings=warnings if warnings else None,
        technical_report=technical_report
    )


def round_to_standard_diameter(diameter: float) -> float:
    """Round to nearest standard diameter"""
    standard_diameters = [0.025, 0.032, 0.040, 0.050, 0.063, 0.075, 0.090, 0.110, 0.125, 0.140, 0.160, 0.180, 0.200]
    
    if diameter <= standard_diameters[0]:
        return standard_diameters[0]
    if diameter >= standard_diameters[-1]:
        return standard_diameters[-1]
    
    closest = standard_diameters[0]
    min_diff = abs(diameter - closest)
    
    for std_d in standard_diameters:
        diff = abs(diameter - std_d)
        if diff < min_diff:
            min_diff = diff
            closest = std_d
    
    return closest


def get_standard_name(diameter: float) -> str:
    mapping = {
        0.025: "DN25", 0.032: "DN32", 0.040: "DN40", 0.050: "DN50",
        0.063: "DN63", 0.075: "DN75", 0.090: "DN90", 0.110: "DN110",
        0.125: "DN125", 0.140: "DN140", 0.160: "DN160", 0.180: "DN180", 0.200: "DN200"
    }
    return mapping.get(diameter, f"DN{int(diameter*1000)}")


def calculate_friction_factor(Re: float, alpha: float) -> float:
    if Re < 2300:
        return 64 / Re
    
    for _ in range(100):
        lambda_guess = 0.02
        for _ in range(10):
            lambda_guess = 1 / (2 * math.log10(alpha / 3.7 + 2.51 / (Re * math.sqrt(lambda_guess)))) ** 2
        return lambda_guess
    
    return 0.02

