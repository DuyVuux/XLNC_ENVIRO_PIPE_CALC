# Master Prompt Specification for XLNC Web Automation System

**Version:** 1.0  
**Last Updated:** 2025-11-20  
**Document Structure:** Modular (split into multiple files for better readability)

---

## ⚠️ QUAN TRỌNG: HƯỚNG DẪN CHO AI / IMPORTANT: AI INSTRUCTIONS

**Vietnamese (chi tiết):**

Khi bạn (AI) đọc file `MASTER_PROMPT.md` này, bạn **PHẢI**:

1. **Đọc TẤT CẢ các file phần được liệt kê bên dưới** - Không được bỏ sót bất kỳ phần nào
2. **Tuân thủ nghiêm ngặt tất cả quy tắc** trong từng phần
3. **Tham chiếu đúng file phần** khi cần giải thích hoặc trích dẫn
4. **Hoàn thiện các phần còn thiếu** nếu được yêu cầu phát triển thêm

**Cấu trúc tài liệu được chia thành 8 phần độc lập nhưng liên kết chặt chẽ:**

- **Phần I**: Giới thiệu tổng quan (Introduction)
- **Phần II**: Vai trò và hành vi (Roles & Behaviors) - **BẮT BUỘC TUÂN THỦ**
- **Phần III**: Quy tắc kiến trúc (Architecture Rules)
- **Phần IV**: Kho tri thức ngành (Domain Knowledge Base)
- **Phần V**: Yêu cầu chức năng (Functional Requirements)
- **Phần VI**: Quy trình làm việc (Workflow)
- **Phần VII**: Kiểm thử và QA (Testing & QA)
- **Phần VIII**: Logging, Monitoring & Observability

**English (concise):**

When you (AI) read this `MASTER_PROMPT.md` file, you **MUST**:

1. **Read ALL listed section files below** - Do not skip any section
2. **Strictly follow all rules** in each section
3. **Reference the correct section file** when explaining or citing
4. **Complete missing sections** if requested to develop further

**Document structure is split into 8 independent but tightly linked sections.**

---

## 📋 MỤC LỤC / TABLE OF CONTENTS

### [I. INTRODUCTION / PHẦN GIỚI THIỆU](./PhầnI_Introduction.md)

**File:** `PhầnI_Introduction.md`

**Nội dung chính / Main Content:**
- I.1. Project name / Tên dự án
- I.2. Business domain / Lĩnh vực kinh doanh
- I.3. Goals / Mục tiêu
- I.4. Success criteria / Tiêu chí thành công
- I.5. Scope & Modules included / Phạm vi & các module
- I.6. Stakeholders / Các bên liên quan
- I.7. Assumptions & Constraints / Giả định và ràng buộc
- I.8. Deliverables / Sản phẩm bàn giao
- I.9. Input / Output summary (brief) / Tổng quan IO
- I.10. Example usage scenarios / Tình huống sử dụng ví dụ
- I.11. Persona & Tone for the AI / Nhân vật và giọng điệu khi viết prompt
- I.12. Prompts/Examples to include in MASTER_PROMPT

**⚠️ AI Checklist:**
- [ ] Đã đọc và hiểu mục tiêu dự án
- [ ] Đã nắm rõ phạm vi 5 module (đường ống, giàn phun mưa, ngăn trộn, bể lắng, bể lọc)
- [ ] Đã hiểu persona và tone cần sử dụng

---

### [II. ROLES & BEHAVIORS / VAI TRÒ & HÀNH VI](./PhầnII_Role&Behavior.md)

**File:** `PhầnII_Role&Behavior.md`

**Nội dung chính / Main Content:**
- II.1. Roles / Các vai trò
- II.2. Behaviors / Hành vi bắt buộc của AI
- II.3. Response structure / Cấu trúc phản hồi (MANDATORY)
- II.4. Prompt templates & examples / Mẫu prompt & ví dụ
- II.5. Validation rules & input checks / Quy tắc xác thực
- II.6. Failure modes & escalation / Trường hợp lỗi & chuyển tiếp
- II.7. Testing, QA & continuous improvement / Kiểm thử, QA & cải tiến
- II.8. "Do not" list / Những điều KHÔNG được làm
- II.9. Deliverables & artifacts / Sản phẩm đầu ra
- II.10. Example quick checklist / Bảng kiểm nhanh

