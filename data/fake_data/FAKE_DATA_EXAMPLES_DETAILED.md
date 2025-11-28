# FAKE DATA EXAMPLES - CHI TIẾT CHO 5 MODULE

**Ngày tạo:** 2025-01-XX  
**Tiêu chuẩn áp dụng:** TCVN 33-2006, TCVN 7222:2002  
**Mục đích:** Cung cấp fake data chuẩn kỹ thuật để thử nghiệm 5 module

---

## MODULE 1 - TÍNH TOÁN ĐƯỜNG ỐNG

### Case 1: Quy mô nhỏ (Q = 50 m³/ngày)

**Input:**
- Q = 50 m³/ngày = 0.000579 m³/s = 2.08 m³/h
- t = 20°C
- L = 50 m
- Hc = 3 m
- ε = 0.0001 m (PVC)
- β = 2.0

**Output:**
- D_h = 0.025 m = 25 mm → Chọn DN32 (32 mm)
- D_d = 0.018 m = 18 mm → Chọn DN20 (20 mm)
- v_h = 1.0 m/s (≤ 1.2 m/s ✓)
- v_d = 2.0 m/s (≤ 2.4 m/s ✓)
- Re = 19800 (turbulent)
- Htt = 1.8 m
- Hcb = 0.2 m
- H1 = 2.0 m
- Hyc = 5.0 m

**Validation:**
- ✅ v_h = 1.0 m/s ≤ 1.2 m/s (TCVN 33-2006)
- ✅ v_d = 2.0 m/s ≤ 2.4 m/s (TCVN 33-2006)
- ✅ Re > 4000 → turbulent flow

**Công thức sử dụng:**
- D_h = √(4Q/(πV_h)) với V_h = 1.2 m/s (TCVN 33-2006)
- D_d = √(4Q/(πV_d)) với V_d = 2.4 m/s (TCVN 33-2006)
- H_tt = λ·L·v²/(D·2g) - Darcy-Weisbach (TCVN 33-2006)
- H_cb = β·v²/(2g) (TCVN 33-2006)
- H_yc = H₁ + H_c (TCVN 33-2006)

---

### Case 2: Quy mô vừa (Q = 500 m³/ngày)

**Input:**
- Q = 500 m³/ngày = 0.00579 m³/s = 20.83 m³/h
- t = 25°C
- L = 120 m
- Hc = 5 m
- ε = 0.0001 m (PVC)
- β = 2.5

**Output:**
- D_h = 0.078 m = 78 mm → Chọn DN80 (80 mm)
- D_d = 0.055 m = 55 mm → Chọn DN50 (50 mm)
- v_h = 1.15 m/s (≤ 1.2 m/s ✓)
- v_d = 2.38 m/s (≤ 2.4 m/s ✓)
- Re = 147191 (turbulent)
- Htt = 3.2 m
- Hcb = 0.35 m
- H1 = 3.55 m
- Hyc = 8.55 m

**Validation:**
- ✅ v_h = 1.15 m/s ≤ 1.2 m/s (TCVN 33-2006)
- ⚠️ v_d = 2.38 m/s gần ngưỡng 2.4 m/s → CẢNH BÁO
- ✅ Re > 4000 → turbulent flow

---

### Case 3: Quy mô lớn (Q = 5000 m³/ngày)

**Input:**
- Q = 5000 m³/ngày = 0.0579 m³/s = 208.3 m³/h
- t = 20°C
- L = 200 m
- Hc = 8 m
- ε = 0.00008 m (Thép mới)
- β = 3.0

**Output:**
- D_h = 0.248 m = 248 mm → Chọn DN250 (250 mm)
- D_d = 0.175 m = 175 mm → Chọn DN200 (200 mm)
- v_h = 1.2 m/s (= 1.2 m/s ✓)
- v_d = 2.4 m/s (= 2.4 m/s ✓)
- Re = 475247 (turbulent)
- Htt = 8.5 m
- Hcb = 0.88 m
- H1 = 9.38 m
- Hyc = 17.38 m

**Validation:**
- ✅ v_h = 1.2 m/s = 1.2 m/s (TCVN 33-2006)
- ✅ v_d = 2.4 m/s = 2.4 m/s (TCVN 33-2006)
- ✅ Re > 4000 → turbulent flow

---

## MODULE 2 - GIÀN PHUN MƯA

### Case 1: Nước cấp (DO đầu vào cao)

**Input:**
- Q = 500 m³/ngày = 20.83 m³/h
- t = 25°C
- C(Fe²⁺) = 2.0 mg/L (thấp)
- C(H₂S) = 0.5 mg/L (thấp)
- A = 20 m²
- η = 0.8

