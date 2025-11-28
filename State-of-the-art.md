I. MỤC TIÊU

Bạn đang có:

Một bộ Master Prompt cực lớn (gồm ~10 file, mỗi file hàng nghìn dòng):
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/MASTER_PROMPT.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnI_Introduction.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnII_Role&Behavior.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnIII_Architecture_rules.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnIV_Domain_Knowledge_Base.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnV_Functional_Requirement.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnVI_Workflow.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnVII_Testing&QA.md
/home/duykhongngu28/massive/EnviroPipeCalc/MASTER_PROMPT/PhầnVIII_Logging_Monitoring&Observability.md

Muốn AI đọc – hiểu – tuân thủ 100%

Muốn tránh việc AI “quên”, “tự suy diễn”, “bỏ qua quy tắc”

=> Giải pháp đúng chuẩn thế giới: Semantic Chunking + Canonical Summary + Retrieval Loop.

II. SKELETON CHUẨN QUỐC TẾ CHO TỔ CHỨC MASTER PROMPT

MASTER_PROMPT/
 ├── 00_INDEX.md
 ├── 01_INTRODUCTION/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_project_scope.md
 │     │     ├── chunk_02_domain_overview.md
 │     │     ├── chunk_03_objectives.md
 │     │     ├── chunk_04_system_constraints.md
 │     │     └── chunk_05_success_metrics.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 02_ROLES_BEHAVIORS/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_primary_role_engineer.md
 │     │     ├── chunk_02_behavior_rules.md
 │     │     ├── chunk_03_interaction_protocols.md
 │     │     ├── chunk_04_response_style_rules.md
 │     │     └── chunk_05_edge_case_handling.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 03_ARCHITECTURE_RULES/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_system_architecture_overview.md
 │     │     ├── chunk_02_module_design_principles.md
 │     │     ├── chunk_03_data_flow_rules.md
 │     │     ├── chunk_04_error_handling_architecture.md
 │     │     ├── chunk_05_i_o_contracts.md
 │     │     ├── chunk_06_engineering_guidelines.md
 │     │     └── chunk_07_api_design_principles.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 04_DOMAIN_KNOWLEDGE_BASE/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_water_treatment_overview.md
 │     │     ├── chunk_02_hydraulics_fundamentals.md
 │     │     ├── chunk_03_piping_design_rules.md
 │     │     ├── chunk_04_unit_processes_treatment.md
 │     │     ├── chunk_05_equations_reference.md
 │     │     ├── chunk_06_standards_and_regulations.md
 │     │     └── chunk_07_common_design_mistakes.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 05_FUNCTIONAL_REQUIREMENTS/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_fr_pipeline_calc.md
 │     │     ├── chunk_02_fr_rain_spray_bed.md
 │     │     ├── chunk_03_fr_equalization_tank.md
 │     │     ├── chunk_04_fr_aeration_system.md
 │     │     ├── chunk_05_fr_sludge_treatment.md
 │     │     ├── chunk_06_fr_instrumentation.md
 │     │     ├── chunk_07_non_functional.md
 │     │     └── chunk_08_fr_validation_rules.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 06_WORKFLOW_AUTOMATION/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_pipeline_compute_workflow.md
 │     │     ├── chunk_02_unit_process_selection_workflow.md
 │     │     ├── chunk_03_design_validation_workflow.md
 │     │     ├── chunk_04_user_request_to_output_flow.md
 │     │     └── chunk_05_end_to_end_data_flow.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 07_TESTING_QA/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_test_suite_structure.md
 │     │     ├── chunk_02_domain_test_cases.md
 │     │     ├── chunk_03_edge_cases_definition.md
 │     │     ├── chunk_04_equation_threshold_checks.md
 │     │     └── chunk_05_output_verification_rules.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json
 │
 ├── 08_LOGGING_MONITORING/
 │     ├── raw.md
 │     ├── chunks/
 │     │     ├── chunk_01_logging_principles.md
 │     │     ├── chunk_02_observability_metrics.md
 │     │     ├── chunk_03_tracing_rules.md
 │     │     ├── chunk_04_slos_slas_alerts.md
 │     │     └── chunk_05_error_telemetry.md
 │     └── summaries/
 │           ├── canonical_summary.md
 │           └── semantic_map.json

 ├── 09_APPENDIX/
 │     ├── glossary.md
 │     ├── reference_tables.md
 │     ├── unit_conversion_tables.md
 │     └── sample_input_output.md
 │
 ├── 10_CANONICAL_GLOBAL_SUMMARY.md
 └── retrieval_config.json

