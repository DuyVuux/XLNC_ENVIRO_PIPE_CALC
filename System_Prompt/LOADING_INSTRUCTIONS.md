# Loading Instructions / Hướng dẫn Tải

**Version:** 1.0  
**Last Updated:** 2024  
**Purpose:** Instructions for loading canonical summaries and chunks from the EnviroPipeCalc Master Prompt

---

## Overview / Tổng quan

The EnviroPipeCalc Master Prompt consists of **10 sections** with **81 chunks** total. Each section has:
- A `raw.md` file with complete content
- A `chunks/` directory with semantic chunks
- A `summaries/canonical_summary.md` file

---

## Loading Strategy / Chiến lược Tải

### Step 1: Load Global Summary / Bước 1: Tải Tóm tắt Toàn cục

**File:** `MASTER_PROMPT/10_CANONICAL_GLOBAL_SUMMARY.md`

This provides:
- Executive summary of all 10 sections
- Key requirements summary
- System architecture overview
- Compliance & standards overview
- Navigation guide

**Priority:** Load FIRST for context

---

### Step 2: Load Section Canonical Summaries / Bước 2: Tải Tóm tắt Canonical của Phần

**Location:** `MASTER_PROMPT/{SECTION_ID}/summaries/canonical_summary.md`

**Sections:**
1. `01_INTRODUCTION/summaries/canonical_summary.md` - Project overview
2. `02_ROLES_BEHAVIORS/summaries/canonical_summary.md` - ⚠️ **MOST IMPORTANT**
3. `03_ARCHITECTURE_RULES/summaries/canonical_summary.md` - Architecture
4. `04_DOMAIN_KNOWLEDGE_BASE/summaries/canonical_summary.md` - ⚠️ **MANDATORY**
5. `05_FUNCTIONAL_REQUIREMENTS/summaries/canonical_summary.md` - Requirements
6. `06_WORKFLOW_AUTOMATION/summaries/canonical_summary.md` - Workflows
7. `07_TESTING_QA/summaries/canonical_summary.md` - Testing
8. `08_LOGGING_MONITORING/summaries/canonical_summary.md` - Observability
9. `09_SECURITY_AUTHENTICATION/summaries/canonical_summary.md` - Security
10. `10_APPENDIX/summaries/canonical_summary.md` - Reference

**Priority:** Load based on task requirements

---

### Step 3: Load Specific Chunks / Bước 3: Tải Chunks Cụ thể

**Location:** `MASTER_PROMPT/{SECTION_ID}/chunks/chunk_{ID}_{name}.md`

**Chunk Naming Convention:**
- Format: `chunk_{number:02d}_{descriptive_name}.md`
- Example: `chunk_01_header_overview.md`, `chunk_02_authentication.md`

**Total Chunks:** 81 chunks across 10 sections

---

## Mandatory Loading Order / Thứ tự Tải Bắt buộc

### For AI Assistants / Cho AI Assistant

1. **ALWAYS Load First:**
   - `10_CANONICAL_GLOBAL_SUMMARY.md` - Global context
   - `02_ROLES_BEHAVIORS/summaries/canonical_summary.md` - ⚠️ **MOST IMPORTANT**
   - `02_ROLES_BEHAVIORS/chunks/chunk_04_response_structure_mandatory.md` - MANDATORY response structure

2. **ALWAYS Load for Domain Tasks:**
   - `04_DOMAIN_KNOWLEDGE_BASE/summaries/canonical_summary.md` - ⚠️ **MANDATORY**
   - `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_06_glossary_reference_tables.md` - Terminology

3. **Load as Needed:**
   - Other section summaries and chunks based on task

### For Developers / Cho Nhà phát triển

1. **Architecture Tasks:**
   - `03_ARCHITECTURE_RULES/summaries/canonical_summary.md`
   - Relevant architecture chunks

2. **Feature Development:**
   - `05_FUNCTIONAL_REQUIREMENTS/summaries/canonical_summary.md`
   - `06_WORKFLOW_AUTOMATION/summaries/canonical_summary.md`
   - Relevant functional chunks

3. **Security Tasks:**
   - `09_SECURITY_AUTHENTICATION/summaries/canonical_summary.md`
   - Relevant security chunks

---

## Chunk Retrieval / Truy hồi Chunk