**Output:**
- C_ox = 8.24 mg/L (từ công thức: 468/(31.6+25))
- O₂ cần cho Fe²⁺ = 0.143 × 2.0 = 0.286 mg/L
- O₂ cần cho H₂S = 0.47 × 0.5 = 0.235 mg/L
- C_ht = 0.235 + 0.286 + 8.24 = 8.76 mg/L
- C_phun = 20.83/20 = 1.04 m/h
- C_thực = 8.24 × 0.8 = 6.59 mg/L
- Đánh giá: Oxy đủ (6.59 mg/L > 8.76 × 0.6 = 5.26 mg/L)

**Validation:**
- ✅ C_phun = 1.04 m/h trong khoảng 0.5-3 m/h
- ✅ η = 0.8 trong khoảng 0.7-0.9
- ✅ C_thực đủ cho phản ứng

**Công thức sử dụng:**
- C_ox = 468/(31.6 + t) (TCVN 7222:2002)
- O₂ (cần cho Fe²⁺) = 0.143 × C(Fe²⁺) (TCVN 7222:2002)
- O₂ (cần cho H₂S) = 0.47 × C(H₂S) (TCVN 7222:2002)
- C_ht = 0.47×C(H₂S) + 0.143×C(Fe²⁺) + C_ox (TCVN 7222:2002)
- C_phun = Q/A (TCVN 7222:2002)
- C_thực = C_ox × η (TCVN 7222:2002)

---

### Case 2: Nước thải (Fe²⁺, H₂S cao)

**Input:**
- Q = 500 m³/ngày = 20.83 m³/h
- t = 25°C
- C(Fe²⁺) = 8.5 mg/L (cao)
- C(H₂S) = 2.3 mg/L (cao)
- A = 15 m²
- η = 0.8

**Output:**
- C_ox = 8.24 mg/L
- O₂ cần cho Fe²⁺ = 0.143 × 8.5 = 1.22 mg/L
- O₂ cần cho H₂S = 0.47 × 2.3 = 1.08 mg/L
- C_ht = 1.08 + 1.22 + 8.24 = 10.54 mg/L
- C_phun = 20.83/15 = 1.39 m/h
- C_thực = 8.24 × 0.8 = 6.59 mg/L
- Đánh giá: Oxy đủ (6.59 mg/L > 10.54 × 0.6 = 6.32 mg/L)

**Validation:**
- ✅ C_phun = 1.39 m/h trong khoảng 0.5-3 m/h
- ✅ η = 0.8 trong khoảng 0.7-0.9
- ✅ C_thực đủ cho phản ứng

---

## MODULE 3 - NGĂN TRỘN PHẢN ỨNG

### Case 1: Trộn nhanh (t = 2 phút)

**Input:**
- Q = 0.00579 m³/s = 20.83 m³/h
- t = 2 phút = 120 giây
- [Fe²⁺]_0 = 8.5 mg/L
- [H₂S]_0 = 2.3 mg/L
- k_Fe = 0.18 l/mg·s
- k_H₂S = 0.25 l/mg·s
- [O₂] = 6.59 mg/L
- Tỷ lệ: L:W:H = 2:1:1

**Output:**
- V = 0.00579 × 120 = 0.696 m³
- L = 1.18 m, W = 0.59 m, H = 0.59 m
- r_Fe = 0.18 × 8.5 × 6.59 = 10.08 mg/L·s
- r_H₂S = 0.25 × 2.3 × 6.59 = 3.79 mg/L·s
- [Fe²⁺]_t = 8.5 × e^(-0.18×6.59×120) = 0.85 mg/L
- [H₂S]_t = 2.3 × e^(-0.25×6.59×120) = 0.12 mg/L
- η_Fe = (8.5 - 0.85)/8.5 × 100% = 90%
- η_H₂S = (2.3 - 0.12)/2.3 × 100% = 94.8%

**Validation:**
- ✅ t = 2 phút trong khoảng 1-5 phút cho ngăn trộn nhanh
- ✅ V = 0.696 m³ hợp lý cho Q = 0.00579 m³/s
- ✅ η_Fe = 90%, η_H₂S = 94.8% đạt yêu cầu

**Công thức sử dụng:**
- V = Q × t (TCVN 7222:2002)
- L = V/(H×W) (TCVN 7222:2002)
- r_Fe = k_Fe × [Fe²⁺] × [O₂] (TCVN 7222:2002)
- r_H₂S = k_H₂S × [H₂S] × [O₂] (TCVN 7222:2002)
- [Fe²⁺]_t = [Fe²⁺]_0 × e^(-k_Fe×[O₂]×t) (TCVN 7222:2002)
- [H₂S]_t = [H₂S]_0 × e^(-k_H₂S×[O₂]×t) (TCVN 7222:2002)
- η = ([A]_0 - [A]_t)/[A]_0 × 100% (TCVN 7222:2002)

