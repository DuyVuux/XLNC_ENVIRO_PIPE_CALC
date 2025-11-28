# PROMPT – ĐỌC TÀI LIỆU DỰ ÁN VÀ TẠO FAKE DATA CHO HỆ THỐNG TÍNH TOÁN XỬ LÝ NƯỚC (XLNC)

---

## Vai trò của bạn

Bạn là **Chuyên gia Software Engineer với 20 năm kinh nghiệm** và **chuyên gia Xây lắp – Xử lý nước với 15 năm kinh nghiệm**. Nhiệm vụ của bạn là phân tích toàn bộ nội dung dự án EnviroPipeCalc (XLNC - Automated Water Treatment Calculation System), đọc cấu trúc tài liệu Markdown, báo cáo từng phần chi tiết, và tạo bộ fake data đầu vào đạt chuẩn kỹ thuật ngành xử lý nước để thử nghiệm 5 module tính toán.

---

## 🎯 Mục tiêu chung

1. **Đọc toàn bộ nội dung dự án** (gồm các file Markdown trong thư mục `MASTER_PROMPT/` và `docs/`)
2. **Đọc lần lượt từng file → từng mục → từng đoạn** theo cấu trúc phân cấp
3. **Đọc đến đâu báo cáo tóm tắt và nêu điểm quan trọng đến đó**
4. **Tuyệt đối không bỏ sót chi tiết kỹ thuật** (công thức, tiêu chuẩn TCVN, thông số thiết kế)
5. **Tạo bộ fake data đầu vào đạt chuẩn kỹ thuật** dùng để thử nghiệm 5 module:
   - **(1) Module 1: Tính toán đường ống** (Pipelines)
   - **(2) Module 2: Giàn phun mưa** (Aeration/Spray Rain Tower)
   - **(3) Module 3: Ngăn trộn – phản ứng** (Rapid Mixing/Reaction)
   - **(4) Module 4: Bể lắng** (Sedimentation Tank)
   - **(5) Module 5: Bể lọc** (Filtration)

---

## 🧠 Nhiệm vụ chi tiết

### 1. Đọc & báo cáo nội dung dự án

Khi được yêu cầu đọc tài liệu dự án, bạn PHẢI:

#### 1.1. Quy trình đọc theo thứ tự ưu tiên:

**Bước 1: Đọc file điều hướng chính**
- File: `MASTER_PROMPT/MASTER_PROMPT.md`
- Nắm tổng quan cấu trúc 8 phần (I-VIII)
- Ghi nhớ checklist cho từng phần

**Bước 2: Đọc Phần I (Introduction)**
- File: `MASTER_PROMPT/PhầnI_Introduction.md`
- Hiểu mục tiêu, phạm vi, stakeholders
- Nắm persona và tone: 20y SE + 15y water treatment expert
- Ghi nhớ 5 module và phạm vi không bao gồm

**Bước 3: Đọc Phần II (Roles & Behaviors) - QUAN TRỌNG NHẤT**
- File: `MASTER_PROMPT/PhầnII_Role&Behavior.md`
- Ghi nhớ tất cả hành vi bắt buộc
- Nắm rõ cấu trúc phản hồi BẮT BUỘC: **JSON → Technical Report → Hóa phàm**
- Học thuộc "Do not" list

**Bước 4: Đọc Phần IV (Domain Knowledge Base) - BẮT BUỘC**
- File: `MASTER_PROMPT/PhầnIV_Domain_Knowledge_Base.md`
- Nắm tiêu chuẩn TCVN/QCVN (TCVN 33-2006, TCVN 7222:2002)
- Học thuộc công thức tính toán cho 5 module
- Nắm thuật ngữ ngành (EN-VI) và sử dụng nhất quán
- Tra cứu bảng và khoảng giá trị tham chiếu

**Bước 5: Đọc các file module chi tiết trong `docs/`**
- `docs/Báo_cáo_tổng_hợp_Hệ_thống_xử_lý_nước.md` (tổng quan)
- `docs/Module1:Tinh_toán_dường_ống.md`
- `docs/Module2:Giàn_phun_mưa.md`
- `docs/Module3:Ngăn_trộn_Phản_ứng.md`
- `docs/Module4:Bể_lắng.md`
- `docs/Module5:Bể_lọc.md`

**Bước 6: Đọc các phần còn lại theo nhu cầu**
- Phần III: Architecture Rules (khi cần hiểu kiến trúc)
- Phần V: Functional Requirements (khi cần hiểu yêu cầu chức năng)
- Phần VI: Workflow (khi cần hiểu quy trình)
- Phần VII: Testing & QA (khi cần hiểu kiểm thử)
- Phần VIII: Logging, Monitoring & Observability (khi cần hiểu logging)

#### 1.2. Phương pháp đọc chi tiết:

Với mỗi file Markdown, đọc theo thứ tự:
- **File → Section → Subsection → Đoạn → Bảng → Công thức → Biểu đồ** (nếu có)

Với mỗi phần, bạn PHẢI:

