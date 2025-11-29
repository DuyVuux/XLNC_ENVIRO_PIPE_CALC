# Chunk 02: Module 1 Formulas - Pipelines / Công thức Module 1 - Đường ống

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_02`  
**Section:** IV.2.1 Module 1 - Pipelines Formulas  
**Word Count:** ~480 words  
**Retrieval Keywords:** Module 1, pipelines, Darcy-Weisbach, Colebrook-White, Reynolds, friction loss, pipe diameter, TCVN 33-2006  
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_01`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_03`  
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_2_1`

---

## IV.2.1. Module 1 — Pipelines (Đường ống)

**Vietnamese (chi tiết):**

AI phải luôn ghi rõ công thức đã sử dụng và đơn vị (theo II.2.1, II.3). Tất cả công thức phải có nguồn (TCVN, tài liệu kỹ thuật).

**Lưu lượng (Flowrate):**
$$
Q = v \cdot A = v \cdot \frac{\pi D^2}{4}
$$
- Q: m³/s, m³/h, m³/ngày
- v: m/s
- A: m² (diện tích tiết diện ống)
- D: m (đường kính ống)

**Đường kính ống (Pipe diameter):**
$$
D_h = \sqrt{\frac{4Q}{\pi V_h}}
$$
$$
D_d = \sqrt{\frac{4Q}{\pi V_d}}
$$
- D_h: Đường kính ống hút (m), V_h = 1.2 m/s (TCVN 33-2006)
- D_d: Đường kính ống đẩy (m), V_d = 2.4 m/s (TCVN 33-2006)

**Độ nhớt động học (Kinematic viscosity):**
$$
\nu = \frac{\mu}{\rho}
$$
- ν: m²/s (độ nhớt động học)
- μ: Pa·s (độ nhớt tuyệt đối)
- ρ: kg/m³ (mật độ chất lỏng, thường 1000 kg/m³ cho nước)

**Độ nhám tương đối (Relative roughness):**
$$
\alpha = \frac{\epsilon}{D}
$$
- α: Không thứ nguyên (độ nhám tương đối)
- ε: m (độ nhám tuyệt đối, tra bảng theo vật liệu ống)
- D: m (đường kính trong của ống)

**Hệ số Reynolds (Reynolds number):**
$$
Re = \frac{v \cdot D}{\nu}
$$
**Công thức thay thế (sử dụng mật độ và độ nhớt tuyệt đối):**
$$
Re = \frac{v \cdot D \cdot \rho}{\mu}
$$
- Re: Không thứ nguyên
- v: m/s (vận tốc)
- D: m (đường kính)
- ν: m²/s (độ nhớt động học của nước, tra bảng theo nhiệt độ)
- ρ: kg/m³ (mật độ chất lỏng)
- μ: Pa·s (độ nhớt tuyệt đối)

**Phân loại dòng chảy:**
- Re < 2000: Dòng chảy laminar (λ = 64/Re)
- 2000 < Re < 4000: Dòng chảy chuyển tiếp
- Re > 4000: Dòng chảy turbulent (dùng Colebrook-White)

**Tổn thất áp lực do ma sát (Friction loss – Darcy-Weisbach):**
$$
H_{tt} = \lambda \cdot \frac{L \cdot v^2}{D \cdot 2g}
$$
- H_tt: m (tổn thất do ma sát)
- λ: Hệ số ma sát (friction factor), tính theo Colebrook-White hoặc tra bảng
- L: m (chiều dài ống)
- v: m/s (vận tốc)
- D: m (đường kính)
- g: 9.81 m/s² (gia tốc trọng trường)

**Hệ số ma sát (Friction factor) – Colebrook-White:**
$$
\frac{1}{\sqrt{\lambda}} = -2 \log_{10} \left( \frac{\epsilon/D}{3.7} + \frac{2.51}{Re \sqrt{\lambda}} \right)
$$
- ε: m (độ nhám tuyệt đối, tra bảng theo vật liệu ống)
- ε/D: Độ nhám tương đối

**Tổn thất cục bộ (Local head loss):**
$$
H_{cb} = \beta \cdot \frac{v^2}{2g}
$$
- H_cb: m (tổn thất cục bộ)
- β: Hệ số tổn thất cục bộ (tra bảng theo loại phụ kiện: van, cút, tê, ...)

**Tổng tổn thất áp lực (Total head loss):**
$$
H_1 = H_{tt} + H_{cb}
$$

**Chênh chiều cao bơm (Static head):**
$$
H_c = H_{ra} - H_{vao}
$$
- H_c: m (chênh chiều cao bơm)
- H_ra: m (chiều cao mực nước đầu ra)
- H_vao: m (chiều cao mực nước đầu vào)

**Cột áp yêu cầu (Required head):**
$$
H_{yc} = H_1 + H_c
$$
- H_yc: m (cột áp yêu cầu của bơm)
- H_1: m (tổng tổn thất áp lực)
- H_c: m (chênh chiều cao bơm)

**Vận tốc thực tế sau khi chọn đường kính (Actual velocity after diameter selection):**
$$
V_{thực} = \frac{4Q}{\pi D_{chọn}^2}
$$
- V_thực: m/s (vận tốc thực tế)
- Q: m³/s (lưu lượng)
- D_chọn: m (đường kính đã chọn tiêu chuẩn)

**Nguồn công thức:** TCVN 33-2006, Darcy-Weisbach equation, Colebrook-White equation

**English (concise):**

Module 1 formulas: Flowrate Q = v·A, pipe diameter D_h/D_d (V_h=1.2 m/s, V_d=2.4 m/s per TCVN 33-2006), kinematic viscosity ν = μ/ρ, Reynolds Re = v·D/ν, flow classification (laminar/turbulent), Darcy-Weisbach friction loss H_tt = λ·L·v²/(D·2g), Colebrook-White friction factor, local head loss H_cb = β·v²/(2g), total head loss H_1 = H_tt + H_cb, static head H_c, required head H_yc = H_1 + H_c.

**Hóa phàm:**

Module 1 tính đường ống: lưu lượng, đường kính, tổn thất ma sát (Darcy-Weisbach), tổn thất cục bộ, và cột áp yêu cầu của bơm.

---

**Previous Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_01`  
**Next Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_03` (Module 2 Formulas - Aeration/Spray)