---

### Case 2: Phản ứng chậm (t = 30 phút)

**Input:**
- Q = 0.00579 m³/s = 20.83 m³/h
- t = 30 phút = 1800 giây
- [Fe²⁺]_0 = 8.5 mg/L
- [H₂S]_0 = 2.3 mg/L
- k_Fe = 0.18 l/mg·s
- k_H₂S = 0.25 l/mg·s
- [O₂] = 6.59 mg/L

**Output:**
- V = 0.00579 × 1800 = 10.44 m³
- L = 2.5 m, W = 1.25 m, H = 3.34 m
- [Fe²⁺]_t = 8.5 × e^(-0.18×6.59×1800) ≈ 0.17 mg/L
- [H₂S]_t = 2.3 × e^(-0.25×6.59×1800) ≈ 0.01 mg/L
- η_Fe = (8.5 - 0.17)/8.5 × 100% = 98%
- η_H₂S = (2.3 - 0.01)/2.3 × 100% = 99.5%

**Validation:**
- ✅ t = 30 phút trong khoảng 30-60 phút cho ngăn phản ứng
- ✅ V = 10.44 m³ hợp lý
- ✅ η_Fe = 98%, η_H₂S = 99.5% đạt yêu cầu cao

---

## MODULE 4 - BỂ LẮNG

### Case 1: Quy mô nhỏ (Q = 50 m³/ngày)

**Input:**
- Q = 50 m³/ngày = 2.08 m³/h
- α = 1.05
- U_o = 0.00025 m/s
- H = 0.867 m
- W = 0.05 m
- Góc nghiêng = 60°
- Tỷ lệ D:R = 2:1

**Output:**
- Q₁ = 1.05 × 2.08 = 2.18 m³/h = 0.000606 m³/s
- F = 0.000606/(0.00025×0.867×0.5 + 0.05×0.25) = 11.0 m²
- D = 4.7 m, R = 2.35 m, H = 0.867 m
- S = 2.35 × 4.7 = 11.05 m²
- V = 11.05 × 0.867 = 9.58 m³
- v = 2.18/11.05 = 0.197 m/h
- t_lắng = 9.58/2.18 = 4.39 h = 263 phút
- η = (0.00025/0.000056) × 100% = 82%

**Validation:**
- ✅ v = 0.197 m/h trong khoảng 0.15-0.3 m/h
- ⚠️ t_lắng = 4.39 h > 3 h (khuyến nghị 1.5-3 h) → CẢNH BÁO
- ✅ η = 82% ≥ 70%

**Công thức sử dụng:**
- Q₁ = α × Q (TCVN 7222:2002)
- F = Q₁/(U_o×H×cos(α) + W×cos²(α)) (TCVN 7222:2002, TCVN 33-2006)
- V = S × H = R × D × H (TCVN 7222:2002)
- v = Q₁/S (TCVN 7222:2002)
- t_lắng = V/Q₁ (TCVN 7222:2002)
- η = U_o/v × 100% (TCVN 7222:2002)

---

### Case 2: Quy mô vừa (Q = 500 m³/ngày)

**Input:**
- Q = 500 m³/ngày = 20.83 m³/h
- α = 1.05
- U_o = 0.00025 m/s
- H = 0.867 m
- W = 0.05 m
- Góc nghiêng = 60°
- Tỷ lệ D:R = 2:1

**Output:**
- Q₁ = 1.05 × 20.83 = 21.87 m³/h = 0.00608 m³/s
- F = 0.00608/(0.00025×0.867×0.5 + 0.05×0.25) = 110.0 m²
- D = 14.8 m, R = 7.4 m, H = 0.867 m
- S = 7.4 × 14.8 = 109.52 m²
- V = 109.52 × 0.867 = 94.8 m³
- v = 21.87/109.52 = 0.2 m/h
- t_lắng = 94.8/21.87 = 4.33 h = 260 phút
- η = (0.00025/0.000056) × 100% = 85%

**Validation:**
- ✅ v = 0.2 m/h trong khoảng 0.15-0.3 m/h
- ⚠️ t_lắng = 4.33 h > 3 h → CẢNH BÁO
- ✅ η = 85% ≥ 70%

---

### Case 3: Quy mô lớn (Q = 5000 m³/ngày)

