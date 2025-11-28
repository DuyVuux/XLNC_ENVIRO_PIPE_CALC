# Chunk 03: Module Chain Calculation Workflow / Quy trình Tính toán Chuỗi Module

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_03`  
**Section:** VI.3 Module Chain Calculation Workflow  
**Word Count:** ~700 words  
**Retrieval Keywords:** module chain, sequential calculation, chain validation, input preparation, data flow mapping, result aggregation, error handling in chain, Module 1→2, Module 2→3, Module 3→4, Module 4→5  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_02`, `06_WORKFLOW_AUTOMATION_chunk_04`, `06_WORKFLOW_AUTOMATION_chunk_05`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_3`

---

## VI.3 Module Chain Calculation Workflow — Quy trình tính toán chuỗi module

### VI.3.1 Overview

**EN:** This workflow describes the process for calculating a chain of modules sequentially, where output from one module becomes input to the next.

**VI:** Quy trình này mô tả quá trình tính toán một chuỗi module tuần tự, trong đó đầu ra của module này trở thành đầu vào của module tiếp theo.

### VI.3.2 Supported Module Chains

**Valid Chains (from Báo_cáo_tổng_hợp):**
- `1 → 2 → 3 → 4 → 5` (Full chain)
- `1 → 3 → 4` (Skip aeration)
- `1 → 2 → 5` (Skip mixing and sedimentation)
- `1 → 4 → 5` (Skip aeration and mixing)
- `1 → 5` (Simple chain)
- `1 → 2 → 3` (Stop at mixing)

**Note:** Module 1 is always required as it provides base flowrate (Q).

---

### VI.3.3 Workflow Steps

#### Step 1: Chain Validation / Xác thực chuỗi

**EN:** System validates the module chain configuration is valid and logically consistent.

**VI:** Hệ thống xác thực cấu hình chuỗi module là hợp lệ và nhất quán về logic.

**Actions:**
1. Check chain starts with Module 1
2. Validate chain sequence is logical (e.g., no skipping required modules)
3. Check for circular dependencies (should not occur in this system)
4. Validate user has permission to use selected modules
5. Check chain length (1-5 modules)

**Output:**
- Validated chain configuration or error

**Example:**
- Valid: `[1, 2, 3, 4, 5]`
- Invalid: `[2, 3, 4]` → Error: "Chain must start with Module 1"
- Invalid: `[1, 5, 2]` → Error: "Invalid sequence. Module 5 cannot precede Module 2"

---

#### Step 2: Input Preparation / Chuẩn bị đầu vào

**EN:** System prepares inputs for the first module in the chain.

**VI:** Hệ thống chuẩn bị đầu vào cho module đầu tiên trong chuỗi.

**Actions:**
1. Collect user inputs for Module 1
2. Validate Module 1 inputs (as per VI.2.2 Step 1)
3. Prepare normalized input object for Module 1

**Output:**
- Validated and normalized input for Module 1

---

#### Step 3: Sequential Module Calculation / Tính toán module tuần tự

**EN:** System calculates each module in sequence, passing outputs as inputs to the next module.

**VI:** Hệ thống tính toán từng module theo trình tự, truyền đầu ra làm đầu vào cho module tiếp theo.

**Actions:**
For each module in chain (i = 1 to n):

1. **Execute Module Calculation:**
   - Run single module workflow (VI.2.2) for module i
   - Store results in chain context

2. **Extract Output for Next Module:**
   - Identify outputs from module i that are inputs to module i+1
   - Map outputs to inputs according to data flow specification (from Báo_cáo_tổng_hợp Section 3)

3. **Prepare Input for Next Module:**
   - Merge module i outputs with user inputs for module i+1 (user inputs take precedence)
   - Normalize units if needed
   - Validate combined input for module i+1

4. **Handle Missing Data:**
   - If required input is missing, prompt user or use default value (with warning)
   - Log any assumptions made

**Output:**
- Results for each module in chain
- Data flow log showing what was passed between modules

**Data Flow Mapping (from Báo_cáo_tổng_hợp Section 3.1):**

**Module 1 → Module 2:**
- Q (m³/s, m³/h, m³/ngđ) → Q
- v (m/s) → (used for spray intensity calculation)
- D (m) → (used for pipe layout)
- Re → (for flow regime analysis)
- ε (m) → (for pipe roughness reference)

**Module 2 → Module 3:**
- Q (m³/h) → Q
- C_phun (m/h) → (for mixing efficiency)
- C_thực (mg/l) → C_ox (for reaction rate calculation)
- C_ht (mg/l) → (for oxygen requirement validation)

**Module 3 → Module 4:**
- Q (m³/h) → Q (for sedimentation flowrate)
- t (h, min) → (for settling time reference)
- Tank dimensions (L×W×H) → (for layout planning)

**Module 4 → Module 5:**
- Q (m³/h) → Q (for filtration flowrate)
- Tank dimensions (D×R×H) → (for layout planning)
- Water quality parameters → (for filter design)

---

#### Step 4: Chain Result Aggregation / Tổng hợp kết quả chuỗi

**EN:** System aggregates results from all modules in the chain into a unified result object.

**VI:** Hệ thống tổng hợp kết quả từ tất cả các module trong chuỗi thành một đối tượng kết quả thống nhất.

**Actions:**
1. Collect results from all modules in chain
2. Create chain summary:
   - Total flowrate (from Module 1)
   - Total headloss (sum of all headlosses)
   - Overall treatment efficiency
   - Total tank volumes
   - Total footprint area
3. Generate chain-level validation:
   - Check overall system compliance
   - Verify data consistency across modules
   - Flag any inconsistencies
4. Create data flow visualization
5. Generate chain-level "Hóa phàm"

**Output:**
- Aggregated chain result object
- Chain summary report
- Data flow diagram
- Compliance report

**Example Structure:**
```json
{
  "chain": [1, 2, 3, 4, 5],
  "modules": {
    "module_1": {...},
    "module_2": {...},
    "module_3": {...},
    "module_4": {...},
    "module_5": {...}
  },
  "chain_summary": {
    "total_flowrate": {"value": 500, "unit": "m³/ngày"},
    "total_headloss": {"value": 8.5, "unit": "m"},
    "total_volume": {"value": 125, "unit": "m³"},
    "total_area": {"value": 45, "unit": "m²"},
    "overall_efficiency": {"value": 95, "unit": "%"}
  },
  "data_flow": [...],
  "compliance": {...}
}
```

---

#### Step 5: Error Handling in Chain / Xử lý lỗi trong chuỗi

**EN:** System handles errors at any point in the chain gracefully, allowing partial results.

**VI:** Hệ thống xử lý lỗi tại bất kỳ điểm nào trong chuỗi một cách linh hoạt, cho phép kết quả một phần.

**Actions:**
1. **Module Calculation Error:**
   - If module i fails, stop chain execution
   - Return results for modules 1 to i-1
   - Return detailed error for module i
   - Suggest fixes or alternatives

2. **Data Flow Error:**
   - If required data missing from previous module:
     - Check if user can provide it directly
     - If yes, prompt user
     - If no, mark chain as incomplete with warning

3. **Validation Error:**
   - If module i results fail validation:
     - Continue to next module with warning
     - Flag non-compliant results
     - Suggest parameter adjustments

**Output:**
- Partial results (if available)
- Error report with suggestions
- Recovery options

---

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_02`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_04` (Module Chain Recommendation Workflow)