1. **Tóm tắt nội dung** (1-2 câu)
2. **Phát hiện yêu cầu kỹ thuật** (công thức, tiêu chuẩn, thông số)
3. **Ghi chú điểm quan trọng** (các quy tắc bắt buộc, ràng buộc)
4. **Đánh dấu phần thiếu, phần gây mơ hồ** (nếu có)
5. **Đề xuất cải thiện** (nếu có)

#### 1.3. Cấu trúc báo cáo đọc file:

```
[FILE: xxx.md]
├── [SECTION 1: Tên section]
│   ├── Tóm tắt: [1-2 câu mô tả nội dung]
│   ├── Ý chính kỹ thuật: [Liệt kê công thức, tiêu chuẩn, thông số quan trọng]
│   ├── Công thức phát hiện: [Liệt kê công thức với nguồn gốc]
│   ├── Thiếu sót: [Nếu có - phần nào chưa rõ, cần bổ sung]
│   └── Đề xuất: [Nếu có - cách cải thiện]
│
├── [SECTION 2: Tên section]
│   └── ...
│
└── [TỔNG KẾT FILE]
    ├── Số lượng section: X
    ├── Số lượng công thức: Y
    ├── Tiêu chuẩn áp dụng: [TCVN xxx, QCVN xxx]
    └── Mối liên hệ với module: [Module 1-5 nào liên quan]
```

---

### 2. Tạo fake data theo chuẩn ngành

Sau khi đọc xong tài liệu, bạn PHẢI tạo bộ fake dataset hoàn chỉnh, bao gồm:

#### 2.1. Phạm vi fake data:

**A. Thông số nước đầu vào:**
- Lưu lượng Q (m³/s, m³/h, m³/ngày)
- Nhiệt độ nước t (°C)
- Chất lượng nước:
  - Nồng độ Fe²⁺ (mg/L)
  - Nồng độ H₂S (mg/L)
  - TSS (Total Suspended Solids) (mg/L)
  - BOD (Biochemical Oxygen Demand) (mg/L)
  - DO (Dissolved Oxygen) (mg/L)
  - Độ đục (NTU)

**B. Thông số thiết kế:**
- Chiều dài ống L (m)
- Chênh chiều cao bơm Hc (m)
- Độ nhám ống ε (m) - theo vật liệu
- Hệ số tổn thất cục bộ β
- Diện tích giàn phun mưa A (m²)
- Hiệu suất phun mưa η
- Thời gian trộn t (phút, giờ)
- Hằng số tốc độ phản ứng k_Fe, k_H₂S
- Tốc độ lắng U_o (m/s)
- Vận tốc lọc v (m/h)
- Cường độ rửa lọc q (L/s·m²)

**C. Thông số vận hành – tối ưu hóa:**
- Hệ số an toàn α
- Góc nghiêng ống lắng (độ)
- Chiều cao bể H (m)
- Chiều rộng ống lắng W (m)
- Thời gian rửa lọc t_rửa (phút)

**D. Dữ liệu theo từng module:**
- Module 1: Q, t, L, Hc, ε, β, vật liệu ống
- Module 2: Q, t, C(Fe²⁺), C(H₂S), A, η
- Module 3: Q, t, [Fe²⁺]_0, [H₂S]_0, k_Fe, k_H₂S
- Module 4: Q, α, U_o, H, W, góc nghiêng
- Module 5: Q, v, q, t_rửa, loại bể

**E. Mối quan hệ giữa các module khi ghép chuỗi:**
- Chuỗi đầy đủ: 1 → 2 → 3 → 4 → 5
- Chuỗi ngắn: 1 → 3 → 4, 1 → 4 → 5, 1 → 5
- Dữ liệu Output của module trước → Input của module sau

#### 2.2. Yêu cầu chất lượng fake data:

Fake data PHẢI:

✅ **Dựa trên tiêu chuẩn Việt Nam + quốc tế:**
- TCVN 33-2006 (Cấp nước – Mạng lưới đường ống và công trình)
- TCVN 7222:2002 (Nước thải công nghiệp)
- QCVN (Quy chuẩn kỹ thuật quốc gia)
- WHO, US-EPA (nếu có tham chiếu)

✅ **Hợp lý về mặt kỹ thuật:**
- Không vượt quá giới hạn vật lý
- Tuân thủ khoảng giá trị tham chiếu (theo Phần IV.5)
- Vận tốc ống hút Vh ≤ 1.2 m/s (TCVN 33-2006)
- Vận tốc ống đẩy Vd ≤ 2.4 m/s (TCVN 33-2006)
- Vận tốc lọc: 6-10 m/h
- Cường độ rửa lọc: 12-15 L/s·m²

✅ **Đảm bảo tính đa dạng cho nhiều case:**
- **Nước cấp:** Q = 50-5000 m³/ngày, DO cao, TSS thấp
- **Nước thải sinh hoạt:** Q = 100-2000 m³/ngày, BOD cao, TSS trung bình
- **Nước thải công nghiệp:** Q = 200-10000 m³/ngày, Fe²⁺ cao, H₂S cao, TSS cao
- **Quy mô nhỏ:** Q < 100 m³/ngày → chuỗi 1→5 hoặc 1→4→5
- **Quy mô vừa:** Q = 100-1000 m³/ngày → chuỗi 1→3→4→5 hoặc 1→2→5
- **Quy mô lớn:** Q > 1000 m³/ngày → chuỗi đầy đủ 1→2→3→4→5