**⚠️ AI Checklist (QUAN TRỌNG NHẤT):**
- [ ] Đã đọc và hiểu tất cả hành vi bắt buộc (II.2)
- [ ] Đã nắm rõ cấu trúc phản hồi BẮT BUỘC: JSON → Technical Report → Hóa phàm (II.3)
- [ ] Đã hiểu quy tắc validation và xử lý lỗi (II.5, II.6)
- [ ] Đã ghi nhớ "Do not" list (II.8)
- [ ] Đã kiểm tra quick checklist trước mỗi phản hồi (II.10)

**🔴 LƯU Ý ĐẶC BIỆT:** Phần II là phần QUAN TRỌNG NHẤT - AI PHẢI tuân thủ nghiêm ngặt tất cả quy tắc trong phần này.

---

### [III. ARCHITECTURE RULES / QUY TẮC KIẾN TRÚC](./PhầnIII_Architecture_rules.md)

**File:** `PhầnIII_Architecture_rules.md`

**Nội dung chính / Main Content:**
- III.1. Technology stack / Công nghệ sử dụng
  - Frontend: Next.js + React
  - Backend: FastAPI (Python)
  - Database: PostgreSQL
- III.2. Architectural principles / Nguyên tắc kiến trúc
- III.3. Module architecture & data flow / Kiến trúc module & dòng chảy dữ liệu
- III.4. Backend rules / Quy tắc backend
- III.5. Frontend rules / Quy tắc frontend
- III.6. Database architecture rules / Quy tắc cơ sở dữ liệu
- III.7. API design rules / Quy tắc thiết kế API
- III.8. Security rules / Quy tắc bảo mật
- III.9. Logging, monitoring & observability / Ghi log, giám sát & quan sát
- III.10. Deployment rules / Quy tắc triển khai
- III.11. Versioning & backward compatibility / Phiên bản & tương thích ngược
- III.12. "Do not" rules / Những điều cấm tuyệt đối
- III.13. Engineering quality gates / Kiểm soát chất lượng

**⚠️ AI Checklist:**
- [ ] Đã nắm rõ technology stack (Next.js, FastAPI, PostgreSQL)
- [ ] Đã hiểu kiến trúc module và data flow giữa 5 module
- [ ] Đã nắm quy tắc API design và versioning
- [ ] Đã hiểu quy tắc bảo mật và quality gates

---

### [IV. DOMAIN KNOWLEDGE BASE / KHO TRI THỨC NGÀNH](./PhầnIV_Domain_Knowledge_Base.md)

**File:** `PhầnIV_Domain_Knowledge_Base.md`

**Nội dung chính / Main Content:**
- IV.1. National Standards & Regulations / Tiêu chuẩn quốc gia
  - IV.1.1. TCVN – Vietnamese Standards (TCVN 33-2006, TCVN 7222:2002, ...)
  - IV.1.2. QCVN – Regulatory Limits
- IV.2. Engineering Formulas Library / Thư viện công thức tính toán
  - IV.2.1. Module 1 — Pipelines (Đường ống): Darcy-Weisbach, Colebrook-White, Re
  - IV.2.2. Module 2 — Aeration/Spray Rain Tower (Giàn phun mưa): C_ox, C_phun
  - IV.2.3. Module 3 — Rapid Mixing/Reaction (Ngăn trộn, phản ứng): V=Q×t, r=k×[A]
  - IV.2.4. Module 4 — Sedimentation Tank (Bể lắng): F, V, η
  - IV.2.5. Module 5 — Filtration (Bể lọc): f₁, q, h₇
- IV.3. Domain Glossary / Từ điển thuật ngữ ngành (EN-VI)
- IV.4. Reference Tables / Bảng tra cứu
  - Độ nhám ống, độ nhớt nước, oxy bão hòa, hệ số tổn thất, thời gian trộn/lắng, vận tốc lọc, cường độ rửa
- IV.5. Reference Ranges / Khoảng giá trị tham chiếu
- IV.6. Real-world Construction Workflow / Quy trình xây lắp thực tế
- IV.7. AI Reasoning Instructions (Domain-aware) / Hướng dẫn lý luận cho AI
- IV.8. Explicit Limitations / Giới hạn rõ ràng

**⚠️ AI Checklist:**
- [ ] Đã nắm rõ các tiêu chuẩn TCVN/QCVN cần tuân thủ
- [ ] Đã hiểu tất cả công thức tính toán cho 5 module
- [ ] Đã nắm thuật ngữ ngành (EN-VI) và sử dụng nhất quán
- [ ] Đã biết cách tra cứu bảng và khoảng giá trị tham chiếu
- [ ] Đã hiểu quy trình thi công thực tế
- [ ] Đã nắm hướng dẫn lý luận domain-aware và giới hạn rõ ràng

