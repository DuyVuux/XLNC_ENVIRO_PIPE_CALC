# Chunk 07: Reference Ranges & Construction Workflow / Khoảng Giá trị Tham chiếu & Quy trình Xây lắp

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_07`  
**Section:** IV.5 Reference Ranges, IV.6 Real-world Construction Workflow  
**Word Count:** ~550 words  
**Retrieval Keywords:** reference ranges, validation ranges, warning thresholds, construction workflow, survey, design, approval, procurement, construction, testing, handover, operational constraints  
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_06`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_08`  
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_5_6`

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

**Previous Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_06`  
**Next Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_08` (AI Reasoning Instructions & Explicit Limitations)

