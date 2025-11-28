# Báo cáo chi tiết: Module 2 - Giàn phun mưa

## 1. Mục tiêu của Module 2:
Module 2 trong hệ thống tính toán tự động này sẽ thực hiện việc **tính toán các thông số liên quan đến giàn phun mưa**, một phần quan trọng trong các công trình xử lý nước hoặc các hệ thống cấp thoát nước. Mục tiêu chính của module này là:
- Tính toán **lưu lượng nước phun**, **cường độ phun**, và **lượng oxy hòa tan** trong nước sau khi phun.
- **Đảm bảo hiệu quả phun mưa**, cung cấp đủ lượng nước cần thiết trong các hệ thống xử lý nước, bể lọc, hoặc các ứng dụng khác có liên quan.

## 2. Các thông số đầu vào (Input) từ Module 1:
Để Module 2 có thể thực hiện các tính toán chính xác, **Module 1** cần cung cấp một số thông số quan trọng về hệ thống nước, bao gồm:

- **Lưu lượng nước (Q):**
  - Lưu lượng nước là yếu tố quan trọng trong việc xác định số lượng nước cần phun qua giàn phun mưa.
  - Module 1 tính toán lưu lượng nước \( Q \) theo các đơn vị khác nhau (m³/ngđ, m³/h, m³/phút, m³/s). Các giá trị này cần được chuyển giao vào Module 2 để tính toán lưu lượng cần thiết cho giàn phun mưa.

- **Vận tốc dòng chảy (v):**
  - Vận tốc dòng chảy được tính từ lưu lượng và diện tích mặt cắt của ống (được cung cấp từ Module 1).
  - Vận tốc này rất quan trọng để tính toán **cường độ phun mưa**, cũng như để xác định hiệu quả phân tán nước trong giàn phun.

- **Độ nhám ống và hệ số Reynolds (Re):**
  - Các thông số về **độ nhám ống** và **hệ số Reynolds** (tính từ Module 1) ảnh hưởng đến các tính toán liên quan đến sự lưu thông của nước trong hệ thống ống, đặc biệt là khi phun qua các vòi phun.

## 3. Các thông số tính toán trong Module 2 (Output):
Module 2 sẽ thực hiện tính toán và đưa ra các kết quả sau:

- **Lượng oxy hòa tan trong nước (C):**
  - Sau khi phun, một trong những yếu tố quan trọng cần tính toán là lượng **oxy hòa tan** trong nước. Lượng oxy này sẽ ảnh hưởng đến hiệu quả xử lý nước trong các bể lọc và bể lắng.
  - Công thức tính lượng oxy hòa tan \( C \) sẽ phụ thuộc vào **nhiệt độ** và **mức độ bão hòa oxy** trong nước.
  - Ví dụ: Tại 25°C, lượng oxy hòa tan trong nước có thể là 3.36 mg/lit, nhưng giá trị này sẽ thay đổi khi nhiệt độ thay đổi.

- **Cường độ phun mưa:**
  - Cường độ phun là số lượng nước phun ra mỗi đơn vị thời gian, ví dụ m³/s hoặc m³/phút. Cường độ phun mưa cần phải được tính toán dựa trên lưu lượng nước (Q) và yêu cầu về độ phân tán nước trong hệ thống.
  
- **Lượng nước còn lại sau khi phản ứng hóa học xảy ra (ví dụ: Fe 2+, H2S):**
  - Các phản ứng hóa học có thể xảy ra trong quá trình phun, đặc biệt là trong các công trình xử lý nước, như sự oxy hóa của sắt (Fe 2+). Lượng nước còn lại sau các phản ứng này cần được tính toán để xác định hiệu quả xử lý.

## 4. Các công thức tính toán chi tiết trong Module 2

### 4.1. Oxy bão hòa trong nước theo nhiệt độ (C_ox)

Oxy bão hòa trong nước phụ thuộc vào nhiệt độ. Công thức tính oxy bão hòa:

$$
C_{ox} = \frac{468}{31.6 + t}
$$

Trong đó:
- \( C_{ox} \): Nồng độ oxy bão hòa trong nước (mg/l)
- \( t \): Nhiệt độ nước (°C)

**Bảng giá trị oxy bão hòa theo nhiệt độ:**
- t = 0°C: C_ox = 14.62 mg/l
- t = 10°C: C_ox = 11.25 mg/l
- t = 20°C: C_ox = 9.07 mg/l
- t = 25°C: C_ox = 8.24 mg/l
- t = 30°C: C_ox = 7.56 mg/l