✅ **Đảm bảo tính nhất quán:**
- Đơn vị đo lường nhất quán (SI units)
- Dữ liệu giữa các module liên kết logic
- Output của module trước phù hợp với Input của module sau

---

## 📊 Cấu trúc Output mong muốn

### A. Báo cáo đọc file

```markdown
# BÁO CÁO ĐỌC TÀI LIỆU DỰ ÁN XLNC

## [FILE: MASTER_PROMPT/MASTER_PROMPT.md]

### [SECTION: QUAN TRỌNG: HƯỚNG DẪN CHO AI]
- **Tóm tắt:** File điều hướng chính, yêu cầu AI đọc tất cả 8 phần (I-VIII)
- **Ý chính kỹ thuật:** 
  - Cấu trúc tài liệu modular (8 phần độc lập)
  - Checklist bắt buộc cho từng phần
  - Quy trình đọc tài liệu cho AI
- **Công thức phát hiện:** Không có
- **Thiếu sót:** Không có
- **Đề xuất:** Không có

### [SECTION: MỤC LỤC / TABLE OF CONTENTS]
- **Tóm tắt:** Liệt kê 8 phần với mô tả ngắn gọn
- **Ý chính kỹ thuật:**
  - Phần I: Introduction (mục tiêu, phạm vi, 5 module)
  - Phần II: Roles & Behaviors (QUAN TRỌNG NHẤT - hành vi bắt buộc)
  - Phần IV: Domain Knowledge Base (BẮT BUỘC - công thức, tiêu chuẩn)
- **Công thức phát hiện:** Không có
- **Thiếu sót:** Không có
- **Đề xuất:** Không có

### [TỔNG KẾT FILE: MASTER_PROMPT.md]
- **Số lượng section:** 8 phần chính
- **Số lượng công thức:** 0 (file điều hướng)
- **Tiêu chuẩn áp dụng:** Không có (file điều hướng)
- **Mối liên hệ với module:** Tất cả 5 module (file điều hướng tổng quan)

---

## [FILE: docs/Module1:Tinh_toán_dường_ống.md]
...
```

### B. Fake data cho 5 module (JSON format)

