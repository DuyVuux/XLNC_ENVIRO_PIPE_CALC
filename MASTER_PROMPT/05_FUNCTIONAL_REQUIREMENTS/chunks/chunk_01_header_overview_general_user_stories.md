# Chunk 01: Header, Overview & General User Stories / Hướng dẫn AI, Tổng quan & User Stories Tổng quát

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_01`  
**Section:** V. Functional Requirements - Header, V.1 Overview, V.2 General User Stories  
**Word Count:** ~600 words  
**Retrieval Keywords:** functional requirements, user stories, acceptance criteria, module selection, input parameters, calculation, output review, export report, error validation, module chain recommendation, data flow  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_02`, `05_FUNCTIONAL_REQUIREMENTS_chunk_06`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_1_2`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnV_Functional_Requirement.md` - phần định nghĩa yêu cầu chức năng chi tiết cho hệ thống XLNC. File này mô tả user stories, acceptance criteria, inputs/outputs cho từng module.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Hiểu user stories và acceptance criteria cho 5 module
2. Nắm inputs/outputs chi tiết của từng module
3. Hiểu cross-module rules (unit consistency, error handling, safety margins)
4. Nắm non-functional requirements (performance, scalability, security)
5. Tham chiếu đúng khi implement hoặc test chức năng

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement chức năng mới
- Viết test cases
- Thiết kế UI/UX
- Validate requirements

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng user story (ví dụ: "Theo US-01, hệ thống phải hỗ trợ chọn 1-5 module...")
- Tuân thủ acceptance criteria khi implement
- Đảm bảo inputs/outputs khớp với specification

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement chức năng:
1. **Bước 1:** Xác định user story liên quan
2. **Bước 2:** Kiểm tra acceptance criteria
3. **Bước 3:** Xác định inputs/outputs cần thiết
4. **Bước 4:** Áp dụng cross-module rules
5. **Bước 5:** Đảm bảo non-functional requirements

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI đáp ứng tất cả acceptance criteria
- PHẢI tuân thủ cross-module rules
- PHẢI đảm bảo non-functional requirements
- PHẢI validate inputs/outputs theo specification

**G. Examples / Ví dụ:**

**Ví dụ 1 - Implement module selection:**
> "Theo US-01, hệ thống phải hỗ trợ chọn 1-5 module với flexible ordering. Acceptance criteria: validate module dependencies, provide recommendations."

**Ví dụ 2 - Input validation:**
> "Theo US-02, hệ thống phải accept inputs với explicit units. Input 'Q = 500' (thiếu unit) → Error: 'Unit required. Expected: m³/ngày, m³/h, m³/s'"

---

## V.1 Overview — Tổng quan

**EN:**

This section defines the complete functional requirements of the Automated Water Treatment Calculation System (XLNC). The system is structured as 5 independent modules that can be combined flexibly to form processing chains. Each module has specific inputs, outputs, acceptance criteria, constraints, and edge cases. The requirements are based on Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and international engineering practices.

**VI:**

Mục này mô tả toàn bộ yêu cầu chức năng của hệ thống tính toán tự động xử lý nước XLNC. Hệ thống được cấu trúc thành 5 module độc lập có thể kết hợp linh hoạt để tạo thành chuỗi xử lý. Mỗi module có đầu vào, đầu ra, tiêu chí chấp nhận, ràng buộc và trường hợp đặc biệt cụ thể. Các yêu cầu dựa trên tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002) và thực hành kỹ thuật quốc tế.

**Modules included:**

1. **Module 1 — Pipe Hydraulics / Tính toán đường ống**
2. **Module 2 — Rainfall Aeration / Giàn phun mưa**
3. **Module 3 — Rapid Mixing Tank / Ngăn trộn phản ứng**
4. **Module 4 — Sedimentation Tank / Bể lắng**
5. **Module 5 — Filtration Unit / Bể lọc**

**Hóa phàm:**

Phần này liệt kê tất cả các chức năng mà hệ thống phải làm được, từ nhập liệu đến tính toán và xuất kết quả cho 5 module xử lý nước.

---

## V.2 General User Stories — User Stories tổng quát

### US-01 — Select Modules / Chọn module

**EN:** As a user, I want to select one or multiple treatment modules so that I can design the processing chain that fits my project requirements and scale.

**VI:** Là người dùng, tôi muốn chọn một hoặc nhiều module xử lý để xây dựng chuỗi công nghệ phù hợp với yêu cầu và quy mô dự án.

**Acceptance Criteria:**
- System must support selection of 1-5 modules
- System must allow flexible module ordering
- System must validate module dependencies (e.g., Module 2 requires Module 1 output)
- System must provide module chain recommendations based on project scale and water quality

**Priority:** High

---

### US-02 — Input Parameters / Nhập thông số

**EN:** As a user, I want to enter design parameters and constraints for each module with clear unit specifications so that the system can perform accurate calculations.

