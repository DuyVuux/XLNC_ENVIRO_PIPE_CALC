# Chunk 01: Header & Overview / Hướng dẫn AI & Tổng quan

**Chunk ID:** `07_TESTING_QA_chunk_01`  
**Section:** VII. Testing & QA - Header, VII.1 Overview  
**Word Count:** ~400 words  
**Retrieval Keywords:** testing, QA, quality assurance, test types, test corpus, test cases, edge cases, threshold checks, coverage, accuracy, standards compliance  
**Related Chunks:** `07_TESTING_QA_chunk_02`, `07_TESTING_QA_chunk_03`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_1`

---

## 📋 PROMPT HEADER FOR AI / HƯỚNG DẪN CHO AI

**A. Role Setup / Thiết lập vai trò:**

Bạn là AI Assistant đang đọc và áp dụng file `PhầnVII_Testing&QA.md` - phần định nghĩa chiến lược kiểm thử và đảm bảo chất lượng cho hệ thống XLNC. File này mô tả các loại test, test corpus, edge cases, và QA workflow.

**B. Task Description / Mô tả nhiệm vụ:**

Khi đọc và áp dụng file này, bạn PHẢI:
1. Nắm các loại test cần thiết (unit, integration, system, API, UI/UX, performance, security)
2. Hiểu test corpus và test cases cho 5 module
3. Nắm cách xử lý edge cases và threshold checks
4. Hiểu QA workflow và metrics
5. Tham chiếu đúng khi viết test hoặc đánh giá chất lượng

**C. Input Format / Định dạng đầu vào:**

File này được đọc khi:
- Viết test cases
- Thiết kế test strategy
- Đánh giá chất lượng code
- Thiết kế QA workflow

**D. Output Format / Định dạng đầu ra:**

Khi sử dụng thông tin từ file này, bạn PHẢI:
- Trích dẫn đúng test type (ví dụ: "Theo VII.2.1, unit test cho Module 1 phải test flowrate calculations...")
- Tuân thủ test quality criteria
- Đảm bảo coverage ≥ 85% cho calculation modules

**E. Reasoning Instructions / Hướng dẫn suy luận:**

Sử dụng Chain of Thought khi viết test:
1. **Bước 1:** Xác định test type cần thiết
2. **Bước 2:** Tham khảo test corpus và test cases
3. **Bước 3:** Thiết kế test cases cho edge cases
4. **Bước 4:** Áp dụng threshold checks
5. **Bước 5:** Đảm bảo test quality criteria

**F. Constraints & Quality Requirements / Ràng buộc & Yêu cầu chất lượng:**

- PHẢI đạt coverage ≥ 85% cho calculation modules
- PHẢI test tất cả edge cases
- PHẢI áp dụng threshold checks
- PHẢI tuân thủ test quality criteria
- PHẢI đảm bảo tests có tính xác định và tái lập

**G. Examples / Ví dụ:**

**Ví dụ 1 - Unit test cho Module 1:**
> "Theo VII.2.1, unit test cho Module 1 phải test: flowrate calculations, headloss calculations (Darcy-Weisbach), Reynolds number calculations. Coverage requirement: ≥ 85%"

**Ví dụ 2 - Edge case handling:**
> "Theo VII.4, edge cases cho Module 1: Q < 10 m³/ngày (rất thấp), Q > 10000 m³/ngày (rất cao), t = 0°C hoặc t = 99°C (nhiệt độ cực đoan)"

---

## VII.1 Overview — Tổng quan

**EN:**

This section defines the complete testing and quality assurance strategy for the XLNC Automated Water Treatment Calculation System. The system must ensure correctness, safety, reproducibility, and compliance with Vietnamese technical standards (TCVN 33-2006, TCVN 7222:2002) and international engineering practices. All tests must be deterministic, reproducible, and maintain ≥ 85% code coverage.

**VI:**

Phần này định nghĩa chiến lược kiểm thử và đảm bảo chất lượng hoàn chỉnh cho Hệ thống Tính toán Tự động Xử lý Nước XLNC. Hệ thống phải đảm bảo tính đúng đắn, an toàn, tái lập và tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006, TCVN 7222:2002) và thực hành kỹ thuật quốc tế. Tất cả các test phải có tính xác định, tái lập và duy trì độ phủ mã ≥ 85%.

**Testing Objectives:**

1. **Correctness:** Ensure all calculations match validated engineering formulas
2. **Standards Compliance:** Verify compliance with TCVN 33-2006 and TCVN 7222:2002
3. **Accuracy:** Results must match manual calculations within ±3% for standard cases
4. **Reliability:** System must handle edge cases and errors gracefully
5. **Performance:** Meet performance targets for all workflows
6. **Security:** Protect against common vulnerabilities

**Hóa phàm:**

Kiểm tra để chắc chắn hệ thống chạy đúng, không sai công thức, không crash, không cho ra kết quả điên. Tất cả test phải chạy lại được và cho kết quả giống nhau.

---

**Next Chunk:** `07_TESTING_QA_chunk_02` (Types of Tests)

