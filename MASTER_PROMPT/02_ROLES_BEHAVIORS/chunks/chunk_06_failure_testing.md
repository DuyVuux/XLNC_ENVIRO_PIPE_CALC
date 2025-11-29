# Chunk 06: Failure Modes & Testing/QA / Trường hợp Lỗi & Kiểm thử

**Chunk ID:** `02_ROLES_BEHAVIORS_chunk_06`  
**Section:** II.6 Failure Modes, II.7 Testing/QA  
**Word Count:** ~450 words  
**Retrieval Keywords:** failure modes, escalation, missing input, safety limits, unit tests, test corpus, edge cases, performance metrics  
**Related Chunks:** `02_ROLES_BEHAVIORS_chunk_05`, `02_ROLES_BEHAVIORS_chunk_07`  
**Canonical Summary Reference:** `02_ROLES_BEHAVIORS_summary_section_6_7`

---

### II.6. Failure modes & escalation / Trường hợp lỗi & chuyển tiếp

**Vietnamese (chi tiết):**

**II.6.1. Missing critical input / Thiếu input quan trọng:**

- Trả lỗi có cấu trúc kèm:
  - Suggested defaults / Mặc định đề xuất: Ví dụ "Thiếu nhiệt độ t → đề xuất t = 20°C"
  - Impact of using defaults / Tác động: "Ảnh hưởng: C_ox có thể sai ±5%, confidence giảm xuống 0.70"
  - Exact fields needed / Trường cần bổ sung: "Cần bổ sung: t (nhiệt độ nước, °C)"
- Đặt confidence = 0 nếu không thể tính được

**II.6.2. Result beyond safety/regulatory limit / Kết quả vượt ngưỡng quy chuẩn:**

- Gắn cờ (flag) rõ ràng
- Đặt confidence thấp (< 0.7)
- Đề xuất kiểm duyệt người (II.1.4)
- Ví dụ: "CẢNH BÁO: v_d = 2.45 m/s > 2.4 m/s (TCVN 33-2006) → confidence = 0.50 → Đề xuất kiểm duyệt người"

**II.6.3. Ambiguous request / Yêu cầu mơ hồ:**

- Liệt kê các cách hiểu hợp lý
- Nếu user chọn tự động tiến hành → chọn mặc định thận trọng nhất và ghi rõ
- Ví dụ: "Input: Q = 500" (thiếu đơn vị) → "Hiểu 1: Q = 500 m³/ngày; Hiểu 2: Q = 500 m³/h. Chọn mặc định: Q = 500 m³/ngày (thận trọng hơn). [Mặc định]"

**English (concise):**

Missing critical input → structured error + suggested defaults + impact + fields needed; confidence=0 if cannot calculate. Result beyond limit → flag + low confidence + recommend human review (II.1.4). Ambiguous request → list interpretations + use conservative default if auto-proceed.

**Hóa phàm:**

Nếu thiếu dữ liệu, AI phải báo lỗi rõ ràng và đề xuất giá trị mặc định. Nếu kết quả vượt ngưỡng, phải cảnh báo và nhờ chuyên gia.

---

### II.7. Testing, QA & continuous improvement / Kiểm thử, QA & cải tiến

**Vietnamese (chi tiết):**

**II.7.1. Unit tests for each module / Test unit cho mỗi module:**

- Bao gồm test unit cho mỗi module (input mẫu và kết quả mong đợi)
- Ví dụ Module 1 test case:
  - Input: Q=500 m³/ngày, L=120 m, t=20°C, Hc=5 m, ε=0.0001 m
  - Expected output: D_d ≈ 0.055 m, Hyc ≈ 8.7 m (sai số ±5%)

**II.7.2. Test corpus with edge cases / Bộ test với trường hợp biên:**

- Giữ corpus test với các trường hợp biên:
  - Lưu lượng rất thấp/cao: Q < 10 m³/ngày hoặc Q > 10000 m³/ngày
  - Nhiệt độ cực đoan: t = 0°C, t = 99°C
  - Dữ liệu thiếu: thiếu nồng độ Fe²⁺, H₂S (Module 2, 3)

**II.7.3. Track performance metrics / Theo dõi chỉ số hiệu suất:**

- Độ chính xác so benchmark: ±5% cho đường kính ống, ±10% cho tổn thất áp lực (theo I.4)
- Số lần chuyển người kiểm duyệt (escalations)
- Confidence trung bình (target: > 0.85)

**English (concise):**

Include unit tests for each module (sample inputs/expected outputs). Maintain test corpus with edge cases (very low/high flows, extreme temperatures, missing data). Track metrics: accuracy vs benchmark (±5% for D, ±10% for H per I.4), escalations, average confidence (>0.85).

**Hóa phàm:**

Hệ thống phải có test để đảm bảo tính đúng, test cả trường hợp bình thường và biên, và theo dõi độ chính xác theo thời gian.

---

**Previous Chunk:** `02_ROLES_BEHAVIORS_chunk_05`  
**Next Chunk:** `02_ROLES_BEHAVIORS_chunk_07` (Do Not List, Deliverables, Checklist & Footer)