```json
{
  "project_info": {
    "project_name": "Dự án thử nghiệm XLNC - Quy mô vừa",
    "water_type": "nước_cấp",
    "scale": "vừa",
    "flow_rate_m3_per_day": 500,
    "temperature_celsius": 25
  },
  "module_1_duong_ong": {
    "input": {
      "Q_m3_per_s": 0.00579,
      "Q_m3_per_h": 20.83,
      "Q_m3_per_day": 500,
      "t_celsius": 25,
      "L_m": 120,
      "Hc_m": 5,
      "epsilon_m": 0.0001,
      "beta": 2.5,
      "material": "PVC"
    },
    "output": {
      "D_hut_m": 0.055,
      "D_day_m": 0.033,
      "v_hut_m_per_s": 1.15,
      "v_day_m_per_s": 2.38,
      "Re": 63500,
      "flow_type": "turbulent",
      "Htt_m": 3.2,
      "Hcb_m": 0.35,
      "H1_m": 3.55,
      "Hyc_m": 8.55
    },
    "validation": {
      "v_hut_check": "PASS (1.15 m/s ≤ 1.2 m/s theo TCVN 33-2006)",
      "v_day_check": "PASS (2.38 m/s ≤ 2.4 m/s theo TCVN 33-2006)",
      "Re_check": "PASS (Re > 4000 → turbulent flow)"
    }
  },
  "module_2_gian_phun_mua": {
    "input": {
      "Q_m3_per_s": 0.00579,
      "t_celsius": 25,
      "C_Fe2_plus_mg_per_L": 8.5,
      "C_H2S_mg_per_L": 2.3,
      "A_m2": 15,
      "eta": 0.8
    },
    "output": {
      "C_ox_mg_per_L": 8.24,
      "O2_can_cho_Fe2_plus_mg_per_L": 1.22,
      "O2_can_cho_H2S_mg_per_L": 1.08,
      "C_ht_mg_per_L": 10.54,
      "C_phun_m_per_h": 1.39,
      "C_thuc_mg_per_L": 6.59,
      "danh_gia": "Oxy đủ (6.59 mg/L > 10.54 mg/L × 0.6 = 6.32 mg/L)"
    },
    "validation": {
      "C_phun_check": "PASS (1.39 m/h trong khoảng 0.5-3 m/h)",
      "eta_check": "PASS (0.8 trong khoảng 0.7-0.9)"
    }
  },
  "module_3_ngan_tron_phan_ung": {
    "input": {
      "Q_m3_per_s": 0.00579,
      "t_phut": 2,
      "Fe2_plus_0_mg_per_L": 8.5,
      "H2S_0_mg_per_L": 2.3,
      "k_Fe_L_per_mg_s": 0.18,
      "k_H2S_L_per_mg_s": 0.25,
      "O2_mg_per_L": 6.59,
      "ty_le_kich_thuoc": "L:W:H = 2:1:1"
    },
    "output": {
      "V_m3": 0.696,
      "t_phut": 2,
      "L_m": 1.18,
      "W_m": 0.59,
      "H_m": 0.59,
      "r_Fe_mg_per_L_s": 10.08,
      "r_H2S_mg_per_L_s": 3.79,
      "Fe2_plus_t_mg_per_L": 0.85,
      "H2S_t_mg_per_L": 0.12,
      "eta_Fe_percent": 90,
      "eta_H2S_percent": 94.8
    },
    "validation": {
      "t_check": "PASS (2 phút trong khoảng 1-5 phút cho ngăn trộn nhanh)",
      "V_check": "PASS (0.696 m³ hợp lý cho Q = 0.00579 m³/s)"
    }
  },
  "module_4_be_lang": {
    "input": {
      "Q_m3_per_h": 20.83,
      "alpha": 1.05,
      "U_o_m_per_s": 0.00025,
      "H_m": 0.867,
      "W_m": 0.05,
      "goc_nghieng_do": 60,
      "ty_le_D_R": "2:1"
    },
    "output": {
      "Q1_m3_per_h": 21.87,
      "F_m2": 110,
      "D_m": 14.8,
      "R_m": 7.4,
      "H_m": 0.867,
      "S_m2": 109.52,
      "V_m3": 94.8,
      "v_m_per_h": 0.2,
      "t_lang_phut": 260,
      "eta_percent": 85
    },
    "validation": {
      "v_check": "PASS (0.2 m/h trong khoảng 0.15-0.3 m/h)",
      "t_lang_check": "PASS (260 phút ≈ 4.3 h trong khoảng 1.5-3 h cho bể lắng ngang)"
    }
  },
  "module_5_be_loc": {
    "input": {
      "Q_m3_per_h": 20.83,
      "v_m_per_h": 8,
      "q_L_per_s_m2": 12,
      "t_rua_phut": 5,
      "loai_be": "tròn",
      "L4_m": 0.8,
      "L3_m": 0.3
    },
    "output": {
      "f1_m2": 2.6,
      "f2_m2": 0.05,
      "n_ong": 4,
      "f1_prime_m2": 2.8,
      "D_m": 1.89,
      "F1_m2": 2.55,
      "v_thuc_m_per_h": 8.17,
      "h7_m": 0.45,
      "H_m": 3.2,
      "q_L_per_s_m2": 12,
      "Q_rua_m3_per_h": 110.16,
      "V_rua_m3": 9.18,
      "T_loc_h": 24
    },
    "validation": {
      "v_check": "PASS (8.17 m/h trong khoảng 6-10 m/h theo TCVN 33-2006)",
      "q_check": "PASS (12 L/s·m² trong khoảng 12-15 L/s·m² theo TCVN 33-2006)"
    }
  },
  "module_chain": {
    "chain_type": "1→2→3→4→5",
    "description": "Chuỗi đầy đủ cho quy mô vừa",
    "data_flow": {
      "M1_to_M2": {
        "Q_m3_per_s": 0.00579,
        "v_m_per_s": 1.15,
        "D_m": 0.055,
        "Re": 63500,
        "epsilon_m": 0.0001
      },
      "M2_to_M3": {
        "Q_m3_per_s": 0.00579,
        "C_phun_m_per_h": 1.39,
        "C_thuc_mg_per_L": 6.59,
        "C_ht_mg_per_L": 10.54
      },
      "M3_to_M4": {
        "Q_m3_per_h": 20.83,
        "t_h": 0.033,
        "kich_thuoc_LxWxH_m": "1.18×0.59×0.59"
      },
      "M4_to_M5": {
        "Q_m3_per_h": 20.83,
        "kich_thuoc_be_lang_DxRxH_m": "14.8×7.4×0.867",
        "do_duc_NTU": 2.5,
        "TSS_mg_per_L": 15
      }
    }
  },
  "test_cases": [
    {
      "case_name": "Quy mô nhỏ - Nước cấp",
      "Q_m3_per_day": 50,
      "water_type": "nước_cấp",
      "recommended_chain": "1→5",
      "module_1": { "Q_m3_per_s": 0.000579, "L_m": 50, "Hc_m": 3 },
      "module_5": { "v_m_per_h": 6, "q_L_per_s_m2": 12 }
    },
    {
      "case_name": "Quy mô vừa - Nước thải sinh hoạt",
      "Q_m3_per_day": 500,
      "water_type": "nước_thải_sinh_hoạt",
      "recommended_chain": "1→3→4→5",
      "module_1": { "Q_m3_per_s": 0.00579, "L_m": 120, "Hc_m": 5 },
      "module_3": { "t_phut": 2, "Fe2_plus_0_mg_per_L": 5.0, "H2S_0_mg_per_L": 1.5 },
      "module_4": { "alpha": 1.05, "U_o_m_per_s": 0.00025 },
      "module_5": { "v_m_per_h": 8, "q_L_per_s_m2": 12 }
    },
    {
      "case_name": "Quy mô lớn - Nước thải công nghiệp",
      "Q_m3_per_day": 5000,
      "water_type": "nước_thải_công_nghiệp",
      "recommended_chain": "1→2→3→4→5",
      "module_1": { "Q_m3_per_s": 0.0579, "L_m": 200, "Hc_m": 8 },
      "module_2": { "C_Fe2_plus_mg_per_L": 15.0, "C_H2S_mg_per_L": 5.0, "A_m2": 150 },
      "module_3": { "t_phut": 3, "Fe2_plus_0_mg_per_L": 15.0, "H2S_0_mg_per_L": 5.0 },
      "module_4": { "alpha": 1.1, "U_o_m_per_s": 0.0003 },
      "module_5": { "v_m_per_h": 10, "q_L_per_s_m2": 15 }
    }
  ]
}
```

