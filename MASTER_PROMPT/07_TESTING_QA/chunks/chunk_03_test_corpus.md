# Chunk 03: Test Corpus / Tập dữ liệu Test Chuẩn ngành

**Chunk ID:** `07_TESTING_QA_chunk_03`  
**Section:** VII.3 Test Corpus  
**Word Count:** ~600 words  
**Retrieval Keywords:** test corpus, standardized inputs, engineering thresholds, edge case data, stress test data, flowrate ranges, temperature ranges, water quality parameters, pipe parameters, TCVN thresholds  
**Related Chunks:** `07_TESTING_QA_chunk_02`, `07_TESTING_QA_chunk_04`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_06`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_3`

---

## VII.3 Test Corpus — Tập dữ liệu test chuẩn ngành

**EN:** System must maintain a comprehensive, standardized test corpus tailored for the water treatment domain.

**VI:** Hệ thống phải duy trì một tập dữ liệu test toàn diện, chuẩn hóa phù hợp với lĩnh vực xử lý nước.

### VII.3.1 Standardized Water Treatment Inputs / Đầu vào xử lý nước chuẩn hóa

**EN:** Reference parameter ranges based on QCVN/TCVN standards and typical industrial/municipal plant data.

**VI:** Phạm vi tham số tham chiếu dựa trên tiêu chuẩn QCVN/TCVN và dữ liệu nhà máy công nghiệp/đô thị điển hình.

**Test Data Categories:**

1. **Flowrate Ranges:**
   ```json
   {
     "small_scale": {"Q_min": 1, "Q_max": 100, "unit": "m³/ngày"},
     "medium_scale": {"Q_min": 100, "Q_max": 1000, "unit": "m³/ngày"},
     "large_scale": {"Q_min": 1000, "Q_max": 100000, "unit": "m³/ngày"}
   }
   ```

2. **Temperature Ranges:**
   ```json
   {
     "min": 0, "max": 100, "typical": [10, 20, 25, 30], "unit": "°C"
   }
   ```

3. **Water Quality Parameters:**
   ```json
   {
     "Fe2_plus": {"min": 0, "max": 50, "typical": [1, 3, 5, 10], "unit": "mg/l"},
     "H2S": {"min": 0, "max": 20, "typical": [0.5, 1, 2, 5], "unit": "mg/l"},
     "turbidity": {"min": 0, "max": 1000, "typical": [5, 10, 50, 100], "unit": "NTU"},
     "TSS": {"min": 0, "max": 500, "typical": [10, 50, 100, 200], "unit": "mg/l"}
   }
   ```

4. **Pipe Parameters:**
   ```json
   {
     "materials": ["steel", "cast_iron", "concrete", "plastic"],
     "diameters": {"min": 0.05, "max": 2.0, "unit": "m"},
     "lengths": {"min": 1, "max": 10000, "unit": "m"},
     "roughness": {
       "steel_new": {"min": 0.00005, "max": 0.0001, "unit": "m"},
       "steel_old": {"min": 0.0001, "max": 0.0005, "unit": "m"},
       "cast_iron": {"min": 0.00025, "max": 0.001, "unit": "m"},
       "concrete": {"min": 0.0003, "max": 0.003, "unit": "m"},
       "plastic": {"min": 0.0000015, "max": 0.000007, "unit": "m"}
     }
   }
   ```

---

### VII.3.2 Engineering Design Thresholds / Ngưỡng thiết kế kỹ thuật

**EN:** Engineering thresholds based on TCVN 33-2006 and TCVN 7222:2002.

**VI:** Ngưỡng kỹ thuật dựa trên TCVN 33-2006 và TCVN 7222:2002.

**Thresholds by Module:**

1. **Module 1 - Pipe Hydraulics:**
   - Velocity (suction): 0.6-1.5 m/s (standard: 1.2 m/s)
   - Velocity (discharge): 1.5-3.0 m/s (standard: 2.4 m/s)
   - Reynolds: laminar < 2000, transition 2000-4000, turbulent > 4000
   - Headloss per 100m: < 10 m

2. **Module 2 - Rainfall Aeration:**
   - Spray intensity: 2-10 m/h (typical: 4-8 m/h)
   - Aeration efficiency: 0.5-0.95 (typical: 0.7-0.85)
   - Oxygen saturation: 0-15 mg/l (temperature dependent)

3. **Module 3 - Rapid Mixing:**
   - Mixing time: 30-300 seconds (typical: 60-180 seconds)
   - Tank volume: 0.1-100 m³
   - Reaction rates: Fe 0.1-2.0, H₂S 0.1-2.0 l/(mg·s)

4. **Module 4 - Sedimentation:**
   - Settling velocity: 0.3-2.0 mm/s (typical: 0.5-1.0 mm/s)
   - Settling time: 0.5-3.0 hours (typical: 1.0-2.0 hours)
   - Overflow rate: 0.5-2.0 m³/(m²·h) (typical: 0.8-1.5 m³/(m²·h))

5. **Module 5 - Filtration:**
   - Filtration rate: 6-10 m/h (typical: 8 m/h)
   - Backwash intensity: 12-15 l/(s·m²) (typical: 14 l/(s·m²))
   - Backwash time: 5-15 minutes (typical: 10 minutes)
   - Max headloss: 2.0-3.5 m (typical: 2.5-3.0 m)

---

### VII.3.3 Edge Case Data / Dữ liệu trường hợp biên

**EN:** Test data for extreme and boundary conditions.

**VI:** Dữ liệu test cho các điều kiện cực đoan và biên.

**Edge Cases:**

1. **Extremely Low Values:**
   - Q_near_zero: 0.001 m³/ngày
   - t_min: 0.1°C
   - L_min: 0.1 m

2. **Extremely High Values:**
   - Q_max: 100000 m³/ngày
   - t_max: 99.9°C
   - L_max: 10000 m

3. **Extreme Contamination:**
   - Fe²⁺_max: 50 mg/l
   - H₂S_max: 20 mg/l
   - Turbidity_max: 1000 NTU

4. **Invalid Combinations:**
   - Negative Q: -10 m³/ngày
   - Negative t: -5°C
   - Zero diameter: 0 m
   - Negative length: -100 m

5. **Missing/Null Values:**
   - null_Q: null
   - missing_t: undefined
   - empty_material: ""
   - zero_beta: 0

---

### VII.3.4 Stress Test Data / Dữ liệu test tải

**EN:** Test data for high-load and stress scenarios.

**VI:** Dữ liệu test cho các kịch bản tải cao và stress.

**Stress Scenarios:**

1. **Large Dataset:**
   - 10,000 data points
   - 100 concurrent calculations
   - Full chain (5 modules)
   - Large report size

2. **High-Frequency Requests:**
   - 50 requests per second
   - 60 seconds duration
   - 100 concurrent users

3. **Complex Module Chains:**
   - Full chain [1,2,3,4,5]
   - 1000 iterations
   - 100 data variations

---

**Previous Chunk:** `07_TESTING_QA_chunk_02`  
**Next Chunk:** `07_TESTING_QA_chunk_04` (Test Cases by Module)