**Ví dụ:**
- Với t = 25°C: C_ox = 468 / (31.6 + 25) = 468 / 56.6 = 8.27 mg/l

### 4.2. Lượng oxy cần thiết cho phản ứng oxy hóa Fe²⁺

Phản ứng oxy hóa sắt (II) thành sắt (III):

$$
4Fe^{2+} + O_2 + 10H_2O \rightarrow 4Fe(OH)_3 + 8H^+
$$

Lượng oxy cần thiết để oxy hóa 1 mg Fe²⁺:

$$
O_2 \text{ cần cho Fe}^{2+} = 0.143 \times C(Fe^{2+})
$$

Trong đó:
- \( C(Fe^{2+}) \): Nồng độ sắt (II) trong nước (mg/l)
- Hệ số 0.143: Lượng oxy (mg) cần để oxy hóa 1 mg Fe²⁺

**Ví dụ:**
- Nếu C(Fe²⁺) = 5 mg/l
- Lượng oxy cần = 0.143 × 5 = 0.715 mg/l

### 4.3. Lượng oxy cần thiết cho phản ứng oxy hóa H₂S

Phản ứng oxy hóa hydro sunfua:

$$
2H_2S + O_2 \rightarrow 2S + 2H_2O
$$

Lượng oxy cần thiết để oxy hóa 1 mg H₂S:

$$
O_2 \text{ cần cho } H_2S = 0.47 \times C(H_2S)
$$

Trong đó:
- \( C(H_2S) \): Nồng độ hydro sunfua trong nước (mg/l)
- Hệ số 0.47: Lượng oxy (mg) cần để oxy hóa 1 mg H₂S

**Ví dụ:**
- Nếu C(H₂S) = 2 mg/l
- Lượng oxy cần = 0.47 × 2 = 0.94 mg/l

### 4.4. Tổng lượng oxy cần thiết (C_ht)

Tổng lượng oxy cần thiết để xử lý nước bao gồm:
- Oxy để duy trì nồng độ oxy hòa tan trong nước (C_ox)
- Oxy để oxy hóa Fe²⁺
- Oxy để oxy hóa H₂S

$$
C_{ht} = 0.47 \times C(H_2S) + 0.143 \times C(Fe^{2+}) + C_{ox}
$$

Trong đó:
- \( C_{ht} \): Tổng lượng oxy cần thiết (mg/l)
- \( C(H_2S) \): Nồng độ H₂S trong nước (mg/l)
- \( C(Fe^{2+}) \): Nồng độ Fe²⁺ trong nước (mg/l)
- \( C_{ox} \): Nồng độ oxy bão hòa theo nhiệt độ (mg/l)

**Ví dụ tính toán:**
- Nhiệt độ nước: t = 25°C
- C(H₂S) = 2 mg/l
- C(Fe²⁺) = 5 mg/l

**Tính toán:**
1. C_ox = 468 / (31.6 + 25) = 8.27 mg/l
2. Oxy cần cho H₂S = 0.47 × 2 = 0.94 mg/l
3. Oxy cần cho Fe²⁺ = 0.143 × 5 = 0.715 mg/l
4. C_ht = 0.94 + 0.715 + 8.27 = 9.925 mg/l

### 4.5. Cường độ phun mưa

Cường độ phun mưa là lượng nước phun trên một đơn vị diện tích trong một đơn vị thời gian:

$$
C_{phun} = \frac{Q}{A}
$$

Trong đó:
- \( C_{phun} \): Cường độ phun mưa (m³/s·m² hoặc m/h)
- \( Q \): Lưu lượng nước (m³/s hoặc m³/h)
- \( A \): Diện tích bề mặt giàn phun mưa (m²)

**Chuyển đổi đơn vị:**
- Nếu Q (m³/h) và A (m²): C_phun (m/h) = Q / A
- Nếu Q (m³/s) và A (m²): C_phun (m/s) = Q / A, hoặc C_phun (m/h) = (Q × 3600) / A

**Ví dụ:**
- Q = 0.01666667 m³/s = 60 m³/h
- A = 10 m²
- C_phun = 60 / 10 = 6 m/h

### 4.6. Lượng oxy hòa tan thực tế sau phun mưa

Lượng oxy hòa tan thực tế trong nước sau khi phun mưa phụ thuộc vào hiệu suất phun:

$$
C_{thực} = C_{ox} \times \eta
$$