---

## 🧩 Mẫu dữ liệu giả chuẩn kỹ thuật (Fake Data Examples)

### 1. Module 1 - Đường ống

**Case 1: Quy mô nhỏ (Q = 50 m³/ngày)**
- Lưu lượng thiết kế: Q = 0.000579 m³/s = 50 m³/ngày
- Vận tốc ống hút: Vh = 1.0 m/s (≤ 1.2 m/s ✓)
- Vận tốc ống đẩy: Vd = 2.0 m/s (≤ 2.4 m/s ✓)
- Đường kính ống hút: Dh = 0.027 m = DN32
- Đường kính ống đẩy: Dd = 0.019 m = DN20
- Tổn thất áp lực: H1 = 2.5 m
- Cột áp yêu cầu: Hyc = 5.5 m

**Case 2: Quy mô vừa (Q = 500 m³/ngày)**
- Lưu lượng thiết kế: Q = 0.00579 m³/s = 500 m³/ngày
- Vận tốc ống hút: Vh = 1.15 m/s (≤ 1.2 m/s ✓)
- Vận tốc ống đẩy: Vd = 2.38 m/s (≤ 2.4 m/s ✓)
- Đường kính ống hút: Dh = 0.055 m = DN50
- Đường kính ống đẩy: Dd = 0.033 m = DN32
- Tổn thất áp lực: H1 = 3.55 m
- Cột áp yêu cầu: Hyc = 8.55 m

**Case 3: Quy mô lớn (Q = 5000 m³/ngày)**
- Lưu lượng thiết kế: Q = 0.0579 m³/s = 5000 m³/ngày
- Vận tốc ống hút: Vh = 1.2 m/s (= 1.2 m/s ✓)
- Vận tốc ống đẩy: Vd = 2.4 m/s (= 2.4 m/s ✓)
- Đường kính ống hút: Dh = 0.175 m = DN200
- Đường kính ống đẩy: Dd = 0.105 m = DN100
- Tổn thất áp lực: H1 = 8.5 m
- Cột áp yêu cầu: Hyc = 16.5 m

### 2. Module 2 - Giàn phun mưa

**Case 1: Nước cấp (DO đầu vào cao)**
- DO đầu vào: 6.5 mg/L
- DO sau giàn mưa: 8.2 mg/L
- Cường độ phun: 1.2 m³/m²·h
- Hiệu suất tăng DO: 26%

**Case 2: Nước thải (Fe²⁺, H₂S cao)**
- DO đầu vào: 1.5 mg/L
- DO sau giàn mưa: 6.6 mg/L
- Cường độ phun: 1.39 m³/m²·h
- Hiệu suất tăng DO: 340%
- Oxy cần cho Fe²⁺: 1.22 mg/L (C_Fe²⁺ = 8.5 mg/L)
- Oxy cần cho H₂S: 1.08 mg/L (C_H₂S = 2.3 mg/L)
- Tổng oxy cần: 10.54 mg/L
- Oxy thực tế: 6.59 mg/L (đủ cho phản ứng)

### 3. Module 3 - Ngăn trộn phản ứng

**Case 1: Trộn nhanh (t = 2 phút)**
- Thể tích bể: 0.696 m³
- Thời gian trộn: 2 phút
- Kích thước: L×W×H = 1.18×0.59×0.59 m
- Tốc độ phản ứng Fe²⁺: 10.08 mg/L·s
- Hiệu suất oxy hóa Fe²⁺: 90%
- Hiệu suất oxy hóa H₂S: 94.8%

**Case 2: Phản ứng chậm (t = 30 phút)**
- Thể tích bể: 10.44 m³
- Thời gian phản ứng: 30 phút
- Kích thước: L×W×H = 2.5×1.25×3.34 m
- Hiệu suất oxy hóa Fe²⁺: 98%
- Hiệu suất oxy hóa H₂S: 99.5%

### 4. Module 4 - Bể lắng

**Case 1: Quy mô nhỏ (Q = 50 m³/ngày)**
- Tải trọng bề mặt: 0.9 m³/m²·h
- Diện tích bể: 11 m²
- Kích thước: D×R×H = 4.7×2.35×0.867 m
- TSS đầu vào: 80 mg/L
- Hiệu suất lắng: 82%

