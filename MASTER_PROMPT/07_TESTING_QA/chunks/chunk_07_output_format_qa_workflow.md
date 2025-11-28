# Chunk 07: VII.9 Test Output Format, VII.10 QA Workflow

**Chunk ID:** `07_TESTING_QA_chunk_07`  
**Section:** VII.9 Test Output Format, VII.10 QA Workflow  
**Word Count:** ~500  
**Retrieval Keywords:** test output format, test file structure, test execution commands, coverage report format, QA workflow, pre-commit checks, pre-push checks, pre-merge checks, pre-release checks  
**Related Chunks:** `07_TESTING_QA_chunk_06, 07_TESTING_QA_chunk_08`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_9_10`

---

## VII.9 Test Output Format — Định dạng đầu ra test

**EN:** System must generate tests in standardized formats and locations.

**VI:** Hệ thống phải tạo test ở định dạng và vị trí chuẩn hóa.

### VII.9.1 Test File Structure

```
tests/
├── unit/
│   ├── test_module1_pipe_hydraulics.py
│   ├── test_module2_rainfall_aeration.py
│   ├── test_module3_rapid_mixing.py
│   ├── test_module4_sedimentation.py
│   ├── test_module5_filtration.py
│   ├── test_utilities.py
│   └── test_validators.py
├── integration/
│   ├── test_module_chains.py
│   ├── test_data_flow.py
│   ├── test_api_integration.py
│   └── test_database_integration.py
├── system/
│   ├── test_end_to_end.py
│   ├── test_report_generation.py
│   └── test_user_workflows.py
├── api/
│   ├── test_api_contracts.py
│   ├── test_api_security.py
│   └── test_api_performance.py
├── ui/
│   ├── test_form_validation.spec.ts
│   ├── test_error_handling.spec.ts
│   └── test_responsive_design.spec.ts
└── data/
    ├── test_data_standard.json
    ├── test_data_edge_cases.json
    └── test_data_stress.json
```

---

### VII.9.2 Test Execution Commands

**Unit Tests:**
```bash
pytest tests/unit/ -v --cov=src --cov-report=html
```

**Integration Tests:**
```bash
pytest tests/integration/ -v
```

**System Tests:**
```bash
pytest tests/system/ -v --slow
```

**All Tests:**
```bash
pytest tests/ -v --cov=src --cov-report=term-missing
```

---

### VII.9.3 Coverage Report Format

**Requirements:**
- HTML coverage report for detailed analysis
- Terminal coverage report for quick review
- Coverage summary in CI/CD pipeline
- Coverage trends over time

**Minimum Coverage:**
- Overall: ≥ 85%
- Calculation modules: ≥ 90%
- Utility functions: ≥ 80%
- API endpoints: ≥ 85%

---

## VII.10 QA Workflow — Quy trình QA

**EN:** Standardized QA workflow to ensure quality before deployment.

**VI:** Quy trình QA chuẩn hóa để đảm bảo chất lượng trước khi triển khai.

### VII.10.1 Pre-Commit Checks

**Steps:**
1. Run linters (flake8, pylint, eslint)
2. Run formatters (black, prettier)
3. Run type checkers (mypy, TypeScript)
4. Run unit tests (fast tests only)

---

### VII.10.2 Pre-Push Checks

**Steps:**
1. Run all unit tests
2. Run integration tests
3. Check code coverage (≥ 85%)
4. Run static analysis

---

### VII.10.3 Pre-Merge Checks (CI/CD)

**Steps:**
1. Run all tests (unit, integration, system)
2. Run API contract tests
3. Run security tests
4. Validate threshold rules
5. Confirm OpenAPI alignment
6. Produce coverage report
7. Run performance benchmarks

---

### VII.10.4 Pre-Release Checks

**Steps:**
1. All pre-merge checks
2. Full system tests
3. User acceptance testing scenarios
4. Performance stress tests
5. Security audit
6. Documentation review
7. Final QA summary

---


---
**Previous Chunk:** `07_TESTING_QA_chunk_06`  
**Next Chunk:** `07_TESTING_QA_chunk_08`