Trong đó:
- \( C_{thực} \): Nồng độ oxy hòa tan thực tế (mg/l)
- \( C_{ox} \): Nồng độ oxy bão hòa (mg/l)
- \( \eta \): Hiệu suất phun mưa (thường từ 0.7 - 0.9)

**Ví dụ:**
- C_ox = 8.27 mg/l (ở 25°C)
- η = 0.8 (hiệu suất 80%)
- C_thực = 8.27 × 0.8 = 6.616 mg/l

### 4.7. Lượng nước còn lại sau phản ứng hóa học

Sau khi oxy hóa Fe²⁺ và H₂S, lượng nước còn lại được tính:

**4.7.1. Lượng oxy cần cho Fe²⁺:**
- 1 mg Fe²⁺ cần 0.143 mg O₂
- Tổng oxy cần: 0.143 × C(Fe²⁺) mg/l

**4.7.2. Lượng oxy cần cho H₂S:**
- 1 mg H₂S cần 0.47 mg O₂
- Tổng oxy cần: 0.47 × C(H₂S) mg/l

**4.7.3. Kiểm tra lượng oxy có đủ không:**
- Nếu C_thực ≥ C_ht: Oxy đủ, phản ứng hoàn toàn
- Nếu C_thực < C_ht: Oxy thiếu, cần tăng hiệu suất phun hoặc giảm nồng độ chất ô nhiễm

**Ví dụ:**
- C_thực = 6.616 mg/l
- C_ht = 9.925 mg/l
- C_thực < C_ht → Oxy thiếu 3.309 mg/l
- Cần tăng hiệu suất phun hoặc giảm nồng độ Fe²⁺ và H₂S

## 5. Quy trình tính toán trong Module 2:

Module 2 sẽ thực hiện các bước tính toán sau để đạt được kết quả cần thiết:

### Bước 1: Nhận dữ liệu từ Module 1

- Lưu lượng nước Q (m³/s)
- Vận tốc dòng chảy V (m/s)
- Đường kính ống D (m)
- Hệ số Reynolds Re
- Độ nhám ống ε (m)

### Bước 2: Nhận dữ liệu đầu vào từ người dùng

- Nhiệt độ nước t (°C)
- Nồng độ Fe²⁺ C(Fe²⁺) (mg/l)
- Nồng độ H₂S C(H₂S) (mg/l)
- Diện tích giàn phun mưa A (m²)
- Hiệu suất phun mưa η (thường 0.7 - 0.9)

### Bước 3: Tính oxy bão hòa theo nhiệt độ

$$
C_{ox} = \frac{468}{31.6 + t}
$$

### Bước 4: Tính lượng oxy cần cho phản ứng

$$
O_2 \text{ cho Fe}^{2+} = 0.143 \times C(Fe^{2+})
$$

$$
O_2 \text{ cho } H_2S = 0.47 \times C(H_2S)
$$

### Bước 5: Tính tổng lượng oxy cần thiết

$$
C_{ht} = 0.47 \times C(H_2S) + 0.143 \times C(Fe^{2+}) + C_{ox}
$$

### Bước 6: Tính cường độ phun mưa

$$
C_{phun} = \frac{Q}{A}
$$

### Bước 7: Tính lượng oxy hòa tan thực tế

$$
C_{thực} = C_{ox} \times \eta
$$

### Bước 8: Kiểm tra và đánh giá

- So sánh C_thực với C_ht
- Nếu C_thực ≥ C_ht: Hệ thống đủ oxy
- Nếu C_thực < C_ht: Cần điều chỉnh thiết kế

### Bước 9: Xuất kết quả

1. Oxy bão hòa C_ox (mg/l)
2. Lượng oxy cần cho Fe²⁺ (mg/l)
3. Lượng oxy cần cho H₂S (mg/l)
4. Tổng lượng oxy cần C_ht (mg/l)
5. Cường độ phun mưa C_phun (m/h)
6. Lượng oxy hòa tan thực tế C_thực (mg/l)
7. Đánh giá: Oxy đủ hay thiếu

### Ví dụ tính toán đầy đủ

**Đầu vào:**
- Q = 0.01666667 m³/s (từ Module 1)
- t = 25°C
- C(Fe²⁺) = 5 mg/l
- C(H₂S) = 2 mg/l
- A = 10 m²
- η = 0.8

**Tính toán:**

1. **Tính oxy bão hòa:**
   - C_ox = 468 / (31.6 + 25) = 8.27 mg/l

