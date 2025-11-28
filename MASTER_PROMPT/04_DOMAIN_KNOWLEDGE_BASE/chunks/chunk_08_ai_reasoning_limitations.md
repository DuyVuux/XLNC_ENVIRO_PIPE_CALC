# Chunk 08: AI Reasoning Instructions & Explicit Limitations / Hướng dẫn Lý luận AI & Giới hạn Rõ ràng

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_08`  
**Section:** IV.7 AI Reasoning Instructions (Domain-aware), IV.8 Explicit Limitations  
**Word Count:** ~500 words  
**Retrieval Keywords:** AI reasoning, domain-aware reasoning, TCVN compliance, unit handling, formula explanation, limitations, human review, confidence score, missing inputs, unrealistic values  
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_07`, `02_ROLES_BEHAVIORS_chunk_02`  
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_7_8`

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

**Previous Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_07`  
**Next Section:** Phần V - Functional Requirements (pending)

