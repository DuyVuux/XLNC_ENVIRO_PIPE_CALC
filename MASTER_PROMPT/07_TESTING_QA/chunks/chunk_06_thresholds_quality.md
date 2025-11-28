# Chunk 06: VII.7 Threshold Checks, VII.8 Test Quality Criteria

**Chunk ID:** `07_TESTING_QA_chunk_06`  
**Section:** VII.7 Threshold Checks, VII.8 Test Quality Criteria  
**Word Count:** ~700  
**Retrieval Keywords:** threshold checks, module thresholds, validation rules, test quality criteria, deterministic tests, reproducible tests, comprehensive coverage, self-documenting tests  
**Related Chunks:** `07_TESTING_QA_chunk_05, 07_TESTING_QA_chunk_07`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_7_8`

---

## VII.7 Threshold Checks — Kiểm tra ngưỡng kỹ thuật

**EN:** Each module must define strict engineering thresholds based on TCVN 33-2006 and TCVN 7222:2002.

**VI:** Mỗi module phải định nghĩa ngưỡng kỹ thuật nghiêm ngặt dựa trên TCVN 33-2006 và TCVN 7222:2002.

### VII.7.1 Module 1 Thresholds

**Thresholds:**
- **Velocity (suction):** 0.6 - 1.5 m/s (standard: 1.2 m/s)
- **Velocity (discharge):** 1.5 - 3.0 m/s (standard: 2.4 m/s)
- **Headloss per 100m:** < 10 m
- **Reynolds number:** > 4000 (turbulent flow preferred)

**Validation Rules:**
- If velocity < 0.6 m/s → Warning + suggest larger pipe
- If velocity > 3.0 m/s → Warning + suggest smaller pipe or multiple pipes
- If headloss > 10 m per 100m → Warning + suggest larger pipe

---

### VII.7.2 Module 2 Thresholds

**Thresholds:**
- **Spray intensity:** 2 - 10 m/h (optimal: 4-8 m/h)
- **Aeration efficiency:** 0.5 - 0.95 (optimal: 0.8-0.9)
- **Oxygen saturation:** 0 - 15 mg/l (temperature dependent)

**Validation Rules:**
- If spray intensity < 2 m/h → Warning: Low efficiency
- If spray intensity > 10 m/h → Warning: May cause splashing
- If efficiency < 0.5 → Warning: Very low efficiency
- If oxygen deficit > 50% → Warning: Insufficient aeration

---

### VII.7.3 Module 3 Thresholds

**Thresholds:**
- **Mixing time:** 30 - 300 seconds (optimal: 60-180 seconds)
- **Tank volume:** > 0.1 m³
- **Reaction efficiency:** ≥ 95% (target)

**Validation Rules:**
- If mixing time < 30 seconds → Warning: May be insufficient
- If mixing time > 300 seconds → Warning: May be excessive
- If efficiency < 95% → Warning: Consider increasing mixing time or oxygen

---

### VII.7.4 Module 4 Thresholds

**Thresholds:**
- **Settling velocity:** 0.3 - 2.0 mm/s (optimal: 0.5-1.0 mm/s)
- **Settling time:** 0.5 - 3.0 hours (optimal: 1.0-2.0 hours)
- **Overflow rate:** 0.5 - 2.0 m³/(m²·h) (optimal: 0.8-1.5 m³/(m²·h))

**Validation Rules:**
- If settling time < 0.5 hours → Warning: May be insufficient
- If settling time > 3.0 hours → Warning: May be excessive
- If overflow rate > 2.0 m³/(m²·h) → Warning: Exceeds standard

---

### VII.7.5 Module 5 Thresholds

**Thresholds:**
- **Filtration rate:** 6 - 10 m/h (optimal: 8 m/h)
- **Backwash intensity:** 12 - 15 l/(s·m²) (optimal: 14 l/(s·m²))
- **Backwash time:** 5 - 15 minutes (optimal: 10 minutes)
- **Max headloss:** 2.0 - 3.5 m (optimal: 2.5-3.0 m)

**Validation Rules:**
- If filtration rate < 6 m/h → Warning: Low efficiency
- If filtration rate > 10 m/h → Warning: May cause breakthrough
- If headloss > 3.5 m → Warning: Backwash required

---

## VII.8 Test Quality Criteria — Tiêu chí chất lượng test

**EN:** All tests must meet strict quality criteria to ensure reliability and maintainability.

**VI:** Tất cả các test phải đáp ứng tiêu chí chất lượng nghiêm ngặt để đảm bảo độ tin cậy và khả năng bảo trì.

### VII.8.1 Deterministic Tests

**Requirements:**
- Same input → Same output (always)
- No random elements in test logic
- No time-dependent behavior (unless testing time functions)
- No external dependencies (use mocks)

**Example:**
```python
def test_flowrate_calculation():
    # Deterministic test
    Q_input = 500  # m³/ngày
    Q_expected = 0.005787  # m³/s
    Q_actual = convert_flowrate(Q_input, "m³/ngày", "m³/s")
    assert abs(Q_actual - Q_expected) < 0.0001
```

---

### VII.8.2 Reproducible Tests

**Requirements:**
- Tests can be run multiple times with same results
- No flaky tests (tests that sometimes pass, sometimes fail)
- Clear test data and setup
- Isolated test environment

---

### VII.8.3 Relevant to Domain

**Requirements:**
- Tests use real-world water treatment scenarios
- Test data based on TCVN/QCVN standards
- Test cases cover actual engineering use cases
- Edge cases are realistic engineering scenarios

---

### VII.8.4 Comprehensive Coverage

**Requirements:**
- **Code Coverage:** ≥ 85% for calculation modules
- **Branch Coverage:** ≥ 80% for decision logic
- **Function Coverage:** 100% for all public functions
- **Edge Case Coverage:** All identified edge cases tested

**Coverage Tools:**
- Python: `pytest-cov`, `coverage.py`
- JavaScript: `jest --coverage`, `nyc`

---

### VII.8.5 Self-Documenting Tests

**Requirements:**
- Clear test names describing what is tested
- Comments explaining complex test logic
- Assertion messages explaining expected behavior
- Test data clearly labeled with units and ranges

**Example:**
```python
def test_module1_headloss_calculation_with_steel_pipe_1000m_length():
    """
    Test headloss calculation for Module 1 with:
    - Steel pipe material
    - 1000m length
    - Standard flowrate (500 m³/ngày)
    Expected: Headloss within TCVN 33-2006 limits
    """
    # Test implementation
    pass
```

---


---
**Previous Chunk:** `07_TESTING_QA_chunk_05`  
**Next Chunk:** `07_TESTING_QA_chunk_07`
