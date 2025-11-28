# Chunk 04: Module-Specific Logging / Ghi log theo module

**Chunk ID:** `08_LOGGING_MONITORING_chunk_04`  
**Section:** VIII.3 Module-Specific Logging - VIII.3.1 to VIII.3.6  
**Word Count:** ~1200 words  
**Retrieval Keywords:** module logging, module_1 logging, module_2 logging, module_3 logging, module_4 logging, module_5 logging, module_chain logging, pipe hydraulics logging, aeration logging, mixing tank logging, sedimentation logging, filtration logging, calculation logging, input validation logging  
**Related Chunks:** `08_LOGGING_MONITORING_chunk_03`, `08_LOGGING_MONITORING_chunk_05`  
**Canonical Summary Reference:** `08_LOGGING_MONITORING_summary_section_3`

---

## VIII.3 Module-Specific Logging — Ghi log theo module

### VIII.3.1 Module 1: Pipe Hydraulics Logging / Ghi log Module 1

**EN:** Module 1 must log all pipe hydraulics calculations with detailed context.

**VI:** Module 1 phải ghi log tất cả tính toán thủy lực đường ống với ngữ cảnh chi tiết.

**Required Logs:**

1. **Input Validation:**
   ```json
   {
     "level": "INFO",
     "module": "module_1",
     "message": "Module 1 input validation started",
     "context": {
       "input": {
         "Q": 500,
         "Q_unit": "m³/ngày",
         "t": 25,
         "t_unit": "°C",
         "L": 1000,
         "L_unit": "m",
         "material": "steel"
       }
     }
   }
   ```

2. **Calculation Steps:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_1",
     "message": "Calculated pipe diameter",
     "context": {
       "step": "diameter_calculation",
       "formula": "D = √(4Q/πV)",
       "input": {"Q": 0.005787, "V": 1.2},
       "output": {"D": 0.0784},
       "standard": "TCVN 33-2006"
     }
   }
   ```

3. **Result Validation:**
   ```json
   {
     "level": "INFO",
     "module": "module_1",
     "message": "Module 1 calculation completed",
     "context": {
       "output": {
         "D": 0.0784,
         "D_unit": "m",
         "v": 1.2,
         "v_unit": "m/s",
         "Re": 94200,
         "H1": 8.5,
         "H1_unit": "m"
       },
       "validation": {
         "status": "passed",
         "warnings": []
       },
       "duration_ms": 1200
     }
   }
   ```

**Priority:** High

---

### VIII.3.2 Module 2: Rainfall Aeration Logging / Ghi log Module 2

**EN:** Module 2 must log aeration calculations and oxygen saturation results.

**VI:** Module 2 phải ghi log tính toán sục khí và kết quả oxy bão hòa.

**Required Logs:**

1. **Oxygen Saturation Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_2",
     "message": "Calculated oxygen saturation",
     "context": {
       "formula": "C_ox = 468/(31.6 + t)",
       "input": {"t": 25},
       "output": {"C_ox": 8.27, "C_ox_unit": "mg/l"},
       "standard": "TCVN 7222:2002"
     }
   }
   ```

2. **Aeration Efficiency:**
   ```json
   {
     "level": "INFO",
     "module": "module_2",
     "message": "Module 2 calculation completed",
     "context": {
       "output": {
         "C_phun": 6.0,
         "C_phun_unit": "m/h",
         "C_thực": 6.616,
         "C_thực_unit": "mg/l",
         "C_ht": 9.925,
         "C_ht_unit": "mg/l"
       },
       "efficiency": {
         "eta": 0.8,
         "status": "sufficient",
         "warning": null
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.3 Module 3: Rapid Mixing Tank Logging / Ghi log Module 3

**EN:** Module 3 must log mixing tank calculations and reaction kinetics.

**VI:** Module 3 phải ghi log tính toán bể trộn và động học phản ứng.

**Required Logs:**

1. **Reaction Kinetics:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_3",
     "message": "Calculated reaction rate",
     "context": {
       "formula": "r_Fe = k_Fe × [Fe²⁺] × [O₂]",
       "input": {
         "k_Fe": 0.5,
         "Fe2_plus": 5,
         "O2": 6.616
       },
       "output": {"r_Fe": 16.54, "r_Fe_unit": "mg/l·s"}
     }
   }
   ```

