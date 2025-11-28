# Chunk 05: VII.5 Integration Test Cases, VII.6 Edge Case Handling

**Chunk ID:** `07_TESTING_QA_chunk_05`  
**Section:** VII.5 Integration Test Cases, VII.6 Edge Case Handling  
**Word Count:** ~800  
**Retrieval Keywords:** integration test cases, module chain, full chain, partial chain, edge case handling, mathematical edge cases, engineering edge cases, user input edge cases, API edge cases  
**Related Chunks:** `07_TESTING_QA_chunk_04, 07_TESTING_QA_chunk_06`  
**Canonical Summary Reference:** `07_TESTING_QA_summary_section_5_6`

---

## VII.5 Integration Test Cases — Test case tích hợp

### VII.5.1 Module Chain Test Cases

#### Test Case IC-TC-001: Full Chain (1→2→3→4→5)

**Input:**
```json
{
  "chain": [1, 2, 3, 4, 5],
  "module_1": {
    "Q": 5000,
    "Q_unit": "m³/ngày",
    "t": 25,
    "L": 2000,
    "Hc": 10,
    "material": "steel",
    "beta": 2.5
  },
  "module_2": {
    "C_Fe2": 5,
    "C_H2S": 2,
    "A": 50,
    "eta": 0.85
  },
  "module_3": {
    "k_Fe": 0.5,
    "k_H2S": 1.0,
    "t_mix": 30
  },
  "module_4": {
    "alpha": 1.2,
    "U_o": 0.5,
    "H": 3.5
  },
  "module_5": {
    "v_filter": 8,
    "q_backwash": 15,
    "t_backwash": 10
  }
}
```

**Expected Behavior:**
1. Module 1 calculates successfully
2. Module 1 output (Q, t) passed to Module 2
3. Module 2 calculates successfully
4. Module 2 output (Q, C_thuc) passed to Module 3
5. Module 3 calculates successfully
6. Module 3 output (Q) passed to Module 4
7. Module 4 calculates successfully
8. Module 4 output (Q) passed to Module 5
9. Module 5 calculates successfully
10. All results aggregated and validated

**Validation:**
- ✅ Data flow between modules correct
- ✅ Unit conversions accurate
- ✅ All calculations complete successfully
- ✅ Final results consistent across chain

---

#### Test Case IC-TC-002: Partial Chain (1→3→4)

**Input:**
```json
{
  "chain": [1, 3, 4],
  "module_1": {
    "Q": 500,
    "Q_unit": "m³/ngày",
    "t": 25,
    "L": 1000,
    "Hc": 5,
    "material": "steel"
  },
  "module_3": {
    "Fe2_0": 3,
    "H2S_0": 1,
    "k_Fe": 0.5,
    "k_H2S": 1.0
  },
  "module_4": {
    "alpha": 1.2,
    "U_o": 0.5,
    "H": 3.5
  }
}
```

**Expected Behavior:**
1. Module 1 calculates successfully
2. Module 1 output (Q) passed to Module 3
3. Module 3 requires manual input for C_oxygen (since Module 2 skipped)
4. Module 3 calculates successfully
5. Module 3 output (Q) passed to Module 4
6. Module 4 calculates successfully

**Validation:**
- ✅ System handles missing intermediate modules
- ✅ Prompts for required inputs when module skipped
- ✅ Chain completes successfully

---

## VII.6 Edge Case Handling — Xử lý trường hợp biên

### VII.6.1 Mathematical Edge Cases

**Test Cases:**

1. **Division by Zero:**
   - Q = 0 → Error: Flowrate cannot be zero
   - D = 0 → Error: Diameter cannot be zero
   - A = 0 → Error: Area cannot be zero

2. **Logarithm of Negative Values:**
   - Negative concentration → Error: Concentration cannot be negative
   - Negative temperature → Error: Temperature out of range

3. **Overflow/Underflow:**
   - Very large Q → Check for overflow, use appropriate data types
   - Very small Q → Check for underflow, maintain precision

4. **Invalid pH Ranges:**
   - pH < 0 or pH > 14 → Error: pH out of valid range

5. **Negative Flowrate:**
   - Q < 0 → Error: Flowrate cannot be negative

---

### VII.6.2 Engineering Edge Cases

**Test Cases:**

1. **Pipe Diameters Below Standard:**
   - D < 0.05 m → Warning: Diameter below minimum standard
   - Suggest minimum standard diameter

2. **Turbidity Too High for Filtration:**
   - Turbidity > 1000 NTU → Warning: Pre-treatment required
   - Suggest sedimentation before filtration

3. **Sedimentation Area < Minimum:**
   - F < 1 m² → Warning: Area below minimum
   - Suggest minimum area

4. **Zero Mixing Time:**
   - t_mix = 0 → Error: Mixing time cannot be zero
   - Suggest minimum mixing time

5. **Negative Chemical Dosage:**
   - Dosage < 0 → Error: Dosage cannot be negative

---

### VII.6.3 User Input Edge Cases

**Test Cases:**

1. **Missing Required Fields:**
   - Missing Q → Error: Flowrate is required
   - Missing t → Error: Temperature is required
   - Clear error messages in EN/VI

2. **Wrong Units:**
   - Q in m³/ngày but system expects m³/s → Auto-convert with warning
   - Invalid unit string → Error: Invalid unit

3. **Non-Numeric Values:**
   - Q = "abc" → Error: Flowrate must be numeric
   - t = null → Error: Temperature is required

4. **Out-of-Range Values:**
   - Q > 100000 → Warning: Flowrate exceeds typical range
   - t > 100 → Warning: Temperature exceeds valid range

---

### VII.6.4 API Edge Cases

**Test Cases:**

1. **Invalid JSON:**
   - Malformed JSON → Error: Invalid JSON format
   - Missing brackets → Error: JSON syntax error

2. **Missing Authentication:**
   - No token → Error: Authentication required
   - Invalid token → Error: Invalid authentication

3. **Rate Limit Exceeded:**
   - Too many requests → Error: Rate limit exceeded
   - Retry after X seconds

---


---
**Previous Chunk:** `07_TESTING_QA_chunk_04`  
**Next Chunk:** `07_TESTING_QA_chunk_06`
