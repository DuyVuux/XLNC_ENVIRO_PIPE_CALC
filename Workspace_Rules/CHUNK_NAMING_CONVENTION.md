# Chunk Naming Convention / Quy ước Đặt tên Chunk

**Version:** 1.0  
**Last Updated:** 2024  
**Purpose:** Documents the naming convention for semantic chunks in the EnviroPipeCalc Master Prompt

---

## Naming Format / Định dạng Tên

### Standard Format / Định dạng Chuẩn

```
chunk_{NUMBER:02d}_{descriptive_name}.md
```

**Components:**
- `chunk_` - Prefix (always)
- `{NUMBER:02d}` - Zero-padded 2-digit number (01, 02, 03, ...)
- `_{descriptive_name}` - Lowercase, underscore-separated descriptive name
- `.md` - Markdown extension

### Examples / Ví dụ

- `chunk_01_header_overview.md`
- `chunk_02_authentication.md`
- `chunk_03_authorization_rbac.md`
- `chunk_04_user_management.md`
- `chunk_05_api_security.md`

---

## Naming Patterns / Mẫu Đặt tên

### Header Chunks / Chunk Tiêu đề
- Pattern: `chunk_01_header_{section_topic}.md`
- Examples:
  - `chunk_01_header_overview.md`
  - `chunk_01_header_roles.md`
  - `chunk_01_header_technology_stack.md`

### Topic Chunks / Chunk Chủ đề
- Pattern: `chunk_{NUMBER:02d}_{topic_name}.md`
- Examples:
  - `chunk_02_authentication.md`
  - `chunk_03_authorization_rbac.md`
  - `chunk_04_user_management.md`

### Combined Chunks / Chunk Kết hợp
- Pattern: `chunk_{NUMBER:02d}_{topic1}_{topic2}.md`
- Examples:
  - `chunk_06_cross_module_rules_edge_cases.md`
  - `chunk_07_data_security_privacy.md`
  - `chunk_08_security_policies_compliance.md`

### Conclusion Chunks / Chunk Kết luận
- Pattern: `chunk_{NUMBER:02d}_{topic}_conclusion.md` or `chunk_{NUMBER:02d}_{topic1}_{topic2}_conclusion.md`
- Examples:
  - `chunk_09_security_testing_auditing_conclusion.md`
  - `chunk_11_reporting_review_conclusion.md`

---

## Section-Specific Patterns / Mẫu Theo Phần

### Phần I - Introduction
- `chunk_01_ai_instructions_project_overview.md`
- `chunk_02_goals.md`
- `chunk_03_success_scope.md`
- `chunk_04_stakeholders_constraints.md`
- `chunk_05_deliverables_io.md`
- `chunk_06_usage_scenarios.md`
- `chunk_07_persona_examples.md`

### Phần II - Roles & Behaviors
- `chunk_01_header_roles.md`
- `chunk_02_behaviors_part1.md`
- `chunk_03_behaviors_part2.md`
- `chunk_04_response_structure_mandatory.md`
- `chunk_05_prompt_templates_validation.md`
- `chunk_06_failure_testing.md`
- `chunk_07_do_not_deliverables_checklist_footer.md`

### Phần III - Architecture Rules
- `chunk_01_header_technology_stack.md`
- `chunk_02_architectural_principles.md`
- `chunk_03_module_architecture_data_flow.md`
- `chunk_04_backend_rules.md`
- `chunk_05_frontend_rules.md`
- `chunk_06_database_api_design.md`
- `chunk_07_security_deployment_quality.md`

### Phần IV - Domain Knowledge Base
- `chunk_01_header_national_standards.md`
- `chunk_02_module1_formulas_pipelines.md`
- `chunk_03_module2_formulas_aeration.md`
- `chunk_04_module3_formulas_mixing.md`
- `chunk_05_module4_5_formulas_settling_filtration.md`
- `chunk_06_glossary_reference_tables.md`
- `chunk_07_reference_ranges_workflow.md`
- `chunk_08_ai_reasoning_limitations.md`

