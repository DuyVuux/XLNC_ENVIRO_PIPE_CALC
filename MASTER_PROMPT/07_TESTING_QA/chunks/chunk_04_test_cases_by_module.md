# Chunk 04: VII.4 Test Cases by Module

**Chunk ID:** `07_TESTING_QA_chunk_04`  
**Section:** VII.4 Test Cases by Module  
**Word Count:** ~1200  
**Retrieval Keywords:** test cases, module 1, module 2, module 3, module 4, module 5, standard calculation, edge cases, invalid input, validation  
**Related Chunks:** `07_TESTING_QA_chunk_03, 07_TESTING_QA_chunk_05`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_4`

---

## VII.4 Test Cases by Module — Test case theo module

### VII.4.1 Module 1: Pipe Hydraulics Test Cases

#### Test Case M1-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 500,
  "Q_unit": "m³/ngày",
  "t": 25,
  "t_unit": "°C",
  "L": 1000,
  "L_unit": "m",
  "Hc": 5,
  "Hc_unit": "m",
  "material": "steel",
  "beta": 2.5
}
```

**Expected Output:**
```json
{
  "Q": 0.005787,
  "Q_unit": "m³/s",
  "v": 1.2,
  "v_unit": "m/s",
  "D": 0.0784,
  "D_unit": "m",
  "Re": 94200,
  "lambda": 0.023,
  "H1": 8.5,
  "H1_unit": "m",
  "Hyc": 13.5,
  "Hyc_unit": "m",
  "validation": {
    "status": "passed",
    "warnings": []
  }
}
```

**Validation:**
- ✅ Velocity within TCVN 33-2006 range (0.6-3.0 m/s)
- ✅ Diameter within standard pipe sizes
- ✅ Headloss reasonable (< 10 m per 100m)
- ✅ Reynolds number indicates turbulent flow

---

#### Test Case M1-TC-002: Edge Case - Very Low Flowrate

**Input:**
```json
{
  "Q": 1,
  "Q_unit": "m³/ngày",
  "t": 20,
  "L": 100,
  "Hc": 2,
  "material": "plastic",
  "beta": 1.5
}
```

**Expected Behavior:**
- System should calculate successfully
- Velocity may be below minimum (should flag warning)
- Suggest minimum pipe diameter

**Validation:**
- ⚠️ Warning: Velocity below recommended minimum
- ✅ Calculation completes without error
- ✅ Suggests alternative pipe size

---

#### Test Case M1-TC-003: Edge Case - Very High Flowrate

**Input:**
```json
{
  "Q": 50000,
  "Q_unit": "m³/ngày",
  "t": 30,
  "L": 5000,
  "Hc": 20,
  "material": "concrete",
  "beta": 3.0
}
```

**Expected Behavior:**
- System should calculate successfully
- Velocity may exceed maximum (should flag warning)
- Suggest larger pipe diameter or multiple pipes

**Validation:**
- ⚠️ Warning: Velocity exceeds recommended maximum
- ✅ Calculation completes without error
- ✅ Suggests alternative design

---

#### Test Case M1-TC-004: Invalid Input - Negative Flowrate

**Input:**
```json
{
  "Q": -100,
  "Q_unit": "m³/ngày",
  "t": 25,
  "L": 1000,
  "Hc": 5,
  "material": "steel",
  "beta": 2.5
}
```

**Expected Behavior:**
- System should reject input
- Return validation error
- Suggest correction

**Validation:**
- ❌ Error: Flowrate cannot be negative
- ✅ Error message in Vietnamese and English
- ✅ Suggests valid range

---

### VII.4.2 Module 2: Rainfall Aeration Test Cases

#### Test Case M2-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 0.01666667,
  "Q_unit": "m³/s",
  "t": 25,
  "t_unit": "°C",
  "C_Fe2": 5,
  "C_Fe2_unit": "mg/l",
  "C_H2S": 2,
  "C_H2S_unit": "mg/l",
  "A": 10,
  "A_unit": "m²",
  "eta": 0.8
}
```

**Expected Output:**
```json
{
  "C_ox": 8.27,
  "C_ox_unit": "mg/l",
  "O2_Fe2": 0.715,
  "O2_Fe2_unit": "mg/l",
  "O2_H2S": 0.94,
  "O2_H2S_unit": "mg/l",
  "C_ht": 9.925,
  "C_ht_unit": "mg/l",
  "C_phun": 6.0,
  "C_phun_unit": "m/h",
  "C_thuc": 6.616,
  "C_thuc_unit": "mg/l",
  "evaluation": "insufficient",
  "deficit": 3.309,
  "deficit_unit": "mg/l",
  "recommendations": ["Increase aeration efficiency", "Reduce Fe²⁺ and H₂S concentrations"]
}
```

**Validation:**
- ✅ Oxygen saturation calculated correctly
- ✅ Spray intensity within range (2-10 m/h)
- ✅ Evaluation indicates oxygen deficit
- ✅ Recommendations provided

---

### VII.4.3 Module 3: Rapid Mixing Tank Test Cases

#### Test Case M3-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 208.3,
  "Q_unit": "m³/h",
  "t": 25,
  "t_unit": "°C",
  "Fe2_0": 5,
  "Fe2_0_unit": "mg/l",
  "H2S_0": 2,
  "H2S_0_unit": "mg/l",
  "C_oxygen": 7.03,
  "C_oxygen_unit": "mg/l",
  "k_Fe": 0.5,
  "k_H2S": 1.0,
  "t_mix": 30,
  "t_mix_unit": "minutes"
}
```