2. **Mixing Tank Dimensions:**
   ```json
   {
     "level": "INFO",
     "module": "module_3",
     "message": "Module 3 calculation completed",
     "context": {
       "output": {
         "V": 30,
         "V_unit": "m³",
         "L": 4,
         "W": 3,
         "H": 2.5,
         "t_mix": 0.5,
         "t_mix_unit": "h"
       },
       "reaction_efficiency": {
         "eta_Fe": 100,
         "eta_H2S": 100,
         "unit": "%"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.4 Module 4: Sedimentation Tank Logging / Ghi log Module 4

**EN:** Module 4 must log sedimentation calculations and settling efficiency.

**VI:** Module 4 phải ghi log tính toán lắng và hiệu suất lắng.

**Required Logs:**

1. **Settling Area Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_4",
     "message": "Calculated required settling area",
     "context": {
       "formula": "F = Q₁/(U_o×H×cos(α) + W×cos²(α))",
       "input": {
         "Q1": 61.25,
         "U_o": 0.00025,
         "H": 0.867,
         "W": 0.05,
         "angle": 60
       },
       "output": {"F": 7.3027, "F_unit": "m²"}
     }
   }
   ```

2. **Sedimentation Results:**
   ```json
   {
     "level": "INFO",
     "module": "module_4",
     "message": "Module 4 calculation completed",
     "context": {
       "output": {
         "D": 6.5,
         "D_unit": "m",
         "R": 2.3,
         "R_unit": "m",
         "H": 3,
         "H_unit": "m",
         "V": 44.85,
         "V_unit": "m³",
         "t_lắng": 43.9,
         "t_lắng_unit": "phút",
         "eta": 21.9,
         "eta_unit": "%"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.5 Module 5: Filtration Unit Logging / Ghi log Module 5

**EN:** Module 5 must log filtration calculations and backwash operations.

**VI:** Module 5 phải ghi log tính toán lọc và thao tác rửa ngược.

**Required Logs:**

1. **Filter Area Calculation:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_5",
     "message": "Calculated filter area",
     "context": {
       "formula": "f₁ = Q/v",
       "input": {
         "Q": 250,
         "Q_unit": "m³/h",
         "v": 8,
         "v_unit": "m/h"
       },
       "output": {"f₁": 31.25, "f₁_unit": "m²"}
     }
   }
   ```

2. **Filtration Results:**
   ```json
   {
     "level": "INFO",
     "module": "module_5",
     "message": "Module 5 calculation completed",
     "context": {
       "output": {
         "D": 6.3,
         "D_unit": "m",
         "F₁": 31.2,
         "F₁_unit": "m²",
         "v_actual": 8.0,
         "v_actual_unit": "m/h",
         "H": 2.5,
         "H_unit": "m",
         "q_backwash": 15,
         "q_backwash_unit": "l/s·m²"
       }
     }
   }
   ```

**Priority:** High

---

### VIII.3.6 Module Chain Logging / Ghi log chuỗi module

**EN:** Module chains must log data flow between modules and chain orchestration.

**VI:** Chuỗi module phải ghi log dòng chảy dữ liệu giữa các module và điều phối chuỗi.

**Required Logs:**

1. **Chain Start:**
   ```json
   {
     "level": "INFO",
     "module": "module_chain",
     "message": "Module chain calculation started",
     "context": {
       "chain": [1, 2, 3, 4, 5],
       "input": {
         "Q": 5000,
         "Q_unit": "m³/ngày"
       }
     }
   }
   ```

2. **Data Flow Between Modules:**
   ```json
   {
     "level": "DEBUG",
     "module": "module_chain",
     "message": "Data passed from Module 1 to Module 2",
     "context": {
       "from": "module_1",
       "to": "module_2",
       "data": {
         "Q": 0.05787,
         "Q_unit": "m³/s",
         "t": 25,
         "t_unit": "°C"
       }
     }
   }
   ```

3. **Chain Completion:**
   ```json
   {
     "level": "INFO",
     "module": "module_chain",
     "message": "Module chain calculation completed",
     "context": {
       "chain": [1, 2, 3, 4, 5],
       "duration_ms": 28000,
       "modules_completed": 5,
       "status": "success"
     }
   }
   ```

**Priority:** High

---

**Previous Chunk:** `08_LOGGING_MONITORING_chunk_03` (Backend, Frontend & Database Log Rules)  
**Next Chunk:** `08_LOGGING_MONITORING_chunk_05` (Metrics & Dashboards)