2. **Tính oxy cần cho Fe²⁺:**
   - O₂ cho Fe²⁺ = 0.143 × 5 = 0.715 mg/l

3. **Tính oxy cần cho H₂S:**
   - O₂ cho H₂S = 0.47 × 2 = 0.94 mg/l

4. **Tính tổng oxy cần:**
   - C_ht = 0.94 + 0.715 + 8.27 = 9.925 mg/l

5. **Tính cường độ phun:**
   - Q = 0.01666667 m³/s = 60 m³/h
   - C_phun = 60 / 10 = 6 m/h

6. **Tính oxy hòa tan thực tế:**
   - C_thực = 8.27 × 0.8 = 6.616 mg/l

7. **Đánh giá:**
   - C_thực (6.616) < C_ht (9.925)
   - Oxy thiếu: 9.925 - 6.616 = 3.309 mg/l
   - **Khuyến nghị:** Tăng hiệu suất phun lên 0.95 hoặc giảm nồng độ Fe²⁺ và H₂S

---

## 6. Liên kết giữa Module 1 và Module 2:
Khi xây dựng một hệ thống web cho dự án này, việc **bàn giao dữ liệu từ Module 1 sang Module 2** là rất quan trọng. Dưới đây là các thông số cần được bàn giao giữa hai module này:

### Module 1 cần bàn giao cho Module 2:
1. **Lưu lượng nước (Q):** Module 1 tính toán lưu lượng nước với các đơn vị khác nhau như m³/ngđ, m³/h, m³/phút, m³/s. Các giá trị này sẽ được cung cấp cho Module 2 để tính toán lưu lượng nước cần thiết cho giàn phun mưa.
   
2. **Vận tốc dòng chảy (v):** Vận tốc dòng chảy tính từ lưu lượng và diện tích mặt cắt của ống sẽ được bàn giao để tính toán **cường độ phun mưa** và **hiệu quả phân tán nước** trong giàn phun.

3. **Đường kính ống (D):** Đoạn ống dẫn trong hệ thống có thể ảnh hưởng đến cường độ phun mưa, vì vậy đường kính ống cần được bàn giao để tính toán chính xác các thông số phun.

4. **Hệ số Reynolds (Re):** Các thông số về hệ số Reynolds, tính từ Module 1, sẽ giúp Module 2 đánh giá tính chất dòng chảy (laminar hay turbulent) trong hệ thống ống và giàn phun mưa.

5. **Độ nhám ống (ε):** Độ nhám của ống ảnh hưởng đến sự lưu thông của nước trong hệ thống và cần được tính toán trước khi bàn giao cho Module 2.

### Module 2 cần xử lý các thông số đầu vào và tính toán các kết quả đầu ra:
- **Lượng oxy hòa tan trong nước**.
- **Cường độ phun mưa**.
- **Lượng nước còn lại sau phản ứng hóa học** (Fe 2+, H2S).

## 7. Xây dựng giao diện web cho hệ thống tính toán tự động:
Khi xây dựng một **giao diện web** cho hệ thống tính toán tự động, cần đảm bảo rằng các **dữ liệu đầu vào từ người dùng** sẽ được nhập vào và tính toán tự động theo các công thức đã mô tả. Giao diện web sẽ nhận các thông số sau từ người dùng:

1. **Lưu lượng nước (Q)**.
2. **Đường kính ống (D)**.
3. **Nhiệt độ**.
4. **Các yếu tố hóa học liên quan đến oxy hòa tan**.

Sau đó, hệ thống sẽ tính toán **cường độ phun mưa**, **lượng oxy hòa tan** và **lượng nước còn lại** trong bể xử lý, và hiển thị kết quả trên giao diện.

## Kết luận:
Module 2 đóng vai trò quan trọng trong việc tính toán các thông số liên quan đến giàn phun mưa, đặc biệt là trong các công trình xử lý nước. Module này nhận các thông số từ Module 1 và sử dụng chúng để tính toán **lượng oxy hòa tan**, **cường độ phun mưa** và các thông số khác liên quan. Để đảm bảo tính chính xác, **Module 1** cần bàn giao các thông số như **lưu lượng nước**, **vận tốc dòng chảy**, **đường kính ống**, **hệ số Reynolds** và **độ nhám ống** cho **Module 2**.

Bằng cách này, hệ thống web sẽ hoạt động hiệu quả, giúp các kỹ sư dễ dàng tính toán và tối ưu hóa các thông số trong công trình xử lý nước.
