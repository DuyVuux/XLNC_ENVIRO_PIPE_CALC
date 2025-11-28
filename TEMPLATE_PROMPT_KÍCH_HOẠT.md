# TEMPLATE PROMPT KÍCH HOẠT - COPY-PASTE READY

---

## 🚀 CÁCH SỬ DỤNG

1. **Mở file `PROMPT_ĐỌC_TÀI_LIỆU_VÀ_TẠO_FAKE_DATA.md`**
2. **Copy toàn bộ nội dung** (Ctrl+A, Ctrl+C)
3. **Paste vào chat với AI**
4. **Copy và paste lệnh kích hoạt bên dưới**

---

## 📋 LỆNH KÍCH HOẠT CƠ BẢN

```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.

YÊU CẦU:
1. Đọc từng bước một, không nhảy cóc
2. Sau mỗi bước, báo cáo: "✅ Đã hoàn thành Bước X"
3. Kiểm tra checklist trước khi chuyển bước tiếp theo
4. Nếu thiếu thông tin, dừng lại và hỏi

Bắt đầu với Bước 1 (Đọc file MASTER_PROMPT/MASTER_PROMPT.md).
```

---

## 📋 LỆNH KÍCH HOẠT NÂNG CAO (Với Chain of Thought)

```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.

YÊU CẦU BẮT BUỘC:
1. Sử dụng Chain of Thought - giải thích quá trình suy nghĩ
2. Đọc từng bước một, không nhảy cóc
3. Sau mỗi bước, báo cáo:
   - "Bắt đầu Bước X: [Tên bước]"
   - "Đang đọc: [File/Section]"
   - "Đã phát hiện: [Số lượng sections/công thức]"
   - "✅ Đã hoàn thành Bước X"
4. Kiểm tra checklist trước khi chuyển bước tiếp theo
5. Nếu thiếu thông tin, dừng lại và hỏi
6. Tuân thủ cấu trúc output: Báo cáo → JSON → Ví dụ
7. Ghi rõ nguồn cho mỗi công thức và tiêu chuẩn
8. Validation tất cả giá trị với TCVN 33-2006

CHECKLIST KIỂM TRA CUỐI CÙNG:
- [ ] Đã đọc tất cả 10 file trong danh sách
- [ ] Đã báo cáo tất cả sections trong mỗi file
- [ ] Đã tạo fake data cho 5 module
- [ ] Đã validation với TCVN 33-2006
- [ ] Đã theo đúng cấu trúc output
- [ ] Đã ghi rõ nguồn công thức

Bắt đầu với Bước 1 và báo cáo tiến độ sau mỗi bước.
```

---

## 📋 LỆNH KÍCH HOẠT VỚI VALIDATION TỰ ĐỘNG

```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.

YÊU CẦU:
1. Đọc từng bước một, không nhảy cóc
2. Sau mỗi bước, báo cáo: "✅ Đã hoàn thành Bước X"
3. Sau mỗi file đã đọc, tự kiểm tra:
   - Đã đọc hết chưa? (đếm số sections)
   - Đã báo cáo tất cả sections chưa?
   - Đã liệt kê tất cả công thức chưa?
4. Trước khi chuyển bước tiếp theo, xác nhận: "Đã kiểm tra và đảm bảo không bỏ sót"
5. Cuối cùng, tự kiểm tra lại toàn bộ checklist trong prompt
6. Báo cáo các mục còn thiếu (nếu có)

Bắt đầu với Bước 1.
```

---

## 📋 LỆNH KÍCH HOẠT CHO TỪNG PHẦN RIÊNG LẺ

### Chỉ đọc tài liệu (không tạo fake data):

```
Hãy đọc và làm theo phần "1. Đọc & báo cáo nội dung dự án" trong prompt trên.

YÊU CẦU:
1. Đọc từng bước một (Bước 1-10)
2. Sau mỗi bước, báo cáo theo cấu trúc trong prompt
3. Kiểm tra checklist đọc tài liệu trước khi hoàn thành

Bắt đầu với Bước 1.
```

### Chỉ tạo fake data (đã đọc tài liệu rồi):

```
Hãy làm theo phần "2. Tạo fake data theo chuẩn ngành" trong prompt trên.

YÊU CẦU:
1. Tạo fake data cho tất cả 5 module
2. Validation với TCVN 33-2006
3. Tạo JSON format đúng cấu trúc
4. Kiểm tra checklist fake data trước khi hoàn thành

Bắt đầu với Module 1.
```

---

## 📋 LỆNH KÍCH HOẠT VỚI BÁO CÁO TIẾN ĐỘ CHI TIẾT

```
Hãy đọc và làm theo toàn bộ nội dung trong prompt trên.

YÊU CẦU BÁO CÁO:
Sau mỗi bước, báo cáo theo format:
```
Bước X: [Tên bước]
├── File đang đọc: [Tên file]
├── Số dòng: [X/Y]
├── Sections phát hiện: [Số lượng]
├── Công thức phát hiện: [Số lượng]
├── Tiêu chuẩn phát hiện: [TCVN xxx]
└── ✅ Đã hoàn thành
```

YÊU CẦU:
1. Đọc từng bước một, không nhảy cóc
2. Báo cáo theo format trên sau mỗi bước
3. Kiểm tra checklist trước khi chuyển bước tiếp theo

Bắt đầu với Bước 1.
```

---

## ⚠️ LƯU Ý

- **Luôn copy toàn bộ nội dung file prompt** trước khi paste lệnh kích hoạt
- **Sử dụng lệnh nâng cao** nếu muốn AI báo cáo chi tiết hơn
- **Kiểm tra checklist** sau khi AI hoàn thành để đảm bảo không bỏ sót
- **Nếu AI bỏ sót**, yêu cầu AI đọc lại phần còn thiếu và bổ sung

---

**Kết thúc template**