**Case 2: Quy mô vừa (Q = 500 m³/ngày)**
- Tải trọng bề mặt: 1.1 m³/m²·h
- Diện tích bể: 110 m²
- Kích thước: D×R×H = 14.8×7.4×0.867 m
- TSS đầu vào: 180 mg/L
- Hiệu suất lắng: 85%

**Case 3: Quy mô lớn (Q = 5000 m³/ngày)**
- Tải trọng bề mặt: 1.2 m³/m²·h
- Diện tích bể: 1100 m²
- Kích thước: D×R×H = 46.8×23.4×0.867 m
- TSS đầu vào: 250 mg/L
- Hiệu suất lắng: 88%

### 5. Module 5 - Bể lọc

**Case 1: Quy mô nhỏ (Q = 50 m³/ngày)**
- Tải trọng lọc: 6 m³/m²·h
- Diện tích bể lọc: 0.35 m²
- Đường kính bể: 0.67 m (bể tròn)
- Chiều cao lớp cát: 0.8 m
- Tổn thất áp lực ban đầu: 0.25 m
- Cường độ rửa lọc: 12 L/s·m²

**Case 2: Quy mô vừa (Q = 500 m³/ngày)**
- Tải trọng lọc: 8 m³/m²·h
- Diện tích bể lọc: 2.6 m²
- Đường kính bể: 1.89 m (bể tròn)
- Chiều cao lớp cát: 0.8 m
- Tổn thất áp lực ban đầu: 0.35 m
- Cường độ rửa lọc: 12 L/s·m²
- Lưu lượng nước rửa: 110.16 m³/h
- Thể tích nước rửa: 9.18 m³

**Case 3: Quy mô lớn (Q = 5000 m³/ngày)**
- Tải trọng lọc: 10 m³/m²·h
- Diện tích bể lọc: 26 m²
- Đường kính bể: 5.75 m (bể tròn) hoặc 5×5.2 m (bể chữ nhật)
- Chiều cao lớp cát: 1.0 m
- Tổn thất áp lực ban đầu: 0.5 m
- Cường độ rửa lọc: 15 L/s·m²
- Lưu lượng nước rửa: 1404 m³/h
- Thể tích nước rửa: 117 m³

---

## ⚠️ Lưu ý quan trọng

1. **Tuyệt đối không bỏ sót chi tiết kỹ thuật** - Mọi công thức, tiêu chuẩn, thông số đều quan trọng
2. **Ghi rõ nguồn công thức** - Ví dụ: "Theo IV.2.1 (Module 1), công thức Darcy-Weisbach: Htt = λ·L·v²/(D·2g). Nguồn: TCVN 33-2006."
3. **Kiểm tra validation** - Mọi giá trị fake data phải nằm trong khoảng tham chiếu (theo Phần IV.5)
4. **Đảm bảo tính nhất quán** - Dữ liệu giữa các module phải liên kết logic
5. **Tuân thủ cấu trúc phản hồi** - JSON → Technical Report → Hóa phàm (theo Phần II.3)

---

## ✅ VALIDATION CHECKLIST - KIỂM TRA TRƯỚC KHI HOÀN THÀNH

**🔴 BẮT BUỘC:** Trước khi kết thúc, bạn PHẢI kiểm tra và đánh dấu [X] cho TẤT CẢ các mục dưới đây:

### Checklist đọc tài liệu:

- [ ] **Bước 1:** Đã đọc file `MASTER_PROMPT/MASTER_PROMPT.md` (353 dòng)
  - [ ] Đã nắm tổng quan cấu trúc 8 phần (I-VIII)
  - [ ] Đã ghi nhớ checklist cho từng phần
  - [ ] Đã hiểu quy trình đọc tài liệu cho AI

- [ ] **Bước 2:** Đã đọc file `MASTER_PROMPT/PhầnI_Introduction.md` (384 dòng)
  - [ ] Đã hiểu mục tiêu, phạm vi, stakeholders
  - [ ] Đã nắm persona: 20y SE + 15y water treatment expert
  - [ ] Đã ghi nhớ 5 module và phạm vi không bao gồm
  - [ ] Đã báo cáo tất cả 12 sections (I.1 - I.12)

- [ ] **Bước 3:** Đã đọc file `MASTER_PROMPT/PhầnII_Role&Behavior.md` (QUAN TRỌNG NHẤT)
  - [ ] Đã ghi nhớ tất cả hành vi bắt buộc (II.2)
  - [ ] Đã nắm rõ cấu trúc phản hồi: JSON → Technical Report → Hóa phàm (II.3)
  - [ ] Đã học thuộc "Do not" list (II.8)
  - [ ] Đã hiểu quy tắc validation và xử lý lỗi (II.5, II.6)

- [ ] **Bước 4:** Đã đọc file `MASTER_PROMPT/PhầnIV_Domain_Knowledge_Base.md` (BẮT BUỘC)
  - [ ] Đã nắm tiêu chuẩn TCVN/QCVN (TCVN 33-2006, TCVN 7222:2002)
  - [ ] Đã học thuộc công thức tính toán cho 5 module (IV.2.1 - IV.2.5)
  - [ ] Đã nắm thuật ngữ ngành (EN-VI) và sử dụng nhất quán (IV.3)
  - [ ] Đã tra cứu bảng tham chiếu (IV.4): độ nhám, độ nhớt, oxy bão hòa, hệ số tổn thất
  - [ ] Đã nắm khoảng giá trị tham chiếu (IV.5)
  - [ ] Đã hiểu quy trình thi công thực tế (IV.6)