MẪU NỘI DUNG CHUẨN CHO TỪNG FILE
👉 00_INDEX.md

Mẫu chuẩn:

# EnviroPipeCalc — Master Prompt Index

## 1. Structure Overview
- 01_INTRODUCTION
- 02_ROLES_BEHAVIORS
- 03_ARCHITECTURE_RULES
- 04_DOMAIN_KNOWLEDGE_BASE
- 05_FUNCTIONAL_REQUIREMENTS
- 06_WORKFLOW_AUTOMATION
- 07_TESTING_QA
- 08_LOGGING_MONITORING
- 09_APPENDIX

## 2. Semantic Chunking Rules
- Một chunk = 400–1500 từ
- Mỗi chunk chỉ chứa một đơn vị ý nghĩa
- Không trộn domain với kỹ thuật

## 3. Retrieval Rules
- Ưu tiên canonical summary > raw chunk
- top_k = 5
- Mapping logic: xem semantic_map.json của từng phần

👉 Mẫu canonical_summary.md cho mọi phần
# Canonical Summary — <Tên phần>

## 1. Purpose
...

## 2. Core Principles
- Principle 1
- Principle 2

## 3. Rules
- Rule 1
- Rule 2
...

## 4. Constraints
...

## 5. Inputs / Outputs
...

## 6. Example Patterns
...

## 7. Anti-patterns
...

## 8. Cross-Dependencies
- Relies on: ...
- Provides for: ...

👉 semantic_map.json (chuẩn sử dụng trong Retrieval)
{
  "semantic_groups": [
    {
      "group": "architecture",
      "chunks": [
        "chunk_01_system_architecture_overview",
        "chunk_02_module_design_principles",
        "chunk_03_data_flow_rules",
        ...
      ]
    },
    {
      "group": "domain_hydraulics",
      "chunks": [
        "chunk_02_hydraulics_fundamentals",
        "chunk_03_piping_design_rules"
      ]
    }
  ],
  "relations": [
    {
      "source": "chunk_02_hydraulics_fundamentals",
      "links_to": ["chunk_03_data_flow_rules"]
    }
  ]
}

👉 retrieval_config.json — bản hoàn chỉnh
{
  "retrieval": {
    "vector_db": "local",
    "embedding_model": "text-embedding-3-large",
    "top_k": 5,
    "ranking": ["semantic_score", "criticality"],
    "priority": {
      "canonical_summary": 0.7,
      "raw_chunk": 0.3
    }
  },
  "rules": {
    "must_follow": [
      "Canonical Global Summary",
      "Cross-Dependencies",
      "Domain Safety Rules"
    ]
  }
}


III. ÁP DỤNG 3 KỸ THUẬT CHUẨN THEO THỨ TỰ
1. SEMANTIC CHUNKING – CHIA THEO NGHĨA (KHÔNG PHẢI THEO SỐ DÒNG)
Nguyên tắc quốc tế

Không cắt theo số dòng.

Không cắt theo heading duy nhất.

Cắt theo đơn vị ý nghĩa (Semantic Unit).

Chuẩn: Một chunk = 2–6 đoạn / 400–1500 từ
Checklist của một chunk chuẩn quốc tế:

Có 1 mục tiêu duy nhất

