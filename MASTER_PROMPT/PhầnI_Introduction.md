# I. INTRODUCTION / PHẦN GIỚI THIỆU

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

*Ghi chú: Phần này cung cấp tổng quan cao cấp về dự án. Các chi tiết kỹ thuật về kiến trúc module, data flow, và specifications chi tiết sẽ được mô tả ở các phần sau.*

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

### I.3. Goals / Mục tiêu

**Vietnamese (chi tiết):** Mục tiêu SMART (Specific, Measurable, Achievable, Relevant, Time-bound):

**Tự động hóa:** Cho phép tính toán hoàn chỉnh các module (ống, phun, trộn, lắng, lọc) theo thông số đầu vào trong 1 lần chạy. Mỗi module là đơn vị tính toán độc lập nhưng có thể kết nối với các module khác thông qua việc truyền dữ liệu Input-Output tự động.

**Đa cấu hình:** Hỗ trợ cấu hình chuỗi xử lý linh hoạt (kết hợp 1..5 module) theo nhiều chuỗi khả thi tùy theo yêu cầu dự án và quy mô. Hệ thống cho phép lưu mẫu cấu hình cho dự án khác và tái sử dụng.

**Chuẩn hóa kết quả:** Xuất báo cáo kỹ thuật (PDF/Word) theo template công ty, kèm biểu đồ, bảng dữ liệu và sơ đồ luồng. Báo cáo bao gồm tất cả các bước tính toán, công thức sử dụng, và kết quả cuối cùng.

**Độ chính xác & kiểm chứng:** Kết quả tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006) và các chuẩn tính toán phổ biến (ví dụ: công thức Darcy-Weisbach, Hazen-Williams). Tất cả các công thức tính toán đều dựa trên các công thức kỹ thuật đã được kiểm chứng. Hệ thống có chức năng kiểm tra/so sánh dữ liệu đầu ra với ngưỡng chấp nhận.

**Đa đơn vị đo lường:** Hỗ trợ nhiều đơn vị đo lường khác nhau (m³/s, m³/h, m³/ngày, m, mm, m/s, m/h, mg/l, Pa, m cột nước...) với khả năng chuyển đổi tự động.

**Trải nghiệm người dùng:** Giao diện nhập liệu trực quan, có hướng dẫn, và chế độ expert/quick. Giao diện web cho phép người dùng nhập liệu và xem kết quả trực quan.

**Giảm thiểu sai sót:** Tự động hóa tính toán giúp giảm thiểu sai sót trong tính toán thủ công, tiết kiệm thời gian cho nhân viên kỹ thuật, và hỗ trợ lựa chọn thiết bị (bơm, ống, phụ kiện) phù hợp với yêu cầu kỹ thuật.

**English (concise):**

SMART goals: full automation of module calculations, configurable process chains, standardized report export, engineering-grade formulas and validation, intuitive UI for engineers.

**Hóa phàm:**

Làm sao để app: tính chính xác, dễ dùng, xuất được báo cáo, và áp dụng cho nhiều loại dự án.

---

### I.4. Success criteria / Tiêu chí thành công

**Vietnamese (chi tiết):**

**Kỹ thuật:** Kết quả tính toán cho 95% các trường hợp thử nghiệm nội bộ nằm trong ngưỡng sai số chấp nhận được so với bài tính tay/Excel mẫu (ví dụ ±5% cho đường kính ống, ±10% cho tổn thất áp lực trong trường hợp phức tạp).

**Sản phẩm:** Người dùng có thể tạo và xuất báo cáo hoàn chỉnh (PDF) từ giao diện trong vòng < 2 phút cho một dự án tiêu chuẩn.

**Sử dụng:** Ít nhất 80% người dùng thử nghiệm đánh giá giao diện là "dễ sử dụng" trong khảo sát UX đầu tiên.

**Hiệu suất:** Hệ thống xử lý một dự án tiêu chuẩn (5 module) với thời gian phản hồi server < 5s cho mỗi tính toán module (ở cấu hình server trung bình).

**Bảo mật & Tuân thủ:** Dữ liệu dự án lưu an toàn, có backup; tuân thủ các quy định dữ liệu nội bộ/khách hàng.

**English (concise):**

Technical accuracy thresholds, report generation speed, user satisfaction targets, performance SLAs, and data security compliance.

**Hóa phàm:**

Cái app tốt nếu: tính đúng, xuất báo cáo nhanh, người dùng thích, và dữ liệu an toàn.

---

### I.5. Scope & Modules included / Phạm vi & các module

**Vietnamese (chi tiết):**

Hệ thống được cấu trúc thành **5 module độc lập**, mỗi module xử lý một giai đoạn cụ thể trong quy trình xử lý nước:

- **Module 1 - Tính toán đường ống**: Tính toán các thông số kỹ thuật của hệ thống đường ống, bao gồm lưu lượng, vận tốc, đường kính ống, tổn thất áp lực và cột áp yêu cầu.

- **Module 2 - Giàn phun mưa**: Tính toán các thông số liên quan đến giàn phun mưa, bao gồm lượng oxy hòa tan, cường độ phun mưa và các phản ứng oxy hóa.

- **Module 3 - Ngăn trộn, phản ứng**: Tính toán thể tích ngăn trộn, thời gian trộn, kích thước ngăn trộn và tốc độ phản ứng hóa học.

- **Module 4 - Bể lắng**: Tính toán diện tích, kích thước, thể tích bể lắng và các thông số liên quan đến quá trình lắng.

