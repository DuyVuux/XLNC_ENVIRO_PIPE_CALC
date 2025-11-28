# Chunk 05: Module 4 & 5 Formulas - Settling & Filtration / Công thức Module 4 & 5 - Bể lắng & Bể lọc

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_05`  
**Section:** IV.2.4 Module 4 - Sedimentation, IV.2.5 Module 5 - Filtration Formulas  
**Word Count:** ~550 words  
**Retrieval Keywords:** Module 4, Module 5, sedimentation, settling tank, filtration, filter area, backwash, TCVN 33-2006, TCVN 7222:2002  
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_04`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_06`  
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_2_4_5`

---

## IV.2.4. Module 4 — Sedimentation Tank (Bể lắng)

**Vietnamese (chi tiết):**

**Công suất nước vào bể lắng (Inlet flowrate):**
$$
Q_1 = \alpha \times Q
$$
- Q₁: m³/h (công suất nước vào)
- α: Hệ số an toàn (thường α = 1.05)
- Q: m³/h (lưu lượng từ Module 3)

**Chiều cao khối trụ lắng nghiêng (Inclined settling cylinder height):**
$$
H = \frac{H_0}{\cos(\alpha)}
$$
- H: m (chiều cao khối trụ lắng nghiêng)
- H₀: m (chiều cao thực tế, thường H₀ = 0.9 m)
- α: độ (góc nghiêng của ống lắng, thường α = 60°)

**Diện tích mặt bằng cần thiết của bể lắng (Required surface area):**
$$
F = \frac{Q_1}{U_o \times H \times \cos(\alpha) + W \times \cos^2(\alpha)}
$$
- F: m² (diện tích mặt bằng)
- Q₁: m³/s (công suất nước vào)
- U_o: m/s (tốc độ lắng của hạt, thường U_o = 0.00025 m/s)
- H: m (chiều cao khối trụ lắng nghiêng, thường H = 0.867 m)
- α: độ (góc nghiêng, thường α = 60°)
- W: m (chiều rộng ống lắng, thường W = 0.05 m)

**Thể tích bể lắng (Tank volume):**
$$
V = S \times H = R \times D \times H
$$
- V: m³ (thể tích)
- S: m² (diện tích mặt bể lắng)
- R: m (bán kính hoặc chiều rộng)
- D: m (đường kính hoặc chiều dài)
- H: m (chiều cao)

**Tốc độ lắng bề mặt (Surface settling velocity):**
$$
v = \frac{Q_1}{S}
$$
- v: m/h (tốc độ lắng bề mặt)

**Thời gian lắng (Settling time):**
$$
t_{\text{lắng}} = \frac{V}{Q_1}
$$
- t_lắng: h, phút (thời gian lắng)

**Hiệu suất lắng (Settling efficiency):**
$$
\eta = \frac{U_o}{v} \times 100\%
$$
- η: % (hiệu suất lắng)

**Nguồn công thức:** TCVN 7222:2002, TCVN 33-2006, lý thuyết lắng

---

## IV.2.5. Module 5 — Filtration (Bể lọc)

**Vietnamese (chi tiết):**

**Diện tích bể lọc (Filter area):**
$$
f_1 = \frac{Q}{v}
$$
- f₁: m² (diện tích bể lọc)
- Q: m³/h (lưu lượng nước)
- v: m/h (vận tốc lọc, khuyến nghị: 6-10 m/h theo TCVN 33-2006)

**Đường kính bể được tính (Calculated tank diameter):**
$$
D = \sqrt{\frac{4 \times f_1'}{\pi}}
$$
- D: m (đường kính bể)
- f₁': m² (tổng diện tích ngăn bể)

**Vận tốc lọc thực tế (Actual filtration velocity):**
$$
v = \frac{Q}{F_1}
$$
- v: m/h (vận tốc lọc thực tế)
- F₁: m² (diện tích lọc thực tế)

**Chiều cao két rửa (Backwash tank height):**
$$
h_7 = \frac{60 \times q \times t}{n \times 100}
$$
- h₇: m (chiều cao két rửa)
- q: l/s·m² (cường độ rửa lọc, khuyến nghị: 12-15 l/s·m² theo TCVN 33-2006)
- t: phút (thời gian rửa lọc)
- n: Số ngăn bể

**Tổng chiều cao bể lọc (Total filter height):**
$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$
- H: m (tổng chiều cao bể lọc)
- h₁: m (chiều cao bộ phận thu đáy, thường 0.40 m)
- h₂: m (chiều cao bản lọc, thường 0.20 m)
- h₃: m (chiều cao lớp đệm/sỏi đỡ, thường 0.10 m)
- h₄: m (chiều cao lớp vật liệu lọc, thường 0.80 m)
- h₅: m (chiều cao lớp nước trong, thường 0.50 m)
- h₆: m (chiều cao bản đỉnh, thường 0.20 m)
- h₇: m (chiều cao két rửa, tính theo công thức)
- h₈: m (chiều cao bảo vệ, thường 0.80 m)

**Cường độ rửa lọc (Backwash intensity):**
$$
q = \frac{Q_{\text{rửa}}}{F_1}
$$
- q: l/s·m² (cường độ rửa lọc, khuyến nghị: 12-15 l/s·m² theo TCVN 33-2006)
- Q_rửa: m³/h (lưu lượng nước rửa lọc)

**Lưu lượng nước rửa lọc (Backwash flowrate):**
$$
Q_{\text{rửa}} = q \times F_1
$$

**Chu kỳ lọc (Filtration cycle):**
$$
T_{\text{lọc}} = \frac{V_{\text{bùn}} \times F_1}{Q \times C}
$$
- T_lọc: h (chu kỳ lọc, thời gian giữa hai lần rửa)
- V_bùn: m³/m² (dung tích chứa bùn của vật liệu lọc)
- F₁: m² (diện tích lọc thực tế)
- Q: m³/h (lưu lượng nước)
- C: mg/l (hàm lượng cặn trong nước vào)

**Chu kỳ lọc khuyến nghị:**
- T_lọc = 12 - 48 h (tùy chất lượng nước vào)
- Khi tổn thất áp lực đạt 2.5 - 3.0 m cần rửa lọc

**Nguồn công thức:** TCVN 33-2006, TCVN 7222:2002, công thức Kozeny-Carman (cho tổn thất áp lực qua lớp lọc)

**English (concise):**

Module 4 formulas: Q₁ = α×Q, H = H₀/cos(α), F = Q₁/(U_o×H×cos(α)+W×cos²(α)), V = S×H, v = Q₁/S, t_lắng = V/Q₁, η = U_o/v×100%. Module 5 formulas: f₁ = Q/v, D = √(4×f₁'/π), v = Q/F₁, h₇ = (60×q×t)/(n×100), H = Σh_i, q = Q_rửa/F₁, T_lọc = (V_bùn×F₁)/(Q×C).

**Hóa phàm:**

Module 4 tính bể lắng: diện tích, thể tích, tốc độ lắng, hiệu suất lắng. Module 5 tính bể lọc: diện tích lọc, đường kính, chiều cao các lớp, cường độ rửa lọc, chu kỳ lọc.

---

**Previous Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_04`  
**Next Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_06` (Domain Glossary & Reference Tables)