Có 1 hoặc nhiều quy tắc phụ

Có ví dụ (nếu có)

Không chứa nội dung chồng chéo nhiều chủ đề

Bạn sẽ làm như sau:

Ví dụ với:
PhầnIII_Architecture_rules.md (giả sử 5000 dòng)

Bạn tách thành:

chunk_01_System_Overview.md
chunk_02_Design_Principles.md
chunk_03_Modularization.md
chunk_04_I/O_Contracts.md
chunk_05_Error_Handling.md
chunk_06_Code_Style.md
...


Tổng chunk không nên quá 20.
Quá nhiều chunk → Retrieval khó, LLM chậm.

2. CANONICAL SUMMARY – TÓM TẮT CHUẨN HÓA (CHUẨN SẮC)
Canonical Summary = Chuẩn hóa nội dung theo cấu trúc không thay đổi

Đây là phần quan trọng nhất.

Chuẩn quốc tế của một Canonical Summary cho mỗi file:

# Canonical Summary – <Tên phần>

## 1. Purpose (Mục tiêu)
- ...

## 2. Core Principles (Nguyên tắc cốt lõi)
- ...

## 3. Rules (Các quy tắc cụ thể)
- rule_01:
- rule_02:
...

## 4. Constraints (Giới hạn)
- ...

## 5. Inputs / Outputs (đầu vào/ra)
- ...

## 6. Example Patterns (mẫu)
- ...

## 7. Anti-Patterns (tránh)
- ...

## 8. Cross-Dependencies (liên kết)
- references_to: [Phần II, Phần V, ...]

Mỗi chunk → bạn tạo 1 canonical_summary

Sau đó:

Toàn bộ 10 phần → tạo 1 global canonical summary

Tên file:
10_CANONICAL_GLOBAL_SUMMARY.md

AI sẽ dùng file này để định hình “tính cách + quy tắc cứng”.

3. RETRIEVAL LOOP – VÒNG LẶP TRUY XUẤT TỰ ĐỘNG
Mục tiêu

Khi bạn hỏi bất kỳ yêu cầu nào:

AI tự tìm chunk liên quan

Đọc canonical summary

Dùng chúng để trả lời theo quy tắc bạn viết

Retrieval Loop chuẩn quốc tế (pseudo-code)
Retrieval Loop:

1. Parse user query → tạo vector embedding
2. Semantic search trong thư mục /summaries + /chunks
3. Lấy top_k = 3–7 chunk liên quan nhất
4. Nối vào “Context Window”
5. Áp dụng Canonical Summary trước (ưu tiên)
6. Áp dụng raw chunk khi cần chi tiết
7. Trả lời với 3 lớp logic:
      - Canonical Rules
      - Domain Rules
      - Example Patterns

Bạn cần tạo file config

retrieval_config.json

Ví dụ chuẩn:

{
  "retrieval": {
    "top_k": 5,
    "ranking": ["semantic_score", "criticality"],
    "priority": {
      "canonical_summary": 0.7,
      "raw_chunk": 0.3
    }
  }
}

✅ IV. ÁP DỤNG CHO BỘ FILE CỤ THỂ CỦA BẠN

Dưới đây là roadmap thực chiến:

Bước 1 – Tạo skeleton chuẩn

Tạo 1 folder cho mỗi phần:

MASTER_PROMPT/
  01_Introduction/
  02_Role_Behavior/
  03_Architecture/
  04_Domain_Knowledge/
  05_Functional_Requirement/
  06_Workflow/
  07_Testing_QA/
  08_Logging_Monitoring/
  09_Others/

Bước 2 – Mỗi phần → tạo folder constants

Ví dụ:

03_Architecture/
   ├── raw.md
   ├── chunks/
   ├── summaries/
   └── canonical_summary.md

Bước 3 – Chia chunk cho mỗi file RAW

⚠️ Nguyên tắc:

Không quá 20 chunk

Không dưới 5 chunk

