# HƯỚNG DẪN SỬ DỤNG PROMPT - ĐẢM BẢO AI KHÔNG BỎ SÓT NỘI DUNG

---

## 📋 MỤC LỤC

1. [Cách sử dụng file prompt](#1-cách-sử-dụng-file-prompt)
2. [Cấu trúc prompt theo chuẩn quốc tế](#2-cấu-trúc-prompt-theo-chuẩn-quốc-tế)
3. [Kỹ thuật đảm bảo không bỏ sót](#3-kỹ-thuật-đảm-bảo-không-bỏ-sót)
4. [Ví dụ sử dụng thực tế](#4-ví-dụ-sử-dụng-thực-tế)
5. [Troubleshooting](#5-troubleshooting)

---

## 1. CÁCH SỬ DỤNG FILE PROMPT

### 1.1. Cách load prompt vào AI

**Phương pháp 1: Copy-paste trực tiếp (Khuyến nghị)**

```markdown
Bước 1: Mở file `PROMPT_ĐỌC_TÀI_LIỆU_VÀ_TẠO_FAKE_DATA.md`
Bước 2: Copy toàn bộ nội dung (Ctrl+A, Ctrl+C)
Bước 3: Paste vào chat với AI
Bước 4: Thêm lệnh kích hoạt: "Hãy đọc và làm theo toàn bộ nội dung prompt trên. Bắt đầu từ Bước 1."
```

**Phương pháp 2: Upload file (Nếu AI hỗ trợ)**

```markdown
Bước 1: Upload file `PROMPT_ĐỌC_TÀI_LIỆU_VÀ_TẠO_FAKE_DATA.md`
Bước 2: Yêu cầu: "Đọc toàn bộ file prompt này và làm theo từng bước. Báo cáo tiến độ sau mỗi bước."
```

**Phương pháp 3: Reference trong System Prompt (Cho hệ thống tự động)**

```markdown
Trong system prompt của bạn, thêm:
"Đọc và tuân thủ nghiêm ngặt file: PROMPT_ĐỌC_TÀI_LIỆU_VÀ_TẠO_FAKE_DATA.md
Trước mỗi phản hồi, kiểm tra checklist trong file đó."
```

### 1.2. Lệnh kích hoạt chuẩn

**Lệnh cơ bản:**
```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên. 
Bắt đầu từ Bước 1 (Đọc file điều hướng chính) và báo cáo tiến độ sau mỗi bước.
```

**Lệnh nâng cao (với validation):**
```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên. 
Yêu cầu:
1. Đọc từng bước một, không nhảy cóc
2. Sau mỗi bước, báo cáo: "Đã hoàn thành Bước X"
3. Kiểm tra checklist trước khi chuyển bước tiếp theo
4. Nếu thiếu thông tin, dừng lại và hỏi
```

**Lệnh với Chain of Thought:**
```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.
Với mỗi bước, hãy:
1. Nêu rõ bạn đang làm gì (Step 1: Đang đọc file X...)
2. Tóm tắt nội dung đã đọc (Step 2: File X chứa Y sections...)
3. Liệt kê điểm quan trọng (Step 3: Các điểm quan trọng: A, B, C...)
4. Xác nhận đã hoàn thành (Step 4: Đã hoàn thành Bước X)
```

---

## 2. CẤU TRÚC PROMPT THEO CHUẨN QUỐC TẾ

File prompt của bạn đã tuân thủ cấu trúc chuẩn quốc tế (A-G structure):

### 2.1. Cấu trúc hiện tại

| Phần | Tên | Mô tả | Vị trí trong file |
|------|-----|-------|------------------|
| **A** | Role Setup | Vai trò của AI | Dòng 5-7 |
| **B** | Task Description | Mục tiêu chung | Dòng 11-22 |
| **C** | Input Format | Định dạng đầu vào | Dòng 28-85 (Nhiệm vụ chi tiết) |
| **D** | Output Format | Định dạng đầu ra | Dòng 87-100 (Cấu trúc báo cáo) |
| **E** | Reasoning Instructions | Hướng dẫn suy luận | Dòng 73-84 (Phương pháp đọc) |
| **F** | Constraints & Quality | Ràng buộc & chất lượng | Dòng 17, 580-590 (Lưu ý) |
| **G** | Examples | Ví dụ | Dòng 200-580 (Mẫu dữ liệu) |

### 2.2. Cải thiện cấu trúc (Khuyến nghị thêm)

Thêm các phần sau vào file prompt để đảm bảo không bỏ sót:

**H. Validation Checklist (BẮT BUỘC)**
```markdown
## ✅ VALIDATION CHECKLIST - KIỂM TRA TRƯỚC KHI HOÀN THÀNH

Trước khi kết thúc, bạn PHẢI kiểm tra:

### Checklist đọc tài liệu:
- [ ] Đã đọc file MASTER_PROMPT.md
- [ ] Đã đọc Phần I (Introduction)
- [ ] Đã đọc Phần II (Roles & Behaviors) - QUAN TRỌNG NHẤT
- [ ] Đã đọc Phần IV (Domain Knowledge Base) - BẮT BUỘC
- [ ] Đã đọc tất cả 5 file module trong docs/
- [ ] Đã đọc Báo_cáo_tổng_hợp_Hệ_thống_xử_lý_nước.md
- [ ] Đã báo cáo tất cả sections trong mỗi file
- [ ] Đã liệt kê tất cả công thức phát hiện
- [ ] Đã ghi chú tất cả tiêu chuẩn TCVN/QCVN

### Checklist fake data:
- [ ] Đã tạo fake data cho Module 1 (đường ống)
- [ ] Đã tạo fake data cho Module 2 (giàn phun mưa)
- [ ] Đã tạo fake data cho Module 3 (ngăn trộn phản ứng)
- [ ] Đã tạo fake data cho Module 4 (bể lắng)
- [ ] Đã tạo fake data cho Module 5 (bể lọc)
- [ ] Đã tạo fake data cho ít nhất 3 case (nhỏ, vừa, lớn)
- [ ] Đã validate tất cả giá trị với TCVN 33-2006
- [ ] Đã kiểm tra mối quan hệ giữa các module
- [ ] Đã tạo JSON format đúng cấu trúc
- [ ] Đã thêm validation cho mỗi module

### Checklist output format:
- [ ] Đã tạo báo cáo đọc file theo cấu trúc yêu cầu
- [ ] Đã tạo JSON fake data đầy đủ
- [ ] Đã thêm ví dụ cụ thể cho từng module
- [ ] Đã ghi rõ nguồn công thức và tiêu chuẩn
```

**I. Explicit Constraints (Ràng buộc rõ ràng)**
```markdown
## 🚫 EXPLICIT CONSTRAINTS - RÀNG BUỘC RÕ RÀNG

Bạn KHÔNG ĐƯỢC:
- ❌ Bỏ sót bất kỳ file nào trong danh sách đọc
- ❌ Bỏ sót bất kỳ section nào trong mỗi file
- ❌ Tự bịa đặt công thức hoặc tiêu chuẩn
- ❌ Tạo fake data không tuân thủ TCVN 33-2006
- ❌ Bỏ qua validation checklist
- ❌ Trộn lẫn output format (phải theo thứ tự: Báo cáo → JSON → Ví dụ)
- ❌ Bỏ qua phần "Tổng kết file" cho mỗi file
```

---

## 3. KỸ THUẬT ĐẢM BẢO KHÔNG BỎ SÓT

### 3.1. Kỹ thuật 1: Step-by-Step với Confirmation

**Cách hoạt động:**
- Yêu cầu AI báo cáo sau mỗi bước
- Không cho phép nhảy cóc
- Xác nhận trước khi chuyển bước

**Prompt mẫu:**
```
Hãy đọc prompt trên và làm theo từng bước. 
Với mỗi bước, bạn PHẢI:
1. Nêu rõ: "Bắt đầu Bước X: [Tên bước]"
2. Thực hiện bước đó
3. Báo cáo: "Đã hoàn thành Bước X. Tóm tắt: [1-2 câu]"
4. Chờ xác nhận trước khi chuyển bước tiếp theo

Bắt đầu với Bước 1.
```

### 3.2. Kỹ thuật 2: Checklist Validation

**Cách hoạt động:**
- Tạo checklist chi tiết
- Yêu cầu AI đánh dấu từng mục
- Kiểm tra lại trước khi hoàn thành

**Prompt mẫu:**
```
Sau khi đọc xong, hãy:
1. Liệt kê tất cả các file đã đọc
2. Đối chiếu với checklist trong prompt
3. Báo cáo các mục còn thiếu (nếu có)
4. Chỉ hoàn thành khi TẤT CẢ mục đã được đánh dấu ✓
```

### 3.3. Kỹ thuật 3: Chain of Thought (CoT)

**Cách hoạt động:**
- Yêu cầu AI giải thích quá trình suy nghĩ
- Buộc AI phải xử lý từng phần một cách có ý thức
- Dễ phát hiện phần bị bỏ sót

**Prompt mẫu:**
```
Hãy sử dụng Chain of Thought khi đọc:
1. Nghĩ: "Tôi cần đọc file nào đầu tiên?" → Trả lời: MASTER_PROMPT.md
2. Nghĩ: "File này có bao nhiêu phần?" → Đếm: 8 phần
3. Nghĩ: "Tôi đã đọc hết chưa?" → Kiểm tra: Đã đọc phần I, II, IV...
4. Nghĩ: "Còn thiếu gì?" → Liệt kê: Còn thiếu phần III, V, VI, VII, VIII
5. Nghĩ: "Có cần đọc các phần đó không?" → Xem lại prompt: Có, đọc theo nhu cầu
```

### 3.4. Kỹ thuật 4: Explicit Enumeration (Liệt kê rõ ràng)

**Cách hoạt động:**
- Liệt kê tất cả các mục cần làm
- Đánh số thứ tự rõ ràng
- Yêu cầu AI đánh dấu từng mục

**Ví dụ trong prompt:**
```markdown
## 📋 DANH SÁCH FILE CẦN ĐỌC (BẮT BUỘC)

1. [ ] MASTER_PROMPT/MASTER_PROMPT.md
2. [ ] MASTER_PROMPT/PhầnI_Introduction.md
3. [ ] MASTER_PROMPT/PhầnII_Role&Behavior.md
4. [ ] MASTER_PROMPT/PhầnIV_Domain_Knowledge_Base.md
5. [ ] docs/Báo_cáo_tổng_hợp_Hệ_thống_xử_lý_nước.md
6. [ ] docs/Module1:Tinh_toán_dường_ống.md
7. [ ] docs/Module2:Giàn_phun_mưa.md
8. [ ] docs/Module3:Ngăn_trộn_Phản_ứng.md
9. [ ] docs/Module4:Bể_lắng.md
10. [ ] docs/Module5:Bể_lọc.md

Sau khi đọc xong, đánh dấu [X] cho mỗi file.
```

### 3.5. Kỹ thuật 5: Self-Consistency Check

**Cách hoạt động:**
- Yêu cầu AI tự kiểm tra lại
- So sánh với checklist
- Phát hiện mâu thuẫn hoặc thiếu sót

**Prompt mẫu:**
```
Sau khi hoàn thành, hãy tự kiểm tra:
1. Đọc lại toàn bộ output của bạn
2. Đối chiếu với checklist trong prompt
3. Tìm các phần còn thiếu
4. Bổ sung các phần thiếu
5. Xác nhận: "Đã kiểm tra và đảm bảo không bỏ sót"
```

### 3.6. Kỹ thuật 6: Structured Output với Validation

**Cách hoạt động:**
- Yêu cầu output theo cấu trúc cố định
- Mỗi phần có validation riêng
- Dễ phát hiện phần thiếu

**Ví dụ:**
```json
{
  "reading_progress": {
    "files_read": ["file1.md", "file2.md"],
    "files_missing": ["file3.md"],
    "sections_per_file": {
      "file1.md": 5,
      "file2.md": 3
    },
    "completion_percentage": 66.7
  }
}
```

---

## 4. VÍ DỤ SỬ DỤNG THỰC TẾ

### 4.1. Ví dụ 1: Đọc tài liệu từng bước

**User prompt:**
```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.
Bắt đầu từ Bước 1 và báo cáo tiến độ sau mỗi bước.
```

**AI response (mong đợi):**
```
✅ Bước 1: Đang đọc file MASTER_PROMPT/MASTER_PROMPT.md
   - Đã đọc: 353 dòng
   - Phát hiện: 8 phần chính (I-VIII)
   - Checklist: Đã đánh dấu [X] cho file này
   
✅ Bước 2: Đang đọc Phần I (Introduction)
   - File: MASTER_PROMPT/PhầnI_Introduction.md
   - Đã đọc: 384 dòng
   - Phát hiện: 12 sections (I.1 - I.12)
   - Tóm tắt: [Báo cáo chi tiết]
   
[Tiếp tục...]
```

### 4.2. Ví dụ 2: Tạo fake data với validation

**User prompt:**
```
Hãy tạo fake data cho Module 1 (đường ống) với Q = 500 m³/ngày.
Kiểm tra validation với TCVN 33-2006 trước khi trả về kết quả.
```

**AI response (mong đợi):**
```
1. [JSON với calculation_id, inputs, outputs, validation]
2. [Technical Report - EN+VI]
3. [Hóa phàm - EN+VI]

Validation:
- Vh = 1.15 m/s ≤ 1.2 m/s ✓ (TCVN 33-2006)
- Vd = 2.38 m/s ≤ 2.4 m/s ✓ (TCVN 33-2006)
- Re = 63500 > 4000 → turbulent flow ✓
```

### 4.3. Ví dụ 3: Checklist completion

**User prompt:**
```
Hãy đọc prompt trên và hoàn thành tất cả các mục trong checklist.
Báo cáo các mục đã hoàn thành và còn thiếu.
```

**AI response (mong đợi):**
```
CHECKLIST COMPLETION REPORT:

✅ Đã hoàn thành:
- [X] Đọc MASTER_PROMPT.md
- [X] Đọc Phần I
- [X] Đọc Phần II
- [X] Đọc Phần IV
- [X] Đọc 5 file module
- [X] Tạo fake data cho Module 1-5
- [X] Validation với TCVN 33-2006

❌ Còn thiếu:
- [ ] Đọc Phần III (Architecture Rules)
- [ ] Đọc Phần V (Functional Requirements)
- [ ] Tạo fake data cho case quy mô lớn (> 1000 m³/ngày)

Tiếp tục đọc các phần còn thiếu? [Y/N]
```

---

## 5. TROUBLESHOOTING

### 5.1. Vấn đề: AI bỏ sót một số file

**Nguyên nhân:**
- Prompt quá dài, AI không đọc hết
- Không có checklist rõ ràng
- Không có validation

**Giải pháp:**
1. Chia nhỏ prompt thành nhiều phần
2. Thêm checklist với đánh số rõ ràng
3. Yêu cầu AI báo cáo tiến độ sau mỗi file

**Prompt sửa:**
```
Hãy đọc prompt trên. 
Trước khi bắt đầu, hãy liệt kê TẤT CẢ các file cần đọc (theo danh sách trong prompt).
Sau đó, đọc từng file một và đánh dấu [X] khi hoàn thành.
```

### 5.2. Vấn đề: AI không tuân thủ cấu trúc output

**Nguyên nhân:**
- Cấu trúc output không rõ ràng
- Không có ví dụ cụ thể
- Không có validation

**Giải pháp:**
1. Làm rõ cấu trúc output với template
2. Thêm ví dụ cụ thể
3. Yêu cầu validation trước khi trả về

**Prompt sửa:**
```
Output PHẢI theo cấu trúc:
1. [Báo cáo đọc file - theo template trong prompt]
2. [JSON fake data - theo schema trong prompt]
3. [Ví dụ cụ thể - theo format trong prompt]

Trước khi trả về, kiểm tra:
- [ ] Đã đủ 3 phần trên?
- [ ] Đã theo đúng format?
- [ ] Đã có validation?
```

### 5.3. Vấn đề: AI tự bịa đặt công thức

**Nguyên nhân:**
- Không nhấn mạnh "KHÔNG được tự bịa đặt"
- Không có nguồn tham chiếu rõ ràng
- Không có validation

**Giải pháp:**
1. Thêm ràng buộc rõ ràng: "KHÔNG được tự bịa đặt"
2. Yêu cầu ghi rõ nguồn cho mỗi công thức
3. Kiểm tra nguồn trước khi sử dụng

**Prompt sửa:**
```
⚠️ QUAN TRỌNG: 
- KHÔNG được tự bịa đặt công thức hoặc tiêu chuẩn
- PHẢI ghi rõ nguồn cho mỗi công thức (ví dụ: "Theo IV.2.1, công thức Darcy-Weisbach...")
- Nếu không tìm thấy công thức trong tài liệu, PHẢI dừng lại và hỏi

Trước khi sử dụng công thức, kiểm tra:
- [ ] Công thức này có trong tài liệu không?
- [ ] Đã ghi rõ nguồn chưa?
- [ ] Đã kiểm tra với tiêu chuẩn TCVN chưa?
```

### 5.4. Vấn đề: AI không đọc hết nội dung file

**Nguyên nhân:**
- File quá dài
- Không có hướng dẫn đọc chi tiết
- Không có báo cáo tiến độ

**Giải pháp:**
1. Yêu cầu đọc từng section một
2. Báo cáo sau mỗi section
3. Tổng kết sau khi đọc xong

**Prompt sửa:**
```
Với mỗi file, hãy:
1. Đọc từng section một (không nhảy cóc)
2. Sau mỗi section, báo cáo:
   - Tên section: [Tên]
   - Số dòng đã đọc: [X/Y]
   - Tóm tắt: [1-2 câu]
3. Sau khi đọc xong file, tổng kết:
   - Tổng số sections: [X]
   - Tổng số dòng: [Y]
   - Các điểm quan trọng: [Liệt kê]
```

---

## 6. TEMPLATE PROMPT HOÀN CHỈNH (Copy-paste ready)

```markdown
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.

YÊU CẦU BẮT BUỘC:
1. Đọc từng bước một, không nhảy cóc
2. Sau mỗi bước, báo cáo: "✅ Đã hoàn thành Bước X"
3. Kiểm tra checklist trước khi chuyển bước tiếp theo
4. Nếu thiếu thông tin, dừng lại và hỏi
5. Tuân thủ cấu trúc output: Báo cáo → JSON → Ví dụ
6. Ghi rõ nguồn cho mỗi công thức và tiêu chuẩn
7. Validation tất cả giá trị với TCVN 33-2006

CHECKLIST KIỂM TRA:
- [ ] Đã đọc tất cả file trong danh sách
- [ ] Đã báo cáo tất cả sections
- [ ] Đã tạo fake data cho 5 module
- [ ] Đã validation với TCVN 33-2006
- [ ] Đã theo đúng cấu trúc output
- [ ] Đã ghi rõ nguồn công thức

Bắt đầu với Bước 1 và báo cáo tiến độ sau mỗi bước.
```

---

## 7. KẾT LUẬN

Để đảm bảo AI không bỏ sót nội dung trong file prompt:

✅ **Sử dụng checklist rõ ràng** - Đánh số và đánh dấu từng mục
✅ **Yêu cầu báo cáo tiến độ** - Sau mỗi bước, không nhảy cóc
✅ **Validation tự động** - Kiểm tra trước khi hoàn thành
✅ **Cấu trúc output cố định** - Dễ phát hiện phần thiếu
✅ **Chain of Thought** - Buộc AI suy nghĩ từng bước
✅ **Explicit constraints** - Ràng buộc rõ ràng, không mơ hồ
✅ **Self-consistency check** - Tự kiểm tra lại trước khi hoàn thành

**Lưu ý:** Prompt càng dài, càng cần có checklist và validation rõ ràng.

---

**Kết thúc hướng dẫn**

