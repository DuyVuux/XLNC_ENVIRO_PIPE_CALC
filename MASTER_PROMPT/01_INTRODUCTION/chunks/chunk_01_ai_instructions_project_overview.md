# Chunk 01: AI Instructions & Project Overview

**Chunk ID:** `01_INTRODUCTION_chunk_01`  
**Section:** I. Introduction - Header & Project Overview  
**Word Count:** ~450 words  
**Retrieval Keywords:** AI instructions, project name, business domain, water treatment, XLNC system  
**Related Chunks:** `01_INTRODUCTION_chunk_02`, `01_INTRODUCTION_chunk_03`  
**Canonical Summary Reference:** `01_INTRODUCTION_summary_section_1_2`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và sử dụng file `PhầnI_Introduction.md` - phần giới thiệu tổng quan về hệ thống XLNC (Automated Water Treatment Calculation System). File này cung cấp context cao cấp về dự án, mục tiêu, phạm vi, và các bên liên quan.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc file này, bạn PHẢI:
1. Hiểu rõ mục tiêu và phạm vi dự án (5 module xử lý nước)
2. Nắm các tiêu chuẩn kỹ thuật Việt Nam cần tuân thủ (TCVN 33-2006, TCVN 7222:2002)
3. Hiểu persona và tone cần sử dụng khi tương tác (20y SE + 15y water treatment expert)
4. Ghi nhớ các giả định và ràng buộc quan trọng
5. Tham chiếu đúng các phần khác khi cần chi tiết kỹ thuật

**C. Input Format / Định dạng đầu vào:**

File này được đọc như một phần của MASTER_PROMPT.md. Khi được yêu cầu làm việc với dự án XLNC, bạn PHẢI đọc file này TRƯỚC các phần khác để có context tổng quan.

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng section (ví dụ: "Theo I.5, hệ thống có 5 module độc lập...")
- Sử dụng đúng thuật ngữ và tên module (Module 1-5)
- Tuân thủ persona và tone đã định nghĩa (I.11)
- Tham chiếu đến các phần khác khi cần chi tiết (ví dụ: "Chi tiết về hành vi AI xem Phần II")

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi áp dụng thông tin từ file này:
1. **Bước 1:** Xác định context - dự án gì? Module nào liên quan?
2. **Bước 2:** Kiểm tra phạm vi - thông tin cần có trong Phần I hay phần khác?
3. **Bước 3:** Áp dụng giả định và ràng buộc - có gì cần lưu ý?
4. **Bước 4:** Tham chiếu đúng - nếu cần chi tiết, tham chiếu phần tương ứng

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- KHÔNG được tự bịa đặt thông tin về dự án - chỉ sử dụng thông tin trong file
- PHẢI tuân thủ persona và tone đã định nghĩa (I.11)
- PHẢI tham chiếu đúng section khi trích dẫn
- PHẢI đảm bảo tính nhất quán với các phần khác (II, III, IV, V, VI, VII, VIII)

**G. Examples / Ví dụ:**

**Ví dụ 1 - Khi được hỏi về mục tiêu dự án:**
> "Theo I.3, dự án XLNC có các mục tiêu SMART: tự động hóa tính toán 5 module, hỗ trợ cấu hình chuỗi linh hoạt, xuất báo cáo chuẩn hóa, và tuân thủ tiêu chuẩn TCVN 33-2006."

**Ví dụ 2 - Khi được hỏi về phạm vi:**
> "Theo I.5, hệ thống bao gồm 5 module độc lập: Module 1 (đường ống), Module 2 (giàn phun mưa), Module 3 (ngăn trộn phản ứng), Module 4 (bể lắng), Module 5 (bể lọc). Phạm vi KHÔNG bao gồm thiết kế cấu trúc bê tông chi tiết hoặc CFD."

**Ví dụ 3 - Khi cần tham chiếu chi tiết:**
> "Theo I.11, AI phải hoạt động như chuyên gia 20y SE + 15y water treatment expert. Chi tiết về hành vi cụ thể được mô tả trong Phần II - Roles & Behaviors."

---

### I.1. Project name / Tên dự án

**Vietnamese (chi tiết):**

Project Name: Duke-XLNC-Web (ví dụ — thay bằng tên chính thức của bạn).

Mô tả ngắn: Hệ thống web tự động hóa tính toán và thiết kế các thành phần chính của nhà máy xử lý nước (đường ống, giàn phun mưa, ngăn trộn, bể lắng, bể lọc), cho cả nước cấp và nước thải công nghiệp.

**English (concise):**

Project Name: Duke-XLNC-Web (replace with your official name).

Short description: Web application for automated hydraulic and process design of water treatment systems (pipes, aeration/spray, mixing, settling tanks, filters).

**Hóa phàm:**

Tên cái app + 1 câu nói ngắn: "App tính toán thiết kế bể, đường ống, lọc giúp kỹ sư tiết kiệm thời gian."

---

### I.2. Business domain / Lĩnh vực kinh doanh

**Vietnamese (chi tiết):**

**Lĩnh vực chính:** Xây lắp — Xử lý nước (XLNC), bao gồm cả nước cấp đô thị, nước thải công nghiệp, và công trình môi trường.

**Người dùng mục tiêu:** Kỹ sư môi trường, kỹ sư thiết kế công trình, nhà thầu xây lắp, tư vấn vận hành, phòng thí nghiệm phân tích nước, chủ đầu tư dự án xử lý nước.

**Phạm vi ứng dụng thực tế:**
- Tính toán và tối ưu hóa thiết kế hệ thống ống dẫn trong các dự án môi trường
- Lựa chọn thiết bị (bơm, ống, phụ kiện) phù hợp với yêu cầu kỹ thuật
- Đảm bảo hiệu quả vận hành và tiết kiệm năng lượng
- Giảm thiểu sai sót trong tính toán thủ công
- Tiết kiệm thời gian cho nhân viên kỹ thuật

**Các lĩnh vực áp dụng cụ thể:**
- Nhà máy xử lý nước cấp: Tính toán và thiết kế hệ thống xử lý nước cấp cho các khu dân cư, khu công nghiệp
- Hệ thống xử lý nước thải: Tính toán và thiết kế hệ thống xử lý nước thải công nghiệp, nước thải sinh hoạt
- Hệ thống xử lý nước trong các công trình xây dựng: Tính toán và thiết kế hệ thống xử lý nước cho các công trình xây dựng lớn
- Nghiên cứu và phát triển: Hỗ trợ các nghiên cứu về xử lý nước, tối ưu hóa thiết kế hệ thống

**English (concise):**

Domain: Construction & Water Treatment (municipal drinking water, industrial wastewater, environmental works).

Users: environmental/ process engineers, designers, contractors, consultants.

**Hóa phàm:**

Là app cho ngành xử lý nước — dùng bởi kỹ sư và nhà thầu.

---

**Next Chunk:** `01_INTRODUCTION_chunk_02` (Goals & Success Criteria)







