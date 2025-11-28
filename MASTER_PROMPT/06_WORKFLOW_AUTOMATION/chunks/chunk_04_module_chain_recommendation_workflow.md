# Chunk 04: Module Chain Recommendation Workflow / Quy trình Đề xuất Chuỗi Module

**Chunk ID:** `06_WORKFLOW_AUTOMATION_chunk_04`  
**Section:** VI.4 Module Chain Recommendation Workflow  
**Word Count:** ~500 words  
**Retrieval Keywords:** module chain recommendation, scale classification, water quality analysis, chain selection, recommendation algorithm, small scale, medium scale, large scale, confidence score, alternatives  
**Related Chunks:** `06_WORKFLOW_AUTOMATION_chunk_03`, `06_WORKFLOW_AUTOMATION_chunk_05`, `05_FUNCTIONAL_REQUIREMENTS_chunk_01`  
**Canonical Summary Reference:** `06_WORKFLOW_AUTOMATION_summary_section_4`

---

## VI.4 Module Chain Recommendation Workflow — Quy trình đề xuất chuỗi module

### VI.4.1 Overview

**EN:** This workflow recommends appropriate module chains based on project scale, water quality, and other constraints.

**VI:** Quy trình này đề xuất chuỗi module phù hợp dựa trên quy mô dự án, chất lượng nước và các ràng buộc khác.

### VI.4.2 Input Parameters

**Required:**
- Project scale (Q in m³/ngày)
- Water quality parameters (if available):
  - Fe²⁺ concentration
  - H₂S concentration
  - Turbidity
  - Suspended solids

**Optional:**
- Budget constraints
- Space constraints
- Treatment level requirement (basic/medium/advanced)
- Technology preference (simple/advanced)

---

### VI.4.3 Recommendation Algorithm

#### Step 1: Scale Classification / Phân loại quy mô

**EN:** Classify project into Small, Medium, or Large scale based on flowrate.

**VI:** Phân loại dự án thành Quy mô nhỏ, Vừa hoặc Lớn dựa trên lưu lượng.

**Classification (from Báo_cáo_tổng_hợp Section 6):**
- **Small:** Q < 100 m³/ngày
- **Medium:** 100 ≤ Q ≤ 1000 m³/ngày
- **Large:** Q > 1000 m³/ngày

---

#### Step 2: Water Quality Analysis / Phân tích chất lượng nước

**EN:** Analyze water quality parameters to determine treatment requirements.

**VI:** Phân tích các thông số chất lượng nước để xác định yêu cầu xử lý.

**Analysis:**
- **High Fe²⁺ or H₂S:** Requires Module 2 (aeration) and Module 3 (reaction)
- **High suspended solids:** Requires Module 4 (sedimentation)
- **High turbidity:** Requires Module 5 (filtration)
- **Good quality:** May skip some modules

---

#### Step 3: Chain Selection / Lựa chọn chuỗi

**EN:** Select appropriate chain based on scale and water quality.

**VI:** Lựa chọn chuỗi phù hợp dựa trên quy mô và chất lượng nước.

**Selection Rules (from Báo_cáo_tổng_hợp Section 6):**

**Small Scale (Q < 100 m³/ngày):**
- **Minimum:** `1 → 5`
- **Recommended:** `1 → 4 → 5` (if suspended solids present)
- **Reason:** Skip aeration and mixing for cost/space savings

**Medium Scale (100-1000 m³/ngày):**
- **Recommended:** `1 → 3 → 4 → 5` (if Fe²⁺/H₂S present)
- **Alternative:** `1 → 2 → 5` (if good water quality, need aeration only)
- **Reason:** Balance between treatment quality and cost

**Large Scale (Q > 1000 m³/ngày):**
- **Recommended:** `1 → 2 → 3 → 4 → 5` (full chain)
- **Reason:** Maximum treatment quality required

**Special Cases:**
- **High Fe²⁺/H₂S:** Always include Module 2 and Module 3
- **High suspended solids:** Always include Module 4
- **High turbidity:** Always include Module 5
- **Space constraints:** Skip Module 2 (aeration tower)
- **Budget constraints:** Use shorter chains

---

#### Step 4: Recommendation Generation / Tạo đề xuất

**EN:** Generate recommendation with explanation and alternatives.

**VI:** Tạo đề xuất kèm giải thích và các phương án thay thế.

**Output Structure:**
```json
{
  "recommended_chain": [1, 3, 4, 5],
  "confidence": 0.85,
  "reasoning": {
    "scale": "Medium (Q = 500 m³/ngày)",
    "water_quality": "High Fe²⁺ (5 mg/l), moderate suspended solids",
    "rationale": "Module 3 needed for Fe²⁺ oxidation, Module 4 for sedimentation, Module 5 for final filtration. Module 2 skipped due to space constraints."
  },
  "alternatives": [
    {
      "chain": [1, 2, 3, 4, 5],
      "pros": ["Better aeration", "Higher treatment efficiency"],
      "cons": ["Requires more space", "Higher cost"],
      "when_to_use": "If space and budget allow"
    },
    {
      "chain": [1, 4, 5],
      "pros": ["Lower cost", "Simpler operation"],
      "cons": ["May not fully oxidize Fe²⁺", "Lower efficiency"],
      "when_to_use": "If Fe²⁺ concentration is low"
    }
  ],
  "warnings": [
    "Module 2 skipped - ensure sufficient dissolved oxygen from other sources",
    "Monitor Fe²⁺ removal efficiency in Module 3"
  ]
}
```

---

**Previous Chunk:** `06_WORKFLOW_AUTOMATION_chunk_03`  
**Next Chunk:** `06_WORKFLOW_AUTOMATION_chunk_05` (Data Flow & Transformation Workflow)

