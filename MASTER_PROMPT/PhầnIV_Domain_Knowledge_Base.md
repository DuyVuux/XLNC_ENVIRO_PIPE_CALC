# IV. DOMAIN KNOWLEDGE BASE / KHO TRI THỨC NGÀNH

---

## ⚠️ PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI (BẮT BUỘC)

**🔴 LƯU Ý ĐẶC BIỆT:** Phần IV là phần **BẮT BUỘC** - AI PHẢI nắm vững tất cả công thức, tiêu chuẩn, và thuật ngữ trong phần này để tính toán chính xác.

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnIV_Domain_Knowledge_Base.md` - kho tri thức ngành về tiêu chuẩn kỹ thuật Việt Nam, công thức tính toán, và thuật ngữ ngành xử lý nước. File này là nguồn tham chiếu BẮT BUỘC cho mọi tính toán.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. **Nắm vững tất cả tiêu chuẩn TCVN/QCVN (IV.1)** - KHÔNG được tự bịa đặt
2. **Sử dụng đúng công thức từ thư viện (IV.2)** - mỗi module có công thức riêng
3. **Dùng đúng thuật ngữ ngành (IV.3)** - nhất quán EN-VI
4. **Tra cứu bảng tham chiếu (IV.4)** - độ nhám, độ nhớt, oxy bão hòa, etc.
5. **Kiểm tra khoảng giá trị (IV.5)** - cảnh báo nếu vượt ngưỡng
6. **Hiểu quy trình thi công (IV.6)** - để đưa ra phương án khả thi
7. **Áp dụng hướng dẫn lý luận (IV.7)** - domain-aware reasoning
8. **Nắm giới hạn rõ ràng (IV.8)** - khi nào cần kiểm duyệt người

**C. Input Format / Định dạng đầu vào:**

File này được tra cứu khi:
- Tính toán bất kỳ module nào (1-5)
- Cần công thức tính toán cụ thể
- Cần kiểm tra tiêu chuẩn TCVN/QCVN
- Cần tra cứu thuật ngữ hoặc bảng tham chiếu
- Cần validate kết quả với khoảng giá trị tham chiếu

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng nguồn công thức (ví dụ: "Theo IV.2.1, công thức Darcy-Weisbach: Htt = λ·L·v²/(D·2g)")
- Ghi rõ tiêu chuẩn áp dụng (ví dụ: "Theo TCVN 33-2006 (IV.1.1), Vh ≤ 1.2 m/s")
- Sử dụng đúng thuật ngữ từ glossary (IV.3)
- Cảnh báo nếu giá trị vượt khoảng tham chiếu (IV.5)

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought + Domain-aware reasoning (IV.7) khi tính toán:
1. **Bước 1:** Xác định module cần tính (1-5)
2. **Bước 2:** Tra cứu công thức tương ứng (IV.2.1-IV.2.5)
3. **Bước 3:** Kiểm tra tiêu chuẩn áp dụng (IV.1) - TCVN 33-2006, TCVN 7222:2002
4. **Bước 4:** Tra cứu bảng tham chiếu nếu cần (IV.4) - độ nhám, độ nhớt, etc.
5. **Bước 5:** Tính toán theo công thức, ghi rõ nguồn
6. **Bước 6:** Kiểm tra kết quả với khoảng tham chiếu (IV.5) - cảnh báo nếu vượt ngưỡng
7. **Bước 7:** Áp dụng hướng dẫn lý luận (IV.7) - kiểm tra tính hợp lý, xử lý đơn vị, giải thích công thức

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

**Các ràng buộc BẮT BUỘC:**
- KHÔNG được tự bịa đặt công thức hoặc tiêu chuẩn (IV.7.5, II.8) - chỉ dùng công thức có nguồn rõ ràng
- PHẢI ghi rõ nguồn công thức và tiêu chuẩn (II.2.1, IV.2)
- PHẢI sử dụng đúng thuật ngữ từ glossary (IV.3, II.2.3)
- PHẢI kiểm tra khoảng giá trị tham chiếu (IV.5) - cảnh báo nếu vượt ngưỡng
- PHẢI tuân thủ hướng dẫn lý luận domain-aware (IV.7)
- PHẢI nắm giới hạn rõ ràng (IV.8) - khi nào cần kiểm duyệt người

**G. Examples / Ví dụ:**

**Ví dụ 1 - Sử dụng công thức:**
> "Theo IV.2.1 (Module 1), công thức Darcy-Weisbach: Htt = λ·L·v²/(D·2g). Nguồn: TCVN 33-2006. Với Q = 0.00579 m³/s, D = 0.055 m, L = 120 m, tính được Htt = 3.2 m."

**Ví dụ 2 - Kiểm tra tiêu chuẩn:**
> "Theo IV.1.1 (TCVN 33-2006), vận tốc ống đẩy Vd ≤ 2.4 m/s. Kết quả tính được v_d = 2.38 m/s - gần ngưỡng, cần cảnh báo."

**Ví dụ 3 - Tra cứu bảng:**
> "Theo IV.4.1, độ nhám ống PVC: ε = 0.0000015 - 0.000007 m. Chọn ε = 0.0001 m cho tính toán."

**Ví dụ 4 - Cảnh báo vượt ngưỡng:**
> "Theo IV.5, vận tốc lọc khuyến nghị: 6-10 m/h. Kết quả tính được v = 12 m/h > 10 m/h → CẢNH BÁO: Vượt ngưỡng TCVN 33-2006. Đề xuất kiểm duyệt người (II.1.4)."

---

*Ghi chú: Phần này tập trung toàn bộ tiêu chuẩn kỹ thuật, công thức tính toán, thuật ngữ ngành, và quy trình thi công thực tế để AI tính toán chính xác theo tiêu chuẩn Việt Nam. Phần này bổ sung và chi tiết hóa nội dung tổng quan trong I.7 (Assumptions & Constraints) và I.5 (Scope & Modules).*

---

## IV.1. National Standards & Regulations / Tiêu chuẩn quốc gia

**Vietnamese (chi tiết):**

**IV.1.1. TCVN – Vietnamese Standards (Tiêu chuẩn Việt Nam):**

AI phải tuân thủ tuyệt đối các tiêu chuẩn này và **KHÔNG được tự tạo số liệu** (theo II.8 "Do not" list).

**Các tiêu chuẩn thông dụng nhất trong xử lý nước:**

1. **TCVN 33:2006** — Cấp nước – Mạng lưới đường ống và công trình
   - Vận tốc ống hút: Vh ≤ 1.2 m/s
   - Vận tốc ống đẩy: Vd ≤ 2.4 m/s
   - Vận tốc lọc: 6-10 m/h
   - Cường độ rửa lọc: 12-15 l/s·m²
   - **Áp dụng cho:** Module 1 (đường ống), Module 5 (bể lọc)

2. **TCVN 4513:1988** — Cấp nước bên trong – Quy phạm thiết kế
   - Áp dụng cho hệ thống cấp nước trong nhà

3. **TCVN 5502:2003** — Nước sinh hoạt – Yêu cầu chất lượng
   - Tiêu chuẩn chất lượng nước đầu ra

4. **TCVN 7957:2008** — Thoát nước – Mạng lưới và công trình
   - Áp dụng cho hệ thống thoát nước

5. **TCVN 7222:2002** — Hệ thống xử lý nước thải – Quy phạm thiết kế
   - Áp dụng cho Module 2, 3, 4, 5 khi xử lý nước thải

6. **TCVN 9113:2012** — Ống và phụ kiện gang dẻo
   - Áp dụng cho Module 1 (vật liệu ống)

7. **TCVN 6151:1996** — Ống nhựa PVC dùng cho nước
   - Áp dụng cho Module 1 (vật liệu ống PVC)

8. **TCVN 10304:2014** — Bể chứa – Yêu cầu kỹ thuật thiết kế
   - Áp dụng cho Module 4 (bể lắng), Module 5 (bể lọc)

**IV.1.2. QCVN – Regulatory Limits (Quy chuẩn Việt Nam):**

1. **QCVN 01:2009/BYT** — Nước sinh hoạt
2. **QCVN 02:2009/BYT** — Nước ăn uống
3. **QCVN 08-MT:2015/BTNMT** — Chất lượng nước mặt
4. **QCVN 09-MT:2015/BTNMT** — Nước ngầm
5. **QCVN 14:2008/BTNMT** — Nước thải sinh hoạt
6. **QCVN 40:2011/BTNMT** — Nước thải công nghiệp

**Lưu ý quan trọng (theo II.8):**
- AI không được tự tạo tiêu chuẩn
- Nếu thiếu thông tin về tiêu chuẩn → phải hỏi lại người dùng hoặc đề xuất kiểm duyệt người (II.1.4)
- Không được pha trộn tiêu chuẩn giữa nước cấp & nước thải trừ khi người dùng yêu cầu rõ ràng

**English (concise):**

TCVN standards: 33:2006 (water supply networks, Vh≤1.2 m/s, Vd≤2.4 m/s, v_filter=6-10 m/h, q_backwash=12-15 l/s·m²), 4513:1988, 5502:2003, 7957:2008, 7222:2002, 9113:2012, 6151:1996, 10304:2014. QCVN: 01:2009/BYT, 02:2009/BYT, 08-MT:2015/BTNMT, 09-MT:2015/BTNMT, 14:2008/BTNMT, 40:2011/BTNMT. AI must NOT invent standards per II.8.

**Hóa phàm:**

AI phải tuân thủ các tiêu chuẩn TCVN và QCVN, không được tự bịa đặt. Nếu thiếu thông tin phải hỏi lại.

---

## IV.2. Engineering Formulas Library / Thư viện công thức tính toán

**Vietnamese (chi tiết):**

AI phải luôn ghi rõ công thức đã sử dụng và đơn vị (theo II.2.1, II.3). Tất cả công thức phải có nguồn (TCVN, tài liệu kỹ thuật).

**IV.2.1. Module 1 — Pipelines (Đường ống):**

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

**IV.2.2. Module 2 — Aeration/Spray Rain Tower (Giàn phun mưa):**

**Oxy bão hòa trong nước theo nhiệt độ (Saturated oxygen):**
$$
C_{ox} = \frac{468}{31.6 + t}
$$
- C_ox: mg/l (oxy bão hòa)
- t: °C (nhiệt độ nước)

**Lượng oxy cần thiết cho phản ứng oxy hóa Fe²⁺:**
$$
O_2 \text{ (cần cho Fe}^{2+}) = 0.143 \times C(Fe^{2+})
$$
- C(Fe²⁺): mg/l (nồng độ Fe²⁺ ban đầu)

**Lượng oxy cần thiết cho phản ứng oxy hóa H₂S:**
$$
O_2 \text{ (cần cho } H_2S) = 0.47 \times C(H_2S)
$$
- C(H₂S): mg/l (nồng độ H₂S ban đầu)

**Tổng lượng oxy cần thiết (Total oxygen required):**
$$
C_{ht} = 0.47 \times C(H_2S) + 0.143 \times C(Fe^{2+}) + C_{ox}
$$
- C_ht: mg/l (tổng lượng oxy cần thiết)

**Cường độ phun mưa (Spray intensity):**
$$
C_{phun} = \frac{Q}{A}
$$
- C_phun: m/h (cường độ phun mưa)
- Q: m³/h (lưu lượng nước)
- A: m² (diện tích giàn phun mưa)

**Lượng oxy hòa tan thực tế sau phun mưa (Actual dissolved oxygen):**
$$
C_{thực} = C_{ox} \times \eta
$$
- C_thực: mg/l (oxy hòa tan thực tế)
- η: Hiệu suất phun mưa (thường 0.7 - 0.9)

**Nguồn công thức:** TCVN 7222:2002, công thức oxy hòa tan theo nhiệt độ

**IV.2.3. Module 3 — Rapid Mixing/Reaction (Ngăn trộn, phản ứng):**

**Thể tích ngăn trộn (Mixing tank volume):**
$$
V = Q \times t
$$
- V: m³ (thể tích ngăn trộn)
- Q: m³/s, m³/h (lưu lượng nước)
- t: s, phút, h (thời gian trộn)

**Thời gian trộn (Mixing time):**
$$
t = \frac{V}{Q}
$$

**Kích thước ngăn trộn (Tank dimensions):**
$$
L = \frac{V}{H \times W}
$$
- L: m (chiều dài)
- H: m (chiều cao)
- W: m (chiều rộng)

**Tốc độ phản ứng bậc 1 (First-order reaction rate):**
$$
r = k \times [A]
$$
- r: mol/l·s hoặc mg/l·s (tốc độ phản ứng)
- k: 1/s (hằng số tốc độ phản ứng)
- [A]: mol/l hoặc mg/l (nồng độ chất phản ứng)

**Tốc độ phản ứng bậc 2 (Second-order reaction rate):**
$$
r = k \times [A] \times [B]
$$
- r: mol/l·s (tốc độ phản ứng)
- k: l/mol·s (hằng số tốc độ phản ứng)
- [A], [B]: mol/l (nồng độ các chất phản ứng)

**Tốc độ phản ứng oxy hóa Fe²⁺ (Reaction rate for Fe²⁺):**
$$
r_{Fe} = k_{Fe} \times [Fe^{2+}] \times [O_2]
$$
- r_Fe: mg/l·s (tốc độ phản ứng)
- k_Fe: l/mg·s (hằng số tốc độ phản ứng)
- [Fe²⁺]: mg/l (nồng độ Fe²⁺)
- [O₂]: mg/l (nồng độ oxy)

**Tốc độ phản ứng oxy hóa H₂S (Reaction rate for H₂S):**
$$
r_{H_2S} = k_{H_2S} \times [H_2S] \times [O_2]
$$
- r_H₂S: mg/l·s (tốc độ phản ứng)
- k_H₂S: l/mg·s (hằng số tốc độ phản ứng)
- [H₂S]: mg/l (nồng độ H₂S)

**Nồng độ Fe²⁺ sau thời gian t (Fe²⁺ concentration after time t):**
$$
[Fe^{2+}]_t = [Fe^{2+}]_0 \times e^{-k_{Fe} \times [O_2] \times t}
$$
- [Fe²⁺]_0: mg/l (nồng độ ban đầu)
- [Fe²⁺]_t: mg/l (nồng độ sau thời gian t)

**Nồng độ H₂S sau thời gian t (H₂S concentration after time t):**
$$
[H_2S]_t = [H_2S]_0 \times e^{-k_{H_2S} \times [O_2] \times t}
$$

**Hiệu suất phản ứng (Reaction efficiency):**
$$
\eta = \frac{[A]_0 - [A]_t}{[A]_0} \times 100\%
$$
- η: % (hiệu suất)
- [A]_0: mg/l (nồng độ ban đầu)
- [A]_t: mg/l (nồng độ sau phản ứng)

**Nguồn công thức:** TCVN 7222:2002, động học phản ứng bậc nhất

**IV.2.4. Module 4 — Sedimentation Tank (Bể lắng):**

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
- Với α = 60°: H = 0.9 / cos(60°) = 0.9 / 0.5 = 1.8 m
- Hoặc có thể chọn H = 0.867 m (theo thiết kế cụ thể)

**Diện tích mặt bằng cần thiết của bể lắng (Required surface area):**
$$
F = \frac{Q_1}{U_o \times H \times \cos(\alpha) + W \times \cos^2(\alpha)}
$$
- F: m² (diện tích mặt bằng)
- Q₁: m³/s (công suất nước vào, chuyển đổi từ m³/h)
- U_o: m/s (tốc độ lắng của hạt, thường U_o = 0.00025 m/s)
- H: m (chiều cao khối trụ lắng nghiêng, thường H = 0.867 m)
- α: độ (góc nghiêng của ống lắng, thường α = 60°)
- W: m (chiều rộng ống lắng hình trụ vuông, thường W = 0.05 m)

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

**IV.2.5. Module 5 — Filtration (Bể lọc):**

**Diện tích bể lọc (Filter area):**
$$
f_1 = \frac{Q}{v}
$$
- f₁: m² (diện tích bể lọc)
- Q: m³/h (lưu lượng nước)
- v: m/h (vận tốc lọc, khuyến nghị: 6-10 m/h theo TCVN 33-2006)

**Diện tích ống thông lưu (Drain pipe area):**
$$
f_2 = \frac{\pi \times d^2}{4}
$$
- f₂: m² (diện tích ống thông lưu)
- d: m (đường kính ống thông lưu)

**Tổng diện tích ngăn bể (Total compartment area):**
$$
f_1' = f_1 + f_2 \times n
$$
- f₁': m² (tổng diện tích)
- n: Số ống thông lưu

**Đường kính bể được tính (Calculated tank diameter):**
$$
D = \sqrt{\frac{4 \times f_1'}{\pi}}
$$
- D: m (đường kính bể)

**Diện tích lọc thực tế (Actual filter area):**
$$
F_1 = f_1 - f_2
$$
- F₁: m² (diện tích lọc thực tế)

**Vận tốc lọc thực tế (Actual filtration velocity):**
$$
v = \frac{Q}{F_1}
$$
- v: m/h (vận tốc lọc thực tế)

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

**Chiều cao tổng H₂ (Total height H₂):**
$$
H_2 = h_1 + h_2 + h_3 + h_4 + h_5 + h_6
$$
- H₂: m (tổng chiều cao từ đáy đến đỉnh bể lọc, không bao gồm két rửa và bảo vệ)

**Hệ thống cấp nước (Water supply system):**
$$
h_7\text{(cấp)} = H_2 - h_6
$$
$$
h_8\text{(cấp)} = H_2 + \Delta h
$$
$$
P_{\text{cấp}} = \rho \times g \times h_8\text{(cấp)}
$$
- h₇(cấp): m (chiều cao từ ống vào bể lọc đến đáy bể cấp nước)
- h₈(cấp): m (chiều cao từ đỉnh bể lọc đến mức nước trong bể cấp)
- P_cấp: Pa (áp lực cấp nước)
- ρ: kg/m³ (mật độ nước = 1000 kg/m³)
- g: m/s² (gia tốc trọng trường = 9.81 m/s²)
- Δh: m (chênh lệch mức nước để tạo áp lực, thường 0.2 - 0.5 m)

**Hệ thống thu nước (Water collection system):**
$$
h_9 = H_1 - H_2
$$
$$
H_1 = H_2 + h_9
$$
$$
V_{\text{thu}} = Q \times t_{\text{dự trữ}}
$$
- h₉: m (chiều cao từ đáy bể thu đến ống xả, thường 0.3 - 0.5 m)
- H₁: m (tổng chiều cao từ đáy bể lọc đến đáy bể thu)
- V_thu: m³ (thể tích bể thu nước)
- Q: m³/h (lưu lượng nước)
- t_dự trữ: h (thời gian dự trữ, thường 0.5 - 1.0 h)

**Hệ thống xi phông (Siphon system):**
$$
h_{11} = H_3 - H_2 - h_{12}
$$
$$
h_{12} = \Delta h_{\text{xi phông}}
$$
$$
H_3 = H_2 + h_{11} + h_{12}
$$
- h₁₁: m (chiều cao từ đỉnh bể lọc đến điểm cao nhất ống xi phông)
- h₁₂: m (chiều cao bổ sung của ống xi phông, thường 0.1 - 0.3 m)
- H₃: m (tổng chiều cao từ đáy bể lọc đến điểm cao nhất xi phông)
- Δh_xi phông: m (chênh lệch để tạo áp lực xi phông, thường 0.1 - 0.3 m)

**Điều kiện để xi phông hoạt động:**
$$
h_{11} + h_{12} \geq H_2 + h_8
$$

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
- Q_rửa: m³/h (lưu lượng rửa)

**Thể tích nước rửa lọc (Backwash volume):**
$$
V_{\text{rửa}} = Q_{\text{rửa}} \times t_{\text{rửa}}
$$
- V_rửa: m³ (thể tích nước rửa)
- Q_rửa: m³/h (lưu lượng nước rửa lọc)
- t_rửa: h (thời gian rửa lọc, thường 5 - 10 phút)

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

Formulas library for 5 modules: Module 1 (Darcy-Weisbach, Colebrook-White, Re=vD/ν), Module 2 (C_ox=468/(31.6+t), C_ht=0.47×C(H₂S)+0.143×C(Fe²⁺)+C_ox, C_phun=Q/A), Module 3 (V=Q×t, r=k×[A]×[O₂], [A]_t=[A]_0×e^(-k×[O₂]×t)), Module 4 (Q₁=α×Q, F=Q₁/(U_o×H×cos(α)+W×cos²(α)), η=U_o/v×100%), Module 5 (f₁=Q/v, q=Q_rửa/F₁, h₇=(60×q×t)/(n×100)). All formulas must cite sources (TCVN, technical documents) per II.2.1, II.3.

**Hóa phàm:**

Tất cả công thức tính toán cho 5 module, có nguồn rõ ràng (TCVN, tài liệu kỹ thuật). AI phải ghi rõ công thức và đơn vị khi tính.

---

## IV.3. Domain Glossary / Từ điển thuật ngữ ngành

**Vietnamese (chi tiết):**

AI phải dùng đúng thuật ngữ nhất quán (theo II.2.3). Tất cả thuật ngữ phải có song ngữ EN-VI.

| Term (EN) | Thuật ngữ (VI) | Meaning / Giải thích | Module áp dụng |
|-----------|----------------|----------------------|----------------|
| Flowrate (Q) | Lưu lượng | Khối lượng nước đi qua 1 điểm trong 1 thời gian (m³/s, m³/h, m³/ngày) | Tất cả (1-5) |
| Velocity (v) | Vận tốc dòng chảy | Tốc độ nước di chuyển trong ống (m/s) | Module 1, 4, 5 |
| Diameter (D) | Đường kính ống | Đường kính trong của ống (m) | Module 1 |
| Head loss (H) | Tổn thất áp lực | Mức giảm năng lượng của nước do ma sát và cục bộ (m) | Module 1, 5 |
| Required head (Hyc) | Cột áp yêu cầu | Tổng cột áp cần thiết cho bơm (m) | Module 1 |
| Reynolds number (Re) | Hệ số Reynolds | Số không thứ nguyên mô tả chế độ dòng chảy (Re<2000: laminar, Re>4000: turbulent) | Module 1 |
| Roughness (ε) | Độ nhám tuyệt đối | Độ nhám bề mặt trong ống (m) | Module 1 |
| Friction factor (λ) | Hệ số ma sát | Hệ số tính tổn thất ma sát (Darcy-Weisbach) | Module 1 |
| Local loss coefficient (β) | Hệ số tổn thất cục bộ | Hệ số tính tổn thất tại phụ kiện (van, cút, tê) | Module 1 |
| Saturated oxygen (C_ox) | Oxy bão hòa | Lượng oxy hòa tan tối đa trong nước ở nhiệt độ nhất định (mg/l) | Module 2 |
| Dissolved oxygen (C_thực) | Oxy hòa tan thực tế | Lượng oxy hòa tan thực tế sau phun mưa (mg/l) | Module 2 |
| Total oxygen required (C_ht) | Tổng lượng oxy cần thiết | Tổng oxy cần cho phản ứng oxy hóa Fe²⁺, H₂S và bão hòa (mg/l) | Module 2 |
| Spray intensity (C_phun) | Cường độ phun mưa | Lưu lượng phun trên đơn vị diện tích (m/h) | Module 2 |
| Aeration efficiency (η) | Hiệu suất phun mưa | Tỷ lệ oxy hòa tan thực tế so với bão hòa (0.7-0.9) | Module 2 |
| Mixing tank volume (V) | Thể tích ngăn trộn | Thể tích bể trộn/phản ứng (m³) | Module 3 |
| Mixing time (t) | Thời gian trộn | Thời gian lưu nước trong ngăn trộn (s, phút, h) | Module 3 |
| Reaction rate (r) | Tốc độ phản ứng | Tốc độ phản ứng hóa học (mg/l·s) | Module 3 |
| Rate constant (k) | Hằng số tốc độ | Hằng số tốc độ phản ứng (l/mg·s) | Module 3 |
| Reaction efficiency (η) | Hiệu suất phản ứng | Tỷ lệ chất phản ứng đã chuyển hóa (%) | Module 3 |
| Surface loading rate (SLR) | Tải trọng bề mặt | Lưu lượng trên đơn vị diện tích bể lắng (m³/m²·h) | Module 4 |
| Settling velocity (U_o) | Tốc độ lắng của hạt | Tốc độ lắng của hạt cặn (m/s, thường 0.00025 m/s) | Module 4 |
| Settling time (t_lắng) | Thời gian lắng | Thời gian lưu nước trong bể lắng (h, phút) | Module 4 |
| Settling efficiency (η) | Hiệu suất lắng | Tỷ lệ cặn được loại bỏ (%) | Module 4 |
| Filtration rate (v) | Vận tốc lọc | Tốc độ lọc nước qua lớp vật liệu lọc (m/h, khuyến nghị: 6-10 m/h) | Module 5 |
| Filter area (F₁) | Diện tích lọc thực tế | Diện tích bề mặt lọc thực tế (m²) | Module 5 |
| Backwash intensity (q) | Cường độ rửa lọc | Lưu lượng rửa trên đơn vị diện tích (l/s·m², khuyến nghị: 12-15 l/s·m²) | Module 5 |
| Backwash flowrate (Q_rửa) | Lưu lượng nước rửa lọc | Lưu lượng nước dùng để rửa lọc (m³/h) | Module 5 |
| Backwash volume (V_rửa) | Thể tích nước rửa lọc | Tổng thể tích nước rửa lọc (m³) | Module 5 |
| Head loss through filter (H) | Tổn thất áp lực qua lớp lọc | Tổn thất áp lực khi nước đi qua lớp vật liệu lọc (m) | Module 5 |

**Lưu ý:** Bảng thuật ngữ này có thể mở rộng lên 200-300 thuật ngữ khi cần. AI phải luôn sử dụng thuật ngữ nhất quán trong mọi phản hồi (theo II.2.3).

**English (concise):**

Domain glossary with EN-VI terms for all 5 modules: flowrate (Q), velocity (v), diameter (D), head loss (H), Reynolds number (Re), saturated oxygen (C_ox), spray intensity (C_phun), mixing time (t), reaction rate (r), settling velocity (U_o), filtration rate (v), backwash intensity (q), etc. AI must use consistent terminology per II.2.3.

**Hóa phàm:**

Bảng từ điển thuật ngữ song ngữ EN-VI cho tất cả 5 module. AI phải dùng đúng thuật ngữ này trong mọi phản hồi.

---

## IV.4. Reference Tables / Bảng tra cứu

**Vietnamese (chi tiết):**

AI phải sử dụng các bảng tra cứu này để kiểm tra tính hợp lý của giá trị (theo II.2.7, II.5).

**IV.4.1. Bảng tra cứu độ nhám ống (Pipe roughness table):**

| Vật liệu ống | Độ nhám ε (mm) | Độ nhám ε (m) | Module |
|--------------|----------------|---------------|--------|
| Ống thép mới | 0.05 - 0.1 | 0.00005 - 0.0001 | Module 1 |
| Ống thép cũ | 0.1 - 0.5 | 0.0001 - 0.0005 | Module 1 |
| Ống gang | 0.25 - 1.0 | 0.00025 - 0.001 | Module 1 |
| Ống bê tông | 0.3 - 3.0 | 0.0003 - 0.003 | Module 1 |
| Ống nhựa (PVC, HDPE) | 0.0015 - 0.007 | 0.0000015 - 0.000007 | Module 1 |

**Nguồn:** TCVN 33-2006, TCVN 9113:2012, TCVN 6151:1996

**IV.4.2. Bảng tra cứu độ nhớt động học của nước (Water kinematic viscosity table):**

| Nhiệt độ t (°C) | Độ nhớt ν (m²/s) | Module |
|-----------------|------------------|--------|
| 0 | 0.00000179 | Module 1, 2, 3 |
| 10 | 0.00000131 | Module 1, 2, 3 |
| 20 | 0.00000101 | Module 1, 2, 3 |
| 25 | 0.00000089 | Module 1, 2, 3 |
| 30 | 0.00000080 | Module 1, 2, 3 |

**Nguồn:** TCVN 33-2006, bảng tra cứu vật lý nước

**IV.4.3. Bảng tra cứu oxy bão hòa trong nước (Saturated oxygen in water table):**

| Nhiệt độ t (°C) | Oxy bão hòa C_ox (mg/l) | Module |
|-----------------|-------------------------|--------|
| 0 | 14.62 | Module 2 |
| 10 | 11.25 | Module 2 |
| 20 | 9.07 | Module 2 |
| 25 | 8.24 | Module 2 |
| 30 | 7.56 | Module 2 |

**Công thức:** C_ox = 468/(31.6 + t) (theo IV.2.2)

**IV.4.4. Bảng tra cứu hệ số tổn thất cục bộ (Local loss coefficient table):**

| Loại phụ kiện | Hệ số β | Module |
|---------------|---------|--------|
| Van cổng mở hoàn toàn | 0.1 - 0.2 | Module 1 |
| Van cầu | 3 - 10 | Module 1 |
| Cút 90° | 0.9 - 1.2 | Module 1 |
| Cút 45° | 0.4 - 0.5 | Module 1 |
| Co thu | 0.1 - 0.5 | Module 1 |
| Co mở | 0.3 - 1.0 | Module 1 |
| Tê thẳng | 0.1 - 0.3 | Module 1 |
| Tê nhánh | 1.0 - 2.0 | Module 1 |

**Nguồn:** TCVN 33-2006

**IV.4.5. Bảng tra cứu thời gian trộn khuyến nghị (Recommended mixing time table):**

| Loại ngăn trộn | Thời gian trộn | Module |
|----------------|----------------|--------|
| Ngăn trộn nhanh | 10 - 30 giây | Module 3 |
| Ngăn trộn chậm | 20 - 40 phút | Module 3 |
| Ngăn phản ứng | 30 - 60 phút | Module 3 |

**Nguồn:** TCVN 7222:2002

**IV.4.6. Bảng tra cứu thời gian lắng khuyến nghị (Recommended settling time table):**

| Loại bể lắng | Thời gian lắng | Module |
|--------------|----------------|--------|
| Bể lắng ngang | 1.5 - 3 h | Module 4 |
| Bể lắng đứng | 1 - 2 h | Module 4 |
| Bể lắng nghiêng | 0.5 - 1.5 h | Module 4 |

**Nguồn:** TCVN 7222:2002, TCVN 33-2006

**IV.4.7. Bảng tra cứu vận tốc lọc khuyến nghị (Recommended filtration rate table):**

| Loại bể lọc | Vận tốc lọc (m/h) | Module |
|-------------|-------------------|--------|
| Bể lọc nhanh trọng lực | 6 - 10 | Module 5 |
| Bể lọc chậm | 0.1 - 0.3 | Module 5 |
| Bể lọc áp lực | 8 - 12 | Module 5 |

**Nguồn:** TCVN 33-2006

**IV.4.8. Bảng tra cứu cường độ rửa lọc khuyến nghị (Recommended backwash intensity table):**

| Loại rửa lọc | Cường độ rửa (l/s·m²) | Module |
|--------------|----------------------|--------|
| Rửa nước đơn thuần | 12 - 15 | Module 5 |
| Rửa khí + nước | 8 - 12 | Module 5 |
| Rửa nước tốc độ cao | 10 - 15 | Module 5 |

**Nguồn:** TCVN 33-2006

**English (concise):**

Reference tables: pipe roughness (ε), water kinematic viscosity (ν), saturated oxygen (C_ox), local loss coefficient (β), mixing time, settling time, filtration rate (v=6-10 m/h), backwash intensity (q=12-15 l/s·m²). AI must use these tables to validate input ranges per II.2.7, II.5.

**Hóa phàm:**

Các bảng tra cứu để AI kiểm tra tính hợp lý của giá trị: độ nhám ống, độ nhớt nước, oxy bão hòa, hệ số tổn thất, thời gian trộn/lắng, vận tốc lọc, cường độ rửa.

---

## IV.5. Reference Ranges / Khoảng giá trị tham chiếu

**Vietnamese (chi tiết):**

AI phải cảnh báo khi giá trị vượt dải chuẩn kỹ thuật (theo II.2.7, II.6.2). Nếu giá trị ngoài khoảng tham chiếu → gắn cờ (flag) và đề xuất kiểm duyệt người (II.1.4).

| Parameter | Typical Range | Note | Module | Tiêu chuẩn |
|-----------|---------------|------|--------|------------|
| v (velocity in pipe) | 0.6 - 2.5 m/s | Ống PVC, HDPE | Module 1 | TCVN 33-2006 |
| V_h (suction velocity) | ≤ 1.2 m/s | Ống hút | Module 1 | TCVN 33-2006 |
| V_d (discharge velocity) | ≤ 2.4 m/s | Ống đẩy | Module 1 | TCVN 33-2006 |
| Re (Reynolds number) | < 2000: laminar<br>2000-4000: transition<br>> 4000: turbulent | Phân loại dòng chảy | Module 1 | - |
| C_ox (saturated oxygen) | 7.56 - 14.62 mg/l | Ở 0-30°C | Module 2 | - |
| C_phun (spray intensity) | 1 - 10 m/h | Cường độ phun mưa | Module 2 | - |
| η (aeration efficiency) | 0.7 - 0.9 | Hiệu suất phun mưa | Module 2 | - |
| t (mixing time) | 10 s - 60 phút | Tùy loại trộn | Module 3 | TCVN 7222:2002 |
| k_Fe (rate constant) | 0.01 - 0.1 l/mg·s | Hằng số tốc độ Fe²⁺ | Module 3 | - |
| k_H₂S (rate constant) | 0.05 - 0.2 l/mg·s | Hằng số tốc độ H₂S | Module 3 | - |
| U_o (settling velocity) | 0.0001 - 0.0005 m/s | Tốc độ lắng hạt | Module 4 | TCVN 7222:2002 |
| SLR (surface loading rate) | 1 - 3 m³/m²·h | Nước cấp<br>0.5 - 1.5 m³/m²·h (nước thải) | Module 4 | TCVN 7222:2002 |
| t_lắng (settling time) | 1.5 - 3 h | Nước sinh hoạt<br>2 - 4 h (nước thải) | Module 4 | TCVN 7222:2002 |
| η (settling efficiency) | ≥ 70% | Hiệu suất lắng | Module 4 | TCVN 7222:2002 |
| v (filtration rate) | 6 - 10 m/h | Lọc nhanh trọng lực | Module 5 | TCVN 33-2006 |
| q (backwash intensity) | 12 - 15 l/s·m² | Cường độ rửa lọc | Module 5 | TCVN 33-2006 |
| t_rửa (backwash time) | 5 - 10 phút | Thời gian rửa lọc | Module 5 | TCVN 33-2006 |

**Ví dụ cảnh báo:**
- Nếu v_d = 2.45 m/s > 2.4 m/s (TCVN 33-2006) → CẢNH BÁO: "Vận tốc ống đẩy vượt ngưỡng TCVN 33-2006 → Đề xuất kiểm duyệt người (II.1.4)"
- Nếu η (settling) < 70% → CẢNH BÁO: "Hiệu suất lắng thấp, cần đánh giá lại thiết kế"
- Nếu v (filtration) > 10 m/h → CẢNH BÁO: "Vận tốc lọc vượt ngưỡng khuyến nghị TCVN 33-2006"

**English (concise):**

Reference ranges for validation: v (0.6-2.5 m/s), V_h (≤1.2 m/s), V_d (≤2.4 m/s), C_ox (7.56-14.62 mg/l), t_mixing (10s-60min), U_o (0.0001-0.0005 m/s), SLR (1-3 m³/m²·h for supply, 0.5-1.5 for wastewater), v_filter (6-10 m/h), q_backwash (12-15 l/s·m²). AI must flag values outside ranges and recommend human review (II.1.4) per II.2.7, II.6.2.

**Hóa phàm:**

Khoảng giá trị tham chiếu để AI kiểm tra tính hợp lý. Nếu giá trị vượt ngưỡng → cảnh báo và đề xuất chuyên gia kiểm duyệt.

---

## IV.6. Real-world Construction Workflow / Quy trình xây lắp thực tế

**Vietnamese (chi tiết):**

Quy trình này giúp AI hiểu trình tự thi công, tránh đưa ra phương án phi thực tế (theo II.2.5 - Provide reasoning + confidence).

**IV.6.1. Survey → Design → Approval (Khảo sát → Thiết kế → Phê duyệt):**

1. **Khảo sát mặt bằng:**
   - Đo đạc địa hình, địa chất
   - Xác định vị trí đặt bể, đường ống
   - Đánh giá không gian, điều kiện thi công

2. **Lấy mẫu nước → phân tích:**
   - Phân tích chất lượng nước đầu vào (Fe²⁺, H₂S, TSS, độ đục)
   - Xác định yêu cầu xử lý
   - Chọn chuỗi module phù hợp (theo I.5, báo cáo tổng hợp Phần 5, 6)

3. **Tính toán công nghệ (5 module):**
   - Module 1: Tính toán đường ống, chọn bơm
   - Module 2-5: Tính toán các bể xử lý theo chuỗi đã chọn

4. **Bố trí mặt bằng:**
   - Sắp xếp vị trí các bể, đường ống
   - Đảm bảo khoảng cách an toàn, dễ bảo trì

5. **Bản vẽ thiết kế cơ sở / kỹ thuật:**
   - Bản vẽ mặt bằng, mặt cắt
   - Bản vẽ chi tiết kết cấu, đường ống
   - Bản vẽ điện, tự động hóa

6. **Thẩm tra, phê duyệt:**
   - Kiểm tra tuân thủ TCVN, QCVN
   - Phê duyệt thiết kế

**IV.6.2. Construction Workflow (Quy trình thi công):**

1. **Định vị tim trục:**
   - Xác định vị trí chính xác các bể, đường ống

2. **Đào đất → làm móng:**
   - Đào hố móng theo thiết kế
   - Đổ bê tông móng

3. **Đổ bê tông đáy, tường, nắp:**
   - Đổ bê tông đáy bể
   - Xây/đổ tường bể
   - Đổ nắp bể (nếu có)

4. **Lắp đặt đường ống chôn & nổi:**
   - Lắp đặt đường ống chôn dưới đất
   - Lắp đặt đường ống nổi trên mặt đất
   - Lắp đặt phụ kiện (van, cút, tê)

5. **Lắp đặt thiết bị (bơm, van, tủ điện):**
   - Lắp đặt bơm (theo kết quả Module 1: Hyc)
   - Lắp đặt van điều khiển
   - Lắp đặt tủ điện, hệ thống tự động hóa

6. **Chạy thử không tải:**
   - Kiểm tra hệ thống không có nước
   - Kiểm tra điện, tự động hóa

7. **Chạy thử có tải:**
   - Chạy thử với nước thật
   - Điều chỉnh các thông số vận hành

8. **Nghiệm thu, bàn giao:**
   - Kiểm tra chất lượng nước đầu ra
   - Nghiệm thu công trình
   - Bàn giao cho chủ đầu tư

**IV.6.3. Operational Constraints (Ràng buộc vận hành):**

- **Bể phải có lối tiếp cận:** Đảm bảo dễ dàng bảo trì, vệ sinh
- **Bố trí đường ống không giao cắt sai quy phạm:** Tuân thủ TCVN 33-2006
- **Van bố trí ở vị trí dễ thao tác:** Đảm bảo an toàn vận hành
- **Đảm bảo tối thiểu:**
  - Độ dốc ống: ≥ 0.3% (TCVN 33-2006)
  - Không khí trong ống không bị khóa: Có van xả khí
  - Dễ bảo trì: Có không gian làm việc

**English (concise):**

Real-world workflow: Survey → Water analysis → Technology calculation (5 modules) → Layout → Design drawings → Approval → Construction (positioning → excavation → concrete → piping → equipment → testing → handover). Operational constraints: access paths, pipe layout per TCVN 33-2006, valve positioning, minimum slope ≥0.3%, air release valves, maintenance space. Helps AI propose realistic sizing per II.2.5.

**Hóa phàm:**

Quy trình thi công thực tế từ khảo sát đến bàn giao, giúp AI hiểu ràng buộc thực tế và đưa ra phương án khả thi.

---

## IV.7. AI Reasoning Instructions (Domain-aware) / Hướng dẫn lý luận cho AI (Nhận thức ngành)

**Vietnamese (chi tiết):**

AI phải tuân thủ các hướng dẫn sau khi tính toán và đưa ra khuyến nghị (theo II.2, II.5, II.6):

**IV.7.1. Kiểm tra tính hợp lý theo TCVN/QCVN:**
- Luôn kiểm tra giá trị tính được có tuân thủ TCVN 33-2006 không (Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s, v_filter = 6-10 m/h, q_backwash = 12-15 l/s·m²)
- Kiểm tra chất lượng nước đầu ra có đạt QCVN không (QCVN 01:2009/BYT, QCVN 02:2009/BYT)
- Nếu không tuân thủ → cảnh báo và đề xuất kiểm duyệt người (II.1.4)

**IV.7.2. So sánh giá trị đầu vào với dải chuẩn:**
- So sánh input với Reference Ranges (IV.5)
- Nếu ngoài dải → cảnh báo và giải thích rủi ro (theo II.2.7)

**IV.7.3. Xử lý đơn vị:**
- Nếu người dùng nhập sai đơn vị → yêu cầu xác nhận hoặc chuyển đổi và hiển thị rõ (theo II.2.3, II.5.3)
- Ví dụ: User nhập "Q = 500" (thiếu đơn vị) → AI phải hỏi: "Q = 500 m³/ngày hay m³/h?" hoặc dùng mặc định thận trọng và ghi rõ "[Mặc định: m³/ngày]"

**IV.7.4. Giải thích công thức:**
- Giải thích bằng 2 dạng:
  - **Professional engineering:** Công thức, nguồn (TCVN), đơn vị, ý nghĩa kỹ thuật
  - **Hóa phàm (simple explanation):** 1-3 câu giải thích dễ hiểu (theo II.3, I.11)

**IV.7.5. Không được tạo công thức không tồn tại:**
- Chỉ dùng công thức có nguồn rõ ràng (TCVN, tài liệu kỹ thuật)
- Không được tự bịa đặt công thức (theo II.8)

**IV.7.6. Không được pha trộn tiêu chuẩn:**
- Không được pha trộn tiêu chuẩn giữa nước cấp & nước thải trừ khi người dùng yêu cầu rõ ràng
- Ví dụ: Không dùng TCVN 33-2006 (nước cấp) cho nước thải nếu không được yêu cầu

**English (concise):**

AI must: Check compliance with TCVN/QCVN (Vh≤1.2 m/s, Vd≤2.4 m/s, v_filter=6-10 m/h, q_backwash=12-15 l/s·m²), compare inputs with reference ranges (IV.5), handle unit errors (request confirmation or convert with flag), explain formulas in professional + plain language (Hóa phàm), never invent formulas (only use formulas with clear sources), never mix standards between supply water and wastewater unless explicitly requested. Per II.2, II.5, II.6, II.8.

**Hóa phàm:**

AI phải kiểm tra tuân thủ tiêu chuẩn, so sánh với dải chuẩn, xử lý đơn vị đúng, giải thích rõ ràng, không được bịa đặt công thức, không được pha trộn tiêu chuẩn.

---

## IV.8. Explicit Limitations / Giới hạn rõ ràng

**Vietnamese (chi tiết):**

AI phải nói rõ khi gặp các trường hợp sau (theo II.2.6, II.6):

**IV.8.1. Không có tiêu chuẩn tương ứng:**
- Nếu không tìm thấy tiêu chuẩn TCVN/QCVN cho trường hợp cụ thể → phải nói rõ: "Không có tiêu chuẩn TCVN/QCVN tương ứng cho trường hợp này. Đề xuất kiểm duyệt người (II.1.4) hoặc tham khảo tiêu chuẩn quốc tế."
- Confidence score = 0.3 (theo II.2.5)

**IV.8.2. Công thức phụ thuộc vào loại nước:**
- Phải nói rõ: "Công thức này áp dụng cho nước cấp (TCVN 33-2006). Nếu là nước thải, cần dùng TCVN 7222:2002."
- Ví dụ: Vận tốc lọc cho nước cấp (6-10 m/h) khác với nước thải (có thể thấp hơn)

**IV.8.3. Thiếu thông số bắt buộc:**
- Nếu thiếu input bắt buộc → trả lỗi có cấu trúc (theo II.6.1):
  - Suggested defaults / Mặc định đề xuất
  - Impact of using defaults / Tác động
  - Exact fields needed / Trường cần bổ sung
- Confidence score = 0 nếu không thể tính được

**IV.8.4. Người dùng nhập giá trị phi thực tế:**
- Ví dụ: Tốc độ lọc v = 250 m/h (quá cao, vượt xa ngưỡng 6-10 m/h)
- AI phải cảnh báo: "CẢNH BÁO: Tốc độ lọc v = 250 m/h vượt xa ngưỡng khuyến nghị TCVN 33-2006 (6-10 m/h). Giá trị này không thực tế. Đề xuất kiểm tra lại input hoặc kiểm duyệt người (II.1.4)."
- Confidence score = 0.2 (rất thấp)

**English (concise):**

AI must explicitly state when: No corresponding standard exists (confidence=0.3, recommend human review II.1.4), formula depends on water type (supply vs wastewater), required inputs missing (structured error per II.6.1, confidence=0), user inputs unrealistic values (e.g., v_filter=250 m/h, flag and recommend review, confidence=0.2). Per II.2.6, II.6.

**Hóa phàm:**

AI phải nói rõ khi không có tiêu chuẩn, công thức phụ thuộc loại nước, thiếu thông số, hoặc giá trị phi thực tế. Phải cảnh báo và đề xuất kiểm duyệt người nếu cần.

---

**KẾT THÚC PHẦN IV. DOMAIN KNOWLEDGE BASE**

*Phần này cung cấp toàn bộ tri thức ngành (tiêu chuẩn, công thức, thuật ngữ, bảng tra cứu, quy trình thi công) để AI tính toán chính xác theo tiêu chuẩn Việt Nam. Phần này bổ sung và chi tiết hóa nội dung trong I.7 (Assumptions & Constraints), I.5 (Scope & Modules), và hỗ trợ II.2 (Behaviors), II.5 (Validation rules), II.6 (Failure modes).*