- **Module 5 - Bể lọc**: Tính toán diện tích lọc, kích thước bể lọc, tổn thất áp lực, cường độ rửa lọc và các hệ thống phụ trợ.

**Phạm vi không bao gồm:**
- Thiết kế cấu trúc bê tông chi tiết
- Tính toán kết cấu
- Phân tích động lực cao cấp (CFD)
- Module khử trùng, bể chứa nước sạch (có thể mở rộng sau)

*Lưu ý: Chi tiết về kiến trúc module, các chuỗi module khả thi, logic lựa chọn module theo quy mô sẽ được mô tả ở các phần sau.*

**English (concise):**

Five selectable modules: Pipes, Aeration/Spray, Mixing, Settling, Filtration. Structural design and advanced CFD are out of scope.

**Hóa phàm:**

Người dùng khoanh vùng: chỉ tính toán quá trình xử lý nước, không làm bản vẽ kết cấu chi tiết.

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

### I.10. Example usage scenarios / Tình huống sử dụng ví dụ

**Vietnamese (chi tiết):**

**Tình huống 1 - Tính toán đường ống và bể lọc (quy mô nhỏ):**
Kỹ sư thi công nhập lưu lượng Q = 50 m³/ngày và yêu cầu xử lý cơ bản. Hệ thống đề xuất chuỗi module 1 → 5 (đường ống + bể lọc). Kết quả: đường kính ống, tổn thất áp lực, kích thước bể lọc, vận tốc lọc, và sơ đồ nối.

**Tình huống 2 - Tính toán bể lắng cho nhà máy (quy mô vừa):**
Tư vấn thiết kế muốn dimension bể lắng cho nhà máy xử lý nước thải công nghiệp 500 m³/ngày có nước đầu vào chứa Fe²⁺ và H₂S. Hệ thống đề xuất chuỗi 1 → 3 → 4 → 5. Kết quả: kích thước ngăn trộn, diện tích bể lắng, hiệu suất lắng, kích thước bể lọc.

**Tình huống 3 - Quy trình xử lý hoàn chỉnh (quy mô lớn):**
Nhà máy xử lý nước cấp quy mô lớn 5000 m³/ngày cần quy trình xử lý hoàn chỉnh. Hệ thống đề xuất chuỗi đầy đủ 1 → 2 → 3 → 4 → 5 (tất cả các module). Kết quả: toàn bộ tính toán từ đường ống đến bể lọc.

*Lưu ý: Chi tiết về các chuỗi module khả thi và logic lựa chọn theo quy mô sẽ được mô tả ở phần sau.*

**English (concise):**

Examples: pipe sizing from Q, settling tank sizing for 500 m3/day, filter backwash schedule optimization.

**Hóa phàm:**

Các ví dụ cụ thể để người dùng thấy app làm gì.

---

### I.11. Persona & Tone for the AI / Nhân vật và giọng điệu khi viết prompt

**Vietnamese (chi tiết):**

**Persona:** "Bạn là một chuyên gia kỹ thuật Software Engineer 20 năm và chuyên gia Xây lắp – xử lý nước 15 năm". (Chi tiết về vai trò, trách nhiệm và hành vi cụ thể được mô tả ở Phần II - Roles & Behaviors)

**Tone:** chính xác, kỹ thuật, dễ hiểu cho kỹ sư, kèm chú thích giải thích (hóa phàm) cho người không chuyên.

**Language:** Trả lời chính bằng tiếng Việt và xen kẽ các đoạn/term quan trọng bằng tiếng Anh để hỗ trợ học tiếng. Xuất kết quả song ngữ (EN + VI) cho tất cả báo cáo kỹ thuật và giải thích đơn giản.

**English (concise):**

Persona: 20y SE + 15y water treatment expert. (Detailed roles and behaviors in Part II). Tone: precise technical guidance with plain-language notes. Bilingual (VI/EN) output required.

**Hóa phàm:**

Làm như đang nói chuyện với một kỹ sư: vừa chuyên sâu vừa dễ hiểu. Phần II sẽ mô tả chi tiết cách AI phải hành xử cụ thể.

---

### I.12. Prompts/Examples to include in MASTER_PROMPT

**Vietnamese (chi tiết):**

**Template system prompt (ví dụ):**

"Bạn là một chuyên gia với 20 năm kinh nghiệm Software Engineering và 15 năm trong lĩnh vực Xây Lắp - xử lý nước. Khi tôi cung cấp dữ liệu đầu vào, hãy: (1) Xác định module cần chạy; (2) Áp dụng công thức tính thích hợp; (3) Hiện bảng bước tính; (4) Kiểm tra tính hợp lệ đầu vào; (5) Trả về kết quả cuối cùng và chú thích 'hóa phàm'. Trả lời chính bằng tiếng Việt, chèn các thuật ngữ tiếng Anh khi phù hợp."

**Ví dụ user prompt:**

"Chạy module: Pipes + Settling. Input: Q=500 m3/day; H=5m; Roughness=0.013; Target TSS removal 80%. Xuất báo cáo PDF."

**English (concise):**

Provide a system prompt template and sample user prompt to show expected interactions.

**Hóa phàm:**

Ghi một đoạn mẫu để paste vào hệ thống: nói rõ vai trò AI, thứ tự công việc và ngôn ngữ trả lời.

---

**KẾT THÚC PHẦN I. INTRODUCTION**

---

