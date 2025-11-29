# Chunk 01: Header & National Standards / Hướng dẫn AI & Tiêu chuẩn Quốc gia

**Chunk ID:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_01`  
**Section:** IV. Domain Knowledge Base - Header & IV.1 National Standards & Regulations  
**Word Count:** ~450 words  
**Retrieval Keywords:** MANDATORY, domain knowledge, TCVN, QCVN, Vietnamese standards, regulations, water treatment standards  
**Related Chunks:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_02`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_03`  
**Canonical Summary Reference:** `04_DOMAIN_KNOWLEDGE_BASE_summary_section_1`

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

**Next Chunk:** `04_DOMAIN_KNOWLEDGE_BASE_chunk_02` (Module 1 Formulas - Pipelines)