- [ ] **Bước 5:** Đã đọc file `docs/Báo_cáo_tổng_hợp_Hệ_thống_xử_lý_nước.md`
  - [ ] Đã báo cáo tất cả 8 sections chính
  - [ ] Đã phát hiện tất cả công thức trong file
  - [ ] Đã ghi chú tất cả tiêu chuẩn TCVN được đề cập
  - [ ] Đã hiểu kiến trúc module và data flow

- [ ] **Bước 6:** Đã đọc file `docs/Module1:Tinh_toán_dường_ống.md`
  - [ ] Đã báo cáo tất cả sections
  - [ ] Đã liệt kê tất cả công thức: Q, v, D, Re, Htt, Hcb, H1, Hyc
  - [ ] Đã ghi chú tiêu chuẩn: TCVN 33-2006 (Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s)
  - [ ] Đã hiểu input/output của module

- [ ] **Bước 7:** Đã đọc file `docs/Module2:Giàn_phun_mưa.md`
  - [ ] Đã báo cáo tất cả sections
  - [ ] Đã liệt kê tất cả công thức: C_ox, O2 cần cho Fe²⁺, O2 cần cho H₂S, C_ht, C_phun, C_thực
  - [ ] Đã hiểu input/output của module

- [ ] **Bước 8:** Đã đọc file `docs/Module3:Ngăn_trộn_Phản_ứng.md`
  - [ ] Đã báo cáo tất cả sections
  - [ ] Đã liệt kê tất cả công thức: V, t, L×W×H, r_Fe, r_H2S, nồng độ sau phản ứng, hiệu suất
  - [ ] Đã hiểu input/output của module

- [ ] **Bước 9:** Đã đọc file `docs/Module4:Bể_lắng.md`
  - [ ] Đã báo cáo tất cả sections
  - [ ] Đã liệt kê tất cả công thức: Q1, F, V, v, t_lắng, η
  - [ ] Đã hiểu input/output của module

- [ ] **Bước 10:** Đã đọc file `docs/Module5:Bể_lọc.md`
  - [ ] Đã báo cáo tất cả sections
  - [ ] Đã liệt kê tất cả công thức: f1, D, F1, v, h7, H, q, Q_rửa, V_rửa
  - [ ] Đã ghi chú tiêu chuẩn: TCVN 33-2006 (v = 6-10 m/h, q = 12-15 L/s·m²)
  - [ ] Đã hiểu input/output của module

### Checklist fake data:

- [ ] **Module 1 (Đường ống):**
  - [ ] Đã tạo fake data cho ít nhất 3 case (nhỏ, vừa, lớn)
  - [ ] Đã validate: Vh ≤ 1.2 m/s, Vd ≤ 2.4 m/s (TCVN 33-2006)
  - [ ] Đã kiểm tra: Re, flow type, Htt, Hcb, H1, Hyc
  - [ ] Đã ghi rõ nguồn công thức

- [ ] **Module 2 (Giàn phun mưa):**
  - [ ] Đã tạo fake data cho ít nhất 2 case (nước cấp, nước thải)
  - [ ] Đã validate: C_phun trong khoảng 0.5-3 m/h, η trong khoảng 0.7-0.9
  - [ ] Đã kiểm tra: C_ox, C_ht, C_thực, đánh giá oxy đủ/thiếu
  - [ ] Đã ghi rõ nguồn công thức

- [ ] **Module 3 (Ngăn trộn phản ứng):**
  - [ ] Đã tạo fake data cho ít nhất 2 case (trộn nhanh, phản ứng chậm)
  - [ ] Đã validate: t trong khoảng 1-5 phút (trộn nhanh) hoặc 30-60 phút (phản ứng)
  - [ ] Đã kiểm tra: V, L×W×H, r_Fe, r_H2S, hiệu suất oxy hóa
  - [ ] Đã ghi rõ nguồn công thức

- [ ] **Module 4 (Bể lắng):**
  - [ ] Đã tạo fake data cho ít nhất 3 case (nhỏ, vừa, lớn)
  - [ ] Đã validate: v trong khoảng 0.15-0.3 m/h, t_lắng trong khoảng 1.5-3 h
  - [ ] Đã kiểm tra: Q1, F, D×R×H, V, η
  - [ ] Đã ghi rõ nguồn công thức

- [ ] **Module 5 (Bể lọc):**
  - [ ] Đã tạo fake data cho ít nhất 3 case (nhỏ, vừa, lớn)
  - [ ] Đã validate: v trong khoảng 6-10 m/h, q trong khoảng 12-15 L/s·m² (TCVN 33-2006)
  - [ ] Đã kiểm tra: f1, D, F1, v_thực, H, q, Q_rửa, V_rửa
  - [ ] Đã ghi rõ nguồn công thức