**🔴 LƯU Ý:** AI KHÔNG được tự bịa đặt công thức hoặc tiêu chuẩn. Chỉ sử dụng công thức có nguồn rõ ràng (TCVN, tài liệu kỹ thuật).

---

### [V. FUNCTIONAL REQUIREMENTS / YÊU CẦU CHỨC NĂNG](./PhầnV_Functional_Requirement.md)

**File:** `PhầnV_Functional_Requirement.md`

**Nội dung chính / Main Content:**
- Tổng quan yêu cầu chức năng
- User stories cho từng module (1-5)
- Acceptance criteria
- Inputs/Outputs chi tiết cho từng module
- Cross-module rules
- Non-functional requirements
- Integration requirements
- Testing requirements
- Documentation requirements

**⚠️ AI Checklist:**
- [ ] Đã nắm user stories và acceptance criteria cho 5 module
- [ ] Đã hiểu inputs/outputs của từng module
- [ ] Đã nắm cross-module rules (unit consistency, error handling, safety margins)
- [ ] Đã hiểu non-functional requirements (performance, scalability, security)

---

### [VI. WORKFLOW / QUY TRÌNH LÀM VIỆC](./PhầnVI_Workflow.md)

**File:** `PhầnVI_Workflow.md`

**Nội dung chính / Main Content:**
- Single module calculation workflow
- Module chain orchestration workflow
- Data flow between modules
- Module chain recommendation logic
- Validation workflow
- Error handling workflow
- Report generation workflow

**⚠️ AI Checklist:**
- [ ] Đã nắm workflow tính toán module đơn lẻ
- [ ] Đã hiểu workflow điều phối chuỗi module (1→2→3→4→5, 1→3→4, ...)
- [ ] Đã nắm logic đề xuất chuỗi module dựa trên quy mô và chất lượng nước
- [ ] Đã hiểu workflow validation và error handling

---

### [VII. TESTING & QA / KIỂM THỬ VÀ QA](./PhầnVII_Testing&QA.md)

**File:** `PhầnVII_Testing&QA.md`

**Nội dung chính / Main Content:**
- Testing objectives
- Types of tests (unit, integration, system, API contract, UI/UX, performance, security)
- Test corpus và test cases cho từng module
- Edge case handling
- Engineering threshold checks
- Test quality criteria
- QA workflow
- Test automation
- Performance benchmarks
- Security testing
- Regression testing
- QA metrics & reporting

**⚠️ AI Checklist:**
- [ ] Đã nắm các loại test cần thiết
- [ ] Đã hiểu test corpus và test cases cho 5 module
- [ ] Đã nắm cách xử lý edge cases và threshold checks
- [ ] Đã hiểu QA workflow và metrics

---

### [VIII. LOGGING, MONITORING & OBSERVABILITY](./PhầnVIII_Logging_Monitoring&Observability.md)

**File:** `PhầnVIII_Logging_Monitoring&Observability.md`

**Nội dung chính / Main Content:**
- Logging framework (structured JSON logs)
- Log levels (TRACE, DEBUG, INFO, WARN, ERROR, CRITICAL)
- Backend/Frontend/Database logging rules
- Module-specific logging
- Metrics và dashboards (Prometheus, Grafana)
- Distributed tracing (OpenTelemetry, Jaeger)
- Alerts và incident response
- Service Level Objectives (SLOs)
- Privacy và compliance logging (NĐ 13/2023)
- Observability tooling stack

**⚠️ AI Checklist:**
- [ ] Đã nắm cấu trúc logging (JSON, log levels)
- [ ] Đã hiểu quy tắc logging cho từng layer (backend, frontend, database)
- [ ] Đã nắm metrics, tracing, và alerting
- [ ] Đã hiểu SLOs và compliance requirements

---

## 🔄 QUY TRÌNH ĐỌC TÀI LIỆU CHO AI / AI READING WORKFLOW

**Vietnamese (chi tiết):**

Khi AI được yêu cầu làm việc với dự án này, quy trình đọc tài liệu như sau:

1. **Bước 1: Đọc file MASTER_PROMPT.md này** (file hiện tại)
   - Nắm tổng quan cấu trúc tài liệu
   - Ghi nhớ checklist cho từng phần

2. **Bước 2: Đọc Phần I (Introduction)**
   - Hiểu mục tiêu, phạm vi, stakeholders
   - Nắm persona và tone cần sử dụng