Bước 4 – Tạo canonical summary cho từng chunk

Tên file:

chunks/chunk_03_Modularization.cs.md

Bước 5 – Tạo canonical summary toàn phần
summaries/architecture_canonical.md

Bước 6 – Tạo Global Canonical Summary
MASTER_PROMPT/10_CANONICAL_GLOBAL_SUMMARY.md

Bước 7 – Tạo Retrieval Config
retrieval_config.json

---

## V. BEST PRACTICES CHO ENVIROPIPECALC PROJECT

### V.1. Semantic Chunking Best Practices

**Nguyên tắc chia chunk cho EnviroPipeCalc:**

1. **Chia theo Domain Logic (không phải theo heading):**
   - Module 1 (Pipe Hydraulics) → Chia theo: Input validation, Flow calculations, Headloss calculations, Pump selection
   - Module 2 (Aeration) → Chia theo: Oxygen saturation, Spray intensity, Efficiency evaluation
   - Module 3 (Mixing) → Chia theo: Tank sizing, Reaction kinetics, Efficiency calculation
   - Module 4 (Sedimentation) → Chia theo: Area calculation, Settling efficiency, Tank dimensions
   - Module 5 (Filtration) → Chia theo: Filter area, Backwash design, Cycle time

2. **Kích thước chunk:**
   - Minimum: 400 từ (đảm bảo đủ context)
   - Maximum: 1500 từ (tránh quá dài, khó retrieval)
   - Optimal: 600-1000 từ (cân bằng giữa context và retrieval speed)

3. **Mỗi chunk phải có:**
   - Chunk ID: `chunk_XX_<semantic_name>.md`
   - Metadata header: Purpose, Dependencies, Cross-references
   - Self-contained: Có thể hiểu độc lập (với cross-references)
   - Formula citations: Ghi rõ nguồn (TCVN, engineering handbook)

4. **Tránh:**
   - Chia theo số dòng cố định
   - Trộn domain knowledge với architecture rules
   - Trộn functional requirements với testing rules
   - Chunk quá ngắn (< 300 từ) hoặc quá dài (> 2000 từ)

### V.2. Canonical Summary Best Practices

**Cấu trúc chuẩn cho EnviroPipeCalc:**

1. **Purpose (Mục tiêu):**
   - Mô tả rõ mục đích của section/chunk
   - Ví dụ: "Module 1 calculates pipe diameter, velocity, and headloss using Darcy-Weisbach equation per TCVN 33-2006"

2. **Core Principles (Nguyên tắc cốt lõi):**
   - Liệt kê 3-5 nguyên tắc quan trọng nhất
   - Ví dụ: "Always validate inputs before calculation", "Use TCVN 33-2006 standards", "Provide confidence scores"

3. **Rules (Quy tắc cụ thể):**
   - Đánh số rõ ràng: rule_01, rule_02, ...
   - Mỗi rule phải actionable
   - Ví dụ: "rule_01: Q must be > 0 and have explicit unit (m³/s, m³/h, m³/ngày)"

4. **Constraints (Giới hạn):**
   - TCVN limits: Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s
   - Physical limits: 0°C < t < 100°C
   - Engineering thresholds: v_filter = 6-10 m/h

5. **Inputs/Outputs:**
   - Bảng rõ ràng với units
   - Required vs Optional
   - Default values (nếu có)

6. **Example Patterns:**
   - 2-3 ví dụ điển hình
   - Bao gồm cả success và warning cases

7. **Anti-patterns:**
   - Những điều KHÔNG được làm
   - Ví dụ: "Do not assume missing inputs", "Do not invent formulas"

8. **Cross-Dependencies:**
   - Relies on: [chunk IDs]
   - Provides for: [chunk IDs]
   - Module dependencies: Module 2 depends on Module 1 output (Q)

### V.3. Retrieval Loop Best Practices

**Retrieval strategy cho EnviroPipeCalc:**