### Phần V - Functional Requirements
- `chunk_01_header_overview_general_user_stories.md`
- `chunk_02_module1_pipe_hydraulics.md`
- `chunk_03_module2_rainfall_aeration.md`
- `chunk_04_module3_rapid_mixing.md`
- `chunk_05_module4_5_settling_filtration.md`
- `chunk_06_cross_module_rules_edge_cases.md`
- `chunk_07_module_io_summary_non_functional.md`
- `chunk_08_integration_testing_documentation.md`
- `chunk_09_compliance_change_management_summary.md`

### Phần VI - Workflow Automation
- `chunk_01_header_overview.md`
- `chunk_02_single_module_calculation_workflow.md`
- `chunk_03_module_chain_calculation_workflow.md`
- `chunk_04_module_chain_recommendation_workflow.md`
- `chunk_05_data_flow_transformation_workflow.md`
- `chunk_06_validation_error_handling_workflow.md`
- `chunk_07_report_generation_workflow.md`
- `chunk_08_summary_diagrams_examples_conclusion.md`

### Phần VII - Testing & QA
- `chunk_01_header_overview.md`
- `chunk_02_types_of_tests.md`
- `chunk_03_test_corpus.md`
- `chunk_04_test_cases_by_module.md`
- `chunk_05_integration_edge_cases.md`
- `chunk_06_thresholds_quality.md`
- `chunk_07_output_format_qa_workflow.md`
- `chunk_08_automation_validation_performance.md`
- `chunk_09_security_regression_metrics_conclusion.md`

### Phần VIII - Logging & Monitoring
- `chunk_01_header_overview.md`
- `chunk_02_logging_standards.md`
- `chunk_03_backend_frontend_db_logging.md`
- `chunk_04_module_specific_logging.md`
- `chunk_05_metrics_dashboards.md`
- `chunk_06_distributed_tracing.md`
- `chunk_07_alerts_incident_response.md`
- `chunk_08_slos.md`
- `chunk_09_privacy_compliance_logging.md`
- `chunk_10_observability_tooling.md`
- `chunk_11_reporting_review_conclusion.md`

### Phần IX - Security & Authentication
- `chunk_01_header_overview.md`
- `chunk_02_authentication.md`
- `chunk_03_authorization_rbac.md`
- `chunk_04_user_management.md`
- `chunk_05_api_security.md`
- `chunk_06_frontend_security.md`
- `chunk_07_data_security_privacy.md`
- `chunk_08_security_policies_compliance.md`
- `chunk_09_security_testing_auditing_conclusion.md`

### Phần X - Appendix
- `chunk_01_header_quick_reference.md`
- `chunk_02_api_endpoint_reference.md`
- `chunk_03_error_codes_troubleshooting.md`
- `chunk_04_code_templates_examples.md`
- `chunk_05_formulas_quick_lookup.md`
- `chunk_06_standards_compliance_checklist.md`

---

## Rules / Quy tắc

1. **Always use lowercase** - No uppercase letters in chunk names
2. **Use underscores** - Separate words with underscores, not hyphens or spaces
3. **Be descriptive** - Name should clearly indicate chunk content
4. **Keep it concise** - Avoid overly long names (max ~50 characters)
5. **Use consistent patterns** - Follow section-specific patterns when possible
6. **Number sequentially** - Chunks numbered 01, 02, 03, ... within each section
7. **Include section context** - Name should indicate which section it belongs to (if not obvious from folder)

---

## Chunk ID Format / Định dạng Chunk ID

Each chunk has a unique Chunk ID in its metadata:

```
{SECTION_ID}_chunk_{NUMBER:02d}
```

**Examples:**
- `01_INTRODUCTION_chunk_01`
- `02_ROLES_BEHAVIORS_chunk_04`
- `09_SECURITY_AUTHENTICATION_chunk_02`
- `10_APPENDIX_chunk_05`

---

## Best Practices / Thực hành Tốt nhất

1. **Use descriptive names** - Name should indicate content
2. **Follow section patterns** - Maintain consistency within sections
3. **Keep names short** - Avoid overly long descriptive names
4. **Use standard terms** - Use terminology from domain glossary when possible
5. **Group related content** - Combine related topics in single chunk when appropriate

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All 81 chunks follow this convention