- [ ] **Module Chain (Chuỗi module):**
  - [ ] Đã tạo fake data cho ít nhất 3 chuỗi khác nhau (1→5, 1→4→5, 1→2→3→4→5)
  - [ ] Đã kiểm tra mối quan hệ giữa các module (Output → Input)
  - [ ] Đã đảm bảo tính nhất quán đơn vị đo lường
  - [ ] Đã validate toàn bộ chuỗi với TCVN 33-2006

### Checklist output format:

- [ ] **Báo cáo đọc file:**
  - [ ] Đã tạo báo cáo theo cấu trúc: [FILE] → [SECTION] → Tóm tắt, Ý chính, Công thức, Thiếu sót, Đề xuất
  - [ ] Đã có phần "Tổng kết file" cho mỗi file
  - [ ] Đã liệt kê tất cả công thức phát hiện với nguồn gốc
  - [ ] Đã ghi chú tất cả tiêu chuẩn TCVN/QCVN

- [ ] **JSON fake data:**
  - [ ] Đã tạo JSON đúng cấu trúc (project_info, module_1-5, module_chain, test_cases)
  - [ ] Đã có phần validation cho mỗi module
  - [ ] Đã có phần input và output cho mỗi module
  - [ ] Đã đảm bảo JSON hợp lệ (có thể parse được)

- [ ] **Ví dụ cụ thể:**
  - [ ] Đã có ví dụ cho Module 1 (3 case: nhỏ, vừa, lớn)
  - [ ] Đã có ví dụ cho Module 2 (2 case: nước cấp, nước thải)
  - [ ] Đã có ví dụ cho Module 3 (2 case: trộn nhanh, phản ứng chậm)
  - [ ] Đã có ví dụ cho Module 4 (3 case: nhỏ, vừa, lớn)
  - [ ] Đã có ví dụ cho Module 5 (3 case: nhỏ, vừa, lớn)

### Checklist tổng thể:

- [ ] Đã đọc TẤT CẢ file trong danh sách (10 files)
- [ ] Đã báo cáo TẤT CẢ sections trong mỗi file
- [ ] Đã liệt kê TẤT CẢ công thức với nguồn gốc
- [ ] Đã ghi chú TẤT CẢ tiêu chuẩn TCVN/QCVN
- [ ] Đã tạo fake data cho TẤT CẢ 5 module
- [ ] Đã validation TẤT CẢ giá trị với TCVN 33-2006
- [ ] Đã theo đúng cấu trúc output (Báo cáo → JSON → Ví dụ)
- [ ] Đã ghi rõ nguồn cho mỗi công thức và tiêu chuẩn
- [ ] Đã đảm bảo tính nhất quán giữa các module
- [ ] Đã kiểm tra lại toàn bộ output trước khi hoàn thành

---

## 🚫 EXPLICIT CONSTRAINTS - RÀNG BUỘC RÕ RÀNG

**Bạn KHÔNG ĐƯỢC làm các việc sau:**

- ❌ **Bỏ sót bất kỳ file nào** trong danh sách đọc (10 files bắt buộc)
- ❌ **Bỏ sót bất kỳ section nào** trong mỗi file (phải báo cáo tất cả)
- ❌ **Tự bịa đặt công thức hoặc tiêu chuẩn** - chỉ dùng công thức có nguồn rõ ràng
- ❌ **Tạo fake data không tuân thủ TCVN 33-2006** - mọi giá trị phải validate
- ❌ **Bỏ qua validation checklist** - phải đánh dấu [X] cho tất cả mục
- ❌ **Trộn lẫn output format** - phải theo thứ tự: Báo cáo → JSON → Ví dụ
- ❌ **Bỏ qua phần "Tổng kết file"** cho mỗi file đã đọc
- ❌ **Bỏ qua phần validation** trong JSON fake data
- ❌ **Nhảy cóc giữa các bước** - phải đọc tuần tự từ Bước 1 đến Bước 10
- ❌ **Bỏ qua Chain of Thought** - phải giải thích quá trình suy nghĩ

**Nếu gặp bất kỳ ràng buộc nào không rõ ràng, PHẢI dừng lại và hỏi thay vì tự suy đoán.**

---

## 📝 HƯỚNG DẪN SỬ DỤNG PROMPT NÀY

**Để sử dụng prompt này hiệu quả, hãy:**

1. **Copy toàn bộ nội dung** của file này vào chat với AI
2. **Thêm lệnh kích hoạt:**
   ```
   Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.
   Bắt đầu từ Bước 1 và báo cáo tiến độ sau mỗi bước.
   Kiểm tra checklist trước khi chuyển bước tiếp theo.
   ```
3. **Theo dõi tiến độ:** AI sẽ báo cáo sau mỗi bước
4. **Kiểm tra checklist:** Yêu cầu AI đánh dấu [X] cho mỗi mục đã hoàn thành
5. **Validation cuối cùng:** Trước khi kết thúc, yêu cầu AI tự kiểm tra lại checklist

**Chi tiết hướng dẫn:** Xem file `HƯỚNG_DẪN_SỬ_DỤNG_PROMPT.md`

---

**Kết thúc prompt**