1. **Query Analysis:**
   - Parse user query → Identify domain (Module 1-5, Architecture, Testing, etc.)
   - Identify intent: Calculation, Validation, Design, Testing

2. **Semantic Search:**
   - Search in canonical summaries first (priority 0.7)
   - Then search in raw chunks (priority 0.3)
   - Use domain-specific embeddings (water treatment, hydraulics, etc.)

3. **Chunk Selection:**
   - top_k = 5 (optimal for EnviroPipeCalc)
   - Ranking: semantic_score (0.6) + criticality (0.3) + recency (0.1)
   - Criticality weights:
     - Phần II (Roles & Behaviors): criticality = 1.0 (highest)
     - Phần IV (Domain Knowledge): criticality = 0.9
     - Phần III (Architecture): criticality = 0.8
     - Other parts: criticality = 0.7

4. **Context Assembly:**
   - Order: Canonical Global Summary → Section Canonical Summary → Relevant Chunks
   - Maximum context: 8000 tokens (reserve 2000 for response)
   - If exceeds → Prioritize by criticality

5. **Response Generation:**
   - Apply Canonical Rules first
   - Then apply Domain Rules (TCVN, formulas)
   - Finally apply Example Patterns
   - Always cite chunk IDs and section references

6. **Validation:**
   - Check against GLOBAL_ENFORCEMENT_SYSTEM.md
   - Verify no hallucination (formulas, standards)
   - Ensure cross-module consistency

### V.4. EnviroPipeCalc-Specific Considerations

1. **Domain Formulas:**
   - Tất cả công thức phải có chunk riêng với citation
   - Chunk ID format: `chunk_XX_formula_<formula_name>.md`
   - Example: `chunk_05_formula_darcy_weisbach.md`

2. **TCVN Standards:**
   - Mỗi TCVN reference → chunk riêng
   - Chunk ID format: `chunk_XX_standard_<tcvn_number>.md`
   - Example: `chunk_06_standard_tcvn_33_2006.md`

3. **Module Dependencies:**
   - Chunk phải ghi rõ dependencies
   - Module 2 depends on Module 1 → Chunk phải reference Module 1 chunks
   - Data flow → Chunk riêng cho data flow mapping

4. **Error Handling:**
   - Mỗi error type → chunk riêng
   - Chunk ID format: `chunk_XX_error_<error_type>.md`
   - Example: `chunk_08_error_validation_failure.md`

5. **Testing:**
   - Test cases → chunk riêng per module
   - Edge cases → chunk riêng
   - Threshold checks → chunk riêng

### V.5. Retrieval Performance Optimization

1. **Chunk Indexing:**
   - Pre-compute embeddings for all chunks
   - Store in vector DB with metadata (module, section, criticality)
   - Update embeddings when chunks change

2. **Caching Strategy:**
   - Cache canonical summaries (rarely change)
   - Cache frequently accessed chunks (Module 1, Module 2)
   - Invalidate cache on chunk updates

3. **Query Optimization:**
   - Use domain-specific query expansion
   - Example: "pipe calculation" → expand to "pipe hydraulics", "Darcy-Weisbach", "TCVN 33-2006"
   - Use synonyms: "lưu lượng" = "flowrate" = "Q"

4. **Response Time Targets:**
   - Retrieval: < 200ms
   - Context assembly: < 100ms
   - Total (retrieval + generation): < 5s for standard queries

### V.6. Maintenance and Updates

1. **Version Control:**
   - Mỗi chunk có version number
   - Changelog cho mỗi chunk update
   - Track dependencies between chunks

2. **Consistency Checks:**
   - Automated checks: Cross-reference validation
   - Manual review: Domain expert review for formula chunks
   - Regular audits: Quarterly review of all chunks

3. **Update Workflow:**
   - Update chunk → Update canonical summary → Update semantic map → Update global summary
   - Test retrieval after updates
   - Verify no breaking changes in dependencies