### By Topic / Theo Chủ đề

**Formulas:**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_02_module1_formulas_pipelines.md`
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_03_module2_formulas_aeration.md`
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_04_module3_formulas_mixing.md`
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_05_module4_5_formulas_settling_filtration.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md`

**API Endpoints:**
- `10_APPENDIX/chunks/chunk_02_api_endpoint_reference.md`

**Error Codes:**
- `10_APPENDIX/chunks/chunk_03_error_codes_troubleshooting.md`

**Security:**
- `09_SECURITY_AUTHENTICATION/chunks/chunk_02_authentication.md`
- `09_SECURITY_AUTHENTICATION/chunks/chunk_03_authorization_rbac.md`
- `09_SECURITY_AUTHENTICATION/chunks/chunk_05_api_security.md`

**Testing:**
- `07_TESTING_QA/chunks/chunk_03_test_corpus.md`
- `07_TESTING_QA/chunks/chunk_04_test_cases_by_module.md`

**Logging:**
- `08_LOGGING_MONITORING/chunks/chunk_02_logging_standards.md`
- `08_LOGGING_MONITORING/chunks/chunk_04_module_specific_logging.md`

### By Module / Theo Module

**Module 1 (Pipeline):**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_02_module1_formulas_pipelines.md`
- `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_02_module1_pipe_hydraulics.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` (Section X.5.1)

**Module 2 (Aeration):**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_03_module2_formulas_aeration.md`
- `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_03_module2_rainfall_aeration.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` (Section X.5.2)

**Module 3 (Mixing):**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_04_module3_formulas_mixing.md`
- `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_04_module3_rapid_mixing.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` (Section X.5.3)

**Module 4 (Settling):**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_05_module4_5_formulas_settling_filtration.md`
- `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_05_module4_5_settling_filtration.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` (Section X.5.4)

**Module 5 (Filtration):**
- `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_05_module4_5_formulas_settling_filtration.md`
- `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_05_module4_5_settling_filtration.md`
- `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` (Section X.5.5)

---

## Index Reference / Tham chiếu Mục lục

**File:** `MASTER_PROMPT/00_INDEX.md`

This file provides:
- Complete list of all 10 sections
- Complete list of all 81 chunks
- Quick links to all sections
- Search tips by topic and module
- Usage instructions

**Use this file to:**
- Find specific chunks by topic
- Navigate between sections
- Understand content distribution

---

## Best Practices / Thực hành Tốt nhất

1. **Always start with canonical summaries** - They provide high-level context
2. **Load chunks only when needed** - Don't load all 81 chunks at once
3. **Use 00_INDEX.md** - For finding specific chunks
4. **Reference chunk IDs** - When citing information, use chunk IDs
5. **Check cross-references** - Canonical summaries include cross-references to related chunks

---

## Example Loading Sequence / Ví dụ Thứ tự Tải

### Example 1: Calculate Module 1 / Ví dụ 1: Tính Module 1

1. `10_CANONICAL_GLOBAL_SUMMARY.md` - Global context
2. `02_ROLES_BEHAVIORS/summaries/canonical_summary.md` - Mandatory behaviors
3. `04_DOMAIN_KNOWLEDGE_BASE/summaries/canonical_summary.md` - Domain knowledge
4. `04_DOMAIN_KNOWLEDGE_BASE/chunks/chunk_02_module1_formulas_pipelines.md` - Module 1 formulas
5. `05_FUNCTIONAL_REQUIREMENTS/chunks/chunk_02_module1_pipe_hydraulics.md` - Module 1 requirements
6. `10_APPENDIX/chunks/chunk_05_formulas_quick_lookup.md` - Quick formula reference

### Example 2: Implement API Security / Ví dụ 2: Triển khai Bảo mật API

1. `10_CANONICAL_GLOBAL_SUMMARY.md` - Global context
2. `09_SECURITY_AUTHENTICATION/summaries/canonical_summary.md` - Security framework
3. `09_SECURITY_AUTHENTICATION/chunks/chunk_05_api_security.md` - API security details
4. `03_ARCHITECTURE_RULES/chunks/chunk_07_security_deployment_quality.md` - Architecture security rules
5. `10_APPENDIX/chunks/chunk_06_standards_compliance_checklist.md` - Security compliance checklist

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All 10 sections, 81 chunks documented
