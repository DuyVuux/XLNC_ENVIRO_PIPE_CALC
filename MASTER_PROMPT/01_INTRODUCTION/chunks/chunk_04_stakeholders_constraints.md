# Chunk 04: Stakeholders & Constraints / Các bên liên quan & Ràng buộc

**Chunk ID:** `01_INTRODUCTION_chunk_04`  
**Section:** I.6 Stakeholders, I.7 Assumptions & Constraints  
**Word Count:** ~480 words  
**Retrieval Keywords:** stakeholders, assumptions, constraints, TCVN standards, technical standards, role-based access, language support  
**Related Chunks:** `01_INTRODUCTION_chunk_03`, `01_INTRODUCTION_chunk_05`  
**Canonical Summary Reference:** `01_INTRODUCTION_summary_section_6_7`

---

### I.6. Stakeholders / Các bên liên quan

**Vietnamese (chi tiết):**

- Chủ dự án (Client)
- Kỹ sư thiết kế (End users)
- Nhà thầu thi công
- Bộ phận QC/QA
- Quản trị hệ thống / DevOps

**English (concise):**

Project owner, design engineers, contractors, QA, and ops.

**Hóa phàm:**

Ai cần app? Chủ đầu tư, kỹ sư, nhà thầu, và IT.

---

### I.7. Assumptions & Constraints / Giả định và ràng buộc

**Vietnamese (chi tiết):**

**Giả định về dữ liệu đầu vào:**
- Người dùng cung cấp thông số chuẩn với đơn vị rõ ràng (SI/Imperial)
- Mẫu nước đầu vào: nồng độ Fe²⁺, H₂S, TSS, BOD, DO, độ đục nếu cần
- Thông số vận hành: nhiệt độ nước, điều kiện môi trường
- Yêu cầu mục tiêu xử lý: chất lượng nước đầu ra mong muốn

**Tiêu chuẩn kỹ thuật:**
- Hệ thống tuân thủ các tiêu chuẩn kỹ thuật Việt Nam: **TCVN 33-2006** (Tiêu chuẩn thiết kế cấp nước)
- Các công thức tính toán dựa trên các tiêu chuẩn và công thức kỹ thuật đã được kiểm chứng
- Vận tốc ống hút (Vh): 1.2 m/s (theo TCVN 33-2006)
- Vận tốc ống đẩy (Vd): 2.4 m/s (theo TCVN 33-2006)
- Vận tốc lọc khuyến nghị: 6 - 10 m/h
- Cường độ rửa lọc khuyến nghị: 12 - 15 l/s·m²

**Ràng buộc kỹ thuật:**
- Hạn chế về quyền truy cập (role-based access): phân quyền theo vai trò người dùng
- Giới hạn tài nguyên server cho mô phỏng lớn
- Không có sự phụ thuộc cứng giữa các module - mỗi module có thể hoạt động độc lập

**Ràng buộc phạm vi:**
- Hệ thống chỉ tính toán quá trình xử lý nước, không thiết kế cấu trúc bê tông chi tiết
- Không tính toán kết cấu và phân tích động lực cao cấp (CFD) - trừ khi yêu cầu mở rộng
- Không bao gồm module khử trùng, bể chứa nước sạch (có thể mở rộng sau)

**Ngôn ngữ:**
- Giao diện chính bằng tiếng Việt, có tuỳ chọn tiếng Anh
- Hỗ trợ nhiều đơn vị đo lường khác nhau với khả năng chuyển đổi tự động

**English (concise):**

Assumes correct, unit-specified inputs; role-based access; Vietnamese primary UI with English option.

**Hóa phàm:**

Giả sử người dùng biết nhập đúng các con số và chọn đơn vị.

---

**Previous Chunk:** `01_INTRODUCTION_chunk_03`  
**Next Chunk:** `01_INTRODUCTION_chunk_05` (Deliverables & I/O Summary)