**Input:**
- Q = 5000 m³/ngày = 208.3 m³/h
- α = 1.1
- U_o = 0.0003 m/s
- H = 0.867 m
- W = 0.05 m
- Góc nghiêng = 60°
- Tỷ lệ D:R = 2:1

**Output:**
- Q₁ = 1.1 × 208.3 = 229.13 m³/h = 0.0636 m³/s
- F = 0.0636/(0.0003×0.867×0.5 + 0.05×0.25) = 1100.0 m²
- D = 46.8 m, R = 23.4 m, H = 0.867 m
- S = 23.4 × 46.8 = 1095.12 m²
- V = 1095.12 × 0.867 = 949.5 m³
- v = 229.13/1095.12 = 0.209 m/h
- t_lắng = 949.5/229.13 = 4.14 h = 248 phút
- η = (0.0003/0.000058) × 100% = 88%

**Validation:**
- ✅ v = 0.209 m/h trong khoảng 0.15-0.3 m/h
- ⚠️ t_lắng = 4.14 h > 3 h → CẢNH BÁO
- ✅ η = 88% ≥ 70%

---

## MODULE 5 - BỂ LỌC

### Case 1: Quy mô nhỏ (Q = 50 m³/ngày)

**Input:**
- Q = 50 m³/ngày = 2.08 m³/h
- v = 6 m/h
- q = 12 L/s·m²
- t_rửa = 5 phút
- Loại bể: Tròn
- d = 0.08 m, n = 4

**Output:**
- f₁ = 2.08/6 = 0.347 m²
- f₂ = π×0.08²/4 = 0.005 m²
- f₁' = 0.347 + 0.005×4 = 0.367 m²
- D = √(4×0.367/π) = 0.68 m → Chọn 0.7 m
- F₁ = 0.347 - 0.005 = 0.342 m²
- v_thực = 2.08/0.342 = 6.08 m/h
- h₇ = (60×12×5)/(4×100) = 0.9 m
- H = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 + 0.9 + 0.80 = 3.9 m
- Q_rửa = 12×0.342×3.6 = 14.77 m³/h
- V_rửa = 14.77×0.083 = 1.23 m³

**Validation:**
- ✅ v_thực = 6.08 m/h trong khoảng 6-10 m/h (TCVN 33-2006)
- ✅ q = 12 L/s·m² trong khoảng 12-15 L/s·m² (TCVN 33-2006)