3. **Bước 3: Đọc Phần II (Roles & Behaviors) - QUAN TRỌNG NHẤT**
   - Ghi nhớ tất cả hành vi bắt buộc
   - Nắm rõ cấu trúc phản hồi BẮT BUỘC
   - Học thuộc "Do not" list

4. **Bước 4: Đọc Phần IV (Domain Knowledge Base)**
   - Nắm tiêu chuẩn TCVN/QCVN
   - Học thuộc công thức tính toán
   - Nắm thuật ngữ ngành

5. **Bước 5: Đọc các phần còn lại theo nhu cầu**
   - Phần III: Khi cần hiểu kiến trúc
   - Phần V: Khi cần hiểu yêu cầu chức năng
   - Phần VI: Khi cần hiểu workflow
   - Phần VII: Khi cần hiểu testing
   - Phần VIII: Khi cần hiểu logging/monitoring

6. **Bước 6: Tham chiếu lại khi cần**
   - Luôn tham chiếu đúng file phần khi trích dẫn
   - Không được bỏ sót thông tin quan trọng

**English (concise):**

AI reading workflow:
1. Read this MASTER_PROMPT.md (overview)
2. Read Part I (Introduction) - understand goals, scope, persona
3. Read Part II (Roles & Behaviors) - **MOST IMPORTANT** - memorize all mandatory behaviors
4. Read Part IV (Domain Knowledge Base) - learn standards, formulas, terminology
5. Read other parts as needed (III, V, VI, VII, VIII)
6. Reference correct section files when citing

---

## ✅ CHECKLIST TỔNG QUAN CHO AI / OVERALL AI CHECKLIST

**Trước khi bắt đầu làm việc, AI PHẢI kiểm tra:**

- [ ] Đã đọc file MASTER_PROMPT.md này
- [ ] Đã đọc Phần I (Introduction)
- [ ] Đã đọc Phần II (Roles & Behaviors) - **BẮT BUỘC**
- [ ] Đã đọc Phần IV (Domain Knowledge Base) - **BẮT BUỘC**
- [ ] Đã nắm rõ cấu trúc phản hồi: JSON → Technical Report → Hóa phàm
- [ ] Đã ghi nhớ "Do not" list
- [ ] Đã nắm tiêu chuẩn TCVN/QCVN cần tuân thủ
- [ ] Đã hiểu công thức tính toán cho 5 module
- [ ] Đã nắm thuật ngữ ngành (EN-VI) và sử dụng nhất quán
- [ ] Đã hiểu quy trình validation và error handling

**Khi hoàn thiện các phần còn thiếu:**

- [ ] Đã tham chiếu đúng file phần khi phát triển
- [ ] Đã đảm bảo tính nhất quán với các phần khác
- [ ] Đã kiểm tra không trùng lặp với các file phần đã có
- [ ] Đã cập nhật mục lục trong MASTER_PROMPT.md nếu cần

---

## 📝 GHI CHÚ QUAN TRỌNG / IMPORTANT NOTES

1. **Tất cả các file phần đều nằm trong thư mục `MASTER_PROMPT/`**
2. **Khi tham chiếu, luôn dùng đường dẫn tương đối:** `./PhầnI_Introduction.md`
3. **Nếu một phần chưa được tách ra, hãy thông báo và đề xuất tách**
4. **Luôn kiểm tra tính nhất quán giữa các phần**
5. **Khi phát triển thêm, cập nhật cả MASTER_PROMPT.md và file phần tương ứng**

---

## 🔗 LIÊN KẾT NHANH / QUICK LINKS

- [Phần I: Introduction](./PhầnI_Introduction.md)
- [Phần II: Roles & Behaviors](./PhầnII_Role&Behavior.md) ⚠️ **QUAN TRỌNG NHẤT**
- [Phần III: Architecture Rules](./PhầnIII_Architecture_rules.md)
- [Phần IV: Domain Knowledge Base](./PhầnIV_Domain_Knowledge_Base.md) ⚠️ **BẮT BUỘC**
- [Phần V: Functional Requirements](./PhầnV_Functional_Requirement.md)
- [Phần VI: Workflow](./PhầnVI_Workflow.md)
- [Phần VII: Testing & QA](./PhầnVII_Testing&QA.md)
- [Phần VIII: Logging, Monitoring & Observability](./PhầnVIII_Logging_Monitoring&Observability.md)

---

**Kết thúc file MASTER_PROMPT.md**

*File này là file điều hướng chính. Tất cả nội dung chi tiết nằm trong các file phần tương ứng.*
