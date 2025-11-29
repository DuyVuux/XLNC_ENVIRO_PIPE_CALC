# Chunk 03: Module Architecture & Data Flow / Kiến trúc Module & Dòng chảy Dữ liệu

**Chunk ID:** `03_ARCHITECTURE_RULES_chunk_03`  
**Section:** III.3 Module Architecture & Data Flow  
**Word Count:** ~550 words  
**Retrieval Keywords:** module architecture, data flow, module chains, sequential chain, standalone module, partial chain, Output to Input  
**Related Chunks:** `03_ARCHITECTURE_RULES_chunk_02`, `03_ARCHITECTURE_RULES_chunk_04`  
**Canonical Summary Reference:** `03_ARCHITECTURE_RULES_summary_section_3`

---

### III.3. Module architecture & data flow / Kiến trúc module & dòng chảy dữ liệu

**III.3.1. Kiến trúc tổng thể module:**

Hệ thống được thiết kế theo mô hình module hóa, trong đó mỗi module là một đơn vị tính toán độc lập nhưng có thể kết nối với các module khác thông qua việc truyền dữ liệu Input-Output tự động (theo I.5).

**Sơ đồ kiến trúc module:**
```
┌─────────────┐
│  Module 1   │ → Tính toán đường ống
│ Đường ống   │
└──────┬──────┘
       │ Output: Q, v, D, Re, ε, H1, Hyc
       ↓
┌─────────────┐
│  Module 2   │ → Giàn phun mưa
│ Phun mưa    │
└──────┬──────┘
       │ Output: Q, C_phun, C_thực, C_ht
       ↓
┌─────────────┐
│  Module 3   │ → Ngăn trộn, phản ứng
│ Trộn phản ứng│
└──────┬──────┘
       │ Output: Q, t, kích thước (L×W×H)
       ↓
┌─────────────┐
│  Module 4   │ → Bể lắng
│ Bể lắng     │
└──────┬──────┘
       │ Output: Q, kích thước (D×R×H), chất lượng nước
       ↓
┌─────────────┐
│  Module 5   │ → Bể lọc
│ Bể lọc      │
└─────────────┘
```

**English (concise):**

Modular architecture where each module (1-5) is an independent computing unit that can connect via Output → Input data flow. Supports sequential chains (1→2→3→4→5) or standalone module calls.

**Hóa phàm:**

Mỗi module là một khối tính toán độc lập, có thể kết nối với nhau qua dòng chảy dữ liệu Output → Input.

---

**III.3.2. Dòng chảy dữ liệu giữa các module (Data Flow):**

**Module 1 → Module 2:**
- **Module 1 cung cấp:** Q (m³/s, m³/h, m³/phút, m³/ngđ), v (m/s), D (m), Re (không thứ nguyên), ε (m)
- **Module 2 sử dụng để tính:** C_phun = Q / A, C_ox, các phản ứng oxy hóa

**Module 2 → Module 3:**
- **Module 2 cung cấp:** Q (m³/s, m³/h), C_phun (m/h), C_thực (mg/l), C_ht (mg/l)
- **Module 3 sử dụng để tính:** V = Q × t, thời gian trộn (t), kích thước ngăn trộn (L × W × H), tốc độ phản ứng (r_Fe, r_H₂S), nồng độ sau phản ứng

**Module 3 → Module 4:**
- **Module 3 cung cấp:** Q (m³/h), t (h, phút), kích thước ngăn trộn (L × W × H, m)
- **Module 4 sử dụng để tính:** Q₁ = α × Q, F, kích thước bể lắng (D × R × H), V, v, t_lắng, η

**Module 4 → Module 5:**
- **Module 4 cung cấp:** Q (m³/h), kích thước bể lắng (D × R × H, m), chất lượng nước sau lắng
- **Module 5 sử dụng để tính:** f₁ = Q / v, D, F₁, v, các chiều cao trong bể lọc, H, q, Q_rửa

**Lưu ý quan trọng:** Mỗi module có thể nhận dữ liệu đầu vào trực tiếp từ người dùng, không nhất thiết phải phụ thuộc vào module trước. Người dùng có thể can thiệp để điều chỉnh dữ liệu truyền giữa các module.

**English (concise):**

Data flow between modules: M1→M2 (Q, v, D, Re, ε), M2→M3 (Q, C_phun, C_thực, C_ht), M3→M4 (Q, t, dimensions), M4→M5 (Q, dimensions, water quality). Each module can also receive direct user input, not necessarily dependent on previous module.

**Hóa phàm:**

Dữ liệu tự động truyền từ module trước sang module sau, nhưng mỗi module cũng có thể nhận input trực tiếp từ người dùng.

---

**III.3.3. Implementation pattern cho module chains / Mẫu triển khai cho chuỗi module:**

**Pattern 1: Sequential Chain / Chuỗi tuần tự (1→2→3→4→5):**
```python
# Ví dụ: Tính toán chuỗi đầy đủ
result_m1 = module_1_calculate(input_m1)  # Module 1: Đường ống
result_m2 = module_2_calculate(
    input_m2_user,  # Input từ người dùng
    **result_m1.outputs  # Output từ Module 1 (Q, v, D, Re, ε)
)
result_m3 = module_3_calculate(
    input_m3_user,
    **result_m2.outputs  # Output từ Module 2 (Q, C_phun, C_thực, C_ht)
)
# ... tiếp tục cho Module 4, 5
```

**Pattern 2: Standalone Module / Module độc lập:**
```python
# Ví dụ: Chỉ tính Module 3 với input từ người dùng
result_m3 = module_3_calculate(input_m3_from_user)  # Không cần Module 1, 2
```

**Pattern 3: Partial Chain / Chuỗi một phần (1→3→4):**
```python
result_m1 = module_1_calculate(input_m1)
# Bỏ qua Module 2 (không cần phun mưa)
result_m3 = module_3_calculate(
    input_m3_user,
    Q=result_m1.outputs['Q']  # Chỉ lấy Q từ Module 1
)
result_m4 = module_4_calculate(
    input_m4_user,
    **result_m3.outputs
)
```

**English (concise):**

Implementation patterns: Sequential chain (1→2→3→4→5), standalone module (direct user input), partial chain (1→3→4, skipping modules). Each module can receive both user input and previous module outputs.

**Hóa phàm:**

Có 3 cách gọi module: theo chuỗi đầy đủ, gọi riêng lẻ, hoặc chuỗi một phần (bỏ qua một số module).

---

**Previous Chunk:** `03_ARCHITECTURE_RULES_chunk_02`  
**Next Chunk:** `03_ARCHITECTURE_RULES_chunk_04` (Backend Rules)








