# Chunk 06: Cross-Module Rules & Edge Cases / Quy tắc Xuyên Module & Trường hợp Đặc biệt

**Chunk ID:** `05_FUNCTIONAL_REQUIREMENTS_chunk_06`  
**Section:** V.4 Cross-Module Rules, V.5 Edge Cases  
**Word Count:** ~700 words  
**Retrieval Keywords:** cross-module rules, unit consistency, error handling, safety margins, standards compliance, data flow validation, formula citation, edge cases, extreme flowrates, temperature extremes, missing inputs  
**Related Chunks:** `05_FUNCTIONAL_REQUIREMENTS_chunk_05`, `05_FUNCTIONAL_REQUIREMENTS_chunk_07`, `04_DOMAIN_KNOWLEDGE_BASE_chunk_08`  
**Canonical Summary Reference:** `05_FUNCTIONAL_REQUIREMENTS_summary_section_4_5`

---

## V.4 Cross-Module Rules — Quy tắc xuyên module

### CM-01: Unit Consistency / Nhất quán đơn vị

**EN:** All results must include units and unit conversions must be explicit. When data flows between modules, the system must automatically convert units to match receiving module requirements.

**VI:** Tất cả kết quả phải có đơn vị đầy đủ và chuyển đổi đơn vị phải minh bạch. Khi dữ liệu truyền giữa các module, hệ thống phải tự động chuyển đổi đơn vị để phù hợp với yêu cầu module nhận.

**Implementation:**
- Module 1 outputs Q in m³/s, but Module 2 may need m³/h → automatic conversion
- All intermediate calculations must preserve unit information
- Final outputs must display in user-selected units with conversion factors shown

---

### CM-02: Error Handling / Xử lý lỗi

**EN:** If a value is out of realistic range → return structured error with explanation + suggestion. System must not proceed with invalid data.

**VI:** Nếu giá trị bất thường → trả lỗi có cấu trúc kèm giải thích + gợi ý thay thế. Hệ thống không được tiếp tục với dữ liệu không hợp lệ.

**Error Structure:**
```json
{
  "error": true,
  "parameter": "V_d",
  "value": 2.45,
  "unit": "m/s",
  "limit": 2.4,
  "standard": "TCVN 33-2006",
  "message": "Discharge velocity exceeds TCVN limit",
  "suggestion": "Increase pipe diameter or reduce flowrate",
  "confidence": 0.2
}
```

---

### CM-03: Safety Margins / Hệ số an toàn

**EN:** Apply standard design safety factors (1.1–1.3 depending on module) unless user specifies otherwise. Always document safety factor usage.

**VI:** Dùng hệ số an toàn tiêu chuẩn 1.1–1.3 tùy module trừ khi người dùng chỉ định khác. Luôn ghi chép việc sử dụng hệ số an toàn.

**Safety Factors:**
- Module 4 (Sedimentation): α = 1.05 (default)
- Module 1 (Pipes): Consider 1.1-1.2 for pump selection
- User can override with explicit input

---

### CM-04: Standards Compliance / Tuân thủ tiêu chuẩn

**EN:** All calculations must use TCVN/QCVN references where applicable. System must flag non-compliance and recommend human review.

**VI:** Mọi tính toán phải tuân theo TCVN/QCVN khi áp dụng. Hệ thống phải đánh dấu không tuân thủ và đề xuất kiểm duyệt người.

**Compliance Checks:**
- V_h ≤ 1.2 m/s (TCVN 33-2006)
- V_d ≤ 2.4 m/s (TCVN 33-2006)
- v_filter = 6-10 m/h (TCVN 33-2006)
- q_backwash = 12-15 l/s·m² (TCVN 33-2006)
- SLR within ranges (TCVN 7222:2002)

---

### CM-05: Data Flow Validation / Kiểm tra dòng chảy dữ liệu