**VI:** Là người dùng, tôi muốn nhập thông số thiết kế và ràng buộc cho từng module với đơn vị rõ ràng để hệ thống có thể thực hiện tính toán chính xác.

**Acceptance Criteria:**
- System must accept inputs with explicit units (e.g., Q = 500 m³/ngày, not Q = 500)
- System must support multiple unit systems (SI, Imperial) with automatic conversion
- System must validate input ranges against technical standards (TCVN 33-2006)
- System must provide default values for optional parameters with clear documentation
- System must flag invalid inputs and suggest corrections

**Priority:** High

---

### US-03 — Automatic Calculation / Tính toán tự động

**EN:** As a user, I want the system to automatically compute all hydraulic/chemical parameters using validated engineering formulas so that I get accurate design results.

**VI:** Là người dùng, tôi muốn hệ thống tự động tính các thông số thủy lực/hóa học bằng công thức kỹ thuật đã được kiểm chứng để có kết quả thiết kế chính xác.

**Acceptance Criteria:**
- System must use formulas from recognized sources (TCVN, engineering handbooks)
- System must show intermediate calculation steps
- System must cite formula sources (e.g., "Darcy-Weisbach equation, TCVN 33-2006")
- System must handle unit conversions automatically
- System must complete calculation within 5 seconds for standard project

**Priority:** High

---

### US-04 — Review Outputs / Xem kết quả

**EN:** As a user, I want to see structured, unit-consistent results with intermediate steps and formula references so that I can verify and understand the calculations.

**VI:** Là người dùng, tôi muốn xem kết quả có cấu trúc, chuẩn đơn vị, có các bước trung gian và tham chiếu công thức để có thể kiểm tra và hiểu rõ tính toán.

**Acceptance Criteria:**
- Results must include all calculated parameters with units
- Results must show calculation steps (formula → substitution → result)
- Results must include formula sources and references
- Results must be presented in both technical format and plain language ("Hóa phàm")
- Results must be exportable in JSON format for machine processing

**Priority:** High

---

### US-05 — Export Report / Xuất báo cáo

**EN:** As a user, I want to export the calculation report in multiple formats (PDF/Markdown/Excel) so that I can share results with stakeholders and archive project documentation.

**VI:** Là người dùng, tôi muốn xuất báo cáo tính toán ở nhiều định dạng (PDF/Markdown/Excel) để có thể chia sẻ kết quả với các bên liên quan và lưu trữ tài liệu dự án.

**Acceptance Criteria:**
- System must generate PDF reports with company template
- System must include all calculation steps, formulas, and results
- System must include charts and diagrams where applicable
- System must support bilingual output (EN + VI)
- System must complete report generation within 2 minutes for standard project

**Priority:** Medium

---

### US-06 — Error Validation / Kiểm tra lỗi

**EN:** As a user, I want the system to validate inputs and warn me about out-of-range values so that I can correct errors before calculation.

**VI:** Là người dùng, tôi muốn hệ thống cảnh báo khi thông số nhập không hợp lệ để có thể sửa lỗi trước khi tính toán.

**Acceptance Criteria:**
- System must validate all inputs before calculation
- System must check values against reference ranges (IV.5)
- System must flag values exceeding TCVN limits (e.g., Vd > 2.4 m/s)
- System must provide specific error messages with suggested corrections
- System must prevent calculation if critical inputs are missing or invalid

**Priority:** High

---

### US-07 — Module Chain Recommendation / Đề xuất chuỗi module

**EN:** As a user, I want the system to recommend appropriate module chains based on project scale and water quality so that I can make informed design decisions.

**VI:** Là người dùng, tôi muốn hệ thống đề xuất chuỗi module phù hợp dựa trên quy mô dự án và chất lượng nước để có thể đưa ra quyết định thiết kế đúng đắn.

**Acceptance Criteria:**
- System must analyze project scale (small < 100 m³/day, medium 100-1000 m³/day, large > 1000 m³/day)
- System must analyze water quality parameters (Fe²⁺, H₂S, TSS, turbidity)
- System must recommend module chains (e.g., 1→4→5 for small projects, 1→2→3→4→5 for large projects)
- System must explain reasoning for recommendations
- System must allow user to override recommendations

**Priority:** Medium

---

### US-08 — Data Flow Between Modules / Dòng chảy dữ liệu giữa module

**EN:** As a user, I want data to flow automatically between connected modules so that I don't have to re-enter information manually.

**VI:** Là người dùng, tôi muốn dữ liệu tự động truyền giữa các module được kết nối để không phải nhập lại thông tin thủ công.

**Acceptance Criteria:**
- System must automatically pass output from Module N to input of Module N+1
- System must handle unit conversions between modules (e.g., Q from m³/s to m³/h)
- System must allow user to override auto-filled values
- System must show data flow diagram
- System must validate data consistency across modules

**Priority:** High

---

**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_02` (Module 1 - Pipe Hydraulics)