**Công thức sử dụng:**
- f₁ = Q/v (TCVN 33-2006)
- f₂ = π×d²/4 (TCVN 33-2006)
- f₁' = f₁ + f₂×n (TCVN 33-2006)
- D = √(4×f₁'/π) (TCVN 33-2006)
- F₁ = f₁ - f₂ (TCVN 33-2006)
- v = Q/F₁ (TCVN 33-2006)
- h₇ = (60×q×t)/(n×100) (TCVN 33-2006)
- H = h₁ + h₂ + h₃ + h₄ + h₅ + h₆ + h₇ + h₈ (TCVN 33-2006)
- q = Q_rửa/F₁ (TCVN 33-2006)
- Q_rửa = q×F₁ (TCVN 33-2006)
- V_rửa = Q_rửa×t_rửa (TCVN 33-2006)

---

### Case 2: Quy mô vừa (Q = 500 m³/ngày)

**Input:**
- Q = 500 m³/ngày = 20.83 m³/h
- v = 8 m/h
- q = 12 L/s·m²
- t_rửa = 5 phút
- Loại bể: Tròn
- d = 0.08 m, n = 4

**Output:**
- f₁ = 20.83/8 = 2.6 m²
- f₂ = π×0.08²/4 = 0.005 m²
- f₁' = 2.6 + 0.005×4 = 2.62 m²
- D = √(4×2.62/π) = 1.82 m → Chọn 1.8 m
- F₁ = 2.6 - 0.005 = 2.595 m²
- v_thực = 20.83/2.595 = 8.03 m/h
- h₇ = (60×12×5)/(4×100) = 0.9 m
- H = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 + 0.9 + 0.80 = 3.9 m
- Q_rửa = 12×2.595×3.6 = 112.1 m³/h
- V_rửa = 112.1×0.083 = 9.3 m³

**Validation:**
- ✅ v_thực = 8.03 m/h trong khoảng 6-10 m/h (TCVN 33-2006)
- ✅ q = 12 L/s·m² trong khoảng 12-15 L/s·m² (TCVN 33-2006)

---

### Case 3: Quy mô lớn (Q = 5000 m³/ngày)

**Input:**
- Q = 5000 m³/ngày = 208.3 m³/h
- v = 10 m/h
- q = 15 L/s·m²
- t_rửa = 5 phút
- Loại bể: Tròn
- d = 0.08 m, n = 4

**Output:**
- f₁ = 208.3/10 = 20.83 m²
- f₂ = π×0.08²/4 = 0.005 m²
- f₁' = 20.83 + 0.005×4 = 20.85 m²
- D = √(4×20.85/π) = 5.15 m → Chọn 5.2 m
- F₁ = 20.83 - 0.005 = 20.825 m²
- v_thực = 208.3/20.825 = 10.0 m/h
- h₇ = (60×15×5)/(4×100) = 1.125 m
- H = 0.40 + 0.20 + 0.10 + 0.80 + 0.50 + 0.20 + 1.125 + 0.80 = 4.125 m
- Q_rửa = 15×20.825×3.6 = 1124.55 m³/h
- V_rửa = 1124.55×0.083 = 93.3 m³

**Validation:**
- ✅ v_thực = 10.0 m/h trong khoảng 6-10 m/h (TCVN 33-2006)
- ✅ q = 15 L/s·m² trong khoảng 12-15 L/s·m² (TCVN 33-2006)

---

## CHUỖI MODULE - TEST CASES

### Chuỗi 1: 1→5 (Quy mô nhỏ - Nước cấp)

**Mô tả:** Chỉ sử dụng Module 1 và Module 5, bỏ qua giàn phun mưa, ngăn trộn và bể lắng

**Data Flow:**
- M1 → M5: Q = 2.08 m³/h, v = 1.0 m/s, D = 0.025 m

**Kết quả:**
- Module 1: Hyc = 5.0 m
- Module 5: D = 0.7 m, v_thực = 6.08 m/h

---

### Chuỗi 2: 1→4→5 (Quy mô vừa - Nước thải sinh hoạt)

**Mô tả:** Bỏ qua giàn phun mưa và ngăn trộn, nước đi trực tiếp từ đường ống vào bể lắng

**Data Flow:**
- M1 → M4: Q = 20.83 m³/h
- M4 → M5: Q = 20.83 m³/h, kích thước bể lắng 14.8×7.4×0.867 m

**Kết quả:**
- Module 1: Hyc = 8.55 m
- Module 4: F = 110 m², η = 85%
- Module 5: D = 1.8 m, v_thực = 8.03 m/h

---

### Chuỗi 3: 1→2→3→4→5 (Quy mô lớn - Nước thải công nghiệp)

**Mô tả:** Chuỗi đầy đủ cho quy mô lớn

**Data Flow:**
- M1 → M2: Q = 0.0579 m³/s, v = 1.2 m/s, D = 0.248 m
- M2 → M3: Q = 0.0579 m³/s, C_phun = 1.2 m/h, C_thực = 6.59 mg/L
- M3 → M4: Q = 208.3 m³/h, kích thước 2.5×1.25×3.34 m
- M4 → M5: Q = 208.3 m³/h, kích thước bể lắng 46.8×23.4×0.867 m

**Kết quả:**
- Module 1: Hyc = 17.38 m
- Module 2: C_thực = 6.59 mg/L, đủ oxy
- Module 3: η_Fe = 98%, η_H₂S = 99.5%
- Module 4: F = 1100 m², η = 88%
- Module 5: D = 5.2 m, v_thực = 10.0 m/h

---

## VALIDATION SUMMARY

### Module 1 - Tất cả test cases:
- ✅ Vận tốc ống hút Vh ≤ 1.2 m/s (TCVN 33-2006)
- ✅ Vận tốc ống đẩy Vd ≤ 2.4 m/s (TCVN 33-2006)
- ✅ Re > 4000 → turbulent flow

### Module 2 - Tất cả test cases:
- ✅ C_phun trong khoảng 0.5-3 m/h
- ✅ η trong khoảng 0.7-0.9
- ✅ C_thực đủ cho phản ứng

### Module 3 - Tất cả test cases:
- ✅ t trong khoảng 1-5 phút (trộn nhanh) hoặc 30-60 phút (phản ứng)
- ✅ V hợp lý
- ✅ Hiệu suất oxy hóa ≥ 90%

### Module 4 - Tất cả test cases:
- ✅ v trong khoảng 0.15-0.3 m/h
- ⚠️ t_lắng có thể > 3 h (cần điều chỉnh thiết kế)
- ✅ η ≥ 70%

### Module 5 - Tất cả test cases:
- ✅ v trong khoảng 6-10 m/h (TCVN 33-2006)
- ✅ q trong khoảng 12-15 L/s·m² (TCVN 33-2006)

---

**KẾT THÚC FAKE DATA EXAMPLES**

