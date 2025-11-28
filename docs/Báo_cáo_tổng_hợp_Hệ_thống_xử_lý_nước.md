# BÁO CÁO TỔNG HỢP
## HỆ THỐNG TÍNH TOÁN - THIẾT KẾ XỬ LÝ NƯỚC

---

## MỤC LỤC

1. [Giới thiệu chung về dự án](#1-giới-thiệu-chung-về-dự-án)
2. [Mô tả kiến trúc module](#2-mô-tả-kiến-trúc-module)
3. [Mô tả dòng chảy dữ liệu giữa các module](#3-mô-tả-dòng-chảy-dữ-liệu-giữa-các-module)
4. [Tổng hợp nội dung chi tiết của từng module](#4-tổng-hợp-nội-dung-chi-tiết-của-từng-module)
5. [Ứng dụng thực tế & các chuỗi module khả thi](#5-ứng-dụng-thực-tế--các-chuỗi-module-khả-thi)
6. [Giải thích logic lựa chọn module theo từng quy mô dự án](#6-giải-thích-logic-lựa-chọn-module-theo-từng-quy-mô-dự-án)
7. [Kết luận](#7-kết-luận)
8. [Phụ lục](#8-phụ-lục)

---

## 1. GIỚI THIỆU CHUNG VỀ DỰ ÁN

### 1.1. Mục tiêu dự án

Dự án xây dựng hệ thống tính toán tự động cho việc thiết kế hệ thống xử lý nước trong lĩnh vực môi trường. Hệ thống được cấu trúc thành 5 module độc lập, mỗi module xử lý một giai đoạn cụ thể trong quy trình xử lý nước:

- **Module 1 - Tính toán đường ống**: Tính toán các thông số kỹ thuật của hệ thống đường ống, bao gồm lưu lượng, vận tốc, đường kính ống, tổn thất áp lực và cột áp yêu cầu.

- **Module 2 - Giàn phun mưa**: Tính toán các thông số liên quan đến giàn phun mưa, bao gồm lượng oxy hòa tan, cường độ phun mưa và các phản ứng oxy hóa.

- **Module 3 - Ngăn trộn, phản ứng**: Tính toán thể tích ngăn trộn, thời gian trộn, kích thước ngăn trộn và tốc độ phản ứng hóa học.

- **Module 4 - Bể lắng**: Tính toán diện tích, kích thước, thể tích bể lắng và các thông số liên quan đến quá trình lắng.

- **Module 5 - Bể lọc**: Tính toán diện tích lọc, kích thước bể lọc, tổn thất áp lực, cường độ rửa lọc và các hệ thống phụ trợ.

### 1.2. Phạm vi ứng dụng

Hệ thống được thiết kế để hỗ trợ:
- Tính toán và tối ưu hóa thiết kế hệ thống ống dẫn trong các dự án môi trường
- Lựa chọn thiết bị (bơm, ống, phụ kiện) phù hợp với yêu cầu kỹ thuật
- Đảm bảo hiệu quả vận hành và tiết kiệm năng lượng
- Giảm thiểu sai sót trong tính toán thủ công
- Tiết kiệm thời gian cho nhân viên kỹ thuật

### 1.3. Đặc điểm kỹ thuật

- Hệ thống module hóa, cho phép linh hoạt trong việc lựa chọn và kết hợp các module
- Tính toán tự động dựa trên các công thức kỹ thuật đã được kiểm chứng
- Tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006)
- Hỗ trợ nhiều đơn vị đo lường khác nhau
- Giao diện web cho phép người dùng nhập liệu và xem kết quả trực quan

---

## 2. MÔ TẢ KIẾN TRÚC MODULE

### 2.1. Kiến trúc tổng thể

Hệ thống được thiết kế theo mô hình module hóa, trong đó mỗi module là một đơn vị tính toán độc lập nhưng có thể kết nối với các module khác thông qua việc truyền dữ liệu Input-Output.

```
┌─────────────┐
│  Module 1   │ → Tính toán đường ống
│ Đường ống   │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Module 2   │ → Giàn phun mưa
│ Phun mưa    │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Module 3   │ → Ngăn trộn, phản ứng
│ Trộn phản ứng│
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Module 4   │ → Bể lắng
│ Bể lắng     │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  Module 5   │ → Bể lọc
│ Bể lọc      │
└─────────────┘
```

### 2.2. Đặc điểm kiến trúc

**2.2.1. Tính độc lập của module:**
- Mỗi module có thể hoạt động độc lập với dữ liệu đầu vào từ người dùng
- Module có thể được sử dụng riêng lẻ hoặc kết hợp với các module khác
- Không có sự phụ thuộc cứng giữa các module

**2.2.2. Tính kết nối của module:**
- Các module có thể kết nối với nhau thông qua việc truyền dữ liệu Output → Input
- Dữ liệu được truyền tự động giữa các module liên tiếp
- Người dùng có thể can thiệp để điều chỉnh dữ liệu truyền giữa các module

**2.2.3. Tính linh hoạt:**
- Người dùng có thể chọn sử dụng một hoặc nhiều module tùy theo yêu cầu dự án
- Thứ tự sử dụng module có thể thay đổi tùy theo quy trình xử lý cụ thể
- Hệ thống hỗ trợ nhiều chuỗi module khác nhau

---

## 3. MÔ TẢ DÒNG CHẢY DỮ LIỆU GIỮA CÁC MODULE

### 3.1. Quan hệ Input-Output giữa các module

#### 3.1.1. Module 1 → Module 2

**Module 1 cung cấp cho Module 2:**
- **Lưu lượng nước (Q)**: m³/s, m³/h, m³/phút, m³/ngđ
- **Vận tốc dòng chảy (v)**: m/s
- **Đường kính ống (D)**: m
- **Hệ số Reynolds (Re)**: không thứ nguyên
- **Độ nhám ống (ε)**: m

**Module 2 sử dụng để tính:**
- Cường độ phun mưa (C_phun)
- Lượng oxy hòa tan trong nước
- Các phản ứng oxy hóa

#### 3.1.2. Module 2 → Module 3

**Module 2 cung cấp cho Module 3:**
- **Lưu lượng nước (Q)**: m³/s, m³/h
- **Cường độ phun mưa (C_phun)**: m/h
- **Lượng oxy hòa tan thực tế (C_thực)**: mg/l
- **Tổng lượng oxy cần thiết (C_ht)**: mg/l

**Module 3 sử dụng để tính:**
- Thể tích ngăn trộn (V)
- Thời gian trộn (t)
- Kích thước ngăn trộn (L × W × H)
- Tốc độ phản ứng hóa học
- Nồng độ sau phản ứng

#### 3.1.3. Module 3 → Module 4

**Module 3 cung cấp cho Module 4:**
- **Lưu lượng nước (Q)**: m³/h
- **Thời gian trộn (t)**: h, phút
- **Kích thước ngăn trộn**: L × W × H (m)

**Module 4 sử dụng để tính:**
- Công suất nước vào bể lắng (Q₁)
- Diện tích mặt bằng cần thiết (F)
- Kích thước bể lắng (D × R × H)
- Thể tích bể lắng (V)
- Tốc độ lắng bề mặt (v)
- Thời gian lắng (t_lắng)
- Hiệu suất lắng (η)

#### 3.1.4. Module 4 → Module 5

**Module 4 cung cấp cho Module 5:**
- **Lưu lượng nước (Q)**: m³/h
- **Kích thước bể lắng**: D × R × H (m)
- **Chất lượng nước sau lắng**: Độ đục, hàm lượng cặn lơ lửng

**Module 5 sử dụng để tính:**
- Diện tích bể lọc (f₁)
- Đường kính bể lọc (D)
- Diện tích lọc thực tế (F₁)
- Vận tốc lọc thực tế (v)
- Các chiều cao trong bể lọc
- Tổn thất áp lực (H)
- Cường độ rửa lọc (q)
- Lưu lượng nước rửa lọc (Q_rửa)

### 3.2. Sơ đồ dòng chảy dữ liệu

```
NGƯỜI DÙNG
    │
    ↓
┌─────────────────────────────────────────┐
│         MODULE 1: ĐƯỜNG ỐNG             │
│  Input: Q, t, L, Hc, ε, β, vật liệu     │
│  Output: Q, v, D, Re, ε, H1, Hyc        │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│      MODULE 2: GIÀN PHUN MƯA             │
│  Input: Q, v, D, Re, ε (từ M1)          │
│         t, C(Fe²⁺), C(H₂S), A, η        │
│  Output: C_ox, C_phun, C_thực, C_ht     │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│    MODULE 3: NGĂN TRỘN, PHẢN ỨNG         │
│  Input: Q, C_phun, C_thực, C_ht (từ M2) │
│         t, [Fe²⁺]_0, [H₂S]_0, k_Fe, k_H₂S│
│  Output: V, t, L×W×H, nồng độ sau phản ứng│
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│         MODULE 4: BỂ LẮNG                │
│  Input: Q, t, kích thước (từ M3)        │
│         α, U_o, H, W, góc nghiêng       │
│  Output: Q₁, F, D×R×H, V, v, t_lắng, η  │
└──────────────┬──────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────┐
│         MODULE 5: BỂ LỌC                 │
│  Input: Q, kích thước bể lắng (từ M4)  │
│         v, q, t_rửa, loại bể            │
│  Output: f₁, D, F₁, v, các chiều cao,    │
│         H, q, Q_rửa, V_rửa              │
└─────────────────────────────────────────┘
```

### 3.3. Dữ liệu đầu vào từ người dùng

Mỗi module có thể nhận dữ liệu đầu vào trực tiếp từ người dùng, không nhất thiết phải phụ thuộc vào module trước:

- **Module 1**: Q, t, L, Hc, ε, β, vật liệu ống
- **Module 2**: Q, t, C(Fe²⁺), C(H₂S), A, η
- **Module 3**: Q, t, [Fe²⁺]_0, [H₂S]_0, k_Fe, k_H₂S
- **Module 4**: Q, α, U_o, H, W, góc nghiêng
- **Module 5**: Q, v, q, t_rửa, loại bể

---

## 4. TỔNG HỢP NỘI DUNG CHI TIẾT CỦA TỪNG MODULE

### 4.1. Module 1 - Tính toán đường ống

#### 4.1.1. Mục tiêu

Module 1 tập trung vào việc tính toán các thông số liên quan đến hệ thống đường ống, bao gồm lưu lượng, vận tốc dòng chảy, độ nhám của ống, hệ số Reynolds, và các yếu tố khác ảnh hưởng đến lưu lượng và áp suất trong ống.

#### 4.1.2. Các công thức chính

**Lưu lượng nước (Q):**
- Đơn vị: m³/ngđ, m³/h, m³/phút, m³/s
- Chuyển đổi: Q (m³/s) = Q (m³/ngđ) / 86400

**Vận tốc dòng chảy (v):**
$$
V = \frac{Q}{A} = \frac{4Q}{\pi D^2}
$$
- Vận tốc ống hút (Vh): 1.2 m/s (theo TCVN 33-2006)
- Vận tốc ống đẩy (Vd): 2.4 m/s (theo TCVN 33-2006)

**Đường kính ống (D):**
$$
D_h = \sqrt{\frac{4Q}{\pi V_h}}
$$
$$
D_d = \sqrt{\frac{4Q}{\pi V_d}}
$$

**Hệ số Reynolds (Re):**
$$
Re = \frac{V \cdot D}{Vn}
$$
- Re < 2000: Dòng chảy laminar
- 2000 < Re < 4000: Dòng chảy chuyển tiếp
- Re > 4000: Dòng chảy turbulent

**Tổn thất áp lực do ma sát (Htt):**
$$
H_{tt} = \lambda \cdot \frac{L \cdot V^2}{D \cdot 2G}
$$

**Tổn thất cục bộ (Hcb):**
$$
H_{cb} = \beta \cdot \frac{V^2}{2G}
$$

**Tổng tổn thất áp lực (H1):**
$$
H_1 = H_{tt} + H_{cb}
$$

**Cột áp yêu cầu (Hyc):**
$$
H_{yc} = H_1 + H_c
$$

#### 4.1.3. Input

- Lưu lượng nước Q (m³/s hoặc các đơn vị khác)
- Nhiệt độ nước t (°C)
- Chiều dài đoạn ống L (m)
- Chênh chiều cao bơm Hc (m)
- Độ nhám tuyệt đối ε (m) - tra bảng theo vật liệu ống
- Hệ số tổn thất cục bộ β - tra bảng theo loại phụ kiện

#### 4.1.4. Output

- Đường kính ống hút và ống đẩy (đã chọn tiêu chuẩn)
- Vận tốc dòng chảy trong ống
- Hệ số Reynolds và loại dòng chảy
- Độ nhám tương đối
- Hệ số ma sát
- Tổn thất áp lực do ma sát
- Tổn thất cục bộ
- Tổng tổn thất áp lực
- Cột áp yêu cầu của bơm

---

### 4.2. Module 2 - Giàn phun mưa

#### 4.2.1. Mục tiêu

Module 2 thực hiện việc tính toán các thông số liên quan đến giàn phun mưa, một phần quan trọng trong các công trình xử lý nước. Mục tiêu chính là tính toán lưu lượng nước phun, cường độ phun, và lượng oxy hòa tan trong nước sau khi phun.

#### 4.2.2. Các công thức chính

**Oxy bão hòa trong nước theo nhiệt độ (C_ox):**
$$
C_{ox} = \frac{468}{31.6 + t}
$$

**Lượng oxy cần thiết cho phản ứng oxy hóa Fe²⁺:**
$$
O_2 \text{ cần cho Fe}^{2+} = 0.143 \times C(Fe^{2+})
$$

**Lượng oxy cần thiết cho phản ứng oxy hóa H₂S:**
$$
O_2 \text{ cần cho } H_2S = 0.47 \times C(H_2S)
$$

**Tổng lượng oxy cần thiết (C_ht):**
$$
C_{ht} = 0.47 \times C(H_2S) + 0.143 \times C(Fe^{2+}) + C_{ox}
$$

**Cường độ phun mưa:**
$$
C_{phun} = \frac{Q}{A}
$$

**Lượng oxy hòa tan thực tế sau phun mưa:**
$$
C_{thực} = C_{ox} \times \eta
$$

#### 4.2.3. Input

**Từ Module 1:**
- Lưu lượng nước Q (m³/s)
- Vận tốc dòng chảy V (m/s)
- Đường kính ống D (m)
- Hệ số Reynolds Re
- Độ nhám ống ε (m)

**Từ người dùng:**
- Nhiệt độ nước t (°C)
- Nồng độ Fe²⁺ C(Fe²⁺) (mg/l)
- Nồng độ H₂S C(H₂S) (mg/l)
- Diện tích giàn phun mưa A (m²)
- Hiệu suất phun mưa η (thường 0.7 - 0.9)

#### 4.2.4. Output

- Oxy bão hòa C_ox (mg/l)
- Lượng oxy cần cho Fe²⁺ (mg/l)
- Lượng oxy cần cho H₂S (mg/l)
- Tổng lượng oxy cần C_ht (mg/l)
- Cường độ phun mưa C_phun (m/h)
- Lượng oxy hòa tan thực tế C_thực (mg/l)
- Đánh giá: Oxy đủ hay thiếu

---

### 4.3. Module 3 - Ngăn trộn, phản ứng

#### 4.3.1. Mục tiêu

Module 3 thực hiện việc tính toán các thông số liên quan đến quá trình trộn và phản ứng hóa học trong hệ thống xử lý nước. Mục tiêu chính là tính toán thể tích ngăn trộn, thời gian trộn, và các phản ứng hóa học xảy ra trong quá trình xử lý.

#### 4.3.2. Các công thức chính

**Thể tích ngăn trộn (V):**
$$
V = Q \times t
$$

**Thời gian trộn (t):**
$$
t = \frac{V}{Q}
$$

**Kích thước ngăn trộn:**
$$
L = \frac{V}{H \times W}
$$

**Tốc độ phản ứng oxy hóa Fe²⁺:**
$$
r_{Fe} = k_{Fe} \times [Fe^{2+}] \times [O_2]
$$

**Tốc độ phản ứng oxy hóa H₂S:**
$$
r_{H_2S} = k_{H_2S} \times [H_2S] \times [O_2]
$$

**Nồng độ Fe²⁺ sau thời gian t:**
$$
[Fe^{2+}]_t = [Fe^{2+}]_0 \times e^{-k_{Fe} \times [O_2] \times t}
$$

**Nồng độ H₂S sau thời gian t:**
$$
[H_2S]_t = [H_2S]_0 \times e^{-k_{H_2S} \times [O_2] \times t}
$$

**Hiệu suất phản ứng:**
$$
\eta = \frac{[A]_0 - [A]_t}{[A]_0} \times 100\%
$$

#### 4.3.3. Input

**Từ Module 2:**
- Lưu lượng nước Q (m³/s)
- Cường độ phun mưa C_phun (m/h)
- Lượng oxy hòa tan C_thực (mg/l)
- Tổng lượng oxy cần C_ht (mg/l)

**Từ người dùng:**
- Thời gian trộn yêu cầu t (phút hoặc giờ)
- Nồng độ Fe²⁺ ban đầu [Fe²⁺]_0 (mg/l)
- Nồng độ H₂S ban đầu [H₂S]_0 (mg/l)
- Hằng số tốc độ k_Fe (l/mg·s)
- Hằng số tốc độ k_H₂S (l/mg·s)
- Tỷ lệ kích thước (L:W:H)

#### 4.3.4. Output

- Thể tích ngăn trộn V (m³)
- Thời gian trộn t (phút)
- Kích thước: L × W × H (m)
- Tốc độ phản ứng Fe²⁺ (mg/l·s)
- Tốc độ phản ứng H₂S (mg/l·s)
- Nồng độ Fe²⁺ sau phản ứng (mg/l)
- Nồng độ H₂S sau phản ứng (mg/l)
- Hiệu suất oxy hóa Fe²⁺ (%)
- Hiệu suất oxy hóa H₂S (%)

---

### 4.4. Module 4 - Bể lắng

#### 4.4.1. Mục tiêu

Module 4 thực hiện việc tính toán các thông số liên quan đến quá trình lắng trong hệ thống xử lý nước. Mục tiêu của module này là tính toán thể tích bể lắng, kích thước bể lắng và các thông số liên quan đến quá trình lắng.

#### 4.4.2. Các công thức chính

**Công suất nước vào bể lắng (Q₁):**
$$
Q_1 = \alpha \times Q
$$
- α: Hệ số an toàn (thường α = 1.05)

**Diện tích mặt bằng cần thiết của bể lắng (F):**
$$
F = \frac{Q_1}{U_o \times H \times \cos(\alpha) + W \times \cos^2(\alpha)}
$$
- U_o: Tốc độ lắng của hạt (m/s), thường U_o = 0.00025 m/s
- H: Chiều cao khối trụ lắng nghiêng (m), thường H = 0.867 m
- α: Góc nghiêng của ống lắng (độ), thường α = 60°
- W: Chiều rộng ống lắng hình trụ vuông (m), thường W = 0.05 m

**Thể tích bể lắng (V):**
$$
V = S \times H = R \times D \times H
$$

**Tốc độ lắng bề mặt (v):**
$$
v = \frac{Q_1}{S}
$$

**Thời gian lắng (t_lắng):**
$$
t_{\text{lắng}} = \frac{V}{Q_1}
$$

**Hiệu suất lắng:**
$$
\eta = \frac{U_o}{v} \times 100\%
$$

#### 4.4.3. Input

**Từ Module 3:**
- Lưu lượng nước Q (m³/h)
- Thời gian trộn t (h)
- Kích thước ngăn trộn (L × W × H)

**Từ người dùng:**
- Hệ số an toàn α (thường 1.05)
- Tốc độ lắng của hạt U_o (m/s), thường 0.00025 m/s
- Chiều cao khối trụ lắng nghiêng H (m), thường 0.867 m
- Chiều rộng ống lắng W (m), thường 0.05 m
- Góc nghiêng α (độ), thường 60°
- Tỷ lệ kích thước (D:R)

#### 4.4.4. Output

- Công suất nước vào bể lắng Q₁ (m³/h)
- Diện tích mặt bằng cần thiết F (m²)
- Kích thước: D × R × H (m)
- Diện tích mặt bể lắng S (m²)
- Thể tích bể lắng V (m³)
- Tốc độ lắng bề mặt v (m/h)
- Thời gian lắng t_lắng (phút)
- Hiệu suất lắng η (%)

---

### 4.5. Module 5 - Bể lọc

#### 4.5.1. Mục tiêu

Module 5 thực hiện việc tính toán các thông số quan trọng liên quan đến quá trình lọc nước trong hệ thống lọc nhanh trọng lực. Mục tiêu chính là tính toán kích thước bể lọc, diện tích lọc, tốc độ lọc, cường độ rửa lọc và tổn thất áp lực.

#### 4.5.2. Các công thức chính

**Diện tích bể lọc (f₁):**
$$
f_1 = \frac{Q}{v}
$$
- Vận tốc lọc khuyến nghị: v = 6 - 10 m/h

**Diện tích ống thông lưu (f₂):**
$$
f_2 = \frac{\pi \times d^2}{4}
$$

**Tổng diện tích ngăn bể (f₁'):**
$$
f_1' = f_1 + f_2 \times n
$$

**Đường kính bể được tính (D):**
$$
D = \sqrt{\frac{4 \times f_1'}{\pi}}
$$

**Diện tích lọc thực tế (F₁):**
$$
F_1 = f_1 - f_2
$$

**Vận tốc lọc thực tế (v):**
$$
v = \frac{Q}{F_1}
$$

**Chiều cao két rửa (h₇):**
$$
h_7 = \frac{60 \times q \times t}{n \times 100}
$$

**Tổng chiều cao bể lọc (H):**
$$
H = h_1 + h_2 + h_3 + h_4 + h_5 + h_6 + h_7 + h_8
$$

**Cường độ rửa lọc (q):**
$$
q = \frac{Q_{\text{rửa}}}{F_1}
$$
- Cường độ rửa khuyến nghị: q = 12 - 15 l/s·m²

**Lưu lượng nước rửa lọc (Q_rửa):**
$$
Q_{\text{rửa}} = q \times F_1
$$

**Thể tích nước rửa lọc (V_rửa):**
$$
V_{\text{rửa}} = Q_{\text{rửa}} \times t_{\text{rửa}}
$$

#### 4.5.3. Input

**Từ Module 4:**
- Lưu lượng nước Q (m³/h)
- Kích thước bể lắng (D × R × H)
- Chất lượng nước sau lắng (độ đục, hàm lượng cặn)

**Từ người dùng:**
- Vận tốc lọc V (m/h), thường 8 m/h
- Cường độ rửa lọc q (l/s·m²), thường 10 l/s·m²
- Thời gian rửa lọc t_rửa (phút), thường 5 phút
- Chiều dày lớp vật liệu lọc L₄ (m)
- Chiều dày lớp sỏi đỡ L₃ (m)
- Loại bể: Tròn hay chữ nhật

#### 4.5.4. Output

- Diện tích bể lọc f₁ (m²)
- Diện tích ống thông lưu f₂ (m²)
- Số ống thông lưu n (cái)
- Tổng diện tích ngăn bể f₁' (m²)
- Đường kính bể lọc D (m)
- Diện tích lọc thực tế F₁ (m²)
- Vận tốc lọc thực tế v (m/h)
- Các chiều cao trong bể: h₁, h₂, h₃, h₄, h₅, h₆, h₇ (két rửa), h₈ (bảo vệ) (m)
- Tổng chiều cao bể lọc H (m)
- Chiều cao tổng H₁, H₂, H₃ (m)
- Chiều cao hệ thống cấp nước h₇ (cấp), h₈ (cấp) (m)
- Chiều cao hệ thống thu nước h₉ (m)
- Chiều cao xi phông h₁₁, h₁₂ (m)
- Áp lực cấp nước P_cấp (Pa)
- Thể tích bể thu nước V_thu (m³)
- Cường độ rửa lọc q (l/m²·s)
- Lưu lượng nước rửa lọc Q_rửa (m³/h)
- Thể tích nước rửa lọc V_rửa (m³)
- Chu kỳ lọc dự kiến T_lọc (h)

---

## 5. ỨNG DỤNG THỰC TẾ & CÁC CHUỖI MODULE KHẢ THI

### 5.1. Các chuỗi module khả thi

Hệ thống được thiết kế linh hoạt, cho phép người dùng chọn các module phù hợp với yêu cầu dự án. Dưới đây là các chuỗi module khả thi:

#### 5.1.1. Chuỗi đầy đủ: 1 → 2 → 3 → 4 → 5

**Mô tả:** Quy trình xử lý nước hoàn chỉnh từ tính toán đường ống đến bể lọc.

**Ứng dụng:**
- Nhà máy xử lý nước cấp quy mô lớn
- Hệ thống xử lý nước thải công nghiệp
- Dự án xử lý nước có yêu cầu chất lượng cao

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 2: Giàn phun mưa để tăng oxy hòa tan
3. Module 3: Ngăn trộn và phản ứng oxy hóa
4. Module 4: Bể lắng để loại bỏ cặn
5. Module 5: Bể lọc để lọc tinh

#### 5.1.2. Chuỗi ngắn: 1 → 3 → 4

**Mô tả:** Bỏ qua giàn phun mưa, nước đi trực tiếp từ đường ống vào ngăn trộn.

**Ứng dụng:**
- Hệ thống xử lý nước có nguồn nước đã có đủ oxy
- Dự án không cần tăng cường oxy hòa tan
- Hệ thống xử lý nước quy mô vừa

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 3: Ngăn trộn và phản ứng (có thể bổ sung hóa chất)
3. Module 4: Bể lắng để loại bỏ cặn

#### 5.1.3. Chuỗi: 1 → 2 → 5

**Mô tả:** Bỏ qua ngăn trộn và bể lắng, nước đi trực tiếp từ giàn phun mưa vào bể lọc.

**Ứng dụng:**
- Hệ thống xử lý nước có chất lượng nước đầu vào tốt
- Dự án yêu cầu xử lý nhanh, không cần lắng
- Hệ thống lọc trực tiếp sau phun mưa

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 2: Giàn phun mưa để tăng oxy hòa tan
3. Module 5: Bể lọc để lọc trực tiếp

#### 5.1.4. Chuỗi: 1 → 4 → 5

**Mô tả:** Bỏ qua giàn phun mưa và ngăn trộn, nước đi trực tiếp từ đường ống vào bể lắng.

**Ứng dụng:**
- Hệ thống xử lý nước đơn giản
- Dự án chỉ cần lắng và lọc
- Hệ thống xử lý nước quy mô nhỏ

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 4: Bể lắng để loại bỏ cặn
3. Module 5: Bể lọc để lọc tinh

#### 5.1.5. Chuỗi đơn giản: 1 → 5

**Mô tả:** Chỉ sử dụng tính toán đường ống và bể lọc.

**Ứng dụng:**
- Hệ thống xử lý nước rất đơn giản
- Dự án chỉ cần lọc nước
- Hệ thống xử lý nước quy mô nhỏ, chất lượng nước đầu vào tốt

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 5: Bể lọc để lọc nước

#### 5.1.6. Chuỗi: 1 → 2 → 3

**Mô tả:** Dừng lại ở ngăn trộn, không có bể lắng và bể lọc.

**Ứng dụng:**
- Hệ thống xử lý nước chỉ cần phản ứng hóa học
- Dự án xử lý nước thải có yêu cầu phản ứng đặc biệt
- Hệ thống xử lý nước quy mô nhỏ, không cần lắng lọc

**Quy trình:**
1. Module 1: Tính toán đường ống dẫn nước
2. Module 2: Giàn phun mưa để tăng oxy hòa tan
3. Module 3: Ngăn trộn và phản ứng

### 5.2. Bảng tổng hợp các chuỗi module

| Chuỗi Module | Mô tả | Ứng dụng | Quy mô |
|--------------|-------|----------|--------|
| 1→2→3→4→5 | Quy trình đầy đủ | Nhà máy xử lý nước lớn | Lớn |
| 1→3→4 | Bỏ qua phun mưa | Hệ thống có đủ oxy | Vừa - Lớn |
| 1→2→5 | Bỏ qua trộn và lắng | Nước đầu vào tốt | Vừa |
| 1→4→5 | Bỏ qua phun mưa và trộn | Hệ thống đơn giản | Nhỏ - Vừa |
| 1→5 | Chỉ lọc | Nước đầu vào rất tốt | Nhỏ |
| 1→2→3 | Chỉ phản ứng | Xử lý hóa học đặc biệt | Nhỏ - Vừa |

### 5.3. Lưu ý khi chọn chuỗi module

**5.3.1. Chất lượng nước đầu vào:**
- Nước có nhiều Fe²⁺, H₂S: Nên dùng Module 2 (phun mưa) và Module 3 (trộn phản ứng)
- Nước có nhiều cặn lơ lửng: Nên dùng Module 4 (bể lắng)
- Nước có độ đục cao: Nên dùng Module 5 (bể lọc)

**5.3.2. Yêu cầu chất lượng nước đầu ra:**
- Yêu cầu cao: Dùng chuỗi đầy đủ 1→2→3→4→5
- Yêu cầu trung bình: Dùng chuỗi 1→3→4 hoặc 1→4→5
- Yêu cầu thấp: Dùng chuỗi 1→5

**5.3.3. Quy mô dự án:**
- Quy mô lớn: Nên dùng chuỗi đầy đủ
- Quy mô vừa: Có thể bỏ một số module
- Quy mô nhỏ: Dùng chuỗi đơn giản

**5.3.4. Ngân sách:**
- Ngân sách lớn: Dùng chuỗi đầy đủ
- Ngân sách hạn chế: Dùng chuỗi ngắn

---

## 6. GIẢI THÍCH LOGIC LỰA CHỌN MODULE THEO TỪNG QUY MÔ DỰ ÁN

### 6.1. Quy mô nhỏ (< 100 m³/ngày)

#### 6.1.1. Đặc điểm

- Lưu lượng nhỏ, yêu cầu đơn giản
- Ngân sách hạn chế
- Không gian hạn chế
- Vận hành đơn giản

#### 6.1.2. Module khuyến nghị

**Chuỗi tối thiểu: 1 → 5**
- Module 1: Tính toán đường ống (bắt buộc)
- Module 5: Bể lọc (để đảm bảo chất lượng nước)

**Chuỗi khuyến nghị: 1 → 4 → 5**
- Module 1: Tính toán đường ống
- Module 4: Bể lắng (nếu nước có nhiều cặn)
- Module 5: Bể lọc

**Lý do:**
- Không cần Module 2 (phun mưa) vì quy mô nhỏ, có thể bổ sung oxy bằng cách khác
- Không cần Module 3 (trộn phản ứng) vì quy mô nhỏ, phản ứng có thể xảy ra tự nhiên
- Module 4 và 5 đủ để đảm bảo chất lượng nước

#### 6.1.3. Thông số thiết kế

- Lưu lượng: Q < 100 m³/ngày
- Vận tốc lọc: v = 6 - 8 m/h
- Thời gian lắng: t = 1 - 2 h
- Diện tích bể lọc: f₁ < 5 m²

---

### 6.2. Quy mô vừa (100 - 1000 m³/ngày)

#### 6.2.1. Đặc điểm

- Lưu lượng trung bình, yêu cầu chất lượng nước tốt
- Ngân sách vừa phải
- Không gian đủ rộng
- Vận hành có chuyên môn

#### 6.2.2. Module khuyến nghị

**Chuỗi khuyến nghị: 1 → 3 → 4 → 5**
- Module 1: Tính toán đường ống
- Module 3: Ngăn trộn và phản ứng (nếu nước có Fe²⁺, H₂S)
- Module 4: Bể lắng
- Module 5: Bể lọc

**Chuỗi thay thế: 1 → 2 → 5**
- Module 1: Tính toán đường ống
- Module 2: Giàn phun mưa (nếu cần tăng oxy)
- Module 5: Bể lọc (nếu nước đầu vào tốt, không cần lắng)

**Lý do:**
- Có thể bỏ Module 2 nếu nước đã có đủ oxy
- Module 3 cần thiết nếu nước có nhiều Fe²⁺, H₂S
- Module 4 và 5 cần thiết để đảm bảo chất lượng nước

#### 6.2.3. Thông số thiết kế

- Lưu lượng: Q = 100 - 1000 m³/ngày
- Vận tốc lọc: v = 8 - 10 m/h
- Thời gian lắng: t = 1.5 - 2.5 h
- Diện tích bể lọc: f₁ = 5 - 50 m²

---

### 6.3. Quy mô lớn (> 1000 m³/ngày)

#### 6.3.1. Đặc điểm

- Lưu lượng lớn, yêu cầu chất lượng nước cao
- Ngân sách đủ
- Không gian rộng
- Vận hành chuyên nghiệp

#### 6.3.2. Module khuyến nghị

**Chuỗi khuyến nghị: 1 → 2 → 3 → 4 → 5**
- Module 1: Tính toán đường ống
- Module 2: Giàn phun mưa
- Module 3: Ngăn trộn và phản ứng
- Module 4: Bể lắng
- Module 5: Bể lọc

**Lý do:**
- Module 2 cần thiết để tăng oxy hòa tan cho quy mô lớn
- Module 3 cần thiết để đảm bảo phản ứng hóa học hoàn toàn
- Module 4 và 5 cần thiết để đảm bảo chất lượng nước cao
- Tất cả các module đều cần thiết cho quy mô lớn

#### 6.3.3. Thông số thiết kế

- Lưu lượng: Q > 1000 m³/ngày
- Vận tốc lọc: v = 8 - 10 m/h
- Thời gian lắng: t = 2 - 3 h
- Diện tích bể lọc: f₁ > 50 m²

---

### 6.4. Bảng tổng hợp lựa chọn module theo quy mô

| Quy mô | Lưu lượng | Chuỗi Module | Module bắt buộc | Module tùy chọn |
|--------|-----------|--------------|-----------------|-----------------|
| Nhỏ | < 100 m³/ngày | 1→5 hoặc 1→4→5 | 1, 5 | 4 |
| Vừa | 100-1000 m³/ngày | 1→3→4→5 hoặc 1→2→5 | 1, 4, 5 | 2, 3 |
| Lớn | > 1000 m³/ngày | 1→2→3→4→5 | 1, 2, 3, 4, 5 | - |

---

### 6.5. Yếu tố quyết định lựa chọn module

#### 6.5.1. Mức độ xử lý yêu cầu

**Xử lý cơ bản:**
- Module 1 + Module 5
- Áp dụng: Nước đầu vào chất lượng tốt

**Xử lý trung bình:**
- Module 1 + Module 4 + Module 5
- Áp dụng: Nước có một số cặn lơ lửng

**Xử lý nâng cao:**
- Module 1 + Module 2 + Module 3 + Module 4 + Module 5
- Áp dụng: Nước có nhiều Fe²⁺, H₂S, cặn lơ lửng

#### 6.5.2. Công nghệ do chủ đầu tư lựa chọn

**Công nghệ đơn giản:**
- Ưu tiên: Module 1, Module 4, Module 5
- Bỏ qua: Module 2, Module 3

**Công nghệ tiên tiến:**
- Sử dụng: Tất cả các module
- Ưu tiên: Module 2, Module 3 để tăng hiệu quả xử lý

#### 6.5.3. Điều kiện địa lý và không gian

**Không gian hạn chế:**
- Bỏ qua: Module 2 (giàn phun mưa cần không gian lớn)
- Ưu tiên: Module 4, Module 5 (có thể thiết kế nhỏ gọn)

**Không gian rộng:**
- Sử dụng: Tất cả các module
- Ưu tiên: Module 2 để tăng hiệu quả xử lý

---

## 7. KẾT LUẬN

### 7.1. Tổng kết

Hệ thống tính toán - thiết kế xử lý nước được xây dựng dựa trên 5 module độc lập, mỗi module xử lý một giai đoạn cụ thể trong quy trình xử lý nước. Hệ thống có các đặc điểm nổi bật:

**7.1.1. Tính linh hoạt:**
- Người dùng có thể chọn sử dụng một hoặc nhiều module tùy theo yêu cầu dự án
- Thứ tự sử dụng module có thể thay đổi tùy theo quy trình xử lý cụ thể
- Hệ thống hỗ trợ nhiều chuỗi module khác nhau

**7.1.2. Tính chính xác:**
- Tất cả các công thức tính toán đều dựa trên các tiêu chuẩn kỹ thuật đã được kiểm chứng
- Tuân thủ các tiêu chuẩn kỹ thuật Việt Nam (TCVN 33-2006)
- Kết quả tính toán đáng tin cậy và có thể áp dụng trực tiếp vào thực tế

**7.1.3. Tính toàn diện:**
- Hệ thống bao phủ toàn bộ quy trình xử lý nước từ tính toán đường ống đến bể lọc
- Mỗi module có đầy đủ công thức, ví dụ và hướng dẫn sử dụng
- Hỗ trợ nhiều đơn vị đo lường khác nhau

### 7.2. Ứng dụng thực tế

Hệ thống có thể được áp dụng trong các lĩnh vực:

- **Nhà máy xử lý nước cấp:** Tính toán và thiết kế hệ thống xử lý nước cấp cho các khu dân cư, khu công nghiệp
- **Hệ thống xử lý nước thải:** Tính toán và thiết kế hệ thống xử lý nước thải công nghiệp, nước thải sinh hoạt
- **Hệ thống xử lý nước trong các công trình xây dựng:** Tính toán và thiết kế hệ thống xử lý nước cho các công trình xây dựng lớn
- **Nghiên cứu và phát triển:** Hỗ trợ các nghiên cứu về xử lý nước, tối ưu hóa thiết kế hệ thống

### 7.3. Lợi ích

**7.3.1. Đối với kỹ sư:**
- Giảm thiểu sai sót trong tính toán thủ công
- Tiết kiệm thời gian tính toán
- Dễ dàng so sánh các phương án thiết kế khác nhau
- Tăng độ chính xác trong thiết kế

**7.3.2. Đối với công ty:**
- Tăng năng suất làm việc
- Giảm chi phí thiết kế
- Nâng cao chất lượng sản phẩm
- Tăng khả năng cạnh tranh

**7.3.3. Đối với khách hàng:**
- Nhận được thiết kế chính xác và đáng tin cậy
- Tiết kiệm chi phí đầu tư
- Đảm bảo chất lượng hệ thống xử lý nước
- Dễ dàng vận hành và bảo trì

### 7.4. Hướng phát triển

**7.4.1. Mở rộng module:**
- Thêm các module mới như Module 6 - Bể khử trùng, Module 7 - Bể chứa nước sạch
- Phát triển các module chuyên biệt cho từng loại nước thải cụ thể

**7.4.2. Cải thiện giao diện:**
- Xây dựng giao diện web thân thiện, dễ sử dụng
- Tích hợp biểu đồ, sơ đồ trực quan
- Hỗ trợ xuất báo cáo tự động

**7.4.3. Tối ưu hóa tính toán:**
- Tích hợp các thuật toán tối ưu hóa
- Hỗ trợ tính toán đa phương án
- Tự động đề xuất phương án tối ưu

---

## 8. PHỤ LỤC

### 8.1. Bảng tra cứu độ nhám ống

| Vật liệu ống | Độ nhám ε (mm) |
|--------------|----------------|
| Ống thép mới | 0.05 - 0.1 |
| Ống thép cũ | 0.1 - 0.5 |
| Ống gang | 0.25 - 1.0 |
| Ống bê tông | 0.3 - 3.0 |
| Ống nhựa (PVC, HDPE) | 0.0015 - 0.007 |

### 8.2. Bảng tra cứu độ nhớt động học của nước

| Nhiệt độ t (°C) | Độ nhớt Vn (m²/s) |
|-----------------|-------------------|
| 0 | 0.00000179 |
| 10 | 0.00000131 |
| 20 | 0.00000101 |
| 25 | 0.00000089 |
| 30 | 0.00000080 |

### 8.3. Bảng tra cứu oxy bão hòa trong nước

| Nhiệt độ t (°C) | Oxy bão hòa C_ox (mg/l) |
|-----------------|-------------------------|
| 0 | 14.62 |
| 10 | 11.25 |
| 20 | 9.07 |
| 25 | 8.24 |
| 30 | 7.56 |

### 8.4. Bảng tra cứu hệ số tổn thất cục bộ

| Loại phụ kiện | Hệ số β |
|---------------|---------|
| Van cổng mở hoàn toàn | 0.1 - 0.2 |
| Van cầu | 3 - 10 |
| Cút 90° | 0.9 - 1.2 |
| Cút 45° | 0.4 - 0.5 |
| Co thu | 0.1 - 0.5 |
| Co mở | 0.3 - 1.0 |
| Tê thẳng | 0.1 - 0.3 |
| Tê nhánh | 1.0 - 2.0 |

### 8.5. Bảng tra cứu thời gian trộn khuyến nghị

| Loại ngăn trộn | Thời gian trộn |
|----------------|----------------|
| Ngăn trộn nhanh | 10 - 30 giây |
| Ngăn trộn chậm | 20 - 40 phút |
| Ngăn phản ứng | 30 - 60 phút |

### 8.6. Bảng tra cứu thời gian lắng khuyến nghị

| Loại bể lắng | Thời gian lắng |
|--------------|----------------|
| Bể lắng ngang | 1.5 - 3 h |
| Bể lắng đứng | 1 - 2 h |
| Bể lắng nghiêng | 0.5 - 1.5 h |

### 8.7. Bảng tra cứu vận tốc lọc khuyến nghị

| Loại bể lọc | Vận tốc lọc (m/h) |
|-------------|-------------------|
| Bể lọc nhanh trọng lực | 6 - 10 |
| Bể lọc chậm | 0.1 - 0.3 |
| Bể lọc áp lực | 8 - 12 |

### 8.8. Bảng tra cứu cường độ rửa lọc khuyến nghị

| Loại rửa lọc | Cường độ rửa (l/s·m²) |
|--------------|------------------------|
| Rửa nước đơn thuần | 12 - 15 |
| Rửa khí + nước | 8 - 12 |
| Rửa nước tốc độ cao | 10 - 15 |

### 8.9. Danh sách các công thức chính

**Module 1:**
- Vận tốc dòng chảy: V = Q/A
- Đường kính ống: D = √(4Q/πV)
- Hệ số Reynolds: Re = VD/Vn
- Tổn thất ma sát: Htt = λ·L·V²/(D·2G)
- Tổn thất cục bộ: Hcb = β·V²/(2G)
- Cột áp yêu cầu: Hyc = H1 + Hc

**Module 2:**
- Oxy bão hòa: Cox = 468/(31.6 + t)
- Oxy cần cho Fe²⁺: O₂ = 0.143 × C(Fe²⁺)
- Oxy cần cho H₂S: O₂ = 0.47 × C(H₂S)
- Tổng oxy cần: Cht = 0.47×C(H₂S) + 0.143×C(Fe²⁺) + Cox
- Cường độ phun: Cphun = Q/A
- Oxy thực tế: Cthực = Cox × η

**Module 3:**
- Thể tích ngăn trộn: V = Q × t
- Thời gian trộn: t = V/Q
- Kích thước: L = V/(H×W)
- Tốc độ phản ứng Fe²⁺: rFe = kFe × [Fe²⁺] × [O₂]
- Nồng độ sau phản ứng: [Fe²⁺]_t = [Fe²⁺]_0 × e^(-kFe×[O₂]×t)
- Hiệu suất: η = ([A]_0 - [A]_t)/[A]_0 × 100%

**Module 4:**
- Công suất nước vào: Q₁ = α × Q
- Diện tích cần thiết: F = Q₁/(Uo×H×cos(α) + W×cos²(α))
- Thể tích bể: V = R × D × H
- Tốc độ lắng bề mặt: v = Q₁/S
- Thời gian lắng: t_lắng = V/Q₁
- Hiệu suất lắng: η = Uo/v × 100%

**Module 5:**
- Diện tích bể lọc: f₁ = Q/v
- Đường kính bể: D = √(4×f₁'/π)
- Diện tích lọc thực tế: F₁ = f₁ - f₂
- Vận tốc lọc thực tế: v = Q/F₁
- Chiều cao két rửa: h₇ = (60×q×t)/(n×100)
- Tổng chiều cao: H = h₁ + h₂ + h₃ + h₄ + h₅ + h₆ + h₇ + h₈
- Cường độ rửa: q = Q_rửa/F₁
- Lưu lượng rửa: Q_rửa = q × F₁

### 8.10. Danh sách các đơn vị đo lường

**Lưu lượng:**
- m³/ngày (m³/ngđ)
- m³/giờ (m³/h)
- m³/phút (m³/phút)
- m³/giây (m³/s)

**Chiều dài:**
- mét (m)
- milimét (mm)

**Vận tốc:**
- mét/giây (m/s)
- mét/giờ (m/h)

**Áp lực:**
- mét cột nước (m)
- Pascal (Pa)
- kilopascal (kPa)

**Nồng độ:**
- miligam/lít (mg/l)
- mol/lít (mol/l)

**Thời gian:**
- giây (s)
- phút (phút)
- giờ (h)
- ngày (ngày)

---

**Hết báo cáo**


