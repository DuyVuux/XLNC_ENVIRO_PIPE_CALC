# Folder Structure / Cấu trúc Thư mục

**Version:** 1.0  
**Last Updated:** 2024  
**Purpose:** Documents the folder structure of the EnviroPipeCalc Master Prompt

---

## Root Structure / Cấu trúc Gốc

```
EnviroPipeCalc/
├── MASTER_PROMPT/
│   ├── 00_INDEX.md                          # Index of all sections and chunks
│   ├── 10_CANONICAL_GLOBAL_SUMMARY.md       # Global canonical summary
│   ├── MASTER_PROMPT.md                     # Main navigation document
│   ├── 01_INTRODUCTION/                     # Section I
│   ├── 02_ROLES_BEHAVIORS/                  # Section II ⚠️ MOST IMPORTANT
│   ├── 03_ARCHITECTURE_RULES/               # Section III
│   ├── 04_DOMAIN_KNOWLEDGE_BASE/            # Section IV ⚠️ MANDATORY
│   ├── 05_FUNCTIONAL_REQUIREMENTS/          # Section V
│   ├── 06_WORKFLOW_AUTOMATION/              # Section VI
│   ├── 07_TESTING_QA/                       # Section VII
│   ├── 08_LOGGING_MONITORING/               # Section VIII
│   ├── 09_SECURITY_AUTHENTICATION/          # Section IX
│   └── 10_APPENDIX/                         # Section X
├── System_Prompt/
│   ├── LOADING_INSTRUCTIONS.md              # How to load chunks
│   ├── MASTER_PROMPT_SYSTEM.md              # System prompt
│   └── RETRIEVAL_LOOP_PROMPT.md             # Retrieval loop prompt
├── System_Rules/
│   └── GLOBAL_ENFORCEMENT_SYSTEM.md         # Global enforcement rules
└── Workspace_Rules/
    ├── CHUNK_NAMING_CONVENTION.md            # Chunk naming rules
    ├── FOLDER_STRUCTURE.md                  # This file
    ├── RETRIEVAL_CONFIG.json                # Retrieval configuration
    ├── SEMANTIC_MAP.md                      # Semantic map
    └── WORKFLOW_AUTOMATION_RULES.md          # Workflow automation rules
```

---

## Section Structure / Cấu trúc Phần

Each section follows this structure:

```
{SECTION_ID}_{SECTION_NAME}/
├── raw.md                                    # Complete raw content
├── chunks/
│   ├── chunk_01_{name}.md
│   ├── chunk_02_{name}.md
│   └── ...
└── summaries/
    └── canonical_summary.md                  # Canonical summary
```

---

## Section Details / Chi tiết Phần

### 01_INTRODUCTION/ (7 chunks)
- `raw.md` - Complete introduction content
- `chunks/` - 7 semantic chunks
- `summaries/canonical_summary.md` - Introduction summary

### 02_ROLES_BEHAVIORS/ (7 chunks) ⚠️ **MOST IMPORTANT**
- `raw.md` - Complete roles & behaviors content
- `chunks/` - 7 semantic chunks
- `summaries/canonical_summary.md` - Roles & behaviors summary

### 03_ARCHITECTURE_RULES/ (7 chunks)
- `raw.md` - Complete architecture rules content
- `chunks/` - 7 semantic chunks
- `summaries/canonical_summary.md` - Architecture rules summary

### 04_DOMAIN_KNOWLEDGE_BASE/ (8 chunks) ⚠️ **MANDATORY**
- `raw.md` - Complete domain knowledge content
- `chunks/` - 8 semantic chunks
- `summaries/canonical_summary.md` - Domain knowledge summary

### 05_FUNCTIONAL_REQUIREMENTS/ (9 chunks)
- `raw.md` - Complete functional requirements content
- `chunks/` - 9 semantic chunks
- `summaries/canonical_summary.md` - Functional requirements summary

### 06_WORKFLOW_AUTOMATION/ (8 chunks)
- `raw.md` - Complete workflow automation content
- `chunks/` - 8 semantic chunks
- `summaries/canonical_summary.md` - Workflow automation summary

### 07_TESTING_QA/ (9 chunks)
- `raw.md` - Complete testing & QA content
- `chunks/` - 9 semantic chunks
- `summaries/canonical_summary.md` - Testing & QA summary

### 08_LOGGING_MONITORING/ (11 chunks)
- `raw.md` - Complete logging & monitoring content
- `chunks/` - 11 semantic chunks
- `summaries/canonical_summary.md` - Logging & monitoring summary

### 09_SECURITY_AUTHENTICATION/ (9 chunks)
- `raw.md` - Complete security & authentication content
- `chunks/` - 9 semantic chunks
- `summaries/canonical_summary.md` - Security & authentication summary

### 10_APPENDIX/ (6 chunks)
- `raw.md` - Complete appendix content
- `chunks/` - 6 semantic chunks
- `summaries/canonical_summary.md` - Appendix summary

---

## File Naming Conventions / Quy ước Đặt tên File

### Section Directories / Thư mục Phần
- Format: `{NUMBER:02d}_{SECTION_NAME}`
- Example: `01_INTRODUCTION`, `02_ROLES_BEHAVIORS`

### Chunk Files / File Chunk
- Format: `chunk_{NUMBER:02d}_{descriptive_name}.md`
- Example: `chunk_01_header_overview.md`, `chunk_02_authentication.md`

### Summary Files / File Tóm tắt
- Format: `canonical_summary.md`
- Location: `{SECTION_ID}/summaries/canonical_summary.md`

---

## Statistics / Thống kê

- **Total Sections:** 10
- **Total Chunks:** 81
- **Total Canonical Summaries:** 10
- **Average Chunks per Section:** 8.1
- **Largest Section:** 08_LOGGING_MONITORING (11 chunks)
- **Smallest Section:** 10_APPENDIX (6 chunks)

---

**Last Updated:** 2024  
**Status:** ✅ Complete - All sections documented







