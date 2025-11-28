# Chunk 01: Header & Overview / Hướng dẫn AI & Tổng quan

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_01`  
**Section:** VI. Workflow & Automation - Header, VI.1 Overview  
**Word Count:** ~400 words  
**Retrieval Keywords:** workflow, automation, single module calculation, module chain, data flow, validation, error handling, report generation, workflow components  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_02`, `06_WORKFLOW_AUTOMATION_chunk_03`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_1`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnVI_Workflow.md` - phần định nghĩa quy trình làm việc hoàn chỉnh cho hệ thống XLNC. File này mô tả workflow tính toán module đơn lẻ, module chain, data flow, và validation.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm workflow tính toán module đơn lẻ (VI.2)
2. Hiểu workflow điều phối chuỗi module (VI.3)
3. Nắm logic đề xuất chuỗi module (VI.4)
4. Hiểu workflow validation và error handling (VI.5, VI.6)
5. Tham chiếu đúng khi implement workflow

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Implement calculation workflow
- Thiết kế module chain orchestration
- Implement validation logic
- Thiết kế error handling

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng workflow step (ví dụ: "Theo VI.2.2 Step 1, hệ thống phải validate inputs...")
- Tuân thủ thứ tự workflow steps
- Đảm bảo data flow đúng giữa các module

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi implement workflow:
1. **Bước 1:** Xác định workflow type (single module, chain, recommendation)
2. **Bước 2:** Áp dụng workflow steps theo thứ tự
3. **Bước 3:** Kiểm tra data flow giữa modules
4. **Bước 4:** Áp dụng validation và error handling

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI tuân thủ thứ tự workflow steps
- PHẢI đảm bảo data flow đúng giữa modules
- PHẢI áp dụng validation và error handling
- PHẢI đảm bảo tính nhất quán với các phần khác

**G. Examples / Ví dụ:**

**Ví dụ 1 - Single module workflow:**
> "Theo VI.2.2, workflow tính module đơn lẻ: Step 1 (Input Validation) → Step 2 (Unit Normalization) → Step 3 (Calculation Execution) → Step 4 (Result Validation) → Step 5 (Output Formatting)"

**Ví dụ 2 - Module chain workflow:**
> "Theo VI.3, workflow chuỗi module 1→2→3: Execute Module 1 → Pass outputs to Module 2 → Execute Module 2 → Pass outputs to Module 3 → Execute Module 3 → Aggregate results"

---

## VI.1 Overview — Tổng quan

**EN:**

This section defines the complete workflow for the Automated Water Treatment Calculation System (XLNC). The workflow covers single module calculations, module chain orchestration, data flow between modules, module chain recommendation, validation, error handling, and report generation. All workflows are designed to ensure accuracy, consistency, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002).

**VI:**

Phần này định nghĩa quy trình làm việc hoàn chỉnh cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Quy trình bao gồm tính toán module đơn lẻ, điều phối chuỗi module, dòng chảy dữ liệu giữa các module, đề xuất chuỗi module, xác thực, xử lý lỗi và xuất báo cáo. Tất cả các quy trình được thiết kế để đảm bảo độ chính xác, tính nhất quán và tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002).

**Workflow Components:**

1. **Single Module Calculation Workflow** — Quy trình tính toán module đơn lẻ
2. **Module Chain Calculation Workflow** — Quy trình tính toán chuỗi module
3. **Module Chain Recommendation Workflow** — Quy trình đề xuất chuỗi module
4. **Data Flow & Transformation Workflow** — Quy trình dòng chảy và chuyển đổi dữ liệu
5. **Validation & Error Handling Workflow** — Quy trình xác thực và xử lý lỗi
6. **Report Generation Workflow** — Quy trình xuất báo cáo

**Hóa phàm:**

Phần này mô tả từng bước cụ thể mà hệ thống phải làm để tính toán và xử lý dữ liệu, từ khi người dùng nhập liệu đến khi xuất báo cáo cuối cùng.

---

**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_02` (Single Module Calculation Workflow)

