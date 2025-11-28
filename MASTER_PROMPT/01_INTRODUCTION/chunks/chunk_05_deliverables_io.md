# Chunk 05: Deliverables & I/O Summary / Sản phẩm bàn giao & Tổng quan IO

**Chunk ID:** `01_INTRODUCTION_chunk_05`  
**Section:** I.8 Deliverables, I.9 Input/Output Summary  
**Word Count:** ~350 words  
**Retrieval Keywords:** deliverables, inputs, outputs, CSV, Excel, JSON, PDF report, data flow  
**Related Chunks:** `01_INTRODUCTION_chunk_04`, `01_INTRODUCTION_chunk_06`  
**Canonical Summary Reference:** `01_INTRODUCTION_summary_section_8_9`

---

### I.8. Deliverables / Sản phẩm bàn giao

**Vietnamese (chi tiết):**

- File MASTER_PROMPT.md (toàn bộ prompt hướng dẫn AI/automation)
- Tài liệu yêu cầu chức năng (SRS) — phần tóm tắt Introduction + module specs
- Mẫu báo cáo kỹ thuật (PDF/Word templates)
- Bộ test case tính toán (Excel) để so sánh

**English (concise):**

MASTER_PROMPT.md, SRS summary, report templates, test-case spreadsheets.

**Hóa phàm:**

Những thứ sẽ nhận: prompt chuẩn, tài liệu chức năng, mẫu báo cáo và file kiểm thử.

---

### I.9. Input / Output summary (brief) / Tổng quan IO

**Vietnamese (chi tiết):**

**Inputs (Đầu vào):**
- File CSV/xlsx (nếu có): thông số thủy lực (Q, H, roughness), thông số chất lượng nước (TSS, BOD, DO, Fe²⁺, H₂S), kích thước ban đầu, điều kiện vận hành, yêu cầu mục tiêu xử lý
- Nhập trực tiếp qua giao diện web: các thông số cần thiết cho từng module (xem chi tiết ở phần module specifications)
- Mỗi module có thể nhận dữ liệu đầu vào trực tiếp từ người dùng hoặc từ module trước (Output → Input)

**Outputs (Đầu ra):**
- Bảng tính bước chi tiết với từng công thức sử dụng và nguồn công thức
- Kết quả thiết kế cuối cùng: Kích thước ống, diện tích bể, tốc độ lọc, tổn thất áp lực, cột áp yêu cầu...
- Đánh giá và kiểm tra tính hợp lệ của kết quả, cảnh báo nếu nằm ngoài ngưỡng khuyến nghị
- Đồ thị trực quan hóa kết quả
- Báo cáo PDF/Word theo template công ty
- File dữ liệu xuất (CSV/JSON) cho từng module hoặc toàn bộ chuỗi module

*Lưu ý: Chi tiết về dòng chảy dữ liệu giữa các module (Data Flow) sẽ được mô tả ở phần sau.*

**English (concise):**

Inputs: hydraulic & water quality parameters. Outputs: design tables, charts, PDF report, CSV/JSON exports.

**Hóa phàm:**

Nhập số liệu, app trả về bảng + file báo cáo.

---

**Previous Chunk:** `01_INTRODUCTION_chunk_04`  
**Next Chunk:** `01_INTRODUCTION_chunk_06` (Example Usage Scenarios)