**EN:** When data flows from Module N to Module N+1, system must validate data consistency, unit compatibility, and value ranges before proceeding.

**VI:** Khi dữ liệu truyền từ Module N sang Module N+1, hệ thống phải kiểm tra tính nhất quán dữ liệu, tương thích đơn vị và khoảng giá trị trước khi tiếp tục.

**Validation Steps:**
1. Check required parameters are present
2. Verify unit compatibility (convert if needed)
3. Validate value ranges against receiving module constraints
4. Flag any inconsistencies for user review

---

### CM-06: Formula Source Citation / Trích dẫn nguồn công thức

**EN:** Every calculation step must cite formula source (TCVN standard, engineering handbook, equation name). System must never invent formulas.

**VI:** Mỗi bước tính toán phải trích dẫn nguồn công thức (tiêu chuẩn TCVN, sổ tay kỹ thuật, tên phương trình). Hệ thống không được tự tạo công thức.

**Citation Format:**
- "Darcy-Weisbach equation, TCVN 33-2006"
- "Colebrook-White equation, IV.2.1"
- "Oxygen saturation formula, IV.2.2"

---

## V.5 Edge Cases — Trường hợp đặc biệt

### EC-01: Extremely Low Flowrates

**Scenario:** Q < 10 m³/day, Re < 2000 (laminar flow)

**Handling:**
- Use laminar flow formula: λ = 64/Re
- Warn user about potential sedimentation issues
- Recommend minimum flowrate for practical operation
- Flag for human review if Q < 5 m³/day

---

### EC-02: Very High Flowrates

**Scenario:** Pipe diameter > DN1000, Q > 10,000 m³/day

**Handling:**
- Calculate normally but flag for cost review
- Warn about installation challenges
- Suggest multiple parallel lines if diameter exceeds practical limits
- Recommend expert consultation

---

### EC-03: Temperature Extremes

**Scenario:** Temperature < 10°C or > 40°C

**Handling:**
- For < 10°C: Higher oxygen saturation, but may affect reaction rates
- For > 40°C: Lower oxygen saturation, may require cooling
- Flag and request confirmation
- Adjust viscosity and oxygen calculations accordingly

---

### EC-04: Unusually High/Low Coagulant Doses

**Scenario:** Coagulant dose outside typical range (e.g., > 100 mg/l or < 5 mg/l)

**Handling:**
- Flag as unusual
- Request confirmation
- Suggest alternative treatment if dose is impractical
- Recommend jar testing for optimization

---

### EC-05: Sedimentation Tanks with Extreme Aspect Ratios

**Scenario:** Length:Width ratio > 5:1 or < 1:1

**Handling:**
- Flag as non-standard design
- Warn about potential flow distribution issues
- Suggest optimal ratio (2:1 to 4:1)
- Recommend CFD analysis for extreme cases

---

### EC-06: Filter Media Mismatch

**Scenario:** Selected filtration rate incompatible with media type

**Handling:**
- Check media type against rate:
  - Sand: 6-10 m/h
  - Anthracite: 8-12 m/h
  - Dual media: 10-15 m/h
- Flag mismatch
- Suggest appropriate media or adjust rate

---

### EC-07: Missing Critical Inputs

**Scenario:** Required input not provided (e.g., Q missing, temperature missing)

**Handling:**
- Stop calculation
- Return structured error (CM-02)
- List all missing required inputs
- Suggest default values with impact assessment
- Request user confirmation before using defaults

---

### EC-08: Module Chain Dependencies

**Scenario:** User selects Module 3 without Module 2, but Module 3 needs C_thực from Module 2

**Handling:**
- Detect dependency violation
- Warn user about missing data
- Offer to:
  - Add required module to chain
  - Allow manual input of missing parameter
  - Use default value with warning

---

**Previous Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_05`  
**Next Chunk:** `05_FUNCTIONAL_REQUIREMENTS_chunk_07` (Module IO Summary & Non-Functional Requirements)