**Expected Output:**
```json
{
  "V": 6.25,
  "V_unit": "m³",
  "t_mix_actual": 0.03,
  "t_mix_actual_unit": "hours",
  "L": 2.5,
  "L_unit": "m",
  "W": 2.5,
  "W_unit": "m",
  "H": 1.0,
  "H_unit": "m",
  "r_Fe": 17.575,
  "r_Fe_unit": "mg/(l·s)",
  "r_H2S": 14.06,
  "r_H2S_unit": "mg/(l·s)",
  "Fe2_t": 0.0,
  "Fe2_t_unit": "mg/l",
  "H2S_t": 0.0,
  "H2S_t_unit": "mg/l",
  "eta_Fe": 100.0,
  "eta_Fe_unit": "%",
  "eta_H2S": 100.0,
  "eta_H2S_unit": "%"
}
```

**Validation:**
- ✅ Mixing time within range (30-300 seconds)
- ✅ Tank dimensions reasonable
- ✅ Reaction rates calculated correctly
- ✅ Efficiency ≥ 95% (target)

---

### VII.4.4 Module 4: Sedimentation Tank Test Cases

#### Test Case M4-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 208.3,
  "Q_unit": "m³/h",
  "alpha": 1.2,
  "U_o": 0.5,
  "U_o_unit": "mm/s",
  "H": 3.5,
  "H_unit": "m",
  "W": 0.05,
  "W_unit": "m",
  "angle": 60,
  "angle_unit": "degrees"
}
```

**Expected Output:**
```json
{
  "Q1": 250.0,
  "Q1_unit": "m³/h",
  "F": 138.9,
  "F_unit": "m²",
  "D": 13.3,
  "D_unit": "m",
  "R": 13.3,
  "R_unit": "m",
  "H_actual": 3.5,
  "H_actual_unit": "m",
  "V": 646.2,
  "V_unit": "m³",
  "v_settling": 1.8,
  "v_settling_unit": "m/h",
  "t_settling": 2.58,
  "t_settling_unit": "hours",
  "eta": 27.8,
  "eta_unit": "%"
}
```

**Validation:**
- ✅ Settling time within range (0.5-3.0 hours)
- ✅ Overflow rate within standard limits
- ✅ Tank dimensions reasonable
- ✅ Efficiency calculated correctly

---

### VII.4.5 Module 5: Filtration Unit Test Cases

#### Test Case M5-TC-001: Standard Calculation

**Input:**
```json
{
  "Q": 250,
  "Q_unit": "m³/h",
  "v_filter": 8,
  "v_filter_unit": "m/h",
  "q_backwash": 15,
  "q_backwash_unit": "l/(s·m²)",
  "t_backwash": 10,
  "t_backwash_unit": "minutes",
  "tank_type": "circular"
}
```

**Expected Output:**
```json
{
  "f1": 31.25,
  "f1_unit": "m²",
  "f2": 0.31,
  "f2_unit": "m²",
  "f_total": 31.56,
  "f_total_unit": "m²",
  "D": 6.34,
  "D_unit": "m",
  "F1": 31.2,
  "F1_unit": "m²",
  "v_actual": 8.01,
  "v_actual_unit": "m/h",
  "H_total": 4.5,
  "H_total_unit": "m",
  "H_headloss": 2.5,
  "H_headloss_unit": "m",
  "Q_backwash": 468,
  "Q_backwash_unit": "l/s",
  "V_backwash": 280.8,
  "V_backwash_unit": "m³",
  "t_cycle": 24,
  "t_cycle_unit": "hours"
}
```

**Validation:**
- ✅ Filtration rate within range (6-10 m/h)
- ✅ Backwash intensity within range (12-15 l/(s·m²))
- ✅ Headloss within limits (2.0-3.5 m)
- ✅ Tank dimensions reasonable

---


---
**Previous Chunk:** `07_TESTING_QA_chunk_03`  
**Next Chunk:** `07_TESTING_QA_chunk_05`
